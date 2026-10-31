import { createHash } from 'node:crypto';
const FIELDS = ['schemaVersion','eventId','nodeId','observedAt','gatewayOk','runtimeReady','activeChatCount','source'];
const ID = /^[a-zA-Z0-9_-]{8,96}$/;
function deny(code,status=400){ return Object.freeze({accepted:false,status,code}); }
function digest(p){ return createHash('sha256').update(JSON.stringify(FIELDS.map(k=>p[k]))).digest('hex'); }

export function validateSyntheticHeartbeat(p, principal, now=Date.now()){
 if(!principal?.authenticated || !principal.organizationId || !principal.nodeId) return deny('UNAUTHENTICATED',401);
 if(principal.scope !== 'mesh:heartbeat') return deny('INSUFFICIENT_SCOPE',403);
 if(!p || typeof p!=='object' || Array.isArray(p) || Object.keys(p).some(k=>!FIELDS.includes(k)) || FIELDS.some(k=>!Object.hasOwn(p,k))) return deny('INVALID_FIELDS');
 if(p.schemaVersion!=='NodeHeartbeat.v1' || !ID.test(p.nodeId) || typeof p.eventId!=='string' || p.eventId.length<8 || p.eventId.length>128 || typeof p.gatewayOk!=='boolean' || typeof p.runtimeReady!=='boolean' || !Number.isSafeInteger(p.activeChatCount) || p.activeChatCount<0 || p.activeChatCount>100000 || !['DEMO','LAB'].includes(p.source)) return deny('INVALID_SYNTHETIC_HEARTBEAT');
 if(principal.nodeId!==p.nodeId) return deny('CROSS_NODE_DENIED',403);
 if(typeof p.observedAt!=='string' || !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d{1,3})?Z$/.test(p.observedAt))return deny('INVALID_TIMESTAMP');
 const t=Date.parse(p.observedAt);
 if(!Number.isFinite(t))return deny('INVALID_TIMESTAMP');
 if(t>now+60000)return deny('FUTURE_HEARTBEAT');
 if(t<now-120000)return deny('STALE_HEARTBEAT');
 return Object.freeze({accepted:true,status:202,organizationId:principal.organizationId,nodeId:p.nodeId,hash:digest(p)});
}
export class SyntheticMeshStore {
 #seen=new Map(); #nodes=new Map();
 ingest(p,principal,now=Date.now()){
  const v=validateSyntheticHeartbeat(p,principal,now);
  if(!v.accepted)return v;
  const key=v.organizationId+':'+p.eventId,previous=this.#seen.get(key);
  if(previous)return previous===v.hash?Object.freeze({accepted:true,status:200,code:'REPLAY'}):deny('IDEMPOTENCY_CONFLICT',409);
  this.#seen.set(key,v.hash);
  this.#nodes.set(v.organizationId+':'+v.nodeId,{observedAt:p.observedAt,gatewayOk:p.gatewayOk,runtimeReady:p.runtimeReady,activeChatCount:p.activeChatCount,source:p.source});
  return Object.freeze({accepted:true,status:202,code:'ACCEPTED'});
 }
 read(principal,nodeId,now=Date.now()){
  if(!principal?.authenticated || !principal.organizationId)return deny('UNAUTHENTICATED',401);
  const state=this.#nodes.get(principal.organizationId+':'+nodeId);
  if(!state)return Object.freeze({status:'UNKNOWN',source:'LAB',observedAt:null});
  const status=now-Date.parse(state.observedAt)>120000?'STALE':state.gatewayOk&&state.runtimeReady?'ONLINE':'DEGRADED';
  return Object.freeze({status,source:state.source,observedAt:state.observedAt,activeChatCount:state.activeChatCount});
 }
}

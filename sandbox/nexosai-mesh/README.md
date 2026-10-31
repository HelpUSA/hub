# N3 Synthetic NexosAI Mesh

Isolated Node.js test harness. All inputs synthetic. No HTTP server, no real JWT, no Google OAuth, no PostgreSQL, no AI Bridge, no payment or live customer data.
- The principal is a simulated trusted identity with organization and node scope, NOT a real authentication verifier.
- Unexpected fields (including phone, content, ipAddress, externalId and commands) fail closed.
- DEMO and LAB only; LIVE events are explicitly refused.
- Same eventId and same payload: idempotent replay; changed payload: conflict. This is in-memory only and not durable.
- Missing nodes return UNKNOWN, stale nodes return STALE. A fresh synthetic LAB heartbeat returning ONLINE is not a statement about real service status.
- Production adaptation requires durable replay store, verified identity, RBAC, rate limiting, retention, QA and explicit authorization.

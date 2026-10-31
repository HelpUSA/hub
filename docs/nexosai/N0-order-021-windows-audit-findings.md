# Ordem 021 — Relatório de reconciliação N0 NexosAI/HelpUS Admin (Windows + GitHub)

**Data:** 2026-10-31  
**Correlation ID:** `HU-HUB-NEXOSAI-N0-WINDOWS-INVENTORY-20261031-021`  
**Estado:** `NEXOSAI_N0_INVENTORY_COMPLETED_CRITICAL_FINDINGS_REGISTERED`  
**Proveniência:** evidências de host fornecidas pelo Antigravity; evidências GitHub verificadas diretamente pelo ChatGPT. **Nenhum teste de conectividade live, autenticação real, deploy ou migração executado neste trabalho.**

## 1. Correção de proveniência de repositório (bloqueio de governança)

**Workspace Windows efetivo:** `D:\AntiG\nexosai`, `origin=https://github.com/HelpUSA/nexosai-frontend.git`, `main`, HEAD `b73bc1353175ee85c3110f5eaaf73f9a2a09cd5a` (sincronizado com `origin/main`, conforme relatório Windows). O GitHub confirma que essa branch/commit existem.

**Repositório arquitetural antes inspecionado:** `HelpUSA/nexosai`, branch default `main`, HEAD `eaabb4a401cd05fd5b94abb1207d6af286736095`. **É outro repositório.** A documentação original N0 usou este repositório como exemplo, mas não pode tratá-lo como equivalente ao workspace/versão auditada pelo Antigravity.

**Atenção adicional:** o GitHub de `HelpUSA/nexosai-frontend` informa como branch **default `master`** (HEAD observado `934fe42131baefdac28b0fffe4285ce0312c0b96`), embora o Antigravity opere a branch `main`. Próximas revisões, PRs e deployment checks deverão fixar **repositório, branch, commit e target de deploy** para evitar construir a versão errada. **Sem autorização para alterar branch default.**

| Componente | Repositório/ref auditado | Resultado |
| --- | --- | --- |
| NexosAI frontend Windows | `HelpUSA/nexosai-frontend@main:b73bc135` | Confirmado pelo Antigravity e GitHub; docs/ e vercel.json não rastreados localmente, não perder |
| NexosAI homônimo | `HelpUSA/nexosai@main:eaabb4a4` | Distinto; não assumir paridade nem sincronismo |
| HelpUS Admin | `HelpUSA/helpus-admin@master:6cf22142` | Alinhado ao Windows, mas há mudanças locais em headers e `.gitignore`; preservar |
| AI Bridge Local | `HelpUSA/ai-bridge-local@a9797815` | SHA informado por Antigravity, sem modificação local autorizada |
| HUB docs PR | `HelpUSA/hub` Draft PR #11, início `c86a66e4` | N0 arquitetura/contratos, não runtime |

## 2. Resultados auditados

**NexosAI:**
- Next.js App Router + NextAuth/Google e schema Prisma com User, Organization, Node, Agent, Conversation, Message, Document, Embedding, AuditLog e enums relacionados. **Modelos não são garantia de persistência nem isolamento por tenant.**
- Conforme inventário Windows, **não existe `prisma/migrations`, nem `.env` local configurado**. Não migrar banco, não usar `prisma db push` em nenhum banco real.
- `src/app/api` somente contém `auth/[...nextauth]/route.ts`; endpoints `/api/nodes`, `/api/agents`, `/api/conversations` e BFF Mesh ainda não existem.
- **Achado de segurança confirmado no GitHub:** `src/app/api/auth/[...nextauth]/route.ts` usa `process.env.AUTH_SECRET || <literal embutido>` (valor deliberadamente omitido neste relatório). Há também uma configuração `src/auth.ts` com secret apenas em variável ambiente, **duas fontes de configuração que devem ser reconciliadas** antes de integração.
- Handler Google atual restringe login a lista estática de emails. Isso **não constitui autorização por empresa**: não há `organizationId`/role verificados em sessão e a autorização não está ligada aos relacionamentos Prisma. `src/middleware.ts` simplesmente retorna `NextResponse.next()`, sem controle de acesso. **Acesso a áreas privadas e credenciais requerem revisão específica**.
- Conforme Antigravity, páginas nodes/admin/dashboard/conversations/status/projects usam dados fixos; agents/audit têm fallback sintético que pode disfarçar falha real de DB. Não mostrar como LIVE sem proveniência.

**HelpUS Admin:**
- Indicadores, subdomínios, uptime, latência, leads e agentes na `src/App.tsx` são **valores estáticos**; não há pipeline de monitoramento real nesse build. Risco de interpretação como atividade ao vivo.
- Modificações locais preexistentes `vercel.json` e `.gitignore` no host Windows devem ser preservadas, sem overwrite pelo ChatGPT/Antigravity.

**AI Bridge Local:**
- Auditoria Windows reporta bind exclusivo `127.0.0.1:8765/8766`, sem `0.0.0.0` nem túnel/reverse shell/cloud inbound; este resultado é afirmação do relatório do Antigravity, **não um teste independente de rede feito pelo ChatGPT**.
- O desenho do futuro NexosAI deve manter conexão iniciada pelo nó local (**outbound**) e autorização explícita; não reclassificar gateway como endpoint público.

## 3. Bloqueios de segurança e sequência de correções

| Prioridade | Achado | Critério para resolução | Responsável técnico |
| --- | --- | --- | --- |
| P0-A | Segredo de fallback embutido na rota Auth | Remover fallback em PR Draft isolado; falhar fechado sem secret; plano de rotação/revogação se algum ambiente usou a chave; tests negativos | ChatGPT (GitHub), sujeito a autorização de alteração de runtime |
| P0-B | Middleware permissivo / falta de autorização RBAC e organização | Rotas privadas protegidas server-side, sessão verificada, membership/role derivados de fonte confiável, cross-org 403/404, autorização testada | ChatGPT em PR Draft futuro; Antigravity QA |
| P0-C | Mock de health/uptime/leads exibível como real | Selo permanente `DEMO`; ausência da API resulta `UNKNOWN`, jamais `ONLINE` por fallback | ChatGPT em PR Draft futuro com autorização |
| P0-D | Branch/repo ambíguos: `nexosai` vs `nexosai-frontend`; default master vs operacional main | Fixar repo/ref/SHA e destino de deploy; registrar proprietários; sem force push/alteração de default branch | ChatGPT docs; Antigravity confirmação |
| P1-A | Schema Prisma sem migrations e .env no workspace | Migrations somente em DB descartável, review SQL, rollback, tenant-scope tests; sem DB real | ChatGPT/Antigravity após autorização |
| P1-B | Dados de agents/audit com fallback silencioso | Proveniência `DEMO/LAB/LIVE`; falha LIVE = `UNKNOWN` ou erro claro, sem mistura silenciosa | ChatGPT após autorização |
| P1-C | JSX build_036.log antigo relata erros | Rodar CI isolado no commit correto, `npm ci`, `npm run build`, sem alterações locais; não inferir erro atual de log histórico | ChatGPT GitHub/Antigravity Windows |

## 4. Parecer formal N0

**N0 inventário/documentação:** materialmente concluído com evidências e divergências registradas. **N1/N2/N3 implementações não iniciadas**; primeiro resolver a proveniência de repos e o risco de Auth + sinalização DEMO. O PR #11 é documentação de arquitetura e deve continuar **Draft**.

Status `NEXOSAI_MESH_N0_INVENTORY_COMPLETED_BLOCKED_ON_SECURITY_DESIGN`. Mantidos `G3B_APPROVED_SANDBOX_ONLY` e `G3C_NOT_AUTHORIZED` para Zap Pro. Sem autorização de deploy, merges, mudanças de ambiente, uso de dados/clientes reais ou execução de node remoto.

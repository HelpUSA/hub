# Ordem 024 — Parecer de segurança NexosAI, confronto com GitHub e plano de aceite

**Data:** 2026-10-31  
**Origem:** Antigravity, `HU-HUB-CHATGPT-ORDER-024-20261031` / `HU-HUB-NEXOSAI-SECURITY-PLAN-20261031-024`  
**Escopo:** planejamento somente leitura, sem autorização para mudanças de runtime.  
**Ref canônico:** [HelpUSA/nexosai-frontend](https://github.com/HelpUSA/nexosai-frontend) `main@b73bc1353175ee85c3110f5eaaf73f9a2a09cd5a`.

## 1. Constatações técnicas conferidas

| Achado | Evidência GitHub | Tratamento |
| --- | --- | --- |
| NextAuth fallback inseguro | `src/app/api/auth/[...nextauth]/route.ts`: segredo hardcoded de fallback quando `AUTH_SECRET` falta; credenciais Google demo de fallback. **Valores deliberadamente não reproduzidos aqui.** | P0, substituir por configuração fail-closed. Avaliar rotação de qualquer segredo já usado em ambiente exposto. |
| **Divergência concreta de major NextAuth** | `package-lock.json` bloqueia **next-auth 4.24.14**, mas `src/auth.ts` utiliza convenção **NextAuth v5**: `const { handlers, auth, signIn, signOut } = NextAuth(...)`. A rota existente usa forma v4 `const handler=NextAuth(...)`. | **P0: selecionar e fixar uma versão/estratégia canônica antes de escrever middleware, callbacks ou adapter.** Não presumir que `getToken` e retorno de `auth()` sejam intercambiáveis. Evitar dependências `latest` como política. |
| Env com nome divergente | `.env.example` registra `NEXTAUTH_SECRET`, enquanto código runtime usa `AUTH_SECRET`. | Escolher uma única chave canônica com política explícita de compatibilidade/migração; se ambas presentes com valores distintos, fail-closed. Não registrar valores. |
| Falsa expectativa de membership por organização | `prisma/schema.prisma` possui `User.role` global, mas **não possui `User.isActive`**, `User.organizationId` ou `Membership` entre `User` e `Organization`. | **P0/P1 de desenho:** é impossível obter com segurança organização/role de membership do schema atual. Projetar `OrganizationMembership` (userId, organizationId, role, status) + índices e autorização server-side antes de emitir claims reais. A coluna global `User.role` não representa um role por empresa. |
| Middleware sem enforcement | `src/middleware.ts` apenas `NextResponse.next()`; matcher inclui dashboard/admin. | P0: negar acesso sem sessão válida a rotas privadas **e** conferir membership/role em Server Components e Route Handlers. Middleware isolado não substitui backend authz. |
| APIs Mesh e migrations inexistentes | Conforme Antigravity/Ordem 021; schema Prisma não garante persistência ou isolamento. | Somente design e mocks; migrações em DB descartável sob autorização de implementação separada. |
| Frontends demonstrativos | Arrays fixos em NexosAI e HelpUS Admin; fallback sintético de agents/audit. | P0/P1: selo DEMO inequívoco; nunca exibir uptime/ONLINE falsos como observação. UNKNOWN quando fonte LIVE ausente. |
| JSX histórico | `build_036.log` refere falha; não é prova de que o commit atual está quebrado. | Validar em CI/clone descartável antes de editar; não corrigir sintaxe sem reproduzir falha. |
| i18n | `src/i18n/translations.ts` tem `TranslationSchema` PT/EN/ES. | Atualizações de DEMO/UNKNOWN exigem keys e typecheck nos 3 idiomas. |

## 2. Ordem de trabalho mais segura (somente proposta)

**N1-A: Auth fail-closed em PR Draft isolado, após aprovação para alterar runtime**
1. Fixar dependências e versão NextAuth (v4 conforme lockfile atual **ou** migração deliberada e testada para v5). Escolher UMA configuração e UMA rota real; eliminar divergências.
2. Não usar segredo/credencial demo, nem em staging; ausência/má configuração deve impedir autenticação. `AUTH_SECRET` vs `NEXTAUTH_SECRET`: documentar precedência ou convergência e rejeitar conflito.
3. Design do bootstrap admin não é allowlist irrestrita: identidade verificada + aprovação inicial única + auditoria/revogação + gestão de memberships. Não habilitar acesso global apenas pelo email bootstrap.
4. Testes unitários `node --test` com configuração sintética e casos ausente, placeholder, segredo conflitante, env válido, issuer/audience/sessão expirada quando aplicável.
5. CI em clone isolado: `npm ci`, `npm audit --audit-level=moderate`, `npm run build`. Se resultados não verdes, PR permanece Draft.

**N1-B: Autorização tenant/RBAC (novo PR Draft, dependente do N1-A)**
1. Schema proposto `OrganizationMembership` com chave `(userId, organizationId)`, role **por organização**, status e audit trail. Política de múltiplas organizações deve selecionar tenant explicitamente *dentro dos memberships autenticados*, nunca por query sem validação.
2. Para simulador, usar Prisma mock sem DB real; migrations só em PostgreSQL descartável depois de gate específico.
3. Proteção server-side das páginas e de cada futura API/handler. `401` para APIs sem credencial, `302` para páginas web anônimas; `403` para role/tenant inválido, `404` quando recurso ocultado para reduzir enumeração. Proteção middleware adicional, não única.
4. Cobertura: cross-org read/write inclusive nested `Message -> Conversation`, `Embedding -> Document`, além de Node, Agent e AuditLog. Usuário sem membership nunca recebe claim de org, ADMIN global explícito/auditado.

**N2-A: Transparência dos mock datasets no Admin (PR Draft independente)**
1. Sempre mostrar selo legível `DEMO / DADOS SINTÉTICOS`; métricas estáticas e leads sintéticos não podem ser percebidos como fatos.
2. Rebaixar status de subdomínio sem sensor para `UNKNOWN` e latência/uptime para indisponível/não mensurado. Manter dados fictícios para demonstração apenas identificados.
3. NexosAI nodes/status/dashboard/agents/audit: adicionar provenance `DEMO|LAB|LIVE` e keys PT/EN/ES; `lastSeenAt` stale é regra proposta (90/120s ainda a harmonizar), não evidência de monitoramento.
4. Regressões: `npm ci && npm run build` em CI e revisão visual desktop/mobile. Nenhuma conexão live.

**N3/N4:** Validadores de NodeHeartbeat sintético com autenticação e idempotência; então QA independente Windows e design review. Sem conexão outbound real de nós nem cobrança.

## 3. Riscos e critérios de aceite transversais
- Nenhuma alteração no workspace `D:\AntiG`; preservar as mudanças preexistentes `helpus-admin/vercel.json` e `.gitignore`, bem como os untracked NexosAI.
- `HelpUSA/nexosai-frontend` tem branch GitHub default `master` mas o commit auditado está na `main`; qualquer futuro PR deve declarar `base=main` explicitamente (sob revisão), e CI fixar SHA.
- **Nunca publicar token, credencial, segredo de fallback ou valores reais em Issue, PR, testes/logs**; mostrar somente classe do erro.
- Risco de sessão forjada não deve ser confundido com exploit real demonstrado; **não foi feito pentest de produção**. Plano de rotação sob eventual exposição/uso da chave precisa de inventário controlado.
- `node --test` puro cobre validadores/guards, mas **não garante** integração NextAuth/Next.js; é necessário teste de integração e build da versão fixada.
- Nenhuma alteração runtime foi aprovada por este parecer. PRs posteriores de código precisam de escopo autorizado; permanecem **Draft sem merge/deploy**.

**Decisão:** `NEXOSAI_SECURITY_PLANNING_024_REVIEWED_P0_DESIGN_ACTIONS_PENDING_AUTHORIZATION`. Issue HUB #10 e PR Draft HUB #11 continuam fontes documentais. `G3B_APPROVED_SANDBOX_ONLY` e `G3C_NOT_AUTHORIZED` inalterados para Zap Pro.

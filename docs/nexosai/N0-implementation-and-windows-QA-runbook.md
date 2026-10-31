# NexosAI Mesh — plano de execução, inventário Windows e critérios de QA

**Referência:** [HUB #10](https://github.com/HelpUSA/hub/issues/10), ADR-020 e `contracts/mesh-controlplane.openapi.yaml`.  
**Escopo atual:** arquitetura/contratos **Draft**; execução local Antigravity limitada a leitura/auditoria não destrutiva. Nenhum deploy, alteração no Windows, integração com produção ou G3-C do Zap Pro autorizado.

## 1. Entregas por executor

| Passo | ChatGPT (GitHub) | Antigravity (Windows `D:\AntiG`) | Evidência de saída |
| --- | --- | --- | --- |
| N0.1 | Inventariar `HelpUSA/nexosai`, `helpus-admin`, `hub`; registrar hipóteses | Comparar SHAs locais remotos, branch dirty, diffs sem segredos | `git status`, `git rev-parse HEAD`, compatibilidade |
| N0.2 | ADR, OpenAPI 3.1 e runbook em PR Draft | Confirmar com precisão rotas reais (se houver), Graph of dependencies, NextAuth config e Prisma migrations | Matriz implementado vs proposto |
| N0.3 | Definir modelo de privacidade/tenant | Auditar endpoint 8765 em localhost **sem abrir porta** e sem transmitir segredos/payload | Bind address, saúde somente leitura, processos |
| N0.4 | Revisar LGPD e threat model e documentação | Revisar Admin atual quanto a números falsamente exibidos como reais; build apenas se ambiente permitir sem alterações | Evidência de tela/arquivo sanitizada |
| N1 | Futuro PR Draft de validador e eventos sintéticos | Testes de recepção sob porta efêmera e dados fictícios após ordem específica | CI green, 401/403/409, replay |
| N2 | Futuro PR Draft de UI Admin read-only; sinalizar `DEMO/LAB/LIVE` | QA visual/funcional no Windows de build local sem publicações | UNKNOWN em API indisponível |
| N3 | Futuro PR de integração entre dados sintéticos | QA cross-repo em clones isolados | Sem PII, sem chamadas reais |
| N4 | Revisão de segurança independente | QA Windows, threat model, riscos | Nova autorização explícita |

## 2. Checklist não invasivo Antigravity

**Diretórios declarados (confirmar antes de usar):**
- `D:\AntiG\nexosai` — projeto Next.js/Prisma
- `D:\AntiG\helpus-admin` — admin SPA
- `D:\AntiG\ai-bridge-local` — gateway, **não** alterar configurações/rotas
- `D:\dev\AntiG` — somente se caminho existir e explicitamente associado ao projeto

**Apenas inspeção:**
1. `git -C D:\AntiG\nexosai rev-parse HEAD`, `git status --porcelain`, `git remote -v` com URLs sanitizadas.
2. Listar `package.json`, `prisma/schema.prisma`, `src/app/api`, `src/middleware*`, `prisma/migrations`; marcar **ausente** quando inexistente; não criar arquivos.
3. Verificar o endereço de bind do AI Bridge: se `127.0.0.1:8765`, isso é rede local da máquina e não endpoint consumível pelo NexosAI Cloud. Não abrir firewall, reverse tunnel ou exposição pública.
4. Comparar com GitHub `HelpUSA/nexosai` (branch main), `HelpUSA/helpus-admin` (master). Não sobrescrever mudanças locais.
5. Inspecionar mecanismos reais de sign-in, autorização por organização, API de status, callback, métricas e logs; diferenciar mock/placeholder de rotas implementadas e seguras.
6. Registrar se `HelpUS Admin` possui backend seguro/BFF: `src/App.tsx` do GitHub atual usa arrays hardcoded, não sensor de produção. Não afirmar métricas LIVE sem fonte.
7. Testar `npm run build` apenas se dependências já estiverem instaladas e build não tocar DB/serviços/produção; caso contrário, registrar bloqueio e aguardar autorização de ambiente temporário.
8. Relatar somente resultados sanitizados (omitir tokens, emails pessoais, endereços privados, nomes/telefones reais, IDs de sessão e conteúdo de mensagens).

## 3. Matriz de ameaça N0/N1

| Ameaça | Mitigação mínima proposta | Teste negativo |
| --- | --- | --- |
| Tenant takeover via `organizationId` forjado | Derivar org do principal autenticado | Tenant A token → tenant B node: 403/404 |
| Falso ONLINE após timeout | TTL e provenance; UNKNOWN/STALE em erro | Desligar fixture / expirar clock: nunca ONLINE |
| Replay/collision heartbeat | Idempotência por `eventId` e hash do payload | Duas cargas diferentes com mesmo eventId → 409 |
| Token roubado ou expirado | Exp/issuer/audience/escopo/rotação/revogação | JWT sem escopo ou expirado: 401/403 |
| SSRF / exposed gateway | Cloud outbound-only, sem URLs arbitráveis de node | Endereços RFC1918/localhost em controle remoto → rejeitar |
| PII em métricas | Allowlist de campos agregados, `additionalProperties: false` | `content`, `phone`, `ipAddress`, `externalId` → rejeitar |
| RAG/Message cross-org | Autorização transitiva em joins e migrations | Doc A/Message A por tenant B → 403/404 |
| Vazamento na auditoria | Log estruturado sem payload bruto | Verificar que token/telefone não aparecem em logs |
| Métricas imaginárias | `DEMO/LAB/LIVE` e `observedAt` explícitos | API indisponível não exibe percentuais ONLINE |
| Comando remoto indevido | Nenhuma rota shell/exec/file patch em N0–N2 | Testes garantem ausência de comando remoto |

## 4. Acceptance gates para PRs futuros

- Toda API deve publicar contrato versionado e exemplos **sintéticos**, limites de corpo, throttling, monotonicidade temporal e tratamento 429/5xx.
- Toda consulta de organização deve ser verificada em código e testada no ORM / SQL. O modelo Prisma isoladamente não é garantia de tenant isolation.
- Auth de Google/NextAuth é identidade de login; precisa **autorização por organização** e vínculo de usuário antes de acesso a nodes/conversas.
- O `Admin` deve consumir `/v1/mesh/admin/*` via BFF/autorização; sem CORS público irrestrito, tokens em localStorage ou bypass por query string.
- Health inclui `lastSeenAt`, `source`, `observedAt` e `status UNKNOWN` no erro. Nenhuma latência/uptime hardcoded será apresentada como medição.
- Pay `UsageAggregate` não é cobrança. Faturamento exige critérios financeiros independentes, contratos bancários e autorização expressa.
- Zap Pro não transmite `Message.content`, `Conversation.externalId` ou identificadores de WhatsApp por default.
- Todos os novos PRs DEVEM ser Draft, sem merge/deploy. QA e decisão de gate permanecem independentes.

## 5. Relato esperado Antigravity

Enviar para canal `helpus-hub`: correlação `HU-HUB-STRATEGY-NEXOSAI-INTEGRATION-20261031-020`, hostname/versões somente quando não sensíveis, SHAs, paths inspecionados, `NODE_BROADCAST_ACCESS_NOT_TESTED` se não houver credenciais, matriz implementado vs mock vs ausente, riscos P0/P1, evidências sanitizadas e conclusão de N0. Não criar estrutura no host nem abrir portas nesta ordem.

**Status final desta documentação:** `NEXOSAI_MESH_N0_DOCS_DRAFT_PENDING_WINDOWS_INVENTORY`.

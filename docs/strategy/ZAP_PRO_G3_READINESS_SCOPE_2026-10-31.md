# Ordem 011 — Preparação documental do Gate G3 (sem autorização de piloto)

**Data:** 31/10/2026. **Origem:** G2 aprovado exclusivamente em sandbox local, [HUB #8](https://github.com/HelpUSA/hub/issues/8). **Item de governança:** [HUB #9](https://github.com/HelpUSA/hub/issues/9).

## Escopo autorizado nesta ordem
Somente **auditoria read-only, planejamento, especificações, matrizes de risco, desenho de testes e documentação em branch isolada com PR Draft**. Não implementar integração real, nem criar recursos externos, credenciais, deployments, bancos reais ou jobs operacionais. A publicação de documentos sanitizados em branch Draft já segue o padrão de governança vigente, sem merge.

## Entregáveis obrigatórios para avaliação futura
1. **Inventário de integrações:** mapear os contratos de `helpus-auth`, `helpus-pay`, `helpus-whatsapp-ia`, `hub` e os componentes relacionados, distinguindo código remoto verificado, local e planejado. Registrar pontos de confiança, branches, deployments e owners sem expor dados sensíveis.
2. **Contrato API cross-service proposto:** OpenAPI v0 documentando `POST/GET/cancel` de cobrança, callbacks assíncronos, idempotency keys, `tenantId`, `orderId`, `txid`, `eventId`, assinatura HMAC e erro tipado. Explicitar que o G2 testou mock **dentro do WhatsApp IA**, e não chamada HTTP ao serviço `helpus-pay`.
3. **Autorização e isolamento:** modelo de derivação de tenant exclusivamente do servidor, permissões de operador/cliente/serviço, vínculo charge-order-tenant, prevenção de IDOR e matriz de autorização (permissões e negações).
4. **Persistência e transações (desenho):** proposta de store durável de sessões, pedidos, cobranças, consentimento, eventos e mensagens; transição atômica, unicidade, inbox/outbox, replay, TTL, eventos fora de ordem, restart, cancelamento em corrida e rollback. Sem provisionar banco nesta ordem.
5. **Segurança e LGPD:** threat model, limites de payload, timeout, rate limiting, roteamento em loopback, proteção dos segredos, lifecycle de credenciais, logging e retenção, opt-in/opt-out, política Meta e análise de conformidade; TTS opcional com licenciamento ainda pendente.
6. **Matriz de testes futuros:** unitários/contrato/integração cruzada/E2E sintéticos negativos para cross-tenant, preço, cancelado/expirado, duplicado, concorrência, HMAC, token inválido, crash e restart, fluxos de fallback/handoff, e política de deploy. Definir evidências verificáveis por SHA e critérios de rollback.
7. **Plano faseado + estimativa de esforço, custo e riscos:** sequenciar G3-A (design/contratos), G3-B (integração de mocks sob nova autorização), G3-C (piloto controlado somente sob aprovação expressa). Propor lista de condições GO/NO-GO, sem declarar pronta nenhuma etapa futura.
8. **Higiene Git e proteção:** diagnosticar branch padrão do repo privado `helpus-whatsapp-ia` que permanece apontando para feature, e propor migração protegida para `main`. Não alterar settings sem autorização separada.

## Evidência e aceite
Um único **relatório substancial** contendo caminhos, links das issues/PRs, diferenças entre AS-IS e TO-BE, critérios claros e bloqueadores remanescentes. Branch de documentação isolada e PR Draft, sem merge. **Status inicial: `G3_PLANNING_ONLY`; Gate G3 não iniciado operacionalmente nem homologado.**

## Proibições
- Sem merge, deploy, mudanças em produção, criação/provisionamento de infraestrutura, mudança de branch padrão, exposição de endpoint público, upload de segredos, login em contas externas, mensagens WhatsApp reais, PIX/PSP, clientes/PII reais ou ativação de monetização.
- Sem reaproveitar segredos fixos da suíte G2 como autenticação real.
- Não tratar `DELIVERED_TO_AGENT` como `PROCESSED_BY_AGENT` sem resposta substantiva correlacionada.
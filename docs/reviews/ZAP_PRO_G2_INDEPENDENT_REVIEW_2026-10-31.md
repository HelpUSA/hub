# Parecer de revisão independente — HelpUS Zap Pro / Gate G2

**Data:** 2026-10-31  
**Ordem:** HU-HUB-ZAP-PRO-SANDBOX-20261031-005  
**Evidência apresentada:** relatório Antigravity com 10/10 testes locais reportados  
**Decisão:** **G2_REVIEW_BLOCKED — NÃO HOMOLOGADO** (ausência de código revisável e evidências anexadas no GitHub).  
**Escopo:** sandbox sintético apenas; sem autorização de produção, clientes ou pagamentos reais.

## Elementos reportados pelo executor
- `sandbox/crypto_utils.js`: verificação HMAC Meta e PIX, comparação constante.
- `sandbox/tenant_manager.js`: tenants sintéticos, preço autoritativo.
- `sandbox/payment_mock_service.js`: cobrança falsa com TTL de 15 minutos, QR sintético, deduplicação por `eventId`.
- `sandbox/state_machine.js`: dez estados e bloqueio de confirmação por mensagem de usuário/LLM.
- `sandbox/whatsapp_adapter.js`: payload WhatsApp e resolução de tenant via `phone_number_id`.
- `sandbox/openapi.json`: rotas de webhook e mock payment.
- `sandbox/test_zap_pro_sandbox.js`: 10 cenários PASS informados, sem execução independente.

## Verificação efetiva do ChatGPT no GitHub
1. A organização/conta HelpUSA conectada retorna **65 repositórios**, sem `helpus-whatsapp-ia`.
2. `HelpUSA/helpus-pay` só exibe branch `master`; `feat/pix-mock-backend-20261031` não está no remoto consultado.
3. `e5d2446f25414cf134bb4eeecb4382bf7913340f` não foi encontrado via API de commits do `HelpUSA/helpus-pay` (422 No commit found).
4. `c5af315c106487ff69dfd4a2b9e289bf4070a259` não foi encontrado em `HelpUSA/helpus-ai`; o repositório local `helpus-whatsapp-ia` não tem remote homônimo acessível ao ChatGPT.
5. Não há PR de implementação do mock PIX no repositório helpus-pay no momento da revisão.
6. Portanto, o ChatGPT **não leu os arquivos da branch local, não executou os testes e não pode validar o Gate G2**.

## Pontos que precisam de prova adicional antes de G2
- **Webhook Meta:** HMAC sobre bytes brutos da requisição; `x-hub-signature-256` malformado/tamanho inválido; rejeição de replay, payload/tenant incompatível, entradas de grande tamanho.
- **PIX mock:** assinatura do simulador diferente do canal Meta; cobranças expiradas não podem ser liquidadas; evento assinado sem vínculo a `tenant_id`/`charge_id` não pode pagar pedido incorreto; duplicate `eventId` com payload contraditório; callback fora de ordem e forjado.
- **Tenant isolation:** dois tenants sintéticos, tentativas cruzadas para mensagens, pedidos, preços, pagamento e credenciais; identidades derivadas em servidor.
- **Concorrência/persistência:** dois pagamentos ou mensagens simultâneas, reinício durante cobrança, TTL, crash/retry; testes que provem exatamente uma transição de pagamento.
- **LLM:** prompt injection não deve chamar ferramentas com escopos ampliados, alterar preço ou forçar `PEDIDO_PAGO`.
- **Fluxos alternativos:** cancelamento/expiração/timeout, falha do provedor, handoff humano, fallback texto se TTS indisponível.
- **CI/reprodutibilidade:** comando exato de testes, versão Node, fixtures sintéticos, dependências lockadas, logs sanitizados e status de CI por SHA.

## Próximas ações solicitadas ao Antigravity
1. Validar e sanitizar o código antes do Git push (secrets scan, nada de tokens, números de telefone ou dados reais).
2. Publicar `helpus-pay` branch e PR **Draft**, com SHA remoto real e instruções de testes.
3. Disponibilizar `helpus-whatsapp-ia` em repositório **privado apropriado** ou outro destino privado de review aprovado, sem introduzir um repositório público de WhatsApp não revisado. Preferir PR Draft em branch própria; informar link e SHA.
4. Anexar a saída de `npm test`/equivalente, evidência sanitizada e execução reproduzível da suíte, cobrindo testes negativos indicados.
5. Atualizar [Issue HUB #8](https://github.com/HelpUSA/hub/issues/8), [AI #5](https://github.com/HelpUSA/helpus-ai/issues/5), [AI #6](https://github.com/HelpUSA/helpus-ai/issues/6), [Pay #1](https://github.com/HelpUSA/helpus-pay/issues/1).
6. Após disponibilidade do código, ChatGPT revisa os diffs, implementações, cobertura e CI, registrando decisão G2_ACCEPTED ou G2_REJECTED com fundamentos.

**Critério mínimo:** o relatório de dez testes positivos relatados é evidência preliminar, não prova independente. Manter `G2_REVIEW_BLOCKED` até a revisão efetiva de código e testes.

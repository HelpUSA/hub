# HUB HelpUS — Plano Diretor de Integração e Comercialização

**Ordem:** HUB-HELPUS-001  
**Data:** 2026-10-31  
**Status:** Proposta para revisão técnica e comercial  
**Fonte:** Handoff Antigravity (auditoria local reportada de 92 projetos); validação GitHub ChatGPT (65 repositórios acessíveis). As contagens não têm necessariamente a mesma unidade.

## Decisão de governança
O HUB coordena produtos comerciais; não substitui os repositórios de cada aplicação. ChatGPT cuida de inventário, arquitetura, backlog e revisões no GitHub. Antigravity cuida de auditoria local, implementações, build/test/deploy e infraestrutura. Nenhuma mensagem constitui aprovação de deployment, merge ou alteração de produção.

## Produtos-alvo e repositórios
| Produto | Repositórios confirmados | Dependências a validar | Gate de lançamento |
|---|---|---|---|
| Zap Pro | helpus-ai, helpus-voice, helpus-pay, helpus-crm | implementações WhatsApp do workspace local, política de API, consentimento | Canal em conformidade, fluxo ponta a ponta seguro, isolamento de clientes |
| Imob 360 | realestate, danyimoveisjp, plural_locacoes | catálogo, CRM e integrações de agenda | permissões por imobiliária, origem dos dados, LGPD |
| FBA Master Suite | helpus-fba-suite | Seller Central e regras de fees atuais | resolver blockers P0 existentes e validar dados persistidos |
| MedTech / Educação | usmle, vivasuacura, cardio | nomes locais AIDoctor/cardioia, análise regulatória | separar educação de clínica; revisão profissional e LGPD |

## Hipóteses, não fatos confirmados
- A principal restrição comercial pode ser packaging e distribuição. Requer entrevistas, dados de funil e métricas reais para validação.
- A ordem sugerida para pilotos é Zap Pro → Imob 360 → FBA Master → MedTech, sujeita a custo, segurança e validação comercial.
- A documentação README de alguns repositórios ainda apresenta scaffolding genérico; maturidade de produção não deve ser inferida apenas da existência de código.

## Backlog inicial
- [HUB-001: inventário e classificação](https://github.com/HelpUSA/hub/issues/1)
- [HUB-002: arquitetura SaaS](https://github.com/HelpUSA/hub/issues/2)
- [HUB-003: go-to-market](https://github.com/HelpUSA/hub/issues/3)
- [HUB-004: quality gates](https://github.com/HelpUSA/hub/issues/4)
- [HUB-005: AI Bridge handoff](https://github.com/HelpUSA/hub/issues/5)
- [ZAP-PRO-001](https://github.com/HelpUSA/helpus-ai/issues/4)
- [IMOB-360-001](https://github.com/HelpUSA/realestate/issues/1)
- [FBA-COMM-001](https://github.com/HelpUSA/helpus-fba-suite/issues/4)
- [MEDTECH-001](https://github.com/HelpUSA/usmle/issues/1)

## Etapas de execução (gates, sem datas artificiais)
1. **G0 Inventário** — reconciliação dos ativos locais e GitHub, dependências e ownership.
2. **G1 Arquitetura** — ADR de tenancy/auth/billing e controles de segurança.
3. **G2 Demo sandbox** — contratos de API, funcionalidade comprovada, custos por tenant.
4. **G3 Piloto consentido** — entrevistas, métricas de sucesso, suporte e rollback.
5. **G4 Lançamento** — P0 fechados, compliance, pricing, onboarding, observabilidade e go/no-go documentado.

## Registro e sincronização
Cada issue é a fonte de verdade para status no GitHub; relatório local do Antigravity deve referenciar URL e correlation_id. A integração da AI Bridge na porta 8766 precisa de teste real de entrega, ACK e retorno. A presença de issues no GitHub **não** equivale à entrega ao Antigravity.

## Não-regressão
Não executar merges ou deploys automaticamente; não interferir nos PRs abertos de segurança do helpus-ai, helpus-support e nos bloqueadores do helpus-fba-suite. Não incluir segredos, dados pessoais, dados clínicos ou detalhes exploráveis em documentos públicos.

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


## Atualização — ACK Antigravity, Ordem 001 (2026-10-31)
**Fonte:** relatório enviado pelo agente local Antigravity via AI Bridge Local (porta 8766, registro 25435). Os números abaixo são **declarações da auditoria local do agente**, não revalidação independente pelo ChatGPT no Windows.

- 93 diretórios locais examinados, incluindo projetos e pastas auxiliares; a contagem anterior de 92 projetos era uma classificação diferente, não uma divergência resolvida por suposição.
- 61 repositórios locais mapeados 1:1 com remotos GitHub HelpUSA; 4 repositórios GitHub sem clone local; 32 diretórios locais adicionais, abrangendo tooling, testes, soluções de clientes e componentes locais.
- O relatório local registra `git fetch origin` em `D:\AntiG\helpus`, revisão conceitual do commit `8d1779d403b795bc60f4f8d72bdf3c0175212821` e ACK da sessão preservada. **A revisão conceitual não substitui aprovação formal do PR no GitHub.**
- A conciliação G0 fica em andamento até a entrega de matriz auditável por caminho, repositório, categoria, domínio e status de sincronização, sem divulgação de dados privados.

### Ordem Executiva 002 — Zap Pro (backlog executável)
- [ZAP-PRO-002: canal WhatsApp e consentimento (P0)](https://github.com/HelpUSA/helpus-ai/issues/5)
- [ZAP-PRO-003: estados e isolamento multi-tenant (P0)](https://github.com/HelpUSA/helpus-ai/issues/6)
- [ZAP-PRO-004: PIX sandbox e confirmação servidor-servidor (P0)](https://github.com/HelpUSA/helpus-pay/issues/1)
- [ZAP-PRO-005: TTS, custo e fallback (P1)](https://github.com/HelpUSA/helpus-voice/issues/1)
- [ZAP-PRO-006: E2E sintético e go/no-go do piloto (P1)](https://github.com/HelpUSA/hub/issues/7)

**Sequência de trabalho:** iniciar simultaneamente auditoria do transporte (002), modelagem multi-tenant (003) e auditoria do contrato PIX (004); áudio (005) somente após os contratos críticos; E2E (006) condicionada aos critérios de aceite. Sem deploy de produção ou integração de contas reais nesta ordem. 

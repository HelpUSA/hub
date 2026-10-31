# Plano de Preparação Arquitetural e Técnica — Gate G3 (Zap Pro)

**Data de Elaboração:** 31 de Outubro de 2026  
**Revisão:** 3.1 (Errata Documental Final G3-A — Ordem Executiva 014)  
**Status do Gate:** `G3_PLANNING_ONLY` (Planejamento Documental — Aceite Condicional do Design G3-A via Parecer `G3A_DESIGN_CONDITIONALLY_ACCEPTED`)  
**Referência de Governança:** [HUB Issue #9](https://github.com/HelpUSA/hub/issues/9) (Parecer formal registrado no Comentário 6546800926 e PR #6 Review 5724069290)  
**Origem do Gate:** [HUB Issue #8](https://github.com/HelpUSA/hub/issues/8) — Homologação restrita `G2_APPROVED_SANDBOX_ONLY`  
**Escopo Autorizado:** Levantamento documental e desenho técnico somente-leitura.  
**Limites Estritos de Segurança:** Execução operacional bloqueada. Sem merges, sem deploys em produção, sem testes em instâncias reais de banco, sem provisionamento de infraestrutura real, sem números reais de WhatsApp e sem transações bancárias/PIX reais.

---

## 1. Inventário Arquitetural AS-IS vs. TO-BE

### 1.1. Arquitetura Atual (AS-IS — Homologada no Gate G2)
* **`helpus-whatsapp-ia` (PR #1 - Commit `9f9c8ba`)**:
  - Motor em Node.js com máquina de estados de sessão (`SessionOrchestrator`) e adaptador Meta Cloud API (`WhatsAppAdapter`).
  - **Isolamento**: Contém um serviço de mock em memória (`PaymentMockService`) dentro do próprio processo.
  - **Servidor HTTP Sandbox**: Implementado em `sandbox/server_sandbox.js` recebendo requisições em porta efêmera com validação HMAC (`x-signature-sha256`).
  - **Cancelamento Atômico**: Sincronização entre pedido e cobrança via `paymentService.cancelCharge(order.txid)`.
  - **Testes**: 19 testes automatizados aprovados no CI (15 unitários/invariantes + 4 HTTP E2E).
* **`helpus-pay` (PR #2 - Commit `5dde902`)**:
  - Aplicação frontend React + Vite com endpoints serverless em `api/sandbox/pix_service.ts`.
  - **Isolamento**: Motor mock de geração de PIX com validações financeiras e verificação HMAC de 64 caracteres hexadecimais.
  - **CI**: Executado com `tsx` e `tsc --noEmit` estrito no Node 22 (4/4 testes aprovados).
* **`helpus-auth`**:
  - Portal SPA React + Vite em `D:\AntiG\helpus-auth` contendo telas de autenticação e catálogo de destinos SSO.
  - **Lacuna Técnica Crítica Reconhecida**: É estritamente uma aplicação frontend (client-side) e **NÃO possui backend emissor de tokens JWT** (signing authority). Não há chave privada para assinar tokens nem endpoint de validação/introspecção. Esta funcionalidade é classificada como dependência pré-G3 não construída.
* **`hub`**:
  - Repositório central de governança, documentação estratégica e gestão de Quality Gates.
* **Ponto Crítico AS-IS**: Não existe qualquer chamada HTTP de rede entre `helpus-whatsapp-ia` e `helpus-pay`. Toda a integração E2E do G2 foi testada usando o mock interno local.

### 1.2. Arquitetura Proposta (TO-BE — Preparação para Gate G3)
```mermaid
flowchart TD
    subgraph ClientLayer ["Camada Externa (Clientes & WhatsApp)"]
        User["Cliente Final (WhatsApp)"]
        MetaCloud["Meta Cloud API (Webhooks)"]
        User <--> MetaCloud
    end

    subgraph ServiceLayer ["Camada de Serviços HelpUS"]
        WAppIA["helpus-whatsapp-ia (Motor Zap Pro)"]
        PayService["helpus-pay (API Financeira PIX)"]
        AuthBackend["helpus-auth Backend (JWT Issuer - Planejado)"]
        HubGov["hub (Governança & Políticas)"]
    end

    subgraph StorageLayer ["Camada de Persistência Durável (Planejada)"]
        DB[(PostgreSQL / Supabase)]
        RedisCache[(Redis - Sessões, Idempotência & Locks)]
        OutboxQueue[(reconciliation_outbox - Fila de Estorno)]
    end

    MetaCloud -->|POST /webhooks/whatsapp (HMAC SHA-256)| WAppIA
    WAppIA -->|POST /api/v1/charges/pix (Bearer JWT + Idempotency)| PayService
    PayService -->|POST /api/v1/webhooks/payment (HMAC SHA-256)| WAppIA
    AuthBackend -.->|Emissão de Assinaturas JWT (RS256)| WAppIA
    AuthBackend -.->|Validação de Chave Pública / JWKS| PayService
    WAppIA <--> DB
    PayService <--> DB
    WAppIA <--> RedisCache
    DB --> OutboxQueue
```

---

## 2. Especificação OpenAPI v3.1 (Contrato Cross-Service)

A especificação completa, validada e auditada offline conforme os padrões OpenAPI 3.1.0 encontra-se no arquivo dedicado:
📁 **[`docs/specs/helpus-pay-zap-pro-openapi.v1.yaml`](../specs/helpus-pay-zap-pro-openapi.v1.yaml)**

### 2.1. Visão Geral dos Endpoints do Contrato
| Método | Endpoint | Autenticação | Função | Respostas Documentadas |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/charges/pix` | Bearer JWT + Headers Multi-Tenant | Cria cobrança PIX com chave copia-e-cola e QR Code | `201`, `400`, `401`, `403`, `409`, `500` |
| `GET` | `/api/v1/charges/pix/{txid}` | Bearer JWT | Consulta status e detalhes da cobrança | `200`, `401`, `403`, `404` |
| `POST` | `/api/v1/charges/pix/{txid}/cancel` | Bearer JWT | Cancelamento atômico de cobrança pendente | `200`, `400`, `401`, `403`, `404` |
| `POST` | `/api/v1/webhooks/payment` | HMAC-SHA256 (`X-Signature-SHA256`) | Callback assíncrono de liquidação bancária | `200`, `400`, `401`, `409`, `422` |

### 2.2. Conformidade OpenAPI 3.1 e Evidência de Validação Reproduzível
1. **License Object em Conformidade SPDX**: O metadado de licença foi estruturado com `name: Proprietary - HelpUS Ecosystem (All Rights Reserved)` e `identifier: LicenseRef-Proprietary-HelpUS`, atendendo à sintaxe oficial de identificadores customizados SPDX exigida pela especificação OAS 3.1.
2. **Sintaxe de Tipagem Nulável JSON Schema**: Em conformidade com o JSON Schema Draft 2020-12 utilizado no OAS 3.1, campos opcionais/nuláveis utilizam `type: [object, "null"]`, eliminando a sintaxe legada `nullable: true` do OAS 3.0.
3. **Parâmetros de Cabeçalho**: Todos os headers de negócio (`X-Tenant-Id`, `X-Idempotency-Key`) foram definidos estritamente em `parameters` com `in: header`.
4. **Esquemas de Segurança**: `BearerAuth` (JWT HTTP Bearer) e `HmacSignatureAuth` (`X-Signature-SHA256`) centralizados em `components.securitySchemes`.
5. **Tratamento de Conflito (409) e Erro Semântico (422)**:
   - Resposta HTTP `409 Conflict` formalmente documentada no webhook para colisão de integridade de evento (mesmo `eventId` com hash de payload divergente).
   - Resposta HTTP `422 Unprocessable Entity` documentada para rejeições semânticas de negócio (ex.: divergência entre valor liquidado e valor do pedido/cobrança).
6. **Autenticação Service-to-Service (S2S) e Vinculação Criptográfica**: Toda chamada HTTP privada exige validação de assinatura digital JWT (emitida pelo futuro backend de auth) confrontando a claim `tenant_id` assinada contra o header `X-Tenant-Id` e o tenant do recurso no banco, impedindo injeção cross-tenant.
7. **Evidência de Validação Local Reproduzível**:
   - **Ferramenta**: `@redocly/cli@2.72.1` (Node v22.13.0)
   - **Arquivo Auditado**: `docs/specs/helpus-pay-zap-pro-openapi.v1.yaml`
   - **SHA-256 do Arquivo**: `dfae9458a9f54e0ca36fb777676671cae5dd1cddf3b820fda6449de011a60508`
   - **Comando de Execução**:
     ```bash
     npx @redocly/cli lint docs/specs/helpus-pay-zap-pro-openapi.v1.yaml
     ```
   - **Resultado Obtido**:
     ```text
     validating docs/specs/helpus-pay-zap-pro-openapi.v1.yaml...
     docs/specs/helpus-pay-zap-pro-openapi.v1.yaml: validated in 37ms
     Woohoo! Your API description is valid. 🎉 (0 warnings, 0 errors)
     ```

---

## 3. Modelo de Autorização Multi-Tenant e Identidade

### 3.1. Resolução Criptográfica de Identidade (Zero Trust na Origem)
* **Insegurança do Payload**: Parâmetros como `tenant_id` ou números de remetente informados no corpo da mensagem pelo usuário final são **completamente não confiáveis** (vetor de Spoofing / IDOR).
* **Derivação Segura em Camadas**:
  1. A requisição HTTP do webhook da Meta é recebida em `helpus-whatsapp-ia`.
  2. O middleware calcula o digest HMAC-SHA256 sobre o **raw body binário** exato da requisição usando o secret compartilhado do app Meta (`x-hub-signature-256`).
  3. A verificação é executada via `crypto.timingSafeEqual` para prevenir ataques de temporização.
  4. Se e somente se a assinatura for matematicamente comprovada, o motor extrai `entry[0].changes[0].value.metadata.phone_number_id`.
  5. O `phone_number_id` é mapeado na tabela durável `tenants` (campo único e indexado) para resolver o `tenant_id` corporativo correspondente.

### 3.2. Lacuna do `helpus-auth` e Modelo de Token entre Serviços
* **Diagnóstico AS-IS**: O repositório `helpus-auth` contém apenas uma SPA React/Vite. Não há backend, base de dados de credenciais, nem autoridade de certificação/assinatura de tokens.
* **Dependência G3 Prévia**: A emissão de JWTs para autenticação service-to-service (S2S) entre `helpus-whatsapp-ia` e `helpus-pay` depende de um backend de autenticação authoritative (ex.: microserviço em `helpus-auth` ou Supabase/Auth0 corporativo).
* **Política Fail-Closed Mandatória**:
  - Requisições sem header `Authorization: Bearer <token>` ou com token inválido/expirado DEVEM ser rejeitadas com `401 Unauthorized`.
  - O gateway `helpus-pay` valida se a claim `tenant_id` contida no payload assinado do JWT coincide rigorosamente com o header `X-Tenant-Id`. Se houver qualquer divergência, a requisição é rejeitada com `403 Forbidden` (`CROSS_TENANT_VIOLATION`).
  - Se o serviço de autenticação estiver indisponível ou inacessível, nenhuma requisição financeira ou transacional é aceita por fallback (comportamento estritamente fail-closed, nunca fail-open).

### 3.3. Matriz Granular de RBAC (Role-Based Access Control)
| Recurso | Ação | `SUPER_ADMIN` | `TENANT_ADMIN` | `TENANT_OPERATOR` | `CUSTOMER` | `INTERNAL_SERVICE` |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Tenants** | `CREATE` / `DELETE` | ✅ Sim | ❌ Não | ❌ Não | ❌ Não | ❌ Não |
| **Tenants** | `READ_CONFIG` | ✅ Sim | ✅ Somente Próprio | ❌ Não | ❌ Não | ✅ Via S2S Token |
| **Orders** | `CREATE` | ❌ Não | ❌ Não | ❌ Não | ✅ No próprio chat | ✅ Via Zap Pro Engine |
| **Orders** | `READ` | ✅ Todos | ✅ Somente Próprio | ✅ Somente Próprio | ✅ Somente Próprio | ✅ Via S2S Token |
| **Orders** | `CANCEL` | ✅ Emergencial | ✅ Somente Próprio | ❌ Não | ✅ Se pendente | ✅ Via Zap Pro Engine |
| **Charges (PIX)**| `CREATE` | ❌ Não | ❌ Não | ❌ Não | ❌ Não | ✅ `helpus-whatsapp-ia` |
| **Charges (PIX)**| `CANCEL` | ✅ Auditoria | ✅ Somente Próprio | ❌ Não | ❌ Não | ✅ S2S Sync |
| **Webhooks** | `INGEST` | ❌ Não | ❌ Não | ❌ Não | ❌ Não | ✅ Assinado (Meta/PSP)|
| **Outbox** | `PROCESS_REFUND` | ❌ Não | ❌ Não | ❌ Não | ❌ Não | ✅ Worker Financeiro |
| **Audit Logs** | `READ` | ✅ Completo | ✅ Somente Próprio | ❌ Não | ❌ Não | ❌ Não |
| **Audit Logs** | `WRITE` | ❌ Não | ❌ Não | ❌ Não | ❌ Não | ✅ Sistema (Append-only) |

---

## 4. Persistência Durável e Consistência Transacional

> [!NOTE]
> **Ressalva de Validação Estática**:  
> Os esquemas DDL e a função PL/pgSQL abaixo representam uma **especificação arquitetural de design revista estaticamente**. Nenhum teste de execução em runtime foi executado nesta fase, sendo expressamente postergado para ambiente isolado e descartável em fase futura devidamente autorizada (G3-B).

### 4.1. Esquema Relacional de Dados Proposto (PostgreSQL DDL)
```sql
-- Extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Inquilinos Corporativos
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    meta_phone_number_id VARCHAR(64) UNIQUE NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Sessões de Conversação e Consentimento
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE RESTRICT,
    customer_phone VARCHAR(32) NOT NULL,
    state VARCHAR(64) NOT NULL DEFAULT 'TRIAGEM',
    active_order_id UUID,
    consent_given BOOLEAN NOT NULL DEFAULT FALSE,
    consent_at TIMESTAMPTZ,
    consent_revoked BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_session_tenant_phone UNIQUE (tenant_id, customer_phone)
);

-- 3. Pedidos Comerciais
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE RESTRICT,
    customer_phone VARCHAR(32) NOT NULL,
    status VARCHAR(32) NOT NULL CHECK (status IN ('PENDING', 'WAITING_PAYMENT', 'PAID', 'CANCELLED', 'EXPIRED')),
    total_amount NUMERIC(10, 2) NOT NULL CHECK (total_amount > 0 AND total_amount <= 10000.00),
    txid VARCHAR(128) UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    paid_at TIMESTAMPTZ,
    cancelled_at TIMESTAMPTZ
);

-- 4. Cobranças PIX
CREATE TABLE charges (
    txid VARCHAR(128) PRIMARY KEY,
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE RESTRICT,
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
    amount NUMERIC(10, 2) NOT NULL CHECK (amount > 0 AND amount <= 10000.00),
    status VARCHAR(32) NOT NULL CHECK (status IN ('PENDING', 'PAID', 'CANCELLED', 'EXPIRED')),
    pix_copia_e_cola TEXT,
    qr_code_url TEXT,
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    paid_at TIMESTAMPTZ,
    cancelled_at TIMESTAMPTZ
);

-- 5. Deduplicação e Registro de Auditoria de Webhooks
CREATE TABLE webhook_events (
    event_id VARCHAR(128) PRIMARY KEY,
    source VARCHAR(64) NOT NULL,
    payload_sha256 CHAR(64) NOT NULL,
    tenant_id UUID REFERENCES tenants(id),
    status VARCHAR(32) NOT NULL,
    error_message TEXT,
    processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Fila Durável de Reconciliação e Estorno (Outbox Pattern)
CREATE TABLE reconciliation_outbox (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE RESTRICT,
    event_id VARCHAR(128) NOT NULL,
    txid VARCHAR(128) NOT NULL,
    order_id UUID REFERENCES orders(id) ON DELETE RESTRICT,
    amount NUMERIC(10, 2) NOT NULL,
    reason VARCHAR(64) NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'PENDING_REFUND' CHECK (status IN ('PENDING_REFUND', 'PROCESSING', 'REFUNDED', 'FAILED_MANUAL_REVIEW')),
    retry_count INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_reconciliation_outbox_event UNIQUE (event_id, txid)
);

-- 7. Trilha de Auditoria de Consentimento LGPD (Minimizada)
CREATE TABLE consent_audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE RESTRICT,
    customer_phone VARCHAR(32) NOT NULL,
    action VARCHAR(32) NOT NULL CHECK (action IN ('OPT_IN', 'OPT_OUT', 'DATA_DELETION_REQUEST')),
    policy_version VARCHAR(32) NOT NULL DEFAULT 'v1.0-202610',
    channel VARCHAR(32) NOT NULL DEFAULT 'WHATSAPP',
    payload_sha256 CHAR(64) NOT NULL,
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índices de Performance e Prevenção IDOR
CREATE INDEX idx_orders_tenant_status ON orders(tenant_id, status);
CREATE INDEX idx_charges_tenant_status ON charges(tenant_id, status);
CREATE INDEX idx_sessions_tenant_phone ON sessions(tenant_id, customer_phone);
CREATE INDEX idx_reconciliation_outbox_status ON reconciliation_outbox(status);
```

### 4.2. Procedimento de Liquidação e Invariantes Financeiros

> [!CRITICAL]
> **Invariante Fundamental de Reconciliação Bancária vs. ACID**:  
> 1. Um `ROLLBACK` em banco de dados relacional **NUNCA reverte dinheiro real já transferido pelo sistema bancário**. Se o webhook do PSP confirma que os fundos foram transferidos pelo consumidor, o dinheiro está sob custódia da conta recebedora. Abortar a transação SQL evita corrupção local dos dados, mas gera uma divergência contábil real externa.
> 2. O status `PENDING_REFUND` na tabela `reconciliation_outbox` representa estritamente uma **solicitação interna de reconciliação**, e **NÃO um estorno bancário concluído**. A conclusão efetiva depende da confirmação assíncrona do PSP parceiro no ciclo G3-B.
> 3. **Diferenciação Estrita de Mecanismos de Reversão**:
>    - **Devolução Comercial Voluntária (API do PSP)**: Para pedidos cancelados, expirados ou com valor divergente, o sistema registra a necessidade de estorno na tabela durável `reconciliation_outbox`. Um worker assíncrono posterior aciona a API de devolução oficial do PSP contratado (ex.: endpoint PIX `/v2/pix/{e2eid}/devolucao` do BACEN).
>    - **MED (Mecanismo Especial de Devolução — Resolução BCB nº 1/2020)**: Mecanismo regulatório do Banco Central restrito exclusivamente a casos de **fundada suspeita de fraude** ou **falha operacional na grade de liquidação do SPI**. O MED **não** é uma ferramenta para cancelamentos rotineiros de compras pelo consumidor e requer abertura de notificação de infração entre instituições participantes.

```sql
CREATE OR REPLACE FUNCTION process_pix_settlement(
    p_event_id VARCHAR(128),
    p_txid VARCHAR(128),
    p_tenant_id UUID,
    p_amount NUMERIC(10, 2),
    p_paid_at TIMESTAMPTZ,
    p_payload_sha256 CHAR(64)
) RETURNS JSONB AS $$
DECLARE
    v_inserted_count BIGINT;
    v_existing_payload_sha256 CHAR(64);
    v_existing_status VARCHAR(32);
    v_order_id UUID;
    v_order_status VARCHAR(32);
    v_order_amount NUMERIC(10, 2);
    v_order_txid VARCHAR(128);
    v_charge_status VARCHAR(32);
    v_charge_amount NUMERIC(10, 2);
    v_customer_phone VARCHAR(32);
BEGIN
    -- 1. Deduplicação Atômica de Evento e Detecção de Colisão de Payload
    INSERT INTO webhook_events (event_id, source, payload_sha256, processed_at, tenant_id, status)
    VALUES (p_event_id, 'helpus-pay', p_payload_sha256, NOW(), p_tenant_id, 'PROCESSING')
    ON CONFLICT (event_id) DO NOTHING;

    GET DIAGNOSTICS v_inserted_count = ROW_COUNT;
    IF v_inserted_count = 0 THEN
        -- O evento já existe no banco: verificar integridade e devolver exatamente o resultado anterior gravado
        SELECT payload_sha256, status INTO v_existing_payload_sha256, v_existing_status
        FROM webhook_events
        WHERE event_id = p_event_id;

        IF v_existing_payload_sha256 <> p_payload_sha256 THEN
            RETURN jsonb_build_object(
                'success', false,
                'error', 'EVENT_ID_PAYLOAD_MISMATCH',
                'http_status', 409,
                'message', 'Mesmo event_id recebido com payload hash divergente. Rejeitado por seguranca.'
            );
        END IF;

        -- Se o processamento anterior falhou duravelmente, repete o código de falha correspondente
        IF v_existing_status LIKE 'FAILED%' THEN
            RETURN jsonb_build_object(
                'success', false,
                'error', v_existing_status,
                'action', 'PREVIOUS_FAILURE_REPLAYED'
            );
        END IF;

        -- Reconciliation is a durable exception, NEVER a successful bank settlement.
        -- Preserve the prior negative outcome across retries (proven by PostgreSQL QA).
        IF v_existing_status = 'REQUIRES_BANKING_REFUND' THEN
            RETURN jsonb_build_object(
                'success', false,
                'error', 'REQUIRES_BANKING_REFUND',
                'action', 'PENDING_RECONCILIATION_REPLAYED',
                'status', v_existing_status
            );
        END IF;

        RETURN jsonb_build_object('success', true, 'action', 'IDEMPOTENT_REPLAY_IGNORED', 'status', v_existing_status);
    END IF;

    -- 2. Lock Pessimista Ordenado: sempre charges primeiro, orders depois (evita deadlocks)
    SELECT status, order_id, amount INTO v_charge_status, v_order_id, v_charge_amount
    FROM charges
    WHERE txid = p_txid AND tenant_id = p_tenant_id
    FOR UPDATE;

    IF NOT FOUND THEN
        UPDATE webhook_events 
        SET status = 'FAILED_CHARGE_NOT_FOUND', 
            error_message = format('Charge %s not found for tenant %s', p_txid, p_tenant_id)
        WHERE event_id = p_event_id;
        
        RETURN jsonb_build_object('success', false, 'error', 'CHARGE_NOT_FOUND');
    END IF;

    -- 3. Lock Pessimista no Pedido
    SELECT status, customer_phone, total_amount, txid 
    INTO v_order_status, v_customer_phone, v_order_amount, v_order_txid
    FROM orders
    WHERE id = v_order_id AND tenant_id = p_tenant_id
    FOR UPDATE;

    IF NOT FOUND THEN
        UPDATE webhook_events 
        SET status = 'FAILED_ORDER_NOT_FOUND', 
            error_message = format('Order %s not found for charge %s', v_order_id, p_txid)
        WHERE event_id = p_event_id;
        
        RETURN jsonb_build_object('success', false, 'error', 'ORDER_NOT_FOUND');
    END IF;

    -- 4. Guard de Integridade de TXID e Associação Cruzada
    IF v_order_txid IS DISTINCT FROM p_txid THEN
        UPDATE webhook_events 
        SET status = 'FAILED_TXID_MISMATCH', 
            error_message = format('Order txid %s diverges from callback txid %s', v_order_txid, p_txid)
        WHERE event_id = p_event_id;
        
        RETURN jsonb_build_object('success', false, 'error', 'TXID_MISMATCH');
    END IF;

    -- 5. Guard de Concordância de Valor (Amount Matching Guard)
    IF p_amount <> v_charge_amount OR p_amount <> v_order_amount THEN
        -- Divergência de valor pago: registrar na outbox para estorno via API do PSP
        INSERT INTO reconciliation_outbox (tenant_id, event_id, txid, order_id, amount, reason, status)
        VALUES (p_tenant_id, p_event_id, p_txid, v_order_id, p_amount, 'AMOUNT_MISMATCH', 'PENDING_REFUND')
        ON CONFLICT (event_id, txid) DO NOTHING;

        UPDATE webhook_events 
        SET status = 'REQUIRES_BANKING_REFUND', 
            error_message = format('Amount mismatch: paid %s vs charge %s / order %s', p_amount, v_charge_amount, v_order_amount)
        WHERE event_id = p_event_id;

        RETURN jsonb_build_object(
            'success', false, 
            'error', 'AMOUNT_MISMATCH', 
            'action', 'REFUND_ENQUEUED'
        );
    END IF;

    -- 6. Invariante: Verificação de Pedido ou Cobrança Cancelados/Expirados
    IF v_order_status IN ('CANCELLED', 'EXPIRED') OR v_charge_status IN ('CANCELLED', 'EXPIRED') THEN
        -- Inserção comprovada na outbox durável para devolução comercial
        INSERT INTO reconciliation_outbox (tenant_id, event_id, txid, order_id, amount, reason, status)
        VALUES (p_tenant_id, p_event_id, p_txid, v_order_id, p_amount, 'SETTLEMENT_AFTER_CANCELLED_OR_EXPIRED', 'PENDING_REFUND')
        ON CONFLICT (event_id, txid) DO NOTHING;

        UPDATE webhook_events 
        SET status = 'REQUIRES_BANKING_REFUND', 
            error_message = format('Settlement received for %s order %s. Enqueued to reconciliation_outbox.', v_order_status, v_order_id)
        WHERE event_id = p_event_id;

        RETURN jsonb_build_object(
            'success', false, 
            'error', 'CANNOT_SETTLE_CANCELLED_OR_EXPIRED_ORDER',
            'action', 'REFUND_ENQUEUED'
        );
    END IF;

    -- 7. Guard de Transições de Estado Válidas
    IF v_charge_status <> 'PENDING' OR v_order_status NOT IN ('PENDING', 'WAITING_PAYMENT') THEN
        UPDATE webhook_events 
        SET status = 'FAILED_INVALID_STATE_TRANSITION', 
            error_message = format('Invalid transition: charge status %s, order status %s', v_charge_status, v_order_status)
        WHERE event_id = p_event_id;

        RETURN jsonb_build_object('success', false, 'error', 'INVALID_STATE_TRANSITION');
    END IF;

    -- 8. Transição Atômica de Sucesso Conjunto
    UPDATE charges 
    SET status = 'PAID', paid_at = p_paid_at, updated_at = NOW()
    WHERE txid = p_txid;

    UPDATE orders 
    SET status = 'PAID', paid_at = p_paid_at, updated_at = NOW()
    WHERE id = v_order_id;

    UPDATE sessions 
    SET state = 'PEDIDO_PAGO', active_order_id = NULL, updated_at = NOW()
    WHERE tenant_id = p_tenant_id AND customer_phone = v_customer_phone;

    UPDATE webhook_events SET status = 'COMPLETED' WHERE event_id = p_event_id;

    RETURN jsonb_build_object('success', true, 'action', 'ORDER_AND_CHARGE_SETTLED', 'orderId', v_order_id);
END;
$$ LANGUAGE plpgsql;
```

---

## 5. Threat Model STRIDE, Marco Civil da Internet e LGPD

### 5.1. Threat Model (STRIDE)
| Ameaça | Vetor de Risco | Mitigação Arquitetural G3 |
| :--- | :--- | :--- |
| **Spoofing** | Requisição forjada se passando por webhook bancário ou Meta | Validação obrigatória de HMAC-SHA256 (`x-hub-signature-256` e `x-signature-sha256`) com `crypto.timingSafeEqual` sobre o buffer binário bruto. |
| **Tampering** | Cliente injeta preço inferior ou altera parâmetros no chat | Preços e catálogo geridos exclusivamente no servidor (`TenantManager`), limites estritos de quantidade (1 a 50 itens) e valor (R$ 0,01 a R$ 10.000,00). |
| **Repudiation** | Cliente afirma ter pago mas o sistema não registrou | Registro de auditoria imutável em `webhook_events` contendo hash SHA256 do payload e identificador de liquidação bancária do BACEN. |
| **Information Disclosure** | Vazamento de dados de clientes entre inquilinos (IDOR) | Isolamento multi-tenant obrigatório por chave composta (`WHERE id = :id AND tenant_id = :derivedTenantId`), mascaramento de logs (`5583****1234`). |
| **Denial of Service** | Inundação de webhooks ou mensagens em loop | Rate limiting por IP e por telefone (máx. 60 requisições/minuto), timeout de 10s e body cap de 64KB no parser. |
| **Elevation of Privilege** | Operador acessa pedidos de outro inquilino | Tokens JWT assinados digitalmente com declaração estrita de escopo `tenant_id` e verificação fail-closed. |

### 5.2. Marco Civil da Internet (Lei 12.965/2014) e LGPD (Lei 13.709/2018)

1. **Diferenciação Jurídica Exata no Marco Civil da Internet**:
   - **Art. 13 da Lei 12.965/2014 (Provedores de Conexão à Internet)**: Impõe a guarda obrigatória de registros de conexão (endereço IP, data e hora de início e término da conexão) por **1 ano**. O ecossistema HelpUS atua exclusivamente como software/aplicação SaaS e **NÃO é provedor de conexão**. Portanto, a obrigação do Art. 13 não se aplica diretamente à infraestrutura da HelpUS, devendo-se evitar retenção desnecessária de dados de rede de telecomunicações.
   - **Art. 15 da Lei 12.965/2014 (Provedores de Aplicações de Internet)**: Impõe a guarda obrigatória de registros de acesso a aplicações de internet (conjunto de informações referentes à data e hora de uso de uma determinada aplicação a partir de um endereço IP) pelo prazo de **6 meses**, para provedores constituídos como pessoa jurídica que exerçam atividade organizada profissionalmente com fins econômicos. O HelpUS enquadra-se nesta categoria para os acessos autenticados aos seus serviços web.
2. **Prazos Fiscais e Conversacionais como Políticas Internas Condicionadas**:
   - **Dados Fiscais e Contábeis (Pedidos, Notas, Cobranças PIX)**: Política de retenção por **5 anos**, fundamentada no Código Tributário Nacional (Arts. 173/174), Código de Defesa do Consumidor (Art. 27) e amparada pelo **Art. 16, I da LGPD** (cumprimento de obrigação legal ou regulatória pelo controlador). Estes dados **não podem ser excluídos** mediante solicitação de "direito ao esquecimento" antes de decorrido o prazo prescricional. Esta política é formalmente condicionada à revisão jurídica pré-produção.
   - **Transcrições de Conversação e Estado Efêmero de Sessão**: Política de retenção limitada a **90 dias** como princípio de minimização (Art. 6º, III da LGPD), elimináveis a qualquer momento mediante requisição expressa do titular conforme o **Art. 18, VI da LGPD**. Também condicionada à homologação jurídica pré-produção.
3. **Padrão Técnico de Anonimização vs. Pseudonimização**:
   - *Alerta de Risco*: A aplicação de hash SHA-256 simples sobre números de telefone (`+55...`) configura **pseudonimização**, e **não anonimização irreversível**, devido à vulnerabilidade a ataques de dicionário e tabelas rainbow pelo espaço finito de números celulares brasileiros.
   - *Critério G3*: A anonimização efetiva exigirá descarte completo do telefone e nome (data scrubbing/truncation) ou criptografia com destruição irrevogável da chave privada de descarte.
4. **Minimização da Trilha de Consentimento**:
   - Para respeitar o princípio da minimização, a tabela `consent_audit_log` descarta o armazenamento de texto conversacional integral (`raw_message_text`), retendo estritamente a versão da política aceita (`policy_version`), ação (`OPT_IN`/`OPT_OUT`), canal e hash SHA-256 do payload.

### 5.3. Políticas Oficiais da Meta WhatsApp Business Platform (Vigência 31/10/2026)
* **Novo Modelo de Tarifação por Mensagem**:
  - A Meta realizou a transição para precificação baseada em mensagem (*per-message pricing*), superando o modelo anterior baseado em conversas de 24 horas.
  - **Franquia Gratuita Oficial**: São concedidas **1.000 mensagens de serviço gratuitas por mês por número de telefone comercial (WABA)**. Mensagens de serviço são aquelas iniciadas pelo usuário final e respondidas pelo bot/operador dentro da janela de atendimento de 24 horas.
  - **Mensagens Fora da Janela e de Marketing/Utilidade**: Mensagens ativas iniciadas pelo bot (ou enviadas após transcorridas 24 horas da última interação do usuário) exigem Message Templates aprovados pela Meta nas categorias *Utility* ou *Marketing* e são tarifadas por mensagem conforme a tabela regional da Meta para o Brasil.
* **Módulo de Voz (TTS)**: Opcional e completamente desativado no plano técnico do piloto.

---

## 6. Matriz de Custos, Riscos e Testes Negativos

### 6.1. Matriz de Riscos e Impacto Operacional
| Risco | Probabilidade | Impacto | Classificação | Mitigação Arquitetural |
| :--- | :---: | :---: | :---: | :--- |
| Banimento de Número pelo WhatsApp | Baixa | Crítico | **Alto** | Respeito estrito à janela de 24h, botões de opt-out, proibição de spam frio e limites de taxa. |
| Violação de Dados Cross-Tenant (IDOR) | Baixa | Crítico | **Alto** | Cláusulas compostas no banco (`tenant_id`), RBAC estrito e testes automatizados de injeção cruzada. |
| Multas Regulatórias LGPD | Muito Baixa | Alto | **Médio** | Consentimento rastreável, expurgo em 90 dias de dados de conversação e trilha de auditoria minimizada. |
| Divergência Financeira PIX (Race Condition)| Baixa | Alto | **Médio** | Locks pessimistas ordenados, idempotência atômica e outbox durável (`reconciliation_outbox`). |
| Indisponibilidade de Provedor Cloud | Média | Médio | **Médio** | Fallback graceful, retentativas exponenciais com jitter e persistência durável em PostgreSQL gerenciado. |

### 6.2. Estimativa de Custos de Infraestrutura (Hipótese de Trabalho Não Validada)
> [!WARNING]
> **Ressalva Orçamentária e Delimitação de Custos**:  
> A estimativa de **US$ 5 a US$ 40 mensais** é estritamente uma **hipótese teórica preliminar restrita a infraestrutura computacional básica** (instâncias de teste, serverless e banco compartilhado) e **NÃO CONSTITUI UM ORÇAMENTO APROVADO**.  
> Esta projeção **EXCLUI expressamente**:
> 1. Tarifação por mensagens Meta excedentes à franquia de 1.000 mensagens de serviço/mês.
> 2. Tarifação por envio de Message Templates de marketing/utilidade da Meta.
> 3. Taxas de processamento e intermediação cobradas pelo PSP por transação PIX liquidada.
> 4. Carga tributária e impostos incidentes (ISS, PIS/COFINS, IOF para serviços em nuvem internacional).
> 5. Custos de observabilidade, monitoramento de logs (Datadog/Sentry/Grafana Cloud) e suporte operacional 24/7.

| Componente | Provedor / Serviço | Dimensionamento Piloto | Premissas e Fontes | Custo Mensal Estimado |
| :--- | :--- | :--- | :--- | :--- |
| **Runtime Motor Zap Pro** | VPS / Fly.io / Railway | 1 vCPU, 1GB RAM | Instância containerizada básica | US$ 5 – US$ 10 |
| **Backend Financeiro (HelpUS Pay)**| Cloudflare Workers / Serverless | Até 10.000 requisições/mês | Serverless execution | Gratuito / US$ 5 |
| **Banco de Dados Relacional** | Neon / Supabase PostgreSQL | Shared Compute | Nível inicial gerenciado | Gratuito / US$ 25 |
| **Redis Cache & Idempotência** | Upstash Redis | Até 10.000 comandos/dia | Free tier de mensageria rápida | Gratuito |
| **Meta Cloud API** | Meta Business Platform | 1.000 msgs serviço gratuitas | Tabela oficial Meta (31/10/2026) | Gratuito (piloto inicial) |
| **Total Estimado de Infraestrutura** | — | **Operação de Piloto (1 Tenant)** | **Hipótese Teórica** | **US$ 5 – US$ 40 / mês** |

### 6.3. Matriz de Cenários Negativos Cruzados
1. **Divergência Multi-Tenant**: Tenant B tenta liquidar cobrança de Tenant A $\rightarrow$ `403 Forbidden / CROSS_TENANT_VIOLATION`.
2. **Corrida Concorrente (Race Condition)**: Cliente cancela pedido no mesmo milissegundo em que o webhook bancário bate $\rightarrow$ Pedido permanece `CANCELLED`, cobrança não vira `PAID`, rotina enfileira devolução comercial em `reconciliation_outbox`.
3. **Replay de Webhook Idêntico**: Reenvio de payload idêntico 100 vezes $\rightarrow$ Processado 1 vez, 99 respostas idempotentes (`IDEMPOTENT_REPLAY_IGNORED`) com status gravado.
4. **Colisão de EventId com Payload Divergente**: Reenvio de mesmo `eventId` com payload alterado $\rightarrow$ Rejeição `409 Conflict / EVENT_ID_PAYLOAD_MISMATCH` sem mutação de dados.
5. **Divergência de Valor (Amount Mismatch)**: Callback informa valor diferente da cobrança/pedido $\rightarrow$ Registro marcado como `REQUIRES_BANKING_REFUND`, enfileirado na outbox e recusado no pedido.
6. **Assinatura Malformada**: Assinatura com comprimento incorreto, caracteres especiais ou não-hexadecimais $\rightarrow$ Rejeição silenciosa `401 Unauthorized` sem crash.
7. **Simulação de Crash/Restart**: Derrubar o servidor enquanto a sessão está em `AGUARDANDO_PIX` $\rightarrow$ Ao reiniciar, restaurar estado exato a partir do banco durável.

---

## 7. Diagnóstico de Higiene Git no Repositório Privado `helpus-whatsapp-ia`

### 7.1. Diagnóstico AS-IS
* **Consulta ao GitHub API / Branches Remotas**:
  - `origin/feat/zap-pro-sandbox-engine-20261031` (atualmente configurada como `defaultBranchRef`).
  - `origin/main` (já existente remotamente no GitHub, conforme verificado via `git branch -a`).
* **Causa Raiz**: O repositório foi inicializado diretamente com o push da branch de feature, herdando o papel de default branch no GitHub.

### 7.2. Procedimento de Correção (Planejado sob Autorização Futura)
Nenhuma alteração de infraestrutura ou configuração de repositório foi executada nesta fase documental. O procedimento acordado para o momento oportuno é:
1. Validar que a branch `origin/main` está sincronizada com a base limpa do projeto.
2. Executar via GitHub CLI:
   ```bash
   gh repo edit HelpUSA/helpus-whatsapp-ia --default-branch main
   ```
3. Configurar regra de proteção de branch (*Branch Protection Rules*) para `main`:
   - Exigir Pull Request antes do merge.
   - Exigir aprovação de revisão de código.
   - Exigir status checks verdes de CI (`run-tests`).
4. Manter o PR #1 (`feat/zap-pro-sandbox-engine-20261031` $\rightarrow$ `main`) estritamente em estado **Draft** até a conclusão dos Quality Gates subsequentes.

---

## 8. Cronograma Faseado Proposto (G3-A, G3-B, G3-C)

```mermaid
flowchart LR
    G2[Gate G2: Sandbox Local Aprovado] --> G3A[Fase G3-A: Design & Contratos (Aceite Condicional)]
    G3A --> GateReview1{Errata Documental Concluída}
    GateReview1 -->|Homologação Design G3A| G3B[Fase G3-B: Integração em Mocks sob Autorização]
    G3B --> GateReview2{Revisão Independente}
    GateReview2 -->|Autorização SuperAdmin| G3C[Fase G3-C: Piloto Controlado]
```

1. **Fase G3-A: Especificação e Design de Dados (Aceite Condicional — Errata Final Concluída)**:
   - Especificações OpenAPI v3.1 sanitizadas e validadas sem erros (`docs/specs/helpus-pay-zap-pro-openapi.v1.yaml`).
   - Modelagem de esquemas SQL e procedimentos de liquidação com outbox durável (`reconciliation_outbox`), idempotência e guards prévios.
   - Matriz STRIDE, conformidade Marco Civil da Internet (Art. 15) e LGPD minimizada, e plano de higiene de branches.
2. **Fase G3-B: Integração Local em Mocks sob Nova Autorização (Estimativa: 3 a 5 dias úteis — NÃO INICIADA)**:
   - Subir instâncias locais de `helpus-whatsapp-ia` e `helpus-pay` comunicando-se via HTTP em loopback.
   - Testar e validar a função SQL em instância PostgreSQL descartável local.
   - Validar contratos de cobrança e cancelamento entre serviços separados.
   - Zero operações financeiras reais.
3. **Fase G3-C: Piloto Controlado sob Aprovação Expressa (Estimativa: 5 a 7 dias úteis — NÃO INICIADA)**:
   - Configuração de 1 tenant piloto (Studio Navalha & Arte).
   - Teste controlado em ambiente restrito com auditoria humana em tempo real.

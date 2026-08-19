import type { ClientProfile, SupportTicket, InvoiceItem } from '../types';

export const DEMO_CLIENT_PROFILE: ClientProfile = {
  id: 'client-9982',
  companyName: 'Márcio Top Barber & Estética',
  contactName: 'Márcio Silva',
  email: 'contato@marciotopbarber.com.br',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  plan: 'Plano HelpUS Ecossistema Premium',
  activeModules: ['barber-hub', 'ai-customer-agent', 'cloud-sync-pay', 'gourmet-drinks'],
  accountManager: 'Rodrigo Antunes (HelpUS VIP)',
  uptimeScore: '99.98%'
};

export const INITIAL_TICKETS: SupportTicket[] = [
  {
    id: 'TK-8492',
    title: 'Ajuste de horário de atendimento aos sábados',
    category: 'Suporte Técnico',
    priority: 'media',
    status: 'resolvido',
    createdAt: '15/08/2026 14:22',
    systemName: 'HelpUS Barber & Salon Hub',
    description: 'Solicito alteração da grade de horários da unidade 2 para encerrar às 20h aos sábados.',
    messagesCount: 3
  },
  {
    id: 'TK-9104',
    title: 'Integração de PIX Automático no WhatsApp',
    category: 'Solicitação de Novo Módulo',
    priority: 'alta',
    status: 'em_analise',
    createdAt: '16/08/2026 09:15',
    systemName: 'HelpUS AI Customer Agent',
    description: 'Gostaria de ativar a cobrança antecipada de 30% do valor do agendamento via PIX enviado pelo bot da IA.',
    messagesCount: 2
  }
];

export const INITIAL_INVOICES: InvoiceItem[] = [
  {
    id: 'INV-2026-08',
    date: '10/08/2026',
    amount: 546.00,
    status: 'pago',
    planDescription: 'Mensalidade Ecossistema (Barber + AI Agent + Pay)',
    invoicePdfUrl: '#'
  },
  {
    id: 'INV-2026-07',
    date: '10/07/2026',
    amount: 546.00,
    status: 'pago',
    planDescription: 'Mensalidade Ecossistema (Barber + AI Agent + Pay)',
    invoicePdfUrl: '#'
  },
  {
    id: 'INV-2026-06',
    date: '10/06/2026',
    amount: 398.00,
    status: 'pago',
    planDescription: 'Mensalidade Módulo Barber + Pay',
    invoicePdfUrl: '#'
  }
];

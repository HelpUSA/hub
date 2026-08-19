export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'imobiliaria' | 'beleza' | 'eventos' | 'gastronomia' | 'ia' | 'cloud';
  description: string;
  iconName: string;
  image: string;
  badgeText: string;
  badgeType: 'active' | 'featured' | 'new' | 'amber';
  features: string[];
  priceMonthly: number;
  rating: number;
  activeClientsCount: number;
  demoAvailable: boolean;
  ssoSupported: boolean;
  subdomain: string;
}

export interface ClientProfile {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  avatarUrl: string;
  plan: string;
  activeModules: string[]; // product IDs
  accountManager: string;
  uptimeScore: string;
}

export interface SupportTicket {
  id: string;
  title: string;
  category: string;
  priority: 'baixa' | 'media' | 'alta' | 'urgente';
  status: 'aberto' | 'em_analise' | 'resolvido';
  createdAt: string;
  systemName: string;
  description: string;
  messagesCount: number;
}

export interface InvoiceItem {
  id: string;
  date: string;
  amount: number;
  status: 'pago' | 'pendente';
  planDescription: string;
  invoicePdfUrl: string;
}

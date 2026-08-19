import { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Scissors, 
  Ticket, 
  Wine, 
  Bot, 
  Zap, 
  Check, 
  MessageSquare, 
  PhoneCall, 
  ArrowRight, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  status: 'Em Produção' | 'Disponível';
  icon: any;
  features: string[];
  directLink?: string;
  whatsappMessage: string;
}

export function App() {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  // HelpUS Direct Contact Details
  const whatsappNumber = '5511999999999'; // Can be customized
  const helpusEmail = 'contato@helpusbr.com';

  const services: ServiceItem[] = [
    {
      id: 'imoveis',
      name: 'HelpUS Imóveis Pro',
      subtitle: 'Plataforma Imobiliária & CRM de Corretores',
      category: 'imobiliario',
      description: 'Sistema completo de gestão de imóveis, captação de leads, busca com localização em tempo real e gerador de contratos.',
      status: 'Em Produção',
      icon: Building2,
      features: ['Multiusuário com permissões', 'Filtro avançado por geolocalização', 'CRM de vendas e atendimento'],
      whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre a plataforma HelpUS Imóveis Pro.'
    },
    {
      id: 'barbearia',
      name: 'HelpUS Barber & Salon',
      subtitle: 'Sistema de Agendamento Online & Gestão',
      category: 'beleza',
      description: 'Plataforma completa de agendamentos 24h para clientes, comissão de profissionais, controle de caixa e relatórios.',
      status: 'Em Produção',
      icon: Scissors,
      features: ['Agendamento 24/7 pelo cliente', 'Cálculo automático de comissões', 'Lembretes de horário via WhatsApp'],
      whatsappMessage: 'Olá HelpUS! Quero ativar o sistema HelpUS Barber & Salon na minha barbearia/salão.'
    },
    {
      id: 'events',
      name: 'HelpUS Events Pass',
      subtitle: 'Bilheteria Digital & Check-in QR Code',
      category: 'eventos',
      description: 'Venda de ingressos online, gestão de lotes, validação rápida por QR Code no acesso do evento e repasse de vendas.',
      status: 'Em Produção',
      icon: Ticket,
      features: ['Check-in rápido por QR Code', 'Ingressos digitais anti-fraude', 'Relatório de público em tempo real'],
      whatsappMessage: 'Olá HelpUS! Tenho interesse no HelpUS Events Pass para gestão de eventos.'
    },
    {
      id: 'gourmet',
      name: 'HelpUS Gourmet & Drinks',
      subtitle: 'Cardápio Digital & Pedidos na Mesa',
      category: 'gastronomia',
      description: 'Solução para restaurantes e bares. Cardápio via QR Code, montagem interativa de receitas e comandas digitais.',
      status: 'Disponível',
      icon: Wine,
      features: ['Cardápio QR Code dinâmico', 'Montagem interativa de pratos/drinks', 'Comandas individuais digitais'],
      whatsappMessage: 'Olá HelpUS! Gostaria de implementar o HelpUS Gourmet & Drinks no meu estabelecimento.'
    },
    {
      id: 'ai-agent',
      name: 'HelpUS AI Customer Agent',
      subtitle: 'Atendimento Autônomo 24/7 com IA',
      category: 'ia',
      description: 'Agentes inteligentes treinados na sua empresa para atender clientes no WhatsApp, tirar dúvidas e qualificar leads.',
      status: 'Disponível',
      icon: Bot,
      features: ['Treinado com dados da sua empresa', 'Integração oficial WhatsApp', 'Transbordo para atendente humano'],
      whatsappMessage: 'Olá HelpUS! Quero entender como colocar um Agente de IA para atender minha empresa 24/7.'
    },
    {
      id: 'cloud-pay',
      name: 'HelpUS Cloud & Pay',
      subtitle: 'Gateway de Pagamentos & Faturamento',
      category: 'cloud',
      description: 'Infraestrutura central de pagamentos via PIX dinâmico e cartão de crédito com cobrança recorrente automatizada.',
      status: 'Disponível',
      icon: Zap,
      features: ['PIX instantâneo com QR Code', 'Faturamento recorrente mensal', 'Sincronização com os sistemas HelpUS'],
      whatsappMessage: 'Olá HelpUS! Gostaria de consultar sobre a integração de pagamentos HelpUS Cloud & Pay.'
    }
  ];

  const filteredServices = services.filter(s => activeFilter === 'todos' || s.category === activeFilter);

  const openWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="hub-app">
      
      {/* Header Navbar */}
      <header className="hub-header">
        <div className="hub-container">
          <div className="hub-header-inner">
            
            {/* Logo */}
            <div className="hub-logo">
              <div className="hub-logo-icon">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="hub-logo-text">
                  Help<span>US</span> <span className="hub-logo-badge">HUB</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hub-nav-links">
              <button 
                onClick={() => setActiveFilter('todos')} 
                className={`hub-nav-btn ${activeFilter === 'todos' ? 'active' : ''}`}
              >
                Todos os Serviços
              </button>
              <button 
                onClick={() => setActiveFilter('imobiliario')} 
                className={`hub-nav-btn ${activeFilter === 'imobiliario' ? 'active' : ''}`}
              >
                Imobiliário
              </button>
              <button 
                onClick={() => setActiveFilter('beleza')} 
                className={`hub-nav-btn ${activeFilter === 'beleza' ? 'active' : ''}`}
              >
                Beleza
              </button>
              <button 
                onClick={() => setActiveFilter('eventos')} 
                className={`hub-nav-btn ${activeFilter === 'eventos' ? 'active' : ''}`}
              >
                Eventos
              </button>
              <button 
                onClick={() => setActiveFilter('ia')} 
                className={`hub-nav-btn ${activeFilter === 'ia' ? 'active' : ''}`}
              >
                Inteligência Artificial
              </button>
            </nav>

            {/* Contact CTA Header */}
            <div>
              <button 
                onClick={() => openWhatsApp('Olá HelpUS! Preciso de atendimento direto.')}
                className="hub-btn-primary"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar com a HelpUS</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hub-hero">
        <div className="hub-container">
          <div className="hub-hero-badge">
            <Sparkles className="w-4 h-4" />
            <span>Portal Unificado de Serviços & Soluções</span>
          </div>

          <h1 className="hub-hero-title">
            Central de Serviços e Soluções <span>HelpUS</span>
          </h1>

          <p className="hub-hero-desc">
            Acesse seus sistemas ativos ou solicite novos serviços digitais diretamente com a equipe da <strong>HelpUS</strong>. Nós coordenamos a tecnologia, o suporte e a gestão da sua empresa em um único lugar.
          </p>

          <div className="hub-hero-actions">
            <button 
              onClick={() => openWhatsApp('Olá HelpUS! Gostaria de consultar sobre os serviços oferecidos.')}
              className="hub-btn-primary"
            >
              <span>Atendimento Direto no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#servicos" className="hub-btn-secondary">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Ver Serviços Disponíveis</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="hub-section">
        <div className="hub-container">
          
          <div className="hub-section-header">
            <span className="hub-section-subtitle">Catálogo Enxuto</span>
            <h2 className="hub-section-title">Sistemas e Serviços Coordenados</h2>
            <p className="hub-section-desc">
              Escolha o serviço desejado e fale diretamente com a equipe da HelpUS para tirar dúvidas ou ativar no seu negócio.
            </p>
          </div>

          {/* Grid of Clean Light-themed Service Cards */}
          <div className="hub-cards-grid">
            {filteredServices.map(item => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="hub-card">
                  <div>
                    <div className="hub-card-top">
                      <div className="hub-card-icon">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className={`hub-card-badge ${item.status === 'Em Produção' ? 'hub-badge-green' : 'hub-badge-blue'}`}>
                        {item.status}
                      </span>
                    </div>

                    <h3 className="hub-card-title">{item.name}</h3>
                    <p className="hub-card-subtitle">{item.subtitle}</p>
                    <p className="hub-card-desc">{item.description}</p>

                    <ul className="hub-card-features">
                      {item.features.map((feat, idx) => (
                        <li key={idx}>
                          <Check className="w-4 h-4" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hub-card-bottom">
                    <div className="hub-card-price">
                      <span>Contato Direto</span>
                      <div>HelpUS</div>
                    </div>

                    <button
                      onClick={() => openWhatsApp(item.whatsappMessage)}
                      className="hub-btn-primary"
                      style={{ fontSize: '0.85rem', padding: '8px 14px' }}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Falar com a HelpUS</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Contact Direct Callout Box */}
          <div className="hub-contact-card">
            <div className="hub-contact-info">
              <h3>Precisa de um serviço sob medida para sua empresa?</h3>
              <p>
                A equipe da HelpUS está pronta para desenvolver, integrar ou personalizar a solução ideal para o seu modelo de negócio.
              </p>
            </div>
            <div>
              <button 
                onClick={() => openWhatsApp('Olá HelpUS! Gostaria de solicitar um orçamento para um serviço sob medida.')}
                className="hub-btn-primary"
                style={{ background: '#ffffff', color: '#0f172a', fontWeight: '700' }}
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Clean Light Footer */}
      <footer className="hub-footer">
        <div className="hub-container">
          <div className="hub-footer-inner">
            <div>
              <strong>HelpUS Technology Solutions</strong> © 2026 — Todos os direitos reservados.
            </div>
            <div>
              Central de Atendimento: <a href={`mailto:${helpusEmail}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>{helpusEmail}</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

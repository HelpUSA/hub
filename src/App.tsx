import { useState } from 'react';
import { 
  ShieldCheck, 
  Stethoscope, 
  Car, 
  Pizza, 
  Bot, 
  HeartPulse, 
  Briefcase, 
  Globe, 
  BookOpen, 
  UserCheck, 
  Search, 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Building2,
  Layers,
  PhoneCall
} from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'tecnologia' | 'saude' | 'servicos' | 'gastronomia' | 'cultura';
  categoryLabel: string;
  description: string;
  icon: any;
  features: string[];
  status: 'Desenvolvimento Próprio' | 'Plataforma Ativa';
  whatsappMessage: string;
}

export function App() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const whatsappNumber = '5511999999999'; // Número oficial de contato HelpUS
  const helpusEmail = 'contato@helpusbr.com';

  // As 10 aplicações oficiais desenvolvidas pela HelpUS
  const applications: AppItem[] = [
    {
      id: 'helpus-site',
      name: 'HelpUS Platform',
      subtitle: 'Portal Institucional & Infraestrutura Central',
      category: 'tecnologia',
      categoryLabel: 'Tecnologia & IA',
      description: 'Hub institucional da HelpUS responsável pela coordenação de serviços, gestão de clientes, infraestrutura e governança das aplicações.',
      icon: Building2,
      features: ['Central de Serviços', 'Gestão de Clientes', 'Suporte Técnico Coordenado'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Gostaria de obter mais informações sobre a plataforma institucional HelpUS.'
    },
    {
      id: 'usmle',
      name: 'HelpUS USMLE Prep',
      subtitle: 'Preparatório & Plataforma Médica Internacional',
      category: 'saude',
      categoryLabel: 'Saúde & Medicina',
      description: 'Plataforma especializada de estudos e simulados interativos para médicos e estudantes se prepararem para o exame de revalidação médica USMLE nos EUA.',
      icon: Stethoscope,
      features: ['Simulados e Questões Comentadas', 'Acompanhamento de Desempenho', 'Recursos para Revalidação Médica'],
      status: 'Desenvolvimento Próprio',
      whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre a plataforma HelpUS USMLE Prep.'
    },
    {
      id: 'wagnerdriver-site',
      name: 'HelpUS Executive Driver',
      subtitle: 'Mobilidade Executiva & Transporte VIP',
      category: 'servicos',
      categoryLabel: 'Serviços & Mobilidade',
      description: 'Solução digital para agendamento de transporte executivo, transfer vip, viagens particulares e gestão de corridas corporativas.',
      icon: Car,
      features: ['Agendamento de Viagens VIP', 'Atendimento Corporativo Exclusivo', 'Gestão de Rotas e Tarifas'],
      status: 'Desenvolvimento Próprio',
      whatsappMessage: 'Olá HelpUS! Tenho interesse na solução HelpUS Executive Driver.'
    },
    {
      id: 'pizza',
      name: 'HelpUS Pizza & Delivery',
      subtitle: 'Gestão & Pedidos Online para Pizzarias',
      category: 'gastronomia',
      categoryLabel: 'Alimentação & Delivery',
      description: 'Plataforma completa de delivery e gestão para pizzarias. Inclui cardápio digital interativo, pedidos na mesa e integração de entregas.',
      icon: Pizza,
      features: ['Cardápio Digital de Pizzas & Bebidas', 'Montagem de Sabores Meio-a-Meio', 'Gestão de Comandas & Delivery'],
      status: 'Desenvolvimento Próprio',
      whatsappMessage: 'Olá HelpUS! Quero conhecer a solução HelpUS Pizza & Delivery para meu estabelecimento.'
    },
    {
      id: 'nexosai',
      name: 'Nexos AI by HelpUS',
      subtitle: 'Inteligência Artificial & Agentes Autônomos',
      category: 'tecnologia',
      categoryLabel: 'Tecnologia & IA',
      description: 'Plataforma avançada de IA para criação de agentes virtuais autônomos, automação de processos de negócio e integração via WhatsApp e Webchat.',
      icon: Bot,
      features: ['Agentes de IA Treinados', 'Automação de Atendimento 24/7', 'Integração Oficial com WhatsApp'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Tenho interesse nos Agentes de IA da plataforma Nexos AI.'
    },
    {
      id: 'saude',
      name: 'HelpUS Saúde',
      subtitle: 'Telemedicina & Gestão Integrada de Saúde',
      category: 'saude',
      categoryLabel: 'Saúde & Medicina',
      description: 'Sistema completo para clínicas e profissionais da saúde. Oferece agendamento de consultas, prontuário eletrônico e atendimento por telemedicina.',
      icon: HeartPulse,
      features: ['Prontuário Eletrônico do Paciente', 'Agendamento Online de Consultas', 'Plataforma de Telemedicina Segura'],
      status: 'Desenvolvimento Próprio',
      whatsappMessage: 'Olá HelpUS! Gostaria de consultar sobre o HelpUS Saúde para clínicas/profissionais.'
    },
    {
      id: 'jobs',
      name: 'HelpUS Jobs',
      subtitle: 'Marketplace Multilíngue de Empregos',
      category: 'servicos',
      categoryLabel: 'Serviços & Mobilidade',
      description: 'Plataforma global multilíngue para conexão de trabalhadores, recrutadores e oportunidades de emprego com foco em carreiras internacionais.',
      icon: Briefcase,
      features: ['Busca Multilíngue de Vagas', 'Match Inteligente Candidato-Vaga', 'Perfis Profissionais Verificados'],
      status: 'Desenvolvimento Próprio',
      whatsappMessage: 'Olá HelpUS! Gostaria de entender mais sobre a plataforma HelpUS Jobs.'
    },
    {
      id: 'visa',
      name: 'HelpUS Visa & Imigração',
      subtitle: 'Assessoria de Vistos, Passaportes & Processos',
      category: 'servicos',
      categoryLabel: 'Serviços & Mobilidade',
      description: 'Plataforma de consulta e acompanhamento de processos de vistos, imigração, agendamento de passaportes e documentação internacional.',
      icon: Globe,
      features: ['Checklist de Documentação', 'Acompanhamento de Status de Visto', 'Consultoria Imigratória Direta'],
      status: 'Desenvolvimento Próprio',
      whatsappMessage: 'Olá HelpUS! Preciso de ajuda com vistos e processos no HelpUS Visa.'
    },
    {
      id: 'memoria-viva',
      name: 'HelpUS Memória Viva',
      subtitle: 'Preservação de Legado, Biografias & Histórias',
      category: 'cultura',
      categoryLabel: 'Cultura & Biografia',
      description: 'Plataforma afetiva para registro, organização e preservação da história de vida de famílias, acervos biográficos e memórias inesquecíveis.',
      icon: BookOpen,
      features: ['Linha do Tempo Biográfica', 'Acervo Digital de Fotos e Áudios', 'Compartilhamento Familiar Seguro'],
      status: 'Desenvolvimento Próprio',
      whatsappMessage: 'Olá HelpUS! Gostaria de conhecer o projeto HelpUS Memória Viva.'
    },
    {
      id: 'brayyan',
      name: 'HelpUS Brayyan',
      subtitle: 'Branding Pessoal & Portfólio de Soluções',
      category: 'cultura',
      categoryLabel: 'Cultura & Biografia',
      description: 'Portfólio de apresentação institucional e consultoria de branding pessoal para executivos, fundadores e projetos especiais da marca.',
      icon: UserCheck,
      features: ['Apresentação de Projetos Especiais', 'Branding e Presença Digital', 'Consultoria de Negócios'],
      status: 'Desenvolvimento Próprio',
      whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre as consultorias HelpUS Brayyan.'
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todas as Soluções (10)' },
    { id: 'tecnologia', label: 'Tecnologia & IA' },
    { id: 'saude', label: 'Saúde & Medicina' },
    { id: 'servicos', label: 'Serviços & Mobilidade' },
    { id: 'gastronomia', label: 'Alimentação & Delivery' },
    { id: 'cultura', label: 'Cultura & Biografia' }
  ];

  const filteredApps = applications.filter(app => {
    const matchesCategory = activeCategory === 'todos' || app.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

            {/* Search Input */}
            <div className="hidden md:flex items-center relative" style={{ width: '280px' }}>
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por aplicação ou palavra..."
                style={{
                  width: '100%',
                  paddingLeft: '36px',
                  paddingRight: '12px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  fontSize: '0.85rem',
                  border: '1px solid var(--border-light)',
                  borderRadius: '8px',
                  outline: 'none',
                  backgroundColor: '#ffffff'
                }}
              />
            </div>

            {/* Contact CTA */}
            <div>
              <button 
                onClick={() => openWhatsApp('Olá HelpUS! Gostaria de atendimento direto sobre os serviços.')}
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
            <span>Ecossistema Oficial de Aplicações Próprias HelpUS</span>
          </div>

          <h1 className="hub-hero-title">
            Plataformas e Serviços <span>HelpUS</span>
          </h1>

          <p className="hub-hero-desc">
            Explore a vitrine oficial das <strong>10 aplicações exclusivas</strong> desenvolvidas diretamente pela HelpUS. Conecte sua empresa, contratando ou solicitando suporte centralizado conosco.
          </p>

          {/* Quick Metrics Pill */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: '#ffffff', padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--border-light)', fontWeight: '600' }}>
              ⚡ 10 Soluções Próprias
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: '#ffffff', padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--border-light)', fontWeight: '600' }}>
              🛡️ Atendimento Direto HelpUS
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: '#ffffff', padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--border-light)', fontWeight: '600' }}>
              🌐 Em Expansão
            </span>
          </div>

          <div className="hub-hero-actions">
            <button 
              onClick={() => openWhatsApp('Olá HelpUS! Gostaria de consultar sobre a contratação das aplicações.')}
              className="hub-btn-primary"
            >
              <span>Contato Direto no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="hub-section">
        <div className="hub-container">
          
          <div className="hub-section-header" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <span className="hub-section-subtitle">Catálogo Oficial</span>
              <h2 className="hub-section-title">Aplicações em Desenvolvimento & Operação Própria</h2>
              <p className="hub-section-desc">
                Selecione uma área para navegar entre os nossos sistemas ou fale direto com nosso atendimento.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`hub-nav-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="hub-cards-grid">
            {filteredApps.map(app => {
              const IconComponent = app.icon;
              return (
                <div key={app.id} className="hub-card">
                  <div>
                    <div className="hub-card-top">
                      <div className="hub-card-icon">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className={`hub-card-badge ${app.status === 'Plataforma Ativa' ? 'hub-badge-green' : 'hub-badge-blue'}`}>
                        {app.status}
                      </span>
                    </div>

                    <h3 className="hub-card-title">{app.name}</h3>
                    <p className="hub-card-subtitle">{app.subtitle}</p>
                    <p className="hub-card-desc">{app.description}</p>

                    <ul className="hub-card-features">
                      {app.features.map((feat, idx) => (
                        <li key={idx}>
                          <Check className="w-4 h-4" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hub-card-bottom">
                    <div className="hub-card-price">
                      <span>Desenvolvido por</span>
                      <div>HelpUS</div>
                    </div>

                    <button
                      onClick={() => openWhatsApp(app.whatsappMessage)}
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

          {/* Partner Roadmap Announcement Banner */}
          <div style={{ 
            marginTop: '40px', 
            padding: '20px', 
            borderRadius: '16px', 
            background: '#ffffff', 
            border: '1px border-light', 
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{ padding: '12px', borderRadius: '12px', background: '#eff6ff', color: 'var(--primary)' }}>
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark)' }}>Próxima Fase do Ecossistema: Rede de Parceiros</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Atualmente apresentamos apenas as aplicações próprias da HelpUS. Em breve, abriremos espaço para a inclusão de sites e soluções homologadas de parceiros parceiros estratégicos.
              </p>
            </div>
          </div>

          {/* Contact Direct Callout Box */}
          <div className="hub-contact-card">
            <div className="hub-contact-info">
              <h3>Deseja contratar ou integrar uma dessas soluções?</h3>
              <p>
                Fale diretamente com o fundador e a equipe técnica da HelpUS para agendar uma demonstração ou solicitar uma versão personalizada para seu negócio.
              </p>
            </div>
            <div>
              <button 
                onClick={() => openWhatsApp('Olá HelpUS! Gostaria de agendar uma conversa sobre os sistemas do ecossistema.')}
                className="hub-btn-primary"
                style={{ background: '#ffffff', color: '#0f172a', fontWeight: '700' }}
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Atendimento WhatsApp HelpUS</span>
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
              <strong>HelpUS Technology Solutions</strong> © 2026 — 10 Aplicações Integradas.
            </div>
            <div>
              Contato Direto: <a href={`mailto:${helpusEmail}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>{helpusEmail}</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

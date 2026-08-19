import { useState, useEffect } from 'react';
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
  Sparkles, 
  Check, 
  Building2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Layers
} from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  subtitle: string;
  domain: string;
  liveUrl: string;
  category: 'tecnologia' | 'saude' | 'servicos' | 'gastronomia' | 'cultura';
  categoryLabel: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  status: 'Plataforma Ativa' | 'Desenvolvimento Próprio';
  whatsappMessage: string;
  featured?: boolean;
}

export function App() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Número oficial de WhatsApp atualizado
  const whatsappNumber = '5583998721848';
  const whatsappFormatted = '(83) 99872-1848';
  const helpusEmail = 'contato@helpusbr.com';

  // Lista oficial das 10 aplicações mapeadas diretamente com o DNS do Squarespace
  const applications: AppItem[] = [
    {
      id: 'helpus-site',
      name: 'HelpUS Platform',
      subtitle: 'Portal Institucional & Infraestrutura Central',
      domain: 'helpusbr.com',
      liveUrl: 'https://helpusbr.com',
      category: 'tecnologia',
      categoryLabel: 'Tecnologia & IA',
      description: 'Hub institucional da HelpUS responsável pela coordenação de serviços, gestão de clientes, infraestrutura e governança das aplicações.',
      icon: Building2,
      image: '/images/helpus_imoveis.jpg',
      features: ['Central de Serviços', 'Gestão de Clientes', 'Suporte Técnico Coordenado'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Gostaria de obter mais informações sobre a plataforma institucional HelpUS.',
      featured: true
    },
    {
      id: 'nexosai',
      name: 'Nexos AI by HelpUS',
      subtitle: 'Inteligência Artificial & Agentes Autônomos',
      domain: 'nexoai.helpusbr.com',
      liveUrl: 'https://nexoai.helpusbr.com',
      category: 'tecnologia',
      categoryLabel: 'Tecnologia & IA',
      description: 'Plataforma avançada de IA para criação de agentes virtuais autônomos, automação de processos de negócio e integração via WhatsApp e Webchat.',
      icon: Bot,
      image: '/images/helpus_ai.jpg',
      features: ['Agentes de IA Treinados', 'Automação de Atendimento 24/7', 'Integração Oficial com WhatsApp'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Tenho interesse nos Agentes de IA da plataforma Nexos AI.',
      featured: true
    },
    {
      id: 'usmle',
      name: 'HelpUS USMLE Prep',
      subtitle: 'Preparatório & Plataforma Médica Internacional',
      domain: 'usmle.helpusbr.com',
      liveUrl: 'https://usmle.helpusbr.com',
      category: 'saude',
      categoryLabel: 'Saúde & Medicina',
      description: 'Plataforma especializada de estudos e simulados interativos para médicos e estudantes se prepararem para o exame de revalidação médica USMLE nos EUA.',
      icon: Stethoscope,
      image: '/images/helpus_health.jpg',
      features: ['Simulados e Questões Comentadas', 'Acompanhamento de Desempenho', 'Recursos para Revalidação Médica'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre a plataforma HelpUS USMLE Prep.',
      featured: true
    },
    {
      id: 'saude',
      name: 'HelpUS Saúde',
      subtitle: 'Telemedicina & Gestão Integrada de Saúde',
      domain: 'health.helpusbr.com',
      liveUrl: 'https://health.helpusbr.com',
      category: 'saude',
      categoryLabel: 'Saúde & Medicina',
      description: 'Sistema completo para clínicas e profissionais da saúde. Oferece agendamento de consultas, prontuário eletrônico e atendimento por telemedicina.',
      icon: HeartPulse,
      image: '/images/helpus_health.jpg',
      features: ['Prontuário Eletrônico do Paciente', 'Agendamento Online de Consultas', 'Plataforma de Telemedicina Segura'],
      status: 'Desenvolvimento Próprio',
      whatsappMessage: 'Olá HelpUS! Gostaria de consultar sobre o HelpUS Saúde para clínicas/profissionais.',
      featured: true
    },
    {
      id: 'wagnerdriver-site',
      name: 'HelpUS Executive Driver',
      subtitle: 'Mobilidade Executiva & Transporte VIP',
      domain: 'wagnerdriver.helpusbr.com',
      liveUrl: 'https://wagnerdriver.helpusbr.com',
      category: 'servicos',
      categoryLabel: 'Serviços & Mobilidade',
      description: 'Solução digital para agendamento de transporte executivo, transfer vip, viagens particulares e gestão de corridas corporativas.',
      icon: Car,
      image: '/images/helpus_events.jpg',
      features: ['Agendamento de Viagens VIP', 'Atendimento Corporativo Exclusivo', 'Gestão de Rotas e Tarifas'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Tenho interesse na solução HelpUS Executive Driver.',
      featured: true
    },
    {
      id: 'pizza',
      name: 'HelpUS Pizza & Delivery',
      subtitle: 'Gestão & Pedidos Online para Pizzarias',
      domain: 'pizza.helpusbr.com',
      liveUrl: 'https://pizza.helpusbr.com',
      category: 'gastronomia',
      categoryLabel: 'Alimentação & Delivery',
      description: 'Plataforma completa de delivery e gestão para pizzarias. Inclui cardápio digital interativo, pedidos na mesa e integração de entregas.',
      icon: Pizza,
      image: '/images/helpus_barber.jpg',
      features: ['Cardápio Digital de Pizzas & Bebidas', 'Montagem de Sabores Meio-a-Meio', 'Gestão de Comandas & Delivery'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Quero conhecer a solução HelpUS Pizza & Delivery para meu estabelecimento.'
    },
    {
      id: 'jobs',
      name: 'HelpUS Jobs',
      subtitle: 'Marketplace Multilíngue de Empregos',
      domain: 'jobs.helpusbr.com',
      liveUrl: 'https://jobs.helpusbr.com',
      category: 'servicos',
      categoryLabel: 'Serviços & Mobilidade',
      description: 'Plataforma global multilíngue para conexão de trabalhadores, recrutadores e oportunidades de emprego com foco em carreiras internacionais.',
      icon: Briefcase,
      image: '/images/helpus_events.jpg',
      features: ['Busca Multilíngue de Vagas', 'Match Inteligente Candidato-Vaga', 'Perfis Profissionais Verificados'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Gostaria de entender mais sobre a plataforma HelpUS Jobs.'
    },
    {
      id: 'visa',
      name: 'HelpUS Visa & Imigração',
      subtitle: 'Assessoria de Vistos, Passaportes & Processos',
      domain: 'visa.helpusbr.com',
      liveUrl: 'https://visa.helpusbr.com',
      category: 'servicos',
      categoryLabel: 'Serviços & Mobilidade',
      description: 'Plataforma de consulta e acompanhamento de processos de vistos, imigração, agendamento de passaportes e documentação internacional.',
      icon: Globe,
      image: '/images/helpus_imoveis.jpg',
      features: ['Checklist de Documentação', 'Acompanhamento de Status de Visto', 'Consultoria Imigratória Direta'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Preciso de ajuda com vistos e processos no HelpUS Visa.'
    },
    {
      id: 'memoria-viva',
      name: 'HelpUS Memória Viva',
      subtitle: 'Preservação de Legado, Biografias & Histórias',
      domain: 'memoriaviva.helpusbr.com',
      liveUrl: 'https://memoriaviva.helpusbr.com',
      category: 'cultura',
      categoryLabel: 'Cultura & Biografia',
      description: 'Plataforma afetiva para registro, organização e preservação da história de vida de famílias, acervos biográficos e memórias inesquecíveis.',
      icon: BookOpen,
      image: '/images/helpus_barber.jpg',
      features: ['Linha do Tempo Biográfica', 'Acervo Digital de Fotos e Áudios', 'Compartilhamento Familiar Seguro'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Gostaria de conhecer o projeto HelpUS Memória Viva.'
    },
    {
      id: 'brayyan',
      name: 'HelpUS Brayyan',
      subtitle: 'Branding Pessoal & Portfólio de Soluções',
      domain: 'brayyan.helpusbr.com',
      liveUrl: 'https://brayyan.helpusbr.com',
      category: 'cultura',
      categoryLabel: 'Cultura & Biografia',
      description: 'Portfólio de apresentação institucional e consultoria de branding pessoal para executivos, fundadores e projetos especiais da marca.',
      icon: UserCheck,
      image: '/images/helpus_ai.jpg',
      features: ['Apresentação de Projetos Especiais', 'Branding e Presença Digital', 'Consultoria de Negócios'],
      status: 'Plataforma Ativa',
      whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre as consultorias HelpUS Brayyan.'
    }
  ];

  const featuredApps = applications.filter(a => a.featured);

  // Carousel Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % featuredApps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredApps.length]);

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
      app.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  const activeCarouselApp = featuredApps[currentSlideIndex] || featuredApps[0];

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
                placeholder="Buscar por subdomínio ou aplicação..."
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
                onClick={() => openWhatsApp('Olá HelpUS! Gostaria de atendimento direto sobre o ecossistema de aplicações.')}
                className="hub-btn-primary"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Atendimento WhatsApp {whatsappFormatted}</span>
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
            <span>Ecossistema Oficial de Aplicações HelpUS</span>
          </div>

          <h1 className="hub-hero-title">
            Plataformas e Serviços <span>HelpUS</span>
          </h1>

          <p className="hub-hero-desc">
            Acesse diretamente os sites e sistemas desenvolvidos pela <strong>HelpUS</strong>. O hub central para coordenação de serviços, suporte e atendimento corporativo pelo WhatsApp <strong>{whatsappFormatted}</strong>.
          </p>

          {/* Featured Interactive Carousel */}
          <div className="hub-carousel-wrapper">
            <div className="hub-carousel">
              <div className="hub-carousel-inner">
                
                {/* Left Side: App Details */}
                <div className="hub-carousel-content">
                  <span className="hub-carousel-tag">
                    ★ Destaque do Ecossistema ({currentSlideIndex + 1}/{featuredApps.length})
                  </span>
                  
                  <h2 className="hub-carousel-title">{activeCarouselApp.name}</h2>
                  <div className="hub-carousel-subdomain">
                    <Globe className="w-4 h-4" /> {activeCarouselApp.domain}
                  </div>
                  
                  <p className="hub-carousel-desc">{activeCarouselApp.description}</p>
                  
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a 
                      href={activeCarouselApp.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hub-btn-primary"
                    >
                      <span>Acessar {activeCarouselApp.domain}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    
                    <button
                      onClick={() => openWhatsApp(activeCarouselApp.whatsappMessage)}
                      className="hub-btn-secondary"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Falar sobre este Sistema</span>
                    </button>
                  </div>
                </div>

                {/* Right Side: Image Showcase Frame */}
                <div className="hub-carousel-img-frame">
                  <img
                    src={activeCarouselApp.image}
                    alt={activeCarouselApp.name}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '12px', 
                    right: '12px', 
                    background: 'rgba(15, 23, 42, 0.85)', 
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {activeCarouselApp.status}
                  </div>
                </div>

              </div>

              {/* Carousel Navigation Controls */}
              <div className="hub-carousel-nav">
                <div className="hub-carousel-dots">
                  {featuredApps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`hub-carousel-dot ${currentSlideIndex === idx ? 'active' : ''}`}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + featuredApps.length) % featuredApps.length)}
                    className="hub-carousel-arrow"
                    title="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % featuredApps.length)}
                    className="hub-carousel-arrow"
                    title="Próximo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="hub-section">
        <div className="hub-container">
          
          <div className="hub-section-header" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <span className="hub-section-subtitle">Aplicações Próprias</span>
              <h2 className="hub-section-title">Catálogo Completo dos 10 Serviços HelpUS</h2>
              <p className="hub-section-desc">
                Acesse o subdomínio direto de cada sistema ou entre em contato com nosso atendimento para suporte e contratação.
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
                    <span className="hub-card-subdomain">{app.domain}</span>
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
                    <div className="hub-card-action-row">
                      <a
                        href={app.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hub-btn-access"
                      >
                        <span>Acessar {app.domain}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => openWhatsApp(app.whatsappMessage)}
                        className="hub-btn-whatsapp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
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
            border: '1px solid var(--border-light)', 
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{ padding: '12px', borderRadius: '12px', background: '#eff6ff', color: 'var(--primary)' }}>
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark)' }}>Rede de Parceiros em Breve</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Atualmente este catálogo exibe exclusivamente as 10 aplicações próprias da HelpUS mapeadas nos servidores. Em breve, abriremos espaço para novos parceiros homologados.
              </p>
            </div>
          </div>

          {/* Contact Direct Callout Box */}
          <div className="hub-contact-card">
            <div className="hub-contact-info">
              <h3>Deseja contratar ou integrar uma dessas soluções?</h3>
              <p>
                Fale diretamente com a equipe da HelpUS pelo WhatsApp <strong>{whatsappFormatted}</strong> para tirar dúvidas, agendar apresentações ou solicitar personalizações.
              </p>
            </div>
            <div>
              <button 
                onClick={() => openWhatsApp('Olá HelpUS! Gostaria de agendar uma conversa sobre os sistemas do ecossistema.')}
                className="hub-btn-primary"
                style={{ background: '#ffffff', color: '#0f172a', fontWeight: '700' }}
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Atendimento WhatsApp {whatsappFormatted}</span>
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
              <strong>HelpUS Technology Solutions</strong> © 2026 — 10 Aplicações Mapeadas.
            </div>
            <div>
              Atendimento WhatsApp: <strong style={{ color: 'var(--text-dark)' }}>{whatsappFormatted}</strong> | Email: <a href={`mailto:${helpusEmail}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>{helpusEmail}</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

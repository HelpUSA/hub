import { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Car, 
  Pizza, 
  Bot, 
  HeartPulse, 
  Briefcase, 
  Globe, 
  BookOpen, 
  UserCheck, 
  MessageSquare, 
  Sparkles, 
  Check, 
  Building2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Layers,
  Globe2,
  Menu,
  X,
  Send
} from 'lucide-react';

import { translations, type Language } from './i18n/translations';

interface AppItem {
  id: string;
  domain: string;
  liveUrl: string;
  category: 'tecnologia' | 'saude' | 'servicos' | 'gastronomia' | 'cultura';
  icon: any;
  image: string;
  status: 'Plataforma Ativa' | 'Desenvolvimento Próprio';
  featured?: boolean;
}

export function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const t = translations[lang];

  // WhatsApp oficial HelpUS
  const whatsappNumber = '5583998721848';
  const whatsappFormatted = '(83) 99872-1848';
  const helpusEmail = 'contato@helpusbr.com';

  // Lista de dados base das 10 aplicações mapeadas
  const applications: AppItem[] = [
    {
      id: 'helpus-site',
      domain: 'helpusbr.com',
      liveUrl: 'https://helpusbr.com',
      category: 'tecnologia',
      icon: Building2,
      image: '/images/helpus_imoveis.jpg',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'nexosai',
      domain: 'nexoai.helpusbr.com',
      liveUrl: 'https://nexoai.helpusbr.com',
      category: 'tecnologia',
      icon: Bot,
      image: '/images/helpus_ai.jpg',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'usmle',
      domain: 'usmle.helpusbr.com',
      liveUrl: 'https://usmle.helpusbr.com',
      category: 'saude',
      icon: Stethoscope,
      image: '/images/helpus_health.jpg',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'saude',
      domain: 'health.helpusbr.com',
      liveUrl: 'https://health.helpusbr.com',
      category: 'saude',
      icon: HeartPulse,
      image: '/images/helpus_health.jpg',
      status: 'Desenvolvimento Próprio',
      featured: true
    },
    {
      id: 'wagnerdriver-site',
      domain: 'wagnerdriver.helpusbr.com',
      liveUrl: 'https://wagnerdriver.helpusbr.com',
      category: 'servicos',
      icon: Car,
      image: '/images/helpus_events.jpg',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'pizza',
      domain: 'pizza.helpusbr.com',
      liveUrl: 'https://pizza.helpusbr.com',
      category: 'gastronomia',
      icon: Pizza,
      image: '/images/helpus_barber.jpg',
      status: 'Plataforma Ativa'
    },
    {
      id: 'jobs',
      domain: 'jobs.helpusbr.com',
      liveUrl: 'https://jobs.helpusbr.com',
      category: 'servicos',
      icon: Briefcase,
      image: '/images/helpus_events.jpg',
      status: 'Plataforma Ativa'
    },
    {
      id: 'visa',
      domain: 'visa.helpusbr.com',
      liveUrl: 'https://visa.helpusbr.com',
      category: 'servicos',
      icon: Globe,
      image: '/images/helpus_imoveis.jpg',
      status: 'Plataforma Ativa'
    },
    {
      id: 'memoria-viva',
      domain: 'memoriaviva.helpusbr.com',
      liveUrl: 'https://memoriaviva.helpusbr.com',
      category: 'cultura',
      icon: BookOpen,
      image: '/images/helpus_barber.jpg',
      status: 'Plataforma Ativa'
    },
    {
      id: 'brayyan',
      domain: 'brayyan.helpusbr.com',
      liveUrl: 'https://brayyan.helpusbr.com',
      category: 'cultura',
      icon: UserCheck,
      image: '/images/helpus_ai.jpg',
      status: 'Plataforma Ativa'
    }
  ];

  const featuredApps = applications.filter(a => a.featured);

  // Auto-play timer do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % featuredApps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredApps.length]);

  const categoryGroups = [
    { id: 'tecnologia', label: t.categories.tecnologia, icon: Bot },
    { id: 'saude', label: t.categories.saude, icon: Stethoscope },
    { id: 'servicos', label: t.categories.servicos, icon: Car },
    { id: 'gastronomia', label: t.categories.gastronomia, icon: Pizza },
    { id: 'cultura', label: t.categories.cultura, icon: BookOpen }
  ];

  const categoryPills = [
    { id: 'todos', label: t.categories.todos },
    { id: 'tecnologia', label: t.categories.tecnologia },
    { id: 'saude', label: t.categories.saude },
    { id: 'servicos', label: t.categories.servicos },
    { id: 'gastronomia', label: t.categories.gastronomia },
    { id: 'cultura', label: t.categories.cultura }
  ];

  const openWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  const activeCarouselApp = featuredApps[currentSlideIndex] || featuredApps[0];
  const activeCarouselTrans = t.apps[activeCarouselApp.id];

  return (
    <div className="hub-app">
      
      {/* Header Navbar */}
      <header className="hub-header">
        <div className="hub-container">
          <div className="hub-header-inner">
            
            {/* Official Uploaded HelpUS Logo Image */}
            <a href="#" className="hub-logo-img-link">
              <img
                src="/images/helpus_logo.png"
                alt="HelpUS Logo"
                className="hub-logo-img"
              />
            </a>

            {/* Desktop Category Navigation */}
            <nav className="hub-nav-links">
              {categoryPills.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`hub-nav-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </nav>

            {/* Native Language Switcher (PT | EN | ES) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              
              <div className="hub-lang-switcher">
                <button
                  onClick={() => setLang('pt')}
                  className={`hub-lang-btn ${lang === 'pt' ? 'active' : ''}`}
                  title="Português"
                >
                  PT
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`hub-lang-btn ${lang === 'en' ? 'active' : ''}`}
                  title="English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('es')}
                  className={`hub-lang-btn ${lang === 'es' ? 'active' : ''}`}
                  title="Español"
                >
                  ES
                </button>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hub-mobile-menu-btn"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="hub-mobile-drawer open">
            {categoryPills.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`hub-nav-btn ${activeCategory === cat.id ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section (Zoho All Products Inspired) */}
      <section className="hub-hero">
        <div className="hub-container">
          <div className="hub-hero-badge">
            <Sparkles className="w-4 h-4" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="hub-hero-title">
            {t.hero.title}
          </h1>

          <p className="hub-hero-desc">
            {t.hero.subtitle}
          </p>

          {/* Featured Interactive Carousel Showcase */}
          <div className="hub-carousel-wrapper">
            <div className="hub-carousel">
              <div className="hub-carousel-inner">
                
                {/* Left Side: App Details */}
                <div className="hub-carousel-content">
                  <span className="hub-carousel-tag">
                    ★ Destaque ({currentSlideIndex + 1}/{featuredApps.length})
                  </span>
                  
                  <h2 className="hub-carousel-title">{activeCarouselTrans?.name}</h2>
                  <div className="hub-carousel-subdomain">
                    <Globe2 className="w-4 h-4" /> {activeCarouselApp.domain}
                  </div>
                  
                  <p className="hub-carousel-desc">{activeCarouselTrans?.description}</p>
                  
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a 
                      href={activeCarouselApp.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hub-btn-primary"
                    >
                      <span>{t.catalog.accessApp} ({activeCarouselApp.domain})</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    
                    <button
                      onClick={() => openWhatsApp(activeCarouselTrans?.whatsappMessage || '')}
                      className="hub-btn-secondary"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>{t.catalog.whatsappContact}</span>
                    </button>
                  </div>
                </div>

                {/* Right Side: Image Showcase Frame */}
                <div className="hub-carousel-img-frame">
                  <img
                    src={activeCarouselApp.image}
                    alt={activeCarouselTrans?.name}
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

      {/* Main Catalog Section (Zoho Inspired Category Groups) */}
      <section className="hub-section">
        <div className="hub-container">
          
          <div className="hub-section-header">
            <span className="hub-section-subtitle">HelpUS Ecosystem</span>
            <h2 className="hub-section-title">{t.catalog.title}</h2>
            <p className="hub-section-desc">{t.catalog.subtitle}</p>
          </div>

          {/* Render Categories grouped or filtered */}
          {categoryGroups.map(group => {
            if (activeCategory !== 'todos' && activeCategory !== group.id) return null;
            
            const groupApps = applications.filter(a => a.category === group.id);
            if (groupApps.length === 0) return null;

            const GroupIcon = group.icon;

            return (
              <div key={group.id} className="hub-category-group">
                
                {/* Category Header Bar */}
                <div className="hub-category-header">
                  <div className="hub-category-header-icon">
                    <GroupIcon className="w-5 h-5" />
                  </div>
                  <h3 className="hub-category-header-title">{t.categories[group.id as keyof typeof t.categories]}</h3>
                </div>

                {/* Grid of Cards */}
                <div className="hub-cards-grid">
                  {groupApps.map(app => {
                    const IconComponent = app.icon;
                    const appTrans = t.apps[app.id];
                    if (!appTrans) return null;

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

                          <h3 className="hub-card-title">{appTrans.name}</h3>
                          <span className="hub-card-subdomain">{app.domain}</span>
                          <p className="hub-card-subtitle">{appTrans.subtitle}</p>
                          <p className="hub-card-desc">{appTrans.description}</p>

                          <ul className="hub-card-features">
                            {appTrans.features.map((feat, idx) => (
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
                              <span>{t.catalog.accessApp}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>

                            <button
                              onClick={() => openWhatsApp(appTrans.whatsappMessage)}
                              className="hub-btn-whatsapp-card"
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

              </div>
            );
          })}

          {/* Partner Roadmap Banner */}
          <div style={{ 
            marginTop: '40px', 
            padding: '24px', 
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
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-dark)' }}>{t.catalog.partnerBannerTitle}</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                {t.catalog.partnerBannerDesc}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Clean Light Footer */}
      <footer className="hub-footer">
        <div className="hub-container">
          <div className="hub-footer-inner">
            <div className="hub-footer-brand">
              <img
                src="/images/helpus_logo.png"
                alt="HelpUS Logo"
                className="hub-footer-logo"
              />
              <div>
                <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>{t.footer.rights}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>10 Aplicações em Operação & Desenvolvimento</p>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>{t.footer.contactTitle}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {t.footer.whatsapp}: <strong style={{ color: 'var(--primary)' }}>{whatsappFormatted}</strong>
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Email: <a href={`mailto:${helpusEmail}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>{helpusEmail}</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Animated WhatsApp Icon Button in Bottom-Right Corner */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá HelpUS! Gostaria de falar com o atendimento pelo portal.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hub-whatsapp-floating"
        title="Falar no WhatsApp HelpUS"
      >
        <Send className="w-7 h-7" />
      </a>

    </div>
  );
}

export default App;

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
  Layers,
  Globe2
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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const t = translations[lang];

  // Número oficial de WhatsApp
  const whatsappNumber = '5583998721848';
  const whatsappFormatted = '(83) 99872-1848';
  const helpusEmail = 'contato@helpusbr.com';

  // Lista de dados base das 10 aplicações
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

  const categoryPills = [
    { id: 'todos', label: t.categories.todos },
    { id: 'tecnologia', label: t.categories.tecnologia },
    { id: 'saude', label: t.categories.saude },
    { id: 'servicos', label: t.categories.servicos },
    { id: 'gastronomia', label: t.categories.gastronomia },
    { id: 'cultura', label: t.categories.cultura }
  ];

  const filteredApps = applications.filter(app => {
    const appTrans = t.apps[app.id];
    const matchesCategory = activeCategory === 'todos' || app.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      (appTrans && appTrans.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      app.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (appTrans && appTrans.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (appTrans && appTrans.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            <div className="hidden md:flex items-center relative" style={{ width: '260px' }}>
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'pt' ? "Buscar subdomínio ou serviço..." : "Search subdomain or service..."}
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

            {/* Native Language Switcher & Contact CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              
              {/* Native Language Switcher Pill */}
              <div className="hub-lang-switcher">
                <button
                  onClick={() => setLang('pt')}
                  className={`hub-lang-btn ${lang === 'pt' ? 'active' : ''}`}
                >
                  🇧🇷 PT
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`hub-lang-btn ${lang === 'en' ? 'active' : ''}`}
                >
                  🇺🇸 EN
                </button>
              </div>

              <button 
                onClick={() => openWhatsApp(t.apps['helpus-site'].whatsappMessage)}
                className="hub-btn-primary"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.nav.whatsappButton}</span>
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
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="hub-hero-title">
            {t.hero.titleStart}<span>{t.hero.titleSpan}</span>
          </h1>

          <p className="hub-hero-desc">
            {t.hero.desc}
          </p>

          {/* Featured Interactive Carousel */}
          <div className="hub-carousel-wrapper">
            <div className="hub-carousel">
              <div className="hub-carousel-inner">
                
                {/* Left Side: App Details */}
                <div className="hub-carousel-content">
                  <span className="hub-carousel-tag">
                    {t.carousel.featuredTag} ({currentSlideIndex + 1}/{featuredApps.length})
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
                      <span>{t.carousel.accessButton} {activeCarouselApp.domain}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    
                    <button
                      onClick={() => openWhatsApp(activeCarouselTrans?.whatsappMessage || '')}
                      className="hub-btn-secondary"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>{t.carousel.talkButton}</span>
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
                    title="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % featuredApps.length)}
                    className="hub-carousel-arrow"
                    title="Next"
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
              <span className="hub-section-subtitle">{t.catalog.subtitle}</span>
              <h2 className="hub-section-title">{t.catalog.title}</h2>
              <p className="hub-section-desc">{t.catalog.desc}</p>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
              {categoryPills.map(cat => (
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
                        <span>{t.catalog.accessSite} {app.domain}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => openWhatsApp(appTrans.whatsappMessage)}
                        className="hub-btn-whatsapp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{t.catalog.whatsapp}</span>
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
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark)' }}>{t.catalog.partnerBannerTitle}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                {t.catalog.partnerBannerDesc}
              </p>
            </div>
          </div>

          {/* Contact Direct Callout Box */}
          <div className="hub-contact-card">
            <div className="hub-contact-info">
              <h3>{t.catalog.customContactTitle}</h3>
              <p>{t.catalog.customContactDesc}</p>
            </div>
            <div>
              <button 
                onClick={() => openWhatsApp('Olá HelpUS! Gostaria de agendar uma conversa sobre os sistemas do ecossistema.')}
                className="hub-btn-primary"
                style={{ background: '#ffffff', color: '#0f172a', fontWeight: '700' }}
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>{t.catalog.customContactCta}</span>
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
              <strong>HelpUS Technology Solutions</strong> © 2026 — 10 Mapped Applications.
            </div>
            <div>
              {t.footer.contact}: <strong style={{ color: 'var(--text-dark)' }}>{whatsappFormatted}</strong> | Email: <a href={`mailto:${helpusEmail}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>{helpusEmail}</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

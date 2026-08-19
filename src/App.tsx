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
  Check, 
  Code2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Layers,
  Globe2,
  Menu,
  X,
  Send,
  Info,
  HelpCircle,
  FileText,
  Sparkles,
  Users,
  ArrowRight
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

  // Modal States
  const [selectedAppForDetail, setSelectedAppForDetail] = useState<AppItem | null>(null);
  const [activeInfoModal, setActiveInfoModal] = useState<'institutional' | 'help' | 'privacy' | null>(null);
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);

  const t = translations[lang];

  // WhatsApp oficial HelpUS
  const whatsappNumber = '5583998721848';
  const whatsappFormatted = '(83) 99872-1848';
  const helpusEmail = 'contato@helpusbr.com';

  // Lista de dados base das 10 soluções (com Software Development no lugar do antigo Platform)
  const applications: AppItem[] = [
    {
      id: 'helpus-site',
      domain: 'helpusbr.com',
      liveUrl: 'https://helpusbr.com',
      category: 'tecnologia',
      icon: Code2,
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

            {/* Header Standard Navigation Links (Institucional, Soluções, Ajuda, Contato) */}
            <nav className="hub-nav-links">
              <button
                onClick={() => setActiveInfoModal('institutional')}
                className="hub-nav-btn"
              >
                <Info className="w-4 h-4 text-blue-600" />
                <span>{t.nav.institutional}</span>
              </button>

              <a
                href="#solucoes"
                className="hub-nav-btn"
              >
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>{t.nav.solutions}</span>
              </a>

              <button
                onClick={() => setActiveInfoModal('help')}
                className="hub-nav-btn"
              >
                <HelpCircle className="w-4 h-4 text-cyan-600" />
                <span>{t.nav.help}</span>
              </button>

              <a
                href="#contato-footer"
                className="hub-nav-btn"
              >
                <Send className="w-4 h-4 text-emerald-600" />
                <span>{t.nav.contact}</span>
              </a>
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

              {/* Mobile Hamburger Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hub-mobile-menu-btn"
                title="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer for Smartphones */}
        {mobileMenuOpen && (
          <div className="hub-mobile-drawer open">
            <button
              onClick={() => {
                setActiveInfoModal('institutional');
                setMobileMenuOpen(false);
              }}
              className="hub-nav-btn"
              style={{ width: '100%', justifyContent: 'flex-start' }}
            >
              <Info className="w-4 h-4 text-blue-600" />
              <span>{t.nav.institutional}</span>
            </button>

            <a
              href="#solucoes"
              onClick={() => setMobileMenuOpen(false)}
              className="hub-nav-btn"
              style={{ width: '100%', justifyContent: 'flex-start' }}
            >
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>{t.nav.solutions}</span>
            </a>

            <button
              onClick={() => {
                setActiveInfoModal('help');
                setMobileMenuOpen(false);
              }}
              className="hub-nav-btn"
              style={{ width: '100%', justifyContent: 'flex-start' }}
            >
              <HelpCircle className="w-4 h-4 text-cyan-600" />
              <span>{t.nav.help}</span>
            </button>

            <a
              href="#contato-footer"
              onClick={() => setMobileMenuOpen(false)}
              className="hub-nav-btn"
              style={{ width: '100%', justifyContent: 'flex-start' }}
            >
              <Send className="w-4 h-4 text-emerald-600" />
              <span>{t.nav.contact}</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hub-hero">
        <div className="hub-container">

          <h1 className="hub-hero-title">
            {t.hero.title}
          </h1>

          <p className="hub-hero-desc">
            {t.hero.subtitle}
          </p>

          {/* Featured Interactive Carousel Showcase (Zoho Style) */}
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
                  
                  {/* Single CTA Button: Experimente Agora */}
                  <div>
                    <button
                      onClick={() => setSelectedAppForDetail(activeCarouselApp)}
                      className="hub-btn-primary"
                      style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{t.catalog.tryNow}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
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
      <section id="solucoes" className="hub-section">
        <div className="hub-container">
          
          <div className="hub-section-header" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <span className="hub-section-subtitle">Catálogo Completo</span>
              <h2 className="hub-section-title">{t.catalog.title}</h2>
              <p className="hub-section-desc">{t.catalog.subtitle}</p>
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
                            {appTrans.features.slice(0, 3).map((feat, idx) => (
                              <li key={idx}>
                                <Check className="w-4 h-4" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Single CTA Button: Experimente Agora */}
                        <div className="hub-card-bottom">
                          <button
                            onClick={() => setSelectedAppForDetail(app)}
                            className="hub-btn-primary"
                            style={{ width: '100%', justifyContent: 'center' }}
                          >
                            <span>{t.catalog.tryNow}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
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
      <footer id="contato-footer" className="hub-footer">
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
                <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', marginTop: '4px' }}>
                  <button onClick={() => setActiveInfoModal('institutional')} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: '600' }}>{t.nav.institutional}</button>
                  <span>•</span>
                  <button onClick={() => setActiveInfoModal('privacy')} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: '600' }}>{t.footer.privacy}</button>
                  <span>•</span>
                  <button onClick={() => setActiveInfoModal('privacy')} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: '600' }}>{t.footer.terms}</button>
                </div>
              </div>
            </div>

            {/* Single Contact Entry */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>{t.footer.contactTitle}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {t.footer.whatsapp} ({whatsappFormatted})
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Email: <a href={`mailto:${helpusEmail}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>{helpusEmail}</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Pre-Landing Application Detail Modal (Zoho Style) */}
      {selectedAppForDetail && (
        <div className="hub-modal-overlay" onClick={() => setSelectedAppForDetail(null)}>
          <div className="hub-modal-box" onClick={(e) => e.stopPropagation()}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase' }}>
                  {t.detailsModal.overview}
                </span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-dark)' }}>
                  {t.apps[selectedAppForDetail.id]?.name}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedAppForDetail(null)}
                style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-light)', padding: '8px', borderRadius: '10px', cursor: 'pointer' }}
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Screenshot Preview Frame */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '260px', border: '1px solid var(--border-light)', marginBottom: '20px', background: '#0f172a' }}>
              <img src={selectedAppForDetail.image} alt={selectedAppForDetail.domain} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', fontFamily: 'monospace', marginBottom: '6px' }}>
                {t.detailsModal.subdomain} <a href={selectedAppForDetail.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>{selectedAppForDetail.domain}</a>
              </p>
              
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '10px' }}>
                {t.apps[selectedAppForDetail.id]?.subtitle}
              </h4>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '20px' }}>
                {t.apps[selectedAppForDetail.id]?.detailsContent}
              </p>

              {/* Target Audience Box */}
              {t.apps[selectedAppForDetail.id]?.targetAudience && (
                <div style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '14px 18px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Público Alvo:</span>
                    <p style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-dark)', marginTop: '1px' }}>
                      {t.apps[selectedAppForDetail.id]?.targetAudience}
                    </p>
                  </div>
                </div>
              )}

              <h5 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '12px' }}>
                {t.detailsModal.keyFeatures}:
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {t.apps[selectedAppForDetail.id]?.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Bottom CTA: Go to Real Application */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
              <button onClick={() => setSelectedAppForDetail(null)} className="hub-btn-secondary">
                {t.detailsModal.close}
              </button>
              <a href={selectedAppForDetail.liveUrl} target="_blank" rel="noopener noreferrer" className="hub-btn-primary" style={{ padding: '12px 20px' }}>
                <span>{t.detailsModal.launchRealApp}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Info Modals (Institucional, Ajuda, Privacidade) */}
      {activeInfoModal && (
        <div className="hub-modal-overlay" onClick={() => setActiveInfoModal(null)}>
          <div className="hub-modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-dark)' }}>
                {activeInfoModal === 'institutional' && t.modals.institutionalTitle}
                {activeInfoModal === 'help' && t.modals.helpTitle}
                {activeInfoModal === 'privacy' && t.modals.privacyTitle}
              </h3>
              <button onClick={() => setActiveInfoModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
              {activeInfoModal === 'institutional' && t.modals.institutionalDesc}
              {activeInfoModal === 'help' && t.modals.helpDesc}
              {activeInfoModal === 'privacy' && t.modals.privacyDesc}
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setActiveInfoModal(null)} className="hub-btn-primary">
                {t.detailsModal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Animated WhatsApp Icon Button in Bottom-Right Corner */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá HelpUS! Gostaria de falar com o atendimento pelo portal.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hub-whatsapp-floating"
        title="Atendimento WhatsApp HelpUS"
      >
        <Send className="w-7 h-7" />
      </a>

      {/* Cookie Notice Banner Toast */}
      {!cookiesAccepted && (
        <div className="hub-cookie-banner">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <FileText className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.4' }}>
              {t.cookies.text}{' '}
              <button onClick={() => setActiveInfoModal('privacy')} style={{ color: '#60a5fa', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>
                {t.cookies.privacyLink}
              </button>.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={() => setCookiesAccepted(true)} className="hub-btn-primary" style={{ padding: '6px 12px', fontSize: '0.78rem' }}>
              {t.cookies.accept}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;

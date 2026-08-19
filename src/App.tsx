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
  ChevronDown,
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
  ArrowRight,
  ArrowLeft,
  Cpu,
  FolderGit2,
  MessageSquare
} from 'lucide-react';

import { translations, type Language } from './i18n/translations';

interface AppItem {
  id: string;
  domain: string;
  liveUrl: string;
  category: 'tecnologia' | 'saude' | 'servicos' | 'gastronomia' | 'cultura';
  icon: any;
  image: string;
  folderPath: string;
  status: 'Plataforma Ativa' | 'Desenvolvimento Próprio';
  featured?: boolean;
}

export function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [langDropdownOpen, setLangDropdownOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Full-page Detail View & History Navigation State
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  
  // Info Modals (Institucional, Ajuda, Privacidade)
  const [activeInfoModal, setActiveInfoModal] = useState<'institutional' | 'help' | 'privacy' | null>(null);
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);

  const t = translations[lang];

  // WhatsApp oficial HelpUS
  const whatsappNumber = '5583998721848';
  const whatsappFormatted = '(83) 99872-1848';
  const helpusEmail = 'contato@helpusbr.com';

  // Lista de dados das 10 aplicações mapeadas nos diretórios locais
  const applications: AppItem[] = [
    {
      id: 'helpus-site',
      domain: 'helpusbr.com',
      liveUrl: 'https://helpusbr.com',
      category: 'tecnologia',
      icon: Code2,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\helpus-site',
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
      folderPath: 'D:\\dev\\nexosai',
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
      folderPath: 'D:\\dev\\usmle',
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
      folderPath: 'D:\\dev\\saude',
      status: 'Desenvolvimento Próprio',
      featured: true
    },
    {
      id: 'wagnerdriver-site',
      domain: 'wagnerdriver.helpusbr.com',
      liveUrl: 'https://wagnerdriver.helpusbr.com',
      category: 'servicos',
      icon: Car,
      image: '/images/helpus_driver_real.png',
      folderPath: 'D:\\dev\\wagnerdriver-site',
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
      folderPath: 'D:\\dev\\pizza',
      status: 'Plataforma Ativa'
    },
    {
      id: 'jobs',
      domain: 'jobs.helpusbr.com',
      liveUrl: 'https://jobs.helpusbr.com',
      category: 'servicos',
      icon: Briefcase,
      image: '/images/helpus_events.jpg',
      folderPath: 'D:\\dev\\jobs',
      status: 'Plataforma Ativa'
    },
    {
      id: 'visa',
      domain: 'visa.helpusbr.com',
      liveUrl: 'https://visa.helpusbr.com',
      category: 'servicos',
      icon: Globe,
      image: '/images/helpus_visa_real.jpg',
      folderPath: 'D:\\dev\\visa',
      status: 'Plataforma Ativa'
    },
    {
      id: 'memoria-viva',
      domain: 'memoriaviva.helpusbr.com',
      liveUrl: 'https://memoriaviva.helpusbr.com',
      category: 'cultura',
      icon: BookOpen,
      image: '/images/helpus_barber.jpg',
      folderPath: 'D:\\dev\\memoria-viva',
      status: 'Plataforma Ativa'
    },
    {
      id: 'brayyan',
      domain: 'brayyan.helpusbr.com',
      liveUrl: 'https://brayyan.helpusbr.com',
      category: 'cultura',
      icon: UserCheck,
      image: '/images/helpus_ai.jpg',
      folderPath: 'D:\\dev\\brayyan',
      status: 'Plataforma Ativa'
    }
  ];

  const featuredApps = applications.filter(a => a.featured);

  // Sync with Browser History (window.history & popstate event for Google / Browser Back Button)
  useEffect(() => {
    // Initial check URL query ?solucao=id
    const params = new URLSearchParams(window.location.search);
    const initialSolucao = params.get('solucao');
    if (initialSolucao && applications.some(a => a.id === initialSolucao)) {
      setSelectedAppId(initialSolucao);
    }

    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.solucaoId) {
        setSelectedAppId(event.state.solucaoId);
      } else {
        const searchParams = new URLSearchParams(window.location.search);
        const solId = searchParams.get('solucao');
        setSelectedAppId(solId);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to navigate into a Full-page Detail View (Página em Tela Cheia com Botão Voltar do Navegador)
  const navigateToDetail = (appId: string) => {
    setSelectedAppId(appId);
    window.history.pushState({ solucaoId: appId }, '', `?solucao=${appId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to navigate back to the main catalog
  const navigateBackToCatalog = () => {
    setSelectedAppId(null);
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const selectedAppItem = applications.find(a => a.id === selectedAppId);
  const selectedAppTrans = selectedAppId ? t.apps[selectedAppId] : null;

  return (
    <div className="hub-app">
      
      {/* Header Navbar */}
      <header className="hub-header">
        <div className="hub-container">
          <div className="hub-header-inner">
            
            {/* Official Uploaded HelpUS Logo Image */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateBackToCatalog();
              }} 
              className="hub-logo-img-link"
            >
              <img
                src="/images/helpus_logo.png"
                alt="HelpUS Logo"
                className="hub-logo-img"
              />
            </a>

            {/* Header Standard Navigation Links */}
            <nav className="hub-nav-links">
              {selectedAppId ? (
                <button
                  onClick={navigateBackToCatalog}
                  className="hub-nav-btn active"
                >
                  <ArrowLeft className="w-4 h-4 text-blue-600" />
                  <span>{t.nav.backToCatalog}</span>
                </button>
              ) : (
                <>
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
                </>
              )}
            </nav>

            {/* Native Language Switcher Dropdown Popdown (🇺🇸 EN | 🇪🇸 ES | 🇧🇷 PT) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              
              <div className="hub-lang-dropdown-wrapper">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="hub-lang-trigger"
                >
                  <Globe2 className="w-4 h-4 text-blue-600" />
                  <span>
                    {lang === 'en' && '🇺🇸 English (EN)'}
                    {lang === 'es' && '🇪🇸 Español (ES)'}
                    {lang === 'pt' && '🇧🇷 Português (PT)'}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </button>

                {langDropdownOpen && (
                  <div className="hub-lang-popdown" onClick={() => setLangDropdownOpen(false)}>
                    <button
                      onClick={() => { setLang('en'); setLangDropdownOpen(false); }}
                      className={`hub-lang-option ${lang === 'en' ? 'active' : ''}`}
                    >
                      <span style={{ fontSize: '1.1rem' }}>🇺🇸</span> <span>English</span>
                    </button>
                    <button
                      onClick={() => { setLang('es'); setLangDropdownOpen(false); }}
                      className={`hub-lang-option ${lang === 'es' ? 'active' : ''}`}
                    >
                      <span style={{ fontSize: '1.1rem' }}>🇪🇸</span> <span>Español</span>
                    </button>
                    <button
                      onClick={() => { setLang('pt'); setLangDropdownOpen(false); }}
                      className={`hub-lang-option ${lang === 'pt' ? 'active' : ''}`}
                    >
                      <span style={{ fontSize: '1.1rem' }}>🇧🇷</span> <span>Português</span>
                    </button>
                  </div>
                )}
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
            {selectedAppId && (
              <button
                onClick={() => {
                  navigateBackToCatalog();
                  setMobileMenuOpen(false);
                }}
                className="hub-nav-btn active"
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                <ArrowLeft className="w-4 h-4 text-blue-600" />
                <span>{t.nav.backToCatalog}</span>
              </button>
            )}

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

      {/* RENDER DEDICATED FULL-PAGE PRE-LANDING VIEW IF SELECTED APP IS ACTIVE */}
      {selectedAppItem && selectedAppTrans ? (
        <main className="hub-fullpage-view">
          <div className="hub-container">
            
            {/* Top Navigation Bar with Back Button */}
            <div className="hub-fullpage-back-bar">
              <button onClick={navigateBackToCatalog} className="hub-fullpage-back-btn">
                <ArrowLeft className="w-4 h-4" />
                <span>{t.fullPageDetails.backBtn}</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className={`hub-card-badge ${selectedAppItem.status === 'Plataforma Ativa' ? 'hub-badge-green' : 'hub-badge-blue'}`}>
                  {selectedAppItem.status}
                </span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '4px 10px', borderRadius: '8px' }}>
                  {selectedAppItem.domain}
                </span>
              </div>
            </div>

            {/* Main Hero Header Card */}
            <div className="hub-fullpage-hero">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div className="hub-card-icon" style={{ width: '56px', height: '56px' }}>
                  {<selectedAppItem.icon className="w-7 h-7" />}
                </div>
                <div>
                  <h1 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--text-dark)', lineHeight: '1.2' }}>
                    {selectedAppTrans.name}
                  </h1>
                  <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--indigo)' }}>
                    {selectedAppTrans.subtitle}
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px', maxWidth: '840px' }}>
                {selectedAppTrans.description}
              </p>

              {/* Large Showcase Image Frame */}
              <div className="hub-fullpage-img-frame">
                <img
                  src={selectedAppItem.image}
                  alt={selectedAppTrans.name}
                />
              </div>

              {/* 2-Column Detailed Grid */}
              <div className="hub-fullpage-grid">
                
                {/* Left Side: Overview Story & Technical Highlights */}
                <div>
                  
                  {/* Detailed Description Box */}
                  <div className="hub-fullpage-box">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Info className="w-5 h-5 text-blue-600" />
                      <span>{t.fullPageDetails.overviewTitle}</span>
                    </h3>
                    <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '16px' }}>
                      {selectedAppTrans.detailsContent}
                    </p>

                    {/* Mapped Folder Badge */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-dark)' }}>
                      <FolderGit2 className="w-4 h-4 text-slate-600" />
                      <span>{t.fullPageDetails.folderOrigin} <strong>{selectedAppItem.folderPath}</strong></span>
                    </div>
                  </div>

                  {/* Technical Highlights Box */}
                  {selectedAppTrans.technicalHighlights && (
                    <div className="hub-fullpage-box">
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Cpu className="w-5 h-5 text-indigo-600" />
                        <span>{t.fullPageDetails.technicalArchitecture}</span>
                      </h3>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {selectedAppTrans.technicalHighlights.map((tech, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                            <Check className="w-4.5 h-4.5 text-blue-600 flex-shrink-0" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Target Audience Box */}
                  <div className="hub-fullpage-box" style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Users className="w-4.5 h-4.5" />
                      <span>{t.fullPageDetails.targetAudienceTitle}</span>
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-dark)', fontWeight: '600', lineHeight: '1.5' }}>
                      {selectedAppTrans.targetAudience}
                    </p>
                  </div>

                </div>

                {/* Right Side: Features Checklist & Action CTAs */}
                <div>
                  
                  {/* Features Checklist Box */}
                  <div className="hub-fullpage-box">
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      <span>{t.fullPageDetails.keyCapabilitiesTitle}</span>
                    </h3>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                      {selectedAppTrans.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.4' }}>
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Official Subdomain Box */}
                    <div style={{ background: '#f8fafc', border: '1px solid var(--border-light)', padding: '14px', borderRadius: '12px', marginBottom: '20px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        {t.fullPageDetails.officialSubdomain}
                      </span>
                      <p style={{ fontFamily: 'monospace', fontSize: '0.95rem', fontWeight: '800', color: 'var(--primary)', marginTop: '2px' }}>
                        https://{selectedAppItem.domain}
                      </p>
                    </div>

                    {/* Action Launch Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <a
                        href={selectedAppItem.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hub-btn-primary"
                        style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem' }}
                      >
                        <span>{t.fullPageDetails.launchRealApp}</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>

                      <button
                        onClick={() => openWhatsApp(selectedAppTrans.whatsappMessage)}
                        className="hub-btn-secondary"
                        style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '0.88rem' }}
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-600" />
                        <span>{t.fullPageDetails.contactWhatsApp}</span>
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </main>
      ) : (

        /* DEFAULT CATALOG VIEW */
        <>
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
                          onClick={() => navigateToDetail(activeCarouselApp.id)}
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
                                onClick={() => navigateToDetail(app.id)}
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
        </>
      )}

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
                {t.fullPageDetails.close}
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

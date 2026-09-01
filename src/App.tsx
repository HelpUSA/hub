import { useState, useEffect, useRef } from 'react';
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
  Building2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  Globe2,
  Menu,
  X,
  Info,
  HelpCircle,
  Sparkles,
  ArrowLeft,
  Search,
  Scale,
  Scissors,
  Activity,
  Heart,
  TrendingUp
} from 'lucide-react';

import { translations, type Language } from './i18n/translations';
import AnimatedBackground from './components/AnimatedBackground';

interface AppItem {
  id: string;
  domain: string;
  liveUrl: string;
  category: 'tecnologia' | 'saude' | 'servicos' | 'gastronomia' | 'cultura' | 'clientes';
  icon: any;
  image: string;
  folderPath: string;
  status: 'Plataforma Ativa' | 'Desenvolvimento Próprio' | 'Projeto de Cliente';
  isClientSite?: boolean;
  featured?: boolean;
}

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [langDropdownOpen, setLangDropdownOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Mega-Menu Hover/Click Dropdown States
  const [activeMegaMenu, setActiveMegaMenu] = useState<'platforms' | 'services' | 'foodCulture' | null>(null);
  const megaMenuTimeoutRef = useRef<any>(null);

  // Ecosystem Modal Drawer State
  const [ecosystemModalOpen, setEcosystemModalOpen] = useState<boolean>(false);
  const [ecosystemSearch, setEcosystemSearch] = useState<string>('');
  const [ecosystemFilter, setEcosystemFilter] = useState<'all' | 'own' | 'client'>('all');

  // Load user language preference (default: English 'en')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Language;
      const savedLang = localStorage.getItem('helpus_lang') as Language;

      if (urlLang && ['en', 'es', 'pt'].includes(urlLang)) {
        setLang(urlLang);
        localStorage.setItem('helpus_lang', urlLang);
        document.cookie = `helpus_lang=${urlLang}; path=/; max-age=31536000`;
      } else if (savedLang && ['en', 'es', 'pt'].includes(savedLang)) {
        setLang(savedLang);
      }
    }
  }, []);

  const changeLanguage = (code: Language) => {
    setLang(code);
    setLangDropdownOpen(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('helpus_lang', code);
      document.cookie = `helpus_lang=${code}; path=/; max-age=31536000`;
      const url = new URL(window.location.href);
      url.searchParams.set('lang', code);
      window.history.replaceState({}, '', url.toString());
    }
  };

  // Full-page Detail View & History Navigation State
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  
  // Info Modals (Institucional, Ajuda, Privacidade)
  const [activeInfoModal, setActiveInfoModal] = useState<'institutional' | 'help' | 'privacy' | null>(null);

  const t = translations[lang];

  // Official HelpUS contacts
  const whatsappNumber = '5583998721848';
  const whatsappFormatted = '(83) 99872-1848';
  const helpusEmail = 'contato@helpusbr.com';

  // Complete List of All Applications & Client Sites Mapped
  const applications: AppItem[] = [
    {
      id: 'helpus-site',
      domain: 'www.helpusbr.com',
      liveUrl: 'https://www.helpusbr.com',
      category: 'tecnologia',
      icon: Code2,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'realestate',
      domain: 'realestate.helpusbr.com',
      liveUrl: 'https://realestate.helpusbr.com',
      category: 'servicos',
      icon: Building2,
      image: '/images/helpus_imoveis.jpg',
      folderPath: 'D:\\dev\\AntiG\\realestate',
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
    },
    // --- Client / Specialized Sites ---
    {
      id: 'katiaxavier',
      domain: 'katiaxavier.helpusbr.com',
      liveUrl: 'https://katiaxavier.helpusbr.com',
      category: 'clientes',
      icon: Scale,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\katiaxavier-site',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'marciotopbarber',
      domain: 'barber.helpusbr.com',
      liveUrl: 'https://barber.helpusbr.com',
      category: 'clientes',
      icon: Scissors,
      image: '/images/helpus_barber.jpg',
      folderPath: 'D:\\dev\\marciotopbarber',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'cardioia',
      domain: 'cardioia.helpusbr.com',
      liveUrl: 'https://cardioia.helpusbr.com',
      category: 'clientes',
      icon: Activity,
      image: '/images/helpus_health.jpg',
      folderPath: 'D:\\dev\\cardioia',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'vivasuacura',
      domain: 'vivasuacura.helpusbr.com',
      liveUrl: 'https://vivasuacura.helpusbr.com',
      category: 'clientes',
      icon: Heart,
      image: '/images/helpus_health.jpg',
      folderPath: 'D:\\dev\\vivasuacura',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'trading-lab',
      domain: 'tradinglab.helpusbr.com',
      liveUrl: 'https://tradinglab.helpusbr.com',
      category: 'clientes',
      icon: TrendingUp,
      image: '/images/helpus_ai.jpg',
      folderPath: 'D:\\dev\\trading-lab',
      status: 'Projeto de Cliente',
      isClientSite: true
    }
  ];

  const featuredApps = applications.filter(a => a.featured);

  // Sync with Browser History
  useEffect(() => {
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

  const navigateToDetail = (appId: string) => {
    setSelectedAppId(appId);
    window.history.pushState({ solucaoId: appId }, '', `?solucao=${appId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateBackToCatalog = () => {
    setSelectedAppId(null);
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mega Menu Hover Handlers
  const handleMouseEnterMega = (menu: 'platforms' | 'services' | 'foodCulture') => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setActiveMegaMenu(menu);
  };

  const handleMouseLeaveMega = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  // Filtered Applications for Catalog Grid
  const filteredApps = applications.filter(app => {
    if (activeCategory === 'todos') return true;
    return app.category === activeCategory;
  });

  // Filtered Applications for Ecosystem Modal Drawer
  const filteredEcosystemSites = applications.filter(app => {
    const matchesFilter = 
      ecosystemFilter === 'all' ? true :
      ecosystemFilter === 'own' ? !app.isClientSite :
      app.isClientSite;

    const query = ecosystemSearch.toLowerCase().trim();
    const appData = t.apps[app.id] || { name: app.id, subtitle: '' };
    const matchesSearch = !query || 
      appData.name.toLowerCase().includes(query) || 
      app.domain.toLowerCase().includes(query) || 
      appData.subtitle.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  const selectedAppObj = selectedAppId ? applications.find(a => a.id === selectedAppId) : null;

  return (
    <div className="hub-app font-sans">
      <AnimatedBackground />

      {/* Header Navbar */}
      <header className="hub-header">
        <div className="hub-container">
          <div className="hub-header-inner">
            
            {/* HelpUS Official Logo */}
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

            {/* Desktop Mega-Menu Navigation Links */}
            <nav className="hub-nav-links hidden md:flex items-center gap-1">
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
                  {/* Mega Menu 1: Plataformas Principais */}
                  <div 
                    className="mega-menu-trigger-wrapper"
                    onMouseEnter={() => handleMouseEnterMega('platforms')}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <button className={`hub-nav-btn ${activeMegaMenu === 'platforms' ? 'active' : ''}`}>
                      <Code2 className="w-4 h-4 text-blue-600" />
                      <span>{t.megaMenu.platforms}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>

                    {activeMegaMenu === 'platforms' && (
                      <div className="mega-menu-popup">
                        <div className="mega-menu-grid">
                          <a href="https://realestate.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Building2 className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS RealEstate</div>
                              <div className="mega-menu-desc">Portal de imóveis & rede de corretores credenciados</div>
                            </div>
                          </a>

                          <a href="https://nexoai.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Bot className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">NexosAI Cloud</div>
                              <div className="mega-menu-desc">Orquestração de Agentes IA & Nós Locais</div>
                            </div>
                          </a>

                          <a href="https://usmle.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Stethoscope className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">USMLE Prep</div>
                              <div className="mega-menu-desc">Simulados & revalidação médica nos EUA</div>
                            </div>
                          </a>

                          <a href="https://health.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><HeartPulse className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS Saúde</div>
                              <div className="mega-menu-desc">Telemedicina HD & prontuário eletrônico</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mega Menu 2: Serviços & Mobilidade */}
                  <div 
                    className="mega-menu-trigger-wrapper"
                    onMouseEnter={() => handleMouseEnterMega('services')}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <button className={`hub-nav-btn ${activeMegaMenu === 'services' ? 'active' : ''}`}>
                      <Layers className="w-4 h-4 text-indigo-600" />
                      <span>{t.megaMenu.services}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>

                    {activeMegaMenu === 'services' && (
                      <div className="mega-menu-popup">
                        <div className="mega-menu-grid">
                          <a href="https://wagnerdriver.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Car className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">Executive Driver</div>
                              <div className="mega-menu-desc">Mobilidade executiva & transporte VIP</div>
                            </div>
                          </a>

                          <a href="https://visa.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Globe className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">Visa & Imigração</div>
                              <div className="mega-menu-desc">Assessoria digital para vistos internacionais</div>
                            </div>
                          </a>

                          <a href="https://jobs.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Briefcase className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">Jobs & Empregos</div>
                              <div className="mega-menu-desc">Portal de recrutamento & vagas de emprego</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mega Menu 3: Gastronomia & Cultura */}
                  <div 
                    className="mega-menu-trigger-wrapper"
                    onMouseEnter={() => handleMouseEnterMega('foodCulture')}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <button className={`hub-nav-btn ${activeMegaMenu === 'foodCulture' ? 'active' : ''}`}>
                      <Pizza className="w-4 h-4 text-amber-600" />
                      <span>{t.megaMenu.foodCulture}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>

                    {activeMegaMenu === 'foodCulture' && (
                      <div className="mega-menu-popup">
                        <div className="mega-menu-grid">
                          <a href="https://pizza.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Pizza className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">Pizza & Delivery</div>
                              <div className="mega-menu-desc">Gestão & cardápio QR code para pizzarias</div>
                            </div>
                          </a>

                          <a href="https://memoriaviva.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><BookOpen className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">Memória Viva</div>
                              <div className="mega-menu-desc">Memoriais digitais & legados familiares</div>
                            </div>
                          </a>

                          <a href="https://brayyan.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><UserCheck className="w-5 h-5" /></div>
                            <div>
                              <div className="mega-menu-title">Brayyan Biografia</div>
                              <div className="mega-menu-desc">Sites biográficos & trajetórias profissionais</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Button to Open All Sites Drawer */}
                  <button
                    onClick={() => setEcosystemModalOpen(true)}
                    className="hub-nav-btn"
                    style={{ background: 'rgba(37, 99, 235, 0.08)', color: '#2563eb', fontWeight: 700 }}
                  >
                    <Globe2 className="w-4 h-4 text-blue-600" />
                    <span>{t.nav.allSites}</span>
                  </button>
                </>
              )}
            </nav>

            {/* Language Switcher & Info Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="hub-lang-dropdown-wrapper">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="hub-lang-trigger"
                >
                  <Globe2 className="w-4 h-4 text-blue-600" />
                  <span>
                    {lang === 'en' && '🇺🇸 EN'}
                    {lang === 'es' && '🇪🇸 ES'}
                    {lang === 'pt' && '🇧🇷 PT'}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {langDropdownOpen && (
                  <div className="hub-lang-popdown">
                    <button onClick={() => changeLanguage('en')} className={lang === 'en' ? 'active' : ''}>
                      🇺🇸 English (EN)
                    </button>
                    <button onClick={() => changeLanguage('es')} className={lang === 'es' ? 'active' : ''}>
                      🇪🇸 Español (ES)
                    </button>
                    <button onClick={() => changeLanguage('pt')} className={lang === 'pt' ? 'active' : ''}>
                      🇧🇷 Português (PT)
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Drawer Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hub-mobile-menu-btn md:hidden"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="hub-mobile-drawer md:hidden">
            <button
              onClick={() => { setEcosystemModalOpen(true); setMobileMenuOpen(false); }}
              className="hub-mobile-nav-link text-blue-600 font-bold"
            >
              <Globe2 className="w-5 h-5" />
              <span>{t.megaMenu.allSites}</span>
            </button>
            <button
              onClick={() => { setActiveInfoModal('institutional'); setMobileMenuOpen(false); }}
              className="hub-mobile-nav-link"
            >
              <Info className="w-5 h-5 text-blue-600" />
              <span>{t.nav.institutional}</span>
            </button>
            <button
              onClick={() => { setActiveInfoModal('help'); setMobileMenuOpen(false); }}
              className="hub-mobile-nav-link"
            >
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              <span>{t.nav.help}</span>
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="hub-main-content">
        {selectedAppId && selectedAppObj ? (
          /* FULL-PAGE SHOWCASE DETAIL VIEW */
          <div className="hub-container py-10">
            <button
              onClick={navigateBackToCatalog}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 mb-6 flex items-center gap-2 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>{t.fullPageDetails.backBtn}</span>
            </button>

            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200 font-bold text-xs uppercase tracking-wider">
                    {selectedAppObj.status}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
                    {(t.apps[selectedAppObj.id] || { name: selectedAppObj.id }).name}
                  </h1>
                  <p className="text-slate-600 text-base font-medium max-w-2xl">
                    {(t.apps[selectedAppObj.id] || { subtitle: '' }).subtitle}
                  </p>
                </div>

                <a
                  href={selectedAppObj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95 shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t.fullPageDetails.launchRealApp}</span>
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                  <img
                    src={selectedAppObj.image}
                    alt={(t.apps[selectedAppObj.id] || { name: selectedAppObj.id }).name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">
                      {t.fullPageDetails.overviewTitle}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {(t.apps[selectedAppObj.id] || { detailsContent: '' }).detailsContent}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                      {t.fullPageDetails.keyCapabilitiesTitle}
                    </h3>
                    <ul className="space-y-2">
                      {(t.apps[selectedAppObj.id] || { features: [] }).features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* HOMEPAGE HUB STREAM */
          <>
            {/* Modern Hero Showcase */}
            <section className="py-16 md:py-24 relative overflow-hidden">
              <div className="hub-container text-center space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase shadow-sm animate-float-badge">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  {t.hero.badge}
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                  <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 font-sans tracking-tight leading-tight">
                    {t.hero.title}
                  </h1>
                  <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                    {t.hero.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setEcosystemModalOpen(true)}
                    className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-600/30 flex items-center gap-2.5 transition-all transform active:scale-95 cursor-pointer"
                  >
                    <Globe2 className="w-5 h-5" />
                    <span>{t.megaMenu.allSites}</span>
                  </button>
                  <a
                    href="#solucoes-grid"
                    className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-sm shadow-sm transition-all"
                  >
                    {t.hero.exploreBtn} ↓
                  </a>
                </div>
              </div>
            </section>

            {/* Featured Showcase Carousel */}
            <section className="py-12 bg-white border-y border-slate-200">
              <div className="hub-container space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{t.hero.sitesBadge}</span>
                    <h2 className="text-2xl font-extrabold text-slate-900 font-sans">Destaques do Ecossistema</h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentSlideIndex(prev => (prev - 1 + featuredApps.length) % featuredApps.length)}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentSlideIndex(prev => (prev + 1) % featuredApps.length)}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Featured Item Display */}
                {featuredApps[currentSlideIndex] && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 bg-white">
                      <img
                        src={featuredApps[currentSlideIndex].image}
                        alt={featuredApps[currentSlideIndex].id}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-4">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200 font-bold text-xs uppercase">
                        {featuredApps[currentSlideIndex].status}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        {(t.apps[featuredApps[currentSlideIndex].id] || { name: featuredApps[currentSlideIndex].id }).name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {(t.apps[featuredApps[currentSlideIndex].id] || { description: '' }).description}
                      </p>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          onClick={() => navigateToDetail(featuredApps[currentSlideIndex].id)}
                          className="px-4 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-600/30 hover:bg-blue-500 transition-all"
                        >
                          {t.catalog.tryNow}
                        </button>
                        <a
                          href={featuredApps[currentSlideIndex].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-all flex items-center gap-1.5"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                          <span>{t.catalog.quickLaunch}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Catalog Solutions Grid Section */}
            <section id="solucoes-grid" className="py-20">
              <div className="hub-container space-y-12">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <h2 className="text-3xl font-extrabold text-slate-900 font-sans">
                    {t.catalog.title}
                  </h2>
                  <p className="text-slate-600 text-sm">
                    {t.catalog.subtitle}
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
                  {['todos', 'tecnologia', 'saude', 'servicos', 'gastronomia', 'cultura', 'clientes'].map((catKey) => (
                    <button
                      key={catKey}
                      onClick={() => setActiveCategory(catKey)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        activeCategory === catKey
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {t.categories[catKey as keyof typeof t.categories] || catKey}
                    </button>
                  ))}
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredApps.map((app) => {
                    const appData = t.apps[app.id] || { name: app.id, subtitle: '', description: '' };
                    const AppIcon = app.icon;

                    return (
                      <div
                        key={app.id}
                        className="glass-card-upgrade bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-5"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                              <AppIcon className="w-6 h-6" />
                            </div>
                            <span className={app.isClientSite ? 'site-badge-client' : 'site-badge-own'}>
                              {app.isClientSite ? 'Cliente' : 'Oficial'}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {appData.name}
                            </h3>
                            <p className="text-xs font-semibold text-blue-600 mt-0.5">
                              {appData.subtitle}
                            </p>
                          </div>

                          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                            {appData.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                          <button
                            onClick={() => navigateToDetail(app.id)}
                            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all"
                          >
                            {t.catalog.tryNow}
                          </button>

                          <a
                            href={app.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm shadow-blue-600/30 flex items-center gap-1.5 transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Acessar ↗</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* COMPLETE ECOSYSTEM MODAL DRAWER */}
      {ecosystemModalOpen && (
        <div className="ecosystem-modal-overlay" onClick={() => setEcosystemModalOpen(false)}>
          <div className="ecosystem-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="ecosystem-modal-header">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{t.megaMenu.allSites}</h3>
                  <p className="text-xs text-slate-500">Ecossistema completo de plataformas próprias e sites de clientes</p>
                </div>
              </div>

              <button
                onClick={() => setEcosystemModalOpen(false)}
                className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="ecosystem-modal-body space-y-6">
              {/* Search & Filter Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={ecosystemSearch}
                    onChange={(e) => setEcosystemSearch(e.target.value)}
                    placeholder="Buscar site ou serviço..."
                    className="w-full pl-10 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setEcosystemFilter('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                      ecosystemFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Todos ({applications.length})
                  </button>
                  <button
                    onClick={() => setEcosystemFilter('own')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                      ecosystemFilter === 'own' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Plataformas HelpUS
                  </button>
                  <button
                    onClick={() => setEcosystemFilter('client')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                      ecosystemFilter === 'client' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Clientes & Projetos
                  </button>
                </div>
              </div>

              {/* Grid of Ecosystem Sites */}
              <div className="ecosystem-sites-grid">
                {filteredEcosystemSites.map((site) => {
                  const siteData = t.apps[site.id] || { name: site.id, subtitle: '' };
                  const SiteIcon = site.icon;

                  return (
                    <div
                      key={site.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                          <SiteIcon className="w-4 h-4" />
                        </div>
                        <span className={site.isClientSite ? 'site-badge-client' : 'site-badge-own'}>
                          {site.isClientSite ? 'Cliente' : 'Oficial'}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{siteData.name}</h4>
                        <p className="text-[11px] text-blue-600 font-medium truncate">{site.domain}</p>
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <button
                          onClick={() => { navigateToDetail(site.id); setEcosystemModalOpen(false); }}
                          className="flex-1 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-bold text-[11px] hover:bg-slate-200 text-center"
                        >
                          Detalhes
                        </button>
                        <a
                          href={site.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-[11px] hover:bg-blue-500 text-center flex items-center justify-center gap-1"
                        >
                          <span>Acessar</span> ↗
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Institutional / Support / Privacy Info Modals */}
      {activeInfoModal && (
        <div className="ecosystem-modal-overlay" onClick={() => setActiveInfoModal(null)}>
          <div className="ecosystem-modal-box max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="ecosystem-modal-header">
              <h3 className="text-base font-bold text-slate-900">
                {activeInfoModal === 'institutional' && t.modals.institutionalTitle}
                {activeInfoModal === 'help' && t.modals.helpTitle}
                {activeInfoModal === 'privacy' && t.modals.privacyTitle}
              </h3>
              <button onClick={() => setActiveInfoModal(null)} className="p-1.5 rounded-lg bg-slate-100 text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="ecosystem-modal-body text-xs text-slate-700 leading-relaxed space-y-4">
              <p>
                {activeInfoModal === 'institutional' && t.modals.institutionalDesc}
                {activeInfoModal === 'help' && t.modals.helpDesc}
                {activeInfoModal === 'privacy' && t.modals.privacyDesc}
              </p>
              {activeInfoModal === 'help' && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="font-bold text-slate-900">Contatos Oficiais:</p>
                  <p>📱 WhatsApp: <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">{whatsappFormatted}</a></p>
                  <p>✉️ E-mail: <a href={`mailto:${helpusEmail}`} className="text-blue-600 font-bold">{helpusEmail}</a></p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contato-footer" className="bg-white border-t border-slate-200 py-12">
        <div className="hub-container text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <img src="/images/helpus_logo.png" alt="HelpUS Logo" className="h-10 w-auto object-contain" />
            <span className="font-extrabold text-xl text-slate-900">HelpUS Technology</span>
          </div>
          <p className="text-xs text-slate-500 max-w-md mx-auto">{t.footer.contactDesc}</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              {t.footer.whatsapp}
            </a>
            <a href={`mailto:${helpusEmail}`} className="hover:text-blue-600">
              {t.footer.email}
            </a>
            <button onClick={() => setActiveInfoModal('privacy')} className="hover:text-blue-600">
              {t.footer.privacy}
            </button>
          </div>
          <p className="text-[11px] text-slate-400 pt-4 border-t border-slate-100">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
export default App;

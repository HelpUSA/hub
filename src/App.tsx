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
  Sparkles,
  ArrowLeft,
  Search,
  Scale,
  Scissors,
  Activity,
  Heart,
  TrendingUp,
  Play,
  CheckCircle2,
  ArrowRight
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Mega-Menu Hover Dropdowns
  const [activeMegaMenu, setActiveMegaMenu] = useState<'platforms' | 'services' | 'foodCulture' | null>(null);
  const megaMenuTimeoutRef = useRef<any>(null);

  // Video Presentation Modal State
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  // Ecosystem Modal Drawer State
  const [ecosystemModalOpen, setEcosystemModalOpen] = useState<boolean>(false);
  const [ecosystemSearch, setEcosystemSearch] = useState<string>('');
  const [ecosystemFilter, setEcosystemFilter] = useState<'all' | 'own' | 'client'>('all');

  // Category Drawer Modal State
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<string | null>(null);

  // Load language preference
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

  // Detail View & History State
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [activeInfoModal, setActiveInfoModal] = useState<'institutional' | 'help' | 'privacy' | null>(null);

  const t = translations[lang];

  // Official HelpUS contacts
  const whatsappNumber = '5583998721848';
  const whatsappFormatted = '(83) 99872-1848';
  const helpusEmail = 'contato@helpusbr.com';

  // Applications & Sites
  const applications: AppItem[] = [
    {
      id: 'realestate',
      domain: 'realestate.helpusbr.com',
      liveUrl: 'https://realestate.helpusbr.com',
      category: 'servicos',
      icon: Building2,
      image: '/images/helpus_imoveis_luxury.jpg',
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
      image: '/images/helpus_hero_futuristic.jpg',
      folderPath: 'D:\\dev\\nexosai',
      status: 'Plataforma Ativa',
      featured: true
    },
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

  // Auto-play visual carousel every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % featuredApps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredApps.length]);

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

  // Category Matrix Cards definition
  const categoryMatrix = [
    {
      id: 'servicos',
      title: 'Mercado Imobiliário',
      subtitle: 'HelpUS RealEstate & Carteira de Imóveis',
      icon: Building2,
      badge: 'Plataforma Ativa',
      count: 1,
      color: 'from-blue-600 to-indigo-600',
      directUrl: 'https://realestate.helpusbr.com'
    },
    {
      id: 'tecnologia',
      title: 'Inteligência Artificial & Cloud Mesh',
      subtitle: 'NexosAI Cloud & Engenharia de IA',
      icon: Bot,
      badge: 'Plataforma Ativa',
      count: 2,
      color: 'from-cyan-600 to-blue-600',
      directUrl: 'https://nexoai.helpusbr.com'
    },
    {
      id: 'saude',
      title: 'Saúde, Telemedicina & USMLE',
      subtitle: 'HelpUS Saúde & Revalidação Médica',
      icon: Stethoscope,
      badge: 'Plataforma Ativa',
      count: 2,
      color: 'from-emerald-600 to-teal-600',
      directUrl: 'https://usmle.helpusbr.com'
    },
    {
      id: 'servicos_mob',
      idCategory: 'servicos',
      title: 'Mobilidade Executiva & Vistos',
      subtitle: 'Executive Driver & Assessoria Internacional',
      icon: Car,
      badge: 'Plataforma Ativa',
      count: 3,
      color: 'from-purple-600 to-indigo-600',
      directUrl: 'https://wagnerdriver.helpusbr.com'
    },
    {
      id: 'gastronomia',
      title: 'Gastronomia & Delivery',
      subtitle: 'Cardápio Digital QR Code & Sistema Pizzaria',
      icon: Pizza,
      badge: 'Plataforma Ativa',
      count: 1,
      color: 'from-amber-500 to-orange-600',
      directUrl: 'https://pizza.helpusbr.com'
    },
    {
      id: 'cultura',
      title: 'Cultura, Biografias & Memória',
      subtitle: 'Memória Viva & Legados Biográficos',
      icon: BookOpen,
      badge: 'Plataforma Ativa',
      count: 2,
      color: 'from-rose-500 to-pink-600',
      directUrl: 'https://memoriaviva.helpusbr.com'
    }
  ];

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
    <div className="hub-app font-sans bg-[#f8fafc] text-slate-900 min-h-screen">
      <AnimatedBackground />

      {/* Header Navbar */}
      <header className="hub-header sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="hub-container">
          <div className="hub-header-inner flex items-center justify-between h-20">
            
            {/* HelpUS Official Logo */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateBackToCatalog();
              }} 
              className="flex items-center gap-3 group"
            >
              <img
                src="/images/helpus_logo.png"
                alt="HelpUS Logo"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-extrabold text-base text-slate-900 tracking-tight leading-none">HelpUS</span>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Technology Solutions</span>
              </div>
            </a>

            {/* Desktop Mega-Menu Navigation Links */}
            <nav className="hidden md:flex items-center gap-2">
              {selectedAppId ? (
                <button
                  onClick={navigateBackToCatalog}
                  className="px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold text-xs flex items-center gap-2 border border-blue-200 transition-all"
                >
                  <ArrowLeft className="w-4 h-4 text-blue-600" />
                  <span>{t.nav.backToCatalog}</span>
                </button>
              ) : (
                <>
                  {/* Mega Menu 1: Plataformas Principais */}
                  <div 
                    className="relative inline-block"
                    onMouseEnter={() => handleMouseEnterMega('platforms')}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <button className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeMegaMenu === 'platforms' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-700 hover:bg-slate-100'}`}>
                      <Code2 className="w-4 h-4 text-blue-600" />
                      <span>{t.megaMenu.platforms}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
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
                    className="relative inline-block"
                    onMouseEnter={() => handleMouseEnterMega('services')}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <button className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeMegaMenu === 'services' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-700 hover:bg-slate-100'}`}>
                      <Layers className="w-4 h-4 text-indigo-600" />
                      <span>{t.megaMenu.services}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
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
                    className="relative inline-block"
                    onMouseEnter={() => handleMouseEnterMega('foodCulture')}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <button className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeMegaMenu === 'foodCulture' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-700 hover:bg-slate-100'}`}>
                      <Pizza className="w-4 h-4 text-amber-600" />
                      <span>{t.megaMenu.foodCulture}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
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
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/30"
                  >
                    <Globe2 className="w-4 h-4" />
                    <span>{t.nav.allSites}</span>
                  </button>
                </>
              )}
            </nav>

            {/* Language Switcher & Controls */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 border border-slate-200 transition-all"
                >
                  <Globe2 className="w-4 h-4 text-blue-600" />
                  <span>
                    {lang === 'en' && 'EN'}
                    {lang === 'es' && 'ES'}
                    {lang === 'pt' && 'PT'}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl border border-slate-200 shadow-xl p-1.5 z-50 space-y-1">
                    <button onClick={() => changeLanguage('en')} className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold ${lang === 'en' ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-100'}`}>
                      🇺🇸 English
                    </button>
                    <button onClick={() => changeLanguage('es')} className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold ${lang === 'es' ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-100'}`}>
                      🇪🇸 Español
                    </button>
                    <button onClick={() => changeLanguage('pt')} className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold ${lang === 'pt' ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-100'}`}>
                      🇧🇷 Português
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Drawer Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-2">
            <button
              onClick={() => { setEcosystemModalOpen(true); setMobileMenuOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-bold text-sm flex items-center gap-3"
            >
              <Globe2 className="w-5 h-5 text-blue-600" />
              <span>{t.megaMenu.allSites}</span>
            </button>
            <button
              onClick={() => { setVideoModalOpen(true); setMobileMenuOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm flex items-center gap-3"
            >
              <Play className="w-5 h-5 text-blue-600" />
              <span>{t.hero.watchVideo}</span>
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main>
        {selectedAppId && selectedAppObj ? (
          /* FULL-PAGE PRESENTATION DETAIL VIEW */
          <div className="hub-container py-12">
            <button
              onClick={navigateBackToCatalog}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 mb-6 flex items-center gap-2 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>{t.fullPageDetails.backBtn}</span>
            </button>

            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
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
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 relative group">
                  <img
                    src={selectedAppObj.image}
                    alt={(t.apps[selectedAppObj.id] || { name: selectedAppObj.id }).name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
                      {t.fullPageDetails.overviewTitle}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {(t.apps[selectedAppObj.id] || { detailsContent: '' }).detailsContent}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-3">
                      {t.fullPageDetails.keyCapabilitiesTitle}
                    </h3>
                    <ul className="space-y-2.5">
                      {(t.apps[selectedAppObj.id] || { features: [] }).features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
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
          /* HOMEPAGE ENXUTA & VISUAL (LEAN HOMEPAGE STREAM) */
          <>
            {/* Dynamic Hero with Interactive Video & Ambient Visuals */}
            <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8fafc] border-b border-slate-200">
              <div className="hub-container relative z-10 text-center space-y-8 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  {t.hero.badge}
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 font-sans tracking-tight leading-tight">
                    {t.hero.title}
                  </h1>
                  <p className="text-base sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                    {t.hero.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <a
                    href="#categorias-matriz"
                    className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2.5 transition-all transform active:scale-95"
                  >
                    <span>{t.hero.exploreBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 font-bold text-sm shadow-md flex items-center gap-2.5 transition-all transform active:scale-95"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                    <span>{t.hero.watchVideo}</span>
                  </button>

                  <button
                    onClick={() => setEcosystemModalOpen(true)}
                    className="px-6 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm border border-slate-200 flex items-center gap-2 transition-all"
                  >
                    <Globe2 className="w-4 h-4 text-blue-600" />
                    <span>{t.nav.allSites}</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Dynamic Visual Featured Carousel (Carrossel Interativo) */}
            <section className="py-16 bg-white border-b border-slate-200">
              <div className="hub-container space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Apresentação Interativa</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">Destaques do Ecossistema</h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentSlideIndex(prev => (prev - 1 + featuredApps.length) % featuredApps.length)}
                      className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentSlideIndex(prev => (prev + 1) % featuredApps.length)}
                      className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Featured Carousel Card */}
                {featuredApps[currentSlideIndex] && (
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 min-h-[380px] flex items-end">
                    <img
                      src={featuredApps[currentSlideIndex].image}
                      alt={featuredApps[currentSlideIndex].id}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

                    <div className="relative z-10 p-8 sm:p-12 space-y-4 max-w-2xl text-white">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider border border-blue-400/40">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{featuredApps[currentSlideIndex].status}</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {(t.apps[featuredApps[currentSlideIndex].id] || { name: featuredApps[currentSlideIndex].id }).name}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-2">
                        {(t.apps[featuredApps[currentSlideIndex].id] || { description: '' }).description}
                      </p>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <a
                          href={featuredApps[currentSlideIndex].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/40 flex items-center gap-2 transition-all transform active:scale-95"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{t.catalog.quickLaunch}</span>
                        </a>

                        <button
                          onClick={() => navigateToDetail(featuredApps[currentSlideIndex].id)}
                          className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-bold text-xs transition-all"
                        >
                          {t.catalog.tryNow}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Visual Category Matrix (Navegação por Categorias Enxutas) */}
            <section id="categorias-matriz" className="py-20 bg-[#f8fafc]">
              <div className="hub-container space-y-12">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Navegação em Camadas</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 font-sans">
                    Categorias & Divisões do Ecossistema
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Clique em uma categoria para expandir as plataformas disponíveis e acessar diretamente os sistemas.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryMatrix.map((cat) => {
                    const CatIcon = cat.icon;

                    return (
                      <div
                        key={cat.id}
                        className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all space-y-6 flex flex-col justify-between group cursor-pointer"
                        onClick={() => setSelectedCategoryModal(cat.idCategory || cat.id)}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                              <CatIcon className="w-7 h-7" />
                            </div>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">
                              {cat.badge}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {cat.title}
                            </h3>
                            <p className="text-xs font-semibold text-slate-500 mt-1">
                              {cat.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Explorar Categoria ➔
                          </span>

                          <a
                            href={cat.directUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-colors"
                            title="Acessar Plataforma Direta"
                          >
                            <ExternalLink className="w-4 h-4" />
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

      {/* INSTITUTIONAL VIDEO PRESENTATION MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setVideoModalOpen(false)}>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-3xl overflow-hidden space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{t.videoModal.title}</h3>
                <p className="text-xs text-slate-500">{t.videoModal.subtitle}</p>
              </div>
              <button onClick={() => setVideoModalOpen(false)} className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 relative flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="HelpUS Technology Presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CATEGORY MODAL DRAWER */}
      {selectedCategoryModal && (
        <div className="ecosystem-modal-overlay" onClick={() => setSelectedCategoryModal(null)}>
          <div className="ecosystem-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="ecosystem-modal-header">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {selectedCategoryModal === 'servicos' && 'Mercado Imobiliário & Serviços'}
                  {selectedCategoryModal === 'tecnologia' && 'Inteligência Artificial & Cloud Mesh'}
                  {selectedCategoryModal === 'saude' && 'Saúde, Telemedicina & USMLE'}
                  {selectedCategoryModal === 'gastronomia' && 'Gastronomia & Delivery'}
                  {selectedCategoryModal === 'cultura' && 'Cultura, Biografias & Memória'}
                </h3>
                <p className="text-xs text-slate-500">Plataformas e aplicações da divisão selecionada</p>
              </div>

              <button onClick={() => setSelectedCategoryModal(null)} className="p-2 rounded-xl bg-slate-100 text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="ecosystem-modal-body space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications
                  .filter(app => app.category === selectedCategoryModal || (selectedCategoryModal === 'servicos' && app.category === 'servicos'))
                  .map((app) => {
                    const appData = t.apps[app.id] || { name: app.id, subtitle: '', description: '' };
                    const AppIcon = app.icon;

                    return (
                      <div key={app.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                            <AppIcon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                            {app.status}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-extrabold text-slate-900">{appData.name}</h4>
                          <p className="text-xs text-slate-600 line-clamp-2 mt-1">{appData.description}</p>
                        </div>

                        <div className="pt-2 flex items-center gap-2">
                          <button
                            onClick={() => { navigateToDetail(app.id); setSelectedCategoryModal(null); }}
                            className="flex-1 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-100 text-center"
                          >
                            Ver Apresentação
                          </button>

                          <a
                            href={app.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 text-center flex items-center justify-center gap-1 shadow-md shadow-blue-600/30"
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

      {/* Institutional / Support Info Modals */}
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
      <footer className="bg-white border-t border-slate-200 py-12">
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

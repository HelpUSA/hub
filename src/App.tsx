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
  ArrowRight,
  Brain,
  Volume2,
  Presentation,
  Lock,
  Zap
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
      id: 'helpus-search',
      domain: 'search.helpusbr.com',
      liveUrl: 'https://helpus-search.vercel.app',
      category: 'tecnologia',
      icon: Search,
      image: '/images/helpus_hero_futuristic.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-search',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-agent',
      domain: 'agent.helpusbr.com',
      liveUrl: 'https://helpus-agent.vercel.app',
      category: 'tecnologia',
      icon: Bot,
      image: '/images/helpus_hero_futuristic.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-agent',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-admin',
      domain: 'admin.helpusbr.com',
      liveUrl: 'https://helpus-admin.vercel.app',
      category: 'tecnologia',
      icon: Activity,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-admin',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-pay',
      domain: 'pay.helpusbr.com',
      liveUrl: 'https://helpus-pay.vercel.app',
      category: 'tecnologia',
      icon: Zap,
      image: '/images/helpus_events.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-pay',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-docs',
      domain: 'docs.helpusbr.com',
      liveUrl: 'https://helpus-docs.vercel.app',
      category: 'tecnologia',
      icon: Code2,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-docs',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-auth',
      domain: 'auth.helpusbr.com',
      liveUrl: 'https://helpus-auth.vercel.app',
      category: 'tecnologia',
      icon: Lock,
      image: '/images/helpus_imoveis.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-auth',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-crm',
      domain: 'crm.helpusbr.com',
      liveUrl: 'https://helpus-crm.vercel.app',
      category: 'tecnologia',
      icon: Briefcase,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-crm',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-status',
      domain: 'status.helpusbr.com',
      liveUrl: 'https://helpus-status.vercel.app',
      category: 'tecnologia',
      icon: Activity,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-status',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-market',
      domain: 'market.helpusbr.com',
      liveUrl: 'https://helpus-market.vercel.app',
      category: 'tecnologia',
      icon: Layers,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-market',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-marketing',
      domain: 'marketing.helpusbr.com',
      liveUrl: 'https://helpus-marketing.vercel.app',
      category: 'tecnologia',
      icon: Sparkles,
      image: '/images/helpus_hero_futuristic.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-marketing',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-app',
      domain: 'app.helpusbr.com',
      liveUrl: 'https://helpus-app.vercel.app',
      category: 'tecnologia',
      icon: Globe2,
      image: '/images/helpus_hero_futuristic.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-app',
      status: 'Plataforma Ativa',
      featured: true
    },
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
      id: 'helpus-voice',
      domain: 'voice.helpusbr.com',
      liveUrl: 'https://voice.helpusbr.com',
      category: 'tecnologia',
      icon: Volume2,
      image: '/images/helpus_hero_futuristic.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-voice',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-slides',
      domain: 'slides.helpusbr.com',
      liveUrl: 'https://slides.helpusbr.com',
      category: 'tecnologia',
      icon: Presentation,
      image: '/images/helpus_hero_futuristic.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-slides',
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
      liveUrl: 'https://wagnerdriver-site.vercel.app',
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
      liveUrl: 'https://pizza-nine-iota.vercel.app',
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
      liveUrl: 'https://brayyan.vercel.app',
      category: 'cultura',
      icon: UserCheck,
      image: '/images/helpus_ai.jpg',
      folderPath: 'D:\\dev\\brayyan',
      status: 'Plataforma Ativa'
    },
    {
      id: 'katiaxavier',
      domain: 'katiaxavier.helpusbr.com',
      liveUrl: 'https://katiaxavier-site.vercel.app',
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
      liveUrl: 'https://marciotopbarber.vercel.app',
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
      liveUrl: 'https://trading.helpusbr.com',
      category: 'clientes',
      icon: TrendingUp,
      image: '/images/helpus_ai.jpg',
      folderPath: 'D:\\dev\\trading-lab',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'neuroeduardomagalhaes',
      domain: 'neuro.eduardomagalhaes.helpusbr.com',
      liveUrl: 'https://neuroeduardomagalhaes.vercel.app',
      category: 'clientes',
      icon: Brain,
      image: '/images/helpus_health.jpg',
      folderPath: 'D:\\dev\\AntiG\\neuro.eduardomagalhaes',
      status: 'Projeto de Cliente',
      isClientSite: true
    }
  ];

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
                          <a href="https://search.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Search className="w-5 h-5 text-blue-600" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS Search AI</div>
                              <div className="mega-menu-desc">Busca inteligente por IA em todo o ecossistema</div>
                            </div>
                          </a>

                          <a href="https://agent.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Bot className="w-5 h-5 text-indigo-600" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS AI Agent Studio</div>
                              <div className="mega-menu-desc">Criador & Orquestrador de Agentes de IA 24/7</div>
                            </div>
                          </a>

                          <a href="https://admin.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Activity className="w-5 h-5 text-emerald-600" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS Admin Dashboard</div>
                              <div className="mega-menu-desc">Monitor Master de Métricas, Uptime & Leads</div>
                            </div>
                          </a>

                          <a href="https://pay.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Zap className="w-5 h-5 text-amber-500" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS Pay Engine</div>
                              <div className="mega-menu-desc">Gateway PIX & Cobranças Recorrentes</div>
                            </div>
                          </a>

                          <a href="https://docs.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Code2 className="w-5 h-5 text-purple-600" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS Developer Docs</div>
                              <div className="mega-menu-desc">APIs REST, SDKs JS/Python e Webhooks</div>
                            </div>
                          </a>

                          <a href="https://auth.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Lock className="w-5 h-5 text-rose-600" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS SSO Central</div>
                              <div className="mega-menu-desc">Login & Autenticação Única Criptografada</div>
                            </div>
                          </a>

                          <a href="https://realestate.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Building2 className="w-5 h-5 text-blue-500" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS RealEstate</div>
                              <div className="mega-menu-desc">Portal de imóveis & rede de corretores</div>
                            </div>
                          </a>

                          <a href="https://voice.helpusbr.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item">
                            <div className="mega-menu-icon"><Volume2 className="w-5 h-5 text-teal-600" /></div>
                            <div>
                              <div className="mega-menu-title">HelpUS Voice</div>
                              <div className="mega-menu-desc">Estúdio de Gerador de Áudio Neural com IA</div>
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

            {/* 1. SEÇÃO DE DESTAQUE: SOLUÇÕES DE INTELIGÊNCIA ARTIFICIAL (DERIVADAS DO MBA & DESENVOLVIMENTOS RECENTES) */}
            <section className="py-16 md:py-24 bg-white border-b border-slate-200">
              <div className="hub-container space-y-12">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>Inovações Recentes de Inteligência Artificial</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                    Soluções de I.A. Aplicadas ao Seu Negócio
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Ferramentas desenvolvidas com base nas mais recentes metodologias de IA corporativa: automação sem retrabalho, agentes 24/7 no WhatsApp, síntese neural de voz e pesquisas verificáveis.
                  </p>
                </div>

                {/* Grid Visual de Produtos de IA (Sem banners escuros gigantes) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Card 1: HelpUS Voice */}
                  <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30 group-hover:scale-110 transition-transform">
                          <Volume2 className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-[11px]">
                          voice.helpusbr.com
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                          HelpUS Voice SaaS
                        </h3>
                        <p className="text-xs font-bold text-blue-600 mt-0.5">
                          Estúdio de Gerador de Áudio Neural por IA
                        </p>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Gere vinhetas de vendas e mensagens de voz ultra-realistas enviadas direto no WhatsApp sem precisar gravar áudio manualmente. Inclui modelos de 1-clique para barbearias, imóveis e atendimento.
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Vozes Neurais MP3</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Presets de Vendas</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Sem Gravação Manual</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                      <a
                        href="https://voice.helpusbr.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Acessar Plataforma</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => navigateToDetail('helpus-voice')}
                        className="px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-all"
                      >
                        Recursos
                      </button>
                    </div>
                  </div>

                  {/* Card 2: HelpUS AI Agent */}
                  <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                          <Bot className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[11px]">
                          agent.helpusbr.com
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          HelpUS AI Agent
                        </h3>
                        <p className="text-xs font-bold text-indigo-600 mt-0.5">
                          Atendimento Autônomo 24/7 no WhatsApp
                        </p>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Atendente virtual autônomo que entende o contexto do negócio, responde dúvidas sobre produtos/preços, qualifica leads e realiza agendamentos automaticamente sem parar.
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">WhatsApp 24/7</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Qualificação de Leads</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Agendamento Direct</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                      <a
                        href="https://agent.helpusbr.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Acessar Plataforma</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => navigateToDetail('helpus-agent')}
                        className="px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-all"
                      >
                        Recursos
                      </button>
                    </div>
                  </div>

                  {/* Card 3: HelpUS Universal Search */}
                  <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-md shadow-cyan-600/30 group-hover:scale-110 transition-transform">
                          <Search className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-bold text-[11px]">
                          search.helpusbr.com
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">
                          HelpUS Search AI
                        </h3>
                        <p className="text-xs font-bold text-cyan-600 mt-0.5">
                          Pesquisa Verificável com Fontes [1], [2]
                        </p>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Motor de pesquisa que varre a web em tempo real e entrega resumos executivos com citações numéricas de fontes verificadas. Substitua buscas manuais no Google por inteligência estratégica.
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Citações Numéricas</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Busca em Tempo Real</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Fontes Verificadas</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                      <a
                        href="https://search.helpusbr.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md shadow-cyan-600/30 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Acessar Plataforma</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => navigateToDetail('helpus-search')}
                        className="px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-all"
                      >
                        Recursos
                      </button>
                    </div>
                  </div>

                  {/* Card 4: HelpUS AI Slides */}
                  <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30 group-hover:scale-110 transition-transform">
                          <Presentation className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-bold text-[11px]">
                          slides.helpusbr.com
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                          HelpUS AI Slides
                        </h3>
                        <p className="text-xs font-bold text-amber-600 mt-0.5">
                          Gerador Automático de Apresentações
                        </p>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Transforme briefings simples em texto ou listas de produtos em apresentações comerciais e propostas de venda visuais prontas em formato PDF em poucos segundos.
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Geração em Segundos</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Propostas Visuais</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Exportação PDF</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                      <a
                        href="https://slides.helpusbr.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs shadow-md shadow-amber-500/30 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Acessar Plataforma</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => navigateToDetail('helpus-slides')}
                        className="px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-all"
                      >
                        Recursos
                      </button>
                    </div>
                  </div>

                  {/* Card 5: HelpUS Developer Docs / Base de Conhecimento */}
                  <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/30 group-hover:scale-110 transition-transform">
                          <Code2 className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-[11px]">
                          docs.helpusbr.com
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors">
                          HelpUS Knowledge & Docs
                        </h3>
                        <p className="text-xs font-bold text-purple-600 mt-0.5">
                          IA Treinada em PDFs sem Retrabalho
                        </p>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Carregue PDFs, manuais e tabelas de preço da sua empresa uma única vez. O assistente responde estritamente conforme suas regras de negócio sem que você precise digitar o contexto repetidamente.
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Treinamento com PDFs</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Zero Retrabalho</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Documentação API</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                      <a
                        href="https://docs.helpusbr.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Acessar Plataforma</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => navigateToDetail('helpus-docs')}
                        className="px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-all"
                      >
                        Recursos
                      </button>
                    </div>
                  </div>

                  {/* Card 6: NexosAI Cloud Mesh */}
                  <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30 group-hover:scale-110 transition-transform">
                          <Brain className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[11px]">
                          nexoai.helpusbr.com
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                          NexosAI Cloud Mesh
                        </h3>
                        <p className="text-xs font-bold text-emerald-600 mt-0.5">
                          Orquestrador de Agentes & Modelos Locais
                        </p>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Orquestração avançada de agentes virtuais autônomos com suporte híbrido a LLMs em nuvem (GPT-4o, DeepSeek) e nós locais com total privacidade (Ollama).
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Multi-Agentes 24/7</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Modelos Ollama Locais</span>
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">Privacidade RAG</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                      <a
                        href="https://nexoai.helpusbr.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Acessar Plataforma</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => navigateToDetail('nexosai')}
                        className="px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-all"
                      >
                        Recursos
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 2. SEÇÃO DE INFRAESTRUTURA CORPORATIVA & PAGAMENTOS */}
            <section className="py-16 bg-slate-100 border-b border-slate-200">
              <div className="hub-container space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Infraestrutura Corporativa</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">
                      Gateways, Autenticação & Gestão
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* HelpUS Pay Engine */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">HelpUS Pay Engine</h4>
                      <p className="text-xs text-slate-600 mt-1">Cobrança de mensalidades e PIX QR Code instantâneo.</p>
                    </div>
                    <a href="https://pay.helpusbr.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1">
                      Acessar pay.helpusbr.com ➔
                    </a>
                  </div>

                  {/* HelpUS Auth SSO */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">HelpUS Auth SSO</h4>
                      <p className="text-xs text-slate-600 mt-1">Login único seguro para todos os módulos.</p>
                    </div>
                    <a href="https://auth.helpusbr.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1">
                      Acessar auth.helpusbr.com ➔
                    </a>
                  </div>

                  {/* HelpUS CRM */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">HelpUS CRM</h4>
                      <p className="text-xs text-slate-600 mt-1">Funil Kanban & transição IA/Humano WhatsApp.</p>
                    </div>
                    <a href="https://crm.helpusbr.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      Acessar crm.helpusbr.com ➔
                    </a>
                  </div>

                  {/* HelpUS Admin */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">HelpUS Admin</h4>
                      <p className="text-xs text-slate-600 mt-1">Painel master de uptime e captura de leads.</p>
                    </div>
                    <a href="https://admin.helpusbr.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                      Acessar admin.helpusbr.com ➔
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. SEÇÃO DE CATEGORIAS ORGANIZADAS (Navegação em Camadas) */}
            <section id="categorias-matriz" className="py-20 bg-[#f8fafc]">
              <div className="hub-container space-y-12">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Rede de Soluções</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 font-sans">
                    Sistemas Setoriais & Clientes
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Clique em uma divisão para explorar os sistemas de cada área de atuação ou acessar diretamente o subdomínio.
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

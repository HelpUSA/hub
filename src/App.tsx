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

export type AppView = 'home' | 'solucoes-ia' | 'infraestrutura' | 'setoriais';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [langDropdownOpen, setLangDropdownOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<AppView>('home');

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
    },
    {
      id: 'energisa',
      domain: 'energisa.helpusbr.com',
      liveUrl: 'https://energisa.helpusbr.com',
      category: 'tecnologia',
      icon: Activity,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\energisa',
      status: 'Plataforma Ativa'
    },
    {
      id: 'helpus-fba-suite',
      domain: 'fba.helpusbr.com',
      liveUrl: 'https://fba.helpusbr.com',
      category: 'tecnologia',
      icon: Layers,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\AntiG\\helpus-fba-suite',
      status: 'Plataforma Ativa'
    },
    {
      id: 'cvss',
      domain: 'cvss.helpusbr.com',
      liveUrl: 'https://cvss.helpusbr.com',
      category: 'tecnologia',
      icon: Lock,
      image: '/images/helpus_dev_ui.jpg',
      folderPath: 'D:\\dev\\cvss',
      status: 'Plataforma Ativa'
    },
    {
      id: 'danyimoveisjp',
      domain: 'danyimoveis.helpusbr.com',
      liveUrl: 'https://danyimoveis.helpusbr.com',
      category: 'clientes',
      icon: Building2,
      image: '/images/helpus_imoveis_luxury.jpg',
      folderPath: 'D:\\dev\\AntiG\\danyimoveisjp',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'caipiraraiz',
      domain: 'caipiraraiz.helpusbr.com',
      liveUrl: 'https://caipiraraiz.helpusbr.com',
      category: 'clientes',
      icon: Pizza,
      image: '/images/helpus_barber.jpg',
      folderPath: 'D:\\dev\\AntiG\\caipiraraiz',
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

  const switchView = (view: AppView) => {
    setCurrentView(view);
    setSelectedAppId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateBackToCatalog = () => {
    setSelectedAppId(null);
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5">
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
                  <button
                    onClick={() => switchView('home')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      currentView === 'home'
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>{t.nav.theCompany}</span>
                  </button>

                  <button
                    onClick={() => switchView('solucoes-ia')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      currentView === 'solucoes-ia'
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Bot className="w-4 h-4" />
                    <span>{t.nav.aiSolutions}</span>
                  </button>

                  <button
                    onClick={() => switchView('infraestrutura')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      currentView === 'infraestrutura'
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    <span>{t.nav.infraPay}</span>
                  </button>

                  <button
                    onClick={() => switchView('setoriais')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      currentView === 'setoriais'
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    <span>{t.nav.sectoral}</span>
                  </button>

                  <button
                    onClick={() => setEcosystemModalOpen(true)}
                    className="ml-2 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <Globe2 className="w-4 h-4 text-blue-400" />
                    <span>{t.nav.siteNetwork}</span>
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
              onClick={() => { switchView('home'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 ${
                currentView === 'home' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-slate-50 text-slate-800'
              }`}
            >
              <Building2 className="w-5 h-5 text-blue-600" />
              <span>{t.nav.theCompany}</span>
            </button>

            <button
              onClick={() => { switchView('solucoes-ia'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 ${
                currentView === 'solucoes-ia' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-slate-50 text-slate-800'
              }`}
            >
              <Bot className="w-5 h-5 text-indigo-600" />
              <span>{t.nav.aiSolutions}</span>
            </button>

            <button
              onClick={() => { switchView('infraestrutura'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 ${
                currentView === 'infraestrutura' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-slate-50 text-slate-800'
              }`}
            >
              <Zap className="w-5 h-5 text-amber-500" />
              <span>{t.nav.infraPay}</span>
            </button>

            <button
              onClick={() => { switchView('setoriais'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 ${
                currentView === 'setoriais' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-slate-50 text-slate-800'
              }`}
            >
              <Layers className="w-5 h-5 text-purple-600" />
              <span>{t.nav.sectoral}</span>
            </button>

            <button
              onClick={() => { setEcosystemModalOpen(true); setMobileMenuOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center gap-3 shadow-md"
            >
              <Globe2 className="w-5 h-5 text-blue-400" />
              <span>{t.nav.siteNetwork}</span>
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main>
        {selectedAppId && selectedAppObj ? (
          /* TIER 3: FULL-PAGE DEDICATED PRESENTATION VIEW FOR SPECIFIC APPLICATION */
          <div className="hub-container py-12">
            <button
              onClick={navigateBackToCatalog}
              className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-100 mb-8 flex items-center gap-2 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>{t.fullPageDetails.backBtn}</span>
            </button>

              <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200 shadow-2xl space-y-10">
                {/* Header Showcase */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200 font-extrabold text-xs uppercase tracking-wider">
                        {selectedAppObj.status}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {t.common.officialSubdomain} <strong className="text-blue-600">{selectedAppObj.domain}</strong>
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
                      {(t.apps[selectedAppObj.id] || { name: selectedAppObj.id }).name}
                    </h1>
                    <p className="text-slate-600 text-base sm:text-lg font-medium max-w-3xl leading-relaxed">
                      {(t.apps[selectedAppObj.id] || { subtitle: '' }).subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                    <a
                      href={selectedAppObj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                    >
                      <ExternalLink className="w-4.5 h-4.5" />
                      <span>{t.fullPageDetails.launchRealApp}</span>
                    </a>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent((t.apps[selectedAppObj.id] || { whatsappMessage: 'Olá HelpUS!' }).whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                    >
                      <span>{t.common.talkWhatsApp}</span>
                    </a>
                  </div>
                </div>

                {/* Main Media & Narrative Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className="space-y-6">
                    <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 relative group">
                      <img
                        src={selectedAppObj.image}
                        alt={(t.apps[selectedAppObj.id] || { name: selectedAppObj.id }).name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 text-xs font-bold text-slate-800">
                        <span>{t.common.demoSystem}{selectedAppObj.domain}</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
                        {t.fullPageDetails.targetAudienceTitle}
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {(t.apps[selectedAppObj.id] || { targetAudience: '' }).targetAudience}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3">
                        {t.fullPageDetails.overviewTitle}
                      </h3>
                      <p className="text-slate-700 text-base leading-relaxed font-medium">
                        {(t.apps[selectedAppObj.id] || { detailsContent: '' }).detailsContent}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed mt-3">
                        {(t.apps[selectedAppObj.id] || { description: '' }).description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
                        {t.fullPageDetails.keyCapabilitiesTitle}
                      </h3>
                      <ul className="space-y-3">
                        {(t.apps[selectedAppObj.id] || { features: [] }).features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
                        {t.fullPageDetails.technicalArchitecture}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {(t.apps[selectedAppObj.id] || { technicalHighlights: [] }).technicalHighlights.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold">
                            ⚡ {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
          /* MULTI-VIEW CORPORATE PRESENTATION ARCHITECTURE */
          <>
            {/* VIEW 1: A EMPRESA (CORPORATE INSTITUTIONAL HOMEPAGE) */}
            {currentView === 'home' && (
              <>
                {/* Hero Section */}
                <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8fafc] border-b border-slate-200">
                  <div className="hub-container relative z-10 space-y-12 max-w-5xl mx-auto text-center">
                    
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold tracking-widest uppercase shadow-sm">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span>{t.hero.badge}</span>
                      </div>

                      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 font-sans tracking-tight leading-tight">
                        HelpUS Technology Solutions
                      </h1>

                      <p className="text-base sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                        {t.hero.subtitle}
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <button
                          onClick={() => switchView('solucoes-ia')}
                          className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2 transform hover:scale-105"
                        >
                          <Bot className="w-5 h-5" />
                          <span>{t.hero.btnAi}</span>
                        </button>

                        <button
                          onClick={() => setVideoModalOpen(true)}
                          className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-sm shadow-md transition-all flex items-center gap-2"
                        >
                          <Play className="w-5 h-5 text-blue-600 fill-current" />
                          <span>{t.hero.btnVideo}</span>
                        </button>
                      </div>
                    </div>

                    {/* Video Presentation Banner Showcase Card */}
                    <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 max-w-4xl mx-auto group">
                      <img
                        src="/images/helpus_hero_futuristic.jpg"
                        alt="HelpUS Technology Presentation"
                        className="w-full h-[340px] sm:h-[440px] object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-6 text-white z-10">
                        <button
                          onClick={() => setVideoModalOpen(true)}
                          className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 transition-all transform hover:scale-110 active:scale-95"
                        >
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </button>

                        <div className="space-y-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Vídeo Institucional</span>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{t.hero.videoTitle}</h3>
                          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                            {t.hero.videoSubtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Corporate Pillars Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-1">
                        <span className="text-3xl font-extrabold text-blue-600">15+</span>
                        <p className="text-xs font-bold text-slate-700">{t.metrics.subdomains}</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-1">
                        <span className="text-3xl font-extrabold text-indigo-600">24/7</span>
                        <p className="text-xs font-bold text-slate-700">{t.metrics.ai247}</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-1">
                        <span className="text-3xl font-extrabold text-emerald-600">100%</span>
                        <p className="text-xs font-bold text-slate-700">{t.metrics.serverless}</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-1">
                        <span className="text-3xl font-extrabold text-purple-600">0s</span>
                        <p className="text-xs font-bold text-slate-700">{t.metrics.zeroRework}</p>
                      </div>
                    </div>

                  </div>
                </section>

                {/* Section: Quem Somos & Engenharia de Software */}
                <section className="py-20 bg-white border-b border-slate-200">
                  <div className="hub-container space-y-16">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                      <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-wider">
                        {t.whoWeAre.badge}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {t.whoWeAre.title}
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {t.whoWeAre.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-blue-300 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                          01
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900">{t.whoWeAre.p1Title}</h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {t.whoWeAre.p1Desc}
                        </p>
                      </div>

                      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-indigo-300 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl">
                          02
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900">{t.whoWeAre.p2Title}</h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {t.whoWeAre.p2Desc}
                        </p>
                      </div>

                      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-emerald-300 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                          03
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900">{t.whoWeAre.p3Title}</h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {t.whoWeAre.p3Desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section: Gateways para Divisões de Negócio */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                  <div className="hub-container space-y-12">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                      <span className="px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-extrabold uppercase tracking-wider">
                        {t.businessDivisions.badge}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {t.businessDivisions.title}
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {t.businessDivisions.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      
                      {/* Gateway 1: IA */}
                      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 space-y-6 flex flex-col justify-between hover:shadow-xl transition-all group">
                        <div className="space-y-4">
                          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Bot className="w-7 h-7" />
                          </div>
                          <h3 className="text-2xl font-extrabold text-slate-900">{t.businessDivisions.g1Title}</h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {t.businessDivisions.g1Desc}
                          </p>
                        </div>

                        <button
                          onClick={() => switchView('solucoes-ia')}
                          className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
                        >
                          <span>{t.businessDivisions.g1Btn}</span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </button>
                      </div>

                      {/* Gateway 2: Infra & Pay */}
                      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 space-y-6 flex flex-col justify-between hover:shadow-xl transition-all group">
                        <div className="space-y-4">
                          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Zap className="w-7 h-7" />
                          </div>
                          <h3 className="text-2xl font-extrabold text-slate-900">{t.businessDivisions.g2Title}</h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {t.businessDivisions.g2Desc}
                          </p>
                        </div>

                        <button
                          onClick={() => switchView('infraestrutura')}
                          className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs shadow-md shadow-amber-500/30 flex items-center justify-center gap-2 transition-all"
                        >
                          <span>{t.businessDivisions.g2Btn}</span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </button>
                      </div>

                      {/* Gateway 3: Setoriais */}
                      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 space-y-6 flex flex-col justify-between hover:shadow-xl transition-all group">
                        <div className="space-y-4">
                          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Layers className="w-7 h-7" />
                          </div>
                          <h3 className="text-2xl font-extrabold text-slate-900">{t.businessDivisions.g3Title}</h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {t.businessDivisions.g3Desc}
                          </p>
                        </div>

                        <button
                          onClick={() => switchView('setoriais')}
                          className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                        >
                          <span>Acessar {t.businessDivisions.g3Title}</span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </button>
                      </div>

                    </div>
                  </div>
                </section>

                {/* Section: {t.security.badge} Corporativa */}
                <section className="py-20 bg-white">
                  <div className="hub-container space-y-12">
                    <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white space-y-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

                      <div className="max-w-2xl space-y-4 relative z-10">
                        <span className="px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-400 border border-blue-500/30 text-xs font-extrabold uppercase tracking-wider">
                          {t.security.badge}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          {t.security.title}
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {t.security.desc}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800 relative z-10">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                            <Lock className="w-4 h-4" />
                            <span>{t.security.c1Title}</span>
                          </div>
                          <p className="text-xs text-slate-400">{t.security.c1Desc}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{t.security.c2Title}</span>
                          </div>
                          <p className="text-xs text-slate-400">{t.security.c2Desc}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                            <Building2 className="w-4 h-4" />
                            <span>{t.security.c3Title}</span>
                          </div>
                          <p className="text-xs text-slate-400">{t.security.c3Desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* VIEW 2: SOLUÇÕES DE INTELIGÊNCIA ARTIFICIAL */}
            {currentView === 'solucoes-ia' && (
              <section className="py-16 md:py-24 bg-white">
                <div className="hub-container space-y-16">
                  
                  {/* Header Banner */}
                  <div className="space-y-4 max-w-4xl">
                    <button
                      onClick={() => switchView('home')}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 border border-slate-200 transition-all mb-4"
                    >
                      <ArrowLeft className="w-4 h-4 text-blue-600" />
                      <span>{t.common.backToCompany}</span>
                    </button>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-wider">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <span>{t.viewHeaders.aiBadge}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
                      {t.viewHeaders.aiTitle}
                    </h1>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                      {t.viewHeaders.aiDesc}
                    </p>
                  </div>

                  {/* Visual Presentation Cards */}
                  <div className="space-y-12">
                    
                    {/* Item 1: HelpUS Voice */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 relative">
                        <img src="/images/helpus_hero_futuristic.jpg" alt="HelpUS Voice" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-blue-900/20"></div>
                        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900">
                          <span>voice.helpusbr.com</span>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-extrabold text-xs">
                          <Volume2 className="w-4 h-4" />
                          <span>Síntese Neural de Voz</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          HelpUS Voice SaaS — Estúdio de Áudio Neural
                        </h3>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          Gerador de áudios e vinhetas neurais ultra-realistas. Crie mensagens de vendas e avisos de confirmação enviados diretamente no WhatsApp sem precisar gravar voz manualmente. Inclui modelos prontos de 1 clique para barbearias, imobiliárias e suporte.
                        </p>

                        <div className="space-y-2 pt-1">
                          <p className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">Principais Recursos:</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Vozes Neurais Ultra-Realistas</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Exportação MP3 em Menos de 2s</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Presets Barbearia & Imóveis</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Envio Direto para WhatsApp</li>
                          </ul>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => navigateToDetail('helpus-voice')}
                            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/30 flex items-center gap-2 transition-all"
                          >
                            <Search className="w-4 h-4" />
                            <span>Ver Apresentação Dedicada da Solução</span>
                          </button>

                          <a
                            href="https://voice.helpusbr.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
                          >
                            <ExternalLink className="w-4 h-4 text-blue-600" />
                            <span>Acessar Aplicação no Ar</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Item 2: HelpUS AI Agent */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-5 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs">
                          <Bot className="w-4 h-4" />
                          <span>Automação WhatsApp 24/7</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          HelpUS AI Agent — Atendente Virtual Autônomo
                        </h3>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          Central de atendentes virtuais que atendem no WhatsApp 24h por dia sem pausa. O agente entende o contexto do seu negócio, tira dúvidas de preços, qualifica leads e realiza agendamentos automaticamente.
                        </p>

                        <div className="space-y-2 pt-1">
                          <p className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">Principais Recursos:</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> Atendimento 24h sem Parar</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> Qualificação Automática de Leads</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> Agendamento e Confirmação</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> WhatsApp Cloud API Integrado</li>
                          </ul>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => navigateToDetail('helpus-agent')}
                            className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-2 transition-all"
                          >
                            <Search className="w-4 h-4" />
                            <span>Ver Apresentação Dedicada da Solução</span>
                          </button>

                          <a
                            href="https://agent.helpusbr.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
                          >
                            <ExternalLink className="w-4 h-4 text-indigo-600" />
                            <span>Acessar Aplicação no Ar</span>
                          </a>
                        </div>
                      </div>

                      <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 relative order-1 lg:order-2">
                        <img src="/images/helpus_dev_ui.jpg" alt="HelpUS AI Agent" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-indigo-900/20"></div>
                        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900">
                          <span>agent.helpusbr.com</span>
                        </div>
                      </div>
                    </div>

                    {/* Item 3: HelpUS Search AI */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 relative">
                        <img src="/images/helpus_hero_futuristic.jpg" alt="HelpUS Search AI" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900">
                          <span>search.helpusbr.com</span>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-extrabold text-xs">
                          <Search className="w-4 h-4" />
                          <span>Pesquisa Verificável</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          HelpUS Search AI — Pesquisas Verificáveis com Fontes
                        </h3>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          Motor de inteligência de mercado que varre a internet em tempo real e entrega resumos executivos acompanhados de fontes e citações numéricas [1], [2]. Substitua a pesquisa tradicional por dados estratégicos verificados.
                        </p>

                        <div className="space-y-2 pt-1">
                          <p className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">Principais Recursos:</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Citações Numéricas [1], [2]</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Varredura Web em Tempo Real</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Resumos Estratégicos de Mercado</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Filtros por Segmentos do Ecossistema</li>
                          </ul>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => navigateToDetail('helpus-search')}
                            className="px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md shadow-cyan-600/30 flex items-center gap-2 transition-all"
                          >
                            <Search className="w-4 h-4" />
                            <span>Ver Apresentação Dedicada da Solução</span>
                          </button>

                          <a
                            href="https://search.helpusbr.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
                          >
                            <ExternalLink className="w-4 h-4 text-cyan-600" />
                            <span>Acessar Aplicação no Ar</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Item 4: HelpUS AI Slides */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-5 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-extrabold text-xs">
                          <Presentation className="w-4 h-4" />
                          <span>Gerador Automático de Slides</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          HelpUS AI Slides — Apresentações Comerciais em Segundos
                        </h3>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          Transforme briefings simples em texto ou listas de especificações em apresentações visuais e propostas de venda completas prontas em formato PDF em poucos segundos.
                        </p>

                        <div className="space-y-2 pt-1">
                          <p className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">Principais Recursos:</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600" /> Geração de Slides a partir de Texto</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600" /> Propostas Comerciais Visuais</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600" /> Exportação Direta em PDF</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600" /> Zero Necessidade de PowerPoint</li>
                          </ul>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => navigateToDetail('helpus-slides')}
                            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs shadow-md shadow-amber-500/30 flex items-center gap-2 transition-all"
                          >
                            <Search className="w-4 h-4" />
                            <span>Ver Apresentação Dedicada da Solução</span>
                          </button>

                          <a
                            href="https://slides.helpusbr.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
                          >
                            <ExternalLink className="w-4 h-4 text-amber-600" />
                            <span>Acessar Aplicação no Ar</span>
                          </a>
                        </div>
                      </div>

                      <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 relative order-1 lg:order-2">
                        <img src="/images/helpus_events.jpg" alt="HelpUS AI Slides" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900">
                          <span>slides.helpusbr.com</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            )}

            {/* VIEW 3: INFRAESTRUTURA CORPORATIVA & FINANÇAS */}
            {currentView === 'infraestrutura' && (
              <section className="py-16 md:py-24 bg-slate-50">
                <div className="hub-container space-y-16">
                  
                  {/* Header Banner */}
                  <div className="space-y-4 max-w-4xl">
                    <button
                      onClick={() => switchView('home')}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center gap-2 border border-slate-200 transition-all mb-4"
                    >
                      <ArrowLeft className="w-4 h-4 text-blue-600" />
                      <span>{t.common.backToCompany}</span>
                    </button>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider">
                      <Zap className="w-4 h-4 text-amber-600" />
                      <span>Gateway, SSO & Gestão Corporativa</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
                      Infraestrutura Corporativa & Finanças
                    </h1>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                      Apresentação das plataformas de infraestrutura: gateway PIX de pagamentos recorrentes, autenticação SSO criptografada em 256-bit, monitor master de status em tempo real e CRM omnichannel.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pay Engine Showcase */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                            <Zap className="w-6 h-6" />
                          </div>
                          <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-extrabold text-xs border border-amber-200">
                            pay.helpusbr.com
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">HelpUS Pay Engine</h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          Infraestrutura central de pagamentos, cobrança recorrente de mensalidades, faturas corporativas e emissão dinâmica de PIX QR Code instantâneo com conciliação automática.
                        </p>

                        <div className="space-y-2 pt-2">
                          <p className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">Recursos de Engenharia:</p>
                          <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600" /> PIX QR Code Instantâneo</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600" /> Cobrança Recorrente Automática</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600" /> Conciliação de Faturas sem Falhas</li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <button onClick={() => navigateToDetail('helpus-pay')} className="text-xs font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1">
                          <span>Ver Apresentação Dedicada</span> ➔
                        </button>
                        <a href="https://pay.helpusbr.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold text-xs hover:bg-amber-400 shadow-md">
                          Acessar Aplicação
                        </a>
                      </div>
                    </div>

                    {/* Auth SSO Showcase */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md">
                            <Lock className="w-6 h-6" />
                          </div>
                          <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-extrabold text-xs border border-rose-200">
                            auth.helpusbr.com
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">HelpUS Auth Single Sign-On</h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          Central de Login Único (Single Sign-On) com autenticação criptografada em 256-bit. Permite que clientes e usuários acessem todos os módulos com 1 única conta.
                        </p>

                        <div className="space-y-2 pt-2">
                          <p className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">Recursos de Engenharia:</p>
                          <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-600" /> Autenticação Única SSO</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-600" /> Criptografia AES 256-bit</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-600" /> Gestão Centralizada de Permissões</li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <button onClick={() => navigateToDetail('helpus-auth')} className="text-xs font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1">
                          <span>Ver Apresentação Dedicada</span> ➔
                        </button>
                        <a href="https://auth.helpusbr.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-500 shadow-md">
                          Acessar Aplicação
                        </a>
                      </div>
                    </div>

                    {/* CRM Showcase */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                            <Briefcase className="w-6 h-6" />
                          </div>
                          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs border border-blue-200">
                            crm.helpusbr.com
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">HelpUS CRM Omnichannel</h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          Gestão unificada de leads capturados pelos robôs de IA, funil Kanban de vendas e transição suave da resposta automatizada para a equipe de atendimento humano.
                        </p>

                        <div className="space-y-2 pt-2">
                          <p className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">Recursos de Engenharia:</p>
                          <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Funil Kanban Visual de Vendas</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Transição Transparente IA ➔ Humano</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Histórico Completo de Conversas</li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <button onClick={() => navigateToDetail('helpus-crm')} className="text-xs font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1">
                          <span>Ver Apresentação Dedicada</span> ➔
                        </button>
                        <a href="https://crm.helpusbr.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 shadow-md">
                          Acessar Aplicação
                        </a>
                      </div>
                    </div>

                    {/* Admin Showcase */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                            <Activity className="w-6 h-6" />
                          </div>
                          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs border border-emerald-200">
                            admin.helpusbr.com
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">HelpUS Admin Dashboard</h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          Painel master de controle e inteligência com monitor de disponibilidade de uptime em tempo real dos 15 subdomínios, métricas de latência e relatórios de tendências.
                        </p>

                        <div className="space-y-2 pt-2">
                          <p className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">Recursos de Engenharia:</p>
                          <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Monitor Uptime 24/7 dos Subdomínios</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Métricas de Tráfego e Requisições</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Central de Logs de Segurança</li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <button onClick={() => navigateToDetail('helpus-admin')} className="text-xs font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1">
                          <span>Ver Apresentação Dedicada</span> ➔
                        </button>
                        <a href="https://admin.helpusbr.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 shadow-md">
                          Acessar Aplicação
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* VIEW 4: ECOSSISTEMAS SETORIAIS SOB MEDIDA */}
            {currentView === 'setoriais' && (
              <section className="py-16 md:py-24 bg-white">
                <div className="hub-container space-y-16">
                  
                  {/* Header Banner */}
                  <div className="space-y-4 max-w-4xl">
                    <button
                      onClick={() => switchView('home')}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 border border-slate-200 transition-all mb-4"
                    >
                      <ArrowLeft className="w-4 h-4 text-blue-600" />
                      <span>{t.common.backToCompany}</span>
                    </button>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
                      <Layers className="w-4 h-4 text-emerald-600" />
                      <span>Engenharia Setorial & {t.common.filterClient}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
                      {t.businessDivisions.g3Title} Sob Medida
                    </h1>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                      Apresentação dos portais corporativos especializados desenvolvidos para o Mercado Imobiliário, Medicina & Telemedicina, Mobilidade Executiva, Gastronomia, Memória Viva e Projetos sob medida de Clientes.
                    </p>
                  </div>

                  {/* Category Matrix Division Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryMatrix.map((cat) => {
                      const CatIcon = cat.icon;

                      return (
                        <div
                          key={cat.id}
                          className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-blue-500 hover:bg-white shadow-sm hover:shadow-xl transition-all space-y-6 flex flex-col justify-between group cursor-pointer"
                          onClick={() => setSelectedCategoryModal(cat.idCategory || cat.id)}
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                <CatIcon className="w-7 h-7" />
                              </div>
                              <span className="px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200 font-bold text-xs">
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

                          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              Ver Plataformas da Divisão ➔
                            </span>

                            <a
                              href={cat.directUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2.5 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-200 transition-colors"
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
            )}
          </>
        )}
      </main>

      {/* INSTITUTIONAL VIDEO PRESENTATION MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setVideoModalOpen(false)}>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{t.videoModal.title}</h3>
                <p className="text-xs text-slate-500">Vídeo Oficial da HelpUS Technology no Instagram</p>
              </div>
              <button onClick={() => setVideoModalOpen(false)} className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="w-full h-[480px] sm:h-[560px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 relative flex items-center justify-center">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.instagram.com/p/DcoMVB1Of8Z/embed/"
                  title="HelpUS Technology Presentation Instagram Video"
                  allowTransparency={true}
                  allow="encrypted-media"
                ></iframe>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-500 font-medium">Publicado oficialmente em @helpusbr</span>
                <a
                  href="https://www.instagram.com/p/DcoMVB1Of8Z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs shadow-md hover:opacity-90 flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Abrir Vídeo no Instagram</span>
                </a>
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

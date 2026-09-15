import { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Car, 
  Pizza, 
  Bot, 
  Briefcase, 
  BookOpen, 
  UserCheck, 
  Code2,
  Building2,
  ExternalLink,
  ChevronDown,
  Layers,
  Globe2,
  X,
  ArrowLeft,
  Search,
  Scale,
  Scissors,
  Activity,
  Heart,
  Brain,
  Volume2,
  Presentation,
  Lock,
  Zap,
  Filter,
  ArrowRight
} from 'lucide-react';

import { translations, type Language } from './i18n/translations';
import AnimatedBackground from './components/AnimatedBackground';
import StickyFloatingFooter from './components/StickyFloatingFooter';
import CategoryCard, { type CategoryCardData } from './components/CategoryCard';
import SolutionDetailView from './components/SolutionDetailView';
import HeroCarouselBanner from './components/HeroCarouselBanner';
import CorporateFooter from './components/CorporateFooter';
import CookieBanner from './components/CookieBanner';

export interface AppItem {
  id: string;
  domain: string;
  liveUrl: string;
  category: 'ia' | 'infra' | 'setoriais' | 'clientes';
  clientSubcategory?: 'realestate' | 'health' | 'beauty' | 'food' | 'services';
  icon: any;
  image: string;
  folderPath: string;
  status: string;
  isClientSite?: boolean;
  featured?: boolean;
}

export type CategoryId = 'ia' | 'infra' | 'setoriais' | 'clientes';

export function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [langDropdownOpen, setLangDropdownOpen] = useState<boolean>(false);

  // Navigation Tier State
  // Tier 1: Home (selectedCategory === null && selectedAppId === null)
  // Tier 2: Category View (selectedCategory !== null && selectedAppId === null)
  // Tier 3: Solution Detail View (selectedAppId !== null)
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [clientFilter, setClientFilter] = useState<string>('all');

  // Institutional Info Modal State
  const [activeInfoModal, setActiveInfoModal] = useState<'institutional' | 'help' | 'privacy' | null>(null);

  // Tagline translations by language
  const taglineTranslations = {
    pt: 'SOLUÇÕES EM TECNOLOGIA',
    en: 'TECHNOLOGY SOLUTIONS',
    es: 'SOLUCIONES EN TECNOLOGÍA'
  };

  // Sync Language and Navigation with URL Parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Language;
      const savedLang = localStorage.getItem('helpus_lang') as Language;

      if (urlLang && ['en', 'es', 'pt'].includes(urlLang)) {
        setLang(urlLang);
        localStorage.setItem('helpus_lang', urlLang);
      } else if (savedLang && ['en', 'es', 'pt'].includes(savedLang)) {
        setLang(savedLang);
      }

      const solParam = params.get('solucao');
      const catParam = params.get('categoria') as CategoryId;

      if (solParam) {
        setSelectedAppId(solParam);
      } else if (catParam && ['ia', 'infra', 'setoriais', 'clientes'].includes(catParam)) {
        setSelectedCategory(catParam);
      }
    }
  }, []);

  // Sync Browser Back Button
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const solId = params.get('solucao');
      const catId = params.get('categoria') as CategoryId;

      if (solId) {
        setSelectedAppId(solId);
        setSelectedCategory(null);
      } else if (catId) {
        setSelectedCategory(catId);
        setSelectedAppId(null);
      } else {
        setSelectedAppId(null);
        setSelectedCategory(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const changeLanguage = (code: Language) => {
    setLang(code);
    setLangDropdownOpen(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('helpus_lang', code);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', code);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const navigateToCategory = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setSelectedAppId(null);
    const url = new URL(window.location.href);
    url.searchParams.set('categoria', catId);
    url.searchParams.delete('solucao');
    window.history.pushState({ catId }, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSolution = (appId: string) => {
    const app = applications.find(a => a.id === appId);
    if (app) {
      setSelectedAppId(appId);
      const url = new URL(window.location.href);
      url.searchParams.set('solucao', appId);
      if (app.category) url.searchParams.set('categoria', app.category);
      window.history.pushState({ appId }, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    setSelectedCategory(null);
    setSelectedAppId(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('categoria');
    url.searchParams.delete('solucao');
    window.history.pushState({}, '', url.pathname + (url.searchParams.get('lang') ? `?lang=${url.searchParams.get('lang')}` : ''));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[lang] || translations.pt;

  // Official HelpUS contacts
  const whatsappNumber = '5583998721848';
  const whatsappFormatted = '(83) 99872-1848';
  const helpusEmail = 'helpus.ecommerce@gmail.com';

  // Applications & Projects Registry
  const applications: AppItem[] = [
    // 1. INTELIGÊNCIA ARTIFICIAL (ia)
    {
      id: 'helpus-voice',
      domain: 'voice.helpusbr.com',
      liveUrl: 'https://voice.helpusbr.com',
      category: 'ia',
      icon: Volume2,
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-voice',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-agent',
      domain: 'agent.helpusbr.com',
      liveUrl: 'https://helpus-agent.vercel.app',
      category: 'ia',
      icon: Bot,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-agent',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-search',
      domain: 'search.helpusbr.com',
      liveUrl: 'https://helpus-search.vercel.app',
      category: 'ia',
      icon: Search,
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-search',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-slides',
      domain: 'slides.helpusbr.com',
      liveUrl: 'https://slides.helpusbr.com',
      category: 'ia',
      icon: Presentation,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-slides',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'nexosai',
      domain: 'nexoai.helpusbr.com',
      liveUrl: 'https://nexoai.helpusbr.com',
      category: 'ia',
      icon: Bot,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\nexosai',
      status: 'Plataforma Ativa'
    },
    {
      id: 'cardioia',
      domain: 'cardioia.helpusbr.com',
      liveUrl: 'https://cardioia.helpusbr.com',
      category: 'ia',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\cardioia',
      status: 'Plataforma Ativa'
    },

    // 2. INFRAESTRUTURA & FINANÇAS (infra)
    {
      id: 'helpus-pay',
      domain: 'pay.helpusbr.com',
      liveUrl: 'https://helpus-pay.vercel.app',
      category: 'infra',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-pay',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-auth',
      domain: 'auth.helpusbr.com',
      liveUrl: 'https://helpus-auth.vercel.app',
      category: 'infra',
      icon: Lock,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-auth',
      status: 'Plataforma Ativa'
    },
    {
      id: 'helpus-crm',
      domain: 'crm.helpusbr.com',
      liveUrl: 'https://helpus-crm.vercel.app',
      category: 'infra',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-crm',
      status: 'Plataforma Ativa'
    },
    {
      id: 'helpus-admin',
      domain: 'admin.helpusbr.com',
      liveUrl: 'https://helpus-admin.vercel.app',
      category: 'infra',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-admin',
      status: 'Plataforma Ativa'
    },
    {
      id: 'helpus-status',
      domain: 'status.helpusbr.com',
      liveUrl: 'https://helpus-status.vercel.app',
      category: 'infra',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-status',
      status: 'Plataforma Ativa'
    },
    {
      id: 'helpus-docs',
      domain: 'docs.helpusbr.com',
      liveUrl: 'https://helpus-docs.vercel.app',
      category: 'infra',
      icon: Code2,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-docs',
      status: 'Plataforma Ativa'
    },

    // 3. ECOSSISTEMAS SETORIAIS (setoriais)
    {
      id: 'realestate',
      domain: 'realestate.helpusbr.com',
      liveUrl: 'https://realestate.helpusbr.com',
      category: 'setoriais',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\realestate',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'usmle',
      domain: 'usmle.helpusbr.com',
      liveUrl: 'https://usmle.helpusbr.com',
      category: 'setoriais',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\usmle',
      status: 'Plataforma Ativa'
    },
    {
      id: 'wagnerdriver-site',
      domain: 'wagnerdriver.helpusbr.com',
      liveUrl: 'https://wagnerdriver.helpusbr.com',
      category: 'setoriais',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\wagnerdriver-site',
      status: 'Plataforma Ativa'
    },
    {
      id: 'pizza',
      domain: 'pizza.helpusbr.com',
      liveUrl: 'https://pizza.helpusbr.com',
      category: 'setoriais',
      icon: Pizza,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\pizza',
      status: 'Plataforma Ativa'
    },

    // 4. SITES DE CLIENTES FINAIS (clientes - 19 Sites)
    {
      id: 'taticaassessoriacontabil',
      domain: 'tatica.helpusbr.com',
      liveUrl: 'https://tatica.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: Scale,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\taticaassessoriacontabil',
      status: 'Projeto de Cliente',
      isClientSite: true,
      featured: true
    },
    {
      id: 'neuroeduardomagalhaes',
      domain: 'neuro.eduardomagalhaes.helpusbr.com',
      liveUrl: 'https://neuro.eduardomagalhaes.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'health',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\neuro.eduardomagalhaes',
      status: 'Projeto de Cliente',
      isClientSite: true,
      featured: true
    },
    {
      id: 'katiaxavier',
      domain: 'katiaxavier.helpusbr.com',
      liveUrl: 'https://katiaxavier.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'realestate',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\katiaxavier-site',
      status: 'Projeto de Cliente',
      isClientSite: true,
      featured: true
    },
    {
      id: 'marciotopbarber',
      domain: 'barber.helpusbr.com',
      liveUrl: 'https://barber.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'beauty',
      icon: Scissors,
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\marciotopbarber',
      status: 'Projeto de Cliente',
      isClientSite: true,
      featured: true
    },
    {
      id: 'danyimoveisjp',
      domain: 'danyimoveis.helpusbr.com',
      liveUrl: 'https://danyimoveis.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'realestate',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\danyimoveisjp',
      status: 'Projeto de Cliente',
      isClientSite: true,
      featured: true
    },
    {
      id: 'caipiraraiz',
      domain: 'caipiraraiz.helpusbr.com',
      liveUrl: 'https://caipiraraiz.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'food',
      icon: Pizza,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\caipiraraiz',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'events',
      domain: 'events.helpusbr.com',
      liveUrl: 'https://events.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'food',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\events',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'bluebox',
      domain: 'bluebox.helpusbr.com',
      liveUrl: 'https://bluebox.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'beauty',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\bluebox',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'vivasuacura',
      domain: 'vivasuacura.helpusbr.com',
      liveUrl: 'https://vivasuacura.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'health',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\vivasuacura',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'brayyan',
      domain: 'brayyan.helpusbr.com',
      liveUrl: 'https://brayyan.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: UserCheck,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\brayyan',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'memoria-viva',
      domain: 'memoriaviva.helpusbr.com',
      liveUrl: 'https://memoriaviva.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\memoria-viva',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'energisa',
      domain: 'energisa.helpusbr.com',
      liveUrl: 'https://energisa.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\energisa',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'escolaestacaomusical',
      domain: 'escolaestacaomusical.helpusbr.com',
      liveUrl: 'https://escolaestacaomusical.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\escolaestacaomusical',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'giulliano',
      domain: 'giulliano.helpusbr.com',
      liveUrl: 'https://giulliano.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: UserCheck,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\giulliano',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'tulio-bicicletas-site',
      domain: 'tuliobicicletas.helpusbr.com',
      liveUrl: 'https://tuliobicicletas.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\tulio-bicicletas-site',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'waleska-site',
      domain: 'waleska.helpusbr.com',
      liveUrl: 'https://waleska.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: UserCheck,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\waleska-site',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'publicarte',
      domain: 'publicarte.helpusbr.com',
      liveUrl: 'https://publicarte.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: Globe2,
      image: 'https://images.unsplash.com/photo-1542744094-3a3172720449?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\publicarte',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'drmatheusbomfim',
      domain: 'drmatheusbomfim.helpusbr.com',
      liveUrl: 'https://drmatheusbomfim.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'health',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\matheus',
      status: 'Projeto de Cliente',
      isClientSite: true
    }
  ];

  // Softcom-style Category Cards Data List for Level 1 Home
  const categoriesList: CategoryCardData[] = [
    {
      id: 'ia',
      title: {
        pt: 'Inteligência Artificial & Agentes IA',
        en: 'AI & Autonomous Agents',
        es: 'Inteligencia Artificial y Agentes'
      },
      subtitle: {
        pt: 'Automação autônoma no WhatsApp, busca RAG e síntese de voz',
        en: 'WhatsApp agents, RAG search & voice synthesis',
        es: 'Agentes WhatsApp, búsqueda RAG y voz'
      },
      description: {
        pt: 'Plataformas avançadas de IA generativa para automação de atendimento no WhatsApp, assistentes de pesquisa com citação de fontes e síntese de voz.',
        en: 'Advanced generative AI platforms for WhatsApp support automation, search engine with citations, and neural voice synthesis.',
        es: 'Plataformas de IA generativa para automatización en WhatsApp, motor de búsqueda con citas y síntesis de voz.'
      },
      image: '/images/helpus_hero_futuristic.jpg',
      icon: Bot,
      colorGradient: 'from-blue-600 via-cyan-600 to-transparent',
      badgeBg: 'bg-cyan-500',
      badgeText: 'Inteligência Artificial',
      count: applications.filter(a => a.category === 'ia').length,
      features: {
        pt: ['Atendimento Autônomo WhatsApp 24/7', 'Busca Neural com Fontes Verificáveis', 'Síntese de Voz & Gerador de Slides'],
        en: ['24/7 Autonomous WhatsApp Support', 'Neural Search with Verifiable Citations', 'Voice Synthesis & Presentation Deck Generator'],
        es: ['Atención Autónoma WhatsApp 24/7', 'Búsqueda Neural con Citas Verificables', 'Síntesis de Voz y Generador de Slides']
      }
    },
    {
      id: 'infra',
      title: {
        pt: 'Infraestrutura & SaaS Corporativo',
        en: 'Infrastructure & Corporate SaaS',
        es: 'Infraestructura y SaaS Corporativo'
      },
      subtitle: {
        pt: 'Gateways de pagamento PIX, CRM, autenticação SSO e docs',
        en: 'PIX payment gateways, CRM, SSO auth & docs',
        es: 'Pasarelas de pago PIX, CRM, auth SSO y docs'
      },
      description: {
        pt: 'Microsserviços essenciais para operabilidade empresarial: cobrança via PIX e cartão recorrente, autenticação única Single Sign-On (SSO) e CRM.',
        en: 'Core microservices for enterprise operations: PIX & recurring card billing, Single Sign-On (SSO) authentication, and CRM.',
        es: 'Microservicios esenciales: cobro PIX y tarjeta recurrente, autenticación Single Sign-On (SSO) y CRM.'
      },
      image: '/images/helpus_dev_ui.jpg',
      icon: Zap,
      colorGradient: 'from-amber-600 via-orange-600 to-transparent',
      badgeBg: 'bg-amber-500',
      badgeText: 'Infraestrutura & Pay',
      count: applications.filter(a => a.category === 'infra').length,
      features: {
        pt: ['Cobrança PIX & Cartão Recorrente', 'Single Sign-On (SSO) Criptografado', 'Monitor Master de Availability Uptime'],
        en: ['PIX & Recurring Card Billing', 'Encrypted Single Sign-On (SSO)', 'Master Uptime Availability Monitor'],
        es: ['Cobro PIX y Tarjeta Recurrente', 'Single Sign-On (SSO) Criptografado', 'Monitor Master de Disponibilidad Uptime']
      }
    },
    {
      id: 'setoriais',
      title: {
        pt: 'Sistemas Setoriais & Verticais',
        en: 'Vertical Industry Platforms',
        es: 'Sistemas Sectoriales y Verticales'
      },
      subtitle: {
        pt: 'Plataformas especializadas para imobiliárias, clínicas e gastronomia',
        en: 'Specialized platforms for real estate, health & food',
        es: 'Plataformas especializadas para inmobiliarias, salud y gastronomía'
      },
      description: {
        pt: 'Sistemas prontos para segmentos de mercado de alta demanda: gestão imobiliária com geolocalização, exames médicos e motorista particular VIP.',
        en: 'Turnkey vertical platforms for high demand sectors: real estate with geolocation, medical exams, and VIP private driver.',
        es: 'Sistemas listos para segmentos de alta demanda: gestión inmobiliaria con geolocalización y exámenes médicos.'
      },
      image: '/images/helpus_imoveis_luxury.jpg',
      icon: Layers,
      colorGradient: 'from-emerald-600 via-teal-600 to-transparent',
      badgeBg: 'bg-emerald-500',
      badgeText: 'Plataformas Setoriais',
      count: applications.filter(a => a.category === 'setoriais').length,
      features: {
        pt: ['CRM Imobiliário Multiusuário', 'Plataforma USMLE de Exames Médicos', 'Mobilidade & Gastronomia Digital'],
        en: ['Multi-tenant Real Estate CRM', 'USMLE Medical Exams Platform', 'Mobility & Digital Gastronomy'],
        es: ['CRM Inmobiliario Multiusuario', 'Plataforma USMLE de Exámenes Médicos', 'Movilidad y Gastronomía Digital']
      }
    },
    {
      id: 'clientes',
      title: {
        pt: 'Sites & Portfólio de Clientes',
        en: 'Client Sites Portfolio',
        es: 'Portafolio de Sitios de Clientes'
      },
      subtitle: {
        pt: 'Rede de 19 sites corporativos ativos no ar com SSL estendido',
        en: 'Network of 19 active live client sites with extended SSL',
        es: 'Red de 19 sitios activos de clientes con SSL'
      },
      description: {
        pt: 'Nossa carteira de projetos corporativos desenvolvidos sob medida para escritórios contábeis, médicos, imobiliárias, barbearias e e-commerce.',
        en: 'Our portfolio of custom corporate projects built for accounting firms, physicians, real estate, barbershops, and e-commerce.',
        es: 'Nuestro portafolio de proyectos corporativos desarrollados para oficinas contables, médicos, inmobiliarias y barberías.'
      },
      image: '/images/helpus_health.jpg',
      icon: Globe2,
      colorGradient: 'from-indigo-600 via-purple-600 to-transparent',
      badgeBg: 'bg-indigo-500',
      badgeText: 'Rede de 19 Clientes',
      count: applications.filter(a => a.category === 'clientes').length,
      features: {
        pt: ['19 Sites 100% Online com HTTP 200 OK', 'Integração Direta com WhatsApp', 'Hospedagem em Nuvem Cloudflare Redundante'],
        en: ['19 Sites 100% Online with HTTP 200 OK', 'Direct WhatsApp Integration', 'Redundant Cloudflare Cloud Hosting'],
        es: ['19 Sitios 100% Online con HTTP 200 OK', 'Integración Directa con WhatsApp', 'Hospedaje Cloudflare Redundante']
      }
    }
  ];

  const selectedAppObj = selectedAppId ? applications.find(a => a.id === selectedAppId) : null;
  const activeCategoryApps = selectedCategory ? applications.filter(a => a.category === selectedCategory) : [];

  // Filtered Client Sites for Category 'clientes'
  const filteredClientApps = activeCategoryApps.filter(app => {
    if (clientFilter === 'all') return true;
    return app.clientSubcategory === clientFilter;
  });

  const appTexts = {
    pt: {
      backToHome: 'Voltar à Página Inicial',
      divisionBadge: 'Divisão Corporativa HelpUS',
      catTitles: {
        ia: 'Inteligência Artificial & Automação Neural',
        infra: 'Infraestrutura Corporativa, SSO & Pagamentos',
        setoriais: 'Plataformas Setoriais Especializadas',
        clientes: 'Portais & Sites de Clientes Finais (19)'
      },
      catDescs: {
        ia: 'Conheça nossa suíte completa de Inteligência Artificial generativa: assistentes autônomos 24/7 no WhatsApp, estúdio de voz neural, motor de pesquisa verificável com fontes e gerador visual de apresentações.',
        infra: 'Infraestrutura central de microsserviços corporativos: gateway de cobrança PIX recorrente, autenticação única Single Sign-On (SSO) criptografada, CRM omnichannel e monitor master de disponibilidade de status.',
        setoriais: 'Plataformas de alta performance desenvolvidas para o mercado imobiliário (RealEstate), saúde e exames médicos (USMLE), mobilidade executiva e gastronomia.',
        clientes: 'Conheça os portais e sistemas desenvolvidos sob medida para nossa carteira de clientes finais: escritórios de contabilidade, médicos, imobiliárias, barbearias, restaurantes e e-commerce.'
      },
      filterLabel: 'Filtrar Segmento:',
      filterAll: 'Todos',
      filterRealestate: '🏢 Imobiliárias',
      filterHealth: '🩺 Medicina & Saúde',
      filterBeauty: '✂️ Barbearia & Estética',
      filterFood: '🍕 Gastronomia & Eventos',
      filterServices: '💼 Serviços & Outros',
      cardBtnDedicated: 'Ver Apresentação Dedicada (Detalhes)',
      cardBtnDirect: 'Acessar Site Direto ↗',
      homeCatBadge: 'Categorias Principais',
      homeCatTitle: 'Explore Nossas Divisões de Solução',
      homeCatDesc: 'Apresentação organizada em categorias representativas inspirada em grandes portais corporativos. Clique para explorar cada divisão detalhadamente.',
      engBadge: 'Padrão de Engenharia',
      engTitle: 'Por Que Grandes Negócios Confiam na HelpUS?',
      engDesc: 'Construímos soluções focadas em velocidade de resposta, zero manutenção corretiva e disponibilidade máxima.',
      eng1Title: 'Automação Autônoma 24/7',
      eng1Desc: 'Agentes de inteligência artificial treinados com os dados reais do seu negócio que atendem e convertem clientes no WhatsApp sem intervenção humana.',
      eng2Title: 'Arquitetura Serverless Mesh',
      eng2Desc: 'Microsserviços independentes e isolados hospedados na Vercel Cloud e Cloudflare, garantindo latência ultra-baixa e SSL criptografado ativado.',
      eng3Title: 'Compatibilidade & Uptime',
      eng3Desc: 'Subdomínios vinculados diretamente aos CNAMEs dos clientes para resposta em milissegundos e monitoramento ativo 24 horas por dia.'
    },
    en: {
      backToHome: 'Back to Home',
      divisionBadge: 'HelpUS Corporate Division',
      catTitles: {
        ia: 'Artificial Intelligence & Neural Automation',
        infra: 'Corporate Infrastructure, SSO & Payments',
        setoriais: 'Specialized Vertical Platforms',
        clientes: 'Client Sites & Portals (19)'
      },
      catDescs: {
        ia: 'Discover our complete suite of generative AI: 24/7 autonomous WhatsApp agents, neural voice studio, verifiable search engine with citations, and slide generator.',
        infra: 'Central corporate microservices infrastructure: recurring PIX payment gateway, encrypted Single Sign-On (SSO) auth, omnichannel CRM, and master uptime status monitor.',
        setoriais: 'High-performance platforms built for real estate (RealEstate), healthcare & medical exams (USMLE), executive mobility, and gastronomy.',
        clientes: 'Discover custom portals and systems built for our client portfolio: accounting firms, physicians, real estate brokers, barbershops, restaurants, and e-commerce.'
      },
      filterLabel: 'Filter Segment:',
      filterAll: 'All',
      filterRealestate: '🏢 Real Estate',
      filterHealth: '🩺 Medicine & Health',
      filterBeauty: '✂️ Barbershop & Beauty',
      filterFood: '🍕 Gastronomy & Events',
      filterServices: '💼 Services & Others',
      cardBtnDedicated: 'View Dedicated Presentation (Details)',
      cardBtnDirect: 'Visit Direct Site ↗',
      homeCatBadge: 'Main Categories',
      homeCatTitle: 'Explore Our Solution Divisions',
      homeCatDesc: 'Organized presentation in representative categories inspired by corporate portals. Click to explore each division in detail.',
      engBadge: 'Engineering Standard',
      engTitle: 'Why Top Businesses Trust HelpUS?',
      engDesc: 'We build solutions focused on rapid response speed, zero corrective maintenance, and maximum availability.',
      eng1Title: '24/7 Autonomous Automation',
      eng1Desc: 'AI agents trained on your business data that serve and convert customers on WhatsApp without human intervention.',
      eng2Title: 'Serverless Mesh Architecture',
      eng2Desc: 'Isolated microservices hosted on Vercel Cloud and Cloudflare, ensuring ultra-low latency and active encrypted SSL.',
      eng3Title: 'Compatibility & Uptime',
      eng3Desc: 'Subdomains directly linked to client CNAMEs for millisecond response times and 24/7 active uptime monitoring.'
    },
    es: {
      backToHome: 'Volver a la Página Principal',
      divisionBadge: 'División Corporativa HelpUS',
      catTitles: {
        ia: 'Inteligencia Artificial y Automatización Neural',
        infra: 'Infraestructura Corporativa, SSO y Pagos',
        setoriais: 'Plataformas Sectoriales Especializadas',
        clientes: 'Portales y Sitios de Clientes (19)'
      },
      catDescs: {
        ia: 'Conozca nuestra suite completa de IA generativa: agentes autónomos 24/7 en WhatsApp, estudio de voz neural, motor de búsqueda con citas y generador de diapositivas.',
        infra: 'Infraestructura central de microservicios: pasarela de pago PIX recurrente, autenticación Single Sign-On (SSO) cifrada, CRM omnicanal y monitor de uptime.',
        setoriais: 'Plataformas de alto rendimiento para el mercado inmobiliario (RealEstate), salud y exámenes médicos (USMLE), movilidad ejecutiva y gastronomía.',
        clientes: 'Conozca los portales desarrollados para nuestra cartera de clientes: firmas contables, médicos, inmobiliarias, barberías, restaurantes y e-commerce.'
      },
      filterLabel: 'Filtrar Segmento:',
      filterAll: 'Todos',
      filterRealestate: '🏢 Inmobiliarias',
      filterHealth: '🩺 Medicina y Salud',
      filterBeauty: '✂️ Barbería y Estética',
      filterFood: '🍕 Gastronomía y Eventos',
      filterServices: '💼 Servicios y Otros',
      cardBtnDedicated: 'Ver Presentación Dedicada (Detalles)',
      cardBtnDirect: 'Acceder Sitio Directo ↗',
      homeCatBadge: 'Categorías Principales',
      homeCatTitle: 'Explore Nuestras Divisiones de Solución',
      homeCatDesc: 'Presentación organizada en categorías representativas inspirada en grandes portales corporativos. Haga clic para explorar cada división.',
      engBadge: 'Estándar de Ingeniería',
      engTitle: '¿Por Qué las Grandes Empresas Confían en HelpUS?',
      engDesc: 'Construimos soluciones enfocadas en velocidad de respuesta, cero mantenimiento correctivo y máxima disponibilidad.',
      eng1Title: 'Automatización Autónoma 24/7',
      eng1Desc: 'Agentes de inteligencia artificial entrenados con datos reales que atienden y convierten clientes en WhatsApp sin intervención humana.',
      eng2Title: 'Arquitectura Serverless Mesh',
      eng2Desc: 'Microservicios independientes alojados en Vercel Cloud y Cloudflare, garantizando ultra baja latencia y SSL cifrado.',
      eng3Title: 'Compatibilidad y Uptime',
      eng3Desc: 'Subdominios vinculados directamente a los CNAMEs de clientes para respuestas en milisegundos y monitoreo 24/7.'
    }
  };

  const atUI = appTexts[lang] || appTexts.pt;

  return (
    <div className="hub-app font-sans bg-[#f8fafc] text-slate-900 min-h-screen pb-24">
      <AnimatedBackground />

      {/* Header Navbar — Semi-Transparent Dark Blue Header */}
      <header className="hub-header sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
        <div className="hub-container">
          <div className="hub-header-inner flex items-center justify-between h-20">
            
            {/* HelpUS Official Logo & Translated Sub-brand */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateToHome();
              }} 
              className="flex items-center gap-3 group"
            >
              <img
                src="/images/helpus_logo.png"
                alt="HelpUS Logo"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-white tracking-tight leading-none">HelpUS</span>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-0.5">
                  {taglineTranslations[lang] || taglineTranslations.pt}
                </span>
              </div>
            </a>

            {/* Language Switcher Dropdown Only */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-bold text-xs flex items-center gap-2 border border-slate-700/80 shadow-md transition-all"
                >
                  <Globe2 className="w-4 h-4 text-cyan-400" />
                  <span>
                    {lang === 'en' && 'EN'}
                    {lang === 'es' && 'ES'}
                    {lang === 'pt' && 'PT'}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-slate-900 rounded-xl border border-slate-800 shadow-2xl p-1.5 z-50 space-y-1">
                    <button onClick={() => changeLanguage('pt')} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors ${lang === 'pt' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800'}`}>
                      🇧🇷 Português
                    </button>
                    <button onClick={() => changeLanguage('en')} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors ${lang === 'en' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800'}`}>
                      🇺🇸 English
                    </button>
                    <button onClick={() => changeLanguage('es')} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors ${lang === 'es' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800'}`}>
                      🇪🇸 Español
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Main Render Flow: TIER 3 (Detail), TIER 2 (Category), or TIER 1 (Home) */}
      <main>
        {/* ========================================================================= */}
        {/* TIER 3: PÁGINA TERCIÁRIA — APRESENTAÇÃO DEDICADA DE UMA SOLUÇÃO ESPECÍFICA */}
        {/* ========================================================================= */}
        {selectedAppId && selectedAppObj ? (
          <SolutionDetailView 
            app={selectedAppObj} 
            lang={lang} 
            onBack={() => {
              if (selectedAppObj.category) navigateToCategory(selectedAppObj.category);
              else navigateToHome();
            }} 
          />
        ) : selectedCategory ? (
          /* ========================================================================= */
          /* TIER 2: PÁGINA SECUNDÁRIA — VISÃO DEDICADA DA CATEGORIA SELECIONADA       */
          /* ========================================================================= */
          <div className="hub-container py-16 space-y-12">
            
            {/* Header & Category Intro */}
            <div className="space-y-4 max-w-4xl">
              <button
                onClick={navigateToHome}
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center gap-2 border border-slate-200 transition-all mb-4"
              >
                <ArrowLeft className="w-4 h-4 text-blue-600" />
                <span>{atUI.backToHome}</span>
              </button>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-wider">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>{atUI.divisionBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
                {selectedCategory ? atUI.catTitles[selectedCategory] : ''}
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {selectedCategory ? atUI.catDescs[selectedCategory] : ''}
              </p>
            </div>

            {/* Quick Segment Filter for Category 'clientes' */}
            {selectedCategory === 'clientes' && (
              <div className="flex flex-wrap items-center gap-2 p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> {atUI.filterLabel}
                </span>
                <button
                  onClick={() => setClientFilter('all')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    clientFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {atUI.filterAll} ({activeCategoryApps.length})
                </button>
                <button
                  onClick={() => setClientFilter('realestate')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    clientFilter === 'realestate' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {atUI.filterRealestate}
                </button>
                <button
                  onClick={() => setClientFilter('health')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    clientFilter === 'health' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {atUI.filterHealth}
                </button>
                <button
                  onClick={() => setClientFilter('beauty')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    clientFilter === 'beauty' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {atUI.filterBeauty}
                </button>
                <button
                  onClick={() => setClientFilter('food')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    clientFilter === 'food' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {atUI.filterFood}
                </button>
                <button
                  onClick={() => setClientFilter('services')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    clientFilter === 'services' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {atUI.filterServices}
                </button>
              </div>
            )}

            {/* Grid of Projects in Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === 'clientes' ? filteredClientApps : activeCategoryApps).map((app) => {
                const appData = t.apps[app.id] || { name: app.id, subtitle: '', description: '' };
                const AppIcon = app.icon;

                return (
                  <div
                    key={app.id}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    {/* Top Cover Image Banner with Representative Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                      <img 
                        src={app.image} 
                        alt={appData.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      
                      {/* Floating Icon & Status Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 flex items-center gap-2">
                        <AppIcon className="w-4 h-4 text-blue-600" />
                        <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-tight">
                          {app.status || 'Plataforma Ativa'}
                        </span>
                      </div>

                      {/* Domain Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-xs font-bold text-cyan-300 border border-cyan-500/30">
                        {app.domain}
                      </div>

                      {/* Card Title Inside Image Banner */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-lg font-extrabold text-white drop-shadow-md group-hover:text-cyan-300 transition-colors">
                          {appData.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        {appData.subtitle && (
                          <p className="text-xs font-semibold text-blue-600">
                            {appData.subtitle}
                          </p>
                        )}
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {appData.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-slate-100 space-y-2">
                        <button
                          onClick={() => navigateToSolution(app.id)}
                          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
                        >
                          <span>{atUI.cardBtnDedicated}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <a
                          href={app.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200 flex items-center justify-center gap-1.5 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                          <span>{atUI.cardBtnDirect}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* TIER 1: PÁGINA INICIAL — HERO CAROUSEL BANNER & CATEGORY HUBS             */
          /* ========================================================================= */
          <>
            {/* Hero Section with High-Tech Animated Carousel Backdrop */}
            <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8fafc] border-b border-slate-200">
              <div className="hub-container relative z-10 max-w-6xl mx-auto">
                
                {/* HERO BACKGROUND CAROUSEL BANNER (Headline & Subtitle directly inside banner) */}
                <HeroCarouselBanner lang={lang} />

              </div>
            </section>

            {/* SOFTCOM-STYLE CATEGORY HUBS GRID (4 Categories Representative Cards) */}
            <section className="py-24 bg-white border-b border-slate-200">
              <div className="hub-container space-y-16">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                  <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-wider">
                    {atUI.homeCatBadge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {atUI.homeCatTitle}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {atUI.homeCatDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {categoriesList.map((cat) => (
                    <CategoryCard 
                      key={cat.id} 
                      category={cat} 
                      lang={lang} 
                      onSelectCategory={navigateToCategory} 
                    />
                  ))}
                </div>

              </div>
            </section>
          </>
        )}
      </main>

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

      {/* LGPD / GDPR Cookie Consent Banner */}
      <CookieBanner 
        lang={lang} 
        onOpenPrivacy={() => setActiveInfoModal('privacy')} 
      />

      {/* STICKY FLOATING BOTTOM FOOTER BAR (WhatsApp Direct Only) */}
      <StickyFloatingFooter 
        lang={lang}
        onOpenContact={() => {
          if (typeof window !== 'undefined') {
            window.open(`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento!`, '_blank');
          }
        }}
      />

      {/* CORPORATE MULTI-COLUMN FOOTER */}
      <CorporateFooter 
        lang={lang}
        onNavigateCategory={navigateToCategory}
        onOpenModal={(type) => setActiveInfoModal(type)}
      />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Car, 
  Pizza, 
  Bot, 
  Briefcase, 
  Code2,
  Building2,
  Globe2,
  Search,
  Presentation,
  Lock,
  Zap,
  MessageCircle
} from 'lucide-react';

import type { Language } from './i18n/translations';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioGrid from './components/PortfolioGrid';
import ServicesAccordion from './components/ServicesAccordion';
import SolutionDetailView from './components/SolutionDetailView';
import CorporateFooter from './components/CorporateFooter';
import CookieBanner from './components/CookieBanner';
import ContactModal from './components/ContactModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import FaleConoscoPageView from './components/FaleConoscoPageView';

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
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

  // Modals & Page states
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false);
  const [showFaleConoscoPage, setShowFaleConoscoPage] = useState<boolean>(false);

  // Master Database of All HelpUS Applications and Client Sites
  const applications: AppItem[] = [
    {
      id: 'accounting',
      domain: 'accounting.helpusbr.com',
      liveUrl: 'https://accounting.helpusbr.com',
      category: 'infra',
      icon: Code2,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\accounting',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-whatsapp-ia',
      domain: 'helpusbr.com',
      liveUrl: 'https://helpusbr.com',
      category: 'ia',
      icon: Bot,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-agent',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'helpus-fba-suite',
      domain: 'fba.helpusbr.com',
      liveUrl: 'https://fba.helpusbr.com',
      category: 'setoriais',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\fba-suite',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'realestate',
      domain: 'realestate.helpusbr.com',
      liveUrl: 'https://realestate.helpusbr.com',
      category: 'setoriais',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\realestate',
      status: 'Plataforma Ativa',
      featured: true
    },
    {
      id: 'publicarte',
      domain: 'publicarte.helpusbr.com',
      liveUrl: 'https://publicarte.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: Globe2,
      image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\publicarte',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'ariticumchales',
      domain: 'ariticumchales.helpusbr.com',
      liveUrl: 'https://ariticumchales.helpusbr.com',
      category: 'clientes',
      clientSubcategory: 'services',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\02_client_sites\\ariticumchales',
      status: 'Projeto de Cliente',
      isClientSite: true
    },
    {
      id: 'helpus-voice',
      domain: 'voice.helpusbr.com',
      liveUrl: 'https://voice.helpusbr.com',
      category: 'ia',
      icon: Bot,
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-voice',
      status: 'Plataforma Ativa'
    },
    {
      id: 'helpus-agent',
      domain: 'agent.helpusbr.com',
      liveUrl: 'https://helpus-agent.vercel.app',
      category: 'ia',
      icon: Bot,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-agent',
      status: 'Plataforma Ativa'
    },
    {
      id: 'helpus-search',
      domain: 'search.helpusbr.com',
      liveUrl: 'https://helpus-search.vercel.app',
      category: 'ia',
      icon: Search,
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-search',
      status: 'Plataforma Ativa'
    },
    {
      id: 'helpus-slides',
      domain: 'slides.helpusbr.com',
      liveUrl: 'https://slides.helpusbr.com',
      category: 'ia',
      icon: Presentation,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-slides',
      status: 'Plataforma Ativa'
    },
    {
      id: 'helpus-pay',
      domain: 'pay.helpusbr.com',
      liveUrl: 'https://helpus-pay.vercel.app',
      category: 'infra',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      folderPath: 'D:\\AntiG\\01_helpus_dev_solutions\\helpus-pay',
      status: 'Plataforma Ativa'
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
    }
  ];

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
      if (solParam) {
        setSelectedAppId(solParam);
      }
    }
  }, []);

  const changeLanguage = (code: Language) => {
    setLang(code);
    if (typeof window !== 'undefined') {
      localStorage.setItem('helpus_lang', code);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', code);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const navigateToHome = () => {
    setSelectedAppId(null);
    setShowFaleConoscoPage(false);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('categoria');
      url.searchParams.delete('solucao');
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToCategory = (_catId: CategoryId) => {
    setSelectedAppId(null);
    setShowFaleConoscoPage(false);
    const el = document.getElementById('trabalhos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToSection = (sectionId: string) => {
    if (showFaleConoscoPage || selectedAppId) {
      setSelectedAppId(null);
      setShowFaleConoscoPage(false);
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const selectedAppObj = selectedAppId ? applications.find(a => a.id === selectedAppId) : null;

  return (
    <div className="bg-[#08090a] text-white min-h-screen selection:bg-purple-500 selection:text-white font-sans">
      
      {/* Linear Header Navbar */}
      <Navbar 
        lang={lang}
        onSelectLang={changeLanguage}
        onNavigateHome={navigateToHome}
        onNavigateSection={navigateToSection}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="min-h-screen">
        {showFaleConoscoPage ? (
          <FaleConoscoPageView lang={lang} onBack={() => setShowFaleConoscoPage(false)} />
        ) : selectedAppId && selectedAppObj ? (
          <SolutionDetailView 
            app={selectedAppObj} 
            lang={lang} 
            onBack={() => {
              setSelectedAppId(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        ) : (
          <>
            {/* Linear Ambient Hero */}
            <HeroSection 
              lang={lang}
              onExploreWork={() => navigateToSection('trabalhos')}
              onOpenContact={() => setIsContactModalOpen(true)}
            />

            {/* Linear Bento Grid Showcase Portfolio */}
            <PortfolioGrid 
              lang={lang}
              onSelectProject={(id) => {
                setSelectedAppId(id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Linear Numbered Services Accordion */}
            <ServicesAccordion 
              lang={lang}
              onOpenContact={() => setIsContactModalOpen(true)}
            />
          </>
        )}
      </main>

      {/* Linear Footer */}
      <CorporateFooter 
        lang={lang}
        onNavigateCategory={navigateToCategory}
        onOpenContactPage={() => setShowFaleConoscoPage(true)}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
      />

      {/* WhatsApp Floating Glass Button */}
      <a
        href="https://wa.me/5583998721848?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%20HelpUS."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-110 transition-transform flex items-center justify-center font-bold cursor-pointer"
        aria-label="WhatsApp HelpUS"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>

      {/* Cookie Consent Banner */}
      <CookieBanner 
        lang={lang} 
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)} 
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        lang={lang}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Globe, 
  Sparkles, 
  Bot, 
  FileText, 
  ShieldCheck, 
  Building2, 
  Zap, 
  Layers, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import type { Language } from '../i18n/translations';
import type { CategoryId } from '../App';

interface NavbarProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onNavigateHome: () => void;
  onNavigateCategory: (catId: CategoryId) => void;
  onNavigateSolution: (appId: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onSelectLang,
  onNavigateHome,
  onNavigateCategory,
  onNavigateSolution,
  onOpenContact
}) => {
  // Mega-menu dropdown states: 'about' | 'do' | null
  const [activeDropdown, setActiveDropdown] = useState<'about' | 'do' | null>(null);
  
  // Left sidebar active sub-tab for 'Quem somos' mega-menu
  const [aboutSubTab, setAboutSubTab] = useState<'sobre' | 'filosofia' | 'lideranca' | 'politicas'>('sobre');
  
  // Left sidebar active sub-tab for 'O que fazemos' mega-menu
  const [doSubTab, setDoSubTab] = useState<'ia' | 'infra' | 'setoriais' | 'clientes'>('ia');
  
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (menu: 'about' | 'do') => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setLangDropdownOpen(false);
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-[#0c101a] border-b border-slate-800/80 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT: Brand Logo & Name */}
          <button 
            onClick={() => {
              onNavigateHome();
              setActiveDropdown(null);
            }} 
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <img
              src="/images/helpus_logo.png"
              alt="HelpUS Logo"
              className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl text-white tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
                HelpUS<span className="text-cyan-400 font-light text-sm">™</span>
              </span>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-0.5">
                Technology Solutions
              </span>
            </div>
          </button>

          {/* MIDDLE: Navigation Menus with 1eq Dropdown Style */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-200">
            
            {/* Menu 1: Quem somos */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                onMouseEnter={() => setActiveDropdown('about')}
                className={`flex items-center gap-1.5 py-2 hover:text-cyan-400 transition-colors cursor-pointer ${
                  activeDropdown === 'about' ? 'text-cyan-400 font-bold' : ''
                }`}
              >
                <span>Quem somos</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Menu 2: O que fazemos */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('do')}
                onMouseEnter={() => setActiveDropdown('do')}
                className={`flex items-center gap-1.5 py-2 hover:text-cyan-400 transition-colors cursor-pointer ${
                  activeDropdown === 'do' ? 'text-cyan-400 font-bold' : ''
                }`}
              >
                <span>O que fazemos</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'do' ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Menu 3: Contato */}
            <button
              onClick={() => {
                onOpenContact();
                setActiveDropdown(null);
              }}
              className="hover:text-cyan-400 transition-colors cursor-pointer py-2"
            >
              Contato
            </button>

          </nav>

          {/* RIGHT: Fale Conosco + Language Selector */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setActiveDropdown(null);
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs flex items-center gap-2 border border-slate-700/80 shadow-md transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-slate-900 rounded-xl border border-slate-800 shadow-2xl p-1.5 z-50 space-y-1">
                  <button 
                    onClick={() => { onSelectLang('pt'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${lang === 'pt' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-300 hover:bg-slate-800'}`}
                  >
                    🇧🇷 Português
                  </button>
                  <button 
                    onClick={() => { onSelectLang('en'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${lang === 'en' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-300 hover:bg-slate-800'}`}
                  >
                    🇺🇸 English
                  </button>
                  <button 
                    onClick={() => { onSelectLang('es'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${lang === 'es' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-300 hover:bg-slate-800'}`}
                  >
                    🇪🇸 Español
                  </button>
                </div>
              )}
            </div>

            {/* Primary Fale Conosco CTA Button */}
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fale Conosco</span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1EQ STYLE MEGA-MENU DROPDOWN 1: QUEM SOMOS                                */}
      {/* ========================================================================= */}
      {activeDropdown === 'about' && (
        <div 
          onMouseLeave={() => setActiveDropdown(null)}
          className="hidden lg:block absolute left-0 right-0 top-full bg-slate-950 border-b border-slate-800 shadow-2xl animate-fade-in z-50"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-12 min-h-[300px]">
            
            {/* Left Sidebar Sub-Menu */}
            <div className="col-span-3 bg-slate-900/60 p-6 border-r border-slate-800/80 space-y-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-3">
                Institucional
              </p>
              
              <button
                onClick={() => setAboutSubTab('sobre')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  aboutSubTab === 'sobre' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                Sobre a HelpUS
              </button>

              <button
                onClick={() => setAboutSubTab('filosofia')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  aboutSubTab === 'filosofia' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                Filosofia & Valores
              </button>

              <button
                onClick={() => setAboutSubTab('lideranca')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  aboutSubTab === 'lideranca' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                Liderança & Equipe
              </button>

              <button
                onClick={() => setAboutSubTab('politicas')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  aboutSubTab === 'politicas' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                Conformidade LGPD
              </button>
            </div>

            {/* Right Multi-Column Content Area */}
            <div className="col-span-9 p-8 grid grid-cols-3 gap-6 items-start">
              
              <div className="space-y-2 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/40 transition-all">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-white">Nossa Filosofia</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Valores fundamentais que impulsionam a inovação, velocidade de entrega e arquitetura resiliente.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/40 transition-all">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-white">Liderança & Visão</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Engenheiros e especialistas focados em construir o ecossistema de software corporativo ideal.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/40 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                  <FileText className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-white">História & Trajetória</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Desde 2000 criando ecossistemas digitais com mais de 67 soluções e módulos implantados.
                </p>
              </div>

              <div className="col-span-3 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Deseja conhecer a infraestrutura HelpUS completa?
                </span>
                <button
                  onClick={() => {
                    onOpenContact();
                    setActiveDropdown(null);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline cursor-pointer"
                >
                  <span>Solicitar Apresentação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1EQ STYLE MEGA-MENU DROPDOWN 2: O QUE FAZEMOS                             */}
      {/* ========================================================================= */}
      {activeDropdown === 'do' && (
        <div 
          onMouseLeave={() => setActiveDropdown(null)}
          className="hidden lg:block absolute left-0 right-0 top-full bg-slate-950 border-b border-slate-800 shadow-2xl animate-fade-in z-50"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-12 min-h-[320px]">
            
            {/* Left Sidebar Sub-Menu */}
            <div className="col-span-3 bg-slate-900/60 p-6 border-r border-slate-800/80 space-y-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-3">
                Divisões de Tecnologia
              </p>
              
              <button
                onClick={() => setDoSubTab('ia')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-between ${
                  doSubTab === 'ia' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>Inteligência Artificial</span>
                <Bot className="w-4 h-4" />
              </button>

              <button
                onClick={() => setDoSubTab('infra')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-between ${
                  doSubTab === 'infra' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>Infraestrutura & Fiscal</span>
                <Zap className="w-4 h-4" />
              </button>

              <button
                onClick={() => setDoSubTab('setoriais')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-between ${
                  doSubTab === 'setoriais' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>Sistemas Setoriais</span>
                <Layers className="w-4 h-4" />
              </button>

              <button
                onClick={() => setDoSubTab('clientes')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-between ${
                  doSubTab === 'clientes' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>Rede de Clientes</span>
                <Building2 className="w-4 h-4" />
              </button>
            </div>

            {/* Right Multi-Column Suite Content Area */}
            <div className="col-span-9 p-8">
              
              {doSubTab === 'ia' && (
                <div className="grid grid-cols-3 gap-6">
                  <div 
                    onClick={() => { onNavigateSolution('helpus-whatsapp-ia'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">HelpUS IA Agent</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">WhatsApp Neural 24/7</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Atendimento automático via Meta Cloud API e Baileys com respostas contextuais.</p>
                  </div>

                  <div 
                    onClick={() => { onNavigateSolution('helpus-search'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Search RAG</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">HelpUS Search IA</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Motor de busca neural com citação de fontes verificáveis em tempo real.</p>
                  </div>

                  <div 
                    onClick={() => { onNavigateSolution('helpus-voice'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Voice Synthesis</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">HelpUS Voice Studio</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Conversão e síntese de voz neural para automação de chamadas e áudios.</p>
                  </div>
                </div>
              )}

              {doSubTab === 'infra' && (
                <div className="grid grid-cols-3 gap-6">
                  <div 
                    onClick={() => { onNavigateSolution('accounting'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Fiscal Tech</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">HelpUS Accounting</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Captura em lote de NFS-e/CT-e com suporte a certificado mTLS A1 e Excel.</p>
                  </div>

                  <div 
                    onClick={() => { onNavigateSolution('helpus-pay'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Pay Gateway</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">HelpUS Pay</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Cobrança via PIX automático e cartão recorrente com webhooks.</p>
                  </div>

                  <div 
                    onClick={() => { onNavigateSolution('helpus-auth'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Identity SSO</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">HelpUS Auth</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Autenticação única Single Sign-On criptografada para microsserviços.</p>
                  </div>
                </div>
              )}

              {doSubTab === 'setoriais' && (
                <div className="grid grid-cols-3 gap-6">
                  <div 
                    onClick={() => { onNavigateSolution('realestate'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Imobiliárias</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">HelpUS RealEstate</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Plataforma de gestão de imóveis, corretores e captação de clientes.</p>
                  </div>

                  <div 
                    onClick={() => { onNavigateSolution('helpus-fba-suite'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Marketplace</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">HelpUS FBA Suite</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Integração Amazon SP-API, validação de ISIN e envio de feeds.</p>
                  </div>

                  <div 
                    onClick={() => { onNavigateSolution('usmle'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Saúde & Exames</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">HelpUS USMLE</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Portal de preparação e simulados de exames médicos internacionais.</p>
                  </div>
                </div>
              )}

              {doSubTab === 'clientes' && (
                <div className="grid grid-cols-3 gap-6">
                  <div 
                    onClick={() => { onNavigateSolution('publicarte'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Gráfica Rápida</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">Publicarte Gráfica</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Sistema comercial de orçamentos e pedidos online.</p>
                  </div>

                  <div 
                    onClick={() => { onNavigateSolution('ariticumchales'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Pousada & Turismo</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">Ariticum Chalés</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Portal de reservas e experiência digital de hospedagem.</p>
                  </div>

                  <div 
                    onClick={() => { onNavigateCategory('clientes'); setActiveDropdown(null); }}
                    className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer space-y-2 group flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Rede Completa</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300">Ver Todos os Sites Clientes</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Explore a carteira de projetos corporativos ativos.</p>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Quer ver todas as soluções em uma visão catalogada?
                </span>
                <button
                  onClick={() => {
                    onNavigateCategory('ia');
                    setActiveDropdown(null);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline cursor-pointer"
                >
                  <span>Explorar Catálogo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;

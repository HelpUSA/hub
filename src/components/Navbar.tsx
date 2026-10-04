import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Globe, 
  Sparkles, 
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
  const [aboutSubTab, setAboutSubTab] = useState<'about' | 'events' | 'gallery' | 'foundation' | 'news'>('about');
  
  // Left sidebar active sub-tab for 'O que fazemos' mega-menu
  const [doSubTab, setDoSubTab] = useState<'platform' | 'catalysts' | 'solutions' | 'resources'>('platform');
  
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
    <header ref={navRef} className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-sm transition-all font-sans">
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
              <span className="font-extrabold text-xl text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                HelpUS<span className="text-blue-600 font-light text-sm">™</span>
              </span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">
                Technology Solutions
              </span>
            </div>
          </button>

          {/* MIDDLE: Navigation Menus with 1eq Dropdown Style */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            
            {/* Menu 1: Quem somos */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                onMouseEnter={() => setActiveDropdown('about')}
                className={`flex items-center gap-1.5 py-2.5 hover:text-blue-600 transition-colors cursor-pointer ${
                  activeDropdown === 'about' ? 'text-blue-600 font-bold' : ''
                }`}
              >
                <span>Quem somos</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Menu 2: O que fazemos */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('do')}
                onMouseEnter={() => setActiveDropdown('do')}
                className={`flex items-center gap-1.5 py-2.5 hover:text-blue-600 transition-colors cursor-pointer ${
                  activeDropdown === 'do' ? 'text-blue-600 font-bold' : ''
                }`}
              >
                <span>O que fazemos</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'do' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Menu 3: Contato */}
            <button
              onClick={() => {
                onOpenContact();
                setActiveDropdown(null);
              }}
              className="hover:text-blue-600 transition-colors cursor-pointer py-2.5"
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
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 border border-slate-200/80 shadow-xs transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl border border-slate-200 shadow-xl p-1.5 z-50 space-y-1">
                  <button 
                    onClick={() => { onSelectLang('pt'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${lang === 'pt' ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-100'}`}
                  >
                    🇧🇷 Português
                  </button>
                  <button 
                    onClick={() => { onSelectLang('en'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${lang === 'en' ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-100'}`}
                  >
                    🇺🇸 English
                  </button>
                  <button 
                    onClick={() => { onSelectLang('es'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${lang === 'es' ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-100'}`}
                  >
                    🇪🇸 Español
                  </button>
                </div>
              )}
            </div>

            {/* Primary Fale Conosco CTA Button */}
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wide flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fale Conosco</span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-slate-900 p-2"
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
          className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-slate-200/90 shadow-2xl animate-fade-in z-50"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-12 min-h-[320px]">
            
            {/* Left Sidebar Sub-Menu (matching 1eq grey background & white pill button) */}
            <div className="col-span-3 bg-[#f2f4f7] p-6 border-r border-slate-200/60 space-y-1.5">
              <button
                onClick={() => setAboutSubTab('about')}
                onMouseEnter={() => setAboutSubTab('about')}
                className={`w-full text-left px-5 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                  aboutSubTab === 'about' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-800 hover:text-blue-600 font-semibold'
                }`}
              >
                Sobre a HelpUS
              </button>

              <button
                onClick={() => setAboutSubTab('events')}
                onMouseEnter={() => setAboutSubTab('events')}
                className={`w-full text-left px-5 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                  aboutSubTab === 'events' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-800 hover:text-blue-600 font-semibold'
                }`}
              >
                Filosofia & Valores
              </button>

              <button
                onClick={() => setAboutSubTab('gallery')}
                onMouseEnter={() => setAboutSubTab('gallery')}
                className={`w-full text-left px-5 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                  aboutSubTab === 'gallery' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-800 hover:text-blue-600 font-semibold'
                }`}
              >
                Liderança & Equipe
              </button>

              <button
                onClick={() => setAboutSubTab('foundation')}
                onMouseEnter={() => setAboutSubTab('foundation')}
                className={`w-full text-left px-5 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                  aboutSubTab === 'foundation' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-800 hover:text-blue-600 font-semibold'
                }`}
              >
                História & Trajetória
              </button>

              <button
                onClick={() => setAboutSubTab('news')}
                onMouseEnter={() => setAboutSubTab('news')}
                className={`w-full text-left px-5 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                  aboutSubTab === 'news' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-800 hover:text-blue-600 font-semibold'
                }`}
              >
                Conformidade & LGPD
              </button>
            </div>

            {/* Right Multi-Column Content Area (Clean White Canvas matching 1eq Screenshot 1) */}
            <div className="col-span-9 p-8 bg-white flex flex-col justify-between">
              
              <div className="grid grid-cols-3 gap-8 items-start">
                
                {/* Column 1: Philosophy */}
                <div className="space-y-1.5 cursor-pointer group" onClick={onOpenContact}>
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    Filosofia
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Valores fundamentais que impulsionam a inovação, velocidade e integridade.
                  </p>
                </div>

                {/* Column 2: Leadership */}
                <div className="space-y-1.5 cursor-pointer group" onClick={onOpenContact}>
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    Liderança
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Direção inspiradora rumo a uma visão compartilhada e metas de alta performance.
                  </p>
                </div>

                {/* Column 3: History */}
                <div className="space-y-1.5 cursor-pointer group" onClick={() => onNavigateCategory('clientes')}>
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    História
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Nossa jornada desde 2000 moldada por visão, crescimento e trabalho contínuo.
                  </p>
                </div>

                {/* Row 2 Column 1: Terms */}
                <div className="space-y-1.5 cursor-pointer group pt-4" onClick={onOpenContact}>
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    Termos & Condições
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Termos claros que garantem interações transparentes e seguras.
                  </p>
                </div>

                {/* Row 2 Column 2: Policies */}
                <div className="space-y-1.5 cursor-pointer group pt-4" onClick={onOpenContact}>
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    Políticas & LGPD
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Diretrizes rigorosas que garantem decisões sólidas e conformidade total.
                  </p>
                </div>

              </div>

              {/* Bottom bar inside right panel */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Deseja conhecer a estrutura corporativa HelpUS completa?
                </span>
                <button
                  onClick={() => {
                    onOpenContact();
                    setActiveDropdown(null);
                  }}
                  className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
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
          className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-slate-200/90 shadow-2xl animate-fade-in z-50"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-12 min-h-[340px]">
            
            {/* Left Sidebar Sub-Menu (matching 1eq grey background & white pill button) */}
            <div className="col-span-3 bg-[#f2f4f7] p-6 border-r border-slate-200/60 space-y-1.5">
              <button
                onClick={() => setDoSubTab('platform')}
                onMouseEnter={() => setDoSubTab('platform')}
                className={`w-full text-left px-5 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                  doSubTab === 'platform' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-800 hover:text-blue-600 font-semibold'
                }`}
              >
                Inteligência Artificial
              </button>

              <button
                onClick={() => setDoSubTab('catalysts')}
                onMouseEnter={() => setDoSubTab('catalysts')}
                className={`w-full text-left px-5 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                  doSubTab === 'catalysts' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-800 hover:text-blue-600 font-semibold'
                }`}
              >
                Infraestrutura & Fiscal
              </button>

              <button
                onClick={() => setDoSubTab('solutions')}
                onMouseEnter={() => setDoSubTab('solutions')}
                className={`w-full text-left px-5 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                  doSubTab === 'solutions' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-800 hover:text-blue-600 font-semibold'
                }`}
              >
                Sistemas Setoriais
              </button>

              <button
                onClick={() => setDoSubTab('resources')}
                onMouseEnter={() => setDoSubTab('resources')}
                className={`w-full text-left px-5 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                  doSubTab === 'resources' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-800 hover:text-blue-600 font-semibold'
                }`}
              >
                Rede de Clientes
              </button>
            </div>

            {/* Right Multi-Column Content Area (exact 1eq Layout with grey inner shaded card matching Screenshot 2) */}
            <div className="col-span-9 p-8 bg-white flex flex-col justify-between">
              
              {doSubTab === 'platform' && (
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Grey Shaded Card Wrapper matching 1eq eQube®-DaaS card */}
                  <div className="col-span-7 bg-[#f4f5f7] p-6 rounded-2xl space-y-6">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        HelpUS<span className="text-xs align-super font-normal text-slate-400">®</span>-Neural Engine
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        Acelere a Transformação Digital utilizando nossa plataforma neural de atendimento e agentes de IA.
                      </p>
                    </div>

                    {/* Suite Group 1 */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-slate-900">Integration Suite</h4>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                        <span 
                          onClick={() => { onNavigateSolution('helpus-whatsapp-ia'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-WhatsApp IA
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('helpus-whatsapp-ia'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-Meta Cloud API
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('helpus-whatsapp-ia'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-Baileys Engine
                        </span>
                      </div>
                    </div>

                    {/* Suite Group 2 */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-slate-900">Analytics & RAG Suite</h4>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                        <span 
                          onClick={() => { onNavigateSolution('helpus-search'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-Search IA
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('helpus-voice'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-Voice Studio
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('helpus-search'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-LLM Agents
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column matching eQube® Connectors */}
                  <div className="col-span-5 space-y-2 pt-2">
                    <h3 className="font-bold text-lg text-slate-900">
                      HelpUS<span className="text-xs align-super font-normal text-slate-400">®</span> Connectors
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Conectores pré-configurados e seguros para integração contínua sem interrupções operacionais.
                    </p>
                  </div>

                </div>
              )}

              {doSubTab === 'catalysts' && (
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Grey Shaded Card Wrapper matching 1eq eQube®-DaaS card */}
                  <div className="col-span-7 bg-[#f4f5f7] p-6 rounded-2xl space-y-6">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        HelpUS<span className="text-xs align-super font-normal text-slate-400">®</span>-Fiscal Engine
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        Motor corporativo universal para busca, validação e download em lote de documentos fiscais.
                      </p>
                    </div>

                    {/* Suite Group 1 */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-slate-900">Fiscal Tech Suite</h4>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                        <span 
                          onClick={() => { onNavigateSolution('accounting'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-Accounting
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('accounting'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-mTLS A1
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('accounting'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-NFS-e Batch
                        </span>
                      </div>
                    </div>

                    {/* Suite Group 2 */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-slate-900">Fintech & Auth Suite</h4>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                        <span 
                          onClick={() => { onNavigateSolution('helpus-pay'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-Pay
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('helpus-auth'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-Auth SSO
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('helpus-pay'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-PIX Gateway
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-span-5 space-y-2 pt-2">
                    <h3 className="font-bold text-lg text-slate-900">
                      HelpUS<span className="text-xs align-super font-normal text-slate-400">®</span> High Availability
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Infraestrutura serverless Vercel Edge com SLA garantido de 99.9% e criptografia SSL de 256-bit.
                    </p>
                  </div>

                </div>
              )}

              {doSubTab === 'solutions' && (
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Grey Shaded Card Wrapper */}
                  <div className="col-span-7 bg-[#f4f5f7] p-6 rounded-2xl space-y-6">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        HelpUS<span className="text-xs align-super font-normal text-slate-400">®</span>-Vertical Solutions
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        Sistemas SaaS especializados para o mercado imobiliário, e-commerce global e educação médica.
                      </p>
                    </div>

                    {/* Suite Group 1 */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-slate-900">Enterprise Suite</h4>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                        <span 
                          onClick={() => { onNavigateSolution('realestate'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-RealEstate
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('helpus-fba-suite'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-FBA Suite
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('helpus-fba-suite'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-Amazon SP-API
                        </span>
                      </div>
                    </div>

                    {/* Suite Group 2 */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-slate-900">Health & Education Suite</h4>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                        <span 
                          onClick={() => { onNavigateSolution('usmle'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-USMLE Prep
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('usmle'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span>-Simulados Med
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-span-5 space-y-2 pt-2">
                    <h3 className="font-bold text-lg text-slate-900">
                      HelpUS<span className="text-xs align-super font-normal text-slate-400">®</span> Custom Engineering
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Engenharia de software personalizada desenhada especificamente para os fluxos e metas do seu negócio.
                    </p>
                  </div>

                </div>
              )}

              {doSubTab === 'resources' && (
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Grey Shaded Card Wrapper */}
                  <div className="col-span-7 bg-[#f4f5f7] p-6 rounded-2xl space-y-6">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        HelpUS<span className="text-xs align-super font-normal text-slate-400">®</span>-Client Ecosystem
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        Portfólio de plataformas web e ecossistemas digitais desenvolvidos para empresas em crescimento.
                      </p>
                    </div>

                    {/* Suite Group 1 */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-slate-900">Casos em Destaque</h4>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                        <span 
                          onClick={() => { onNavigateSolution('publicarte'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          Publicarte<span className="text-xs align-super">®</span> Gráfica
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('ariticumchales'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          Ariticum<span className="text-xs align-super">®</span> Chalés
                        </span>
                        <span 
                          onClick={() => { onNavigateSolution('accounting'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          HelpUS<span className="text-xs align-super">®</span> Accounting
                        </span>
                      </div>
                    </div>

                    {/* Suite Group 2 */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-slate-900">Setores Atendidos</h4>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                        <span 
                          onClick={() => { onNavigateCategory('clientes'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          Gráficas & Impressão
                        </span>
                        <span 
                          onClick={() => { onNavigateCategory('clientes'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          Pousadas & Turismo
                        </span>
                        <span 
                          onClick={() => { onNavigateCategory('clientes'); setActiveDropdown(null); }}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          Contabilidade & Fiscal
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-span-5 space-y-2 pt-2">
                    <h3 className="font-bold text-lg text-slate-900">
                      Rede Completa
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">
                      Explore o catálogo completo com mais de 67 módulos implantados em produção.
                    </p>
                    <button
                      onClick={() => {
                        onNavigateCategory('clientes');
                        setActiveDropdown(null);
                      }}
                      className="inline-flex items-center gap-1.5 font-bold text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      <span>Ver Carteira de Clientes</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

              {/* Bottom bar inside right panel */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Quer explorar todas as nossas soluções em uma visão catalogada?
                </span>
                <button
                  onClick={() => {
                    onNavigateCategory('ia');
                    setActiveDropdown(null);
                  }}
                  className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
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

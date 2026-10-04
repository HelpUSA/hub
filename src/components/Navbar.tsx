import React, { useState } from 'react';
import { ArrowRight, Globe, Menu, X } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface NavbarProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onSelectLang,
  onNavigateHome,
  onNavigateSection,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08090a]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo - Linear Style */}
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
            <div className="w-full h-full bg-[#08090a] rounded-[7px] flex items-center justify-center">
              <span className="font-extrabold text-xs text-white">H</span>
            </div>
          </div>
          <span className="font-semibold text-sm tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            HELPUS <span className="text-[10px] text-neutral-500 font-mono font-normal uppercase ml-1 border-l border-neutral-800 pl-2">STUDIO</span>
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-neutral-400">
          <button 
            onClick={() => onNavigateSection('trabalhos')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Trabalhos
          </button>
          <button 
            onClick={() => onNavigateSection('servicos')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Serviços
          </button>
          <button 
            onClick={() => onNavigateSection('sobre')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <button 
            onClick={onOpenContact}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contato
          </button>
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector Pill */}
          <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-full p-1 text-[11px] font-mono">
            <Globe className="w-3 h-3 text-neutral-400 ml-1.5 mr-0.5" />
            {(['pt', 'en', 'es'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onSelectLang(l)}
                className={`px-2 py-0.5 rounded-full uppercase cursor-pointer transition-all ${
                  lang === l ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenContact}
            className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.15)] cursor-pointer"
          >
            <span>Iniciar Projeto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090a] border-b border-white/[0.08] px-6 py-6 space-y-4 text-xs font-medium text-neutral-300 uppercase tracking-wider">
          <button onClick={() => { onNavigateSection('trabalhos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-white">Trabalhos</button>
          <button onClick={() => { onNavigateSection('servicos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-white">Serviços</button>
          <button onClick={() => { onOpenContact(); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-white">Contato</button>
          
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-[11px] text-neutral-500 font-mono">IDIOMA:</span>
            <div className="flex gap-1.5">
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { onSelectLang(l); setMobileMenuOpen(false); }}
                  className={`px-2.5 py-1 rounded-full text-[11px] uppercase ${lang === l ? 'bg-white text-black font-bold' : 'text-neutral-400'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

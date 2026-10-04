import React, { useState } from 'react';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-md">
            <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
              <span className="font-black text-xs text-white group-hover:text-cyan-400 transition-colors">H</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-none">
              HelpUS<span className="text-cyan-400 font-light text-xs">™</span>
            </span>
            <span className="text-[9px] font-mono tracking-wider text-neutral-400 uppercase mt-0.5">
              Studio Technology
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <button 
            onClick={() => onNavigateSection('trabalhos')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Trabalhos
          </button>
          <button 
            onClick={() => onNavigateSection('servicos')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Serviços
          </button>
          <button 
            onClick={() => onNavigateSection('sobre')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <button 
            onClick={onOpenContact}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Contato
          </button>
        </nav>

        {/* Language Switcher & Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-full px-2.5 py-1 text-[11px] font-mono">
            <Globe className="w-3 h-3 text-cyan-400 mr-1" />
            {(['pt', 'en', 'es'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onSelectLang(l)}
                className={`px-2 py-0.5 rounded-full uppercase cursor-pointer transition-all ${
                  lang === l ? 'bg-cyan-500 text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenContact}
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20 cursor-pointer"
          >
            <span>Iniciar Projeto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-neutral-800 px-6 py-4 space-y-3 font-mono text-xs text-neutral-300 uppercase">
          <button onClick={() => { onNavigateSection('trabalhos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-cyan-400">Trabalhos</button>
          <button onClick={() => { onNavigateSection('servicos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-cyan-400">Serviços</button>
          <button onClick={() => { onOpenContact(); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-cyan-400">Contato</button>

          <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
            <span className="text-neutral-500">IDIOMA:</span>
            <div className="flex gap-2">
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { onSelectLang(l); setMobileMenuOpen(false); }}
                  className={`px-2.5 py-1 rounded-full text-xs uppercase ${lang === l ? 'bg-cyan-500 text-black font-bold' : 'text-neutral-400'}`}
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

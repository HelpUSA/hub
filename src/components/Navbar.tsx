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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Wordmark Logo - Resend Style */}
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            HelpUS<span className="text-neutral-500 font-normal text-xs ml-1">™</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-neutral-500 uppercase border-l border-neutral-800 pl-2.5">
            Developer Studio
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
          <button 
            onClick={() => onNavigateSection('trabalhos')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Soluções
          </button>
          <button 
            onClick={() => onNavigateSection('servicos')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Recursos
          </button>
          <button 
            onClick={() => onNavigateSection('sobre')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Empresa
          </button>
          <button 
            onClick={onOpenContact}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contato
          </button>
        </nav>

        {/* Right Section: Language Switcher & Primary CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-full px-2.5 py-1 text-xs font-mono">
            <Globe className="w-3 h-3 text-neutral-400 mr-1" />
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

          {/* Resend Style Glass CTA Button */}
          <button
            onClick={onOpenContact}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <span>Iniciar Projeto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-neutral-900 px-6 py-6 space-y-4 font-mono text-xs text-neutral-300 uppercase">
          <button onClick={() => { onNavigateSection('trabalhos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-white">Soluções</button>
          <button onClick={() => { onNavigateSection('servicos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-white">Recursos</button>
          <button onClick={() => { onOpenContact(); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-white">Contato</button>

          <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
            <span className="text-xs text-neutral-500">IDIOMA:</span>
            <div className="flex gap-2">
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { onSelectLang(l); setMobileMenuOpen(false); }}
                  className={`px-2.5 py-1 rounded-full text-xs uppercase ${lang === l ? 'bg-white text-black font-bold' : 'text-neutral-400'}`}
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

import React from 'react';
import { ArrowUpRight, Globe, Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-900 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Minimalist & Bold */}
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <span className="font-extrabold text-2xl tracking-tighter text-white group-hover:text-amber-400 transition-colors">
            HELPUS<span className="text-amber-400 font-light">™</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-neutral-500 uppercase border-l border-neutral-800 pl-3">
            Digital Studio
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
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

        {/* Right Section: Language Switcher & Contact CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1 text-xs font-mono">
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            {(['pt', 'en', 'es'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onSelectLang(l)}
                className={`px-1.5 py-0.5 rounded uppercase cursor-pointer transition-colors ${
                  lang === l ? 'bg-amber-400 text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary CTA Pill */}
          <button
            onClick={onOpenContact}
            className="group px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Iniciar Projeto</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-neutral-900 px-6 py-6 space-y-4 font-mono text-sm text-neutral-300 uppercase">
          <button onClick={() => { onNavigateSection('trabalhos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Trabalhos</button>
          <button onClick={() => { onNavigateSection('servicos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Serviços</button>

          <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
            <span className="text-xs text-neutral-500">Idioma:</span>
            <div className="flex gap-2">
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { onSelectLang(l); setMobileMenuOpen(false); }}
                  className={`px-2 py-1 rounded text-xs uppercase ${lang === l ? 'bg-amber-400 text-black font-bold' : 'text-neutral-400'}`}
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

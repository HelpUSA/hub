import React, { useState } from 'react';
import { ArrowUpRight, Globe, Menu, X, Sparkles } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0d14]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-3 group cursor-pointer text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0b0d14] rounded-[11px] flex items-center justify-center">
              <span className="font-extrabold text-base text-white group-hover:text-cyan-400 transition-colors">H</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-white tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
              HelpUS<span className="text-cyan-400 font-light">™</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1">
              Technology Studio
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
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

        {/* Right Section: Language Selector & CTA */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-full px-3 py-1.5 text-xs font-mono">
            <Globe className="w-3.5 h-3.5 text-cyan-400 mr-1" />
            {(['pt', 'en', 'es'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onSelectLang(l)}
                className={`px-2 py-0.5 rounded-full uppercase cursor-pointer transition-all ${
                  lang === l ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenContact}
            className="group px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0d14] border-b border-slate-800 px-6 py-6 space-y-4 font-mono text-xs text-slate-300 uppercase">
          <button onClick={() => { onNavigateSection('trabalhos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Trabalhos</button>
          <button onClick={() => { onNavigateSection('servicos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Serviços</button>
          <button onClick={() => { onOpenContact(); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Contato</button>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Idioma:</span>
            <div className="flex gap-2">
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { onSelectLang(l); setMobileMenuOpen(false); }}
                  className={`px-3 py-1 rounded-full text-xs uppercase ${lang === l ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
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

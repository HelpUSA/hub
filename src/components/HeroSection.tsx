import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Zap, ShieldCheck, Globe, MessageCircle } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface HeroSectionProps {
  lang: Language;
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang: _lang,
  onExploreWork,
  onOpenContact
}) => {
  return (
    <section className="relative bg-[#0b0d14] pt-36 pb-24 px-6 overflow-hidden border-b border-slate-800/80">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Category Tag Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="uppercase tracking-widest font-semibold">HelpUS Technology Studio</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">Engenharia Digital & Automação IA</span>
        </div>

        {/* Editorial Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Produtos digitais e automações que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">superam expectativas.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl pt-2">
            Com foco no design, funcionalidade e resultados operacionais, desenvolvemos ecossistemas web corporativos, automações fiscais NFS-e/CT-e em lote e sistemas neurais de Inteligência Artificial.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <button
            onClick={onExploreWork}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-3 shadow-xl shadow-cyan-500/25 cursor-pointer group"
          >
            <span>Ver Trabalhos em Destaque</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-white font-bold text-xs uppercase tracking-wider hover:border-slate-600 transition-all flex items-center gap-3 cursor-pointer group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar com Consultor</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Live Metrics Grid */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 font-mono text-xs">
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-2xl">
              <span>67+</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-slate-400 uppercase tracking-wider text-[10px]">Módulos Implantados</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-2xl">
              <span>99.9%</span>
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-slate-400 uppercase tracking-wider text-[10px]">Disponibilidade Vercel Edge</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-2xl">
              <span>100%</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-slate-400 uppercase tracking-wider text-[10px]">Conformidade LGPD</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-2xl">
              <span>3</span>
              <Globe className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-slate-400 uppercase tracking-wider text-[10px]">Idiomas (PT / EN / ES)</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

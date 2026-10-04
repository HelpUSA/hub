import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Zap, ShieldCheck, Globe } from 'lucide-react';
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
    <section className="relative min-h-[90vh] bg-[#08090a] pt-36 pb-24 px-6 overflow-hidden border-b border-white/[0.08]">
      
      {/* Linear Ambient Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl text-xs font-mono text-neutral-300 shadow-xl hover:border-white/20 transition-all cursor-pointer">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="tracking-wide">HelpUS Studio 2.0</span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400">Inteligência Artificial & Automação Fiscal</span>
          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 ml-1" />
        </div>

        {/* Linear Headline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400 tracking-tight leading-[1.1]">
            Produtos digitais e automações que transformam empresas.
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Desenvolvemos ecossistemas web de alta performance, automações fiscais NFS-e em lote e agentes autônomos de IA para empresas em crescimento.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onExploreWork}
            className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center gap-2.5 shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer group"
          >
            <span>Explorar Trabalhos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-7 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-white font-medium text-sm hover:bg-white/[0.1] hover:border-white/20 transition-all flex items-center gap-2.5 backdrop-blur-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>

        {/* Live Metrics Grid */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/[0.08] max-w-4xl mx-auto text-left font-mono text-xs">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <span>67+</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-neutral-500 uppercase tracking-wider text-[10px]">Módulos Implantados</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <span>99.9%</span>
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-neutral-500 uppercase tracking-wider text-[10px]">Uptime Vercel Edge</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <span>100%</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-neutral-500 uppercase tracking-wider text-[10px]">Conformidade LGPD</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <span>3</span>
              <Globe className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-neutral-500 uppercase tracking-wider text-[10px]">Idiomas Suportados</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

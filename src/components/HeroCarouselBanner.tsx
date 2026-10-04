import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, Zap, Layers, Activity } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface HeroCarouselBannerProps {
  lang: Language;
}

export const HeroCarouselBanner: React.FC<HeroCarouselBannerProps> = ({ lang }) => {
  const contentMap = {
    pt: {
      badge: '✨ HELPUS TECHNOLOGY • DESIGN & ENGENHARIA DIGITAL',
      title: 'Produtos Digitais e Automações que Superam Expectativas.',
      subtitle: 'Combinamos design de alto impacto, automações fiscais em lote e inteligência artificial no WhatsApp para transformar a operação da sua empresa.',
      btnExplore: 'Explorar Divisões de Solução',
      btnZap: 'Falar no WhatsApp'
    },
    en: {
      badge: '✨ HELPUS TECHNOLOGY • DIGITAL DESIGN & ENGINEERING',
      title: 'Digital Products & Automations that Exceed Expectations.',
      subtitle: 'We combine high-impact design, batch tax automation, and WhatsApp artificial intelligence to elevate your enterprise operations.',
      btnExplore: 'Explore Solution Divisions',
      btnZap: 'Contact via WhatsApp'
    },
    es: {
      badge: '✨ HELPUS TECHNOLOGY • DISEÑO Y INGENIERÍA DIGITAL',
      title: 'Productos Digitales y Automatizaciones que Superan Expectativas.',
      subtitle: 'Combinamos diseño de alto impacto, automatización fiscal masiva e inteligencia artificial en WhatsApp para transformar su empresa.',
      btnExplore: 'Explorar Divisiones de Soluciones',
      btnZap: 'Hablar por WhatsApp'
    }
  };

  const currentContent = contentMap[lang] || contentMap.pt;
  const whatsappUrl = 'https://wa.me/5583998721848?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20das%20solu%C3%A7%C3%B5es%20HelpUS';

  const scrollToSolutions = () => {
    const el = document.getElementById('solucoes-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.8)] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 filter brightness-90 saturate-125"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-41582-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/70 backdrop-blur-[1px]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[150px] sm:h-[300px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase shadow-md backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>{currentContent.badge}</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {currentContent.title.split('Superam Expectativas.')[0]}
          <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-sky-400 bg-clip-text text-transparent">
            Superam Expectativas.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          {currentContent.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={scrollToSolutions}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-3 cursor-pointer"
          >
            <span>{currentContent.btnExplore}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm sm:text-base hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>{currentContent.btnZap}</span>
          </a>
        </div>

        {/* Interactive Mockup Grid Feature */}
        <div className="pt-6 max-w-4xl mx-auto text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md hover:border-amber-400/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">HelpUS Accounting</span>
                <Zap className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-xs text-slate-300 font-semibold">NFS-e & CT-e em Lote</p>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                Certificado A1 + Exportação automatizada em ZIP, XML e Excel.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md hover:border-sky-400/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">WhatsApp & Voice IA</span>
                <Layers className="w-4 h-4 text-sky-400" />
              </div>
              <p className="text-xs text-slate-300 font-semibold">Atendimento Neural 24/7</p>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                Meta Cloud API + Baileys com respostas inteligentes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md hover:border-emerald-400/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">SP-API Amazon</span>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs text-slate-300 font-semibold">Suíte FBA & Catálogos</p>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                Validação de ISIN/UPC e automação segura de inventário.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroCarouselBanner;

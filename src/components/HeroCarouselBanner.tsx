import React from 'react';
import { Cpu } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface HeroCarouselBannerProps {
  lang: Language;
}

export const HeroCarouselBanner: React.FC<HeroCarouselBannerProps> = ({ lang }) => {
  const titles = {
    pt: {
      badge: 'SOLUÇÕES EM TECNOLOGIA & INTELIGÊNCIA ARTIFICIAL',
      title: 'Ecossistemas Digitais Inteligentes para Negócios de Alta Performance',
      subtitle: 'Desenvolvemos engenharia de software sob medida, automações neurais de Inteligência Artificial no WhatsApp, plataformas corporativas e soluções web integradas.'
    },
    en: {
      badge: 'GLOBAL DIGITAL ECOSYSTEMS & AI',
      title: 'Intelligent Digital Ecosystems for High Performance Businesses',
      subtitle: 'We build custom software engineering, neural Artificial Intelligence automations on WhatsApp, corporate platforms and integrated web solutions.'
    },
    es: {
      badge: 'SOLUCIONES EN TECNOLOGÍA E IA',
      title: 'Ecosistemas Digitales Inteligentes para Negocios de Alto Rendimiento',
      subtitle: 'Desarrollamos ingeniería de software a medida, automatizaciones de Inteligencia Artificial en WhatsApp, plataformas corporativas y soluciones web integradas.'
    }
  };

  const currentContent = titles[lang] || titles.pt;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center py-12 sm:py-20">
      {/* Single Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 filter brightness-90 saturate-125"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-41582-large.mp4" type="video/mp4" />
        </video>
        {/* Dark Contrast Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/70 backdrop-blur-[1px]" />
      </div>

      {/* Grid Tech Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-10"
        style={{
          backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Hero Content Overlay (Headline & Subtitle Inside Banner) */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-4 text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-extrabold tracking-widest uppercase shadow-lg shadow-cyan-500/10 backdrop-blur-md">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>{currentContent.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-2xl font-sans">
          {currentContent.title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          {currentContent.subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroCarouselBanner;

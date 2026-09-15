import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bot, Cpu, Globe } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface HeroCarouselBannerProps {
  lang: Language;
}

export const HeroCarouselBanner: React.FC<HeroCarouselBannerProps> = ({ lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'slide-1',
      bgImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=2000&q=80',
      badgeIcon: Bot,
      badgeText: {
        pt: 'INTELIGÊNCIA ARTIFICIAL NEURAL',
        en: 'NEURAL ARTIFICIAL INTELLIGENCE',
        es: 'INTELIGENCIA ARTIFICIAL NEURAL'
      }
    },
    {
      id: 'slide-2',
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80',
      badgeIcon: Cpu,
      badgeText: {
        pt: 'ENGENHARIA DE SOFTWARE & CLOUD',
        en: 'SOFTWARE ENGINEERING & CLOUD',
        es: 'INGENIERÍA DE SOFTWARE Y NUBE'
      }
    },
    {
      id: 'slide-3',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80',
      badgeIcon: Globe,
      badgeText: {
        pt: 'ECOSSISTEMAS DIGITAIS GLOBAIS',
        en: 'GLOBAL DIGITAL ECOSYSTEMS',
        es: 'ECOSISTEMAS DIGITALES GLOBALES'
      }
    }
  ];

  // Auto advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const titles = {
    pt: {
      tagline: 'HELPUS TECHNOLOGY SOLUTIONS',
      title: 'Ecossistemas Digitais Inteligentes para Negócios de Alta Performance',
      subtitle: 'Desenvolvemos engenharia de software sob medida, automações neurais de Inteligência Artificial no WhatsApp, plataformas corporativas e soluções web integradas.'
    },
    en: {
      tagline: 'HELPUS TECHNOLOGY SOLUTIONS',
      title: 'Intelligent Digital Ecosystems for High Performance Businesses',
      subtitle: 'We build custom software engineering, neural Artificial Intelligence automations on WhatsApp, corporate platforms and integrated web solutions.'
    },
    es: {
      tagline: 'HELPUS TECHNOLOGY SOLUTIONS',
      title: 'Ecosistemas Digitales Inteligentes para Negocios de Alto Rendimiento',
      subtitle: 'Desarrollamos ingeniería de software a medida, automatizaciones de Inteligencia Artificial en WhatsApp, plataformas corporativas y soluciones web integradas.'
    }
  };

  const currentContent = titles[lang] || titles.pt;
  const activeSlideData = slides[currentSlide];
  const BadgeIcon = activeSlideData.badgeIcon;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_25px_70px_rgba(0,0,0,0.5)] min-h-[480px] sm:min-h-[540px] flex items-center justify-center">
      
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.bgImage}
            alt="Hero Background"
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
          />
          {/* Overlay Dark Blur Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60 backdrop-blur-[2px]" />
        </div>
      ))}

      {/* Grid Tech Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-15"
        style={{
          backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Hero Content Overlay (Headline & Subtitle Inside Banner) */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-12 text-center space-y-6">
        
        {/* Dynamic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-extrabold tracking-widest uppercase shadow-lg shadow-cyan-500/10 backdrop-blur-md">
          <BadgeIcon className="w-4 h-4 text-cyan-400" />
          <span>{activeSlideData.badgeText[lang] || activeSlideData.badgeText.pt}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg font-sans">
          {currentContent.title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          {currentContent.subtitle}
        </p>

        {/* Carousel Indicators / Navigation Controls */}
        <div className="pt-6 flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 backdrop-blur-md transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#00F0FF]' 
                    : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 backdrop-blur-md transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default HeroCarouselBanner;

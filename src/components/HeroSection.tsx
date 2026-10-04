import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface HeroSectionProps {
  lang: Language;
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onExploreWork,
  onOpenContact
}) => {
  const content = {
    pt: {
      categoryTag: 'SOLUÇÕES DIGITAIS & AUTOMAÇÃO',
      titleLine1: 'Identidade corporativa e',
      titleLine2: 'produtos digitais que superam expectativas.',
      subtext: 'Com foco no design, na funcionalidade e em resultados estratégicos, desenvolvemos ecossistemas web de alta performance, automações fiscais e sistemas de inteligência artificial.',
      btnWork: 'Ver Trabalhos',
      btnContact: 'Iniciar Projeto'
    },
    en: {
      categoryTag: 'DIGITAL SOLUTIONS & AUTOMATION',
      titleLine1: 'Corporate identity and',
      titleLine2: 'digital products that exceed expectations.',
      subtext: 'Focused on design, functionality, and strategic results, we build high-performance web ecosystems, tax automations, and artificial intelligence systems.',
      btnWork: 'Explore Work',
      btnContact: 'Start Project'
    },
    es: {
      categoryTag: 'SOLUCIONES DIGITALES Y AUTOMATIZACIÓN',
      titleLine1: 'Identidad corporativa y',
      titleLine2: 'productos digitales que superan expectativas.',
      subtext: 'Con enfoque en el diseño, la funcionalidad y los resultados estratégicos, desarrollamos ecosistemas web de alto rendimiento, automatizaciones fiscales y sistemas de inteligencia artificial.',
      btnWork: 'Ver Trabajos',
      btnContact: 'Iniciar Proyecto'
    }
  };

  const t = content[lang] || content.pt;

  return (
    <section className="relative bg-black pt-32 pb-24 px-6 overflow-hidden border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Category Tag Line */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-amber-400"></span>
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            {t.categoryTag}
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="max-w-5xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05]">
            {t.titleLine1} <br className="hidden sm:inline" />
            <span className="text-neutral-400">{t.titleLine2}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-3xl pt-4">
            {t.subtext}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-6 pt-4">
          <button
            onClick={onExploreWork}
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-colors flex items-center gap-3 cursor-pointer group"
          >
            <span>{t.btnWork}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-white font-bold text-sm uppercase tracking-wider hover:border-neutral-600 transition-colors flex items-center gap-3 cursor-pointer group"
          >
            <span>{t.btnContact}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Live Stats Bar */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-900 text-left font-mono">
          <div>
            <span className="text-3xl font-extrabold text-white">67+</span>
            <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Projetos & Módulos</p>
          </div>
          <div>
            <span className="text-3xl font-extrabold text-white">99.9%</span>
            <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Disponibilidade Vercel</p>
          </div>
          <div>
            <span className="text-3xl font-extrabold text-white">100%</span>
            <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Conformidade LGPD</p>
          </div>
          <div>
            <span className="text-3xl font-extrabold text-white">3</span>
            <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Idiomas (PT / EN / ES)</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

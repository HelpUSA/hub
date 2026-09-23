import React from 'react';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import type { Language } from '../i18n/translations';

export interface CategoryCardData {
  id: 'ia' | 'infra' | 'setoriais' | 'clientes';
  title: { pt: string; en: string; es: string };
  subtitle: { pt: string; en: string; es: string };
  description: { pt: string; en: string; es: string };
  image: string;
  icon: any;
  colorGradient: string;
  badgeBg: string;
  badgeText: string;
  count?: number;
  features: { pt: string[]; en: string[]; es: string[] };
}

interface CategoryCardProps {
  category: CategoryCardData;
  lang: Language;
  onSelectCategory: (id: 'ia' | 'infra' | 'setoriais' | 'clientes') => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  lang,
  onSelectCategory
}) => {
  const Icon = category.icon;
  const title = category.title[lang] || category.title.pt;
  const subtitle = category.subtitle[lang] || category.subtitle.pt;
  const description = category.description[lang] || category.description.pt;
  const features = category.features[lang] || category.features.pt;

  const buttonText = {
    pt: 'Explorar Divisão de Soluções',
    en: 'Explore Solution Division',
    es: 'Explorar División de Soluciones'
  }[lang] || 'Explorar Divisão de Soluções';

  return (
    <div 
      onClick={() => onSelectCategory(category.id)}
      className="group relative bg-[#111827] hover:bg-[#161f33] rounded-3xl border border-slate-800 hover:border-cyan-500/60 shadow-2xl hover:shadow-[0_10px_40px_rgba(6,182,212,0.18)] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between transform hover:-translate-y-1.5"
    >
      {/* Visual Top Cover Image Banner */}
      <div className="relative h-44 sm:h-52 md:h-56 w-full overflow-hidden bg-slate-950 p-4 sm:p-5 flex flex-col justify-between">
        <img 
          src={category.image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.colorGradient} opacity-70 group-hover:opacity-50 transition-opacity`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-slate-950/40" />
        
        {/* Floating Category Icon Badge */}
        <div className="relative z-10 self-start max-w-[95%] px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-950/90 backdrop-blur-md rounded-2xl shadow-xl border border-cyan-500/30 flex items-center gap-2 sm:gap-2.5">
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
          <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-white leading-none truncate">
            {category.badgeText}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between space-y-5 sm:space-y-6 bg-[#111827]">
        {/* Title & Subtitle */}
        <div className="space-y-1.5 sm:space-y-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-cyan-400">
            {subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {description}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2.5 sm:space-y-3 pt-3.5 sm:pt-4 border-t border-slate-800/80">
          {features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
              <div className="p-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <span className="leading-normal">{feat}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="pt-3.5 sm:pt-4 border-t border-slate-800/80">
          <div className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-2xl bg-cyan-500/10 group-hover:bg-cyan-500 text-cyan-300 group-hover:text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-between border border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-300 shadow-md">
            <span className="tracking-wide text-xs sm:text-sm truncate mr-2">{buttonText}</span>
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100" />
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CategoryCard;

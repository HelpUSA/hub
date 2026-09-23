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
    pt: 'Explorar Soluções',
    en: 'Explore Solutions',
    es: 'Explorar Soluciones'
  }[lang] || 'Explorar Soluções';

  return (
    <div 
      onClick={() => onSelectCategory(category.id)}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between transform hover:-translate-y-1.5"
    >
      {/* Visual Top Cover Image Banner */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 p-5 flex flex-col justify-between">
        <img 
          src={category.image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.colorGradient} opacity-60 group-hover:opacity-45 transition-opacity`} />
        <div className="absolute inset-0 bg-slate-950/20" />
        
        {/* Floating Category Icon Badge */}
        <div className="relative z-10 self-start max-w-[90%] px-3.5 py-1.5 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 flex items-center gap-2">
          <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="text-xs font-bold tracking-wider uppercase text-white leading-none">
            {category.badgeText}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 bg-white dark:bg-slate-900">
        {/* Title & Subtitle */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            {subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
          {features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
          <span className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 group-hover:underline flex items-center gap-2">
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </span>

          <span className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-sm">
            <Layers className="w-4 h-4" />
          </span>
        </div>
      </div>

    </div>
  );
};

export default CategoryCard;

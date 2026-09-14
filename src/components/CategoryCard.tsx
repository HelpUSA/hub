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
  count: number;
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
      className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between transform hover:-translate-y-1.5"
    >
      {/* Visual Top Cover Image Banner */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
        <img 
          src={category.image} 
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.colorGradient} opacity-60 group-hover:opacity-40 transition-opacity`} />
        
        {/* Floating Category Icon Badge */}
        <div className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 flex items-center gap-2">
          <Icon className="w-6 h-6 text-cyan-500" />
          <span className="text-xs font-bold tracking-wide uppercase text-slate-800 dark:text-slate-100">
            {category.badgeText}
          </span>
        </div>

        {/* Count Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-xs font-semibold text-cyan-300 border border-cyan-500/30">
          {category.count} Soluções
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-extrabold text-white drop-shadow-md">
            {title}
          </h3>
          <p className="text-xs text-slate-200 line-clamp-1 font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          {features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="pt-4 flex items-center justify-between">
          <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 group-hover:underline flex items-center gap-1.5">
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </span>

          <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-cyan-500 group-hover:text-white transition-colors text-slate-500">
            <Layers className="w-4 h-4" />
          </span>
        </div>
      </div>

    </div>
  );
};

export default CategoryCard;

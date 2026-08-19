import React, { useState } from 'react';
import { 
  Building2, 
  Scissors, 
  Ticket, 
  Wine, 
  Bot, 
  Zap, 
  Star, 
  ExternalLink, 
  PlayCircle, 
  Check, 
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';
import type { Product } from '../types';
import confetti from 'canvas-confetti';

interface ProductCatalogProps {
  products: Product[];
  searchQuery: string;
  activeClientModules: string[];
  onOpenSandbox: (product: Product) => void;
  onSimulateSSO: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  searchQuery,
  activeClientModules,
  onOpenSandbox,
  onSimulateSSO
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Produtos', icon: Filter },
    { id: 'imobiliaria', label: 'Imobiliário', icon: Building2 },
    { id: 'beleza', label: 'Beleza & Estética', icon: Scissors },
    { id: 'eventos', label: 'Eventos & Ingressos', icon: Ticket },
    { id: 'gastronomia', label: 'Gastronomia', icon: Wine },
    { id: 'ia', label: 'IA & Automação', icon: Bot },
    { id: 'cloud', label: 'Cloud & Pagamentos', icon: Zap }
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-cyan-400" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-amber-400" />;
      case 'Ticket': return <Ticket className="w-5 h-5 text-purple-400" />;
      case 'Wine': return <Wine className="w-5 h-5 text-rose-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-indigo-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLaunchApp = (product: Product) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    onSimulateSSO(product);
  };

  return (
    <section className="py-8 px-4 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">Soluções HelpUS</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Catálogo do Ecossistema</h2>
          <p className="text-sm text-slate-400 mt-1">
            Escolha os produtos e serviços que atendem às necessidades do seu negócio.
          </p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xs text-slate-400">Exibindo <strong className="text-white">{filteredProducts.length}</strong> de <strong className="text-white">{products.length}</strong> sistemas disponíveis</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map(cat => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/40'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="glass-panel p-12 text-center max-w-md mx-auto">
          <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">Nenhum produto encontrado</h3>
          <p className="text-xs text-slate-400">Tente ajustar a busca ou o filtro de categoria selecionado.</p>
        </div>
      ) : (
        <div className="grid-cards">
          {filteredProducts.map(product => {
            const isActivated = activeClientModules.includes(product.id);

            return (
              <div 
                key={product.id}
                className={`glass-panel overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
                  isActivated ? 'ring-1 ring-emerald-500/40 bg-slate-900/80' : ''
                }`}
              >
                {/* Product Header Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Badge Top Left */}
                  <div className="absolute top-3 left-3">
                    <span className={`badge ${
                      isActivated 
                        ? 'badge-active' 
                        : product.badgeType === 'featured' ? 'badge-featured' 
                        : product.badgeType === 'new' ? 'badge-new' 
                        : 'badge-amber'
                    }`}>
                      {isActivated ? '✓ Contratado' : product.badgeText}
                    </span>
                  </div>

                  {/* Rating Top Right */}
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg px-2 py-1 flex items-center gap-1 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-200">{product.rating}</span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
                      {getIconComponent(product.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white leading-tight group-hover:text-indigo-300 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono truncate max-w-[200px]">
                        {product.subdomain}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold text-indigo-300 mb-2">{product.tagline}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{product.description}</p>
                    
                    {/* Feature bullets */}
                    <div className="space-y-1.5 mb-5">
                      {product.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[12px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block">A partir de</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-extrabold text-white font-mono">R$ {product.priceMonthly}</span>
                        <span className="text-[11px] text-slate-400">/mês</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenSandbox(product)}
                        title="Ver Demonstração Interativa"
                        className="btn-secondary !p-2 text-xs"
                      >
                        <PlayCircle className="w-4 h-4 text-cyan-400" />
                        <span className="hidden sm:inline">Demo</span>
                      </button>

                      {isActivated ? (
                        <button
                          onClick={() => handleLaunchApp(product)}
                          className="btn-primary !py-2 !px-3 text-xs bg-gradient-to-r from-emerald-600 to-teal-600"
                        >
                          <span>Acessar (SSO)</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleLaunchApp(product)}
                          className="btn-primary !py-2 !px-3 text-xs"
                        >
                          <span>Ativar Módulo</span>
                        </button>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};

import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Bot, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import type { Product } from '../types';
import confetti from 'canvas-confetti';

interface PricingCalculatorProps {
  products: Product[];
  onRequestCustomPlan: (selectedProductIds: string[]) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  products,
  onRequestCustomPlan
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['imoveis-pro', 'barber-hub', 'ai-customer-agent']);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter(item => item !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const rawTotal = selectedIds.reduce((sum, id) => {
    const prod = products.find(p => p.id === id);
    return sum + (prod ? prod.priceMonthly : 0);
  }, 0);

  // Progressive discount rules
  let discountPercentage = 0;
  if (selectedIds.length === 2) discountPercentage = 10;
  else if (selectedIds.length === 3) discountPercentage = 15;
  else if (selectedIds.length >= 4) discountPercentage = 25;

  const discountAmount = (rawTotal * discountPercentage) / 100;
  const finalMonthlyTotal = rawTotal - discountAmount;

  const handleApplyPlan = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });
    onRequestCustomPlan(selectedIds);
  };

  return (
    <div className="py-8 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-wider text-purple-400 uppercase">Economia por Ecossistema</span>
        <h1 className="text-3xl font-extrabold text-white mt-1">Calculadora de Combos HelpUS</h1>
        <p className="text-sm text-slate-400 mt-2">
          Monte o pacote ideal de produtos e sistemas para sua empresa e aproveite até <strong className="text-cyan-400">25% de desconto progressivo</strong>.
        </p>
      </div>

      {/* Main Grid: Selection vs Order Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Module selector list (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-indigo-400" />
            <span>Selecione os Módulos Desejados</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map(product => {
              const isSelected = selectedIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  onClick={() => toggleSelect(product.id)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-indigo-950/40 border-indigo-500 ring-1 ring-indigo-500/40 shadow-lg' 
                      : 'glass-panel hover:bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold text-white">{product.name}</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                        isSelected 
                          ? 'bg-indigo-600 border-indigo-400 text-white' 
                          : 'border-slate-700 bg-slate-900'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2">{product.tagline}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">{product.subdomain}</span>
                    <span className="text-sm font-extrabold text-white font-mono">R$ {product.priceMonthly}/mês</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Real-time Price Summary Card (1 col) */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Resumo da Proposta</span>
          </h3>

          <div className="glass-panel p-6 border-indigo-500/40 space-y-6 relative overflow-hidden">
            
            {/* Selected items list */}
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">Módulos Incluídos ({selectedIds.length})</span>
              <div className="space-y-2">
                {selectedIds.map(id => {
                  const prod = products.find(p => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-xs text-slate-300">
                      <span className="truncate max-w-[180px]">✓ {prod.name}</span>
                      <span className="font-mono font-semibold">R$ {prod.priceMonthly}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Discount indicator */}
            {discountPercentage > 0 && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl flex items-center gap-3">
                <TrendingDown className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-emerald-300">Desconto do Ecossistema: {discountPercentage}% OFF</p>
                  <p className="text-[11px] text-emerald-400/80">Economia de R$ {discountAmount.toFixed(2)} todos os meses!</p>
                </div>
              </div>
            )}

            {/* Total Math */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Valor Bruto Sem Desconto:</span>
                <span className="line-through font-mono">R$ {rawTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <div>
                  <span className="text-xs text-slate-300 font-bold block">Investimento Mensal</span>
                  <span className="text-[10px] text-slate-500">Sem taxa de adesão</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-white font-mono">R$ {finalMonthlyTotal.toFixed(2)}</span>
                  <span className="text-xs text-slate-400">/mês</span>
                </div>
              </div>
            </div>

            {/* Benefits Included */}
            <div className="space-y-2 pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Single Sign-On (SSO) Unificado Incluso</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Gerente de Conta Dedicado VIP HelpUS</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-emerald-400" />
                <span>Suporte 24/7 e Triagem por IA</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleApplyPlan}
              className="w-full btn-primary !py-3 justify-center text-sm font-bold shadow-lg shadow-indigo-500/30"
            >
              <span>Contratar Ecossistema HelpUS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

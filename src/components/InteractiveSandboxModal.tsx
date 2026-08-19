import React, { useState } from 'react';
import { 
  X, 
  PlayCircle, 
  ExternalLink, 
  Check
} from 'lucide-react';
import type { Product } from '../types';

interface InteractiveSandboxModalProps {
  product: Product;
  onClose: () => void;
  onSimulateSSO: (product: Product) => void;
}

export const InteractiveSandboxModal: React.FC<InteractiveSandboxModalProps> = ({
  product,
  onClose,
  onSimulateSSO
}) => {
  const [activeDemoTab, setActiveDemoTab] = useState<'visão_geral' | 'funcionalidades'>('visão_geral');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 border-indigo-500/50 shadow-2xl space-y-6 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/40">
              <PlayCircle className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="badge badge-new text-[10px]">Demonstração Interativa Sandbox</span>
                <span className="text-xs text-slate-400 font-mono">{product.subdomain}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-0.5">{product.name}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveDemoTab('visão_geral')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeDemoTab === 'visão_geral'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Painel Visual da Interface
          </button>
          <button
            onClick={() => setActiveDemoTab('funcionalidades')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeDemoTab === 'funcionalidades'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Recursos & Especificações
          </button>
        </div>

        {/* Tab 1: Simulated UI Screenshot / Interactive App Widget */}
        {activeDemoTab === 'visão_geral' && (
          <div className="space-y-4">
            
            {/* Simulated App Frame */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
              {/* Window Top Controls */}
              <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-slate-400 ml-2">https://{product.subdomain}/dashboard</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Modo Demo Ativo</span>
              </div>

              {/* Main Image Showcase */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover opacity-90"
                />
                
                {/* Interactive Simulated Floating Widget Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-extrabold text-white">{product.tagline}</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Testando a versão completa com dados de demonstração da HelpUS.</p>
                  </div>
                  <button
                    onClick={() => onSimulateSSO(product)}
                    className="btn-primary text-xs !py-2 !px-4"
                  >
                    <span>Lançar Aplicação Real (SSO)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Clientes Ativos</span>
                <span className="text-lg font-bold text-white font-mono">{product.activeClientsCount}+</span>
              </div>
              <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Satisfação</span>
                <span className="text-lg font-bold text-amber-400 font-mono">{product.rating} / 5.0</span>
              </div>
              <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Sincronização</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">Real-Time</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Detailed Specs */}
        {activeDemoTab === 'funcionalidades' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Principais Funcionalidades do {product.name}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{feat}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Integrado com a infraestrutura unificada da HelpUS com Single Sign-On.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-indigo-950/30 border border-indigo-500/30 rounded-xl text-xs text-slate-300 leading-relaxed">
              <strong className="text-white block mb-1">Coordenado pela HelpUS:</strong>
              Todos os dados do <strong>{product.name}</strong> são sincronizados automaticamente com o HelpUS Pay, HelpUS AI Agent e Central do Cliente para relatórios consolidados de vendas e relatórios financeiros.
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="btn-secondary text-xs"
          >
            Fechar Demonstração
          </button>
          <button
            onClick={() => onSimulateSSO(product)}
            className="btn-primary text-xs"
          >
            <span>Acessar Painel Oficial</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

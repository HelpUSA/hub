import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Activity } from 'lucide-react';

interface HeroSectionProps {
  onExploreCatalog: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCatalog,
  onOpenContact
}) => {
  return (
    <div className="relative pt-12 pb-16 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        
        {/* Ambient Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide uppercase shadow-lg backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>HelpUS Technology • Engenharia & Design Studio</span>
        </div>

        {/* Refined High-Impact Title */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Produtos Digitais e Automações que <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-sky-400 bg-clip-text text-transparent">
              Superam Expectativas.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Combinamos design de alto impacto, automações fiscais em lote e inteligência artificial no WhatsApp para transformar a operação da sua empresa.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button 
            onClick={onExploreCatalog}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-3 cursor-pointer"
          >
            <span>Explorar Divisões de Solução</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onOpenContact}
            className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-base hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Activity className="w-5 h-5 text-sky-400" />
            <span>Solicitar Demonstração</span>
          </button>
        </div>

        {/* Visual Showcase Card (Visual Media Feature) */}
        <div className="pt-8 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 shadow-2xl backdrop-blur-md overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-sky-500/10 opacity-60"></div>
            
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="bg-slate-950 px-4 py-1 rounded-md text-slate-300 font-mono text-[11px] border border-slate-800">
                https://helpusbr.com/ecosystem-demo
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SSL 256-bit Ok</span>
              </div>
            </div>

            {/* Main Interactive Preview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">HelpUS Accounting</span>
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-sm font-bold text-white">NFS-e & CT-e em Lote</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Leitor de Certificado A1 + Exportação automatizada em pacotes ZIP, XML e planilhas Excel formatadas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 hover:border-sky-400/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">WhatsApp & Voice IA</span>
                  <Layers className="w-4 h-4 text-sky-400" />
                </div>
                <h3 className="text-sm font-bold text-white">Atendimento Neural 24/7</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integração Meta Cloud API + Baileys com respostas inteligentes e handoff humano.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 hover:border-emerald-400/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">FBA & Marketplaces</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-sm font-bold text-white">SP-API Amazon Suite</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Controle de catálogo, verificação de ISIN/UPC e envio seguro de feeds de estoque sem bloqueios.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;

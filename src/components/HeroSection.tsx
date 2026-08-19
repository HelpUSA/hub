import React from 'react';
import { Sparkles, Server, CheckCircle2, ArrowRight, Layers, Cpu, Headset } from 'lucide-react';

interface HeroSectionProps {
  onExploreCatalog: () => void;
  onOpenDashboard: () => void;
  onCalculatePricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCatalog,
  onOpenDashboard,
  onCalculatePricing
}) => {
  return (
    <div className="relative pt-8 pb-12 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Ecossistema HelpUS v4.2 Unificado & Coordenado</span>
            <span className="bg-indigo-500/30 text-indigo-200 text-[10px] px-2 py-0.5 rounded-full">NOVO</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            O Hub Central dos Seus <br />
            <span className="text-gradient">Produtos & Serviços Digitais</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Gerencie, acesse com Single Sign-On (SSO) e expanda todas as soluções da sua empresa em uma plataforma unificada, monitorada e coordenada em tempo real pela <strong className="text-slate-200">HelpUS Technology</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button 
              onClick={onExploreCatalog}
              className="btn-primary text-base px-6 py-3"
            >
              <span>Explorar Catálogo de Produtos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={onOpenDashboard}
              className="btn-secondary text-base px-6 py-3"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Acessar Central do Cliente</span>
            </button>
            <button 
              onClick={onCalculatePricing}
              className="btn-secondary text-base px-6 py-3"
            >
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Simular Plano Personalizado</span>
            </button>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-panel p-4 text-center border-slate-800/80">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="pulse-dot"></span>
              <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono">99.98%</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Uptime dos Servidores HelpUS</p>
          </div>

          <div className="glass-panel p-4 text-center border-slate-800/80">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Server className="w-5 h-5 text-indigo-400" />
              <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono">12+</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Sistemas & Módulos Conectados</p>
          </div>

          <div className="glass-panel p-4 text-center border-slate-800/80">
            <div className="flex items-center justify-center gap-2 mb-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono">8.4k+</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Empresas e Usuários Atendidos</p>
          </div>

          <div className="glass-panel p-4 text-center border-slate-800/80">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Headset className="w-5 h-5 text-cyan-400" />
              <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono">24/7</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Suporte Técnico Coordenado</p>
          </div>
        </div>

      </div>
    </div>
  );
};

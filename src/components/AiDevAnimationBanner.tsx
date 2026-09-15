import React from 'react';
import { Cpu, Terminal, Sparkles, Network, Database, Activity, ShieldCheck, Zap } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface AiDevAnimationBannerProps {
  lang: Language;
}

export const AiDevAnimationBanner: React.FC<AiDevAnimationBannerProps> = ({ lang }) => {
  const titles = {
    pt: {
      badge: 'PROCESSO EM TEMPO REAL',
      heading: 'Engenharia Neural & Orquestração de I.A.',
      sub: 'Desenvolvimento contínuo, integração de agentes autônomos e microsserviços na nuvem Vercel Cloud.',
      c1: 'Agentes Autônomos IA',
      c2: 'Processamento RAG',
      c3: 'Deploys Contínuos',
      c4: 'Voz Neural TTS'
    },
    en: {
      badge: 'REAL-TIME PIPELINE',
      heading: 'Neural Engineering & AI Orchestration',
      sub: 'Continuous development, autonomous agents integration, and Vercel cloud microservices.',
      c1: 'Autonomous AI Agents',
      c2: 'RAG Data Pipelines',
      c3: 'Continuous Deploys',
      c4: 'Neural Voice TTS'
    },
    es: {
      badge: 'PROCESO EN TIEMPO REAL',
      heading: 'Ingeniería Neural y Orquestación de I.A.',
      sub: 'Desarrollo continuo, integración de agentes autónomos y microservicios en la nube Vercel.',
      c1: 'Agentes Autónomos IA',
      c2: 'Procesamiento RAG',
      c3: 'Deploys Continuos',
      c4: 'Voz Neural TTS'
    }
  };

  const text = titles[lang] || titles.pt;

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-slate-950 border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,240,255,0.15)] p-6 sm:p-10 text-white">
      
      {/* Background Animated Gradient Mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 space-y-8">
        
        {/* Header Badge & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[11px] font-extrabold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{text.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {text.heading}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              {text.sub}
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Activity className="w-4 h-4 text-emerald-400 animate-spin" />
            <span>AI Core Active</span>
          </div>
        </div>

        {/* Animated Central Canvas Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Code Stream Simulation Box */}
          <div className="md:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 space-y-3 font-mono text-xs text-slate-300 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>orchestrator.ts</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>LIVE EXECUTION</span>
              </div>
            </div>

            <div className="space-y-1.5 text-[11px] font-mono leading-relaxed">
              <p className="text-purple-400">import <span className="text-white">&#123; HelpUSAgent &#125;</span> from <span className="text-emerald-300">'@helpus/ai-engine'</span>;</p>
              <p className="text-slate-400">// Initialize WhatsApp Autonomous Neural Agent</p>
              <p className="text-cyan-300"><span className="text-blue-400">const</span> agent = <span className="text-yellow-300">new</span> HelpUSAgent(&#123; model: <span className="text-emerald-300">'neural-rag-v4'</span> &#125;);</p>
              <p className="text-slate-300"><span className="text-blue-400">await</span> agent.<span className="text-cyan-400">connectWhatsAppCloudAPI</span>();</p>
              <p className="text-emerald-400 flex items-center gap-1">
                <span className="animate-pulse">▶</span> [STATUS]: Neural Nodes Synced (99.9% Uptime)
              </p>
            </div>
          </div>

          {/* Interactive Neural Particle Nodes */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800/80 space-y-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Outer Rotating Circuit Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-purple-500/30 animate-[spin_8s_linear_infinite_reverse]" />
              
              {/* Pulsing AI Core */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.6)] animate-pulse">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-center space-y-1">
              <div className="text-xs font-bold text-white flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>HelpUS Neural Matrix</span>
              </div>
              <p className="text-[10px] text-slate-400">Auto-Scaling Cloud Infrastructure</p>
            </div>
          </div>

        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <Network className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">{text.c1}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <Database className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">{text.c2}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">{text.c3}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">{text.c4}</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AiDevAnimationBanner;

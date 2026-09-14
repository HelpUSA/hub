import React from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Globe, 
  ShieldCheck, 
  MessageCircle, 
  Zap, 
  ChevronRight,
  Server
} from 'lucide-react';
import type { Language } from '../i18n/translations';

interface SolutionAppDetail {
  id: string;
  domain: string;
  liveUrl: string;
  category: 'ia' | 'infra' | 'setoriais' | 'clientes';
  clientSubcategory?: string;
  icon: any;
  image: string;
  folderPath: string;
  status: string;
  isClientSite?: boolean;
  featured?: boolean;
}

interface SolutionDetailViewProps {
  app: SolutionAppDetail;
  lang: Language;
  onBack: () => void;
}

export const SolutionDetailView: React.FC<SolutionDetailViewProps> = ({
  app,
  lang,
  onBack
}) => {
  const Icon = app.icon;
  const whatsappUrl = `https://wa.me/5583998721848?text=Ol%C3%A1%2C%20estou%20interessado%20na%20solu%C3%A7%C3%A3o%20${encodeURIComponent(app.domain)}`;

  const categoryNames = {
    ia: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence', es: 'Inteligencia Artificial' },
    infra: { pt: 'Infraestrutura & Finanças', en: 'Infrastructure & Finance', es: 'Infraestructura y Finanzas' },
    setoriais: { pt: 'Sistemas Setoriais', en: 'Vertical Systems', es: 'Sistemas Sectoriales' },
    clientes: { pt: 'Sites de Clientes', en: 'Client Sites', es: 'Sitios de Clientes' }
  };

  const catTitle = categoryNames[app.category]?.[lang] || categoryNames[app.category]?.pt;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <button 
          onClick={onBack}
          className="flex items-center gap-1 hover:text-cyan-500 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span>{catTitle}</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-slate-900 dark:text-slate-100">{app.domain}</span>
      </div>

      {/* Main Solution Header Banner */}
      <div className="relative rounded-3xl bg-slate-950 border border-slate-800 p-6 md:p-10 text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
              <Icon className="w-4 h-4 text-cyan-400" />
              <span>{app.status}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {app.domain}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Solução corporativa de alto desempenho implantada e gerenciada pela infraestrutura HelpUS Cloud. Totalmente otimizada com alta disponibilidade, SSL estendido e integração contínua.
            </p>

            {/* Badges & Meta */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SSL Seguro Grátis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Vercel Cloud Edge</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Cloudflare DNS Proxy</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={app.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:scale-[1.02]"
              >
                <span>Acessar Site Oficial</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Falar com Consultor</span>
              </a>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
              <img 
                src={app.image} 
                alt={app.domain}
                className="w-full h-64 md:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span className="font-mono text-cyan-400 truncate">{app.domain}</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-semibold text-[10px]">200 OK</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Feature Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="p-3 w-fit rounded-2xl bg-cyan-500/10 text-cyan-500">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Desempenho Otimizado</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Arquitetura moderna com carregamento ultra rápido, suporte a PWA e renderização dinâmica na borda da rede Vercel Edge.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="p-3 w-fit rounded-2xl bg-purple-500/10 text-purple-500">
            <Server className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Disponibilidade 99.9%</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Hospedagem em nuvem redundante com monitoramento ativo 24 horas por dia e proteção anti-DDoS pelo Cloudflare.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 text-emerald-500">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Suporte Dedicado</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Equipe técnica especializada HelpUS disponível para manutenção contínua, melhorias e suporte direto via WhatsApp.
          </p>
        </div>

      </div>

    </div>
  );
};

export default SolutionDetailView;

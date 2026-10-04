import React from 'react';
import { 
  ArrowLeft, 
  Globe, 
  ShieldCheck, 
  MessageCircle, 
  Zap, 
  Server,
  ArrowRight
} from 'lucide-react';
import { translations, type Language } from '../i18n/translations';

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

  const uiTexts = {
    pt: {
      back: 'Voltar ao Início',
      description: 'Solução corporativa de alta performance implantada e gerenciada pela infraestrutura HelpUS Cloud. Totalmente otimizada com alta disponibilidade, SSL estendido e integração contínua.',
      sslBadge: 'SSL Seguro 256-bit',
      visitBtn: 'Acessar Aplicação Live',
      contactBtn: 'Falar no WhatsApp',
      f1Title: 'Arquitetura Edge',
      f1Desc: 'Carregamento instantâneo com renderização dinâmica na borda da rede Vercel Edge.',
      f2Title: 'SLA 99.9% Disponibilidade',
      f2Desc: 'Monitoramento contínuo em tempo real com mitigação proativa anti-DDoS via Cloudflare.',
      f3Title: 'Integração & APIs',
      f3Desc: 'Módulos nativos para WhatsApp Cloud API, emissão de NFS-e e conexão de banco de dados.'
    },
    en: {
      back: 'Back to Home',
      description: 'High-performance enterprise solution deployed and managed by HelpUS Cloud infrastructure. Fully optimized with high availability, extended SSL, and continuous integration.',
      sslBadge: '256-bit Secure SSL',
      visitBtn: 'Visit Live Application',
      contactBtn: 'Talk on WhatsApp',
      f1Title: 'Edge Architecture',
      f1Desc: 'Instant loading with dynamic rendering on the Vercel Edge network.',
      f2Title: '99.9% SLA Availability',
      f2Desc: 'Continuous real-time monitoring with proactive anti-DDoS via Cloudflare.',
      f3Title: 'Integration & APIs',
      f3Desc: 'Native modules for WhatsApp Cloud API, NFS-e tax issuance, and database connections.'
    },
    es: {
      back: 'Volver al Inicio',
      description: 'Solución corporativa de alto rendimiento desplegada y gestionada por la infraestructura HelpUS Cloud. Totalmente optimizada con alta disponibilidad, SSL extendido e integración continua.',
      sslBadge: 'SSL Seguro 256-bit',
      visitBtn: 'Visitar Aplicación en Vivo',
      contactBtn: 'Hablar por WhatsApp',
      f1Title: 'Arquitectura Edge',
      f1Desc: 'Carga instantánea con renderizado dinámico en la red Vercel Edge.',
      f2Title: 'Disponibilidad SLA 99.9%',
      f2Desc: 'Monitoreo continuo en tiempo real con mitigación anti-DDoS por Cloudflare.',
      f3Title: 'Integración y APIs',
      f3Desc: 'Módulos nativos para WhatsApp Cloud API, emisión de NFS-e y conexión de bases de datos.'
    }
  };

  const tUI = uiTexts[lang] || uiTexts.pt;
  const tApp = translations[lang]?.apps?.[app.id];
  const catTitle = categoryNames[app.category]?.[lang] || categoryNames[app.category]?.pt;

  return (
    <div className="min-h-screen bg-[#08090a] text-white pt-28 pb-24 px-6 font-sans border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 uppercase tracking-widest border-b border-white/[0.08] pb-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{tUI.back}</span>
          </button>
          <span>/</span>
          <span>{catTitle}</span>
          <span>/</span>
          <span className="text-white font-bold">{app.domain}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-purple-300 uppercase">
              <Icon className="w-3.5 h-3.5 text-purple-400" />
              <span>{app.status}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {tApp?.name || app.domain}
            </h1>

            <p className="text-neutral-300 text-base leading-relaxed font-normal">
              {tApp?.description || tUI.description}
            </p>

            <div className="flex flex-wrap gap-6 pt-4 text-xs font-mono text-neutral-500 uppercase border-t border-white/[0.08]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{tUI.sslBadge}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Vercel Edge Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Cloudflare DNS Proxy</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={app.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all inline-flex items-center gap-2"
              >
                <span>{tUI.visitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/[0.05] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/[0.1] transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{tUI.contactBtn}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#121316] border border-white/10 shadow-2xl">
              <img 
                src={app.image} 
                alt={app.domain}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/20" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 text-xs font-mono text-neutral-300 flex items-center justify-between">
                <span className="text-purple-300 font-bold truncate">{app.domain}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-400 font-bold text-[10px]">200 OK</span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-2xl bg-[#121316]/60 border border-white/[0.08] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-purple-400">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-base text-white">{tUI.f1Title}</h3>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              {tUI.f1Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121316]/60 border border-white/[0.08] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-purple-400">
              <Server className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-base text-white">{tUI.f2Title}</h3>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              {tUI.f2Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121316]/60 border border-white/[0.08] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-purple-400">
              <MessageCircle className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-base text-white">{tUI.f3Title}</h3>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              {tUI.f3Desc}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SolutionDetailView;

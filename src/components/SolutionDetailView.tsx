import { 
  ArrowLeft, 
  Globe, 
  ShieldCheck, 
  MessageCircle, 
  Zap, 
  Server,
  ArrowUpRight
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
      description: 'Solução corporativa de alta performance implantada e gerenciada pela infraestrutura HelpUS. Totalmente otimizada com alta disponibilidade, SSL estendido e integração contínua.',
      sslBadge: 'SSL Seguro 256-bit',
      visitBtn: 'Acessar Aplicação Live',
      contactBtn: 'Solicitar Apresentação',
      f1Title: 'Arquitetura Edge',
      f1Desc: 'Carregamento instantâneo com renderização dinâmica na borda da rede Vercel Edge.',
      f2Title: 'SLA 99.9% Disponibilidade',
      f2Desc: 'Monitoramento contínuo em tempo real com mitigação proativa anti-DDoS via Cloudflare.',
      f3Title: 'Integração & APIs',
      f3Desc: 'Módulos nativos para WhatsApp Cloud API, emissão de NFS-e e conexão de banco de dados.'
    },
    en: {
      back: 'Back to Home',
      description: 'High-performance enterprise solution deployed and managed by HelpUS infrastructure. Fully optimized with high availability, extended SSL, and continuous integration.',
      sslBadge: '256-bit Secure SSL',
      visitBtn: 'Visit Live Application',
      contactBtn: 'Request Demo Presentation',
      f1Title: 'Edge Architecture',
      f1Desc: 'Instant loading with dynamic rendering on the Vercel Edge network.',
      f2Title: '99.9% SLA Availability',
      f2Desc: 'Continuous real-time monitoring with proactive anti-DDoS via Cloudflare.',
      f3Title: 'Integration & APIs',
      f3Desc: 'Native modules for WhatsApp Cloud API, NFS-e tax issuance, and database connections.'
    },
    es: {
      back: 'Volver al Inicio',
      description: 'Solución corporativa de alto rendimiento desplegada y gestionada por la infraestructura HelpUS. Totalmente optimizada con alta disponibilidad, SSL extendido e integración continua.',
      sslBadge: 'SSL Seguro 256-bit',
      visitBtn: 'Visitar Aplicación en Vivo',
      contactBtn: 'Solicitar Presentación',
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
    <div className="min-h-screen bg-black text-white pt-28 pb-24 px-6 animate-fade-in font-sans border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Breadcrumb Navigation */}
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 uppercase tracking-widest border-b border-neutral-900 pb-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-amber-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{tUI.back}</span>
          </button>
          <span>/</span>
          <span>{catTitle}</span>
          <span>/</span>
          <span className="text-white font-bold">{app.domain}</span>
        </div>

        {/* Hero Section of Subpage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-400 uppercase">
              <Icon className="w-3.5 h-3.5" />
              <span>{app.status}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {tApp?.name || app.domain}
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              {tApp?.description || tUI.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-6 pt-4 text-xs font-mono text-neutral-500 uppercase border-t border-neutral-900">
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

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <a
                href={app.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors inline-flex items-center gap-3"
              >
                <span>{tUI.visitBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-white font-bold text-xs uppercase tracking-wider hover:border-neutral-600 transition-colors inline-flex items-center gap-3"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{tUI.contactBtn}</span>
              </a>
            </div>
          </div>

          {/* Right Column: High Quality Preview Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
              <img 
                src={app.image} 
                alt={app.domain}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/20" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded-xl border border-neutral-800 text-xs font-mono text-neutral-300 flex items-center justify-between">
                <span className="text-amber-400 font-bold truncate">{app.domain}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-400 font-bold text-[10px]">200 OK</span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white">{tUI.f1Title}</h3>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              {tUI.f1Desc}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-amber-400">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white">{tUI.f2Title}</h3>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              {tUI.f2Desc}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-amber-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white">{tUI.f3Title}</h3>
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

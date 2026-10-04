import React from 'react';
import { ShieldCheck, Globe, Sparkles, ArrowUpRight } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface CorporateFooterProps {
  lang: Language;
  onNavigateCategory: (cat: 'ia' | 'infra' | 'setoriais' | 'clientes') => void;
  onOpenContactPage: () => void;
  onOpenPrivacyModal: () => void;
}

export const CorporateFooter: React.FC<CorporateFooterProps> = ({
  lang,
  onNavigateCategory,
  onOpenContactPage,
  onOpenPrivacyModal
}) => {
  const officialEmail = 'helpus.ecommerce@gmail.com';
  const whatsappBR = '+55 (83) 99872-1848';
  const whatsappBRNumber = '5583998721848';
  const instagramUrl = 'https://www.instagram.com/helpus.ecommerce/';

  const texts = {
    pt: {
      slogan: 'Estúdio de Inteligência Artificial, Automação Fiscal e Produtos Digitais de Alta Performance.',
      learnMore: 'NAVEGAÇÃO',
      contactTitle: 'CONTATO',
      rights: '© 2000 - 2026 HelpUS™ Digital Studio. Todos os direitos reservados.',
      privacy: 'Privacidade & Termos',
      startProject: 'Iniciar Projeto'
    },
    en: {
      slogan: 'Artificial Intelligence, Tax Automation & High-Performance Digital Products Studio.',
      learnMore: 'NAVIGATION',
      contactTitle: 'CONTACT',
      rights: '© 2000 - 2026 HelpUS™ Digital Studio. All rights reserved.',
      privacy: 'Privacy & Terms',
      startProject: 'Start Project'
    },
    es: {
      slogan: 'Estudio de Inteligencia Artificial, Automatización Fiscal y Productos Digitales de Alto Rendimiento.',
      learnMore: 'NAVEGACIÓN',
      contactTitle: 'CONTACTO',
      rights: '© 2000 - 2026 HelpUS™ Digital Studio. Todos los derechos reservados.',
      privacy: 'Privacidad y Términos',
      startProject: 'Iniciar Proyecto'
    }
  };

  const t = texts[lang] || texts.pt;

  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-3xl tracking-tighter text-white">
                HELPUS<span className="text-amber-400 font-light">™</span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
              {t.slogan}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContactPage}
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{t.startProject}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
              {t.learnMore}
            </h4>
            <ul className="space-y-3 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <li>
                <button onClick={() => onNavigateCategory('ia')} className="hover:text-white transition-colors cursor-pointer">
                  Soluções de IA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateCategory('infra')} className="hover:text-white transition-colors cursor-pointer">
                  Automação Fiscal & NFS-e
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateCategory('setoriais')} className="hover:text-white transition-colors cursor-pointer">
                  Amazon FBA & Marketplaces
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateCategory('clientes')} className="hover:text-white transition-colors cursor-pointer">
                  Rede de Clientes & Portfólio
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs">
            <h4 className="text-xs text-amber-400 uppercase tracking-widest font-semibold">
              {t.contactTitle}
            </h4>
            <div className="space-y-3">
              <div>
                <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">WhatsApp Direct:</span>
                <a href={`https://wa.me/${whatsappBRNumber}`} target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-amber-400 transition-colors">
                  {whatsappBR}
                </a>
              </div>
              <div>
                <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">E-mail Corporativo:</span>
                <a href={`mailto:${officialEmail}`} className="text-neutral-200 hover:text-amber-400 transition-colors">
                  {officialEmail}
                </a>
              </div>
              <div>
                <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">Redes Sociais:</span>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-amber-400 transition-colors">
                  @helpus.ecommerce
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Badges Strip */}
        <div className="py-6 px-8 rounded-2xl bg-neutral-950 border border-neutral-900 flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Conformidade LGPD & Criptografia 256-bit</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>Infraestrutura Serverless Vercel Edge</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>SLA 99.9% Uptime Monitorado</span>
          </div>
        </div>

        {/* Bottom Legal Line */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500 border-t border-neutral-900">
          <p>{t.rights}</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacyModal} className="hover:text-neutral-300 transition-colors cursor-pointer">
              {t.privacy}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default CorporateFooter;

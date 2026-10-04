import React from 'react';
import { ShieldCheck, Globe, Sparkles, ArrowRight } from 'lucide-react';
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
      slogan: 'Estúdio de Engenharia de Software, Inteligência Artificial e Automação Fiscal.',
      learnMore: 'NAVEGAÇÃO',
      contactTitle: 'CONTATO',
      rights: '© 2000 - 2026 HelpUS Studio Technology LTDA. Todos os direitos reservados.',
      privacy: 'Privacidade & Termos',
      startProject: 'Iniciar Projeto'
    },
    en: {
      slogan: 'Software Engineering, Artificial Intelligence & Tax Automation Studio.',
      learnMore: 'NAVIGATION',
      contactTitle: 'CONTACT',
      rights: '© 2000 - 2026 HelpUS Studio Technology LTDA. All rights reserved.',
      privacy: 'Privacy & Terms',
      startProject: 'Start Project'
    },
    es: {
      slogan: 'Estudio de Ingeniería de Software, Inteligencia Artificial y Automatización Fiscal.',
      learnMore: 'NAVEGACIÓN',
      contactTitle: 'CONTACTO',
      rights: '© 2000 - 2026 HelpUS Studio Technology LTDA. Todos los derechos reservados.',
      privacy: 'Privacidad y Términos',
      startProject: 'Iniciar Proyecto'
    }
  };

  const t = texts[lang] || texts.pt;

  return (
    <footer className="bg-[#08090a] text-neutral-400 border-t border-white/[0.08] pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                <div className="w-full h-full bg-[#08090a] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-white">H</span>
                </div>
              </div>
              <span className="font-semibold text-base tracking-tight text-white">
                HELPUS <span className="text-[10px] text-neutral-500 font-mono uppercase ml-1">STUDIO</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm font-normal leading-relaxed">
              {t.slogan}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenContactPage}
                className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{t.startProject}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold">
              {t.learnMore}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-neutral-400">
              <li>
                <button onClick={() => onNavigateCategory('ia')} className="hover:text-white transition-colors cursor-pointer">
                  Soluções de Inteligência Artificial
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateCategory('infra')} className="hover:text-white transition-colors cursor-pointer">
                  Automação Fiscal & NFS-e em Lote
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
            <h4 className="text-xs text-purple-400 uppercase tracking-widest font-semibold">
              {t.contactTitle}
            </h4>
            <div className="space-y-3">
              <div>
                <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">WhatsApp Direct:</span>
                <a href={`https://wa.me/${whatsappBRNumber}`} target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-purple-300 transition-colors">
                  {whatsappBR}
                </a>
              </div>
              <div>
                <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">E-mail Corporativo:</span>
                <a href={`mailto:${officialEmail}`} className="text-neutral-200 hover:text-purple-300 transition-colors">
                  {officialEmail}
                </a>
              </div>
              <div>
                <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">Instagram Oficial:</span>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-purple-300 transition-colors">
                  @helpus.ecommerce
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Linear Badges Strip */}
        <div className="py-5 px-6 rounded-2xl bg-[#121316]/60 border border-white/[0.08] flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>LGPD Compliance & SSL 256-bit</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>Infraestrutura Serverless Vercel Edge</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>SLA 99.9% Availability Uptime</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500 border-t border-white/[0.08]">
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

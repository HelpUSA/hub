import React from 'react';
import { ShieldCheck, MessageCircle, Globe, Sparkles } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface CorporateFooterProps {
  lang: Language;
  onNavigateCategory: (cat: 'ia' | 'infra' | 'setoriais' | 'clientes') => void;
  onOpenContactPage: () => void;
  onOpenPrivacyModal: () => void;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const CorporateFooter: React.FC<CorporateFooterProps> = ({
  lang,
  onNavigateCategory,
  onOpenContactPage,
  onOpenPrivacyModal
}) => {
  const officialEmail = 'helpus.ecommerce@gmail.com';
  const whatsappBR = '+55 (83) 99872-1848';
  const whatsappBRNumber = '5583998721848';
  const phoneUSA = '+1 (251) 677-8489';
  const phoneUSANumber = '12516778489';
  const instagramUrl = 'https://www.instagram.com/helpus.ecommerce/';

  const texts = {
    pt: {
      slogan: 'Líder em Ecossistemas Digitais & Inteligência Artificial Corporativa',
      learnMore: 'Saiba mais',
      linkClient: 'Seja nosso Cliente',
      linkAI: 'Nossas Soluções de IA',
      linkInfra: 'Infraestrutura Corporativa',
      linkSector: 'Sistemas Setoriais',
      linkPortfolio: 'Rede de Clientes',
      contactTitle: 'Fale Conosco',
      zapLabel: 'WhatsApp (Brasil):',
      phoneLabel: 'Telefone & SMS (EUA):',
      emailLabel: 'E-mail:',
      talkPageBtn: 'Abrir Página de Contato',
      rights: '© 2000 - 2026 HelpUS Technology Solutions LTDA. Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
      adminPortal: 'Portal Admin'
    },
    en: {
      slogan: 'Leader in Digital Ecosystems & Corporate Artificial Intelligence',
      learnMore: 'Learn More',
      linkClient: 'Become Our Client',
      linkAI: 'Our AI Solutions',
      linkInfra: 'Corporate Infrastructure',
      linkSector: 'Vertical Systems',
      linkPortfolio: 'Client Network',
      contactTitle: 'Contact Us',
      zapLabel: 'WhatsApp (Brazil):',
      phoneLabel: 'Phone & SMS (USA):',
      emailLabel: 'Email:',
      talkPageBtn: 'Open Contact Page',
      rights: '© 2000 - 2026 HelpUS Technology Solutions LTDA. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      adminPortal: 'Admin Portal'
    },
    es: {
      slogan: 'Líder en Ecosistemas Digitales e Inteligencia Artificial Corporativa',
      learnMore: 'Saber más',
      linkClient: 'Sea nuestro Cliente',
      linkAI: 'Nuestras Soluciones de IA',
      linkInfra: 'Infraestructura Corporativa',
      linkSector: 'Sistemas Sectoriales',
      linkPortfolio: 'Red de Clientes',
      contactTitle: 'Hablar con Nosotros',
      zapLabel: 'WhatsApp (Brasil):',
      phoneLabel: 'Teléfono y SMS (EE.UU.):',
      emailLabel: 'Correo:',
      talkPageBtn: 'Abrir Página de Contacto',
      rights: '© 2000 - 2026 HelpUS Technology Solutions LTDA. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
      adminPortal: 'Portal Admin'
    }
  };

  const t = texts[lang] || texts.pt;

  return (
    <footer className="bg-[#111827] text-slate-300 border-t border-slate-800 pt-16 pb-16 font-sans relative z-10">
      <div className="hub-container max-w-7xl mx-auto px-6 space-y-12">
        
        {/* TOP MAIN FOOTER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* BRAND LOGO & SLOGAN */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/images/helpus_logo.png" alt="HelpUS Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-tight leading-none">HelpUS</span>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest mt-0.5">Technology Solutions</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-medium">
              {t.slogan}
            </p>
          </div>

          {/* COLUMN 1: SAIBA MAIS */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">
              {t.learnMore}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={onOpenContactPage} className="hover:text-white hover:underline transition-colors">
                  {t.linkClient}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateCategory('ia')} className="hover:text-white hover:underline transition-colors">
                  {t.linkAI}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateCategory('infra')} className="hover:text-white hover:underline transition-colors">
                  {t.linkInfra}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateCategory('setoriais')} className="hover:text-white hover:underline transition-colors">
                  {t.linkSector}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateCategory('clientes')} className="hover:text-white hover:underline transition-colors">
                  {t.linkPortfolio}
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: FALE CONOSCO */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">
              {t.contactTitle}
            </h4>
            <div className="space-y-2 text-xs text-slate-300 font-medium">
              <div>
                <span className="text-slate-400 block text-[11px] font-bold">{t.zapLabel}</span>
                <a href={`https://wa.me/${whatsappBRNumber}`} target="_blank" rel="noopener noreferrer" className="font-mono font-bold hover:text-amber-400 transition-colors">
                  {whatsappBR}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-bold">{t.phoneLabel}</span>
                <a href={`tel:+${phoneUSANumber}`} className="font-mono font-bold hover:text-amber-400 transition-colors">
                  {phoneUSA}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-bold">{t.emailLabel}</span>
                <a href={`mailto:${officialEmail}`} className="font-bold hover:text-amber-400 transition-colors truncate block">
                  {officialEmail}
                </a>
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenContactPage}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.talkPageBtn}</span>
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 3: SOCIAL MEDIA ICONS (LinkedIn removed as requested) */}
          <div className="md:col-span-2 flex md:justify-end items-center gap-2 pt-2 md:pt-0">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href={`https://wa.me/${whatsappBRNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* MIDDLE TRUST BADGES BAR */}
        <div className="py-6 px-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SSL 256-bit Criptografado</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>Cloudflare Cloud Security</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>SLA 99.9% Availability Uptime</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Padrão de Qualidade ISO 9001</span>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>{t.rights}</p>
          <div className="flex items-center gap-6 font-semibold">
            <button onClick={onOpenPrivacyModal} className="hover:text-amber-400 transition-colors">
              {t.privacy}
            </button>
            <button onClick={onOpenPrivacyModal} className="hover:text-amber-400 transition-colors">
              {t.terms}
            </button>
            <button onClick={onOpenContactPage} className="hover:text-amber-400 transition-colors">
              {t.adminPortal}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default CorporateFooter;

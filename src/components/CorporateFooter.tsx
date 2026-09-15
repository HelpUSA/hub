import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface CorporateFooterProps {
  lang: Language;
  onNavigateCategory: (cat: 'ia' | 'infra' | 'setoriais' | 'clientes') => void;
  onOpenModal: (type: 'institutional' | 'help' | 'privacy') => void;
}

export const CorporateFooter: React.FC<CorporateFooterProps> = ({
  lang,
  onNavigateCategory,
  onOpenModal
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && agreed) {
      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setEmail('');
        setAgreed(false);
        setSubmitted(false);
      }, 4000);
    }
  };

  const whatsappNumber = '5583998721848';
  const whatsappFormatted = '(83) 99872-1848';
  const helpusEmail = 'contato@helpusbr.com';

  const texts = {
    pt: {
      slogan: 'Líder em Ecossistemas Digitais & Inteligência Artificial Corporativa',
      followUs: 'Acompanhe',
      productsTitle: 'Produtos',
      solutionsTitle: 'Soluções',
      resourcesTitle: 'Recursos',
      supportTitle: 'Suporte',
      newsletterTitle: 'Acompanhe as Novidades',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'Seu e-mail profissional',
      lgpdText: 'Concordo em receber conteúdo exclusivo e estou ciente que as informações aqui enviadas são sigilosas observando a Lei Geral de Proteção de Dados (LGPD).',
      subscribeBtn: 'INSCREVER',
      thanks: 'Obrigado por se inscrever!',
      rights: 'Copyright © 2000 - 2026, HelpUS Technology. Todos os direitos reservados.',
      address: 'João Pessoa - PB / São Paulo - SP, Brasil',
      terms: 'TERMOS DE USO',
      privacy: 'PRIVACIDADE'
    },
    en: {
      slogan: 'Leader in Digital Ecosystems & Corporate Artificial Intelligence',
      followUs: 'Follow Us',
      productsTitle: 'Products',
      solutionsTitle: 'Solutions',
      resourcesTitle: 'Resources',
      supportTitle: 'Support',
      newsletterTitle: 'Stay Updated',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your business email',
      lgpdText: 'I agree to receive exclusive content and acknowledge that information sent here is confidential in compliance with data privacy regulations.',
      subscribeBtn: 'SUBSCRIBE',
      thanks: 'Thank you for subscribing!',
      rights: 'Copyright © 2000 - 2026, HelpUS Technology. All rights reserved.',
      address: 'João Pessoa - PB / São Paulo - SP, Brazil',
      terms: 'TERMS OF USE',
      privacy: 'PRIVACY POLICY'
    },
    es: {
      slogan: 'Líder en Ecosistemas Digitales e Inteligencia Artificial Corporativa',
      followUs: 'Síguenos',
      productsTitle: 'Productos',
      solutionsTitle: 'Soluciones',
      resourcesTitle: 'Recursos',
      supportTitle: 'Soporte',
      newsletterTitle: 'Mantente Actualizado',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu correo profesional',
      lgpdText: 'Acepto recibir contenido exclusivo y reconozco que la información enviada aquí es confidencial cumpliendo con la protección de datos.',
      subscribeBtn: 'SUSCRIBIRSE',
      thanks: '¡Gracias por suscribirte!',
      rights: 'Copyright © 2000 - 2026, HelpUS Technology. Todos los derechos reservados.',
      address: 'João Pessoa - PB / São Paulo - SP, Brasil',
      terms: 'TÉRMINOS DE USO',
      privacy: 'PRIVACIDAD'
    }
  };

  const t = texts[lang] || texts.pt;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 font-sans">
      <div className="hub-container max-w-7xl mx-auto px-6">
        
        {/* Main 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* COLUMN 1: BRAND, SLOGAN & SOCIAL (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/images/helpus_logo.png" alt="HelpUS Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight leading-none">HelpUS</span>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-0.5">Technology Solutions</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs font-medium">
              {t.slogan}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t.followUs}</h4>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 flex items-center justify-center transition-all shadow-md"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.143 4.174 4.186-1.097z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/p/DcoMVB1Of8Z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-500 flex items-center justify-center transition-all shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center transition-all shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: PRODUTOS & SOLUÇÕES (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">{t.productsTitle}</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><button onClick={() => onNavigateCategory('ia')} className="hover:text-cyan-400 transition-colors">🤖 HelpUS AI Agent</button></li>
                <li><button onClick={() => onNavigateCategory('ia')} className="hover:text-cyan-400 transition-colors">🎙️ HelpUS Voice TTS</button></li>
                <li><button onClick={() => onNavigateCategory('infra')} className="hover:text-cyan-400 transition-colors">📦 HelpUS FBA Suite</button></li>
                <li><button onClick={() => onNavigateCategory('ia')} className="hover:text-cyan-400 transition-colors">🔍 HelpUS Search RAG</button></li>
                <li><button onClick={() => onNavigateCategory('ia')} className="hover:text-cyan-400 transition-colors">🤖 NexoAI Neural Bot</button></li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">{t.solutionsTitle}</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><button onClick={() => onNavigateCategory('infra')} className="hover:text-cyan-400 transition-colors">Serviços Financeiros & Pay</button></li>
                <li><button onClick={() => onNavigateCategory('setoriais')} className="hover:text-cyan-400 transition-colors">Gestão Imobiliária (RealEstate)</button></li>
                <li><button onClick={() => onNavigateCategory('clientes')} className="hover:text-cyan-400 transition-colors">Saúde & Exames Médicos (USMLE)</button></li>
                <li><button onClick={() => onNavigateCategory('clientes')} className="hover:text-cyan-400 transition-colors">Barbearia & Estética Hub</button></li>
                <li><button onClick={() => onNavigateCategory('setoriais')} className="hover:text-cyan-400 transition-colors">Gastronomia & Eventos QR</button></li>
                <li><button onClick={() => onNavigateCategory('infra')} className="hover:text-cyan-400 transition-colors">Desenvolvedores de Software</button></li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: RECURSOS & SUPORTE (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">{t.resourcesTitle}</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><button onClick={() => onOpenModal('institutional')} className="hover:text-cyan-400 transition-colors">Transparência & Ética</button></li>
                <li><button onClick={() => onOpenModal('institutional')} className="hover:text-cyan-400 transition-colors">Canal de Integridade</button></li>
                <li><button onClick={() => onOpenModal('institutional')} className="hover:text-cyan-400 transition-colors">Carreiras & Vagas</button></li>
                <li><button onClick={() => onOpenModal('help')} className="hover:text-cyan-400 transition-colors">Documentação Técnica API</button></li>
                <li><button onClick={() => onOpenModal('institutional')} className="hover:text-cyan-400 transition-colors">Sobre a HelpUS</button></li>
              </ul>
            </div>

            <div className="pt-2 space-y-2 text-xs">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">{t.supportTitle}</h4>
              <p className="font-semibold text-white">📱 {whatsappFormatted}</p>
              <p className="text-slate-400">✉️ {helpusEmail}</p>
              <p className="text-[11px] text-slate-500 pt-1">{t.address}</p>
            </div>
          </div>

          {/* COLUMN 4: NEWSLETTER / FORM (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t.newsletterTitle}</h4>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{t.thanks}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-all"
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-all"
                />

                <label className="flex items-start gap-2 text-[11px] text-slate-400 leading-tight cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-cyan-500"
                  />
                  <span>{t.lgpdText}</span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-bold text-xs tracking-wider uppercase flex items-center justify-between transition-all group"
                >
                  <span>{t.subscribeBtn}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>{t.rights}</p>
          <div className="flex items-center gap-6 font-semibold">
            <button onClick={() => onOpenModal('privacy')} className="hover:text-slate-300 transition-colors uppercase">
              {t.terms}
            </button>
            <button onClick={() => onOpenModal('privacy')} className="hover:text-slate-300 transition-colors uppercase">
              {t.privacy}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default CorporateFooter;

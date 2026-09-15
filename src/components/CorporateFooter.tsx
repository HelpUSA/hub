import React, { useState } from 'react';
import { ArrowRight, Check, Mail, Phone, ChevronRight } from 'lucide-react';
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
  const helpusEmail = 'helpus.ecommerce@gmail.com';

  const texts = {
    pt: {
      slogan: 'Líder em Ecossistemas Digitais & Inteligência Artificial Corporativa',
      followUs: 'Redes Sociais',
      productsTitle: 'Produtos & Plataformas',
      solutionsTitle: 'Soluções Corporativas',
      resourcesTitle: 'Recursos & Políticas',
      supportTitle: 'Contato Direto',
      newsletterTitle: 'Informativo Executivo',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'Seu e-mail profissional',
      lgpdText: 'Concordo em receber comunicações institucionais de acordo com a LGPD.',
      subscribeBtn: 'INSCREVER',
      thanks: 'Obrigado por se inscrever!',
      rights: 'Copyright © 2000 - 2026, HelpUS Technology Solutions. Todos os direitos reservados.',
      terms: 'TERMOS DE USO',
      privacy: 'PRIVACIDADE',
      productsList: [
        { name: 'HelpUS AI Agent Studio', cat: 'ia' as const },
        { name: 'HelpUS Voice TTS', cat: 'ia' as const },
        { name: 'HelpUS FBA Suite', cat: 'infra' as const },
        { name: 'HelpUS Search RAG', cat: 'ia' as const },
        { name: 'NexoAI Neural Bot', cat: 'ia' as const }
      ],
      solutionsLinks: [
        'Serviços Financeiros & Pay',
        'Gestão Imobiliária (RealEstate)',
        'Saúde & Exames Médicos (USMLE)',
        'Barbearia & Estética Hub',
        'Gastronomia & Eventos QR'
      ],
      resourcesLinks: [
        'Transparência & Ética',
        'Canal de Integridade',
        'Documentação Técnica API',
        'Sobre a HelpUS'
      ]
    },
    en: {
      slogan: 'Leader in Digital Ecosystems & Corporate Artificial Intelligence',
      followUs: 'Social Networks',
      productsTitle: 'Products & Platforms',
      solutionsTitle: 'Corporate Solutions',
      resourcesTitle: 'Resources & Policies',
      supportTitle: 'Direct Contact',
      newsletterTitle: 'Executive Newsletter',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your business email',
      lgpdText: 'I agree to receive executive communications in compliance with privacy regulations.',
      subscribeBtn: 'SUBSCRIBE',
      thanks: 'Thank you for subscribing!',
      rights: 'Copyright © 2000 - 2026, HelpUS Technology Solutions. All rights reserved.',
      terms: 'TERMS OF USE',
      privacy: 'PRIVACY POLICY',
      productsList: [
        { name: 'HelpUS AI Agent Studio', cat: 'ia' as const },
        { name: 'HelpUS Voice TTS', cat: 'ia' as const },
        { name: 'HelpUS FBA Suite', cat: 'infra' as const },
        { name: 'HelpUS Search RAG', cat: 'ia' as const },
        { name: 'NexoAI Neural Bot', cat: 'ia' as const }
      ],
      solutionsLinks: [
        'Financial Services & Pay',
        'Real Estate Management (RealEstate)',
        'Health & Medical Exams (USMLE)',
        'Barbershop & Beauty Hub',
        'Gastronomy & QR Events'
      ],
      resourcesLinks: [
        'Transparency & Ethics',
        'Integrity Channel',
        'API Technical Documentation',
        'About HelpUS'
      ]
    },
    es: {
      slogan: 'Líder en Ecosistemas Digitales e Inteligencia Artificial Corporativa',
      followUs: 'Redes Sociales',
      productsTitle: 'Productos y Plataformas',
      solutionsTitle: 'Soluciones Corporativas',
      resourcesTitle: 'Recursos y Políticas',
      supportTitle: 'Contacto Directo',
      newsletterTitle: 'Boletín Ejecutivo',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu correo profesional',
      lgpdText: 'Acepto recibir comunicaciones institucionales cumpliendo con la protección de datos.',
      subscribeBtn: 'SUSCRIBIRSE',
      thanks: '¡Gracias por suscribirte!',
      rights: 'Copyright © 2000 - 2026, HelpUS Technology Solutions. Todos los derechos reservados.',
      terms: 'TÉRMINOS DE USO',
      privacy: 'PRIVACIDAD',
      productsList: [
        { name: 'HelpUS AI Agent Studio', cat: 'ia' as const },
        { name: 'HelpUS Voice TTS', cat: 'ia' as const },
        { name: 'HelpUS FBA Suite', cat: 'infra' as const },
        { name: 'HelpUS Search RAG', cat: 'ia' as const },
        { name: 'NexoAI Neural Bot', cat: 'ia' as const }
      ],
      solutionsLinks: [
        'Servicios Financieros y Pay',
        'Gestión Inmobiliaria (RealEstate)',
        'Salud y Exámenes Médicos (USMLE)',
        'Barbería y Estética Hub',
        'Gastronomía y Eventos QR'
      ],
      resourcesLinks: [
        'Transparencia y Ética',
        'Canal de Integridad',
        'Documentación Técnica API',
        'Sobre HelpUS'
      ]
    }
  };

  const t = texts[lang] || texts.pt;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 font-sans relative z-10">
      <div className="hub-container max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Modern Quadros Grid Layout — Visually Distinct Corporate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* QUADRO 1: BRAND, SLOGAN & SOCIAL NETWORKS */}
          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800/90 rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/images/helpus_logo.png" alt="HelpUS Logo" className="h-10 w-auto object-contain" />
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl text-white tracking-tight leading-none">HelpUS</span>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-0.5">Technology Solutions</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {t.slogan}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">{t.followUs}</h4>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 flex items-center justify-center transition-all shadow-md"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.143 4.174 4.186-1.097z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/p/DcoMVB1Of8Z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/50 flex items-center justify-center transition-all shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 flex items-center justify-center transition-all shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* QUADRO 2: PRODUTOS & PLATAFORMAS */}
          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800/90 rounded-3xl p-6 shadow-xl space-y-4 hover:border-slate-700 transition-all">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>{t.productsTitle}</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              {t.productsList.map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onNavigateCategory(item.cat)} 
                    className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* QUADRO 3: SOLUÇÕES CORPORATIVAS & CONTATO */}
          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800/90 rounded-3xl p-6 shadow-xl space-y-5 hover:border-slate-700 transition-all">
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{t.solutionsTitle}</span>
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                {t.solutionsLinks.map((item, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => onNavigateCategory('setoriais')} 
                      className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors group text-left"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                      <span>{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Links Inside Card */}
            <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 font-semibold transition-colors">
                  {whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${helpusEmail}`} className="hover:text-cyan-300 font-semibold transition-colors truncate">
                  {helpusEmail}
                </a>
              </div>
            </div>
          </div>

          {/* QUADRO 4: INFORMATIVO EXECUTIVO & POLÍTICAS */}
          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800/90 rounded-3xl p-6 shadow-xl space-y-4 hover:border-slate-700 transition-all">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>{t.newsletterTitle}</span>
            </h4>

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
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-all font-medium"
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-all font-medium"
                />

                <label className="flex items-start gap-2 text-[11px] text-slate-400 leading-tight cursor-pointer pt-0.5">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 rounded bg-slate-950 border-slate-800 text-cyan-500 focus:ring-cyan-500"
                  />
                  <span>{t.lgpdText}</span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-between transition-all shadow-lg shadow-blue-600/25 group"
                >
                  <span>{t.subscribeBtn}</span>
                  <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
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

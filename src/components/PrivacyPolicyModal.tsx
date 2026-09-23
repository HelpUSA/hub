import React from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const content = {
    pt: {
      title: 'Política de Privacidade & Termos de Uso',
      subtitle: 'Conformidade LGPD (Lei 13.709/2018) & Regulamentos Internacionais de Privacidade',
      section1Title: '1. Tratamento e Proteção de Dados',
      section1Text: 'A HelpUS Technology Solutions atua como operadora e controladora no tratamento de dados estritamente necessários para a operacionalização dos serviços de inteligência artificial, infraestrutura e portais corporativos.',
      section2Title: '2. Uso de Cookies & Tecnologias de Navegação',
      section2Text: 'Utilizamos cookies essenciais e identificadores de sessão criptografados para garantir a segurança no acesso ao Single Sign-On (SSO), manter preferências de idioma e oferecer métricas de alta disponibilidade (HTTP 200 OK).',
      section3Title: '3. Seus Direitos como Titular de Dados',
      section3Text: 'Você tem o direito de solicitar a confirmação da existência de tratamento, acesso aos dados, correção de informações incompletas ou revogação do consentimento a qualquer momento enviando e-mail ao nosso Encarregado DPO.',
      contactTitle: 'Encarregado de Proteção de Dados (DPO):',
      email: 'helpus.ecommerce@gmail.com',
      phoneUSA: 'EUA: +1 (251) 677-8489',
      phoneBR: 'Brasil: +55 (83) 99872-1848',
      closeBtn: 'Entendi e Concordo'
    },
    en: {
      title: 'Privacy Policy & Terms of Use',
      subtitle: 'Compliance with International Privacy Regulations & LGPD Standards',
      section1Title: '1. Data Handling & Security',
      section1Text: 'HelpUS Technology Solutions acts as data operator and controller strictly for essential operations of AI services, infrastructure microservices, and client corporate portals.',
      section2Title: '2. Use of Cookies & Technical Identifiers',
      section2Text: 'We use essential cookies and encrypted session keys to provide Single Sign-On (SSO) security, language preference persistence, and high-uptime telemetry.',
      section3Title: '3. Data Subject Rights',
      section3Text: 'You may request data access, correction, or consent revocation at any time by contacting our Data Protection Officer.',
      contactTitle: 'Data Protection Officer (DPO Contact):',
      email: 'helpus.ecommerce@gmail.com',
      phoneUSA: 'USA: +1 (251) 677-8489',
      phoneBR: 'Brazil: +55 (83) 99872-1848',
      closeBtn: 'I Understand & Agree'
    },
    es: {
      title: 'Política de Privacidad y Términos',
      subtitle: 'Cumplimiento con Regulaciones Internacionales de Privacidad y Proteccion de Datos',
      section1Title: '1. Tratamiento y Protección de Datos',
      section1Text: 'HelpUS Technology Solutions actúa como operador de datos estrictamente necesarios para la operación de inteligencia artificial y portales corporativos.',
      section2Title: '2. Uso de Cookies y Tecnologías',
      section2Text: 'Utilizamos cookies esenciales y claves de sesión cifradas para garantizar la seguridad del inicio de sesión (SSO) y la disponibilidad.',
      section3Title: '3. Derechos del Titular',
      section3Text: 'Puede solicitar acceso o corrección de datos en cualquier momento enviando un correo a nuestro DPO.',
      contactTitle: 'Oficial de Protección de Datos (DPO):',
      email: 'helpus.ecommerce@gmail.com',
      phoneUSA: 'EE.UU.: +1 (251) 677-8489',
      phoneBR: 'Brasil: +55 (83) 99872-1848',
      closeBtn: 'Entendido y Acepto'
    }
  };

  const t = content[lang] || content.pt;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div 
        className="bg-slate-900 border border-slate-700/80 text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.7)] relative overflow-hidden space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug">
                {t.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                {t.subtitle}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-2xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-normal">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2">
            <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>{t.section1Title}</span>
            </h4>
            <p className="text-slate-400">{t.section1Text}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2">
            <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>{t.section2Title}</span>
            </h4>
            <p className="text-slate-400">{t.section2Text}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2">
            <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{t.section3Title}</span>
            </h4>
            <p className="text-slate-400">{t.section3Text}</p>
          </div>

          {/* DPO Contact Box */}
          <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
            <h5 className="font-extrabold text-cyan-300 text-xs uppercase tracking-wider">{t.contactTitle}</h5>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-semibold text-slate-200">
              <span>✉️ {t.email}</span>
              <span>📞 {t.phoneUSA}</span>
              <span>📞 {t.phoneBR}</span>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="pt-2 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-900/40"
          >
            {t.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyModal;

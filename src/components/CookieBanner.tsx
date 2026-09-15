import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface CookieBannerProps {
  lang: Language;
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang, onOpenPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('helpus_cookies_accepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('helpus_cookies_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  const texts = {
    pt: {
      title: 'Aviso de Privacidade & Cookies',
      text: 'Utilizamos cookies essenciais e tecnologias semelhantes para otimizar o desempenho do site e garantir a segurança das suas interações.',
      accept: 'Aceitar Cookies',
      privacy: 'Política de Privacidade'
    },
    en: {
      title: 'Privacy & Cookie Policy',
      text: 'We use essential cookies and similar technologies to optimize website performance and ensure secure interactions.',
      accept: 'Accept Cookies',
      privacy: 'Privacy Policy'
    },
    es: {
      title: 'Aviso de Privacidad y Cookies',
      text: 'Utilizamos cookies esenciales y tecnologías similares para optimizar el rendimiento del sitio y garantizar interacciones seguras.',
      accept: 'Aceptar Cookies',
      privacy: 'Política de Privacidad'
    }
  };

  const t = texts[lang] || texts.pt;

  return (
    <div className="fixed bottom-20 left-6 z-50 max-w-md bg-slate-950/95 backdrop-blur-xl border border-slate-800 text-white p-5 rounded-2xl shadow-2xl animate-fade-in space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
          <Cookie className="w-4 h-4" />
          <span>{t.title}</span>
        </div>
        <button onClick={handleAccept} className="text-slate-400 hover:text-white p-1" aria-label="Close cookie banner">
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        {t.text}
      </p>

      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs transition-all shadow-md"
        >
          {t.accept}
        </button>
        <button
          onClick={onOpenPrivacy}
          className="text-xs text-slate-400 hover:text-cyan-300 underline transition-colors"
        >
          {t.privacy}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

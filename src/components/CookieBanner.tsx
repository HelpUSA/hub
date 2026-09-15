import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';
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
      title: 'Privacidade & Cookies',
      text: 'Utilizamos cookies essenciais para garantir segurança, desempenho otimizado e personalização da sua navegação.',
      accept: 'Aceitar Cookies',
      privacy: 'Política de Privacidade'
    },
    en: {
      title: 'Privacy & Cookies',
      text: 'We use essential cookies to ensure security, optimized performance, and personalized browsing experience.',
      accept: 'Accept Cookies',
      privacy: 'Privacy Policy'
    },
    es: {
      title: 'Privacidad y Cookies',
      text: 'Utilizamos cookies esenciales para garantizar la seguridad, el rendimiento optimizado y la personalización.',
      accept: 'Aceptar Cookies',
      privacy: 'Política de Privacidad'
    }
  };

  const t = texts[lang] || texts.pt;

  return (
    <div className="fixed bottom-24 left-6 z-50 max-w-md bg-white/95 backdrop-blur-2xl border border-cyan-500/30 text-slate-900 p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-fade-in space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-600 font-extrabold text-sm">
          <div className="p-1.5 rounded-xl bg-blue-50 border border-blue-200">
            <Cookie className="w-4 h-4 text-blue-600" />
          </div>
          <span>{t.title}</span>
        </div>
        <button 
          onClick={handleAccept} 
          className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors" 
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed font-medium">
        {t.text}
      </p>

      <div className="flex items-center justify-between pt-1 gap-3">
        <button
          onClick={handleAccept}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold text-xs transition-all shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{t.accept}</span>
        </button>
        <button
          onClick={onOpenPrivacy}
          className="text-xs font-bold text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          {t.privacy}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

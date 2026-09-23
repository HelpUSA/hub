import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface StickyFloatingFooterProps {
  lang: Language;
  onOpenContact: () => void;
}

export const StickyFloatingFooter: React.FC<StickyFloatingFooterProps> = ({
  lang,
  onOpenContact
}) => {
  const phoneUSA = '+1 (251) 677-8489';
  const phoneUSANumber = '12516778489';
  const phoneBR = '(83) 99872-1848';
  const phoneBRNumber = '5583998721848';

  const labels = {
    pt: {
      ask: 'Quer falar com um especialista?',
      whatsappBtn: 'Fale com a gente no Whatsapp'
    },
    en: {
      ask: 'Want to speak with a specialist?',
      whatsappBtn: 'Chat with us on WhatsApp'
    },
    es: {
      ask: '¿Quiere hablar con un especialista?',
      whatsappBtn: 'Hable con nosotros en WhatsApp'
    }
  };

  const currentText = labels[lang] || labels.pt;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#f59e0b] sm:bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-[0_-5px_30px_rgba(0,0,0,0.4)] border-t border-amber-300/80 px-4 sm:px-8 py-3 flex items-center justify-between gap-4 font-sans">
      
      {/* Left Specialist Callout */}
      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold">
        <span className="hidden md:inline font-extrabold text-slate-900 tracking-tight">
          {currentText.ask}
        </span>
        <div className="flex items-center gap-3">
          <a
            href={`tel:+${phoneUSANumber}`}
            className="flex items-center gap-1.5 font-mono text-slate-950 font-black hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-slate-950" />
            <span>{phoneUSA}</span>
          </a>
          <span className="text-slate-800 font-normal hidden sm:inline">ou</span>
          <a
            href={`https://wa.me/${phoneBRNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-slate-950 font-black hover:text-white transition-colors hidden sm:inline"
          >
            {phoneBR}
          </a>
        </div>
      </div>

      {/* Right WhatsApp Action Button (Softcom Style) */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenContact}
          className="flex items-center gap-2 text-xs sm:text-sm font-black text-slate-950 hover:text-white transition-colors"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 text-amber-400" />
          <span className="underline underline-offset-4 decoration-slate-950 font-extrabold">{currentText.whatsappBtn}</span>
        </button>

        {/* Floating Brand Folder Icon (Softcom style) */}
        <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shadow-lg border border-amber-400/30">
          <img src="/images/helpus_logo.png" alt="HelpUS" className="w-5 h-5 object-contain" />
        </div>
      </div>

    </div>
  );
};

export default StickyFloatingFooter;

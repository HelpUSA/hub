import React from 'react';
import { MessageCircle, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface StickyFloatingFooterProps {
  lang: Language;
  onOpenDemo: () => void;
  onOpenContact: () => void;
}

export const StickyFloatingFooter: React.FC<StickyFloatingFooterProps> = ({
  lang,
  onOpenDemo,
  onOpenContact
}) => {
  const labels = {
    pt: {
      status: 'Soluções 100% Online',
      whatsapp: 'WhatsApp Direct',
      demo: 'Agendar Demonstração',
      call: 'Falar com Consultor'
    },
    en: {
      status: 'Solutions 100% Online',
      whatsapp: 'WhatsApp Direct',
      demo: 'Schedule Demo',
      call: 'Talk to Advisor'
    },
    es: {
      status: 'Soluciones 100% En Línea',
      whatsapp: 'WhatsApp Directo',
      demo: 'Agendar Demostración',
      call: 'Hablar con Asesor'
    }
  };

  const currentText = labels[lang] || labels.pt;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl bg-slate-950/90 backdrop-blur-xl border border-cyan-500/30 text-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] px-4 py-3 flex items-center justify-between gap-3 transition-all duration-300 hover:border-cyan-400/50">
      
      {/* Status & HelpUS Badge */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{currentText.status}</span>
          </div>
          <div className="text-[10px] text-slate-400">
            Ecossistema Corporativo HelpUS
          </div>
        </div>
      </div>

      {/* Center Highlight */}
      <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-300 px-3 py-1 bg-slate-900/80 rounded-full border border-slate-800">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>Atendimento em Tempo Real</span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onOpenDemo}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:text-white px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 transition-all border border-slate-700/60"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden xs:inline">{currentText.demo}</span>
          <span className="xs:hidden">Demo</span>
        </button>

        <button
          onClick={onOpenContact}
          className="flex items-center gap-2 text-xs font-semibold text-white px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-900/30 transition-all transform hover:scale-[1.03]"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span>{currentText.whatsapp}</span>
        </button>
      </div>

    </div>
  );
};

export default StickyFloatingFooter;

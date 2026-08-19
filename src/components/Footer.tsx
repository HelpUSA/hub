import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectCategoryTab: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategoryTab }) => {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/80 text-slate-400 py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <span className="font-extrabold text-lg text-white">Help<span className="text-indigo-400">US</span> Hub</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Plataforma central unificada para coordenação de produtos, sistemas digitais e serviços corporativos.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
            <span className="pulse-dot"></span> Todos os Sistemas Operacionais
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Produtos do Ecossistema</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => onSelectCategoryTab('imobiliaria')} className="hover:text-indigo-300 transition-colors">HelpUS Imóveis Pro</button></li>
            <li><button onClick={() => onSelectCategoryTab('beleza')} className="hover:text-indigo-300 transition-colors">HelpUS Barber & Salon Hub</button></li>
            <li><button onClick={() => onSelectCategoryTab('eventos')} className="hover:text-indigo-300 transition-colors">HelpUS Events Pass</button></li>
            <li><button onClick={() => onSelectCategoryTab('gastronomia')} className="hover:text-indigo-300 transition-colors">HelpUS Gourmet & Drinks</button></li>
            <li><button onClick={() => onSelectCategoryTab('ia')} className="hover:text-indigo-300 transition-colors">HelpUS AI Customer Agent</button></li>
          </ul>
        </div>

        {/* Corporate Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Serviços & Suporte</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#central_cliente" className="hover:text-indigo-300 transition-colors">Central do Cliente (SSO)</a></li>
            <li><a href="#chamados" className="hover:text-indigo-300 transition-colors">HelpUS Desk (Abertura de Tickets)</a></li>
            <li><a href="#calculadora" className="hover:text-indigo-300 transition-colors">Simulador de Planos & Combos</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition-colors">Status dos Servidores (API Health)</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition-colors">Documentação de Integração API</a></li>
          </ul>
        </div>

        {/* Contact & HQ */}
        <div className="space-y-2 text-xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Atendimento HelpUS</h4>
          <p className="text-slate-400">Email: <strong className="text-slate-200">suporte@helpus.com.br</strong></p>
          <p className="text-slate-400">Atendimento 24/7 via Portal ou WhatsApp Corporativo</p>
          <div className="pt-2">
            <span className="text-[10px] text-slate-500 font-mono">HelpUS Technology Solutions © 2026</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>Desenvolvido com excelência para a empresa HelpUS e seus clientes.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-300">Termos de Uso</a>
          <span>•</span>
          <a href="#" className="hover:text-slate-300">Privacidade</a>
          <span>•</span>
          <a href="#" className="hover:text-slate-300">Segurança TLS 1.3</a>
        </div>
      </div>
    </footer>
  );
};

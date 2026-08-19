import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  User, 
  HelpCircle, 
  LayoutGrid, 
  Ticket, 
  Calculator, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import type { ClientProfile } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clientProfile: ClientProfile;
  onOpenTicketModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  clientProfile,
  onOpenTicketModal
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('catalogo')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white">Help<span className="text-indigo-400">US</span></span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">HUB</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Gestão & Ecossistema de Produtos</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xs relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar produto, solução ou ticket..."
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-900/80 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
          />
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 lg:gap-2">
          <button
            onClick={() => setActiveTab('catalogo')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'catalogo'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Catálogo</span>
          </button>

          <button
            onClick={() => setActiveTab('central_cliente')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'central_cliente'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Central do Cliente</span>
          </button>

          <button
            onClick={() => setActiveTab('chamados')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'chamados'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Ticket className="w-4 h-4" />
            <span className="hidden sm:inline">Suporte & HelpDesk</span>
          </button>

          <button
            onClick={() => setActiveTab('calculadora')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'calculadora'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span className="hidden sm:inline">Preços & Combos</span>
          </button>
        </div>

        {/* User Profile Pill & Quick Support Button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenTicketModal}
            className="hidden lg:flex btn-primary !py-1.5 !px-3 text-xs"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Abrir Chamado</span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all text-left"
            >
              <img
                src={clientProfile.avatarUrl}
                alt={clientProfile.companyName}
                className="w-8 h-8 rounded-lg object-cover border border-indigo-500/30"
              />
              <div className="hidden xl:block text-xs pr-1">
                <p className="font-bold text-slate-200 truncate max-w-[130px]">{clientProfile.companyName}</p>
                <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="pulse-dot !w-1.5 !h-1.5"></span> {clientProfile.activeModules.length} Módulos Ativos
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 glass-panel p-3 shadow-2xl z-50 border border-slate-700/80 animate-fadeIn">
                <div className="p-2 border-b border-slate-800 mb-2">
                  <p className="text-xs font-bold text-white">{clientProfile.companyName}</p>
                  <p className="text-[11px] text-slate-400">{clientProfile.email}</p>
                  <span className="mt-1 badge badge-featured !text-[10px]">{clientProfile.plan}</span>
                </div>
                <div className="space-y-1">
                  <button 
                    onClick={() => { setActiveTab('central_cliente'); setShowProfileMenu(false); }}
                    className="w-full text-left px-2.5 py-1.5 text-xs text-slate-300 hover:bg-indigo-600/20 rounded-lg flex items-center justify-between"
                  >
                    <span>Meus Serviços Ativos</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </button>
                  <button 
                    onClick={() => { setActiveTab('chamados'); setShowProfileMenu(false); }}
                    className="w-full text-left px-2.5 py-1.5 text-xs text-slate-300 hover:bg-indigo-600/20 rounded-lg flex items-center justify-between"
                  >
                    <span>Histórico de Chamados</span>
                    <Ticket className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
};

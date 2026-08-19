import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink, 
  Download, 
  Activity, 
  CreditCard, 
  UserCheck, 
  Layers, 
  Server,
  Key
} from 'lucide-react';
import type { ClientProfile, Product, InvoiceItem } from '../types';

interface ClientDashboardProps {
  profile: ClientProfile;
  products: Product[];
  invoices: InvoiceItem[];
  onSimulateSSO: (product: Product) => void;
  onOpenTicketModal: () => void;
}

export const ClientDashboard: React.FC<ClientDashboardProps> = ({
  profile,
  products,
  invoices,
  onSimulateSSO,
  onOpenTicketModal
}) => {
  const activeProducts = products.filter(p => profile.activeModules.includes(p.id));

  return (
    <div className="py-8 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header Profile Banner */}
      <div className="glass-panel p-6 border-indigo-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <img
              src={profile.avatarUrl}
              alt={profile.companyName}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/50 shadow-xl"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-white">{profile.companyName}</h1>
                <span className="badge badge-active text-[10px]">Conta Verificada</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Contato: {profile.contactName} ({profile.email})</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/15 px-2.5 py-1 rounded-md border border-indigo-500/30">
                  {profile.plan}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> Uptime: {profile.uptimeScore}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t md:border-t-0 pt-4 md:pt-0 border-slate-800">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-right">
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Gerente de Conta</span>
              <span className="text-xs font-bold text-slate-200 flex items-center justify-end gap-1 mt-0.5">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" /> {profile.accountManager}
              </span>
            </div>
            <button 
              onClick={onOpenTicketModal}
              className="btn-primary text-xs !py-2.5"
            >
              <span>Solicitar Atendimento</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Active Services SSO & Server Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Active Services List (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>Meus Serviços Contratados (Acesso SSO)</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">{activeProducts.length} Módulos Ativos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeProducts.map(product => (
              <div 
                key={product.id}
                className="glass-panel p-4 flex flex-col justify-between hover:border-indigo-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge badge-active text-[10px]">
                      <span className="pulse-dot !w-1.5 !h-1.5"></span> Em Execução
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{product.subdomain}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{product.tagline}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" /> SSO Ativo
                  </div>

                  <button
                    onClick={() => onSimulateSSO(product)}
                    className="btn-primary !py-1.5 !px-3 text-xs bg-indigo-600 hover:bg-indigo-500"
                  >
                    <span>Abrir Painel</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Server & System Health Status Monitor (1 col) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Server className="w-5 h-5 text-cyan-400" />
            <span>Saúde da Infraestrutura HelpUS</span>
          </h2>

          <div className="glass-panel p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs text-slate-300 font-medium">Status Geral do Cluster</span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <span className="pulse-dot"></span> Operacional
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>API Gateway Latência</span>
                  <span className="font-mono text-emerald-400">14ms</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div className="w-[95%] h-full bg-emerald-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Sincronização de Banco de Dados</span>
                  <span className="font-mono text-indigo-400">100%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-indigo-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Segurança & TLS Encryption</span>
                  <span className="font-mono text-cyan-400">TLS 1.3 Active</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-cyan-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <Key className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>Chaves de API e tokens SSO são renovados automaticamente a cada 24 horas para segurança.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Invoices & Billing Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-purple-400" />
          <span>Faturamento & Histórico de Pagamentos</span>
        </h2>

        <div className="glass-panel overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] uppercase tracking-wider text-slate-500 bg-slate-900/60">
                <th className="p-4">Fatura</th>
                <th className="p-4">Vencimento</th>
                <th className="p-4">Descrição do Plano</th>
                <th className="p-4">Valor</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Comprovante</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {invoices.map(inv => (
                <tr key={inv.id} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-mono font-bold text-white">{inv.id}</td>
                  <td className="p-4 text-slate-400">{inv.date}</td>
                  <td className="p-4 text-slate-300">{inv.planDescription}</td>
                  <td className="p-4 font-mono font-bold text-white">R$ {inv.amount.toFixed(2)}</td>
                  <td className="p-4">
                    <span className="badge badge-active !text-[10px]">
                      ✓ {inv.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => alert(`Simulando download da fatura PDF ${inv.id}`)}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  Ticket, 
  PlusCircle, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Bot
} from 'lucide-react';
import type { SupportTicket, Product } from '../types';

interface SupportDeskProps {
  tickets: SupportTicket[];
  products: Product[];
  onAddTicket: (newTicket: SupportTicket) => void;
}

export const SupportDesk: React.FC<SupportDeskProps> = ({
  tickets,
  products,
  onAddTicket
}) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(tickets[0] || null);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Suporte Técnico');
  const [priority, setPriority] = useState<'baixa' | 'media' | 'alta' | 'urgente'>('media');
  const [systemName, setSystemName] = useState(products[0]?.name || 'HelpUS Portal Central');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    const newTicket: SupportTicket = {
      id: `TK-${Math.floor(1000 + Math.random() * 9000)}`,
      title,
      category,
      priority,
      status: 'aberto',
      createdAt: new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      systemName,
      description,
      messagesCount: 1
    };

    onAddTicket(newTicket);
    setSelectedTicket(newTicket);
    setTitle('');
    setDescription('');
    setShowForm(false);
  };

  const getPriorityBadge = (p: string) => {
    switch (p) {
      case 'urgente': return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      case 'alta': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'media': return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
      default: return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  const getStatusBadge = (s: string) => {
    switch (s) {
      case 'resolvido': 
        return <span className="badge badge-active"><CheckCircle2 className="w-3 h-3" /> Resolvido</span>;
      case 'em_analise': 
        return <span className="badge badge-amber"><Clock className="w-3 h-3" /> Em Análise</span>;
      default: 
        return <span className="badge badge-new"><AlertCircle className="w-3 h-3" /> Aberto</span>;
    }
  };

  return (
    <div className="py-8 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase">HelpUS Desk</span>
          <h1 className="text-3xl font-extrabold text-white">Central de Suporte Coordenado</h1>
          <p className="text-sm text-slate-400 mt-0.5">
            Abra chamados técnicos, solicite novas integrações e acompanhe o atendimento em tempo real.
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary text-sm !py-2.5"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{showForm ? 'Fechar Formulário' : 'Novo Chamado de Suporte'}</span>
        </button>
      </div>

      {/* New Ticket Form Accordion */}
      {showForm && (
        <form onSubmit={handleSubmit} className="glass-panel p-6 border-indigo-500/40 space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Ticket className="w-5 h-5 text-indigo-400" />
              <span>Abrir Novo Chamado de Atendimento</span>
            </h3>
            <span className="text-xs text-slate-400">Suporte 24/7 Coordenado pela HelpUS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Sistema Afetado</label>
              <select
                value={systemName}
                onChange={(e) => setSystemName(e.target.value)}
                className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
              >
                {products.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
                <option value="HelpUS Portal Central">HelpUS Portal Central</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Categoria</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
              >
                <option value="Suporte Técnico">Suporte Técnico</option>
                <option value="Solicitação de Novo Módulo">Solicitação de Novo Módulo</option>
                <option value="Integração Customizada">Integração Customizada</option>
                <option value="Dúvida Financeira">Dúvida Financeira</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Prioridade</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as any)}
                className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
              >
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
                <option value="urgente">Urgente</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Título Resumido</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Necessidade de ajustar permissões de usuário no Imóveis Pro..."
              className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Descrição Detalhada</label>
            <textarea
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva o que ocorreu ou qual funcionalidade sob medida sua empresa necessita..."
              className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="btn-secondary text-xs"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-primary text-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar Chamado</span>
            </button>
          </div>
        </form>
      )}

      {/* Main Support Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Ticket History List (1 col) */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Histórico de Chamados</h3>
          
          <div className="space-y-2">
            {tickets.map(t => {
              const isSelected = selectedTicket?.id === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTicket(t)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all ${
                    isSelected 
                      ? 'bg-slate-800/90 border-indigo-500 shadow-md ring-1 ring-indigo-500/30' 
                      : 'glass-panel hover:bg-slate-900/90 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-white">{t.id}</span>
                    {getStatusBadge(t.status)}
                  </div>

                  <h4 className="text-xs font-bold text-slate-200 line-clamp-1">{t.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">{t.systemName}</p>

                  <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
                    <span>{t.createdAt}</span>
                    <span className={`px-2 py-0.5 rounded border ${getPriorityBadge(t.priority)} font-semibold uppercase`}>
                      {t.priority}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Ticket Detail & AI Triaging (2 cols) */}
        <div className="lg:col-span-2">
          {selectedTicket ? (
            <div className="glass-panel p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-sm font-bold text-indigo-400">{selectedTicket.id}</span>
                    {getStatusBadge(selectedTicket.status)}
                    <span className={`text-[10px] px-2 py-0.5 rounded border ${getPriorityBadge(selectedTicket.priority)} font-bold uppercase`}>
                      {selectedTicket.priority}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white">{selectedTicket.title}</h2>
                  <p className="text-xs text-slate-400 mt-1">Sistema: <strong className="text-slate-200">{selectedTicket.systemName}</strong> | Criado em: {selectedTicket.createdAt}</p>
                </div>
              </div>

              {/* Message timeline thread */}
              <div className="space-y-4">
                
                {/* Client original message */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300">Você (Solicitante)</span>
                    <span className="text-[10px] text-slate-500">{selectedTicket.createdAt}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{selectedTicket.description}</p>
                </div>

                {/* HelpUS AI Pre-diagnostic message */}
                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                      <Bot className="w-4 h-4 text-cyan-400" /> HelpUS AI Assistant (Triagem Automática)
                    </span>
                    <span className="text-[10px] text-indigo-400">Resposta Instantânea</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Recebemos seu chamado referente ao <strong>{selectedTicket.systemName}</strong>. Nossa equipe técnica da HelpUS foi notificada e já está verificando as configurações do seu ambiente.
                  </p>
                </div>

                {selectedTicket.status === 'resolvido' && (
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Equipe de Engenharia HelpUS
                      </span>
                      <span className="text-[10px] text-emerald-400">Finalizado</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Chamado concluído com sucesso. A alteração foi propagada no seu ecossistema.
                    </p>
                  </div>
                )}

              </div>

              {/* Reply Box */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Escrever réplica ou adicionar mais detalhes..."
                  className="flex-1 p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500"
                />
                <button className="btn-primary text-xs !py-2.5">
                  <Send className="w-3.5 h-3.5" />
                  <span>Responder</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="glass-panel p-12 text-center text-slate-400">
              Selecione um chamado da lista para ver os detalhes.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

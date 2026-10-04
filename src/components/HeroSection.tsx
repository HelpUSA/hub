import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Check, Copy, Terminal, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface HeroSectionProps {
  lang: Language;
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang: _lang,
  onExploreWork,
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'accounting' | 'whatsapp' | 'amazon'>('accounting');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    accounting: `// HelpUS Accounting — Automação Fiscal NFS-e & CT-e
import { HelpUS } from '@helpus/sdk';

const client = new HelpUS({ apiKey: process.env.HELPUS_KEY });

const batch = await client.fiscal.downloadBatch({
  cnpj: '12.345.678/0001-90',
  period: '2026-09',
  certificateA1: 'mtls_encrypted_buffer',
  format: 'EXCEL_AND_ZIP'
});

console.log('NFS-e Processadas:', batch.totalProcessed); // 1.420 XMLs`,

    whatsapp: `// HelpUS WhatsApp IA — Agente Neural Autônomo 24/7
import { WhatsAppIA } from '@helpus/ai';

const agent = new WhatsAppIA({
  model: 'helpus-neural-v2',
  temperature: 0.2,
  humanHandoff: true
});

agent.onMessage(async (msg) => {
  const response = await agent.generateContextualReply(msg);
  await msg.reply(response);
});`,

    amazon: `// HelpUS FBA Suite — Validação Amazon SP-API Feeds
import { AmazonSPAPI } from '@helpus/fba';

const sp = new AmazonSPAPI({ sellerId: 'AMZN_US_99812' });

const result = await sp.inventory.validateISIN({
  upcList: ['7891234567890', '7890987654321'],
  autoSubmitFeed: true
});`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-black pt-28 sm:pt-32 pb-16 px-4 sm:px-6 overflow-hidden border-b border-neutral-800/80">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8 text-center">
        
        {/* Release Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold text-white">HelpUS Studio 2.0</span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400">Automação Fiscal & Inteligência Artificial</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400 ml-1" />
        </div>

        {/* Clean Headline */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Tecnologia para empresas <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">exigentes e de alta performance.</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Plataforma corporativa para busca automatizada de NFS-e/CT-e em lote com certificado A1, atendimento autônomo de IA no WhatsApp e desenvolvimento web acelerado.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onExploreWork}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <span>Explorar Soluções</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-bold text-xs uppercase tracking-wider hover:border-neutral-700 transition-all flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>

        {/* Live Interactive Code Terminal */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-2xl overflow-hidden font-mono text-left mt-6">
          
          {/* Header Bar */}
          <div className="px-4 py-3 bg-neutral-900/80 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-neutral-800"></span>
                <span className="w-3 h-3 rounded-full bg-neutral-800"></span>
                <span className="w-3 h-3 rounded-full bg-neutral-800"></span>
              </div>
              <span className="text-xs text-neutral-400 flex items-center gap-1.5 font-bold">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>helpus-api-console</span>
              </span>
            </div>

            {/* Code Tabs */}
            <div className="flex items-center gap-1 bg-black p-1 rounded-lg border border-neutral-800 text-[11px]">
              <button
                onClick={() => setActiveTab('accounting')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  activeTab === 'accounting' ? 'bg-neutral-800 text-cyan-400 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                NFS-e Batch
              </button>
              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  activeTab === 'whatsapp' ? 'bg-neutral-800 text-cyan-400 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                WhatsApp IA
              </button>
              <button
                onClick={() => setActiveTab('amazon')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  activeTab === 'amazon' ? 'bg-neutral-800 text-cyan-400 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Amazon SP-API
              </button>
            </div>
          </div>

          {/* Snippet Output */}
          <div className="p-5 relative text-xs text-neutral-300 leading-relaxed overflow-x-auto bg-black">
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all cursor-pointer flex items-center gap-1 text-[11px]"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>

            <pre className="font-mono text-neutral-300">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-2.5 bg-neutral-900/50 border-t border-neutral-800/80 text-[11px] text-neutral-400 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Status: HTTP 200 OK • Vercel Edge</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Latência: 14ms</span>
              <span>mTLS A1: Ativo</span>
            </div>
          </div>

        </div>

        {/* Live Metrics Strip */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-neutral-800/80 text-left font-mono text-xs max-w-3xl mx-auto">
          <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-0.5">
            <div className="flex items-center gap-1.5 text-white font-bold text-xl">
              <span>67+</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <p className="text-neutral-500 uppercase tracking-wider text-[9px]">Módulos Ativos</p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-0.5">
            <div className="flex items-center gap-1.5 text-white font-bold text-xl">
              <span>99.9%</span>
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <p className="text-neutral-500 uppercase tracking-wider text-[9px]">Uptime Vercel Edge</p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-0.5">
            <div className="flex items-center gap-1.5 text-white font-bold text-xl">
              <span>100%</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-neutral-500 uppercase tracking-wider text-[9px]">Conformidade LGPD</p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-0.5">
            <div className="flex items-center gap-1.5 text-white font-bold text-xl">
              <span>3</span>
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <p className="text-neutral-500 uppercase tracking-wider text-[9px]">Idiomas (PT/EN/ES)</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

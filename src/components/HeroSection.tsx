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
    accounting: `// HelpUS Accounting — NFS-e & CT-e Batch API
import { HelpUS } from '@helpus/sdk';

const client = new HelpUS({ apiKey: process.env.HELPUS_KEY });

const result = await client.fiscal.downloadBatch({
  cnpj: '12.345.678/0001-90',
  period: '2026-09',
  certificateA1: 'mtls_encrypted_buffer',
  format: 'EXCEL_AND_ZIP'
});

console.log('NFS-e Processed:', result.totalProcessed); // 1,420 XMLs`,

    whatsapp: `// HelpUS WhatsApp IA — Neural Agent Workflow
import { WhatsAppIA } from '@helpus/ai';

const agent = new WhatsAppIA({
  model: 'helpus-neural-v2',
  temperature: 0.2,
  humanHandoff: true
});

agent.onMessage(async (msg) => {
  const reply = await agent.generateContextualResponse(msg);
  await msg.reply(reply);
});`,

    amazon: `// HelpUS FBA Suite — Amazon SP-API Feeds
import { AmazonSPAPI } from '@helpus/fba';

const sp = new AmazonSPAPI({ sellerId: 'AMZN_US_99812' });

const validation = await sp.inventory.validateISIN({
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
    <section className="relative bg-black pt-32 pb-20 px-6 overflow-hidden border-b border-neutral-900">
      
      {/* Resend Ambient Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-neutral-800/20 via-neutral-950/40 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Top Rainbow / Pill Release Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300 shadow-xl hover:border-neutral-700 transition-all cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">HelpUS Studio 2.0</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">Automações Fiscais & IA Corporativa</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 ml-1" />
          </div>
        </div>

        {/* Resend Display Headline */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]">
            Tecnologia para empresas <br className="hidden sm:inline" />
            <span className="text-neutral-400">exigentes.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            A plataforma para captura automatizada de NFS-e em lote com certificado A1, inteligência artificial autônoma no WhatsApp e desenvolvimento web de alta performance.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreWork}
              className="px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Explorar Soluções</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-semibold text-xs uppercase tracking-wider hover:border-neutral-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Resend Interactive Live Code Terminal / Preview Window */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-2xl overflow-hidden font-mono">
          
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 bg-neutral-900/60 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-neutral-800"></span>
                <span className="w-3 h-3 rounded-full bg-neutral-800"></span>
                <span className="w-3 h-3 rounded-full bg-neutral-800"></span>
              </div>
              <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>helpus-api-playground</span>
              </span>
            </div>

            {/* Code Tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-neutral-800 text-xs">
              <button
                onClick={() => setActiveTab('accounting')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'accounting' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                NFS-e Batch
              </button>
              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'whatsapp' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                WhatsApp IA
              </button>
              <button
                onClick={() => setActiveTab('amazon')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'amazon' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Amazon SP-API
              </button>
            </div>
          </div>

          {/* Code Viewer Body */}
          <div className="p-6 relative text-xs sm:text-sm text-neutral-300 leading-relaxed overflow-x-auto bg-black/60">
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all cursor-pointer flex items-center gap-1 text-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>

            <pre className="font-mono text-neutral-300">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>

          {/* Terminal Footer Status Bar */}
          <div className="px-6 py-3 bg-neutral-900/40 border-t border-neutral-800 text-xs text-neutral-400 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Status: HTTP 200 OK • Vercel Edge Cluster</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Latência: 12ms</span>
              <span>mTLS A1: Ativo</span>
            </div>
          </div>

        </div>

        {/* Live Metrics Grid */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-neutral-900 text-left font-mono text-xs max-w-4xl mx-auto">
          <div>
            <span className="text-2xl font-bold text-white flex items-center gap-1">
              <span>67+</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </span>
            <p className="text-neutral-500 uppercase tracking-wider text-[10px] mt-1">Módulos Ativos</p>
          </div>

          <div>
            <span className="text-2xl font-bold text-white flex items-center gap-1">
              <span>99.9%</span>
              <Zap className="w-4 h-4 text-cyan-400" />
            </span>
            <p className="text-neutral-500 uppercase tracking-wider text-[10px] mt-1">Uptime Vercel Edge</p>
          </div>

          <div>
            <span className="text-2xl font-bold text-white flex items-center gap-1">
              <span>100%</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </span>
            <p className="text-neutral-500 uppercase tracking-wider text-[10px] mt-1">Conformidade LGPD</p>
          </div>

          <div>
            <span className="text-2xl font-bold text-white flex items-center gap-1">
              <span>3</span>
              <Globe className="w-4 h-4 text-indigo-400" />
            </span>
            <p className="text-neutral-500 uppercase tracking-wider text-[10px] mt-1">Idiomas (PT / EN / ES)</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

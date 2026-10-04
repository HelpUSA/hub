import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, ShieldCheck, Cpu, Database, Layout } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface ServiceItem {
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: any;
}

interface ServicesAccordionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const ServicesAccordion: React.FC<ServicesAccordionProps> = ({ lang: _lang, onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services: ServiceItem[] = [
    {
      number: '01',
      title: 'Automação Fiscal & Contábil NFS-e',
      category: 'Fiscal Tech & mTLS A1',
      description: 'Engenharia de busca, captura e validação em lote de NFS-e/CT-e integrada com prefeituras, certificados digitais A1 e geração automatizada de relatórios em Excel.',
      features: ['Captura Automática de NFS-e/CT-e', 'Validação mTLS A1 Criptografada', 'Exportação em Lote ZIP & Excel', 'APIs REST de Alta Performance'],
      icon: Database
    },
    {
      number: '02',
      title: 'Inteligência Artificial & Chatbots Neural',
      category: 'AI Agents & LLM',
      description: 'Agentes autônomos treinados com dados corporativos para atendimento 24/7 via WhatsApp Meta Cloud API, síntese de voz e assistentes de pequisa com fontes citadas.',
      features: ['WhatsApp Meta Cloud API & Baileys', 'RAG Neural com Busca Verificável', 'Handoff Humano em Tempo Real', 'Estúdio de Síntese de Voz'],
      icon: Cpu
    },
    {
      number: '03',
      title: 'E-commerce & Amazon SP-API Suite',
      category: 'Marketplace Automation',
      description: 'Suíte avançada para vendedores Amazon FBA/FBM com sincronização em tempo real de inventário, validação de códigos EAN/UPC e submissão massiva de feeds.',
      features: ['Amazon Selling Partner API (SP-API)', 'Automação FBA & Validação ISIN', 'Submissão Segura de Feeds XML', 'Dashboards de Performance'],
      icon: ShieldCheck
    },
    {
      number: '04',
      title: 'Desenvolvimento Web & Platform Engineering',
      category: 'Full-Stack React & Next.js 15',
      description: 'Criação de ecossistemas web corporativos, plataformas SaaS e portais de alta conversão construídos com React 19, Next.js 15 e infraestrutura Vercel Edge.',
      features: ['Next.js 15 & Tailwind CSS', 'Renderização Serverless na Borda', 'SEO Avançado & Carregamento Ultra Rápido', 'Redundância Cloudflare anti-DDoS'],
      icon: Layout
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="servicos" className="bg-[#08090a] py-24 px-6 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>CAPACIDADES & SERVIÇOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              O Que Desenvolvemos
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Engenharia de software moderna, sistemas de automação fiscal e inteligência artificial aplicados à sua operação.
          </p>
        </div>

        {/* Linear Accordion Container */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const IconComp = service.icon;
            return (
              <div key={service.number} className="py-8 transition-colors hover:bg-white/[0.01]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-lg font-mono text-neutral-500 group-hover:text-purple-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-purple-400">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-0.5">
                          {service.category}
                        </span>
                        <h3 className="text-xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-neutral-400 group-hover:border-purple-400 group-hover:text-purple-400 transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Linear Content */}
                {isOpen && (
                  <div className="mt-8 pl-12 sm:pl-20 pr-4 grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-white/[0.04]">
                    <div className="md:col-span-2 space-y-4">
                      <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                        {service.description}
                      </p>
                      <button
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 cursor-pointer pt-2"
                      >
                        <span>Solicitar orçamento para este módulo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="bg-[#121316]/60 p-5 rounded-2xl border border-white/[0.08] space-y-3 font-mono text-xs">
                      <span className="text-neutral-400 uppercase tracking-wider block font-bold border-b border-white/[0.08] pb-2 text-[10px]">
                        Recursos Chave:
                      </span>
                      <ul className="space-y-2 text-neutral-300">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesAccordion;

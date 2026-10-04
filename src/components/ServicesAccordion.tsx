import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, Database, Cpu, ShieldCheck, Layout } from 'lucide-react';
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
      category: 'Fiscal Tech & Certificados A1',
      description: 'Sistemas automatizados para captura de NFS-e, CT-e, validação de Certificados Digitais A1, integração com prefeituras e geração de planilhas consolidadas em lote.',
      features: ['Captura Automática de NFS-e/CT-e', 'Suporte a Certificados Digitais A1', 'Relatórios Customizados em Excel', 'Integração via API REST'],
      icon: Database
    },
    {
      number: '02',
      title: 'Inteligência Artificial & Chatbots Neural',
      category: 'AI & Automation',
      description: 'Agentes virtuais autônomos treinados para suporte ao cliente, pré-vendas e atendimento operacional 24/7 via WhatsApp Meta Cloud API, Telegram e web.',
      features: ['WhatsApp Meta Cloud API', 'Integração LLM (OpenAI / Gemini)', 'Handoff Humano em Tempo Real', 'Base de Conhecimento Customizada'],
      icon: Cpu
    },
    {
      number: '03',
      title: 'E-commerce & Amazon SP-API Suite',
      category: 'Marketplace Automation',
      description: 'Soluções avançadas para vendedores Amazon FBA/FBM, sincronização de inventário, validação de códigos EAN/UPC e submissão massiva de feeds.',
      features: ['Amazon Selling Partner API (SP-API)', 'Automação FBA & Envio de Feeds', 'Validação e Consulta de EAN/ISIN', 'Dashboards de Performance'],
      icon: ShieldCheck
    },
    {
      number: '04',
      title: 'Desenvolvimento Web & Platform Engineering',
      category: 'Full-Stack Engineering',
      description: 'Criação de ecossistemas web corporativos, aplicações SaaS e páginas de alta conversão construídas com React, Next.js, Tailwind CSS e arquitetura serverless.',
      features: ['Next.js 15 & React 19', 'Design Responsivo & Dark Mode Elegante', 'Otimização SEO & Speed Ultra Rápido', 'Hospedagem & CDN Vercel Edge'],
      icon: Layout
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="servicos" className="bg-black py-20 px-4 sm:px-6 border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800/80 pb-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              CAPACIDADES & SERVIÇOS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              O Que Fazemos
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
            Engenharia de software moderna, inteligência artificial e estratégias digitais focadas em escalar o seu negócio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-neutral-800/80 border-t border-b border-neutral-800/80">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const IconComp = service.icon;
            return (
              <div key={service.number} className="py-6 transition-colors hover:bg-neutral-950/40">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="text-base sm:text-xl font-mono text-neutral-500 group-hover:text-cyan-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-0.5">
                          {service.category}
                        </span>
                        <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="mt-6 pl-8 sm:pl-16 pr-2 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-900">
                    <div className="md:col-span-2 space-y-3">
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                        {service.description}
                      </p>
                      <button
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 hover:text-cyan-300 pt-1 cursor-pointer"
                      >
                        <span>Solicitar Orçamento para este serviço</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80 space-y-2 font-mono text-xs">
                      <span className="text-neutral-500 uppercase tracking-wider block font-bold border-b border-neutral-800 pb-1.5 text-[10px]">
                        Recursos Chave:
                      </span>
                      <ul className="space-y-1.5 text-neutral-300 text-[11px]">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
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

import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface ServiceItem {
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
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
      title: 'Automação Fiscal & Contábil',
      category: 'Fiscal Tech',
      description: 'Sistemas automatizados para captura de NFS-e, CT-e, validação de Certificados Digitais A1, integração com prefeituras e geração de planilhas consolidadas em lote.',
      features: ['Captura Automática de NFS-e/CT-e', 'Suporte a Certificados Digitais A1', 'Relatórios Customizados em Excel', 'Integração via API REST']
    },
    {
      number: '02',
      title: 'Inteligência Artificial & Chatbots Neural',
      category: 'AI & Automation',
      description: 'Agentes virtuais autônomos treinados para suporte ao cliente, pré-vendas e atendimento operacional 24/7 via WhatsApp Meta Cloud API, Telegram e web.',
      features: ['WhatsApp Meta Cloud API', 'Integração LLM (OpenAI / Gemini)', 'Handoff Humano em Tempo Real', 'Base de Conhecimento Customizada']
    },
    {
      number: '03',
      title: 'E-commerce & Amazon SP-API',
      category: 'Marketplace Automation',
      description: 'Soluções avançadas para vendedores Amazon FBA/FBM, sincronização de inventário, validação de códigos EAN/UPC e submissão massiva de feeds.',
      features: ['Amazon Selling Partner API (SP-API)', 'Automação FBA & Envio de Feeds', 'Validação e Consulta de EAN/ISIN', 'Dashboards de Performance']
    },
    {
      number: '04',
      title: 'Desenvolvimento Web & Digital Branding',
      category: 'Full-Stack Engineering',
      description: 'Criação de ecossistemas web corporativos, aplicações SaaS e páginas de alta conversão construídas com React, Next.js, Tailwind CSS e arquitetura serverless.',
      features: ['Next.js 15 & React 19', 'Design Responsivo & Pitch-Black Dark Mode', 'Otimização SEO & Ultra Speed', 'Hospedagem & CDN Vercel']
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="servicos" className="bg-black py-24 px-6 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
              CAPACIDADES & SERVIÇOS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              O Que Fazemos
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono">
            Engenharia de software moderna, inteligência artificial e estratégias digitais focadas em escalar o seu negócio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-neutral-900 border-t border-b border-neutral-900">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={service.number} className="py-8 transition-colors hover:bg-neutral-950/40">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-6 sm:gap-12">
                    <span className="text-xl sm:text-2xl font-mono text-neutral-600 group-hover:text-amber-400 transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                        {service.category}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:border-amber-400 group-hover:text-amber-400 transition-all">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="mt-8 pl-12 sm:pl-20 pr-4 grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-neutral-900/60">
                    <div className="md:col-span-2 space-y-4">
                      <p className="text-base text-neutral-300 leading-relaxed font-normal">
                        {service.description}
                      </p>
                      <button
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 pt-2 cursor-pointer"
                      >
                        <span>Solicitar Orçamento para este serviço</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800/80 space-y-3 font-mono text-xs">
                      <span className="text-neutral-400 uppercase tracking-wider block font-bold border-b border-neutral-800 pb-2">
                        Recursos Chave:
                      </span>
                      <ul className="space-y-2 text-neutral-300">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
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

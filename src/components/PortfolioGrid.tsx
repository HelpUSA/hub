import React from 'react';
import { ArrowUpRight, Code2, Bot, Briefcase, Building2, Globe2 } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface PortfolioItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  tags: string[];
  icon: any;
}

interface PortfolioGridProps {
  lang: Language;
  onSelectProject: (id: string) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ lang: _lang, onSelectProject }) => {
  const projects: PortfolioItem[] = [
    {
      id: 'accounting',
      number: '01',
      title: 'HelpUS Accounting',
      category: 'Automação Fiscal & Contábil',
      description: 'Plataforma universal de busca, captura e download em lote de NFS-e/CT-e com suporte a certificado A1 e relatórios em Excel.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://accounting.helpusbr.com',
      tags: ['Next.js 15', 'NFS-e', 'mTLS A1', 'Excel Batch'],
      icon: Code2
    },
    {
      id: 'helpus-whatsapp-ia',
      number: '02',
      title: 'HelpUS WhatsApp IA',
      category: 'Inteligência Artificial & Chatbots',
      description: 'Atendimento neural inteligente 24/7 integrado via Meta Cloud API e Baileys com respostas contextuais e handoff humano.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://helpusbr.com',
      tags: ['Node.js', 'Meta Cloud API', 'Baileys', 'IA Generativa'],
      icon: Bot
    },
    {
      id: 'helpus-fba-suite',
      number: '03',
      title: 'HelpUS FBA Suite',
      category: 'E-commerce & Amazon SP-API',
      description: 'Suíte de automação para vendedores Amazon FBA com validação de ISIN/UPC e submissão segura de feeds de produtos.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://fba.helpusbr.com',
      tags: ['Python', 'SP-API Amazon', 'FBA', 'Inventory'],
      icon: Briefcase
    },
    {
      id: 'realestate',
      number: '04',
      title: 'HelpUS RealEstate',
      category: 'SaaS Corporativo & Imobiliária',
      description: 'Plataforma de gestão imobiliária, captação de clientes, corretores e imóveis com banco de dados Prisma e Next.js.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://realestate.helpusbr.com',
      tags: ['Next.js 15', 'Prisma ORM', 'Imóveis', 'Google Auth'],
      icon: Building2
    },
    {
      id: 'publicarte',
      number: '05',
      title: 'Publicarte Gráfica',
      category: 'SaaS Comercial & Orçamentos',
      description: 'Sistema de gestão de orçamentos e pedidos para gráfica rápida com autenticação social Google e relatórios.',
      image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://publicarte.helpusbr.com',
      tags: ['React', 'Vite', 'Gráfica', 'Google OAuth'],
      icon: Globe2
    },
    {
      id: 'ariticumchales',
      number: '06',
      title: 'Ariticum Chalés',
      category: 'Web Studio & Pousada',
      description: 'Portal de reservas e experiência digital para a Pousada Ariticum Chalés com design responsivo e alta conversão.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://ariticumchales.helpusbr.com',
      tags: ['Vite', 'React', 'Pousada', 'Vercel Edge'],
      icon: Building2
    }
  ];

  return (
    <section id="trabalhos" className="bg-[#0b0d14] py-24 px-6 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              PORTFÓLIO & SOLUÇÕES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Trabalhos em Destaque
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-sans leading-relaxed">
            Projetos digitais desenvolvidos com foco em alta performance, identidade marcante e resultados operacionais.
          </p>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const IconComp = proj.icon;
            return (
              <div 
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className="group cursor-pointer rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 space-y-6"
              >
                {/* Cover Image Container */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Badge Number */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-white border border-slate-800">
                    {proj.number}
                  </div>

                  {/* Overlay CTA */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2">
                      <span>Ver Projeto Detalhado</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Text Info */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase">
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{proj.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-normal line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tags.map(t => (
                      <span key={t} className="bg-slate-800/80 px-2.5 py-1 rounded-lg text-[10px] font-mono text-slate-300 border border-slate-700/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PortfolioGrid;

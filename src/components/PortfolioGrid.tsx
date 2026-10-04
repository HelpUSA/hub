import React from 'react';
import { ArrowUpRight, Bot, Code2, Briefcase, Building2, Globe2 } from 'lucide-react';
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
  featured?: boolean;
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
      description: 'Plataforma universal para busca, captura e download em lote de NFS-e/CT-e com suporte a certificado A1 e relatórios customizados em Excel.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://accounting.helpusbr.com',
      tags: ['Next.js 15', 'NFS-e', 'mTLS A1', 'Excel Batch'],
      icon: Code2,
      featured: true
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

  const featuredProject = projects.find(p => p.featured) || projects[0];
  const regularProjects = projects.filter(p => p.id !== featuredProject.id);

  return (
    <section id="trabalhos" className="bg-[#08090a] py-24 px-6 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>PORTFÓLIO & SOLUÇÕES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Trabalhos em Destaque
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Ecossistemas web de alta performance desenvolvidos com arquitetura moderna e foco em resultados operacionais.
          </p>
        </div>

        {/* Linear Bento Grid Showcase */}
        <div className="space-y-6">
          
          {/* Featured Large Card (Linear Main Bento) */}
          <div 
            onClick={() => onSelectProject(featuredProject.id)}
            className="group relative rounded-3xl bg-[#121316]/80 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white font-bold">
                    {featuredProject.number}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {featuredProject.category}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {featuredProject.title}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-purple-300">
                    <span>Ver Projeto Detalhado</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/10">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
              </div>

            </div>
          </div>

          {/* Regular Bento Grid Cards (2 columns on medium, 3 on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((proj) => {
              const IconComp = proj.icon;
              return (
                <div 
                  key={proj.id}
                  onClick={() => onSelectProject(proj.id)}
                  className="group relative rounded-3xl bg-[#121316]/60 border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between p-6 space-y-6 hover:shadow-2xl"
                >
                  {/* Top Image Preview */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08]">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono text-white font-bold border border-white/10">
                      {proj.number}
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 uppercase">
                        <IconComp className="w-3.5 h-3.5 text-purple-400" />
                        <span>{proj.category}</span>
                      </div>

                      <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                        <span>{proj.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-purple-300 transition-colors" />
                      </h4>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tags.slice(0, 3).map(t => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-neutral-400">
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

      </div>
    </section>
  );
};

export default PortfolioGrid;

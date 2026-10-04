import { ArrowUpRight } from 'lucide-react';
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
      tags: ['Next.js 15', 'NFS-e', 'mTLS A1', 'Excel Batch']
    },
    {
      id: 'helpus-whatsapp-ia',
      number: '02',
      title: 'HelpUS WhatsApp IA',
      category: 'Inteligência Artificial & Chatbots',
      description: 'Atendimento neural inteligente 24/7 integrado via Meta Cloud API e Baileys com respostas contextuais e handoff humano.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://helpusbr.com',
      tags: ['Node.js', 'Meta Cloud API', 'Baileys', 'IA Generativa']
    },
    {
      id: 'helpus-fba-suite',
      number: '03',
      title: 'HelpUS FBA Suite',
      category: 'E-commerce & Amazon SP-API',
      description: 'Suíte de automação para vendedores Amazon FBA com validação de ISIN/UPC e submissão segura de feeds de produtos.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://fba.helpusbr.com',
      tags: ['Python', 'SP-API Amazon', 'FBA', 'Inventory']
    },
    {
      id: 'realestate',
      number: '04',
      title: 'HelpUS RealEstate',
      category: 'SaaS Corporativo & Imobiliária',
      description: 'Plataforma de gestão imobiliária, captação de clientes, corretores e imóveis com banco de dados Prisma e Next.js.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://realestate.helpusbr.com',
      tags: ['Next.js 15', 'Prisma ORM', 'Imóveis', 'Google Auth']
    },
    {
      id: 'publicarte',
      number: '05',
      title: 'Publicarte Gráfica',
      category: 'SaaS Comercial & Orçamentos',
      description: 'Sistema de gestão de orçamentos e pedidos para gráfica rápida com autenticação social Google e relatórios.',
      image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://publicarte.helpusbr.com',
      tags: ['React', 'Vite', 'Gráfica', 'Google OAuth']
    },
    {
      id: 'ariticumchales',
      number: '06',
      title: 'Ariticum Chalés',
      category: 'Web Studio & Pousada',
      description: 'Portal de reservas e experiência digital para a Pousada Ariticum Chalés com design responsivo e alta conversão.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://ariticumchales.helpusbr.com',
      tags: ['Vite', 'React', 'Pousada', 'Vercel']
    }
  ];

  return (
    <section id="trabalhos" className="bg-black py-24 px-6 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
              PORTFÓLIO & SOLUÇÕES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Trabalhos em Destaque
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono">
            Projetos digitais desenvolvidos com foco em alta performance, identidade marcante e resultados operacionais.
          </p>
        </div>

        {/* Portfolio Grid - Large Editorial Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => onSelectProject(proj.id)}
              className="group cursor-pointer space-y-6"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-white border border-neutral-800">
                  {proj.number}
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2">
                    <span>Ver Projeto Detalhado</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 uppercase">
                  <span>{proj.category}</span>
                  <div className="flex gap-2">
                    {proj.tags.slice(0, 2).map(t => (
                      <span key={t} className="bg-neutral-900 px-2 py-0.5 rounded text-[10px] text-neutral-400 border border-neutral-800">{t}</span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>{proj.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {proj.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioGrid;

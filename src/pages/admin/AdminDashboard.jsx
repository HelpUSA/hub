import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBullhorn,
  FaUsersCog,
  FaExternalLinkAlt,
  FaSignOutAlt,
  FaGlobe,
  FaBoxes,
  FaSearch,
  FaRobot,
  FaTachometerAlt,
  FaHeadset,
  FaShareAlt,
  FaFilePowerpoint,
  FaBrain,
  FaMoneyCheckAlt,
  FaBook,
  FaKey,
  FaLaptopCode,
} from 'react-icons/fa';
import { useGoogleAuth } from '../../shared/googleAuth/useGoogleAuth';
import { GoogleLoginButton } from '../../shared/googleAuth/GoogleLoginButton';

const SUPERADMIN_EMAIL = 'helpus.ecommerce@gmail.com';

export default function AdminDashboard() {
  const { user, isAuthenticated, isLoading, error, login, logout } = useGoogleAuth({
    allowedEmails: [SUPERADMIN_EMAIL],
  });

  const isSuperAdmin = isAuthenticated && user?.email?.toLowerCase().trim() === SUPERADMIN_EMAIL;

  // Tela de bloqueio caso não seja o SuperAdmin
  if (!isSuperAdmin) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl text-center space-y-6">
          <div className="text-center space-y-2">
            <div className="relative w-14 h-14 mx-auto rounded-full border-2 border-blue-400 overflow-hidden shadow-lg shadow-blue-500/20">
              <img
                src="/img/helpus-logo.png"
                alt="HelpUS Logo"
                className="w-full h-full object-contain bg-slate-950"
              />
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">Login HelpUS</h1>
            <p className="text-xs text-slate-400">
              Acesso restrito ao painel e mesa de operações do ecossistema.
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3.5 rounded-xl text-left leading-relaxed">
              {error}
            </div>
          )}

          <div className="pt-2">
            <GoogleLoginButton
              onClick={login}
              isLoading={isLoading}
              label="Continuar com o Google"
              variant="light"
              className="text-slate-900 font-bold"
            />
          </div>

          <div className="pt-4 border-t border-slate-800">
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition">
              &larr; Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Definição dos módulos por categoria
  const modulesCategories = [
    {
      category: 'E-commerce, Vendas & Operações de Mercado',
      badge: 'Core Business',
      items: [
        {
          id: 'fba-suite',
          name: 'HelpUS FBA Suite',
          badge: 'Amazon US & BR',
          badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          description: 'Gestão operacional de e-commerce, Deal Finder, cálculo de taxas FBA/DBA, unit economics e rastreio de fornecedores.',
          url: 'https://helpus-fba-suite.vercel.app',
          icon: <FaBoxes className="text-emerald-400 text-2xl" />,
          iconBg: 'bg-emerald-600/20 border-emerald-500/30',
          btnText: 'Acessar FBA Suite',
          btnColor: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30 text-white',
          highlight: true
        },
        {
          id: 'advert',
          name: 'Advert HelpUS BR',
          badge: 'AdTech & Mídia com IA',
          badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
          description: 'Plataforma proprietária de campanhas de publicidade com IA, geração de criativos, calendário editorial e esteira de aprovação.',
          url: 'https://advert.helpusbr.com/brands',
          icon: <FaBullhorn className="text-blue-400 text-2xl" />,
          iconBg: 'bg-blue-600/20 border-blue-500/30',
          btnText: 'Acessar Advert Hub',
          btnColor: 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/30 text-white',
          highlight: true
        },
        {
          id: 'post',
          name: 'HelpUS Post & Social',
          badge: 'Publicações & Redes',
          badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
          description: 'Agendamento e automação de postagens, gerenciamento de distribuição social e engajamento multicanal.',
          url: 'https://post.helpusbr.com',
          icon: <FaShareAlt className="text-indigo-400 text-2xl" />,
          iconBg: 'bg-indigo-600/20 border-indigo-500/30',
          btnText: 'Acessar Post Hub',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        },
        {
          id: 'pay',
          name: 'Pay & PIX Gateway',
          badge: 'Pagamentos & Checkout',
          badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
          description: 'Gateway financeiro, liquidação via PIX, processamento de pagamentos e checkout integrado da HelpUS.',
          url: 'https://pay.helpusbr.com',
          icon: <FaMoneyCheckAlt className="text-teal-400 text-2xl" />,
          iconBg: 'bg-teal-600/20 border-teal-500/30',
          btnText: 'Acessar Pay Gateway',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        }
      ]
    },
    {
      category: 'Inteligência Artificial, Busca & Apresentações',
      badge: 'AI Ecosystem',
      items: [
        {
          id: 'agent',
          name: 'AI Agent Studio',
          badge: 'Agentes Autônomos',
          badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
          description: 'Ambiente de criação, orquestração e monitoramento de agentes inteligentes com LLMs para suporte e automação.',
          url: 'https://agent.helpusbr.com',
          icon: <FaRobot className="text-purple-400 text-2xl" />,
          iconBg: 'bg-purple-600/20 border-purple-500/30',
          btnText: 'Acessar Agent Studio',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        },
        {
          id: 'search',
          name: 'HelpUS Search Engine',
          badge: 'Motor de Busca',
          badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
          description: 'Buscador indexado e motor de pesquisa neural interno para informações, documentos e bases de conhecimento.',
          url: 'https://search.helpusbr.com',
          icon: <FaSearch className="text-cyan-400 text-2xl" />,
          iconBg: 'bg-cyan-600/20 border-cyan-500/30',
          btnText: 'Acessar Search Engine',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        },
        {
          id: 'ai-core',
          name: 'HelpUS AI Cloud (NexosAI)',
          badge: 'Rede Neural & Mesh',
          badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
          description: 'Núcleo de inteligência artificial central, conectores de modelos avançados e pipeline de inferência.',
          url: 'https://ai.helpusbr.com',
          icon: <FaBrain className="text-violet-400 text-2xl" />,
          iconBg: 'bg-violet-600/20 border-violet-500/30',
          btnText: 'Acessar AI Cloud',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        },
        {
          id: 'slides',
          name: 'HelpUS Slides',
          badge: 'Pitch Decks & Apresentações',
          badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
          description: 'Gerador e apresentador de slides corporativos, pitch decks executivos e propostas comerciais.',
          url: 'https://slides.helpusbr.com',
          icon: <FaFilePowerpoint className="text-rose-400 text-2xl" />,
          iconBg: 'bg-rose-600/20 border-rose-500/30',
          btnText: 'Acessar Slides Hub',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        }
      ]
    },
    {
      category: 'Governança, Suporte & Infraestrutura Central',
      badge: 'Management & Support',
      items: [
        {
          id: 'admin-infra',
          name: 'Admin Dashboard (Infra)',
          badge: 'Monitoramento Uptime',
          badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
          description: 'Painel central de infraestrutura, supervisão de saúde dos subdomínios, latência de servidores e status.',
          url: 'https://admin.helpusbr.com',
          icon: <FaTachometerAlt className="text-blue-400 text-2xl" />,
          iconBg: 'bg-blue-600/20 border-blue-500/30',
          btnText: 'Acessar Painel de Infra',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        },
        {
          id: 'support',
          name: 'HelpUS Support Hub',
          badge: 'HelpDesk & Chamados',
          badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
          description: 'Central unificada de atendimento ao cliente, tickets de suporte, fila de resolução e SAC inteligente.',
          url: 'https://support.helpusbr.com',
          icon: <FaHeadset className="text-sky-400 text-2xl" />,
          iconBg: 'bg-sky-600/20 border-sky-500/30',
          btnText: 'Acessar Suporte',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        },
        {
          id: 'docs',
          name: 'Developer API Docs',
          badge: 'Documentação Técnica',
          badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
          description: 'Documentação técnica de APIs, contratos de integração, guias para desenvolvedores e endpoints.',
          url: 'https://docs.helpusbr.com',
          icon: <FaBook className="text-amber-400 text-2xl" />,
          iconBg: 'bg-amber-600/20 border-amber-500/30',
          btnText: 'Acessar Docs API',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        },
        {
          id: 'auth',
          name: 'Single Sign-On (Auth)',
          badge: 'Identidade & SSO',
          badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
          description: 'Central de autenticação unificada, tokens de segurança, OAuth e controle de credenciais corporativas.',
          url: 'https://auth.helpusbr.com',
          icon: <FaKey className="text-yellow-400 text-2xl" />,
          iconBg: 'bg-yellow-600/20 border-yellow-500/30',
          btnText: 'Acessar Auth Central',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        },
        {
          id: 'app',
          name: 'HelpUS App Web',
          badge: 'Portal do Usuário',
          badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
          description: 'Aplicação web principal para clientes e assinantes interagirem com os serviços do ecossistema.',
          url: 'https://app.helpusbr.com',
          icon: <FaLaptopCode className="text-indigo-400 text-2xl" />,
          iconBg: 'bg-indigo-600/20 border-indigo-500/30',
          btnText: 'Acessar App Web',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        },
        {
          id: 'usuarios-locais',
          name: 'Gestão de Usuários do Hub',
          badge: 'Controle de Acessos',
          badgeColor: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
          description: 'Administração de contas com permissões internas, administradores do hub e controle de acesso.',
          internalRoute: '/admin/usuarios',
          icon: <FaUsersCog className="text-slate-300 text-2xl" />,
          iconBg: 'bg-slate-800 border-slate-700',
          btnText: 'Gerenciar Usuários',
          btnColor: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
        }
      ]
    }
  ];

  const totalServices = modulesCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Topo do Painel */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/img/helpus-logo.png"
              alt="HelpUS Logo"
              className="w-10 h-10 object-contain rounded-full border border-blue-400/40 shadow-sm"
            />
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-2">
                Help<span className="text-blue-500">US</span> Administration Hub
              </span>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block">
                ● SuperAdmin Ativo
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-slate-200">{user?.email}</span>
            </div>

            <Link
              to="/"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition flex items-center gap-1.5"
            >
              <FaGlobe /> Site Principal
            </Link>

            <button
              onClick={logout}
              className="px-3.5 py-2 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-xs font-semibold text-red-400 border border-red-500/30 transition flex items-center gap-1.5 cursor-pointer"
            >
              <FaSignOutAlt /> Sair
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo do Dashboard */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10 w-full space-y-12">
        {/* Banner de Boas-Vindas */}
        <section className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-950/40 border border-blue-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
              Mesa de Operações & Gestão Central
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portal de Administração & Serviços HelpUS
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Bem-vindo, <strong>SuperAdmin</strong>. A partir deste console você acessa diretamente todos os módulos do
              ecossistema: comércio internacional e FBA, AdTech, agentes de IA, gateways de pagamento, infraestrutura e suporte.
            </p>
          </div>
        </section>

        {/* Categorias de Módulos */}
        {modulesCategories.map((cat, idx) => (
          <section key={idx} className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                  {cat.category}
                </h2>
                <span className="text-xs text-slate-400">Total: {cat.items.length} módulos disponíveis</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300">
                {cat.badge}
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className={`bg-slate-900/90 border rounded-3xl p-6 shadow-xl flex flex-col justify-between hover:border-slate-600 transition-all duration-300 group ${
                    item.highlight ? 'border-blue-500/50 hover:border-blue-400 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/20' : 'border-slate-800'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.iconBg}`}>
                        {item.icon}
                      </div>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition">
                        {item.name}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80">
                    {item.internalRoute ? (
                      <Link
                        to={item.internalRoute}
                        className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border transition ${item.btnColor}`}
                      >
                        {item.btnText}
                      </Link>
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border transition shadow-md ${item.btnColor}`}
                      >
                        <FaExternalLinkAlt className="text-[10px]" /> {item.btnText}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

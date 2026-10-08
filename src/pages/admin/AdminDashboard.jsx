// src/pages/admin/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBullhorn,
  FaUsersCog,
  FaExternalLinkAlt,
  FaSignOutAlt,
  FaLock,
  FaGlobe,
  FaRobot,
  FaCalendarAlt,
  FaCheckDouble,
  FaChartLine,
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
          <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/40 rounded-2xl flex items-center justify-center mx-auto text-blue-400">
            <FaLock className="text-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-white">Área Administrativa</h1>
            <p className="text-sm text-slate-400 mt-2">
              Acesso exclusivo para o SuperAdmin do ecossistema HelpUS.
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
              label="Entrar com Google (SuperAdmin)"
              variant="dark"
              className="bg-blue-600 hover:bg-blue-700 text-white border-blue-500/50"
            />
          </div>

          <p className="text-[11px] text-slate-500 font-mono">
            Apenas autorizado para: <span className="text-slate-400">{SUPERADMIN_EMAIL}</span>
          </p>

          <div className="pt-4 border-t border-slate-800">
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition">
              &larr; Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Painel Principal de Apresentação Administrativa
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
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10 w-full space-y-10">
        {/* Banner de Boas-Vindas */}
        <section className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-950/40 border border-blue-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
              Mesa de Operações & Gestão Central
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Apresentação da Área Administrativa HelpUS
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Bem-vindo, <strong>SuperAdmin</strong>. A partir deste painel você coordena as soluções do ecossistema,
              supervisiona os portais de clientes e acessa diretamente as plataformas internas de automação e publicidade.
            </p>
          </div>
        </section>

        {/* Grade de Aplicações Administrativas */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Aplicações & Módulos da Gestão
            </h2>
            <span className="text-xs text-slate-400">Total: 2 Módulos</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* CARD 1: ADVERT (DESTAQUE MÁXIMO) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border-2 border-blue-500/60 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-blue-400 transition-all duration-300">
              <div className="absolute top-4 right-4 bg-blue-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                ⭐ Em Destaque
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-2xl">
                  <FaBullhorn />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-300 transition">
                      Advert HelpUS BR
                    </h3>
                    <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      Next.js • Vercel
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Plataforma proprietária de operações de publicidade e marketing com IA para marcas, campanhas,
                    rascunhos de conteúdo, calendário editorial e esteira de aprovações sem intermediários.
                  </p>
                </div>

                <div className="grid sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-slate-950/70 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <FaRobot className="text-blue-400" /> IA Watcher
                  </div>
                  <div className="bg-slate-950/70 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <FaCalendarAlt className="text-green-400" /> Calendário
                  </div>
                  <div className="bg-slate-950/70 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <FaCheckDouble className="text-amber-400" /> Aprovações
                  </div>
                  <div className="bg-slate-950/70 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <FaChartLine className="text-purple-400" /> Relatórios
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap gap-3">
                <a
                  href="https://advert-coral.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-600/30 flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Acessar Aplicação Advert (Vercel)
                </a>
                <a
                  href="https://advert.helpusbr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition flex items-center gap-2"
                >
                  <FaGlobe /> Domínio Corporativo
                </a>
                <a
                  href="https://github.com/HelpUSA/advert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center gap-2"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* CARD 2: GESTÃO DE USUÁRIOS */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between hover:border-slate-700 transition">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl">
                  <FaUsersCog />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Contas & Usuários</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    Listagem completa de contas, gerenciamento de permissões e cadastro de novos administradores do ecossistema HelpUS.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <Link
                  to="/admin/usuarios"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <FaUsersCog /> Gerenciar Usuários
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

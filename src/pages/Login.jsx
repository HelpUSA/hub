// arquivo: src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleAuth } from '../shared/googleAuth/useGoogleAuth';
import { GoogleLoginButton } from '../shared/googleAuth/GoogleLoginButton';

const SUPERADMIN_EMAIL = 'helpus.ecommerce@gmail.com';

const Login = () => {
  const navigate = useNavigate();

  const {
    login: loginGoogle,
    isLoading: googleLoading,
    error: googleError,
  } = useGoogleAuth({
    allowedEmails: [SUPERADMIN_EMAIL],
    onSuccess: () => {
      // Abre a nova janela / aba com o painel administrativo
      window.open('/admin', '_blank');
      navigate('/admin');
    },
  });

  const displayError = googleError;

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-slate-100 px-4 py-16">
      <div className="bg-slate-900 border border-slate-800 shadow-2xl rounded-3xl p-8 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <img
            src="/img/helpus-logo.png"
            alt="HelpUS Logo"
            className="w-12 h-12 mx-auto rounded-full border border-blue-400/40 object-contain shadow-md"
          />
          <h2 className="text-2xl font-extrabold text-white">Login HelpUS</h2>
          <p className="text-xs text-slate-400">
            Acesso ao painel administrativo e ecossistema HelpUS
          </p>
        </div>

        {displayError && (
          <p className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded-xl text-center leading-relaxed">
            {displayError}
          </p>
        )}

        {/* Botão Google Padrão SuperAdmin Exclusivo */}
        <div className="space-y-4 pt-2">
          <GoogleLoginButton
            onClick={loginGoogle}
            isLoading={googleLoading}
            label="Entrar com o Google"
            variant="dark"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white border-blue-500/50 py-3 text-sm shadow-lg font-medium"
          />

          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 text-center space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
              Acesso Restrito
            </span>
            <p className="text-xs text-slate-300 font-mono">
              {SUPERADMIN_EMAIL}
            </p>
            <p className="text-[10px] text-slate-400">
              Ambiente protegido. Apenas o SuperAdmin configurado tem permissão para acessar o painel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

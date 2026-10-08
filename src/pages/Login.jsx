// arquivo: src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../services/api';
import { useGoogleAuth } from '../shared/googleAuth/useGoogleAuth';
import { GoogleLoginButton } from '../shared/googleAuth/GoogleLoginButton';

const SUPERADMIN_EMAIL = 'helpus.ecommerce@gmail.com';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const {
    login: loginGoogle,
    isLoading: googleLoading,
    error: googleError,
  } = useGoogleAuth({
    allowedEmails: [SUPERADMIN_EMAIL],
    onSuccess: (usr) => {
      // Abre a nova janela / aba com o painel administrativo
      window.open('/admin', '_blank');
      navigate('/admin');
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro('');

    try {
      // 🔁 EndPoint ajustado: /users/login
      const resposta = await apiFetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await resposta.json();

      if (resposta.ok && dados.token) {
        localStorage.setItem('token', dados.token);
        localStorage.setItem('usuario', JSON.stringify(dados.usuario));
        window.open('/admin', '_blank');
        navigate('/admin');
      } else {
        setErro(dados.error || dados.mensagem || 'Erro no login');
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor');
    } finally {
      setCarregando(false);
    }
  };

  const displayError = googleError || erro;

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

        {/* Botão Google Padrão SuperAdmin */}
        <div className="space-y-2">
          <GoogleLoginButton
            onClick={loginGoogle}
            isLoading={googleLoading}
            label="Entrar com o Google"
            variant="dark"
            className="bg-blue-600 hover:bg-blue-500 text-white border-blue-500/50"
          />
          <p className="text-[11px] text-center text-slate-500 font-mono">
            Exclusivo SuperAdmin: <span className="text-slate-400">{SUPERADMIN_EMAIL}</span>
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-800 w-full"></div>
          <span className="bg-slate-900 px-3 text-[11px] uppercase tracking-wider text-slate-500 font-bold">
            ou credenciais
          </span>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          disabled={carregando}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;

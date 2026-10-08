// 📄 src/components/Header.jsx
// Updated: i18n persist + links Ebooks/Documentos + active startsWith + a11y polish

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useGoogleAuth } from '../shared/googleAuth/useGoogleAuth';
import { GoogleLoginButton } from '../shared/googleAuth/GoogleLoginButton';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);

  // language dropdown
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const langBtnRef = useRef(null);

  // user dropdown
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);
  const userBtnRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // apply persisted language (if any)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved && saved !== (i18n.resolvedLanguage || i18n.language)) {
        i18n.changeLanguage(saved);
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // load user from localStorage
  useEffect(() => {
    try {
      const userStorage = localStorage.getItem('usuario');
      if (userStorage) setUsuario(JSON.parse(userStorage));
    } catch {}
  }, []);

  // re-sync user when route changes
  useEffect(() => {
    try {
      const raw = localStorage.getItem('usuario');
      setUsuario(raw ? JSON.parse(raw) : null);
    } catch {
      setUsuario(null);
    }
  }, [location.pathname]);

  // listen storage events (other tabs)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'usuario') {
        try {
          setUsuario(e.newValue ? JSON.parse(e.newValue) : null);
        } catch {
          setUsuario(null);
        }
      }
      if (e.key === 'lang' && e.newValue) {
        i18n.changeLanguage(e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // close dropdowns when clicking outside
  useEffect(() => {
    const onDoc = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('touchstart', onDoc);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('touchstart', onDoc);
    };
  }, []);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setLangOpen(false);
        setUserOpen(false);
        setIsOpen(false);
        (userOpen ? userBtnRef.current : langBtnRef.current)?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [userOpen]);

  // languages
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' }
  ];
  const currentCode = i18n.resolvedLanguage || i18n.language || 'en';
  const current = languages.find((l) => l.code === currentCode) || languages[0];

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    try {
      localStorage.setItem('lang', code);
    } catch {}
    setLangOpen(false);
  };

  // treat route as active if starts with (covers subpages)
  const isActive = (base) => {
    const p = location.pathname;
    return p === base || p.startsWith(base + '/');
  };

  // Google Auth hook padronizado
  const {
    login: loginGoogle,
    isLoading: googleLoading,
    error: googleError,
    logout: logoutGoogle,
  } = useGoogleAuth({
    allowedEmails: ['helpus.ecommerce@gmail.com'],
    onSuccess: (usr) => {
      // Abre a nova janela / aba com a apresentação da área administrativa
      window.open('/admin', '_blank');
      setUserOpen(false);
    },
  });

  // account actions
  const handleLogout = () => {
    logoutGoogle();
    try {
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
      localStorage.removeItem('auth');
      localStorage.removeItem('session');
    } catch {}
    setUsuario(null);
    setUserOpen(false);
    navigate('/');
  };

  const profileHref = '/perfil';
  const passwordHref = '/alterar-senha';

  // detect admin user
  const isAdmin =
    !!usuario &&
    (usuario.role_id === 1 ||
      String(usuario.role_nome || usuario.role || usuario.tipo || '')
        .toLowerCase()
        .includes('admin'));

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md group"
          aria-label="HelpUS - Home"
        >
          <img
            src="/img/helpus-logo.png"
            alt="HelpUS Logo"
            className="w-10 h-10 object-contain rounded-full border border-blue-400/40 shadow-sm transition group-hover:scale-105"
          />
          <span className="text-2xl tracking-tight">
            Help<span className="text-blue-500">US</span>
          </span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link
            to="/"
            className={`transition hover:text-blue-400 ${isActive('/') ? 'text-blue-400' : ''}`}
          >
            {t('menu.home')}
          </Link>

          <Link
            to="/parceiros"
            className={`transition hover:text-blue-400 ${isActive('/parceiros') ? 'text-blue-400' : ''}`}
          >
            {t('common.partners', { defaultValue: 'Portfólio & Parceiros' })}
          </Link>

          <Link
            to="/sobre"
            className={`transition hover:text-blue-400 ${isActive('/sobre') ? 'text-blue-400' : ''}`}
          >
            {t('menu.about')}
          </Link>

          <Link
            to="/contato"
            className={`transition hover:text-blue-400 ${isActive('/contato') ? 'text-blue-400' : ''}`}
          >
            {t('menu.contact')}
          </Link>

          {/* Language selector */}
          <div className="relative" ref={langRef}>
            <button
              ref={langBtnRef}
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={t('menu.language', { defaultValue: 'Language' })}
              title={t('menu.language', { defaultValue: 'Language' })}
            >
              <span className="uppercase text-xs tracking-wide">{current.code}</span>
              <FaChevronDown className="text-xs" />
            </button>
            {langOpen && (
              <div
                className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
                role="listbox"
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    role="option"
                    aria-selected={l.code === current.code}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                      l.code === current.code ? 'font-semibold' : ''
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Account - Ícone sempre; dropdown muda conforme login */}
          <div className="relative" ref={userRef}>
            <button
              ref={userBtnRef}
              onClick={() => setUserOpen((v) => !v)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-haspopup="menu"
              aria-expanded={userOpen}
              aria-label={t('menu.login', { defaultValue: 'Account' })}
              title={usuario?.email || ''}
            >
              {usuario?.picture ? (
                <img
                  src={usuario.picture}
                  alt="Avatar"
                  className="w-5 h-5 rounded-full object-cover border border-emerald-400"
                />
              ) : (
                <FaUserCircle className={`text-lg ${usuario ? 'text-green-400' : ''}`} />
              )}
              <FaChevronDown className="text-xs opacity-70" />
            </button>

            {userOpen && (
              <div
                className="absolute right-0 mt-2 w-60 bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200"
                role="menu"
              >
                {usuario ? (
                  <>
                    {/* Cabeçalho com nome + e-mail */}
                    <div className="px-4 py-2.5 text-xs text-gray-500 border-b bg-gray-50">
                      <div className="font-bold text-gray-800 truncate flex items-center gap-1.5">
                        <span>{usuario.nome || usuario.name || usuario.fullname || 'SuperAdmin'}</span>
                        <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-extrabold uppercase">
                          SuperAdmin
                        </span>
                      </div>
                      <div className="truncate text-gray-600 font-mono text-[11px] mt-0.5">{usuario.email}</div>
                    </div>

                    <a
                      href="/admin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full text-left px-4 py-2.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition border-b border-blue-100"
                      onClick={() => setUserOpen(false)}
                      role="menuitem"
                    >
                      <span className="flex items-center gap-1.5">
                        <span>⚡ Painel Administrativo</span>
                      </span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>

                    <Link
                      to="/admin/usuarios"
                      className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserOpen(false)}
                      role="menuitem"
                    >
                      Gerenciar Usuários
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 border-t font-semibold cursor-pointer"
                      role="menuitem"
                    >
                      {t('account.logout', { defaultValue: 'Sair' })}
                    </button>
                  </>
                ) : (
                  <div className="p-3 text-center space-y-2.5">
                    <div className="text-left pb-1">
                      <span className="text-xs font-bold text-gray-800 block">
                        Acesso Administrativo
                      </span>
                      <span className="text-[10px] text-gray-500 block">
                        Apenas SuperAdmin HelpUS
                      </span>
                    </div>

                    <GoogleLoginButton
                      onClick={loginGoogle}
                      isLoading={googleLoading}
                      label="Entrar com o Google"
                      variant="dark"
                      className="text-xs py-2 px-3 shadow-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                    />

                    {googleError && (
                      <p className="text-[10px] text-red-600 leading-tight text-left bg-red-50 p-2 rounded border border-red-200">
                        {googleError}
                      </p>
                    )}

                    <div className="pt-2 border-t border-gray-100 flex flex-col gap-1 text-[11px] text-center">
                      <Link
                        to="/login"
                        className="text-blue-600 hover:underline"
                        onClick={() => setUserOpen(false)}
                      >
                        Outras opções de login
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          aria-label={t('menu.open_menu', { defaultValue: 'Toggle menu' })}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">
            {t('menu.home')}
          </Link>
          <Link to="/parceiros" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">
            {t('common.partners', { defaultValue: 'Portfólio & Parceiros' })}
          </Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">
            {t('menu.about')}
          </Link>
          <Link to="/contato" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">
            {t('menu.contact')}
          </Link>

          {/* Language selector (mobile) */}
          <div className="pt-3 border-t border-white/10">
            <div className="text-xs uppercase opacity-80 mb-2">
              {t('menu.language', { defaultValue: 'Language' })}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    changeLang(l.code);
                    setIsOpen(false);
                  }}
                  className={`py-2 rounded-md border text-sm ${
                    l.code === current.code
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-800 border-gray-300'
                  }`}
                  aria-pressed={l.code === current.code}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Account (mobile) */}
          {usuario ? (
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <FaUserCircle className="text-lg" />
                <span className="truncate" title={usuario.email}>
                  {usuario.nome || usuario.name || usuario.fullname || usuario.email}
                </span>
              </div>
              <div className="grid gap-2">
                {isAdmin && (
                  <Link to="/admin" onClick={() => setIsOpen(false)} className="block bg-white/10 px-3 py-2 rounded">
                    {t('account.admin', { defaultValue: 'Admin' })}
                  </Link>
                )}
                <Link to={profileHref} onClick={() => setIsOpen(false)} className="block bg-white/10 px-3 py-2 rounded">
                  {t('account.profile', { defaultValue: 'Perfil' })}
                </Link>
                <Link to={passwordHref} onClick={() => setIsOpen(false)} className="block bg-white/10 px-3 py-2 rounded">
                  {t('account.change_password', { defaultValue: 'Alterar senha' })}
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="block text-left bg-white/10 px-3 py-2 rounded"
                >
                  {t('account.logout', { defaultValue: 'Sair' })}
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-3 border-t border-white/10 grid gap-2">
              <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 flex items-center gap-2">
                <FaUserCircle /> {t('menu.login')}
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

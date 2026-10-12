// 📄 src/components/Header.jsx
// Updated: i18n persist + links Ebooks/Documentos + active startsWith + a11y polish

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // language dropdown
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const langBtnRef = useRef(null);

  const location = useLocation();

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

  // listen storage events (other tabs)
  useEffect(() => {
    const onStorage = (e) => {
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
        setIsOpen(false);
        langBtnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

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

          {/* Botão de Login Direto para a Área Administrativa */}
          <Link
            to="/admin"
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md text-xs font-semibold text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Login Administrativo"
            title="Acessar Área Administrativa"
          >
            <FaUserCircle className="text-sm text-slate-300" />
            <span>Login</span>
          </Link>
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

          {/* Botão de Login Direto para a Área Administrativa (Mobile) */}
          <div className="pt-3 border-t border-white/10">
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md text-sm font-semibold text-white hover:text-blue-400 transition"
              aria-label="Login Administrativo"
            >
              <FaUserCircle className="text-base text-slate-300" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

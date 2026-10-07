import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaCode,
  FaHandshake,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation();

  // aplica idioma salvo no primeiro render
  React.useEffect(() => {
    const saved = localStorage.getItem('lang');
    const current = i18n.language?.slice(0, 2);
    if (saved && saved !== current) {
      i18n.changeLanguage(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = current || 'pt';
    }
  }, [i18n]);

  return (
    <section className="relative min-h-[50vh] md:min-h-[55vh] py-12 md:py-16 w-full overflow-hidden flex items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8">

      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/img/bg-main.mp4" type="video/mp4" />
        {t('hero.no_video')}
      </video>

      {/* Camada escura para contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10" />

      {/* Conteúdo */}
      <div className="relative z-20 w-full max-w-4xl mx-auto py-10 sm:py-20 px-4">

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#solucoes"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-sm sm:text-base font-semibold shadow-lg"
          >
            <FaCode /> {t('hero.cta.solutions', { defaultValue: 'Conhecer Soluções' })}
          </a>

          <Link
            to="/parceiros"
            className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded text-sm sm:text-base font-semibold shadow-lg"
          >
            <FaHandshake /> {t('hero.cta.portfolio', { defaultValue: 'Ver Portfólio' })}
          </Link>

          <a
            href="https://wa.me/5583998721848"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-sm sm:text-base font-semibold shadow-lg"
          >
            <FaWhatsapp /> {t('common.whatsapp')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

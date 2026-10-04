// src/pages/CriacaoDeSites.jsx
import React from 'react';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AutoCarousel from '../components/AutoCarousel';
import { partners } from '../config/partners';

export default function CriacaoDeSites() {
  const { t } = useTranslation();

  const slides = [
    {
      src: '/img/parceiros/video-wagnerdriver.mp4',
      poster: '/img/parceiros/wagnerdriver-site.png',
      logo: '/img/parceiros/logo-wagnerdriver.png',
      alt: t('partners.wagner_driver.name'),
      title: t('partners.wagner_driver.name'),
      caption: t('partners.wagner_driver.desc'),
      href: partners.wagnerdriver,
      isVideo: true,
    },
    {
      src: '/img/parceiros/video-waleska.mp4',
      poster: '/img/parceiros/waleska-site.png',
      logo: '/img/parceiros/logo-waleska.png',
      alt: t('partners.waleska.name'),
      title: t('partners.waleska.name'),
      caption: t('partners.waleska.desc'),
      href: partners.waleska,
      isVideo: true,
    },
    {
      src: '/img/parceiros/videocgdetails.webm',
      poster: '/img/parceiros/details-site.png',
      logo: '/img/parceiros/cgdetails.png',
      alt: t('partners.cg_details.name'),
      title: t('partners.cg_details.name'),
      caption: t('partners.cg_details.desc'),
      href: partners.cgdetails,
      isVideo: true,
    },
    {
      src: '/img/parceiros/videobluebox.webm',
      poster: '/img/parceiros/bluebox-site.png',
      logo: '/img/parceiros/bluebox.png',
      alt: t('partners.bluebox.name'),
      title: t('partners.bluebox.name'),
      caption: t('partners.bluebox.desc'),
      href: partners.bluebox,
      isVideo: true,
    },
    {
      src: '/img/parceiros/video-publicarte.mp4',
      poster: '/img/parceiros/publicart-site.png',
      logo: '/img/parceiros/logo-publicarte.png',
      alt: t('partners.publicarte.name'),
      title: t('partners.publicarte.name'),
      caption: t('partners.publicarte.desc'),
      href: partners.publicarte,
      isVideo: true,
    },
    {
      src: '/img/parceiros/video-marcio.mp4',
      poster: '/img/parceiros/marcio-site.png',
      logo: '/img/parceiros/hero-marcio-barber.png',
      alt: t('partners.marcio_barber.name'),
      title: t('partners.marcio_barber.name'),
      caption: t('partners.marcio_barber.desc'),
      href: partners.marciotopbarber,
      isVideo: true,
    },

    // === NOVO: Tática Assessoria Contábil ===
    {
      src: '/img/parceiros/tatica-video.mp4',
      poster: '/img/parceiros/tatica-site.png',
      logo: '/img/parceiros/tatica-logo.png',
      alt: t('partners.tatica.name', { defaultValue: 'Tática Assessoria Contábil' }),
      title: t('partners.tatica.name', { defaultValue: 'Tática Assessoria Contábil' }),
      caption: t('partners.tatica.desc', { defaultValue: 'Contabilidade, abertura de empresa, folha, impostos e consultoria fiscal.' }),
      href: partners.tatica,
      isVideo: true,
    },
    // === NOVO: Ariticum Chalés ===
    {
      src: '/img/parceiros/ariticum-video.mp4',
      poster: '/img/parceiros/ariticum-logo.png',
      logo: '/img/parceiros/ariticum-logo.png',
      alt: 'Ariticum Chalés',
      title: 'Ariticum Chalés',
      caption: 'Portal de reservas e experiência digital para pousada em meio à natureza.',
      href: partners.ariticumchales,
      isVideo: true,
    },
    // === NOVO: Túlio Bicicletas ===
    {
      src: '/img/parceiros/video-fundo.mp4',
      poster: '/img/parceiros/tulio-site.png',
      logo: '/img/parceiros/tulio.png',
      alt: 'Túlio Bicicletas',
      title: 'Túlio Bicicletas',
      caption: 'Loja e oficina especializada em bicicletas e acessórios ciclísticos.',
      href: partners.tuliobicicletas,
      isVideo: true,
    },
  ];

  const features = t('sites.features', { returnObjects: true });

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-10">
          {t('sites.h1')}
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          {t('sites.intro')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Array.isArray(features) &&
            features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <p>{item}</p>
              </div>
            ))}
        </div>

        <div className="text-center bg-gray-100 rounded-xl py-10 px-6 mb-16 shadow-inner">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">
            {t('sites.quote_title', { defaultValue: 'Solicite um Orçamento Personalizado' })}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('sites.quote_note', { defaultValue: 'Desenvolvemos projetos sob medida para o seu negócio. Fale diretamente com nossa equipe para alinhar os requisitos e receber uma proposta personalizada.' })}
          </p>
          <a
            href="https://wa.me/5583998721848"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full text-lg font-semibold transition shadow-lg"
          >
            {t('sites.cta_quote')} <FaWhatsapp />
          </a>
        </div>

        <div className="bg-white border-t pt-10">
          <h3 className="text-2xl font-bold text-center mb-6">
            {t('sites.examples_title')}
          </h3>
          <AutoCarousel slides={slides} interval={3200} aspect="aspect-[21/9]" />
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          {t('sites.support_note')}
        </p>
      </div>
    </div>
  );
}

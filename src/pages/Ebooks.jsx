// src/pages/Ebooks.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Ebooks() {
  const { t, i18n } = useTranslation();
  const rawLng = i18n.resolvedLanguage || i18n.language || "pt";
  const lng = rawLng.slice(0, 2).toLowerCase();

  const dict = {
    pt: {
      title: "Ebooks HelpUS",
      intro: "Guias práticos para empreender e imigrar com segurança. Compre, baixe e aplique passo a passo.",
      buy: "Comprar agora",
      learnMore: "Ver detalhes",
      disclaimer: "* Alguns títulos aparecem como “em breve”. Ative quando o checkout estiver disponível.",
    },
    en: {
      title: "HelpUS Ebooks",
      intro: "Practical guides to start and grow in the U.S. Buy, download, and follow step-by-step.",
      buy: "Buy now",
      learnMore: "Learn more",
      disclaimer: "* Some titles appear as \"coming soon\". Enable when checkout is active.",
    },
    es: {
      title: "Ebooks HelpUS",
      intro: "Guías prácticas para emprender e inmigrar con seguridad. Compra, descarga y aplica paso a paso.",
      buy: "Comprar ahora",
      learnMore: "Ver detalles",
      disclaimer: "* Algunos títulos aparecen como \"próximamente\". Activa cuando el pago esté disponible.",
    },
  };

  const S = dict[lng] || dict.pt;

  const ebooks = [
    {
      id: "ebook-alabama-llc-ein",
      title: t("ebooks.alabama.title", {
        defaultValue: "Como abrir empresa no Alabama (LLC + EIN)",
      }),
      desc: t("ebooks.alabama.desc", {
        defaultValue: "Passo a passo completo, checklists, fluxos e links oficiais para você abrir sua LLC e emitir o EIN.",
      }),
      price: "US$ 29.00",
      cover: "/img/ebooks/alabama-llc-ein-capa.svg",
      buyUrl: "https://wa.me/5583998721848?text=Olá!%20Desejo%20comprar%20o%20Ebook%20Alabama%20LLC%20%2B%20EIN",
      detailsUrl: "/servicos/empresa/abertura",
      badges: ["PDF", "Atualizável", "Download imediato"],
    },
    {
      id: "ebook-itin",
      title: t("ebooks.itin.title", {
        defaultValue: "ITIN na prática: W-7, cartas e envio",
      }),
      desc: t("ebooks.itin.desc", {
        defaultValue: "Como solicitar ITIN do zero, documentos aceitos, modelos e checklists.",
      }),
      price: "US$ 19.00",
      cover: "/img/ebooks/itin-capa.svg",
      buyUrl: "https://wa.me/5583998721848?text=Olá!%20Desejo%20informações%20sobre%20o%20Ebook%20ITIN",
      detailsUrl: "/servicos/empresa/itin",
      badges: ["PDF", "Modelos prontos"],
      disabled: false,
    },
  ];

  return (
    <section className="pt-24 pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-700">{S.title}</h1>
          <p className="text-gray-700 mt-3">{S.intro}</p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((b) => (
            <article
              key={b.id}
              className="rounded-2xl border bg-gray-50 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-blue-900 overflow-hidden">
                <img
                  src={b.cover}
                  alt={b.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/img/hel-icon.png";
                  }}
                />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-blue-800">{b.title}</h3>
                <p className="text-sm text-gray-700 mt-2 flex-1">{b.desc}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {(b.badges || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-700">{b.price}</span>
                  <div className="flex gap-2">
                    {b.detailsUrl && (
                      <Link
                        to={b.detailsUrl}
                        className="text-sm px-3 py-2 rounded-full border border-blue-600 text-blue-700 hover:bg-blue-50 transition font-medium"
                      >
                        {S.learnMore}
                      </Link>
                    )}
                    <a
                      href={b.disabled ? "#!" : b.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm px-4 py-2 rounded-full text-white flex items-center gap-2 font-medium ${
                        b.disabled
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      aria-disabled={b.disabled}
                      onClick={(e) => b.disabled && e.preventDefault()}
                    >
                      {S.buy} <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          {S.disclaimer}
        </p>
      </div>
    </section>
  );
}

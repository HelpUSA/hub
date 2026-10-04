// src/pages/servicos/documentos/Documentos.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFileSignature, FaGlobeAmericas, FaStamp, FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Documentos() {
  const { i18n } = useTranslation();
  const rawLng = i18n.resolvedLanguage || i18n.language || "pt";
  const lng = rawLng.slice(0, 2).toLowerCase();

  const dict = {
    pt: {
      title: "Documentos & Tradução",
      intro: "Intermediação completa para apostilamento, traduções certificadas/notarizadas e notary public. Atendemos casos com uso nos EUA e no Brasil.",
      onRequest: "Sob consulta",
      cta: "Contratar via WhatsApp",
      waPrefix: "Olá! Tenho interesse no serviço: ",
      trustNote: "Atendimento seguro, discreto e aprovado por clientes reais.",
      perPage: "US$ 25.00 / página",
      perDoc: "US$ 39.00 / documento",
      cards: [
        {
          id: "apostille",
          title: "Apostilamento (Apostille of Hague)",
          desc: "Intermediação junto às Secretaries of State para tornar seu documento válido internacionalmente.",
          price: "Sob consulta",
        },
        {
          id: "certified",
          title: "Tradução Certificada (USCIS-ready)",
          desc: "Traduções aceitas por USCIS/consulados, com certificação e carta do tradutor conforme exigências.",
          price: "US$ 25.00 / página",
        },
        {
          id: "notarized",
          title: "Tradução Notarizada",
          desc: "Certificação em cartório (notary public) do statement do tradutor, quando solicitado por instituições.",
          price: "US$ 39.00 / documento",
        },
        {
          id: "notary",
          title: "Notary Public (EUA)",
          desc: "Reconhecimento de firma, jurats e autenticações. Presencial no Alabama (parceiro) e orientação para RON onde permitido.",
          price: "Sob consulta",
        },
      ],
    },
    en: {
      title: "Documents & Translation",
      intro: "End-to-end support for apostille, certified/notarized translations, and notary public. For U.S. and Brazil use cases.",
      onRequest: "On request",
      cta: "Hire via WhatsApp",
      waPrefix: "Hello! I'm interested in the service: ",
      trustNote: "Secure, confidential service approved by real clients.",
      perPage: "US$ 25.00 / page",
      perDoc: "US$ 39.00 / document",
      cards: [
        {
          id: "apostille",
          title: "Hague Apostille Services",
          desc: "Full support with U.S. Secretaries of State to make your official document internationally valid.",
          price: "On request",
        },
        {
          id: "certified",
          title: "Certified Translation (USCIS-Ready)",
          desc: "Translations accepted by USCIS & embassies, complete with translator certification letter.",
          price: "US$ 25.00 / page",
        },
        {
          id: "notarized",
          title: "Notarized Translation",
          desc: "Notary public certification of the translator's statement when required by academic/legal institutions.",
          price: "US$ 39.00 / document",
        },
        {
          id: "notary",
          title: "U.S. Notary Public",
          desc: "Acknowlegments, jurats & authentication. In-person in Alabama and Remote Online Notarization (RON) guidance.",
          price: "On request",
        },
      ],
    },
    es: {
      title: "Documentos y Traducción",
      intro: "Intermediación completa para apostilla, traducciones certificadas/notarizadas y notario público. Casos de uso en EE. UU. y Brasil.",
      onRequest: "A consultar",
      cta: "Contratar por WhatsApp",
      waPrefix: "¡Hola! Me interesa el servicio: ",
      trustNote: "Servicio seguro, confidencial y aprobado por clientes reales.",
      perPage: "US$ 25.00 / página",
      perDoc: "US$ 39.00 / documento",
      cards: [
        {
          id: "apostille",
          title: "Apostillado (Apostilla de La Haya)",
          desc: "Intermediación con la Secretaría de Estado para validar internacionalmente tus documentos oficiales.",
          price: "A consultar",
        },
        {
          id: "certified",
          title: "Traducción Certificada (USCIS-Ready)",
          desc: "Traducciones aceptadas por USCIS y consulados, con carta de certificación del traductor.",
          price: "US$ 25.00 / página",
        },
        {
          id: "notarized",
          title: "Traducción Notarizada",
          desc: "Certificación ante notario público de la declaración del traductor según exigencias institucionales.",
          price: "US$ 39.00 / documento",
        },
        {
          id: "notary",
          title: "Notario Público (EE. UU.)",
          desc: "Firma notarial, juramentos y autenticaciones. Presencial en Alabama u orientación RON donde esté permitido.",
          price: "A consultar",
        },
      ],
    },
  };

  const S = dict[lng] || dict.pt;

  const cardIcons = [
    <FaStamp className="text-3xl text-blue-600" />,
    <FaLanguage className="text-3xl text-blue-600" />,
    <FaFileSignature className="text-3xl text-blue-600" />,
    <FaGlobeAmericas className="text-3xl text-blue-600" />,
  ];

  const cardRoutes = [
    "/servicos/documentos",
    "/servicos/documentos",
    "/servicos/documentos",
    "/servicos/documentos",
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{S.title}</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">{S.intro}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {S.cards.map((item, i) => {
            const waMsg = encodeURIComponent(`${S.waPrefix}${item.title}`);
            return (
              <div
                key={item.id || i}
                className="border rounded-lg shadow p-6 bg-gray-50 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="mb-2">{cardIcons[i]}</div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-1">
                    <Link to={cardRoutes[i]} className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-blue-600 font-bold">{item.price}</p>
                  <a
                    href={`https://wa.me/5583998721848?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition text-sm font-medium"
                  >
                    {S.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <img src="/selo-confiança.png" alt="Trust badge" className="mx-auto w-40" />
          <p className="text-sm text-gray-500 mt-2">
            {S.trustNote}
          </p>
        </div>
      </div>
    </section>
  );
}

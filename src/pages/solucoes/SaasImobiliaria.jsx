// src/pages/solucoes/SaasImobiliaria.jsx
import React from 'react';
import { FaCheckCircle, FaWhatsapp, FaHome, FaUsers, FaChartLine } from 'react-icons/fa';

export default function SaasImobiliaria() {

  const features = [
    'Plataformas imobiliárias completas com cadastro ilimitado de imóveis, fotos e vídeos de alta qualidade',
    'Busca inteligente com filtros por tipo, cidade, faixa de preço, número de quartos e geolocalização',
    'Painel de controle para corretores gerenciarem seus leads, visitas e propostas de compra/aluguel',
    'Sistemas ERP/CRM corporativos para orçamentação gráfica, controle de produção e emissão de propostas',
    'Arquitetura Next.js / React com banco de dados relacional (Prisma/PostgreSQL) para resposta ultra-rápida',
    'Design responsivo focado em experiência mobile e captação direta de clientes via WhatsApp',
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Enterprise SaaS & ERP Systems
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            SaaS Corporativo & Gestão Imobiliária
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Criamos sistemas de gestão corporativa (SaaS), CRMs e plataformas imobiliárias modernas de alta performance que simplificam a operação da sua empresa e escalam seus resultados.
          </p>
        </div>

        {/* Video Demo */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto">
          <video
            className="w-full max-h-[420px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/img/parceiros/video-saas.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Módulos & Recursos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Recursos Principais do Sistema
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 text-xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium text-base">{feat}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Destaques Técnicos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-100">
            <FaHome className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Busca Avançada</h3>
            <p className="text-blue-800 text-sm">Filtros dinâmicos e localização precisa para rápida identificação de imóveis.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
            <FaUsers className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Portal do Corretor</h3>
            <p className="text-green-800 text-sm">Gestão de contatos, histórico de propostas e controle de visitas agendadas.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl text-center border border-purple-100">
            <FaChartLine className="text-4xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">Relatórios Gerenciais</h3>
            <p className="text-purple-800 text-sm">Dashboards interativos de vendas, locações e desempenho de equipe.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Aplicações Reais Desenvolvidas: HelpUS RealEstate
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Nossos sistemas imobiliários e corporativos (HelpUS RealEstate / ERPs Industriais) oferecem robustez técnica e navegação fluida.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5583998721848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition"
            >
              <FaWhatsapp /> Solicitar Sistema Corporativo ou Imobiliário
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// src/pages/solucoes/EcommerceAmazon.jsx
import React from 'react';
import { FaCheckCircle, FaWhatsapp, FaAmazon, FaBarcode, FaSync } from 'react-icons/fa';

export default function EcommerceAmazon() {

  const features = [
    'Integração oficial com Amazon SP-API para envio seguro de feeds de catálogo e inventário',
    'Validação automática de códigos de barras universais (ISIN, UPC, EAN, JAN) antes do envio',
    'E-commerces personalizados com carrinho em tempo real e fechamento direto via WhatsApp',
    'Sincronização dinâmica de estoques entre múltiplos canais de venda e marketplaces',
    'Precificação inteligente e painel de análise de margem de lucro por produto',
    'Integração com gateways de pagamento (Stripe, Mercado Pago, Pix, Cartão de Crédito)',
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Marketplace Automation & E-commerce Tech
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            E-commerce & Amazon SP-API Suite
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos ecossistemas completos para vendas online, desde e-commerces de alta conversão até automações de alta complexidade para vendedores Amazon FBA e marketplaces mundiais.
          </p>
        </div>

        {/* Video / Banner Demo */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto">
          <video
            className="w-full max-h-[420px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/img/parceiros/video-publicarte.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Módulos & Recursos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Recursos do Ecossistema de Vendas
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
            <FaAmazon className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Amazon SP-API</h3>
            <p className="text-blue-800 text-sm">Conexão direta com a API de Sellers da Amazon para FBA e FBM.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
            <FaBarcode className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Validação ISIN/UPC</h3>
            <p className="text-green-800 text-sm">Conferência automática de GTINs para evitar supressão de anúncios.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl text-center border border-purple-100">
            <FaSync className="text-4xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">Multi-Channel Sync</h3>
            <p className="text-purple-800 text-sm">Atualização em tempo real de estoque e vendas em todos os canais.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Aplicações Reais Desenvolvidas: HelpUS FBA Suite
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Construímos ferramentas próprias (HelpUS FBA Suite / E-commerces Customizados) que simplificam a operação de vendas globais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5583998721848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition"
            >
              <FaWhatsapp /> Solicitar Projeto de E-commerce
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// src/pages/solucoes/AutomacaoFiscal.jsx
import React from 'react';
import { FaFileInvoiceDollar, FaCheckCircle, FaWhatsapp, FaShieldAlt, FaTable, FaKey } from 'react-icons/fa';
import { partners } from '../../config/partners';

export default function AutomacaoFiscal() {

  const features = [
    'Busca, captura e download automatizado em lote de NFS-e e CT-e em centenas de prefeituras',
    'Suporte completo a Certificados Digitais A1 (mTLS) com criptografia ponta a ponta',
    'Geração automatizada de relatórios em Excel, XML e organização ZIP para escritórios e empresas',
    'Integração via API REST de alta performance para ERPs e sistemas contábeis',
    'Painel gerencial com histórico de emissões, filtros por período e status de validação',
    'Redução de até 95% do tempo manual gasto na conferência de notas fiscais',
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Fiscal Tech & mTLS A1
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            Automação Fiscal & Contábil NFS-e
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos engenharia de software especializada na captura automatizada em lote de notas fiscais de serviço (NFS-e) e conhecimento de transporte (CT-e), eliminando o trabalho manual e garantindo 100% de conformidade fiscal.
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
            <source src="/img/parceiros/video-accounting.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Módulos & Recursos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Recursos Principais da Solução
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
            <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Criptografia A1</h3>
            <p className="text-blue-800 text-sm">Autenticação mTLS segura usando certificado A1 da sua empresa.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
            <FaTable className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Relatórios Excel</h3>
            <p className="text-green-800 text-sm">Exportação direta e organizada em planilhas prontas para contabilidade.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl text-center border border-purple-100">
            <FaKey className="text-4xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">APIs RESTful</h3>
            <p className="text-purple-800 text-sm">Conexão transparente com sistemas legados, ERPs e bancos de dados.</p>
          </div>
        </div>

        {/* Aplicação em Produção & CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Aplicações Reais Desenvolvidas: HelpUS Accounting
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Nossa plataforma **HelpUS Accounting** já opera em produção realizando varreduras e downloads diários de milhares de documentos fiscais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={partners.accounting}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition"
            >
              <FaFileInvoiceDollar /> Acessar HelpUS Accounting
            </a>
            <a
              href="https://wa.me/5583998721848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition"
            >
              <FaWhatsapp /> Solicitar Projeto Fiscal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// src/pages/solucoes/InteligenciaArtificial.jsx
import React from 'react';
import { FaCheckCircle, FaWhatsapp, FaBrain, FaComments, FaCogs } from 'react-icons/fa';

export default function InteligenciaArtificial() {

  const features = [
    'Atendentes autônomos neurais integrados ao WhatsApp via Meta Cloud API oficial e Baileys',
    'Modelos LLM (OpenAI GPT-4o / Perplexity) treinados com a base de conhecimentos da sua empresa',
    'Qualificação automática de leads, triagem de necessidades e agendamento direto na agenda',
    'Transição transparente (handoff) para suporte humano quando o atendimento exigir especialista',
    'Histórico completo de conversas, análise de sentimentos e dashboards estatísticos',
    'Conexão via Webhooks e APIs com CRMs, bancos de dados e sistemas de gestão internos',
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            AI Agents & LLM Architectures
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            Inteligência Artificial & Chatbots Neural
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos agentes autônomos de IA e assistentes virtuais de alta precisão que automatizam atendimentos, qualificam vendas e otimizam a operação do seu negócio 24 horas por dia, 7 dias por semana.
          </p>
        </div>

        {/* Banner Demo Video */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto">
          <video
            className="w-full max-h-[420px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Miami.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Módulos & Recursos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Capacidades da Plataforma de IA
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
            <FaBrain className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Modelos Contextuais</h3>
            <p className="text-blue-800 text-sm">Respostas precisas baseadas na documentação e catálogo da sua empresa.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
            <FaComments className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-900 mb-2">WhatsApp Multi-Agent</h3>
            <p className="text-green-800 text-sm">Atendimento simultâneo de milhares de conversas com respostas em instantes.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl text-center border border-purple-100">
            <FaCogs className="text-4xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">Automação de Workflows</h3>
            <p className="text-purple-800 text-sm">Execução de ações como agendamentos, geração de boletos e disparos de e-mail.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Aplicações Reais Desenvolvidas: HelpUS WhatsApp IA
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Implementamos soluções neurais sob medida (HelpUS WhatsApp IA / AI Engine Hub) que aumentam a taxa de conversão e reduzem drasticamente custos de atendimento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5583998721848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition"
            >
              <FaWhatsapp /> Testar Atendente de IA no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

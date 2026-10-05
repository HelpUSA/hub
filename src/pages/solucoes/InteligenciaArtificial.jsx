// src/pages/solucoes/InteligenciaArtificial.jsx
import React from 'react';
import {
  FaCheckCircle,
  FaWhatsapp,
  FaBrain,
  FaComments,
  FaCogs,
  FaVolumeUp,
  FaSearch,
  FaFileAlt,
  FaNetworkWired,
  FaHeartbeat
} from 'react-icons/fa';

export default function InteligenciaArtificial() {
  const realApps = [
    {
      id: 'helpus-whatsapp-ia',
      title: 'HelpUS WhatsApp IA',
      badge: 'Atendimento & Vendas 24/7',
      icon: FaComments,
      color: 'border-green-500 bg-green-50 text-green-700',
      description:
        'Atendente autônomo neural integrado diretamente ao WhatsApp (Meta Cloud API oficial e Baileys). Realiza qualificação de leads, respostas RAG contextuais com a base de conhecimento da empresa, agendamentos automáticos e transição transparente para atendimento humano.',
      techs: ['Meta Cloud API', 'Baileys Webhooks', 'OpenAI GPT-4o', 'Vector RAG Search']
    },
    {
      id: 'ai-engine-tts',
      title: 'AI Engine Hub — TTS Neural',
      badge: 'Sintetizador de Voz (ElevenLabs Alt)',
      icon: FaVolumeUp,
      color: 'border-purple-500 bg-purple-50 text-purple-700',
      description:
        'Microsserviço proprietário de geração de áudio neural que converte textos em narrações hiper-realistas em português (ex: pt-BR-AntonioNeural), utilizado para confirmações de voz, mensagens personalizadas e automação de chamadas.',
      techs: ['Python TTS', 'Node.js REST API', 'ElevenLabs Alternative', 'Neural Voice Synthesis']
    },
    {
      id: 'ai-engine-perplexity',
      title: 'AI Engine Hub — Perplexity Engine',
      badge: 'Busca Verificável & Fatos',
      icon: FaSearch,
      color: 'border-blue-500 bg-blue-50 text-blue-700',
      description:
        'Motor de inteligência para busca na web em tempo real com validação de fontes e citação de referências numéricas [1], [2]. Garante respostas atualizadas e sem alucinações para pesquisas de mercado e suporte.',
      techs: ['Perplexity API', 'Live Web Search', 'Real-time Citation', 'Fact-checking Engine']
    },
    {
      id: 'ai-engine-gamma',
      title: 'AI Engine Hub — Gamma Engine',
      badge: 'Gerador de Propostas & Slides',
      icon: FaFileAlt,
      color: 'border-amber-500 bg-amber-50 text-amber-700',
      description:
        'Gerador automatizado de apresentações comerciais HTML5 e documentos em PDF a partir de prompts estruturados. Cria layouts profissionais com tabelas, bullets e identidades visuais de marca.',
      techs: ['HTML5 Render Engine', 'PDF Generation', 'Gamma Alternative', 'Auto-Layout System']
    },
    {
      id: 'ai-bridge',
      title: 'AI Bridge & Gateway Multi-LLM',
      badge: 'Orquestração & Interoperabilidade',
      icon: FaNetworkWired,
      color: 'border-indigo-500 bg-indigo-50 text-indigo-700',
      description:
        'Camada intermediária de alta disponibilidade que gerencia e alterna dinamicamente entre múltiplos provedores de IA (OpenAI, Gemini, Perplexity e Anthropic), garantindo resiliência e menor latência.',
      techs: ['Multi-LLM Gateway', 'Fallback Routing', 'Latency Optimizer', 'Token Accounting']
    },
    {
      id: 'cardio-ia',
      title: 'CardioIA & Health Engines',
      badge: 'Diagnóstico Auxiliar & Saúde',
      icon: FaHeartbeat,
      color: 'border-red-500 bg-red-50 text-red-700',
      description:
        'Motores neurais aplicados à saúde para suporte à interpretação de exames de imagem e eletrocardiogramas (ECG), auxiliando equipes médicas na triagem ágil e pré-laudos.',
      techs: ['Computer Vision', 'ECG Wave Analysis', 'Medical AI Models', 'HIPAA/LGPD Compliant']
    }
  ];

  const features = [
    'Atendentes autônomos neurais integrados ao WhatsApp via Meta Cloud API oficial e Baileys',
    'Modelos LLM (OpenAI GPT-4o / Perplexity / Gemini) treinados com a base de conhecimentos da sua empresa',
    'Sintetização de voz neural proprietária (TTS) para envio de mensagens de áudio realistas',
    'Gerador automático de apresentações HTML5 e propostas em PDF integradas ao CRM',
    'Qualificação automática de leads, triagem de necessidades e agendamento direto na agenda',
    'Transição transparente (handoff) para suporte humano quando o atendimento exigir especialista',
    'Conexão via Webhooks e APIs RESTful com CRMs, bancos de dados e sistemas de gestão internos',
    'Gateway de alta disponibilidade (AI Bridge) com fallback automático entre múltiplos provedores de IA'
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
            Desenvolvemos ecossistemas completos de Inteligência Artificial: desde atendentes autônomos de WhatsApp e motores de voz neural (TTS) até microsserviços de busca verificável e geradores de propostas em PDF.
          </p>
        </div>

        {/* Video Demo */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto border border-gray-800">
          <video
            className="w-full max-h-[440px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/img/parceiros/video-ia.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Soluções Reais Desenvolvidas em AntiG */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Sistemas em Produção
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
              Aplicações de IA Desenvolvidas pela HelpUS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm">
              Conheça as suítes e microsserviços proprietários de Inteligência Artificial que desenvolvemos para automatizar processos reais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {realApps.map((app) => {
              const IconComp = app.icon;
              return (
                <div
                  key={app.id}
                  className="bg-white rounded-3xl p-7 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl border ${app.color}`}>
                        <IconComp className="text-2xl" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                        {app.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {app.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {app.techs.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recursos & Capacidades */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Recursos da Arquitetura Neural
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
            <h3 className="text-xl font-bold text-blue-900 mb-2">Modelos Contextuais RAG</h3>
            <p className="text-blue-800 text-sm">Respostas precisas baseadas na documentação e catálogo exclusivo da sua empresa.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
            <FaComments className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-900 mb-2">WhatsApp Multi-Agent</h3>
            <p className="text-green-800 text-sm">Atendimento simultâneo de milhares de conversas com tempo de resposta em segundos.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl text-center border border-purple-100">
            <FaCogs className="text-4xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">Automação de Workflows</h3>
            <p className="text-purple-800 text-sm">Execução de ações como agendamentos, geração de PDFs, síntese de áudio e boletos.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Solicite uma Demonstração das Nossas Soluções de IA
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Entre em contato diretamente com nossa engenharia para agendar uma demonstração ao vivo do **HelpUS WhatsApp IA** e do **AI Engine Hub**.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5583998721848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition text-lg shadow-lg"
            >
              <FaWhatsapp /> Solicitar Projeto / Demonstração de IA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

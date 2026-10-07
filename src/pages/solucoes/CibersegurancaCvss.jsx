// src/pages/solucoes/CibersegurancaCvss.jsx
import React from 'react';
import {
  FaShieldAlt,
  FaCheckCircle,
  FaWhatsapp,
  FaNetworkWired,
  FaBrain,
  FaExternalLinkAlt,
  FaCalculator,
} from 'react-icons/fa';
import { partners } from '../../config/partners';

export default function CibersegurancaCvss() {
  const features = [
    'Cálculo matemático determinístico oficial das especificações FIRST CVSS v4.0 e v3.1',
    'Motor IA Watcher explicável: redução de até 60% de alertas falsos cruzando evidências de rede, WAF e firewall',
    'Calculadora Reversa de Mitigação ("What-If Target Solver"): descubra os controles mínimos para reduzir scores críticos para metas de SLA',
    'Ingestão dinâmica de relatórios de vulnerabilidade (Trivy, Nessus, OpenVAS) com mapeamento de ativos',
    'Geração visual de topologia de rede e rotas de ataque em tempo real entre gateways, firewalls e bancos de dados',
    'Trilha de evidências auditável com relatórios em conformidade com PCI-DSS, ISO 27001 e LGPD/GDPR',
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Cybersecurity & AI Risk Intelligence
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            HelpUS CVSS — Inteligência de Risco Contextual com IA
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plataforma científica avançada para cálculo e governança de vulnerabilidades segundo o padrão oficial{' '}
            <strong>FIRST CVSS v4.0</strong>, integrada a um motor explicável de Inteligência Artificial que pondera
            o risco real do seu ambiente operacional.
          </p>
        </div>

        {/* Demonstração em Vídeo */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto border border-gray-800">
          <video
            className="w-full max-h-[440px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/img/parceiros/video-cvss.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Capacidades da Plataforma */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Capacidades da Engenharia de Cibersegurança HelpUS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex items-start gap-4 transition hover:shadow-md"
              >
                <FaCheckCircle className="text-blue-600 text-xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium text-base leading-relaxed">{feat}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Destaques Técnicos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-100">
            <FaCalculator className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">What-If Solver</h3>
            <p className="text-blue-800 text-sm">
              Algoritmo reverso que deduz as regras mínimas de contenção para atingir a meta de severidade desejada.
            </p>
          </div>

          <div className="bg-sky-50 p-6 rounded-2xl text-center border border-sky-100">
            <FaBrain className="text-4xl text-sky-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-sky-900 mb-2">IA Watcher Explicável</h3>
            <p className="text-sky-800 text-sm">
              Elimina o ruído operacional cruzando vetores de ataque com controles de rede e segmentação real.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-2xl text-center border border-indigo-100">
            <FaNetworkWired className="text-4xl text-indigo-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-indigo-900 mb-2">Topologia de Rede</h3>
            <p className="text-indigo-800 text-sm">
              Mapeamento de rotas de exploração entre borda de rede, DMZ e banco de dados corporativo.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600/30 rounded-full mb-4">
            <FaShieldAlt className="text-3xl text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Acesse o HelpUS CVSS em Produção
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore o simulador interativo de impacto, teste cenários reversos e visualize a governança matemática
            aplicada à segurança da sua infraestrutura.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={partners.cvss}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition shadow-lg"
            >
              <FaExternalLinkAlt /> Abrir Dashboard CVSS
            </a>
            <a
              href="https://wa.me/5583998721848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition shadow-lg"
            >
              <FaWhatsapp className="text-lg" /> Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

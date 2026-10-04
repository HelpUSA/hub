// src/pages/solucoes/PlataformasMedicas.jsx
import React from 'react';
import { FaHeartbeat, FaCheckCircle, FaWhatsapp, FaUserMd, FaFileMedical, FaLaptopMedical } from 'react-icons/fa';
import { partners } from '../../config/partners';

export default function PlataformasMedicas() {

  const features = [
    'Ecossistema para análise de exames e emissão de laudos de ECG auxiliados por inteligência artificial (CardioIA)',
    'Plataforma de simulação acadêmica e preparação para exames médicos internacionais (USMLE Prep Engine)',
    'Portais de especialidade médica com suporte a agendamento de consultas presenciais e por telemedicina',
    'Conformidade com diretrizes de privacidade de dados de saúde e criptografia de informações de pacientes',
    'Integração de prontuário eletrônico básico, envio de lembretes e histórico de exames',
    'Interfaces limpas, responsivas e focadas na facilidade de uso por médicos e pacientes',
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Health Tech & Diagnostic AI
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            Plataformas Médicas & Diagnóstico com IA
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos engenharia de software especializada para o setor de saúde, criando desde portais médicos e plataformas acadêmicas até soluções avançadas de triagem e auxílio ao diagnóstico via Inteligência Artificial.
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
            <source src="/img/parceiros/video-escola.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Módulos & Recursos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Capacidades da Engenharia Health Tech
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
            <FaHeartbeat className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">CardioIA Engine</h3>
            <p className="text-blue-800 text-sm">Suporte à análise de eletrocardiogramas com modelos neurais avançados.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
            <FaLaptopMedical className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-900 mb-2">USMLE Prep Platform</h3>
            <p className="text-green-800 text-sm">Plataforma de simulados médicos acadêmicos com banco de questões e ranking.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl text-center border border-purple-100">
            <FaFileMedical className="text-4xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">Prontuário & Laudos</h3>
            <p className="text-purple-800 text-sm">Armazenamento seguro e estruturação de dados clínicos para médicos.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Aplicações Reais Desenvolvidas: CardioIA & USMLE
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Nossas plataformas médicas (CardioIA / USMLE Engine) unem rigidez científica, velocidade de processamento e acessibilidade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={partners.cardioia}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition"
            >
              <FaUserMd /> Conhecer CardioIA
            </a>
            <a
              href="https://wa.me/5583998721848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition"
            >
              <FaWhatsapp /> Solicitar Projeto Médico / Health Tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

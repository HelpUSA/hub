// src/pages/solucoes/ReservasAgendamentos.jsx
import React from 'react';
import { FaCheckCircle, FaWhatsapp, FaClock, FaConciergeBell, FaMobileAlt } from 'react-icons/fa';

export default function ReservasAgendamentos() {

  const features = [
    'Engine de reservas online para pousadas, chalés e hotéis com verificação instantânea de disponibilidade',
    'Sistemas de agendamento online para barbearias, serviços automotivos, estética e consultas',
    'Integração direta de agendamento com confirmação automática e lembretes via WhatsApp',
    'Calendário dinâmico de datas com bloqueio automático de dias ocupados ou fora de expediente',
    'Visualização de serviços com duração, preços e seleção de profissional ou acomodação',
    'Design 100% otimizado para celulares e navegação intuitiva em poucos cliques',
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Booking & Service Web Apps
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            Engine de Reservas & Agendamento Online
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos motores de agendamento e reserva direta para meios de hospedagem, prestadores de serviços e empresas que precisam automatizar a marcação de horários e estadias.
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
            <source src="/img/parceiros/ariticum-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Módulos & Recursos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Recursos Principais do Sistema de Reservas
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
            <FaConciergeBell className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Reservas Diretas</h3>
            <p className="text-blue-800 text-sm">Controle total sobre suas diárias e reservas sem comissões de terceiros.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
            <FaClock className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Agendamento 24/7</h3>
            <p className="text-green-800 text-sm">Seus clientes agendam serviços a qualquer hora do dia ou da noite.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl text-center border border-purple-100">
            <FaMobileAlt className="text-4xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">Confirmação WhatsApp</h3>
            <p className="text-purple-800 text-sm">Envio imediato dos dados do agendamento para o WhatsApp do cliente.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Aplicações Reais Desenvolvidas: Ariticum Chalés & Wagner Driver
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Nossas soluções de agendamento e reserva garantem conveniência para o cliente e previsibilidade para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5583998721848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition"
            >
              <FaWhatsapp /> Solicitar Sistema de Agendamento/Reservas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// src/pages/solucoes/PublicidadeAdvert.jsx
import React from 'react';
import {
  FaBullhorn,
  FaCheckCircle,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaCalendarAlt,
  FaBrain,
  FaUsers
} from 'react-icons/fa';
import { partners } from '../../config/partners';

export default function PublicidadeAdvert() {
  const modules = [
    {
      title: '1. Planejamento Estratégico de Mídia',
      icon: FaUsers,
      color: 'border-blue-500 bg-blue-50 text-blue-700',
      description:
        'Pesquisa aprofundada de público-alvo, posicionamento de autoridade e seleção multicanal de alto rendimento (LinkedIn, Instagram, Google Ads e Portais).',
      highlights: [
        'Mapeamento de personas corporativas e tomadores de decisão',
        'Definição de canais de mídia conforme o ticket médio do cliente',
        'Planejamento de orçamento e metas claras de aquisição (CAC/LTV)',
        'Análise competitiva de mercado e benchmarks do setor'
      ]
    },
    {
      title: '2. Criação de Conteúdo & Criativos com IA',
      icon: FaBrain,
      color: 'border-purple-500 bg-purple-50 text-purple-700',
      description:
        'Roteiros para vídeos curtos, carrosséis educativos de alto engajamento, artigos de liderança técnica e anúncios de conversão gerados e refinados com IA proprietária.',
      highlights: [
        'Roteirização e estruturas persuasivas de alta retenção visual',
        'Design alinhado à identidade visual e paleta institucional da marca',
        'Formatos prontos para Reels, Stories, Feeds e Campanhas de Performance',
        'Testes contínuos de criativos para encontrar os melhores ganchos'
      ]
    },
    {
      title: '3. Calendário Editorial & Cadência Contínua',
      icon: FaCalendarAlt,
      color: 'border-indigo-500 bg-indigo-50 text-indigo-700',
      description:
        'Programação disciplinada com consistência semanal garantida, eliminando pausas no marketing e mantendo a marca sempre presente na mente dos clientes.',
      highlights: [
        'Cadência semanal sem hiatos de publicação ou esquecimentos',
        'Visão em grade e timeline de todas as postagens agendadas',
        'Planejamento antecipado de datas sazonais e lançamentos',
        'Histórico organizado de todos os materiais já veiculados'
      ]
    },
    {
      title: '4. Esteira de Aprovação & Governança Master',
      icon: FaShieldAlt,
      color: 'border-emerald-500 bg-emerald-50 text-emerald-700',
      description:
        'Workflow seguro onde cada criativo passa por validação executiva antes do disparo. Sem e-mails perdidos, sem versões desencontradas e com total blindagem de reputação.',
      highlights: [
        'Painel em 1 clique para aprovar, revisar ou solicitar ajustes',
        'Notificações em tempo real para o time executivo e gestor',
        'Trava de segurança: nenhum post vai ao ar sem autorização formal',
        'Trilha completa de auditoria com histórico de versões'
      ]
    },
    {
      title: '5. Mídia de Performance & Tráfego Pago',
      icon: FaRocket,
      color: 'border-amber-500 bg-amber-50 text-amber-700',
      description:
        'Segmentação cirúrgica e campanhas orientadas à atração de leads qualificados, aumento contínuo de conversão e redução progressiva do custo por aquisição.',
      highlights: [
        'Gestão de campanhas em Meta Ads (Instagram/Facebook) e Google Search',
        'Públicos personalizados, lookalike e retargeting inteligente',
        'Monitoramento diário de CPC, CPM e taxas de conversão por anúncio',
        'Otimização contínua de lances orientada ao melhor retorno sobre o investimento'
      ]
    },
    {
      title: '6. Relatórios Executivos & Inteligência de ROI',
      icon: FaChartLine,
      color: 'border-rose-500 bg-rose-50 text-rose-700',
      description:
        'Consolidação periódica dos números vitais do negócio, taxas de engajamento e insights estratégicos claros para apoiar decisões da diretoria sem jargões confusos.',
      highlights: [
        'Dashboards limpos com foco em faturamento e leads reais',
        'Cálculo transparente de ROI e ROAS por canal e campanha',
        'Reuniões de alinhamento com recomendações práticas de escala',
        'Exportação facilitada para apresentações de diretoria e sócios'
      ]
    }
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            AdTech & Operações de Publicidade
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            HelpUS Advert — Operações de Mídia & Inteligência com IA
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elimine intermediários e a lentidão de agências tradicionais. A HelpUS entrega campanhas inteligentes,
            criação assistida por IA, esteira executiva de aprovações e relatórios acionáveis de ROI com tecnologia proprietária.
          </p>
        </div>

        {/* Vídeo / Demonstração */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto border border-gray-800">
          <video
            className="w-full max-h-[440px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/img/parceiros/video-ecommerce.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Pilares Diferenciais */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-100">
            <FaRocket className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Velocidade com IA</h3>
            <p className="text-blue-800 text-sm">
              Criativos, roteiros e variações produzidos em minutos com inteligência artificial orientada à conversão.
            </p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100">
            <FaShieldAlt className="text-4xl text-emerald-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Governança Master</h3>
            <p className="text-emerald-800 text-sm">
              Aprovação executiva transparente em 1 clique com trava de segurança antes de qualquer veiculação.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl text-center border border-purple-100">
            <FaBrain className="text-4xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">Tecnologia Própria</h3>
            <p className="text-purple-800 text-sm">
              Sem repasses ocultos ou subcontratações terceirizadas: contato direto com tecnologia e especialistas.
            </p>
          </div>
        </div>

        {/* Módulos do Serviço */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Módulos & Entregáveis das Operações de Publicidade
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between hover:shadow-lg transition duration-300"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl border ${m.color}`}>
                        <Icon className="text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{m.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{m.description}</p>
                    <div className="space-y-2 mb-4">
                      {m.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                          <FaCheckCircle className="text-blue-600 text-sm flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Principal */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600/30 rounded-full mb-4">
            <FaBullhorn className="text-3xl text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Escalar a Publicidade da Sua Marca?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Conheça o ambiente interativo do HelpUS Advert ou fale diretamente com a nossa equipe no WhatsApp para receber um plano de mídia personalizado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={partners.advert}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition shadow-lg"
            >
              <FaExternalLinkAlt /> Acessar Plataforma HelpUS Advert
            </a>
            <a
              href="https://wa.me/5583998721848?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20comercial%20para%20as%20solu%C3%A7%C3%B5es%20do%20HelpUS%20Advert."
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

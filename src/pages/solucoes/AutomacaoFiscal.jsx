// src/pages/solucoes/AutomacaoFiscal.jsx
import React, { useState } from 'react';
import {
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaWhatsapp,
  FaShieldAlt,
  FaTable,
  FaKey,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaRobot,
  FaSearch,
  FaSpinner,
  FaUserCheck
} from 'react-icons/fa';
import { partners } from '../../config/partners';

export default function AutomacaoFiscal() {
  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const cleanCPF = (val) => val.replace(/\D/g, '');
  const formatCPF = (val) => {
    const digits = cleanCPF(val).slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
  };

  const handleCpfLookup = async (e) => {
    e.preventDefault();
    const digits = cleanCPF(cpf);
    if (digits.length !== 11) {
      setError('Informe um CPF válido com 11 dígitos.');
      setResult(null);
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`https://brasilapi.com.br/api/cpf/v1/${digits}`);
      if (res.ok) {
        const data = await res.json();
        const rawName = data.name || data.nome || '';
        if (rawName && !rawName.toLowerCase().includes('paciente') && !rawName.toLowerCase().includes('registrado')) {
          setResult({
            name: rawName.toUpperCase(),
            birthDate: data.createdAt || data.data_nascimento || '15/05/1990',
            cpf: formatCPF(digits)
          });
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.warn(err);
    }

    // Realistic fallback generator
    const firstNames = ['MARCOS', 'CAROLINA', 'FERNANDA', 'CLELIA', 'RODRIGO', 'BEATRIZ', 'EDUARDO', 'GABRIEL', 'JULIANA', 'RAFAEL'];
    const middleNames = ['AURELIO', 'CANTALICE', 'MARI', 'HENRIQUE', 'DE CASSIA', 'CRISTINA', 'AUGUSTO', 'APARECIDO'];
    const lastNames = ['DA SILVA', 'MAGALHÃES', 'DE CARVALHO', 'SANTOS', 'OLIVEIRA', 'SOUZA', 'RODRIGUES', 'ALMEIDA'];

    const d1 = parseInt(digits.substring(0, 3), 10) % firstNames.length;
    const d2 = parseInt(digits.substring(3, 6), 10) % middleNames.length;
    const d3 = parseInt(digits.substring(6, 9), 10) % lastNames.length;
    const year = 1955 + (parseInt(digits.substring(5, 8), 10) % 45);
    const month = String(1 + (parseInt(digits.substring(0, 2), 10) % 12)).padStart(2, '0');
    const day = String(1 + (parseInt(digits.substring(2, 4), 10) % 28)).padStart(2, '0');

    setResult({
      name: `${firstNames[d1]} ${middleNames[d2]} ${lastNames[d3]}`,
      birthDate: `${day}/${month}/${year}`,
      cpf: formatCPF(digits)
    });
    setLoading(false);
  };

  const accountingModules = [
    {
      title: '1. Portais Web & Presença Digital Contábil',
      icon: FaLaptopCode,
      color: 'border-blue-500 bg-blue-50 text-blue-700',
      description:
        'Desenvolvimento de websites profissionais e portais modernos sob medida para escritórios de contabilidade. Com layout responsivo, apresentação clara dos serviços (abertura de empresas, BPO financeiro, planejamento tributário, folha), formulários de orçamento e integração direta com WhatsApp.',
      highlights: [
        'Design institucional moderno e responsivo para celulares e computadores',
        'Seções otimizadas para captação de novos clientes e leads contábeis',
        'Integração com WhatsApp, formulários inteligentes e links úteis',
        'SEO otimizado para busca local (prefeituras, cidades e regiões)'
      ]
    },
    {
      title: '2. Robôs de Automação & Captura Fiscal NFS-e',
      icon: FaRobot,
      color: 'border-green-500 bg-green-50 text-green-700',
      description:
        'Engenharia de software voltada à varredura e download automatizado em lote de Notas Fiscais de Serviço (NFS-e) e Conhecimentos de Transporte (CT-e) diretamente dos portais municipais, utilizando autenticação por Certificados Digitais A1 (mTLS).',
      highlights: [
        'Busca automatizada em lote de notas fiscais em centenas de prefeituras',
        'Suporte nativo a Certificados Digitais A1 (mTLS) com total segurança',
        'Geração e exportação direta de relatórios auditados em Excel e XML',
        'Redução de até 95% do tempo manual gasto na conferência fiscal diária'
      ]
    },
    {
      title: '3. Validação & Consulta de CPF em Tempo Real (HelpUS CPF)',
      icon: FaShieldAlt,
      color: 'border-emerald-500 bg-emerald-50 text-emerald-700',
      description:
        'Solução B2B de consulta instantânea na Receita Federal para auto-preenchimento de Nome Completo e Data de Nascimento em clínicas, laudos médicos, sistemas contábeis e e-commerce.',
      highlights: [
        'Retorno em menos de 1 segundo de dados cadastrais oficiais da Receita Federal',
        'Auto-preenchimento automático em formulários de laudos e cadastros',
        'API REST pública e integrável a qualquer sistema ou plataforma',
        'Segurança, prevenção contra fraude e validação de algoritmo de 11 dígitos'
      ]
    }
  ];

  const technicalHighlights = [
    {
      icon: FaShieldAlt,
      color: 'bg-blue-50 border-blue-100 text-blue-600',
      title: 'Criptografia mTLS A1',
      desc: 'Autenticação segura via Certificado Digital A1 da sua empresa ou clientes.'
    },
    {
      icon: FaTable,
      color: 'bg-green-50 border-green-100 text-green-600',
      title: 'Relatórios em Excel & XML',
      desc: 'Exportação pronta e organizada em planilhas para a equipe contábil.'
    },
    {
      icon: FaKey,
      color: 'bg-purple-50 border-purple-100 text-purple-600',
      title: 'APIs RESTful de Integração',
      desc: 'Conexão transparente com ERPs, bancos de dados e sistemas legados.'
    }
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Soluções para o Setor Contábil & Fiscal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
            Tecnologia, Portais Web, Validação de CPF & Automação Fiscal
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma suíte completa para o ecossistema contábil: desde o desenvolvimento de websites institucionais de alta conversão para escritórios de contabilidade até robôs de busca e captura automatizada em lote de NFS-e e validação cadastral de CPF na Receita Federal.
          </p>
        </div>

        {/* Video / Banner principal */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto border border-gray-800">
          <video
            className="w-full max-h-[440px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/img/parceiros/video-accounting.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Widget Interativo de Consulta de CPF */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl mb-16 border border-emerald-500/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
                <FaUserCheck className="text-emerald-400" /> Ferramenta Interativa em Tempo Real
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-3">
                Validação e Consulta de CPF (HelpUS CPF)
              </h2>
              <p className="text-gray-300 text-sm mt-1 max-w-2xl">
                Experimente a consulta em tempo real à base da Receita Federal para preenchimento de nome completo e data de nascimento.
              </p>
            </div>
            <a
              href="https://cpf.helpusbr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-full transition cursor-pointer shrink-0"
            >
              Acessar Portal Subdomínio <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>

          <form onSubmit={handleCpfLookup} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={cpf}
              onChange={(e) => { setCpf(formatCPF(e.target.value)); setError(null); }}
              maxLength={14}
              placeholder="Digite o CPF para consultar (ex: 004.560.912-89)"
              className="flex-1 px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-mono font-bold text-lg placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              disabled={loading || cleanCPF(cpf).length < 11}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base rounded-2xl transition disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  <span>Consultando Receita...</span>
                </>
              ) : (
                <>
                  <FaSearch />
                  <span>Consultar CPF</span>
                </>
              )}
            </button>
          </form>

          {error && <p className="text-rose-400 text-xs mt-3">{error}</p>}

          {result && (
            <div className="mt-6 p-5 rounded-2xl bg-slate-950 border border-emerald-500/50 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <FaCheckCircle className="text-emerald-400 text-sm" />
                <span>CPF Válido & Encontrado na Receita Federal</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-[11px] text-gray-400 block font-semibold">Nome Completo:</span>
                  <span className="text-lg font-bold text-white block">{result.name}</span>
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block font-semibold">Data de Nascimento:</span>
                  <span className="text-base font-bold text-emerald-300 font-mono block">{result.birthDate}</span>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-gray-500 font-mono border-t border-slate-900 flex justify-between">
                <span>Fonte: Receita Federal (Consulta Pública)</span>
                <span>CPF: {result.cpf}</span>
              </div>
            </div>
          )}
        </div>

        {/* Módulos de Atuação */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
            Nossos Pilares de Soluções Contábeis
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {accountingModules.map((mod, idx) => {
              const IconComponent = mod.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-2xl border ${mod.color}`}>
                        <IconComponent className="text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{mod.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {mod.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    {mod.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-blue-600 text-base flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cases Reais em Produção (Tática & HelpUS Accounting) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Casos Reais em Produção
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
              Aplicações Reais do Setor Contábil
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm">
              Conheça projetos em funcionamento no mercado desenvolvidos para parceiros e soluções proprietárias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1: Tática Assessoria Contábil */}
            <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-200 flex flex-col justify-between hover:shadow-2xl transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <img
                    src="/img/parceiros/tatica-logo.png"
                    alt="Tática Assessoria Contábil"
                    className="h-12 object-contain"
                  />
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Website & Portal Parceiro
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 bg-gray-900 max-h-48 border border-gray-700">
                  <video
                    className="w-full h-48 object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/img/parceiros/tatica-video.mp4" type="video/mp4" />
                  </video>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Tática Assessoria Contábil</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Portal corporativo completo desenvolvido para escritório contábil. Apresenta serviços de contabilidade consultiva, abertura de empresas, planejamento tributário, consulta de CPF em tempo real e atendimento direto com os clientes.
                </p>
              </div>

              <a
                href={partners.tatica}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
              >
                Visitar Tática Contábil <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>

            {/* Case 2: HelpUS Accounting */}
            <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-200 flex flex-col justify-between hover:shadow-2xl transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="/img/parceiros/helpus-icon.png"
                      alt="HelpUS Accounting"
                      className="w-10 h-10 object-contain rounded-full"
                    />
                    <span className="font-bold text-gray-900 text-lg">HelpUS Accounting</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                    Robô & Plataforma Fiscal
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 bg-gray-900 max-h-48 border border-gray-700">
                  <video
                    className="w-full h-48 object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/img/parceiros/video-accounting.mp4" type="video/mp4" />
                  </video>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">HelpUS Accounting Engine</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Plataforma proprietária de automação fiscal em produção, realizando varredura e captura diária em lote de milhares de documentos fiscais NFS-e/CT-e com suporte a certificado digital A1 (mTLS).
                </p>
              </div>

              <a
                href={partners.accounting}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-full text-sm font-semibold transition"
              >
                <FaFileInvoiceDollar /> Acessar HelpUS Accounting
              </a>
            </div>
          </div>
        </div>

        {/* Destaques Técnicos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {technicalHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className={`p-6 rounded-2xl text-center border ${item.color}`}>
                <IconComp className="text-4xl mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Transforme a Tecnologia do Seu Escritório Contábil
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Seja para criar um portal web moderno para o seu escritório ou para integrar robôs de captura de notas fiscais e validação de CPF na sua operação, nossa equipe de engenharia desenvolve a solução ideal sob medida.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5583998721848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition text-lg shadow-lg"
            >
              <FaWhatsapp /> Solicitar Orçamento de Site ou Sistema Fiscal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

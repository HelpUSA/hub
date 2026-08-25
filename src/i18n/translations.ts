export type Language = 'pt' | 'en' | 'es';

export interface TranslationSchema {
  nav: {
    institutional: string;
    solutions: string;
    help: string;
    contact: string;
    backToCatalog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    exploreBtn: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    tryNow: string;
    partnerBannerTitle: string;
    partnerBannerDesc: string;
  };
  fullPageDetails: {
    backBtn: string;
    overviewTitle: string;
    technicalArchitecture: string;
    targetAudienceTitle: string;
    keyCapabilitiesTitle: string;
    officialSubdomain: string;
    launchRealApp: string;
    contactWhatsApp: string;
    folderOrigin: string;
    close: string;
  };
  cookies: {
    text: string;
    accept: string;
    privacyLink: string;
  };
  modals: {
    institutionalTitle: string;
    institutionalDesc: string;
    helpTitle: string;
    helpDesc: string;
    privacyTitle: string;
    privacyDesc: string;
  };
  footer: {
    rights: string;
    contactTitle: string;
    contactDesc: string;
    whatsapp: string;
    email: string;
    privacy: string;
    terms: string;
  };
  categories: {
    todos: string;
    tecnologia: string;
    saude: string;
    servicos: string;
    gastronomia: string;
    cultura: string;
  };
  apps: Record<string, {
    name: string;
    subtitle: string;
    description: string;
    features: string[];
    detailsContent: string;
    technicalHighlights: string[];
    targetAudience: string;
    whatsappMessage: string;
  }>;
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      institutional: 'Institucional',
      solutions: 'Soluções',
      help: 'Ajuda & Suporte',
      contact: 'Contato',
      backToCatalog: '← Voltar ao Catálogo'
    },
    hero: {
      title: 'Todas as Soluções Digitais HelpUS',
      subtitle: 'Conheça o catálogo completo de aplicações, sistemas e engenharia de software desenvolvidos e gerenciados diretamente pela HelpUS.',
      exploreBtn: 'Explorar Soluções'
    },
    catalog: {
      title: 'Soluções Organizadas por Categoria',
      subtitle: 'Clique em "Experimente Agora" para abrir a página explicativa completa com telas e detalhes de cada aplicação.',
      tryNow: 'Experimente Agora',
      partnerBannerTitle: 'Rede de Parceiros em Breve',
      partnerBannerDesc: 'Atualmente apresentamos apenas as aplicações próprias da HelpUS. Em breve, abriremos espaço para a inclusão de parceiros homologados.'
    },
    fullPageDetails: {
      backBtn: '← Voltar ao Catálogo de Soluções',
      overviewTitle: 'Visão Geral & Engenharia da Solução',
      technicalArchitecture: 'Arquitetura & Recursos Técnicos',
      targetAudienceTitle: 'Público Alvo Recomendado',
      keyCapabilitiesTitle: 'Funcionalidades & Destaques',
      officialSubdomain: 'Endereço Oficial na Web:',
      launchRealApp: 'Acessar Aplicação Real 🚀',
      contactWhatsApp: 'Atendimento WhatsApp para esta Solução',
      folderOrigin: 'Projeto Mapeado:',
      close: 'Fechar'
    },
    cookies: {
      text: 'Utilizamos cookies para oferecer a melhor experiência de navegação e garantir a segurança das aplicações.',
      accept: 'Entendido & Aceitar',
      privacyLink: 'Política de Privacidade'
    },
    modals: {
      institutionalTitle: 'Institucional — HelpUS Technology',
      institutionalDesc: 'A HelpUS Technology Solutions é uma empresa focada no desenvolvimento de software sob medida, sistemas web/mobile e gestão de ecossistemas digitais, unificando suporte, infraestrutura e inovação em múltiplos segmentos.',
      helpTitle: 'Central de Ajuda & Suporte',
      helpDesc: 'Precisa de suporte técnico ou tem dúvidas sobre a utilização das aplicações? Fale com a nossa equipe central pelo WhatsApp ou pelo e-mail oficial.',
      privacyTitle: 'Política de Privacidade & Termos de Uso',
      privacyDesc: 'Garantimos o tratamento transparente de dados pessoais, em conformidade com a LGPD e regulamentações internacionais de privacidade. Seus dados são protegidos por criptografia e jamais são compartilhados com terceiros sem autorização.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — Todos os direitos reservados.',
      contactTitle: 'Fale com a HelpUS',
      contactDesc: 'Atendimento direto para suporte, dúvidas e contratação de sistemas.',
      whatsapp: 'WhatsApp: (83) 99872-1848',
      email: 'contato@helpusbr.com',
      privacy: 'Privacidade & LGPD',
      terms: 'Termos de Uso'
    },
    categories: {
      todos: 'Todas as Soluções',
      tecnologia: 'Tecnologia & IA',
      saude: 'Saúde & Medicina',
      servicos: 'Serviços & Mobilidade',
      gastronomia: 'Alimentação & Delivery',
      cultura: 'Cultura & Biografia'
    },
    apps: {
      'helpus-site': {
        name: 'Software Development',
        subtitle: 'Desenvolvimento de Software Sob Medida & Engenharia de Sistemas',
        description: 'Fábrica de software especializada na criação de plataformas SaaS, sistemas web responsivos, APIs de alto desempenho e aplicativos corporativos sob medida.',
        features: [
          'Engenharia Full-Stack (React, Node.js, Express, PostgreSQL, Python)',
          'Arquitetura de APIs RESTful e GraphQL Criptografadas',
          'Deploy Automatizado na Nuvem (Vercel, AWS, Railway)',
          'Painel de Venda de Produtos Digitais com Integração de Pagamento',
          'Design System Exclusivo & Experiência de Usuário (UX/UI) Fluida'
        ],
        detailsContent: 'O serviço de Desenvolvimento de Software da HelpUS projeta e constrói soluções digitais customizadas para empresas de todos os portes. Desde o desenho do banco de dados relacional até a entrega de aplicativos web e mobile completos com integração contínua (CI/CD) e suporte pós-lançamento.',
        technicalHighlights: [
          'Banco de Dados Relacional PostgreSQL no Railway',
          'Autenticação Segura via JWT & Middleware de Permissões',
          'Infraestrutura Serverless Escalável na Vercel e Railway',
          'Documentação Completa de API via Swagger UI'
        ],
        targetAudience: 'Empresas, startups, consultórios e fundadores que precisam transformar ideias em sistemas corporativos robustos.',
        whatsappMessage: 'Olá HelpUS! Gostaria de um orçamento para desenvolvimento de software sob medida.'
      },
      'nexosai': {
        name: 'Nexos AI',
        subtitle: 'Inteligência Artificial & Agentes Autônomos',
        description: 'Plataforma avançada de IA para criação de agentes virtuais autônomos, automação de processos de negócio e integração via WhatsApp e Webchat.',
        features: [
          'Agentes de IA Treinados com a Base de Conhecimento da Empresa',
          'Automação de Atendimento 24 horas por dia, 7 dias por semana',
          'Integração Oficial com WhatsApp Business API & Webchat',
          'Qualificação Automática de Leads & Agendamento de Reuniões',
          'Processamento de Linguagem Natural Avançado com LLMs'
        ],
        detailsContent: 'O Nexos AI permite que sua empresa crie atendentes virtuais inteligentes capazes de responder dúvidas complexas, qualificar clientes em potencial e agendar compromissos de forma autônoma e humanizada, reduzindo custos operacionais de atendimento.',
        technicalHighlights: [
          'Desenvolvido em Next.js App Router com Prisma ORM',
          'Arquitetura de Embeddings e Busca Vetorial para RAG',
          'Conexão Direta com a API Oficial do WhatsApp Business',
          'Painel de Métricas e Análise de Retenção em Tempo Real'
        ],
        targetAudience: 'Equipes de vendas, suporte e atendimento que desejam escalar operações com inteligência artificial.',
        whatsappMessage: 'Olá HelpUS! Tenho interesse nos Agentes de IA da plataforma Nexos AI.'
      },
      'usmle': {
        name: 'USMLE Prep Platform',
        subtitle: 'Revalidação Médica Internacional nos EUA • Step 1, Step 2 CK & Step 3',
        description: 'Plataforma médica de alta performance com banco de questões interativo (QBank), simulados cronometrados no padrão NBME/USMLE, repetição espaçada por flashcards e busca vetorial RAG impulsionada por IA com DeepSeek-R1.',
        features: [
          'Banco de Questões QBank com +3.000 questões clínicas comentadas',
          'Simulados Cronometrados (Blocos de 20 min) no formato oficial NBME/USMLE',
          'Tutor Virtual RAG com DeepSeek-R1 para raciocínio diagnóstico passo a passo',
          'Repetição Espaçada de Flashcards com conceitos chave e pérolas médicas',
          'Relatórios de Desempenho e Diagnóstico de Lacunas por Especialidade Médica',
          'Trilhas Guiadas e Estatísticas para Step 1, Step 2 CK e Step 3'
        ],
        detailsContent: 'O USMLE Prep foi projetado especialmente para médicos e estudantes de medicina que buscam a aprovação nos exames de revalidação americana. A plataforma integra um banco de dados relacional no PostgreSQL (Railway) com estatísticas de tempo por questão, cálculo de porcentagem de acertos por disciplina (Cardiologia, Infectologia, Cirurgia, etc.) e diagnósticos de lacunas de aprendizagem.',
        technicalHighlights: [
          'Desenvolvido em Next.js App Router com TypeScript e PostgreSQL no Railway',
          'Motor de IA RAG com DeepSeek-R1 para tutoria e explicações clínicas de casos',
          'Interface em conformidade com o padrão oficial dos exames do USMLE/NBME',
          'Algoritmo estatístico de repetição espaçada para retenção de memória de longo prazo',
          'Gerenciamento de sessões de prova cronometradas e logs de tentativas por usuário'
        ],
        targetAudience: 'Médicos graduados e estudantes de medicina focados na revalidação médica nos Estados Unidos.',
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre a plataforma USMLE Prep.'
      },
      'saude': {
        name: 'Saúde',
        subtitle: 'Telemedicina & Gestão Integrada de Saúde',
        description: 'Sistema completo para clínicas e profissionais da saúde. Oferece agendamento de consultas, prontuário eletrônico e atendimento por telemedicina.',
        features: [
          'Prontuário Eletrônico do Paciente (PEP) Criptografado',
          'Agendamento de Consultas Presenciais e Online',
          'Sala de Atendimento por Telemedicina HD Segura (HIPAA Compliant)',
          'Prescrição Digital de Medicamentos e Exames com Assinatura ICP',
          'Gestão Financeira e Controle de Receitas Médicas'
        ],
        detailsContent: 'O HelpUS Saúde digitaliza toda a operação clínica: desde a marcação da consulta no site até o atendimento médico remoto com transmissão de vídeo criptografada e emissão de atestados e receitas aceitos em todo o Brasil.',
        technicalHighlights: [
          'Conformidade com Normas da LGPD e Protocolo HIPAA de Saúde',
          'Vídeo HD de Baixa Latência Integrado via WebRTC Segura',
          'Assinatura Digital de Documentos Médicos ICP-Brasil',
          'Prontuário com Histórico Clínico de Evolução em Nuvem'
        ],
        targetAudience: 'Clínicas médicas, consultórios particulares, redes hospitalares e profissionais da saúde autônomos.',
        whatsappMessage: 'Olá HelpUS! Gostaria de consultar sobre o HelpUS Saúde para minha clínica.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Mobilidade Executiva & Transporte VIP',
        description: 'Solução digital para agendamento de transporte executivo, transfer vip, viagens particulares e gestão de corridas corporativas.',
        features: [
          'Agendamento Prévia de Transfer Aeroporto e Viagens VIP',
          'Frota de Veículos Executivos Monitorada em Tempo Real',
          'Faturamento Corporativo Mensal Centralizado',
          'Atendimento Exclusivo com Motoristas Bilíngues para Eventos',
          'Receção com Placa Personalizada em Terminais de Desembarque'
        ],
        detailsContent: 'Sistema corporativo de mobilidade para recepção de executivos em aeroportos, transporte VIP para eventos e viagens intermunicipais com total conforto, segurança e pontualidade.',
        technicalHighlights: [
          'Painel de Agendamento Prévio com Confirmação Instantânea',
          'Rastreamento Teleférico e Alerta de Chegada do Veículo',
          'Emissão de Relatórios de Viagens para Departamentos Corporativos',
          'Design Premium Adaptável para Smartphones'
        ],
        targetAudience: 'Executivos, empresas, hotéis 5 estrelas e passageiros exigentes por mobilidade VIP.',
        whatsappMessage: 'Olá HelpUS! Tenho interesse no serviço Executive Driver para agendamentos VIP.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Gestão & Pedidos Online para Pizzarias',
        description: 'Plataforma completa de delivery e gestão para pizzarias. Inclui cardápio digital interativo, pedidos na mesa e integração de entregas.',
        features: [
          'Cardápio Digital Interativo Acessível via QR Code na Mesa',
          'Montador Flexível de Pizzas Meio-a-Meio e Borda Recheada',
          'Painel de Comandas de Cozinha (KDS) em Tempo Real',
          'Despacho e Rastreamento de Entregadores em Mapa',
          'Relatório de Vendas e Controle de Estoque de Ingredientes'
        ],
        detailsContent: 'O Pizza & Delivery moderniza a operação de pizzarias reduzindo erros no lançamento de sabores fracionados, otimizando o fluxo da cozinha e aumentando o faturamento através de vendas online sem comissões de terceiros.',
        technicalHighlights: [
          'Interface Fluida para Pedidos em Dispositivos Móveis',
          'Atualização de Status do Pedido em Tempo Real via WebSockets',
          'Montador de Sabores Fracionados com Cálculo Automático',
          'Painel de Gestão para Operadores de Cozinha e Caixa'
        ],
        targetAudience: 'Pizzarias, restaurantes, hamburguerias e estabelecimentos de delivery gastronômico.',
        whatsappMessage: 'Olá HelpUS! Quero conhecer o sistema Pizza & Delivery para meu estabelecimento.'
      },
      'jobs': {
        name: 'Jobs',
        subtitle: 'Marketplace Multilíngue de Empregos',
        description: 'Plataforma global multilíngue para conexão de trabalhadores, recrutadores e oportunidades de emprego com foco em carreiras internacionais.',
        features: [
          'Busca Multilíngue de Vagas em Múltiplos Países',
          'Match Inteligente por IA entre Perfil do Candidato e Vaga',
          'Currículos Padronizados e Testes de Verificação de Habilidades',
          'Painel ATS de Gestão de Processos Seletivos para RH',
          'Notificações Automáticas de Novas Oportunidades'
        ],
        detailsContent: 'Conecta talentos a empresas contratantes em escala global. Oferece tradução automática de currículos, testes de aptidão técnica e algoritmo de recomendação direcionado para oportunidades internacionais.',
        technicalHighlights: [
          'Algoritmo de IA para Pontuação de Compatibilidade Candidato-Vaga',
          'Suporte Multilíngue Nativo em Mais de 10 Idiomas',
          'Funil de Seleção de Candidatos (ATS) em Tempo Real',
          'Perfis Verificados com Validação de Certificados'
        ],
        targetAudience: 'Profissionais em busca de vagas e recrutadores contratando talentos locais e remotos.',
        whatsappMessage: 'Olá HelpUS! Gostaria de entender mais sobre a plataforma Jobs.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Assessoria de Vistos, Passaportes & Processos',
        description: 'Plataforma de consulta e acompanhamento de processos de vistos, imigração, agendamento de passaportes e documentação internacional.',
        features: [
          'Checklist Inteligente de Documentação Consular Exigida',
          'Guia Passo a Passo para Preenchimento de Formulários (DS-160)',
          'Monitoramento de Vagas e Datas nos Consulados',
          'Consultoria Imigratória Direta com Especialistas',
          'Acompanhamento de Status de Envio e Deferimento de Vistos'
        ],
        detailsContent: 'Simplifica a burocracia de vistos e imigração com checklists automáticos, validação preventiva de documentos e acompanhamento especializado de etapas consulares para vistos dos EUA, Europa e outros países.',
        technicalHighlights: [
          'Gerador de Checklist Automatizado de Acordo com o Tipo de Visto',
          'Alerta de Vagas Consulares Disponíveis por Notificação',
          'Armazenamento Seguro de Documentos Pessoais',
          'Interface Didática para Agendamento de Entrevistas'
        ],
        targetAudience: 'Viajantes, estudantes, profissionais e famílias em processos de visto e passaporte.',
        whatsappMessage: 'Olá HelpUS! Preciso de assessoria para visto ou passaporte no Visa & Imigração.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Preservação de Legado, Biografias & Histórias',
        description: 'Plataforma afetiva para registro, organização e preservação da história de vida de famílias, acervos biográficos e memórias inesquecíveis.',
        features: [
          'Linha do Tempo Biográfica Interativa',
          'Acervo Digital Seguro para Fotos Antigas, Vídeos e Áudios',
          'Livros Virtuais de Biografia e Memórias Familiares',
          'Compartilhamento Privado Exclusivo para Membros da Família',
          'Transcrição de Depoimentos de Voz por Inteligência Artificial'
        ],
        detailsContent: 'Uma plataforma dedicada a registrar momentos marcantes, histórias familiares e legados pessoais em um acervo digital seguro, permitindo que futuras gerações conheçam e revivam a história de seus antepassados.',
        technicalHighlights: [
          'Arquitetura DER com Suporte a IA para Transcrição de Áudio',
          'Armazenamento Criptografado de Mídia em Nuvem',
          'Controle Estrito de Privacidade e Permissões Familiares',
          'Interface Afetiva e Acessível para Idosos'
        ],
        targetAudience: 'Famílias, biógrafos e pessoas que desejam eternizar suas histórias e legados familiares.',
        whatsappMessage: 'Olá HelpUS! Gostaria de conhecer a plataforma Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan',
        subtitle: 'Branding Pessoal & Portfólio de Soluções',
        description: 'Portfólio de apresentação institucional e consultoria de branding pessoal para executivos, fundadores e projetos especiais da marca.',
        features: [
          'Design de Portfólio Executivo de Alto Impacto Visual',
          'Estratégia de Posicionamento de Marca e Presença Digital',
          'Apresentação de Projetos Especiais, Pitch Decks e Investimentos',
          'Consultoria Direta em Desenvolvimento de Negócios',
          'Integração com Redes Sociais Executivas (LinkedIn)'
        ],
        detailsContent: 'Solução sob medida de branding e estratégia de imagem executiva para lideranças corporativas, investidores e criadores de projetos inovadores que exigem um posicionamento impecável no mercado.',
        technicalHighlights: [
          'Design System Responsivo de Altíssimo Padrão Estético',
          'Carregamento Ultrarrápido e Otimização para Redes Sociais',
          'Apresentações Interativas de Projetos Corporativos',
          'Estratégia Integrada de Autoridade de Marca'
        ],
        targetAudience: 'Executivos, fundadores, consultores e líderes que necessitam de presença digital refinada.',
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre a consultoria de branding executivo Brayyan.'
      }
    }
  },
  en: {
    nav: {
      institutional: 'About HelpUS',
      solutions: 'Solutions',
      help: 'Help & Support',
      contact: 'Contact',
      backToCatalog: '← Back to Catalog'
    },
    hero: {
      title: 'All HelpUS Digital Solutions',
      subtitle: 'Discover the full catalog of applications, systems, and software engineering developed and managed directly by HelpUS.',
      exploreBtn: 'Explore Solutions'
    },
    catalog: {
      title: 'Solutions Organized by Category',
      subtitle: 'Click "Try Now" on any solution to open the dedicated full-page presentation before launching the live application.',
      tryNow: 'Try Now',
      partnerBannerTitle: 'Partner Network Coming Soon',
      partnerBannerDesc: 'Currently displaying proprietary HelpUS applications. Certified partner solutions will be introduced soon.'
    },
    fullPageDetails: {
      backBtn: '← Back to Solutions Catalog',
      overviewTitle: 'Overview & Solution Engineering',
      technicalArchitecture: 'Architecture & Technical Stack',
      targetAudienceTitle: 'Target Audience',
      keyCapabilitiesTitle: 'Features & Technical Highlights',
      officialSubdomain: 'Official Web Address:',
      launchRealApp: 'Access Live Application 🚀',
      contactWhatsApp: 'WhatsApp Inquiries for this Solution',
      folderOrigin: 'Mapped Project Folder:',
      close: 'Close'
    },
    cookies: {
      text: 'We use cookies to ensure the best browsing experience and security across our applications.',
      accept: 'Accept & Close',
      privacyLink: 'Privacy Policy'
    },
    modals: {
      institutionalTitle: 'About HelpUS Technology',
      institutionalDesc: 'HelpUS Technology Solutions is dedicated to custom software development, web/mobile platforms, and digital ecosystem governance.',
      helpTitle: 'Help & Support Center',
      helpDesc: 'Need technical support or have questions regarding our applications? Speak with our central team via WhatsApp or official email.',
      privacyTitle: 'Privacy Policy & Terms of Service',
      privacyDesc: 'We guarantee transparent data handling in compliance with GDPR, LGPD, and international privacy standards.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — All rights reserved.',
      contactTitle: 'Contact HelpUS',
      contactDesc: 'Direct support and corporate inquiry channels.',
      whatsapp: 'WhatsApp: +55 (83) 99872-1848',
      email: 'contato@helpusbr.com',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    },
    categories: {
      todos: 'All Solutions',
      tecnologia: 'Tech & AI',
      saude: 'Healthcare & Medicine',
      servicos: 'Services & Mobility',
      gastronomia: 'Food & Delivery',
      cultura: 'Culture & Biography'
    },
    apps: {
      'helpus-site': {
        name: 'Software Development',
        subtitle: 'Custom Software Development & Systems Engineering',
        description: 'Specialized software engineering team building custom SaaS platforms, responsive web apps, high-performance APIs, and enterprise systems.',
        features: [
          'Full-Stack Software Engineering (React, Node.js, Express, PostgreSQL, Python)',
          'Secure Encrypted RESTful & GraphQL API Architecture',
          'Automated Cloud Deployment (Vercel, AWS, Railway)',
          'Digital Products Storefront with Payment Integration',
          'Custom Design System & Smooth User Experience (UX/UI)'
        ],
        detailsContent: 'HelpUS Software Development designs and builds custom software solutions for businesses of all sizes, from relational database design to full web & mobile apps with CI/CD.',
        technicalHighlights: [
          'PostgreSQL Relational Database hosted on Railway',
          'Secure Authentication via JWT & Permission Middleware',
          'Scalable Serverless Infrastructure on Vercel and Railway',
          'Complete API Documentation via Swagger UI'
        ],
        targetAudience: 'Businesses, startups, and founders needing robust, scalable digital systems.',
        whatsappMessage: 'Hello HelpUS! I would like a quote for custom software development.'
      },
      'nexosai': {
        name: 'Nexos AI',
        subtitle: 'Artificial Intelligence & Autonomous Agents',
        description: 'Advanced AI platform for building autonomous virtual agents, business process automation, and WhatsApp/Webchat integrations.',
        features: [
          'AI Agents Trained on Business Knowledge Base',
          '24/7 Automated Customer Assistance',
          'Official WhatsApp Business API Integration',
          'Automatic Lead Qualification & Scheduling',
          'Advanced Natural Language Processing with LLMs'
        ],
        detailsContent: 'Nexos AI enables businesses to create intelligent virtual agents capable of answering complex inquiries and booking meetings autonomously.',
        technicalHighlights: [
          'Built with Next.js App Router and Prisma ORM',
          'Vector Embeddings & RAG Search Architecture',
          'Direct Connection with Official WhatsApp Business API',
          'Real-time Retention Analytics Dashboard'
        ],
        targetAudience: 'Sales, support, and customer success teams looking to scale without ballooning costs.',
        whatsappMessage: 'Hello HelpUS! I am interested in Nexos AI virtual agents.'
      },
      'usmle': {
        name: 'USMLE Prep Platform',
        subtitle: 'US Medical Licensing Examination Prep • Step 1, Step 2 CK & Step 3',
        description: 'High-performance medical learning platform with interactive QBank, timed NBME/USMLE exam blocks, spaced repetition flashcards, and RAG vector AI tutoring powered by DeepSeek-R1.',
        features: [
          'Interactive QBank with 3,000+ Clinical Vignettes & Detailed Rationales',
          'Timed Exam Blocks (20-min blocks) matching NBME/USMLE Board Exam Standards',
          'RAG AI Medical Tutor powered by DeepSeek-R1 for diagnostic step-by-step reasoning',
          'Spaced Repetition Flashcard Engine for high-yield medical pearls retention',
          'Performance Analytics & Gap Diagnosis by Medical Specialty (Cardiology, Pathology, etc.)',
          'Guided Tracks & Progress Evolution for Step 1, Step 2 CK, and Step 3'
        ],
        detailsContent: 'USMLE Prep provides an immersive clinical learning environment for international medical graduates and US med students. The system integrates PostgreSQL on Railway with item response analytics, discipline-level accuracy tracking, and AI-assisted clinical case reasoning.',
        technicalHighlights: [
          'Built with Next.js App Router, TypeScript, and PostgreSQL on Railway',
          'DeepSeek-R1 & OpenAI RAG Vector Search Engine for step-by-step medical tutoring',
          'Exact Match UI to the Official USMLE / NBME Board Examination Interface',
          'Statistical Spaced Repetition Algorithm for long-term memory retention',
          'Timed Exam Block Session Management with Detailed Attempt Logging'
        ],
        targetAudience: 'Physicians, International Medical Graduates (IMGs), and medical students pursuing US licensing.',
        whatsappMessage: 'Hello HelpUS! I would like to know more about the USMLE Prep Platform.'
      },
      'saude': {
        name: 'Saúde',
        subtitle: 'Telemedicine & Integrated Healthcare Management',
        description: 'Complete system for medical clinics and healthcare providers. Features online appointment booking, EHR, and secure telemedicine.',
        features: [
          'Encrypted Electronic Health Records (EHR)',
          'In-Person & Online Appointment Booking',
          'Secure HD Telemedicine Suite (HIPAA Compliant)',
          'Digital Prescriptions & Lab Order Issuance',
          'Financial & Revenue Management'
        ],
        detailsContent: 'HelpUS Saúde digitizes clinical operations from online booking to encrypted remote consultations and digital prescriptions.',
        technicalHighlights: [
          'LGPD & HIPAA Compliant Data Security Protocol',
          'Low Latency HD Video Suite Integrated via WebRTC',
          'ICP-Brasil Digital Signature for Prescriptions',
          'Cloud Electronic Health Records System'
        ],
        targetAudience: 'Medical clinics, private practices, and independent healthcare providers.',
        whatsappMessage: 'Hello HelpUS! I would like to inquire about HelpUS Saúde for clinics.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Executive Mobility & VIP Transport',
        description: 'Digital platform for executive transport booking, VIP transfers, private rides, and corporate travel management.',
        features: [
          'Advance VIP Transfer & Ride Scheduling',
          'Real-Time Monitored Executive Fleet',
          'Centralized Monthly Corporate Billing',
          'Bilingual Chauffeur Support for Events',
          'Personalized Terminal Greeting Services'
        ],
        detailsContent: 'Corporate mobility platform for airport pickups, VIP event transfers, and intercity travel with complete comfort and punctuality.',
        technicalHighlights: [
          'Instant Confirmation Advance Ride Booking Engine',
          'Real-Time Fleet Telemetry & Chauffeur Tracking',
          'Monthly Corporate Account Reporting',
          'Mobile First Premium UI'
        ],
        targetAudience: 'Executives, corporate teams, hotels, and VIP passengers.',
        whatsappMessage: 'Hello HelpUS! I am interested in Executive Driver VIP services.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Ordering & Management Platform for Pizzerias',
        description: 'Complete delivery and management software for pizzerias. Features digital QR menu, table ordering, and delivery tracking.',
        features: [
          'Interactive Digital QR Code Menu',
          'Half-and-Half Pizza Customizer',
          'Kitchen Display System (KDS)',
          'Courier Dispatching & Delivery Tracking',
          'Sales Reporting & Inventory Management'
        ],
        detailsContent: 'Gastronomy management system modernizing pizzerias by streamlining fractional flavor orders and kitchen workflows.',
        technicalHighlights: [
          'Mobile Optimized Ordering Interface',
          'Real-Time Order Status Updates via WebSockets',
          'Fractional Flavor Price Calculation Engine',
          'Kitchen Display System Panel'
        ],
        targetAudience: 'Pizzerias, restaurants, burger joints, and food delivery businesses.',
        whatsappMessage: 'Hello HelpUS! I want to learn more about Pizza & Delivery.'
      },
      'jobs': {
        name: 'Jobs',
        subtitle: 'Multilingual Employment Marketplace',
        description: 'Global multilingual platform connecting workers, recruiters, and employment opportunities with a focus on international careers.',
        features: [
          'Multilingual Global Job Search',
          'AI-Powered Candidate Matching',
          'Standardized Resumes & Skill Verification',
          'Recruiter ATS Pipeline Dashboard',
          'Automated Opportunity Alerts'
        ],
        detailsContent: 'Connects talent with hiring companies worldwide with automated resume translation and skill matching.',
        technicalHighlights: [
          'AI Compatibility Scoring Engine',
          'Native Multilingual Support in 10+ Languages',
          'Real-Time ATS Hiring Pipeline',
          'Verified Candidate Profiles'
        ],
        targetAudience: 'Job seekers and recruiters hiring local and remote talent.',
        whatsappMessage: 'Hello HelpUS! I would like to know more about Jobs.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Visa, Passport & Immigration Assistance',
        description: 'Platform for checking and tracking visa applications, immigration processes, passport scheduling, and international documentation.',
        features: [
          'Smart Consular Document Checklist',
          'Form Filling Guidance (DS-160 and more)',
          'Consular Appointment Monitoring',
          'Direct Expert Immigration Advisory',
          'Visa Status Tracking & Alerts'
        ],
        detailsContent: 'Simplifies visa bureaucracy with automatic document checklists and consular stage tracking.',
        technicalHighlights: [
          'Dynamic Checklist Generator by Visa Type',
          'Consular Appointment Availability Monitor',
          'Secure Personal Document Storage',
          'Step-by-Step Interview Guidance'
        ],
        targetAudience: 'Travelers, students, and immigrants relocating to the US, Europe, and worldwide.',
        whatsappMessage: 'Hello HelpUS! I need assistance with Visa & Immigration.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Legacy Preservation, Biographies & Life Stories',
        description: 'Heartfelt digital platform for recording, organizing, and preserving family life stories, biographical archives, and memories.',
        features: [
          'Interactive Biographical Timeline',
          'Digital Archive for Photos, Videos & Audio Statements',
          'Virtual Family Biography Books',
          'Private & Secure Access for Future Generations',
          'AI Voice Statement Transcription'
        ],
        detailsContent: 'A dedicated digital archive for families to record life stories, oral histories, and family legacies for generations to come.',
        technicalHighlights: [
          'AI Audio Transcription Pipeline',
          'Encrypted Cloud Media Storage',
          'Strict Family Privacy Controls',
          'Senior-Friendly Interface Design'
        ],
        targetAudience: 'Families, biographers, and individuals preserving personal histories.',
        whatsappMessage: 'Hello HelpUS! I would like to explore Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan',
        subtitle: 'Personal Branding & Solutions Portfolio',
        description: 'Executive presentation portfolio and personal branding advisory for founders, executives, and special brand projects.',
        features: [
          'High-Impact Executive Portfolio Design',
          'Brand Positioning & Digital Presence Strategy',
          'Special Projects & Investment Showcase',
          'Direct Business Development Advisory',
          'Executive LinkedIn Integration'
        ],
        detailsContent: 'Tailored executive brand positioning and digital strategy for corporate leaders, investors, and founders.',
        technicalHighlights: [
          'Ultra High Aesthetic Responsive Design System',
          'Fast Loading Social Media Optimization',
          'Interactive Pitch Deck Presentations',
          'Integrated Brand Authority Strategy'
        ],
        targetAudience: 'Executives, founders, consultants, and leaders needing a refined digital presence.',
        whatsappMessage: 'Hello HelpUS! I would like to know more about Brayyan advisory.'
      }
    }
  },
  es: {
    nav: {
      institutional: 'Sobre HelpUS',
      solutions: 'Soluciones',
      help: 'Ayuda y Soporte',
      contact: 'Contacto',
      backToCatalog: '← Volver al Catálogo'
    },
    hero: {
      title: 'Todas las Soluciones Digitales HelpUS',
      subtitle: 'Conozca el catálogo completo de aplicaciones, sistemas e ingeniería de software desarrollados y gestionados directamente por HelpUS.',
      exploreBtn: 'Explorar Soluciones'
    },
    catalog: {
      title: 'Soluciones Organizadas por Categoría',
      subtitle: 'Haga clic en "Experimente Ahora" para abrir la presentación completa antes de ir a la aplicación real.',
      tryNow: 'Experimente Ahora',
      partnerBannerTitle: 'Red de Socios Próximamente',
      partnerBannerDesc: 'Actualmente mostramos las aplicaciones propias de HelpUS. Próximamente abriremos espacio para socios homologados.'
    },
    fullPageDetails: {
      backBtn: '← Volver al Catálogo de Soluciones',
      overviewTitle: 'Visión General e Ingeniería',
      technicalArchitecture: 'Arquitectura y Recursos Técnicos',
      targetAudienceTitle: 'Público Objetivo',
      keyCapabilitiesTitle: 'Aspectos Destacados',
      officialSubdomain: 'Dirección Web Oficial:',
      launchRealApp: 'Acceder a la Aplicación Real 🚀',
      contactWhatsApp: 'Atención por WhatsApp para esta Solución',
      folderOrigin: 'Proyecto Mapeado:',
      close: 'Cerrar'
    },
    cookies: {
      text: 'Utilizamos cookies para garantizar la mejor experiencia de navegación y seguridad en nuestras aplicaciones.',
      accept: 'Aceptar y Cerrar',
      privacyLink: 'Política de Privacidad'
    },
    modals: {
      institutionalTitle: 'Sobre HelpUS Technology',
      institutionalDesc: 'HelpUS Technology Solutions se dedica al desarrollo de software a medida, plataformas web/móviles y gobernanza de ecosistemas digitales.',
      helpTitle: 'Centro de Ayuda y Soporte',
      helpDesc: '¿Necesita soporte técnico o tiene preguntas? Hable con nuestro equipo central por WhatsApp o correo electrónico oficial.',
      privacyTitle: 'Política de Privacidad y Términos',
      privacyDesc: 'Garantizamos el tratamiento transparente de datos personales de acuerdo con las normativas internacionales de privacidad.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — Todos los derechos reservados.',
      contactTitle: 'Hable con HelpUS',
      contactDesc: 'Atención directa por WhatsApp o correo electrónico corporativo.',
      whatsapp: 'WhatsApp: +55 (83) 99872-1848',
      email: 'contato@helpusbr.com',
      privacy: 'Privacidad y Protección de Datos',
      terms: 'Términos de Uso'
    },
    categories: {
      todos: 'Todas las Soluciones',
      tecnologia: 'Tecnología e IA',
      saude: 'Salud y Medicina',
      servicos: 'Servicios y Movilidad',
      gastronomia: 'Alimentación y Delivery',
      cultura: 'Cultura y Biografía'
    },
    apps: {
      'helpus-site': {
        name: 'Software Development',
        subtitle: 'Desarrollo de Software a Medida e Ingeniería de Sistemas',
        description: 'Fábrica de software especializada en la creación de plataformas SaaS, sistemas web responsivos, APIs de alto rendimiento y aplicaciones corporativas.',
        features: [
          'Ingeniería Full-Stack (React, Node.js, Express, PostgreSQL, Python)',
          'Arquitectura de APIs RESTful y GraphQL Encriptadas',
          'Despliegue Automatizado en la Nube (Vercel, AWS, Railway)',
          'Tienda de Productos Digitales e Integración de Pagos',
          'Diseño de Experiencia de Usuario (UX/UI) de Alto Rendimiento'
        ],
        detailsContent: 'El servicio de Desarrollo de Software de HelpUS diseña y construye soluciones digitales personalizadas para empresas de todos los tamaños.',
        technicalHighlights: [
          'Base de Datos PostgreSQL en Railway',
          'Autenticación Segura mediante JWT',
          'Infraestructura Escalable en Vercel y Railway',
          'Documentación Completa de API con Swagger UI'
        ],
        targetAudience: 'Empresas, startups y emprendedores que necesitan sistemas digitales sólidos y escalables.',
        whatsappMessage: '¡Hola HelpUS! Quisiera un presupuesto para desarrollo de software a medida.'
      },
      'nexosai': {
        name: 'Nexos AI',
        subtitle: 'Inteligencia Artificial y Agentes Autónomos',
        description: 'Plataforma avanzada de IA para la creación de agentes virtuales autónomos, automatización de procesos e integración con WhatsApp.',
        features: [
          'Agentes de IA Entrenados con Datos Empresariales',
          'Atención Automatizada 24/7',
          'Integración Oficial con WhatsApp Business API',
          'Cualificación Automática de Clientes',
          'Procesamiento de Lenguaje Natural con LLMs'
        ],
        detailsContent: 'Cree asistentes virtuales inteligentes entrenados con la base de conocimientos de su empresa para atención automatizada.',
        technicalHighlights: [
          'Desarrollado en Next.js App Router con Prisma ORM',
          'Arquitectura de Búsqueda Vectorial RAG',
          'Conexión Directa con WhatsApp Business API',
          'Panel de Métricas en Tiempo Real'
        ],
        targetAudience: 'Equipos de ventas y atención que desean escalar operaciones sin aumentar costos.',
        whatsappMessage: '¡Hola HelpUS! Tengo interés en los Agentes de IA de Nexos AI.'
      },
      'usmle': {
        name: 'USMLE Prep Platform',
        subtitle: 'Revalidación Médica Internacional en EE. UU. • Step 1, Step 2 CK & Step 3',
        description: 'Plataforma médica de alto rendimiento con banco de preguntas interactivo (QBank), simulados cronometrados en el formato NBME/USMLE, tarjetas de repetición espaciada y tutoría IA con búsqueda vectorial RAG por DeepSeek-R1.',
        features: [
          'Banco de Preguntas QBank con +3.000 casos clínicos comentados',
          'Simulados Cronometrados (Bloques de 20 min) en el formato oficial NBME/USMLE',
          'Tutor Virtual RAG con DeepSeek-R1 para razonamiento diagnóstico paso a paso',
          'Flashcards de Repetición Espaciada para retención de conceptos clave',
          'Reportes de Rendimiento Estadístico por Especialidad Médica (Cardiología, Patología, etc.)',
          'Rutas Guiadas y Seguimiento de Progreso para Step 1, Step 2 CK y Step 3'
        ],
        detailsContent: 'USMLE Prep ofrece un entorno inmersivo de estudio clínico para médicos internacionales y estudiantes de medicina que buscan la licencia médica en EE. UU. Integra PostgreSQL en Railway con análisis estadístico de respuestas por disciplina y asistencia IA para resolución de casos.',
        technicalHighlights: [
          'Desarrollado en Next.js App Router con TypeScript y PostgreSQL en Railway',
          'Motor IA RAG con DeepSeek-R1 para tutoría clínica explicativa',
          'Interfaz en conformidad idéntica al examen oficial americano NBME/USMLE',
          'Algoritmo de repetición espaciada para retención de memoria a largo plazo',
          'Gestión de sesiones de simulados cronometrados y registro de intentos por usuario'
        ],
        targetAudience: 'Médicos y estudiantes de medicina preparando la revalidación médica en EE. UU.',
        whatsappMessage: '¡Hola HelpUS! Quisiera saber más sobre la plataforma USMLE Prep.'
      },
      'saude': {
        name: 'Saúde',
        subtitle: 'Telemedicina y Gestión Integrada de Salud',
        description: 'Sistema completo para clínicas y profesionales de la salud. Ofrece reserva de citas online, historia clínica electrónica y telemedicina.',
        features: [
          'Historia Clínica Electrónica Encriptada',
          'Reserva de Citas Presenciales y Online',
          'Sala de Telemedicina HD Segura (HIPAA)',
          'Emisión Digital de Recetas y Exámenes',
          'Gestión Financiera de Salud'
        ],
        detailsContent: 'Software clínico completo con agenda online, expediente digital encriptado y consultas virtuales seguras.',
        technicalHighlights: [
          'Seguridad Compatible con LGPD y HIPAA',
          'Video HD de Baja Latencia vía WebRTC',
          'Firma Digital de Documentos Médicos',
          'Historial Clínico en la Nube'
        ],
        targetAudience: 'Clínicas médicas, consultorios privados y profesionales de la salud.',
        whatsappMessage: '¡Hola HelpUS! Quisiera consultar sobre HelpUS Saúde para mi clínica.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Movilidad Ejecutiva y Transporte VIP',
        description: 'Solución digital para reserva de transporte ejecutivo, transfer VIP, viajes privados y gestión de viajes corporativos.',
        features: [
          'Reserva Anticipada de Viajes VIP',
          'Flota Ejecutiva Monitoreada en Tiempo Real',
          'Facturación Corporativa Mensual Centralizada',
          'Choferes Bilingües para Eventos',
          'Recepción Personalizada en Aeropuertos'
        ],
        detailsContent: 'Gestione reservas VIP de vehículos ejecutivos, control de itinerarios y traslados corporativos en tiempo real.',
        technicalHighlights: [
          'Confirmación Instantánea de Reservas',
          'Telemetría de Flota y Rastreo en Tiempo Real',
          'Reportes Mensuales Corporativos',
          'Diseño Móvil de Alto Nivel'
        ],
        targetAudience: 'Ejecutivos, empresas, hoteles y pasajeros VIP.',
        whatsappMessage: '¡Hola HelpUS! Tengo interés en Executive Driver.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Gestión y Pedidos Online para Pizzerías',
        description: 'Plataforma completa de delivery y gestión para pizzerías. Incluye menú digital interactivo, pedidos en mesa y gestión de delivery.',
        features: [
          'Menú Digital Interactivo mediante Código QR',
          'Personalizador de Sabores Mitad y Mitad',
          'Sistema de Pantalla de Cocina (KDS)',
          'Gestión y Seguimiento de Repartidores',
          'Reportes de Ventas e Inventario'
        ],
        detailsContent: 'Sistema de gestión gastronómica con menú QR, personalizador interactivo de sabores y gestión de repartidores.',
        technicalHighlights: [
          'Interfaz Móvil Fluida para Pedidos',
          'Estados de Pedido en Tiempo Real vía WebSockets',
          'Cálculo Automático de Precios Fraccionados',
          'Panel de Gestión de Cocina'
        ],
        targetAudience: 'Pizzerías, restaurantes y negocios de comida a domicilio.',
        whatsappMessage: '¡Hola HelpUS! Quiero conocer Pizza & Delivery.'
      },
      'jobs': {
        name: 'Jobs',
        subtitle: 'Marketplace Multilingüe de Empleos',
        description: 'Plataforma global multilingüe para conectar trabajadores, reclutadores y oportunidades laborales internacionales.',
        features: [
          'Búsqueda Multilingüe de Empleos Globales',
          'Match Inteligente Candidato-Vacante',
          'Curriculum Estandarizado y Verificación',
          'Panel ATS de Selección de Personal',
          'Alertas Automáticas de Vacantes'
        ],
        detailsContent: 'Conecta a profesionales con empleo internacional y local mediante algoritmos avanzados de coincidencia.',
        technicalHighlights: [
          'Puntuación de Compatibilidad por IA',
          'Soporte Multilingüe en 10+ Idiomas',
          'Funel de Reclutamiento ATS en Tiempo Real',
          'Perfiles Profesionales Verificados'
        ],
        targetAudience: 'Buscadores de empleo y reclutadores contratando talento local y remoto.',
        whatsappMessage: '¡Hola HelpUS! Quisiera entender más sobre Jobs.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Asesoría de Visados, Pasaportes y Procesos',
        description: 'Plataforma de consulta y seguimiento de trámites de visados, inmigración, pasaportes y documentación internacional.',
        features: [
          'Checklist Inteligente de Documentación Consular',
          'Guía para Cumplimentar Formularios (DS-160)',
          'Monitoreo de Citas Consulares',
          'Asesoría Directa de Expertos',
          'Seguimiento de Estado del Visado'
        ],
        detailsContent: 'Portal de asesoría de inmigración con guías de documentación y seguimiento de citas consulares.',
        technicalHighlights: [
          'Generador Dinámico de Checklists',
          'Monitor de Disponibilidad de Citas Consulares',
          'Almacenamiento Seguro de Documentos',
          'Guía Paso a Paso para Entrevistas'
        ],
        targetAudience: 'Viajeros, estudiantes e inmigrantes con destino a EE. UU. y Europa.',
        whatsappMessage: '¡Hola HelpUS! Necesito ayuda con Visa & Imigração.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Preservación de Legado, Biografias e Historias',
        description: 'Plataforma digital afectiva para registrar, organizar y preservar historias de vida familiares, biografías y recuerdos.',
        features: [
          'Línea de Tiempo Biográfica Interactiva',
          'Archivo Digital de Fotos, Videos y Audio',
          'Libros Virtuales de Biografía Familiar',
          'Acceso Privado y Seguro',
          'Transcripción de Audio por Inteligencia Artificial'
        ],
        detailsContent: 'Espacio dedicado a conservar memorias familiares, audios históricos y libros de biografías para futuras generaciones.',
        technicalHighlights: [
          'Arquitectura con Transcripción de Audio por IA',
          'Almacenamiento Encriptado en la Nube',
          'Controles Estrictos de Privacidad Familiar',
          'Diseño Accesible para Personas Mayores'
        ],
        targetAudience: 'Familias y personas interesadas en preservar su historia personal.',
        whatsappMessage: '¡Hola HelpUS! Quisiera conocer Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan',
        subtitle: 'Branding Personal y Portafolio de Soluciones',
        description: 'Portafolio de presentación ejecutiva y consultoría de branding personal para fundadores y proyectos especiales.',
        features: [
          'Diseño de Portafolio Ejecutivo de Alto Impacto',
          'Estrategia de Posicionamiento y Presencia Digital',
          'Presentación de Proyectos Especiales e Inversiones',
          'Consultoría Directa de Desarrollo de Negocios',
          'Integración con LinkedIn Executivo'
        ],
        detailsContent: 'Solución personalizada de marca ejecutiva y consultoría de negocios para líderes y emprendedores.',
        technicalHighlights: [
          'Diseño Responsivo de Altísimo Nivel Estético',
          'Carga Rápida y Optimización para Redes Sociales',
          'Presentaciones Interactivas de Proyectos',
          'Estrategia Integrada de Autoridad de Marca'
        ],
        targetAudience: 'Ejecutivos, fundadores y consultores que requieren presencia digital de alto nivel.',
        whatsappMessage: '¡Hola HelpUS! Quisiera saber más sobre Brayyan.'
      }
    }
  }
};

export type Language = 'pt' | 'en' | 'es';

export interface TranslationSchema {
  nav: {
    institutional: string;
    solutions: string;
    help: string;
    contact: string;
    backToCatalog: string;
    allSites: string;
    theCompany: string;
    aiSolutions: string;
    infraPay: string;
    sectoral: string;
    siteNetwork: string;
  };
  hero: {
    title: string;
    subtitle: string;
    exploreBtn: string;
    badge: string;
    sitesBadge: string;
    watchVideo: string;
    btnAi: string;
    btnVideo: string;
    videoTitle: string;
    videoSubtitle: string;
  };
  metrics: {
    subdomains: string;
    ai247: string;
    serverless: string;
    zeroRework: string;
  };
  whoWeAre: {
    badge: string;
    title: string;
    desc: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
  };
  businessDivisions: {
    badge: string;
    title: string;
    desc: string;
    g1Title: string;
    g1Desc: string;
    g1Btn: string;
    g2Title: string;
    g2Desc: string;
    g2Btn: string;
    g3Title: string;
    g3Desc: string;
    g3Btn: string;
  };
  security: {
    badge: string;
    title: string;
    desc: string;
    c1Title: string;
    c1Desc: string;
    c2Title: string;
    c2Desc: string;
    c3Title: string;
    c3Desc: string;
  };
  viewHeaders: {
    aiTitle: string;
    aiBadge: string;
    aiDesc: string;
    infraTitle: string;
    infraBadge: string;
    infraDesc: string;
    sectoralTitle: string;
    sectoralBadge: string;
    sectoralDesc: string;
  };
  common: {
    backToCompany: string;
    talkWhatsApp: string;
    launchApp: string;
    openInstagramVideo: string;
    closeVideo: string;
    searchPlaceholder: string;
    officialSubdomain: string;
    demoSystem: string;
    allEcosystemSites: string;
    filterAll: string;
    filterOwn: string;
    filterClient: string;
    noResults: string;
  };
  megaMenu: {
    platforms: string;
    services: string;
    foodCulture: string;
    allSites: string;
    clientSites: string;
    exploreMesh: string;
  };
  videoModal: {
    title: string;
    subtitle: string;
    close: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    tryNow: string;
    partnerBannerTitle: string;
    partnerBannerDesc: string;
    quickLaunch: string;
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
    clientes: string;
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
      backToCatalog: '← Voltar ao Início',
      allSites: 'Rede de Sites',
      theCompany: 'A Empresa',
      aiSolutions: 'Soluções de I.A.',
      infraPay: 'Infraestrutura & Pay',
      sectoral: 'Ecossistemas Setoriais',
      siteNetwork: 'Rede de Sites (24)'
    },
    hero: {
      badge: 'Engenharia de Software Sob Medida & Orquestração de I.A.',
      title: 'HelpUS Technology Solutions',
      subtitle: 'Desenvolvemos ecossistemas corporativos inteligentes, automação autônoma no WhatsApp, sistemas web sob medida e orquestração de Inteligência Artificial para alavancar empresas de alta performance.',
      exploreBtn: 'Explorar Soluções',
      sitesBadge: 'Soluções Ativas no Ar',
      watchVideo: 'Assistir Vídeo Institucional',
      btnAi: 'Conhecer Soluções de I.A.',
      btnVideo: 'Assistir Vídeo Institucional',
      videoTitle: 'Conheça Nossas Soluções & Engenharia em Ação',
      videoSubtitle: 'Clique para assistir à demonstração da nossa infraestrutura, robôs de atendimento e plataformas corporativas.'
    },
    metrics: {
      subdomains: 'Subdomínios Ativos no Ar',
      ai247: 'Atendimento Autônomo com IA',
      serverless: 'Infraestrutura Serverless',
      zeroRework: 'Sem Retrabalho de Redigitação'
    },
    whoWeAre: {
      badge: 'Engenharia & Arquitetura Corporativa',
      title: 'Quem Somos & Como Transformamos Operações',
      desc: 'A HelpUS Technology é uma empresa de engenharia de software focada na criação de ecossistemas digitais robustos. Desenvolvemos desde motores de Inteligência Artificial Generativa até gateways de pagamentos e portais de alta disponibilidade.',
      p1Title: 'Automação Autônoma 24/7',
      p1Desc: 'Agentes virtuais inteligentes integrados ao WhatsApp Cloud API capazes de responder dúvidas de clientes, agendar horários e qualificar leads sem pausa.',
      p2Title: 'Engenharia Serverless Mesh',
      p2Desc: 'Rede de microsserviços e subdomínios independentes distribuídos na Vercel Cloud, garantindo carregamento instantâneo, SSL de alta segurança e uptime de 99.9%.',
      p3Title: 'Finanças & Cobrança Unificada',
      p3Desc: 'Integração nativa com PIX QR Code instantâneo, conciliação de faturas e sistema SSO único para controle de acessos em todas as plataformas da empresa.'
    },
    businessDivisions: {
      badge: 'Nossas Divisões de Negócio',
      title: 'Explore Nosso Portfólio por Áreas',
      desc: 'Selecione uma área de atuação para navegar pelas apresentações completas e aplicações ativas no ar.',
      g1Title: 'Soluções de I.A. Generativa',
      g1Desc: 'Suíte completa com robôs de atendimento no WhatsApp, estúdio de síntese neural de voz, motor de pesquisa com citações e gerador visual de slides.',
      g1Btn: 'Acessar Soluções de I.A.',
      g2Title: 'Infraestrutura & Pay Engine',
      g2Desc: 'Gateway PIX recorrente, login único criptografado (SSO), dashboard admin de monitoramento de status e CRM omnichannel de vendas.',
      g2Btn: 'Acessar Infraestrutura & Pay',
      g3Title: 'Ecossistemas Setoriais',
      g3Desc: 'Plataformas especializadas para imobiliárias (RealEstate), saúde e revalidação (USMLE), mobilidade executiva, gastronomia e legados biográficos.',
      g3Btn: 'Acessar Ecossistemas Setoriais'
    },
    security: {
      badge: 'Segurança & Governança',
      title: 'Infraestrutura de Alto Desempenho & Criptografia 256-bit',
      desc: 'Todas as soluções da HelpUS contam com proteção SSL ativa, arquitetura distribuída serverless e conformidade de dados para operar negócios sem riscos.',
      c1Title: 'SSL Criptografado',
      c1Desc: 'Comunicação segura com certificado TLS em 100% das requisições.',
      c2Title: '99.9% Uptime Global',
      c2Desc: 'Monitoramento ativo em tempo real pela central de status.',
      c3Title: 'Suporte Dedicado',
      c3Desc: 'Atendimento executivo diretamente via WhatsApp e E-mail.'
    },
    viewHeaders: {
      aiTitle: 'Apresentação das Soluções de I.A.',
      aiBadge: 'Suíte de Inteligência Artificial Corporativa',
      aiDesc: 'Apresentação detalhada dos módulos de inteligência artificial desenvolvidos para automação de atendimento, síntese neural de voz, pesquisa verificável com fontes e geração visual de apresentações.',
      infraTitle: 'Infraestrutura, SSO & Pagamentos',
      infraBadge: 'Motores Corporativos & Segurança',
      infraDesc: 'Plataformas de suporte para autenticação de usuários, monitoramento de saúde de serviços, relatórios gerenciais e cobrança automatizada com PIX.',
      sectoralTitle: 'Ecossistemas Setoriais Especializados',
      sectoralBadge: 'Soluções por Segmento de Mercado',
      sectoralDesc: 'Aplicações desenvolvidas sob medida para o mercado imobiliário, exames médicos, mobilidade urbana executiva, gastronomia e acervos culturais.'
    },
    common: {
      backToCompany: '← Voltar para A Empresa',
      talkWhatsApp: 'Falar no WhatsApp',
      launchApp: 'Acessar Aplicação 🚀',
      openInstagramVideo: 'Abrir Vídeo no Instagram',
      closeVideo: 'Fechar Vídeo',
      searchPlaceholder: 'Buscar aplicação ou subdomínio...',
      officialSubdomain: 'Subdomínio Oficial:',
      demoSystem: 'Demonstração do Sistema — ',
      allEcosystemSites: 'Rede Global de Sites & Aplicações',
      filterAll: 'Todas (24)',
      filterOwn: 'Plataformas Próprias',
      filterClient: 'Projetos de Clientes',
      noResults: 'Nenhuma aplicação encontrada com este termo.'
    },
    megaMenu: {
      platforms: 'Plataformas Principais',
      services: 'Serviços & Mobilidade',
      foodCulture: 'Gastronomia & Cultura',
      allSites: 'Rede de Sites Completa',
      clientSites: 'Projetos & Clientes',
      exploreMesh: 'Explorar Ecossistema 🚀'
    },
    videoModal: {
      title: 'Vídeo Institucional — HelpUS Technology',
      subtitle: 'Conheça nossa engenharia, ecossistema de plataformas e soluções corporativas em ação.',
      close: 'Fechar Vídeo'
    },
    catalog: {
      title: 'Ecossistema de Soluções por Categoria',
      subtitle: 'Selecione a categoria desejada para navegar pelas plataformas ativas ou ver detalhes técnicos.',
      tryNow: 'Detalhes Técnicos ➔',
      quickLaunch: 'Acessar Plataforma 🚀',
      partnerBannerTitle: 'Rede Completa de Sites & Clientes',
      partnerBannerDesc: 'Desenvolvemos e gerenciamos plataformas corporativas e portais sob medida.'
    },
    fullPageDetails: {
      backBtn: '← Voltar ao Ecossistema',
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
      privacyDesc: 'Garantimos o tratamento transparente de dados pessoais, em conformidade com a LGPD e regulamentações internacionais de privacidade.'
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
      cultura: 'Cultura & Biografia',
      clientes: 'Clientes & Especializados'
    },
    apps: {
      'helpus-site': {
        name: 'HelpUS Main Portal',
        subtitle: 'Portal Institucional & Central do Ecossistema',
        description: 'Portal principal da HelpUS Technology Solutions com navegação unificada por subdomínios, apresentações executivas e central de serviços.',
        features: ['Roteamento por Subdomínios', 'Vídeo Institucional Integrado', 'Suporte Multi-idioma (PT/EN/ES)'],
        detailsContent: 'Interface central do ecossistema HelpUS conectando todas as aplicações e serviços corporativos.',
        technicalHighlights: ['Vite + React + TailwindCSS', 'Cloudflare DNS Engine', 'Vercel Serverless Mesh'],
        targetAudience: 'Executivos, clientes e parceiros corporativos.',
        whatsappMessage: 'Olá HelpUS! Gostaria de falar com a equipe institucional.'
      },
      'helpus-search': {
        name: 'HelpUS Search AI',
        subtitle: 'Busca Unificada & Motor Preditivo de Respostas',
        description: 'Engine avançado de inteligência artificial generativa com citação de fontes, busca em tempo real e síntese de relatórios executivos.',
        features: ['Pesquisa com Citação de Fontes Verificáveis', 'Síntese de Conteúdo em Tempo Real', 'Interface Perplexity-Style'],
        detailsContent: 'Motor de inteligência artificial de buscas corporativas projetado para extrair insights precisos.',
        technicalHighlights: ['OpenAI GPT-4o API', 'Perplexity Engine API', 'Streaming Responses'],
        targetAudience: 'Pesquisadores, analistas e gestores de dados.',
        whatsappMessage: 'Olá HelpUS! Gostaria de testar o HelpUS Search AI.'
      },
      'helpus-agent': {
        name: 'HelpUS AI Agent Studio',
        subtitle: 'Criador de Agentes Virtuais Autônomos 24/7',
        description: 'Plataforma para criação, treinamento e gestão de agentes inteligentes integrados ao WhatsApp Cloud API e sistemas corporativos.',
        features: ['Treinamento de Agentes com PDFs e Links', 'Integração Nativa WhatsApp Cloud API', 'Qualificação Autônoma de Leads'],
        detailsContent: 'Estúdio de agentes autônomos que transformam o atendimento ao cliente e suporte operacional.',
        technicalHighlights: ['Vector Database RAG Engine', 'WhatsApp Webhook Routing'],
        targetAudience: 'Times de vendas, suporte ao cliente e operações.',
        whatsappMessage: 'Olá HelpUS! Quero criar um Agente de IA para a minha empresa.'
      },
      'helpus-voice': {
        name: 'HelpUS Voice AI',
        subtitle: 'Gerador Neural de Vozes & Narrações',
        description: 'Estúdio de síntese vocal por IA para geração de narrações hiper-realistas, mensagens de áudio para WhatsApp e locução de vídeos.',
        features: ['Vozes Neurais em Múltiplos Idiomas', 'Exportação MP3/WAV de Alta Qualidade', 'Clonagem Vocal & Ajuste de Tom'],
        detailsContent: 'Plataforma de inteligência vocal para criação instantânea de locuções profissionais.',
        technicalHighlights: ['ElevenLabs Neural API', 'Audio Processing Pipeline'],
        targetAudience: 'Criadores de conteúdo, agências de marketing e equipes de vendas.',
        whatsappMessage: 'Olá HelpUS! Gostaria de experimentar o HelpUS Voice AI.'
      },
      'helpus-slides': {
        name: 'HelpUS AI Slides',
        subtitle: 'Gerador de Apresentações & Pitch Decks IA',
        description: 'Criador automático de apresentações visuais e slides profissionais a partir de um resumo ou tópico em pouquíssimos segundos.',
        features: ['Geração Instantânea de Pitch Decks', 'Exportação para PDF & PowerPoint', 'Layouts Visuais Elegantes'],
        detailsContent: 'Ferramenta de IA generativa para criar apresentações executivas com velocidade e padrão visual elevado.',
        technicalHighlights: ['Gamma-Style AI Engine', 'PDF Generation Pipeline'],
        targetAudience: 'Executivos, fundadores de startups e palestrantes.',
        whatsappMessage: 'Olá HelpUS! Quero utilizar o HelpUS AI Slides.'
      },
      'helpus-pay': {
        name: 'HelpUS Pay Engine',
        subtitle: 'Gateway de Pagamentos & PIX Recorrente',
        description: 'Infraestrutura financeira com suporte a PIX instantâneo, cobrança recorrente, webhooks de notificação e conciliação bancária.',
        features: ['Gerador de QR Code PIX Instantâneo', 'Assinaturas & Cobrança Recorrente', 'Webhooks em Tempo Real'],
        detailsContent: 'Engine financeiro para automação de recebimentos e fluxo de caixa de produtos digitais.',
        technicalHighlights: ['Asaas / MercadoPago API', 'PIX Dynamic QR Code'],
        targetAudience: 'Empresas SaaS, e-commerces e prestadores de serviços.',
        whatsappMessage: 'Olá HelpUS! Quero integrar o HelpUS Pay ao meu negócio.'
      },
      'helpus-docs': {
        name: 'HelpUS Developer Docs',
        subtitle: 'Portal de Documentação da API & Desenvolvedores',
        description: 'Central de documentação técnica com exemplos de código em cURL, Node.js e Python para integração com o ecossistema HelpUS.',
        features: ['Exemplos de Código Interativos', 'Guias de Autenticação Bearer Token', 'Swagger / OpenAPI Spec'],
        detailsContent: 'Portal para desenvolvedores integrarem microsserviços da HelpUS em suas aplicações.',
        technicalHighlights: ['Redoc / Swagger UI', 'Code Snippet Generator'],
        targetAudience: 'Desenvolvedores, engenheiros de software e CTOs.',
        whatsappMessage: 'Olá HelpUS! Tenho dúvidas sobre as APIs na documentação.'
      },
      'helpus-auth': {
        name: 'HelpUS Auth SSO',
        subtitle: 'Portal de Autenticação Criptografada & Single Sign-On',
        description: 'Sistema centralizado de login único (SSO) com suporte a JWT, OAuth2, 2FA e gerenciamento de permissões de usuários.',
        features: ['Login Único para Todas as Aplicações', 'Autenticação Criptografada JWT', 'Suporte a 2FA e OAuth2'],
        detailsContent: 'Plataforma de segurança e identidade corporativa unificada para todos os produtos HelpUS.',
        technicalHighlights: ['JWT Auth Engine', 'Redis Session Management'],
        targetAudience: 'Usuários corporativos e administradores de TI.',
        whatsappMessage: 'Olá HelpUS! Preciso de ajuda com o portal de Login SSO.'
      },
      'helpus-crm': {
        name: 'HelpUS CRM Omnichannel',
        subtitle: 'CRM de Vendas & Gestão de Atendimento WhatsApp',
        description: 'Painel Kanban para gestão de oportunidades de vendas, distribuição de conversas do WhatsApp e métricas de desempenho da equipe.',
        features: ['Pipelines Kanban de Vendas', 'Multi-atendentes no Mesmo WhatsApp', 'Relatórios de Conversão'],
        detailsContent: 'Sistema de vendas e relacionamento com clientes com automação de mensagens e acompanhamento de funil.',
        technicalHighlights: ['Omnichannel Routing Engine', 'Kanban Drag & Drop UI'],
        targetAudience: 'Gerentes de vendas, corretores e equipes comerciais.',
        whatsappMessage: 'Olá HelpUS! Gostaria de demonstrar o HelpUS CRM.'
      },
      'helpus-admin': {
        name: 'HelpUS Admin Dashboard',
        subtitle: 'Painel Master de Métricas, Uptime & Analytics',
        description: 'Central de controle e inteligência com status de uptime em tempo real dos subdomínios, feed de leads e métricas globais.',
        features: ['Monitor de Uptime em Tempo Real', 'Feed Unificado de Leads Capturados', 'Analytics de Tráfego'],
        detailsContent: 'Dashboard executivo de controle 360 do ecossistema de plataformas HelpUS.',
        technicalHighlights: ['WebSocket Live Feeds', 'Analytics Data Engine'],
        targetAudience: 'Administradores, diretores e gestores HelpUS.',
        whatsappMessage: 'Olá HelpUS! Gostaria de suporte sobre o Painel Admin.'
      },
      'helpus-status': {
        name: 'HelpUS Status Engine',
        subtitle: 'Monitor Global de Saúde dos Serviços & Uptime',
        description: 'Página pública de acompanhamento da disponibilidade de todos os subdomínios, APIs e bancos de dados do ecossistema.',
        features: ['Monitoramento Ativo 24/7 de Subdomínios', 'Histórico de Latência & Incidentes', 'Notificações de Manutenção'],
        detailsContent: 'Plataforma de transparência e garantia de SLA para clientes e usuários HelpUS.',
        technicalHighlights: ['Automated Ping Checkers', 'Status Page Engine'],
        targetAudience: 'Clientes, desenvolvedores e equipes de suporte.',
        whatsappMessage: 'Olá HelpUS! Consultando sobre o status dos serviços.'
      },
      'helpus-market': {
        name: 'HelpUS Marketplace',
        subtitle: 'Loja de Plugins & Webhooks 1-Clique',
        description: 'Catálogo de integrações para conectar o ecossistema HelpUS a plataformas externas como Zapier, N8N, Shopify e CRM.',
        features: ['Integrações 1-Clique com Webhooks', 'Plugins para WhatsApp & Pagamentos', 'Chaves de API Configuráveis'],
        detailsContent: 'Hub de extensões para turbinar fluxos de trabalho com ferramentas de terceiros.',
        technicalHighlights: ['Webhook Dispatcher API', 'Plugin Architecture'],
        targetAudience: 'Integradores, gestores de tecnologia e analistas de processo.',
        whatsappMessage: 'Olá HelpUS! Quero integrar um plugin ao meu sistema.'
      },
      'helpus-marketing': {
        name: 'HelpUS Growth & Ads',
        subtitle: 'Gerador de Anúncios & Copywriting com IA',
        description: 'Ferramenta inteligente para criação automática de anúncios para Meta Ads, Google Ads, posts de redes sociais e textos de alta conversão.',
        features: ['Geração de Anúncios para Instagram e Google', 'Copywriting com Foco em Conversão', 'Gerador de Legendas & Hashtags'],
        detailsContent: 'Plataforma de automação de marketing para aceleração de campanhas digitais.',
        technicalHighlights: ['Copywriting AI Engine', 'Ad Template Builder'],
        targetAudience: 'Times de marketing, gestores de tráfego e agências.',
        whatsappMessage: 'Olá HelpUS! Gostaria de testar o HelpUS Growth & Ads.'
      },
      'helpus-app': {
        name: 'HelpUS SuperApp Portal',
        subtitle: 'Portal do Consumidor Final & Serviços Locais',
        description: 'SuperApp para acesso direto a serviços, agendamentos, delivery e soluções de mobilidade em uma única interface responsiva.',
        features: ['Interface Mobile-First Intuitiva', 'Acesso Centralizado a Serviços', 'Histórico de Pedidos & Agendamentos'],
        detailsContent: 'Aplicação voltada para a experiência do usuário final no consumo de serviços da rede.',
        technicalHighlights: ['PWA Framework', 'Mobile Optimized UI'],
        targetAudience: 'Consumidores finais e clientes da rede HelpUS.',
        whatsappMessage: 'Olá HelpUS! Quero conhecer o SuperApp.'
      },
      'nexosai': {
        name: 'NexosAI Cloud Mesh',
        subtitle: 'Central de Comando Cloud & Orquestração de Nós',
        description: 'Command center para orquestração de instâncias de inteligência artificial, agentes em nuvem e nós de processamento distribuído.',
        features: ['Orquestração de Nós em Nuvem', 'Painel de Controle de Instâncias IA', 'Métricas de Processamento'],
        detailsContent: 'Plataforma avançada para gerenciamento de malha de IA em nuvem.',
        technicalHighlights: ['Distributed Mesh Architecture', 'Real-Time Node Metrics'],
        targetAudience: 'Engenheiros de infraestrutura, arquitetos de IA e CTOs.',
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre o NexosAI Cloud.'
      },
      'realestate': {
        name: 'HelpUS RealEstate AI',
        subtitle: 'Portal Imobiliário Inteligente & Avaliação com IA',
        description: 'Plataforma imobiliária com busca por mapas interativos, estimativa de valor de imóveis com IA e tour virtual de alta definição.',
        features: ['Busca por Região & Mapa Interativo', 'Avaliação Preditiva de Imóveis', 'Envio Direto de Propostas ao Corretor'],
        detailsContent: 'Portal para compra, venda e locação de imóveis residenciais e comerciais de alto padrão.',
        technicalHighlights: ['Interactive Map Engine', 'Property Valuation AI'],
        targetAudience: 'Compradores, investidores imobiliários e corretores.',
        whatsappMessage: 'Olá! Vi um imóvel no HelpUS RealEstate e quero informações.'
      },
      'usmle': {
        name: 'USMLE Exam Prep',
        subtitle: 'Plataforma Médica de Preparação USMLE Step 1 & 2',
        description: 'Sistema especializado de questões médicas (QBank), simulados e flashcards com explicações detalhadas para médicos em revalidação nos EUA.',
        features: ['QBank com Milhares de Questões Comentadas', 'Simulados no Padrão Oficial USMLE', 'Analytics de Desempenho por Especialidade'],
        detailsContent: 'Plataforma educacional médica de alta performance para aprovação no exame USMLE.',
        technicalHighlights: ['Medical Question Engine', 'Performance Analytics Chart'],
        targetAudience: 'Médicos e estudantes de medicina buscando revalidação médica nos EUA.',
        whatsappMessage: 'Olá! Gostaria de adquirir acesso à plataforma USMLE Prep.'
      },
      'saude': {
        name: 'HelpUS Health Tech',
        subtitle: 'Portal de Telemedicina & Gestão de Saúde',
        description: 'Plataforma de agendamento de consultas médicas, prontuário eletrônico seguro e acompanhamento de saúde em tempo real.',
        features: ['Agendamento de Consultas Médicas', 'Prontuário Eletrônico Criptografado', 'Integração com Exames'],
        detailsContent: 'Sistema para clínicas e profissionais de saúde modernizarem a jornada do paciente.',
        technicalHighlights: ['HIPAA / LGPD Compliant DB', 'Telemedicine Video Routing'],
        targetAudience: 'Clínicas médicas, profissionais de saúde e pacientes.',
        whatsappMessage: 'Olá HelpUS! Quero conhecer o HelpUS Health.'
      },
      'wagnerdriver-site': {
        name: 'Wagner Driver',
        subtitle: 'Transporte Executivo de Alto Padrão em João Pessoa',
        description: 'Portal oficial de agendamento prévio de viagens executivas, translado aeroporto, viagens intermunicipais e atendimento VIP.',
        features: ['Agendamento Prévio de Viagens Executivas', 'Translado Aeroporto Castro Pinto (JPA)', 'Atendimento Personalizado VIP'],
        detailsContent: 'Serviço de transporte executivo pontual, seguro e discreto em João Pessoa e região.',
        technicalHighlights: ['Vite Direct Booking Engine', 'WhatsApp Fare Calculator'],
        targetAudience: 'Executivos, turistas e famílias que buscam transporte seguro e pontual.',
        whatsappMessage: 'Olá Wagner! Gostaria de agendar um transporte executivo.'
      },
      'pizza': {
        name: 'Pizza Ordering Hub',
        subtitle: 'Cardápio Digital & Sistema de Pedidos QR Code',
        description: 'Plataforma de pedidos diretos para pizzarias e restaurantes com montagem de pizzas meio a meio e envio direto para a cozinha no WhatsApp.',
        features: ['Montador de Pizza Meio a Meio', 'Envio de PedidoFormatado no WhatsApp', 'Cardápio Interativo QR Code'],
        detailsContent: 'Sistema de atendimento digital para acelerar o delivery e pedidos de mesa.',
        technicalHighlights: ['Vite Fast Order UI', 'WhatsApp Cart Routing'],
        targetAudience: 'Pizzarias, restaurantes e lanchonetes.',
        whatsappMessage: 'Olá! Gostaria de fazer um pedido de pizza.'
      },
      'jobs': {
        name: 'HelpUS Jobs',
        subtitle: 'Portal de Vagas & Talentos Tech',
        description: 'Plataforma de recrutamento e seleção para conectar profissionais qualificados a oportunidades corporativas e projetos remotos.',
        features: ['Busca de Vagas por Tecnologia e Nível', 'Envio Direto de Currículos', 'Painel de Vagas em Destaque'],
        detailsContent: 'Portal de empregos e desenvolvimento de carreira na área de tecnologia e serviços.',
        technicalHighlights: ['Job Search Engine', 'Candidate Application Flow'],
        targetAudience: 'Profissionais em busca de vagas e recrutadores corporativos.',
        whatsappMessage: 'Olá HelpUS! Quero me candidatar a uma vaga no HelpUS Jobs.'
      },
      'visa': {
        name: 'HelpUS Visa Solutions',
        subtitle: 'Assessoria de Vistos & Imigração para os EUA',
        description: 'Portal de orientação e assessoria especializada para vistos de turismo (B1/B2), estudante (F1), trabalho e imigração americana.',
        features: ['Triagem de Elegibilidade de Visto', 'Preenchimento Orientado DS-160', 'Agendamento de Entrevista no Consulado'],
        detailsContent: 'Consultoria completa para processos consulares e imigratórios com segurança e agilidade.',
        technicalHighlights: ['Visa Eligibility Assessment Engine', 'Document Checklist System'],
        targetAudience: 'Solicitantes de visto americano, viajantes e estudantes.',
        whatsappMessage: 'Olá HelpUS Visa! Gostaria de assessoria para o meu visto americano.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Plataforma de Apoio a Idosos & Cuidadores',
        description: 'Portal de acolhimento, artigos instrutivos, rotina de cuidados e apoio à saúde mental para familiares e cuidadores de idosos.',
        features: ['Guia Prático de Cuidados com Idosos', 'Rede de Apoio & Dicas de Especialistas', 'Gerenciamento de Medicamentos'],
        detailsContent: 'Solução humanizada desenvolvida para apoiar a qualidade de vida da terceira idade e seus cuidadores.',
        technicalHighlights: ['Accessible UI Design', 'Content Management System'],
        targetAudience: 'Cuidadores de idosos, familiares e profissionais de geriatria.',
        whatsappMessage: 'Olá! Gostaria de saber mais sobre o projeto Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan Biografia',
        subtitle: 'Memorial & Linha do Tempo Biográfica Digital',
        description: 'Plataforma biográfica personalizada com galeria de fotos, vídeos, linha do tempo interativa e depoimentos de homenagem.',
        features: ['Linha do Tempo Interativa da Vida', 'Galeria de Fotos & Vídeos em Alta Definição', 'Mural de Depoimentos & Mensagens'],
        detailsContent: 'Portal biográfico e acervo digital para preservar histórias de vida e memórias inesquecíveis.',
        technicalHighlights: ['Timeline Visual Engine', 'High-Res Media Showcase'],
        targetAudience: 'Famílias e homenageados em datas especiais.',
        whatsappMessage: 'Olá! Gostaria de criar um memorial biográfico digital.'
      },
      'katiaxavier': {
        name: 'Kátia Xavier Imóveis',
        subtitle: 'Consultoria Imobiliária & Lançamentos em João Pessoa',
        description: 'Site da corretora Kátia Xavier com catálogo atualizado de apartamentos na planta, prontos para morar e atendimento personalizado.',
        features: ['Catálogo de Imóveis no Cabo Branco e Tambaú', 'Atendimento WhatsApp com a Corretora', 'Filtros de Busca Rápidos'],
        detailsContent: 'Vitrine imobiliária para apresentação de empreendimentos de médio e alto padrão em João Pessoa.',
        technicalHighlights: ['Vite Real Estate Showcase', 'Direct WhatsApp Contact'],
        targetAudience: 'Compradores e investidores no mercado imobiliário de João Pessoa.',
        whatsappMessage: 'Olá Kátia Xavier! Vi um imóvel no site e gostaria de atendimento.'
      },
      'marciotopbarber': {
        name: 'Márcio TopBarber',
        subtitle: 'Plataforma SaaS de Gestão de Barbearia & Agendamento',
        description: 'Sistema completo de agendamento online de cortes e barba, gestão de clientes, controle de caixa e programas de fidelidade.',
        features: ['Agendamento Online 24/7 sem Fila', 'Gestão de Horários dos Barbeiros', 'Controle Financeiro & Relatórios'],
        detailsContent: 'Solução SaaS para automação de barbearias e salões masculinos.',
        technicalHighlights: ['Booking Calendar Framework', 'Financial Analytics UI'],
        targetAudience: 'Proprietários de barbearias, barbeiros e clientes finais.',
        whatsappMessage: 'Olá! Gostaria de agendar um horário na Márcio TopBarber.'
      },
      'cardioia': {
        name: 'CardioIA',
        subtitle: 'Suporte Diagnóstico de ECG com Inteligência Artificial',
        description: 'Plataforma médica de auxílio à interpretação de exames de eletrocardiograma (ECG) utilizando modelos preditivos avançados.',
        features: ['Análise Preditiva de Traçados de ECG', 'Relatórios Médicos de Suporte', 'Segurança LGPD Médica'],
        detailsContent: 'Ferramenta de apoio decisório para cardiologistas e clínicos em emergências médicas.',
        technicalHighlights: ['ECG Signal Processing AI', 'DICOM / PDF Reader Engine'],
        targetAudience: 'Cardiologistas, médicos plantonistas e hospitais.',
        whatsappMessage: 'Olá! Gostaria de conhecer o CardioIA para suporte a laudos.'
      },
      'vivasuacura': {
        name: 'VivaSuaCura',
        subtitle: 'Portal de Saúde Holística, Nutrição & Bem-Estar',
        description: 'Plataforma de conteúdos, programas de saúde preventiva, receitas saudáveis e acompanhamento de hábitos de vida.',
        features: ['Artigos sobre Medicina Preventiva e Nutrição', 'Programas de Mudança de Estilo de Vida', 'Comunidade VivaSuaCura'],
        detailsContent: 'Portal educacional focado na promoção da saúde integral e qualidade de vida.',
        technicalHighlights: ['Content Portal Architecture', 'Newsletter & Member Management'],
        targetAudience: 'Pessoas buscando qualidade de vida, nutrição consciente e saúde integral.',
        whatsappMessage: 'Olá! Gostaria de saber mais sobre os programas VivaSuaCura.'
      },
      'trading-lab': {
        name: 'Trading Lab Analytics',
        subtitle: 'Inteligência Financeira & Análise de Mercado',
        description: 'Painel de análises estatísticas para o mercado financeiro, algoritmos quantitativos e dashboards de performance.',
        features: ['Dashboards Interativos de Métricas Financeiras', 'Modelos de Análise Quantitativa e Backtesting', 'Alertas de Mercado em Tempo Real'],
        detailsContent: 'Solução tecnológica de analytics para investidores e traders.',
        technicalHighlights: ['Processamento de Dados Financeiros em Tempo Real', 'Gráficos Interativos Avançados'],
        targetAudience: 'Traders, investidores e entusiastas de análise quantitativa.',
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre o Trading Lab Analytics.'
      },
      'neuroeduardomagalhaes': {
        name: 'Dr. Eduardo Magalhães',
        subtitle: 'Neurologia, Neurofisiologia & Portal de Laudos Digitais',
        description: 'Plataforma médica para consultas neurológicas, exames de Eletroneuromiografia (ENMG), Eletroencefalograma (EEG), busca por palavras-chave e emissão de laudos criptografados em PDF.',
        features: ['Agendamento de Consultas & Exames de ENMG e EEG', 'Portal do Paciente para Acesso e Download de Laudos em PDF', 'Emissor de Laudos Médicos com Templates Pré-configurados', 'Busca Inteligente por Diagnósticos e Palavras-Chave'],
        detailsContent: 'Sistema completo de diagnósticos neurofisiológicos, atendimento médico e portal digital de exames para a clínica Dr. Eduardo Magalhães.',
        technicalHighlights: ['Portal Criptografado LGPD', 'Geração de PDF Timbrado & QR Code'],
        targetAudience: 'Pacientes neurológicos e médicos solicitantes de exames neurofisiológicos.',
        whatsappMessage: 'Olá! Gostaria de agendar um exame ou consulta na Clínica Dr. Eduardo Magalhães.'
      },
      'energisa': {
        name: 'HelpUS Energisa Analytics',
        subtitle: 'Auditoria de Abastecimento & Analytics Energético',
        description: 'Dashboard corporativo de auditoria de frotas, controle de combustível, relatórios analíticos e integração com banco de dados de suprimentos.',
        features: ['Auditoria Preditiva de Consumo de Combustível', 'Dashboard de Indicadores Operacionais & Custos', 'Exportação de Relatórios de Auditoria'],
        detailsContent: 'Plataforma corporativa criada para auditoria e inteligência operacional de abastecimento.',
        technicalHighlights: ['PostgreSQL & Railway Cloud Persistence', 'React Analytics Framework'],
        targetAudience: 'Gestores de logística, frotas e auditoria operacional.',
        whatsappMessage: 'Olá HelpUS! Gostaria de mais informações sobre o HelpUS Energisa Analytics.'
      },
      'helpus-fba-suite': {
        name: 'HelpUS Amazon FBA Suite',
        subtitle: 'Automação & Gestão de Vendas E-commerce FBA',
        description: 'Suíte de ferramentas para inteligência de precificação, cálculo de margem de lucro FBA e análise de mercado Amazon.',
        features: ['Cálculo Automático de Taxas FBA & Margem', 'Monitoramento de Preços e Concorrentes', 'Relatórios de ROI & Previsão de Estoque'],
        detailsContent: 'Sistema completo para vendedores Amazon FBA escalarem operações e otimizarem margens de lucro.',
        technicalHighlights: ['API Integrada E-commerce', 'Algoritmo de Cálculo de Margem'],
        targetAudience: 'Sellers Amazon, gestores de e-commerce e importadores.',
        whatsappMessage: 'Olá HelpUS! Quero conhecer o HelpUS Amazon FBA Suite.'
      },
      'cvss': {
        name: 'CVSS Threat Prioritization',
        subtitle: 'Dashboard Oficial de Cibersegurança & Priorização CVSS',
        description: 'Painel interativo para análise de vulnerabilidades de cibersegurança, cálculo de pontuação CVSS 3.1/4.0 e priorização contextual de ameaças.',
        features: ['Calculadora CVSS 3.1 & 4.0 em Tempo Real', 'Priorização Contextual de Riscos de TI', 'Relatórios Executivos de Postura de Segurança'],
        detailsContent: 'Ferramenta avançada para equipes de SecOps e CISOs priorizarem correções de vulnerabilidades críticas.',
        technicalHighlights: ['CVSS v4.0 Specification Engine', 'Interactive Security Dashboard'],
        targetAudience: 'Engenheiros de segurança, CISOs, auditores e times de TI.',
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre o CVSS Threat Dashboard.'
      },
      'danyimoveisjp': {
        name: 'Dany Lima Imóveis',
        subtitle: 'Portal Imobiliário de Luxo — Bessa & Região (CRECI 19500)',
        description: 'Portal imobiliário exclusivo com busca inteligente por imóveis no Bessa e Orla de João Pessoa, atendimento WhatsApp integrado e tour virtual.',
        features: ['Catálogo de Imóveis no Bessa e Região Praiana', 'Atendimento Direto WhatsApp com Corretora CRECI 19500', 'Filtros por Valor, Suítes e Vagas de Garagem'],
        detailsContent: 'Website institucional e vitrine imobiliária para lançamentos e seminovos no Bessa.',
        technicalHighlights: ['React Imobiliário Layout', 'WhatsApp Lead Routing'],
        targetAudience: 'Compradores, investidores e locatários de imóveis na praia do Bessa.',
        whatsappMessage: 'Olá Dany Lima! Vi um imóvel no portal e gostaria de agendar uma visita.'
      },
      'caipiraraiz': {
        name: 'Caipira Raiz JP',
        subtitle: 'Ovos Caipiras Selecionados — Granja Mattos',
        description: 'Plataforma de pedidos e distribuição de ovos caipiras frescos diretamente do produtor para residências e comércios em João Pessoa.',
        features: ['Cardápio Digital de Bandejas e Combos Caipiras', 'Pedidos Diretos via WhatsApp com Entrega Expressa', 'Rastreabilidade da Granja ao Consumidor'],
        detailsContent: 'Vitrine digital para vendas diretas do produtor de ovos caipiras selecionados em João Pessoa.',
        technicalHighlights: ['Vite Direct Order Flow', 'WhatsApp Cart Integration'],
        targetAudience: 'Famílias, restaurantes e estabelecimentos que exigem ovos caipiras de alta qualidade.',
        whatsappMessage: 'Olá Caipira Raiz! Gostaria de fazer um pedido de ovos caipiras.'
      }
    }
  },
  en: {
    nav: {
      institutional: 'Corporate',
      solutions: 'Solutions',
      help: 'Help & Support',
      contact: 'Contact',
      backToCatalog: '← Back to Home',
      allSites: 'Site Network',
      theCompany: 'The Company',
      aiSolutions: 'AI Solutions',
      infraPay: 'Infrastructure & Pay',
      sectoral: 'Industry Ecosystems',
      siteNetwork: 'Site Network (24)'
    },
    hero: {
      badge: 'Tailored Software Engineering & AI Orchestration',
      title: 'HelpUS Technology Solutions',
      subtitle: 'We develop intelligent corporate ecosystems, autonomous WhatsApp automation, custom web systems, and AI orchestration to empower high-performance enterprises.',
      exploreBtn: 'Explore Solutions',
      sitesBadge: 'Active Solutions Live',
      watchVideo: 'Watch Institutional Video',
      btnAi: 'Explore AI Solutions',
      btnVideo: 'Watch Institutional Video',
      videoTitle: 'Discover Our Engineering & Solutions in Action',
      videoSubtitle: 'Click to watch a live demonstration of our infrastructure, AI agents, and enterprise platforms.'
    },
    metrics: {
      subdomains: 'Active Subdomains Live',
      ai247: 'Autonomous 24/7 AI Service',
      serverless: 'Serverless Infrastructure',
      zeroRework: 'Zero Data Entry Rework'
    },
    whoWeAre: {
      badge: 'Engineering & Enterprise Architecture',
      title: 'Who We Are & How We Transform Operations',
      desc: 'HelpUS Technology is a software engineering firm focused on creating robust digital ecosystems. We build generative AI engines, payment gateways, and high-availability enterprise portals.',
      p1Title: '24/7 Autonomous Automation',
      p1Desc: 'Intelligent virtual agents integrated with WhatsApp Cloud API to handle inquiries, book appointments, and qualify leads seamlessly.',
      p2Title: 'Serverless Mesh Engineering',
      p2Desc: 'Network of microservices and independent subdomains distributed on Vercel Cloud, ensuring instant loading, TLS encryption, and 99.9% uptime.',
      p3Title: 'Unified Finance & Payments',
      p3Desc: 'Native integration with instant PIX QR Code, invoice reconciliation, and Single Sign-On (SSO) across all enterprise platforms.'
    },
    businessDivisions: {
      badge: 'Our Business Divisions',
      title: 'Explore Our Portfolio by Area',
      desc: 'Select an area to explore full presentations and active live applications.',
      g1Title: 'Generative AI Solutions',
      g1Desc: 'Complete suite with WhatsApp AI bots, neural voice synthesis, source-attributed search engine, and AI presentation builder.',
      g1Btn: 'Access AI Solutions',
      g2Title: 'Infrastructure & Pay Engine',
      g2Desc: 'Recurring PIX gateway, encrypted SSO login, admin status monitoring dashboard, and omnichannel sales CRM.',
      g2Btn: 'Access Infrastructure & Pay',
      g3Title: 'Sectoral Ecosystems',
      g3Desc: 'Specialized platforms for real estate, healthcare (USMLE prep), executive transport, gastronomy, and biographical legacy.',
      g3Btn: 'Access Sectoral Ecosystems'
    },
    security: {
      badge: 'Security & Governance',
      title: 'High-Performance Infrastructure & 256-bit Encryption',
      desc: 'All HelpUS solutions feature active SSL protection, serverless distributed architecture, and data compliance to run business securely.',
      c1Title: 'Encrypted SSL',
      c1Desc: 'Secure communications with TLS certificates on 100% of requests.',
      c2Title: '99.9% Global Uptime',
      c2Desc: 'Active real-time monitoring via our central status engine.',
      c3Title: 'Dedicated Support',
      c3Desc: 'Executive support directly via WhatsApp and official email.'
    },
    viewHeaders: {
      aiTitle: 'AI Solutions Showcase',
      aiBadge: 'Enterprise AI Suite',
      aiDesc: 'Detailed showcase of AI modules engineered for customer service automation, neural voice synthesis, verifiable search, and slide generation.',
      infraTitle: 'Infrastructure, SSO & Payments',
      infraBadge: 'Enterprise Engines & Security',
      infraDesc: 'Supporting platforms for user authentication, service health monitoring, management analytics, and automated PIX billing.',
      sectoralTitle: 'Specialized Industry Ecosystems',
      sectoralBadge: 'Industry Segment Solutions',
      sectoralDesc: 'Custom platforms tailored for real estate, medical exams, executive mobility, gastronomy, and cultural archives.'
    },
    common: {
      backToCompany: '← Back to The Company',
      talkWhatsApp: 'Talk on WhatsApp',
      launchApp: 'Launch Application 🚀',
      openInstagramVideo: 'Open Video on Instagram',
      closeVideo: 'Close Video',
      searchPlaceholder: 'Search application or subdomain...',
      officialSubdomain: 'Official Subdomain:',
      demoSystem: 'System Demo — ',
      allEcosystemSites: 'Global Network of Sites & Applications',
      filterAll: 'All (24)',
      filterOwn: 'Proprietary Platforms',
      filterClient: 'Client Projects',
      noResults: 'No application found matching this query.'
    },
    megaMenu: {
      platforms: 'Core Platforms',
      services: 'Services & Mobility',
      foodCulture: 'Gastronomy & Culture',
      allSites: 'Complete Network of Sites',
      clientSites: 'Projects & Clients',
      exploreMesh: 'Explore Ecosystem 🚀'
    },
    videoModal: {
      title: 'Institutional Video — HelpUS Technology',
      subtitle: 'Discover our engineering, platform ecosystem, and corporate solutions in action.',
      close: 'Close Video'
    },
    catalog: {
      title: 'Solution Ecosystem by Category',
      subtitle: 'Select a category to explore live platforms or review technical details.',
      tryNow: 'Technical Details ➔',
      quickLaunch: 'Launch Platform 🚀',
      partnerBannerTitle: 'Complete Network of Sites & Clients',
      partnerBannerDesc: 'We develop and manage custom enterprise platforms and portals.'
    },
    fullPageDetails: {
      backBtn: '← Back to Ecosystem',
      overviewTitle: 'Overview & Solution Engineering',
      technicalArchitecture: 'Architecture & Technical Features',
      targetAudienceTitle: 'Recommended Target Audience',
      keyCapabilitiesTitle: 'Features & Capabilities',
      officialSubdomain: 'Official Web Address:',
      launchRealApp: 'Launch Live Application 🚀',
      contactWhatsApp: 'WhatsApp Support for this Solution',
      folderOrigin: 'Mapped Project:',
      close: 'Close'
    },
    cookies: {
      text: 'We use cookies to ensure optimal browsing experience and security across applications.',
      accept: 'Understood & Accept',
      privacyLink: 'Privacy Policy'
    },
    modals: {
      institutionalTitle: 'Corporate — HelpUS Technology',
      institutionalDesc: 'HelpUS Technology Solutions builds custom software, web/mobile systems, and manages digital ecosystems.',
      helpTitle: 'Help & Support Center',
      helpDesc: 'Need technical support? Contact our central team via WhatsApp or official email.',
      privacyTitle: 'Privacy Policy & Terms of Use',
      privacyDesc: 'We guarantee transparent data handling compliant with international privacy standards.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — All rights reserved.',
      contactTitle: 'Contact HelpUS',
      contactDesc: 'Direct support for inquiries, system contracting, and technical help.',
      whatsapp: 'WhatsApp: +55 (83) 99872-1848',
      email: 'contato@helpusbr.com',
      privacy: 'Privacy & Data Protection',
      terms: 'Terms of Use'
    },
    categories: {
      todos: 'All Solutions',
      tecnologia: 'Technology & AI',
      saude: 'Healthcare & Medicine',
      servicos: 'Services & Mobility',
      gastronomia: 'Food & Delivery',
      cultura: 'Culture & Biography',
      clientes: 'Clients & Custom'
    },
    apps: {
      'helpus-site': {
        name: 'HelpUS Main Portal',
        subtitle: 'Corporate Portal & Ecosystem Hub',
        description: 'Main HelpUS Technology Solutions portal featuring unified subdomain routing and executive showcases.',
        features: ['Subdomain Routing', 'Embedded Video Showcase', 'Multi-language (PT/EN/ES)'],
        detailsContent: 'Central interface connecting all HelpUS enterprise applications and services.',
        technicalHighlights: ['Vite + React + TailwindCSS', 'Cloudflare DNS Engine', 'Vercel Serverless Mesh'],
        targetAudience: 'Executives, clients, and corporate partners.',
        whatsappMessage: 'Hello HelpUS! I would like to speak with the corporate team.'
      },
      'helpus-search': {
        name: 'HelpUS Search AI',
        subtitle: 'Unified Search & Predictive Answers Engine',
        description: 'Generative AI search engine providing cited sources, real-time web retrieval, and executive summaries.',
        features: ['Verifiable Source Attribution', 'Real-Time Content Synthesis', 'Perplexity-Style Interface'],
        detailsContent: 'Enterprise AI search engine designed for accurate insights.',
        technicalHighlights: ['OpenAI GPT-4o API', 'Perplexity Engine API', 'Streaming Responses'],
        targetAudience: 'Researchers, analysts, and data managers.',
        whatsappMessage: 'Hello HelpUS! I would like to test HelpUS Search AI.'
      },
      'helpus-agent': {
        name: 'HelpUS AI Agent Studio',
        subtitle: 'Autonomous 24/7 Virtual Agent Builder',
        description: 'Platform to build, train, and deploy AI agents integrated with WhatsApp Cloud API and enterprise CRMs.',
        features: ['Custom Training with PDFs & Links', 'Native WhatsApp Cloud API Routing', 'Autonomous Lead Qualification'],
        detailsContent: 'Studio for autonomous AI agents transforming customer service and operations.',
        technicalHighlights: ['Vector Database RAG Engine', 'WhatsApp Webhook Routing'],
        targetAudience: 'Sales teams, customer support, and operations.',
        whatsappMessage: 'Hello HelpUS! I want to create an AI Agent for my company.'
      },
      'helpus-voice': {
        name: 'HelpUS Voice AI',
        subtitle: 'Neural Voice & Narration Generator',
        description: 'AI voice synthesis studio for hyper-realistic voiceovers, audio messages, and video narrations.',
        features: ['Multi-lingual Neural Voices', 'High Quality MP3/WAV Export', 'Voice Cloning & Pitch Tuning'],
        detailsContent: 'Voice AI platform for instant professional narration generation.',
        technicalHighlights: ['ElevenLabs Neural API', 'Audio Processing Pipeline'],
        targetAudience: 'Content creators, marketing agencies, and sales teams.',
        whatsappMessage: 'Hello HelpUS! I would like to try HelpUS Voice AI.'
      },
      'helpus-slides': {
        name: 'HelpUS AI Slides',
        subtitle: 'AI Presentation & Pitch Deck Builder',
        description: 'Automatic slide deck generator that creates professional executive presentations in seconds.',
        features: ['Instant Pitch Deck Generation', 'Export to PDF & PowerPoint', 'Sleek Visual Layouts'],
        detailsContent: 'Generative AI tool for high-end corporate presentation building.',
        technicalHighlights: ['Gamma-Style AI Engine', 'PDF Generation Pipeline'],
        targetAudience: 'Executives, startup founders, and keynote speakers.',
        whatsappMessage: 'Hello HelpUS! I want to use HelpUS AI Slides.'
      },
      'helpus-pay': {
        name: 'HelpUS Pay Engine',
        subtitle: 'Payments Gateway & Recurring PIX',
        description: 'Financial infrastructure supporting instant PIX, recurring subscriptions, webhooks, and reconciliation.',
        features: ['Instant PIX QR Code Generation', 'Subscriptions & Recurring Billing', 'Real-Time Webhook Dispatch'],
        detailsContent: 'Financial engine for automated receiving and digital product cashflow.',
        technicalHighlights: ['Asaas / MercadoPago API', 'PIX Dynamic QR Code'],
        targetAudience: 'SaaS companies, e-commerce, and service providers.',
        whatsappMessage: 'Hello HelpUS! I want to integrate HelpUS Pay.'
      },
      'helpus-docs': {
        name: 'HelpUS Developer Docs',
        subtitle: 'API Documentation & Developer Portal',
        description: 'Technical documentation hub with cURL, Node.js, and Python code examples for HelpUS APIs.',
        features: ['Interactive Code Snippets', 'Bearer Token Authentication Guides', 'OpenAPI / Swagger Spec'],
        detailsContent: 'Developer portal for integrating HelpUS microservices.',
        technicalHighlights: ['Redoc / Swagger UI', 'Code Snippet Generator'],
        targetAudience: 'Software engineers, developers, and CTOs.',
        whatsappMessage: 'Hello HelpUS! I have a question about your APIs.'
      },
      'helpus-auth': {
        name: 'HelpUS Auth SSO',
        subtitle: 'Encrypted Single Sign-On & Identity Portal',
        description: 'Centralized authentication system supporting JWT, OAuth2, 2FA, and user permission management.',
        features: ['Single Sign-On Across All Apps', 'JWT Encrypted Authentication', '2FA & OAuth2 Support'],
        detailsContent: 'Unified corporate security and identity platform.',
        technicalHighlights: ['JWT Auth Engine', 'Redis Session Management'],
        targetAudience: 'Enterprise users and IT administrators.',
        whatsappMessage: 'Hello HelpUS! Need assistance with SSO Login.'
      },
      'helpus-crm': {
        name: 'HelpUS CRM Omnichannel',
        subtitle: 'Sales CRM & WhatsApp Conversation Hub',
        description: 'Kanban pipeline for managing sales opportunities, WhatsApp chats, and team metrics.',
        features: ['Kanban Sales Pipelines', 'Multi-Agent WhatsApp Inbox', 'Conversion Analytics'],
        detailsContent: 'Sales CRM with messaging automation and funnel tracking.',
        technicalHighlights: ['Omnichannel Routing Engine', 'Kanban Drag & Drop UI'],
        targetAudience: 'Sales managers, brokers, and commercial teams.',
        whatsappMessage: 'Hello HelpUS! I want a demo of HelpUS CRM.'
      },
      'helpus-admin': {
        name: 'HelpUS Admin Dashboard',
        subtitle: 'Master Dashboard for Uptime, Metrics & Analytics',
        description: 'Central control room monitoring real-time subdomain uptime, lead capture feeds, and global stats.',
        features: ['Real-Time Uptime Monitoring', 'Unified Lead Capture Feed', 'Traffic Analytics'],
        detailsContent: 'Executive 360 control panel for the HelpUS ecosystem.',
        technicalHighlights: ['WebSocket Live Feeds', 'Analytics Data Engine'],
        targetAudience: 'Administrators, directors, and managers.',
        whatsappMessage: 'Hello HelpUS! Need support with the Admin Panel.'
      },
      'helpus-status': {
        name: 'HelpUS Status Engine',
        subtitle: 'Global Uptime & Service Health Monitor',
        description: 'Public health status page tracking subdomains, APIs, and databases across the network.',
        features: ['24/7 Subdomain Monitoring', 'Latency & Incident History', 'Maintenance Alerts'],
        detailsContent: 'Transparency and SLA assurance platform for HelpUS users.',
        technicalHighlights: ['Automated Ping Checkers', 'Status Page Engine'],
        targetAudience: 'Clients, developers, and support teams.',
        whatsappMessage: 'Hello HelpUS! Checking service status.'
      },
      'helpus-market': {
        name: 'HelpUS Marketplace',
        subtitle: '1-Click Plugin & Webhook Store',
        description: 'Integration catalog connecting HelpUS to external tools like Zapier, N8N, Shopify, and CRMs.',
        features: ['1-Click Webhook Integrations', 'Plugins for WhatsApp & Billing', 'Configurable API Keys'],
        detailsContent: 'Extension hub for boosting third-party workflows.',
        technicalHighlights: ['Webhook Dispatcher API', 'Plugin Architecture'],
        targetAudience: 'Integrators, IT managers, and process analysts.',
        whatsappMessage: 'Hello HelpUS! Want to integrate a plugin.'
      },
      'helpus-marketing': {
        name: 'HelpUS Growth & Ads',
        subtitle: 'AI Ad Generator & Copywriting Studio',
        description: 'Smart tool to generate ads for Meta Ads, Google Ads, and social media copy.',
        features: ['Ad Generator for Meta & Google', 'High-Conversion Copywriting', 'Caption & Hashtag Generator'],
        detailsContent: 'Marketing automation platform for digital campaign growth.',
        technicalHighlights: ['Copywriting AI Engine', 'Ad Template Builder'],
        targetAudience: 'Marketing teams, media buyers, and agencies.',
        whatsappMessage: 'Hello HelpUS! I want to test Growth & Ads.'
      },
      'helpus-app': {
        name: 'HelpUS SuperApp Portal',
        subtitle: 'End-User & Local Services Portal',
        description: 'SuperApp for direct access to services, bookings, delivery, and mobility in a single UI.',
        features: ['Intuitive Mobile-First Design', 'Centralized Service Access', 'Order & Booking History'],
        detailsContent: 'Consumer-facing app for seamless service delivery.',
        technicalHighlights: ['PWA Framework', 'Mobile Optimized UI'],
        targetAudience: 'End consumers and local service clients.',
        whatsappMessage: 'Hello HelpUS! Want to explore the SuperApp.'
      },
      'nexosai': {
        name: 'NexosAI Cloud Mesh',
        subtitle: 'Cloud Command Center & Mesh Node Orchestration',
        description: 'Command center orchestrating AI instances, cloud agents, and distributed processing nodes.',
        features: ['Cloud Node Orchestration', 'AI Instance Control Panel', 'Processing Metrics'],
        detailsContent: 'Advanced platform for cloud AI mesh management.',
        technicalHighlights: ['Distributed Mesh Architecture', 'Real-Time Node Metrics'],
        targetAudience: 'Infrastructure engineers, AI architects, and CTOs.',
        whatsappMessage: 'Hello HelpUS! Interested in NexosAI Cloud.'
      },
      'realestate': {
        name: 'HelpUS RealEstate AI',
        subtitle: 'Smart Real Estate Portal & AI Valuation',
        description: 'Real estate portal featuring interactive maps, AI valuation estimates, and HD virtual tours.',
        features: ['Interactive Region & Map Search', 'Predictive Property Valuation', 'Direct Proposal Submission'],
        detailsContent: 'Portal for buying, selling, and renting premium real estate.',
        technicalHighlights: ['Interactive Map Engine', 'Property Valuation AI'],
        targetAudience: 'Homebuyers, real estate investors, and brokers.',
        whatsappMessage: 'Hello! I saw a property on RealEstate and want info.'
      },
      'usmle': {
        name: 'USMLE Exam Prep',
        subtitle: 'Medical USMLE Step 1 & 2 Preparation Platform',
        description: 'Specialized medical QBank, practice exams, and flashcards with explanations for US revalidation.',
        features: ['QBank with Explanations', 'Official Format Practice Tests', 'Performance Analytics by Specialty'],
        detailsContent: 'High-performance medical learning platform for USMLE exams.',
        technicalHighlights: ['Medical Question Engine', 'Performance Analytics Chart'],
        targetAudience: 'Physicians and medical students pursuing US licensing.',
        whatsappMessage: 'Hello! I want access to USMLE Prep.'
      },
      'saude': {
        name: 'HelpUS Health Tech',
        subtitle: 'Telemedicine & Health Management Portal',
        description: 'Medical appointment booking, encrypted electronic health records, and health tracking.',
        features: ['Doctor Appointment Scheduling', 'Encrypted Health Records', 'Lab Results Integration'],
        detailsContent: 'Healthcare system modernizing the patient journey.',
        technicalHighlights: ['HIPAA / LGPD Compliant DB', 'Telemedicine Video Routing'],
        targetAudience: 'Clinics, healthcare professionals, and patients.',
        whatsappMessage: 'Hello HelpUS! Want to learn about HelpUS Health.'
      },
      'wagnerdriver-site': {
        name: 'Wagner Driver',
        subtitle: 'Premium Executive Transport in João Pessoa',
        description: 'Official portal for booking executive rides, airport transfers, intercity trips, and VIP service.',
        features: ['Executive Trip Pre-booking', 'Airport JPA Transfers', 'Personalized VIP Service'],
        detailsContent: 'Punctual, safe, and discrete transport service in João Pessoa.',
        technicalHighlights: ['Vite Direct Booking Engine', 'WhatsApp Fare Calculator'],
        targetAudience: 'Executives, tourists, and families seeking safe transport.',
        whatsappMessage: 'Hello Wagner! I would like to book an executive ride.'
      },
      'pizza': {
        name: 'Pizza Ordering Hub',
        subtitle: 'Digital Menu & QR Code Order System',
        description: 'Direct ordering platform for pizzerias with half-and-half customizer and direct WhatsApp kitchen routing.',
        features: ['Half-and-Half Pizza Customizer', 'Formatted WhatsApp Ordering', 'Interactive QR Code Menu'],
        detailsContent: 'Digital service system speeding up delivery and table orders.',
        technicalHighlights: ['Vite Fast Order UI', 'WhatsApp Cart Routing'],
        targetAudience: 'Pizzerias, restaurants, and eateries.',
        whatsappMessage: 'Hello! I would like to order a pizza.'
      },
      'jobs': {
        name: 'HelpUS Jobs',
        subtitle: 'Tech Talent & Job Portal',
        description: 'Recruitment platform connecting qualified professionals with remote and corporate tech roles.',
        features: ['Job Search by Tech & Seniority', 'Direct Resume Submissions', 'Featured Job Board'],
        detailsContent: 'Job portal and career hub for technology roles.',
        technicalHighlights: ['Job Search Engine', 'Candidate Application Flow'],
        targetAudience: 'Job seekers and corporate recruiters.',
        whatsappMessage: 'Hello HelpUS! I want to apply for a job.'
      },
      'visa': {
        name: 'HelpUS Visa Solutions',
        subtitle: 'US Visa & Immigration Advisory',
        description: 'Advisory portal for B1/B2 tourist visas, F1 student visas, work visas, and US immigration.',
        features: ['Visa Eligibility Screening', 'DS-160 Form Assistance', 'Consulate Interview Scheduling'],
        detailsContent: 'Full consultation for consular processes and immigration.',
        technicalHighlights: ['Visa Eligibility Assessment Engine', 'Document Checklist System'],
        targetAudience: 'US visa applicants, travelers, and students.',
        whatsappMessage: 'Hello HelpUS Visa! I need help with my US visa.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Elderly & Caregiver Support Platform',
        description: 'Support portal with care guides, routines, and mental health resources for caregivers and families.',
        features: ['Practical Elder Care Guides', 'Support Network & Expert Tips', 'Medication Tracking'],
        detailsContent: 'Humanized digital solution supporting senior care.',
        technicalHighlights: ['Accessible UI Design', 'Content Management System'],
        targetAudience: 'Caregivers, families, and geriatric professionals.',
        whatsappMessage: 'Hello! I want to learn more about Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan Biography',
        subtitle: 'Digital Life Memorial & Interactive Timeline',
        description: 'Personalized biography platform with photo galleries, video archives, and tribute guestbooks.',
        features: ['Interactive Life Timeline', 'HD Photo & Video Gallery', 'Tribute & Guestbook Wall'],
        detailsContent: 'Biographical archive preserving life stories and memories.',
        technicalHighlights: ['Timeline Visual Engine', 'High-Res Media Showcase'],
        targetAudience: 'Families and special occasion tributes.',
        whatsappMessage: 'Hello! I want to create a digital biography memorial.'
      },
      'katiaxavier': {
        name: 'Kátia Xavier Real Estate',
        subtitle: 'Real Estate Consulting in João Pessoa',
        description: 'Property catalog featuring pre-construction and ready-to-move apartments in João Pessoa.',
        features: ['Properties in Cabo Branco & Tambaú', 'Direct WhatsApp Agent Chat', 'Fast Search Filters'],
        detailsContent: 'Showcase for mid and high-end real estate developments.',
        technicalHighlights: ['Vite Real Estate Showcase', 'Direct WhatsApp Contact'],
        targetAudience: 'Buyers and real estate investors in João Pessoa.',
        whatsappMessage: 'Hello Kátia Xavier! Saw a property on your site.'
      },
      'marciotopbarber': {
        name: 'Márcio TopBarber',
        subtitle: 'Barbershop Management & Booking SaaS',
        description: 'Online booking system for haircuts, client management, cashflow, and loyalty rewards.',
        features: ['24/7 Online Booking', 'Barber Schedule Management', 'Financial Reports'],
        detailsContent: 'SaaS automation solution for barbershops.',
        technicalHighlights: ['Booking Calendar Framework', 'Financial Analytics UI'],
        targetAudience: 'Barbershop owners, barbers, and clients.',
        whatsappMessage: 'Hello! I would like to book a appointment.'
      },
      'cardioia': {
        name: 'CardioIA',
        subtitle: 'AI Diagnostic Support for ECG Reports',
        description: 'Medical platform assisting electrocardiogram (ECG) interpretation using predictive models.',
        features: ['Predictive ECG Analysis', 'Support Medical Reports', 'Medical LGPD Data Compliance'],
        detailsContent: 'Decision-support tool for cardiologists and ER clinicians.',
        technicalHighlights: ['ECG Signal Processing AI', 'DICOM / PDF Reader Engine'],
        targetAudience: 'Cardiologists, ER physicians, and hospitals.',
        whatsappMessage: 'Hello! Interested in CardioIA for ECG reports.'
      },
      'vivasuacura': {
        name: 'VivaSuaCura',
        subtitle: 'Holistic Health & Wellness Portal',
        description: 'Preventive medicine articles, wellness programs, healthy recipes, and lifestyle tracking.',
        features: ['Preventive Medicine Articles', 'Lifestyle Transformation Programs', 'Wellness Community'],
        detailsContent: 'Educational portal promoting holistic health.',
        technicalHighlights: ['Content Portal Architecture', 'Member Management'],
        targetAudience: 'People seeking health, nutrition, and wellness.',
        whatsappMessage: 'Hello! I want info on VivaSuaCura programs.'
      },
      'trading-lab': {
        name: 'Trading Lab Analytics',
        subtitle: 'Financial Intelligence & Market Analytics',
        description: 'Statistical analytics dashboard for financial markets, quantitative algorithms, and charts.',
        features: ['Interactive Financial Dashboards', 'Quantitative Backtesting Models', 'Real-Time Market Alerts'],
        detailsContent: 'Analytics solution for investors and traders.',
        technicalHighlights: ['Real-Time Financial Data Engine', 'Advanced Charts'],
        targetAudience: 'Traders, investors, and quant analysts.',
        whatsappMessage: 'Hello HelpUS! Interested in Trading Lab.'
      },
      'neuroeduardomagalhaes': {
        name: 'Dr. Eduardo Magalhães',
        subtitle: 'Neurology, Neurophysiology & Digital Exam Portal',
        description: 'Medical platform for neurological consultations, ENMG, EEG exams, and PDF report downloads.',
        features: ['ENMG & EEG Exam Booking', 'Patient Portal for PDF Downloads', 'Pre-configured Medical Report Issuer', 'Smart Keyword Search'],
        detailsContent: 'Full neurophysiology diagnostic system for Dr. Eduardo Magalhães clinic.',
        technicalHighlights: ['Encrypted LGPD Portal', 'Letterhead PDF & QR Code Generator'],
        targetAudience: 'Neurology patients and referring physicians.',
        whatsappMessage: 'Hello! I would like to book a consultation or exam.'
      },
      'energisa': {
        name: 'HelpUS Energisa Analytics',
        subtitle: 'Fleet Supply Audit & Energy Analytics',
        description: 'Enterprise fleet audit dashboard, fuel management, analytical reports, and DB integration.',
        features: ['Predictive Fuel Audit', 'Operational KPIs & Costs Dashboard', 'Audit Report Exporting'],
        detailsContent: 'Enterprise platform built for operational supply auditing.',
        technicalHighlights: ['PostgreSQL & Railway Cloud Persistence', 'React Analytics Framework'],
        targetAudience: 'Logistics managers, fleet operators, and auditors.',
        whatsappMessage: 'Hello HelpUS! Need information on Energisa Analytics.'
      },
      'helpus-fba-suite': {
        name: 'HelpUS Amazon FBA Suite',
        subtitle: 'Amazon FBA E-commerce Automation',
        description: 'Pricing intelligence suite, FBA profit margin calculator, and Amazon market analytics.',
        features: ['FBA Fee & Margin Calculator', 'Price & Competitor Tracking', 'ROI Reports & Stock Forecast'],
        detailsContent: 'Comprehensive system for Amazon FBA sellers to optimize margins.',
        technicalHighlights: ['E-commerce API Integration', 'Margin Calculation Engine'],
        targetAudience: 'Amazon sellers, e-commerce managers, and importers.',
        whatsappMessage: 'Hello HelpUS! I want to try Amazon FBA Suite.'
      },
      'cvss': {
        name: 'CVSS Threat Prioritization',
        subtitle: 'Official Cybersecurity Dashboard & CVSS Scoring',
        description: 'Interactive cybersecurity vulnerability dashboard with CVSS 3.1/4.0 real-time scoring.',
        features: ['Real-Time CVSS 3.1 & 4.0 Calculator', 'Contextual Risk Prioritization', 'Executive Security Reports'],
        detailsContent: 'Advanced tool for SecOps and CISOs to prioritize critical fixes.',
        technicalHighlights: ['CVSS v4.0 Engine', 'Interactive Security Dashboard'],
        targetAudience: 'Security engineers, CISOs, auditors, and IT teams.',
        whatsappMessage: 'Hello HelpUS! I want info on CVSS Threat Dashboard.'
      },
      'danyimoveisjp': {
        name: 'Dany Lima Real Estate',
        subtitle: 'Luxury Properties Portal — Bessa & Beachfront (CRECI 19500)',
        description: 'Exclusive real estate portal for beachfront properties in Bessa with integrated WhatsApp chat.',
        features: ['Property Catalog in Bessa', 'Direct WhatsApp Agent Contact', 'Price & Amenities Filters'],
        detailsContent: 'Real estate showcase for beachfront apartments.',
        technicalHighlights: ['React Real Estate Layout', 'WhatsApp Lead Routing'],
        targetAudience: 'Homebuyers and real estate investors in Bessa.',
        whatsappMessage: 'Hello Dany Lima! I saw a property and want a tour.'
      },
      'caipiraraiz': {
        name: 'Caipira Raiz JP',
        subtitle: 'Selected Farm-Fresh Free-Range Eggs',
        description: 'Order and distribution platform for fresh free-range eggs in João Pessoa.',
        features: ['Digital Menu of Egg Tray Combos', 'Direct WhatsApp Order Delivery', 'Farm-to-Table Traceability'],
        detailsContent: 'Digital storefront for direct farm-fresh egg orders.',
        technicalHighlights: ['Vite Direct Order Flow', 'WhatsApp Cart Integration'],
        targetAudience: 'Families, restaurants, and businesses seeking fresh eggs.',
        whatsappMessage: 'Hello Caipira Raiz! I want to order eggs.'
      }
    }
  },
  es: {
    nav: {
      institutional: 'Corporativo',
      solutions: 'Soluciones',
      help: 'Ayuda y Soporte',
      contact: 'Contacto',
      backToCatalog: '← Volver al Inicio',
      allSites: 'Red de Sitios',
      theCompany: 'La Empresa',
      aiSolutions: 'Soluciones de I.A.',
      infraPay: 'Infraestructura y Pay',
      sectoral: 'Ecosistemas Sectoriales',
      siteNetwork: 'Red de Sitios (24)'
    },
    hero: {
      badge: 'Ingeniería de Software a Medida y Orquestación de I.A.',
      title: 'HelpUS Technology Solutions',
      subtitle: 'Desarrollamos ecosistemas corporativos inteligentes, automatización autónoma en WhatsApp, sistemas web a medida y orquestación de Inteligencia Artificial para potenciar empresas de alto rendimiento.',
      exploreBtn: 'Explorar Soluciones',
      sitesBadge: 'Soluciones Activas en Vivo',
      watchVideo: 'Ver Video Institucional',
      btnAi: 'Explorar Soluciones de I.A.',
      btnVideo: 'Ver Video Institucional',
      videoTitle: 'Descubra Nuestra Ingeniería y Soluciones en Acción',
      videoSubtitle: 'Haga clic para ver una demostración de nuestra infraestructura, agentes de IA y plataformas corporativas.'
    },
    metrics: {
      subdomains: 'Subdominios Activos en Vivo',
      ai247: 'Atención Autónoma 24/7 con IA',
      serverless: 'Infraestructura Serverless',
      zeroRework: 'Garantía de Calidad y Uptime'
    },
    whoWeAre: {
      badge: 'Ingeniería y Arquitectura Corporativa',
      title: 'Quiénes Somos y Cómo Transformamos Operaciones',
      desc: 'HelpUS Technology es una empresa de ingeniería de software enfocada en crear ecosistemas digitales robustos. Desarrollamos desde motores de IA Generativa hasta pasarelas de pago y portales corporativos.',
      p1Title: 'Automatización Autónoma 24/7',
      p1Desc: 'Agentes virtuales inteligentes integrados con WhatsApp Cloud API para responder consultas, agendar citas y calificar prospectos.',
      p2Title: 'Ingeniería Serverless Mesh',
      p2Desc: 'Red de microservicios y subdominios independientes distribuidos en Vercel Cloud, garantizando carga instantánea, cifrado TLS y 99.9% de disponibilidad.',
      p3Title: 'Finanzas y Pagos Unificados',
      p3Desc: 'Integración nativa con PIX QR Code instantáneo, conciliación de facturas y sistema SSO único para todas las plataformas.'
    },
    businessDivisions: {
      badge: 'Nuestras Divisiones de Negocio',
      title: 'Explore Nuestro Portafolio por Áreas',
      desc: 'Seleccione un área para explorar presentaciones completas y aplicaciones activas.',
      g1Title: 'Soluciones de IA Generativa',
      g1Desc: 'Suite completa con bots de IA en WhatsApp, síntesis neural de voz, motor de búsqueda con citas y generador de presentaciones.',
      g1Btn: 'Acceder a Soluciones de IA',
      g2Title: 'Infraestructura y Engine de Pago',
      g2Desc: 'Pasarela PIX recurrente, login SSO cifrado, dashboard admin de monitoramiento y CRM de ventas omnicanal.',
      g2Btn: 'Acceder a Infraestructura y Pay',
      g3Title: 'Ecosistemas Sectoriales',
      g3Desc: 'Plataformas especializadas para inmobiliaria, salud (preparación USMLE), transporte ejecutivo, gastronomía y legado biográfico.',
      g3Btn: 'Acceder a Ecosistemas Sectoriales'
    },
    security: {
      badge: 'Seguridad y Gobernanza',
      title: 'Infraestructura de Alto Rendimiento y Cifrado de 256 bits',
      desc: 'Todas las soluciones de HelpUS cuentan con protección SSL activa, arquitectura distribuida serverless y cumplimiento de datos.',
      c1Title: 'SSL Cifrado',
      c1Desc: 'Comunicación segura con certificado TLS en el 100% de las solicitudes.',
      c2Title: '99.9% Uptime Global',
      c2Desc: 'Monitoreo activo en tiempo real mediante nuestra central de status.',
      c3Title: 'Soporte Dedicado',
      c3Desc: 'Atención ejecutiva directa vía WhatsApp y correo electrónico.'
    },
    viewHeaders: {
      aiTitle: 'Presentación de Soluciones de I.A.',
      aiBadge: 'Suite de Inteligencia Artificial Corporativa',
      aiDesc: 'Presentación detallada de módulos de IA diseñados para automatización de servicio, síntesis neural de voz, búsqueda verificable y generación de diapositivas.',
      infraTitle: 'Infraestructura, SSO y Pagos',
      infraBadge: 'Motores Corporativos y Seguridad',
      infraDesc: 'Plataformas de soporte para autenticación de usuarios, monitoreo de servicios, reportes de gestión y cobranza automatizada con PIX.',
      sectoralTitle: 'Ecosistemas Sectoriales Especializados',
      sectoralBadge: 'Soluciones por Segmento de Mercado',
      sectoralDesc: 'Aplicaciones a medida para el mercado inmobiliario, exámenes médicos, movilidad ejecutiva, gastronomía y acervos culturales.'
    },
    common: {
      backToCompany: '← Volver a La Empresa',
      talkWhatsApp: 'Hablar por WhatsApp',
      launchApp: 'Acceder a la Aplicación 🚀',
      openInstagramVideo: 'Abrir Video en Instagram',
      closeVideo: 'Cerrar Video',
      searchPlaceholder: 'Buscar aplicación o subdominio...',
      officialSubdomain: 'Subdominio Oficial:',
      demoSystem: 'Demostración del Sistema — ',
      allEcosystemSites: 'Red Global de Sitios y Aplicaciones',
      filterAll: 'Todas (24)',
      filterOwn: 'Plataformas Propias',
      filterClient: 'Proyectos de Clientes',
      noResults: 'No se encontró ninguna aplicación con esta búsqueda.'
    },
    megaMenu: {
      platforms: 'Plataformas Principales',
      services: 'Servicios y Movilidad',
      foodCulture: 'Gastronomía y Cultura',
      allSites: 'Red Completa de Sitios',
      clientSites: 'Proyectos y Clientes',
      exploreMesh: 'Explorar Ecosistema 🚀'
    },
    videoModal: {
      title: 'Video Institucional — HelpUS Technology',
      subtitle: 'Descubra nuestra ingeniería, ecosistema de plataformas y soluciones corporativas en acción.',
      close: 'Cerrar Video'
    },
    catalog: {
      title: 'Ecosistema de Soluciones por Categoría',
      subtitle: 'Seleccione una categoría para explorar plataformas en vivo o revisar detalles técnicos.',
      tryNow: 'Detalles Técnicos ➔',
      quickLaunch: 'Acceder a Plataforma 🚀',
      partnerBannerTitle: 'Red Completa de Sitios y Clientes',
      partnerBannerDesc: 'Desarrollamos y gestionamos plataformas y portales corporativos a medida.'
    },
    fullPageDetails: {
      backBtn: '← Volver al Ecosistema',
      overviewTitle: 'Visión General e Ingeniería de la Solución',
      technicalArchitecture: 'Arquitectura y Recursos Técnicos',
      targetAudienceTitle: 'Público Objetivo Recomendado',
      keyCapabilitiesTitle: 'Funcionalidades y Destacados',
      officialSubdomain: 'Dirección Web Oficial:',
      launchRealApp: 'Acceder a la Aplicación Real 🚀',
      contactWhatsApp: 'Atención por WhatsApp para esta Solución',
      folderOrigin: 'Proyecto Mapeado:',
      close: 'Cerrar'
    },
    cookies: {
      text: 'Utilizamos cookies para ofrecer la mejor experiencia de navegación y garantizar la seguridad.',
      accept: 'Entendido y Aceptar',
      privacyLink: 'Política de Privacidad'
    },
    modals: {
      institutionalTitle: 'Corporativo — HelpUS Technology',
      institutionalDesc: 'HelpUS Technology Solutions es una empresa de software a medida, sistemas web/mobile y gestión de ecosistemas digitales.',
      helpTitle: 'Centro de Ayuda y Soporte',
      helpDesc: '¿Necesita soporte técnico? Contacte a nuestro equipo central por WhatsApp o correo oficial.',
      privacyTitle: 'Política de Privacidad y Términos de Uso',
      privacyDesc: 'Garantizamos el tratamiento transparente de datos personales según normativas de privacidad.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — Todos los derechos reservados.',
      contactTitle: 'Contacte a HelpUS',
      contactDesc: 'Atención directa para soporte, consultas y contratación de sistemas.',
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
      cultura: 'Cultura y Biografía',
      clientes: 'Clientes y Especiales'
    },
    apps: {
      'helpus-site': {
        name: 'HelpUS Portal Principal',
        subtitle: 'Portal Institucional y Centro del Ecosistema',
        description: 'Portal principal de HelpUS Technology Solutions con navegación unificada por subdominios.',
        features: ['Enrutamiento por Subdominios', 'Video Institucional Integrado', 'Soporte Multi-idioma (PT/EN/ES)'],
        detailsContent: 'Interfaz central del ecosistema HelpUS conectando todas las aplicaciones.',
        technicalHighlights: ['Vite + React + TailwindCSS', 'Cloudflare DNS Engine', 'Vercel Serverless Mesh'],
        targetAudience: 'Ejecutivos, clientes y socios corporativos.',
        whatsappMessage: '¡Hola HelpUS! Quisiera hablar con el equipo corporativo.'
      },
      'helpus-search': {
        name: 'HelpUS Search AI',
        subtitle: 'Búsqueda Unificada y Motor Predictivo',
        description: 'Motor de inteligencia artificial generativa con citas de fuentes en tiempo real.',
        features: ['Búsqueda con Fuentes Verificables', 'Síntesis de Contenido en Tiempo Real', 'Interfaz Estilo Perplexity'],
        detailsContent: 'Motor de inteligencia artificial para búsquedas corporativas precisas.',
        technicalHighlights: ['OpenAI GPT-4o API', 'Perplexity Engine API', 'Streaming Responses'],
        targetAudience: 'Investigadores, analistas y gestores de datos.',
        whatsappMessage: '¡Hola HelpUS! Quisiera probar HelpUS Search AI.'
      },
      'helpus-agent': {
        name: 'HelpUS AI Agent Studio',
        subtitle: 'Creador de Agentes Virtuales Autónomos 24/7',
        description: 'Plataforma para crear, entrenar y desplegar agentes inteligentes integrados a WhatsApp.',
        features: ['Entrenamiento con PDFs y Enlaces', 'Integración Nativa WhatsApp Cloud API', 'Calificación Autónoma de Leads'],
        detailsContent: 'Estudio de agentes autónomos para transformar la atención al cliente.',
        technicalHighlights: ['Vector Database RAG Engine', 'WhatsApp Webhook Routing'],
        targetAudience: 'Equipos de ventas, soporte y operaciones.',
        whatsappMessage: '¡Hola HelpUS! Quiero crear un Agente de IA para mi empresa.'
      },
      'helpus-voice': {
        name: 'HelpUS Voice AI',
        subtitle: 'Generador Neural de Voces y Narraciones',
        description: 'Estudio de síntesis vocal por IA para locuciones hiperrealistas y mensajes de voz.',
        features: ['Voces Neurales Multilingües', 'Exportación MP3/WAV de Alta Calidad', 'Clonación Vocal y Ajuste de Tono'],
        detailsContent: 'Plataforma de IA vocal para creación instantánea de locuciones.',
        technicalHighlights: ['ElevenLabs Neural API', 'Audio Processing Pipeline'],
        targetAudience: 'Creadores de contenido, agencias de marketing y ventas.',
        whatsappMessage: '¡Hola HelpUS! Quisiera probar HelpUS Voice AI.'
      },
      'helpus-slides': {
        name: 'HelpUS AI Slides',
        subtitle: 'Generador de Presentaciones y Pitch Decks',
        description: 'Creador automático de presentaciones ejecutivas en segundos mediante IA.',
        features: ['Generación Instantánea de Pitch Decks', 'Exportación a PDF y PowerPoint', 'Diseños Visuales Elegantes'],
        detailsContent: 'Herramienta de IA generativa para crear presentaciones corporativas.',
        technicalHighlights: ['Gamma-Style AI Engine', 'PDF Generation Pipeline'],
        targetAudience: 'Ejecutivos, fundadores de startups y ponentes.',
        whatsappMessage: '¡Hola HelpUS! Quiero usar HelpUS AI Slides.'
      },
      'helpus-pay': {
        name: 'HelpUS Pay Engine',
        subtitle: 'Pasarela de Pagos y PIX Recurrente',
        description: 'Infraestructura financiera con soporte a PIX instantáneo, cobros recurrentes y conciliación.',
        features: ['Generador de QR Code PIX Instantáneo', 'Suscripciones y Cobros Recurrentes', 'Webhooks en Tiempo Real'],
        detailsContent: 'Engine financiero para automatización de cobros digitales.',
        technicalHighlights: ['Asaas / MercadoPago API', 'PIX Dynamic QR Code'],
        targetAudience: 'Empresas SaaS, e-commerce y proveedores de servicios.',
        whatsappMessage: '¡Hola HelpUS! Quiero integrar HelpUS Pay.'
      },
      'helpus-docs': {
        name: 'HelpUS Developer Docs',
        subtitle: 'Portal de Documentación de API y Desarrolladores',
        description: 'Centro de documentación técnica con ejemplos de código en cURL, Node.js y Python.',
        features: ['Ejemplos de Código Interactivos', 'Guías de Autenticación Bearer Token', 'OpenAPI / Swagger Spec'],
        detailsContent: 'Portal para desarrolladores que integran servicios HelpUS.',
        technicalHighlights: ['Redoc / Swagger UI', 'Code Snippet Generator'],
        targetAudience: 'Ingenieros de software, desarrolladores y CTOs.',
        whatsappMessage: '¡Hola HelpUS! Tengo preguntas sobre las APIs.'
      },
      'helpus-auth': {
        name: 'HelpUS Auth SSO',
        subtitle: 'Portal de Autenticación Cifrada y SSO',
        description: 'Sistema centralizado de inicio de sesión único (SSO) con JWT, OAuth2 y 2FA.',
        features: ['Inicio de Sesión Único para Todas las Apps', 'Autenticación Cifrada JWT', 'Soporte 2FA y OAuth2'],
        detailsContent: 'Plataforma unificada de seguridad e identidad corporativa.',
        technicalHighlights: ['JWT Auth Engine', 'Redis Session Management'],
        targetAudience: 'Usuarios corporativos y administradores de TI.',
        whatsappMessage: '¡Hola HelpUS! Necesito ayuda con el Login SSO.'
      },
      'helpus-crm': {
        name: 'HelpUS CRM Omnichannel',
        subtitle: 'CRM de Ventas y Gestión de WhatsApp',
        description: 'Panel Kanban para oportunidades de ventas y gestión multicanal de WhatsApp.',
        features: ['Pipelines Kanban de Ventas', 'Multi-agente en el Mismo WhatsApp', 'Métricas de Conversión'],
        detailsContent: 'Sistema de ventas con automatización de mensajes y seguimiento de embudo.',
        technicalHighlights: ['Omnichannel Routing Engine', 'Kanban Drag & Drop UI'],
        targetAudience: 'Gerentes de ventas, agentes y equipos comerciales.',
        whatsappMessage: '¡Hola HelpUS! Quisiera una demo de HelpUS CRM.'
      },
      'helpus-admin': {
        name: 'HelpUS Admin Dashboard',
        subtitle: 'Panel Master de Uptime, Métricas y Analytics',
        description: 'Centro de control en tiempo real del status de subdominios y leads capturados.',
        features: ['Monitor de Uptime en Tiempo Real', 'Feed Unificado de Leads Capturados', 'Analytics de Tráfico'],
        detailsContent: 'Dashboard ejecutivo de control 360 del ecosistema HelpUS.',
        technicalHighlights: ['WebSocket Live Feeds', 'Analytics Data Engine'],
        targetAudience: 'Administradores, directores y gestores.',
        whatsappMessage: '¡Hola HelpUS! Quisiera soporte sobre el Panel Admin.'
      },
      'helpus-status': {
        name: 'HelpUS Status Engine',
        subtitle: 'Monitor Global de Salud de Servicios y Uptime',
        description: 'Página pública de monitoreo de disponibilidad de subdominios, APIs y bases de datos.',
        features: ['Monitoreo Activo 24/7 de Subdominios', 'Historial de Latencia e Incidentes', 'Alertas de Mantenimiento'],
        detailsContent: 'Plataforma de transparencia y garantía de SLA para usuarios HelpUS.',
        technicalHighlights: ['Automated Ping Checkers', 'Status Page Engine'],
        targetAudience: 'Clientes, desarrolladores y soporte.',
        whatsappMessage: '¡Hola HelpUS! Consultando status de servicios.'
      },
      'helpus-market': {
        name: 'HelpUS Marketplace',
        subtitle: 'Tienda de Plugins y Webhooks 1-Clic',
        description: 'Catálogo de integraciones para conectar HelpUS con herramientas como Zapier, N8N y Shopify.',
        features: ['Integraciones 1-Clic con Webhooks', 'Plugins para WhatsApp y Pagos', 'Claves de API Configurables'],
        detailsContent: 'Hub de extensiones para potenciar flujos de trabajo.',
        technicalHighlights: ['Webhook Dispatcher API', 'Plugin Architecture'],
        targetAudience: 'Integradores, gestores de TI y analistas.',
        whatsappMessage: '¡Hola HelpUS! Quiero integrar un plugin.'
      },
      'helpus-marketing': {
        name: 'HelpUS Growth & Ads',
        subtitle: 'Generador de Anuncios y Copywriting con IA',
        description: 'Herramienta inteligente para crear anuncios en Meta Ads, Google Ads y textos de alta conversión.',
        features: ['Generador de Anuncios Meta y Google', 'Copywriting de Alta Conversión', 'Generador de Textos y Hashtags'],
        detailsContent: 'Plataforma de automatización de marketing digital.',
        technicalHighlights: ['Copywriting AI Engine', 'Ad Template Builder'],
        targetAudience: 'Equipos de marketing, gestores de tráfico y agencias.',
        whatsappMessage: '¡Hola HelpUS! Quiero probar Growth & Ads.'
      },
      'helpus-app': {
        name: 'HelpUS SuperApp Portal',
        subtitle: 'Portal del Consumidor Final y Servicios Locales',
        description: 'SuperApp para acceso a servicios, agendamientos y movilidad en una interfaz intuitiva.',
        features: ['Diseño Mobile-First Intuitivo', 'Acceso Centralizado a Servicios', 'Historial de Pedidos y Citas'],
        detailsContent: 'Aplicación enfocada en la experiencia del usuario final.',
        technicalHighlights: ['PWA Framework', 'Mobile Optimized UI'],
        targetAudience: 'Consumidores finales y clientes HelpUS.',
        whatsappMessage: '¡Hola HelpUS! Quiero conocer la SuperApp.'
      },
      'nexosai': {
        name: 'NexosAI Cloud Mesh',
        subtitle: 'Centro de Comando Cloud y Orquestación',
        description: 'Centro de comando para orquestar instancias de IA, agentes y nodos distribuidos.',
        features: ['Orquestación de Nodos en la Nube', 'Panel de Control de Instancias IA', 'Métricas de Procesamiento'],
        detailsContent: 'Plataforma avanzada para gestión de malla de IA en la nube.',
        technicalHighlights: ['Distributed Mesh Architecture', 'Real-Time Node Metrics'],
        targetAudience: 'Ingenieros de infraestructura, arquitectos de IA y CTOs.',
        whatsappMessage: '¡Hola HelpUS! Interesado en NexosAI Cloud.'
      },
      'realestate': {
        name: 'HelpUS RealEstate AI',
        subtitle: 'Portal Inmobiliario Inteligente y Valoración IA',
        description: 'Portal inmobiliario con búsqueda por mapas interactivos y valoración predictiva de inmuebles.',
        features: ['Búsqueda por Región y Mapa Interactivo', 'Valoración Predictiva de Inmuebles', 'Envío Directo de Propuestas'],
        detailsContent: 'Portal para compra, venta y alquiler de inmuebles de alto nivel.',
        technicalHighlights: ['Interactive Map Engine', 'Property Valuation AI'],
        targetAudience: 'Compradores, inversores inmobiliarios y agentes.',
        whatsappMessage: '¡Hola! Vi un inmueble en RealEstate y quiero información.'
      },
      'usmle': {
        name: 'USMLE Exam Prep',
        subtitle: 'Plataforma Médica de Preparación USMLE Step 1 & 2',
        description: 'Sistema especializado de preguntas médicas (QBank) y exámenes de simulación para EE.UU.',
        features: ['QBank con Preguntas Explicadas', 'Exámenes de Simulación Formato Oficial', 'Analytics de Rendimiento por Especialidad'],
        detailsContent: 'Plataforma educativa médica para aprobación del examen USMLE.',
        technicalHighlights: ['Medical Question Engine', 'Performance Analytics Chart'],
        targetAudience: 'Médicos y estudiantes buscando licencia médica en EE.UU.',
        whatsappMessage: '¡Hola! Quiero acceso a USMLE Prep.'
      },
      'saude': {
        name: 'HelpUS Health Tech',
        subtitle: 'Portal de Telemedicina y Gestión de Salud',
        description: 'Agendamiento de citas médicas, historial clínico electrónico cifrado y seguimiento.',
        features: ['Agendamiento de Citas Médicas', 'Historial Clínico Cifrado', 'Integración con Exámenes'],
        detailsContent: 'Sistema para clínicas y profesionales de la salud.',
        technicalHighlights: ['HIPAA / LGPD Compliant DB', 'Telemedicine Video Routing'],
        targetAudience: 'Clínicas, profesionales de salud y pacientes.',
        whatsappMessage: '¡Hola HelpUS! Quiero conocer HelpUS Health.'
      },
      'wagnerdriver-site': {
        name: 'Wagner Driver',
        subtitle: 'Transporte Ejecutivo VIP en João Pessoa',
        description: 'Portal oficial para reserva de viajes ejecutivos, traslados al aeropuerto y atención VIP.',
        features: ['Reserva Previa de Viajes Ejecutivos', 'Traslado Aeropuerto JPA', 'Atención Personalizada VIP'],
        detailsContent: 'Servicio de transporte ejecutivo puntual y discreto.',
        technicalHighlights: ['Vite Direct Booking Engine', 'WhatsApp Fare Calculator'],
        targetAudience: 'Ejecutivos, turistas y familias que buscan transporte seguro.',
        whatsappMessage: '¡Hola Wagner! Quisiera reservar un viaje ejecutivo.'
      },
      'pizza': {
        name: 'Pizza Ordering Hub',
        subtitle: 'Menú Digital y Pedidos por QR Code',
        description: 'Plataforma de pedidos directos para pizzerías con armado de pizzas mitad y mitad.',
        features: ['Armado de Pizza Mitad y Mitad', 'Envío de Pedido Formateado por WhatsApp', 'Menú Interactivo QR Code'],
        detailsContent: 'Sistema de atención digital para acelerar delivery y mesas.',
        technicalHighlights: ['Vite Fast Order UI', 'WhatsApp Cart Routing'],
        targetAudience: 'Pizzerías, restaurantes y locales de comida.',
        whatsappMessage: '¡Hola! Quisiera hacer un pedido de pizza.'
      },
      'jobs': {
        name: 'HelpUS Jobs',
        subtitle: 'Portal de Empleos y Talentos Tech',
        description: 'Plataforma de reclutamiento para conectar profesionales con oportunidades tecnológicas.',
        features: ['Búsqueda de Empleos por Tecnología', 'Envío Directo de Currículums', 'Panel de Empleos Destacados'],
        detailsContent: 'Portal de empleos y desarrollo profesional en tecnología.',
        technicalHighlights: ['Job Search Engine', 'Candidate Application Flow'],
        targetAudience: 'Profesionales en búsqueda de empleo y reclutadores.',
        whatsappMessage: '¡Hola HelpUS! Quiero postularme a un empleo.'
      },
      'visa': {
        name: 'HelpUS Visa Solutions',
        subtitle: 'Asesoría de Visas e Inmigración a EE.UU.',
        description: 'Portal de orientación y asesoría para visas de turismo (B1/B2), estudiante (F1) e inmigración.',
        features: ['Evaluación de Elegibilidad de Visa', 'Asistencia Formulario DS-160', 'Agendamiento de Cita Consular'],
        detailsContent: 'Consultoría completa para procesos consulares e migratorios.',
        technicalHighlights: ['Visa Eligibility Assessment Engine', 'Document Checklist System'],
        targetAudience: 'Solicitantes de visa americana, viajeros y estudiantes.',
        whatsappMessage: '¡Hola HelpUS Visa! Necesito asesoría para mi visa americana.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Plataforma de Apoyo a Adultos Mayores y Cuidadores',
        description: 'Portal de apoyo, guías de cuidado y recursos de salud mental para familiares y cuidadores.',
        features: ['Guías Prácticas de Cuidado de Adultos Mayores', 'Red de Apoyo y Consejos de Expertos', 'Control de Medicamentos'],
        detailsContent: 'Solución digital humanizada para apoyar el cuidado gerontológico.',
        technicalHighlights: ['Accessible UI Design', 'Content Management System'],
        targetAudience: 'Cuidadores de adultos mayores, familias y profesionales.',
        whatsappMessage: '¡Hola! Quisiera saber más sobre Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan Biografía',
        subtitle: 'Memorial y Línea de Tiempo Biográfica Digital',
        description: 'Plataforma biográfica personalizada con galerías de fotos, videos y muro de homenajes.',
        features: ['Línea de Tiempo Interactiva de Vida', 'Galería de Fotos y Videos HD', 'Muro de Homenajes y Mensajes'],
        detailsContent: 'Archivo biográfico para preservar historias de vida e inolvidables recuerdos.',
        technicalHighlights: ['Timeline Visual Engine', 'High-Res Media Showcase'],
        targetAudience: 'Familias y homenajes en fechas especiales.',
        whatsappMessage: '¡Hola! Quisiera crear un memorial biográfico digital.'
      },
      'katiaxavier': {
        name: 'Kátia Xavier Inmuebles',
        subtitle: 'Consultoría Inmobiliaria en João Pessoa',
        description: 'Catálogo actualizado de apartamentos en construcción y listos para habitar en João Pessoa.',
        features: ['Inmuebles en Cabo Branco y Tambaú', 'Atención Directa por WhatsApp con la Agente', 'Filtros Rápidos de Búsqueda'],
        detailsContent: 'Vitrina inmobiliaria para proyectos de nivel medio y alto.',
        technicalHighlights: ['Vite Real Estate Showcase', 'Direct WhatsApp Contact'],
        targetAudience: 'Compradores e inversores en João Pessoa.',
        whatsappMessage: '¡Hola Kátia Xavier! Vi un inmueble en su sitio.'
      },
      'marciotopbarber': {
        name: 'Márcio TopBarber',
        subtitle: 'SaaS de Gestión de Barbería y Reservas',
        description: 'Sistema completo de reservas online de cortes y barba, gestión de clientes y caja.',
        features: ['Reserva Online 24/7 sin Esperas', 'Gestión de Horarios de Barberos', 'Control Financiero y Reportes'],
        detailsContent: 'Solución SaaS para automatización de barberías.',
        technicalHighlights: ['Booking Calendar Framework', 'Financial Analytics UI'],
        targetAudience: 'Propietarios de barberías, barberos y clientes.',
        whatsappMessage: '¡Hola! Quisiera reservar un turno en Márcio TopBarber.'
      },
      'cardioia': {
        name: 'CardioIA',
        subtitle: 'Soporte Diagnóstico de ECG con IA',
        description: 'Plataforma médica para interpretación de electrocardiogramas (ECG) mediante modelos predictivos.',
        features: ['Análisis Predictivo de Trazados ECG', 'Informes Médicos de Soporte', 'Cumplimiento de Privacidad Médica'],
        detailsContent: 'Herramienta de soporte a decisiones para cardiólogos y médicos de emergencias.',
        technicalHighlights: ['ECG Signal Processing AI', 'DICOM / PDF Reader Engine'],
        targetAudience: 'Cardiólogos, médicos de urgencias y hospitales.',
        whatsappMessage: '¡Hola! Interesado en CardioIA para informes de ECG.'
      },
      'vivasuacura': {
        name: 'VivaSuaCura',
        subtitle: 'Portal de Salud Holística y Bienestar',
        description: 'Artículos de medicina preventiva, programas de bienestar, recetas saludables y seguimiento.',
        features: ['Artículos de Medicina Preventiva', 'Programas de Cambio de Estilo de Vida', 'Comunidad VivaSuaCura'],
        detailsContent: 'Portal educativo enfocado en la salud integral.',
        technicalHighlights: ['Content Portal Architecture', 'Member Management'],
        targetAudience: 'Personas en busca de bienestar, nutrición y salud integral.',
        whatsappMessage: '¡Hola! Quisiera información sobre VivaSuaCura.'
      },
      'trading-lab': {
        name: 'Trading Lab Analytics',
        subtitle: 'Inteligencia Financiera y Análisis de Mercado',
        description: 'Panel de análisis estadístico para el mercado financiero y algoritmos cuantitativos.',
        features: ['Dashboards Financieros Interactivos', 'Modelos de Análises Cuantitativos', 'Alertas de Mercado en Tiempo Real'],
        detailsContent: 'Solución analítica para inversores y traders.',
        technicalHighlights: ['Real-Time Financial Data Engine', 'Advanced Charts'],
        targetAudience: 'Traders, inversores y analistas cuantitativos.',
        whatsappMessage: '¡Hola HelpUS! Interesado en Trading Lab.'
      },
      'neuroeduardomagalhaes': {
        name: 'Dr. Eduardo Magalhães',
        subtitle: 'Neurología, Neurofisiología y Portal de Exámenes',
        description: 'Plataforma médica para consultas neurológicas, exámenes ENMG, EEG y descarga de informes PDF.',
        features: ['Reserva de Consultas y Exámenes ENMG/EEG', 'Portal del Paciente para Descarga de PDF', 'Emisor de Informes Médicos', 'Búsqueda por Palabras Clave'],
        detailsContent: 'Sistema completo de diagnóstico neurofisiológico para la clínica Dr. Eduardo Magalhães.',
        technicalHighlights: ['Encrypted LGPD Portal', 'Letterhead PDF & QR Code Generator'],
        targetAudience: 'Pacientes de neurología y médicos remitentes.',
        whatsappMessage: '¡Hola! Quisiera reservar una consulta o examen.'
      },
      'energisa': {
        name: 'HelpUS Energisa Analytics',
        subtitle: 'Auditoría de Combustible y Analytics Energético',
        description: 'Dashboard corporativo para auditoría de flotas, control de combustible y reportes.',
        features: ['Auditoría Predictiva de Consumo de Combustible', 'Dashboard de KPIs Operativos y Costos', 'Exportación de Reportes de Auditoría'],
        detailsContent: 'Plataforma corporativa diseñada para auditoría operativa.',
        technicalHighlights: ['PostgreSQL & Railway Cloud Persistence', 'React Analytics Framework'],
        targetAudience: 'Gestores de logística, operadores de flota y auditores.',
        whatsappMessage: '¡Hola HelpUS! Necesito información sobre Energisa Analytics.'
      },
      'helpus-fba-suite': {
        name: 'HelpUS Amazon FBA Suite',
        subtitle: 'Automatización de E-commerce Amazon FBA',
        description: 'Suite de inteligencia de precios, calculadora de márgenes FBA y análisis de mercado.',
        features: ['Calculadora de Tarifas y Márgenes FBA', 'Monitoreo de Precios y Competencia', 'Reportes de ROI y Pronóstico de Stock'],
        detailsContent: 'Sistema completo para vendedores de Amazon FBA.',
        technicalHighlights: ['E-commerce API Integration', 'Margin Calculation Engine'],
        targetAudience: 'Vendedores de Amazon, gestores de e-commerce e importadores.',
        whatsappMessage: '¡Hola HelpUS! Quiero probar Amazon FBA Suite.'
      },
      'cvss': {
        name: 'CVSS Threat Prioritization',
        subtitle: 'Dashboard Oficial de Ciberseguridad y Puntuación CVSS',
        description: 'Panel interactivo de vulnerabilidades de ciberseguridad con puntuación CVSS 3.1/4.0.',
        features: ['Calculadora CVSS 3.1 & 4.0 en Tiempo Real', 'Priorización Contextual de Riesgos de TI', 'Reportes Ejecutivos de Seguridad'],
        detailsContent: 'Herramienta avanzada para SecOps y CISOs.',
        technicalHighlights: ['CVSS v4.0 Engine', 'Interactive Security Dashboard'],
        targetAudience: 'Ingenieros de seguridad, CISOs, auditores y equipos de TI.',
        whatsappMessage: '¡Hola HelpUS! Quiero información sobre CVSS Threat Dashboard.'
      },
      'danyimoveisjp': {
        name: 'Dany Lima Inmuebles',
        subtitle: 'Portal Inmobiliario de Lujo — Bessa (CRECI 19500)',
        description: 'Portal inmobiliario exclusivo para propiedades frente al mar en Bessa.',
        features: ['Catálogo de Inmuebles en Bessa', 'Contacto Directo por WhatsApp', 'Filtros de Precio y Comodidades'],
        detailsContent: 'Vitrina inmobiliaria para departamentos frente al mar.',
        technicalHighlights: ['React Real Estate Layout', 'WhatsApp Lead Routing'],
        targetAudience: 'Compradores e inversores inmobiliarios en Bessa.',
        whatsappMessage: '¡Hola Dany Lima! Vi un inmueble y quiero agendar una visita.'
      },
      'caipiraraiz': {
        name: 'Caipira Raiz JP',
        subtitle: 'Huevos de Campo Seleccionados',
        description: 'Plataforma de pedidos y distribución de huevos de campo frescos en João Pessoa.',
        features: ['Menú Digital de Combos de Huevos', 'Entrega Directa por WhatsApp', 'Trazabilidad de la Granja a la Mesa'],
        detailsContent: 'Vitrina digital para pedidos directos de granja.',
        technicalHighlights: ['Vite Direct Order Flow', 'WhatsApp Cart Integration'],
        targetAudience: 'Familias, restaurantes y locales comerciales.',
        whatsappMessage: '¡Hola Caipira Raiz! Quiero hacer un pedido de huevos.'
      }
    }
  }
};

export type Language = 'pt' | 'en' | 'es';

export interface TranslationSchema {
  nav: {
    institutional: string;
    solutions: string;
    help: string;
    contact: string;
    backToCatalog: string;
    allSites: string;
  };
  megaMenu: {
    platforms: string;
    services: string;
    foodCulture: string;
    allSites: string;
    clientSites: string;
    exploreMesh: string;
  };
  hero: {
    title: string;
    subtitle: string;
    exploreBtn: string;
    badge: string;
    sitesBadge: string;
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
      backToCatalog: '← Voltar ao Catálogo',
      allSites: 'Rede de Sites'
    },
    megaMenu: {
      platforms: 'Plataformas Principais',
      services: 'Serviços & Mobilidade',
      foodCulture: 'Gastronomia & Cultura',
      allSites: 'Rede de Sites Completa',
      clientSites: 'Projetos & Clientes',
      exploreMesh: 'Explorar Ecossistema 🚀'
    },
    hero: {
      badge: '✨ ECOSSISTEMA UNIFICADO DE TECNOLOGIA & SOFTWARES',
      title: 'Portal de Soluções & Ecossistema HelpUS',
      subtitle: 'Conheça o ecossistema completo de plataformas corporativas, aplicações de IA, redes imobiliárias e sistemas desenvolvidos pela HelpUS.',
      exploreBtn: 'Explorar Soluções',
      sitesBadge: 'Soluções Ativas no Ar'
    },
    catalog: {
      title: 'Soluções & Plataformas em Destaque',
      subtitle: 'Selecione uma aplicação para visualizar a página de apresentação técnica ou acessar a plataforma ativa.',
      tryNow: 'Conhecer Solução ➔',
      quickLaunch: 'Acessar Site Real 🚀',
      partnerBannerTitle: 'Rede Completa de Sites & Clientes',
      partnerBannerDesc: 'Além de nossas plataformas próprias, desenvolvemos e gerenciamos sistemas e sites corporativos sob medida para parceiros e clientes.'
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
      cultura: 'Cultura & Biografia',
      clientes: 'Clientes & Especializados'
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
        detailsContent: 'O serviço de Desenvolvimento de Software da HelpUS projeta e constrói soluções digitais customizadas para empresas de todos os portes.',
        technicalHighlights: [
          'Banco de Dados Relacional PostgreSQL no Railway',
          'Autenticação Segura via JWT & Middleware de Permissões',
          'Infraestrutura Serverless Escalável na Vercel e Railway',
          'Documentação Completa de API via Swagger UI'
        ],
        targetAudience: 'Empresas, startups, consultórios e fundadores que precisam transformar ideias em sistemas corporativos robustos.',
        whatsappMessage: 'Olá HelpUS! Gostaria de um orçamento para desenvolvimento de software sob medida.'
      },
      'realestate': {
        name: 'HelpUS RealEstate',
        subtitle: 'Rede Imobiliária & Portal Guarda-Chuva de Corretores Credenciados',
        description: 'Plataforma imobiliária completa que conecta corretores de imóveis credenciados (CRECI), propriedades exclusivas, buscas interativas por mapa e gerenciamento de carteira de imóveis.',
        features: [
          'Gestão de Imóveis para Corretores Credenciados com CRECI Verificado',
          'Navegação e Busca Interativa por Mapa Georreferenciado',
          'Galeria de Fotos em Alta Definição, Vídeos e Tour Virtual',
          'Painel de Leads & Agendamento de Visitas Direto via WhatsApp',
          'Sistema de Favoritos e Coleções de Imóveis em Destaque'
        ],
        detailsContent: 'O HelpUS RealEstate oferece uma infraestrutura completa para o mercado imobiliário, permitindo que corretores gerenciem seus imóveis com mapa interativo e recebam contatos diretos.',
        technicalHighlights: [
          'Desenvolvido em Next.js App Router com Prisma ORM e PostgreSQL/SQLite',
          'Integração de Mapas Interativos com React Leaflet e OpenStreetMap',
          'Autenticação Segura de Corretores e Painel de Gestão de Anúncios',
          'Design System Responsivo com Tema Claro & Escuro'
        ],
        targetAudience: 'Corretores imobiliários credenciados, imobiliárias, compradores e investidores imobiliários.',
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre a plataforma HelpUS RealEstate.'
      },
      'nexosai': {
        name: 'NexosAI Cloud Mesh',
        subtitle: 'Orquestração de Agentes Virtuais de IA & Nós Locais com Privacidade',
        description: 'Plataforma avançada para gerenciamento e orquestração de Agentes Virtuais autônomos de Inteligência Artificial, integração com LLMs locais (Ollama) e em nuvem (GPT-4o, DeepSeek).',
        features: [
          'Orquestração Multi-Agente com Execução Autônoma de Tarefas 24/7',
          'Integração Híbrida: LLMs em Nuvem (OpenAI, DeepSeek) e Nós Locais (Ollama)',
          'Busca Vetorial RAG (Retrieval-Augmented Generation) para Documentos',
          'Relés de Atendimento Automatizado para WhatsApp e Canais de Comunicação',
          'Painel de Auditoria, Métricas de Latência e Logs de Execução em Tempo Real'
        ],
        detailsContent: 'O NexosAI Cloud é a solução de ponta para empresas que buscam automatizar processos complexos através de agentes de inteligência artificial de alta precisão.',
        technicalHighlights: [
          'Arquitetura de Nós Distribuídos via WebSockets & HTTP Relays',
          'Motor de Vetorização de Documentos RAG com Criptografia de Ponta a Ponta',
          'Controle Estrito de Privacidade para Execução Local de Modelos com Ollama',
          'Dashboard em Tempo Real de Consumo de Tokens e Status dos Agentes'
        ],
        targetAudience: 'Empresas, equipes de TI, escritórios de advocacia, clínicas e desenvolvedores.',
        whatsappMessage: 'Olá HelpUS! Tenho interesse na plataforma NexosAI para automação com inteligência artificial.'
      },
      'usmle': {
        name: 'USMLE Prep Platform',
        subtitle: 'Sistema de Preparação & Simulados para Revalidação Médica nos EUA',
        description: 'Plataforma de estudos e preparação para médicos e estudantes focados nas etapas do exame USMLE (Step 1, Step 2 CK, Step 3) para atuação médica nos Estados Unidos.',
        features: [
          'Banco de Questões Clínicas Atualizado no Padrão do Exame USMLE',
          'Simulados Cronometrados com Feedback Detalhado e Explicações por Questão',
          'Métricas Individuais de Desempenho por Especialidade Médica',
          'Repetição Espaçada Integrada para Fixação de Conceitos Chave',
          'Acesso Multiplataforma Web e Mobile com Sincronização em Nuvem'
        ],
        detailsContent: 'Plataforma focada no sucesso de médicos brasileiros e internacionais na validação de seu diploma nos EUA.',
        technicalHighlights: [
          'Motor de Banco de Questões com Filtros Avançados por Disciplina e Sistema Orgânico',
          'Algoritmo Estatístico de Repetição Espaçada para Retenção de Memória',
          'Gerenciamento de Sessões de Prova Cronometradas'
        ],
        targetAudience: 'Médicos graduados e estudantes de medicina focados na revalidação médica nos EUA.',
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre a plataforma USMLE Prep.'
      },
      'saude': {
        name: 'HelpUS Saúde',
        subtitle: 'Telemedicina & Gestão Integrada de Saúde',
        description: 'Sistema completo para clínicas e profissionais da saúde. Oferece agendamento de consultas, prontuário eletrônico e atendimento por telemedicina.',
        features: [
          'Prontuário Eletrônico do Paciente (PEP) Criptografado',
          'Agendamento de Consultas Presenciais e Online',
          'Sala de Atendimento por Telemedicina HD Segura (HIPAA Compliant)',
          'Prescrição Digital de Medicamentos e Exames com Assinatura ICP',
          'Gestão Financeira e Controle de Receitas Médicas'
        ],
        detailsContent: 'O HelpUS Saúde digitaliza toda a operação clínica com telemedicina criptografada.',
        technicalHighlights: [
          'Conformidade com Normas da LGPD e Protocolo HIPAA',
          'Vídeo HD de Baixa Latência Integrado via WebRTC Segura',
          'Assinatura Digital de Documentos Médicos ICP-Brasil'
        ],
        targetAudience: 'Clínicas médicas, consultórios particulares e profissionais da saúde autônomos.',
        whatsappMessage: 'Olá HelpUS! Gostaria de consultar sobre o HelpUS Saúde para minha clínica.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Mobilidade Executiva & Transporte VIP',
        description: 'Solução digital para agendamento de transporte executivo, transfer vip, viagens particulares e gestão de corridas corporativas.',
        features: [
          'Agendamento Prévio de Transfer Aeroporto e Viagens VIP',
          'Frota de Veículos Executivos Monitorada em Tempo Real',
          'Faturamento Corporativo Mensal Centralizado',
          'Atendimento Exclusivo com Motoristas Bilíngues para Eventos',
          'Recepção com Placa Personalizada em Terminais de Desembarque'
        ],
        detailsContent: 'Sistema corporativo de mobilidade para recepção de executivos em aeroportos e eventos.',
        technicalHighlights: [
          'Motor de Agendamento com Confirmação Instantânea',
          'Telemetria e Rastreamento de Frota em Tempo Real'
        ],
        targetAudience: 'Executivos, empresas, hotéis e passageiros exigentes.',
        whatsappMessage: 'Olá HelpUS! Tenho interesse no serviço de Executive Driver.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Plataforma de Pedidos & Gestão para Pizzarias',
        description: 'Sistema completo de delivery e gestão para pizzarias. Oferece cardápio digital por QR Code, pedidos na mesa e rastreamento de entregas.',
        features: [
          'Cardápio Digital Interativo por QR Code para Mesas e Delivery',
          'Montador de Pizzas Meio a Meio com Adicionais Customizados',
          'Painel de Produção para Cozinha (KDS — Kitchen Display System)',
          'Gestão de Entregadores e Rastreamento de Pedidos em Tempo Real',
          'Relatórios de Vendas, Curva ABC de Produtos e Controle de Caixa'
        ],
        detailsContent: 'Sistema moderno de gestão gastronômica para pizzarias e restaurantes.',
        technicalHighlights: [
          'Interface Fluida Otimizada para Celulares',
          'Status em Tempo Real via WebSockets'
        ],
        targetAudience: 'Pizzarias, restaurantes, lanchonetes e dark kitchens.',
        whatsappMessage: 'Olá HelpUS! Gostaria de um orçamento para o sistema Pizza & Delivery.'
      },
      'jobs': {
        name: 'Jobs & Empregos',
        subtitle: 'Portal de Oportunidades & Recrutamento Inteligente',
        description: 'Plataforma de conexão entre profissionais e empresas. Oferece publicação de vagas, triagem automática de currículos e gestão de candidaturas.',
        features: [
          'Publicação e Divulgação de Vagas de Emprego',
          'Cadastro Completo de Currículos com Análise de Perfil',
          'Filtros Inteligentes de Candidatos por Competências e Região',
          'Painel do Recrutador para Agendamento de Entrevistas',
          'Notificações de Novas Vagas por E-mail e WhatsApp'
        ],
        detailsContent: 'Portal moderno para aproximar talentos das melhores oportunidades de trabalho.',
        technicalHighlights: [
          'Sistema de Filtros Dinâmicos de Vagas',
          'Banco de Dados Otimizado para Busca Rápida'
        ],
        targetAudience: 'Empresas contratantes, agências de RH e profissionais em busca de colocação.',
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre a plataforma Jobs & Empregos.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Consultoria Digital & Assessoria de Vistos Internacionais',
        description: 'Plataforma de acompanhamento e suporte para processos de vistos de turismo, trabalho e estudante para os EUA e outros países.',
        features: [
          'Preenchimento Orientado de Formulários (DS-160 e Outros)',
          'Checklist Personalizado de Documentação Necessária',
          'Agendamento de Entrevistas no Consulado',
          'Simulação de Entrevista Consular com Especialistas',
          'Acompanhamento do Status do Processo em Tempo Real'
        ],
        detailsContent: 'Solução digital para desmistificar o processo de obtenção de vistos internacionais.',
        technicalHighlights: [
          'Checklists Dinâmicos por Tipo de Visto e País de Destino',
          'Portal do Cliente com Upload Seguro de Documentos'
        ],
        targetAudience: 'Viajantes, estudantes, profissionais e famílias em processo de imigração.',
        whatsappMessage: 'Olá HelpUS! Preciso de assessoria para visto internacional.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Preservação de Histórias, Memoriais Digitais & Acervo Familiar',
        description: 'Plataforma dedicada à criação de memoriais digitais, biografias de famílias e preservação de legados históricos com mídia enriquecida.',
        features: [
          'Criação de Páginas de Memorial Digital com Fotos e Vídeos',
          'Linha do Tempo Interativa da Vida e Conquistas',
          'Leitura de QR Code em Placas e Livros Físicos de Homenagem',
          'Espaço para Depoimentos, Condolências e Mensagens de Carinho',
          'Privacidade Configurável (Público ou Restrito à Família)'
        ],
        detailsContent: 'Homenagens e biografias perpétuas com acesso via QR Code e recursos multimídia.',
        technicalHighlights: [
          'Hospedagem Perpétua com Redundância em Nuvem',
          'Geração Automática de QR Codes de Alta Resolução'
        ],
        targetAudience: 'Famílias, historiadores, instituições e homenagens memoriais.',
        whatsappMessage: 'Olá HelpUS! Gostaria de criar uma página no Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan Biografia',
        subtitle: 'Biografia Digital & Trajetória Profissional',
        description: 'Website biográfico personalizado apresentando a trajetória, projetos marcantes e conquistas profissionais.',
        features: [
          'Linha do Tempo Visual de Projetos e Conquistas',
          'Galeria de fotos e registros em alta qualidade',
          'Integração com Redes Sociais e Contato Direto',
          'Design System Moderno de Alta Legibilidade'
        ],
        detailsContent: 'Website institucional focado em apresentar trajetórias pessoais e profissionais marcantes.',
        technicalHighlights: [
          'Design Responsivo de Alta Performance',
          'Carregamento Ultrarrápido'
        ],
        targetAudience: 'Profissionais, executivos e personalidades.',
        whatsappMessage: 'Olá HelpUS! Gostaria de solicitar um site biográfico personalizado.'
      },
      'katiaxavier': {
        name: 'Kátia Xavier — Soluções Jurídicas',
        subtitle: 'Advocacia Especializada & Soluções RFE',
        description: 'Portal de advocacia e consultoria jurídica especializada, integrando atendimento ao cliente, consulta de processos e publicações.',
        features: [
          'Atendimento Jurídico Especializado via WhatsApp',
          'Áreas de Atuação: Direito RFE, Cível e Empresarial',
          'Agendamento de Consultas Presenciais e Online',
          'Portal de Conteúdo e Notícias Jurídicas'
        ],
        detailsContent: 'Solução digital desenvolvida para o escritório Kátia Xavier Advogados.',
        technicalHighlights: [
          'Infraestrutura Segura de Alta Disponibilidade',
          'Formulário de Contato Direto'
        ],
        targetAudience: 'Clientes jurídicos e pessoas físicas necessitando de suporte legal.',
        whatsappMessage: 'Olá! Vim pelo site da HelpUS e gostaria de falar com a equipe da Dra. Kátia Xavier.'
      },
      'marciotopbarber': {
        name: 'Márcio Top Barber',
        subtitle: 'Agendamento & Sistema de Barbearia VIP',
        description: 'Plataforma completa de agendamento online de cortes, barba e tratamento capilar masculino para a barbearia Márcio Top Barber.',
        features: [
          'Agendamento Online 24/7 com Escolha de Horário e Barbeiro',
          'Cardápio de Serviços de Cabelo, Barba e Estética Masculina',
          'Lembretes Automáticos de Horário via WhatsApp',
          'Programa de Fidelidade para Clientes Recorrentes'
        ],
        detailsContent: 'Sistema completo de gestão de agendamentos e presença digital para a marca Márcio Top Barber.',
        technicalHighlights: [
          'Interface Mobile-First de Rápido Agendamento',
          'Sincronização de Agenda em Tempo Real'
        ],
        targetAudience: 'Clientes da barbearia e homens que buscam praticidade no agendamento.',
        whatsappMessage: 'Olá! Gostaria de agendar um horário na barbearia Márcio Top Barber.'
      },
      'cardioia': {
        name: 'CardioIA — IA em Cardiologia',
        subtitle: 'Suporte à Decisão Clínica & Análise Eletrocardiográfica',
        description: 'Plataforma de inteligência artificial voltada para auxílio no diagnóstico de exames eletrocardiográficos e cardiologia clínica.',
        features: [
          'Triagem Assistida por IA para Laudos Eletrocardiográficos',
          'Biblioteca de Casos Clínicos e Referências Médicas',
          'Segurança de Dados de Saúde com Criptografia'
        ],
        detailsContent: 'Tecnologia de ponta aplicando modelos de inteligência artificial à medicina cardiovascular.',
        technicalHighlights: [
          'Processamento de Sinais e Imagens de ECG',
          'Interface para Médicos Cardiologistas'
        ],
        targetAudience: 'Cardiologistas, hospitais, clínicas e centros de diagnóstico.',
        whatsappMessage: 'Olá HelpUS! Gostaria de conhecer a plataforma CardioIA.'
      },
      'vivasuacura': {
        name: 'Viva Sua Cura',
        subtitle: 'Portal de Saúde Holística & Bem-Estar',
        description: 'Website de saúde integrativa, conteúdos educacionais sobre cura natural, alimentação e programas de bem-estar.',
        features: [
          'Artigos Educação em Saúde e Protocolos Naturais',
          'Inscrição em Programas e Cursos de Vida Saudável',
          'Canal de Atendimento e Orientação'
        ],
        detailsContent: 'Portal dedicado ao ensino de práticas de saúde integrativa e longevidade.',
        technicalHighlights: ['Design Clean de Alta Legibilidade', 'Otimizado para Dispositivos Móveis'],
        targetAudience: 'Pessoas buscando qualidade de vida, nutrição e bem-estar.',
        whatsappMessage: 'Olá! Gostaria de mais informações sobre o projeto Viva Sua Cura.'
      },
      'trading-lab': {
        name: 'Trading Lab Analytics',
        subtitle: 'Inteligência Financeira & Análise de Mercado',
        description: 'Painel de análises estatísticas para o mercado financeiro, algoritmos quantitativos e dashboards de performance.',
        features: [
          'Dashboards Interativos de Métricas Financeiras',
          'Modelos de Análise Quantitativa e Backtesting',
          'Alertas de Mercado em Tempo Real'
        ],
        detailsContent: 'Solução tecnológica de analytics para investidores e traders.',
        technicalHighlights: ['Processamento de Dados Financeiros em Tempo Real', 'Gráficos Interativos Avançados'],
        targetAudience: 'Traders, investidores e entusiastas de análise quantitativa.',
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre o Trading Lab Analytics.'
      }
    }
  },
  en: {
    nav: {
      institutional: 'About Us',
      solutions: 'Solutions',
      help: 'Help & Support',
      contact: 'Contact',
      backToCatalog: '← Back to Catalog',
      allSites: 'Sites Network'
    },
    megaMenu: {
      platforms: 'Core Platforms',
      services: 'Services & Mobility',
      foodCulture: 'Dining & Culture',
      allSites: 'Complete Sites Mesh',
      clientSites: 'Projects & Clients',
      exploreMesh: 'Explore Ecosystem 🚀'
    },
    hero: {
      badge: '✨ UNIFIED TECH & SOFTWARE ECOSYSTEM',
      title: 'HelpUS Solutions Portal & Ecosystem',
      subtitle: 'Explore our complete ecosystem of enterprise platforms, AI applications, real estate networks, and custom software built by HelpUS.',
      exploreBtn: 'Explore Solutions',
      sitesBadge: 'Live Production Platforms'
    },
    catalog: {
      title: 'Featured Platforms & Solutions',
      subtitle: 'Select an application to view its technical architectural summary or launch the live platform.',
      tryNow: 'Explore Solution ➔',
      quickLaunch: 'Launch Live Site 🚀',
      partnerBannerTitle: 'Complete Sites & Clients Network',
      partnerBannerDesc: 'In addition to our flagship platforms, we build and manage custom web systems for partners and enterprise clients.'
    },
    fullPageDetails: {
      backBtn: '← Back to Ecosystem',
      overviewTitle: 'Overview & Solution Engineering',
      technicalArchitecture: 'Architecture & Technical Features',
      targetAudienceTitle: 'Recommended Target Audience',
      keyCapabilitiesTitle: 'Features & Highlights',
      officialSubdomain: 'Official Web Address:',
      launchRealApp: 'Launch Live App 🚀',
      contactWhatsApp: 'WhatsApp Support for this Solution',
      folderOrigin: 'Mapped Project:',
      close: 'Close'
    },
    cookies: {
      text: 'We use cookies to provide the best browsing experience and ensure security across applications.',
      accept: 'Understood & Accept',
      privacyLink: 'Privacy Policy'
    },
    modals: {
      institutionalTitle: 'About Us — HelpUS Technology',
      institutionalDesc: 'HelpUS Technology Solutions is an engineering firm focused on custom software development, web/mobile systems, and digital ecosystem management.',
      helpTitle: 'Help & Support Center',
      helpDesc: 'Need technical support or have questions? Contact our central team via WhatsApp or official email.',
      privacyTitle: 'Privacy Policy & Terms of Use',
      privacyDesc: 'We guarantee transparent data handling in compliance with LGPD and international privacy regulations.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — All rights reserved.',
      contactTitle: 'Contact HelpUS',
      contactDesc: 'Direct support for inquiries, technical assistance, and custom software hiring.',
      whatsapp: 'WhatsApp: +55 (83) 99872-1848',
      email: 'contato@helpusbr.com',
      privacy: 'Privacy & LGPD',
      terms: 'Terms of Use'
    },
    categories: {
      todos: 'All Solutions',
      tecnologia: 'Tech & AI',
      saude: 'Healthcare & Medicine',
      servicos: 'Services & Mobility',
      gastronomia: 'Food & Delivery',
      cultura: 'Culture & Biography',
      clientes: 'Clients & Specialized'
    },
    apps: {
      'helpus-site': {
        name: 'Software Development',
        subtitle: 'Custom Software Development & Systems Engineering',
        description: 'Software engineering team crafting SaaS platforms, responsive web apps, high-performance REST APIs, and enterprise systems.',
        features: [
          'Full-Stack Engineering (React, Node.js, Express, PostgreSQL, Python)',
          'Encrypted RESTful & GraphQL API Architecture',
          'Automated Cloud Deployment (Vercel, AWS, Railway)',
          'Digital Products Sales Portal with Payment Integration',
          'Exclusive Design System & Seamless UX/UI'
        ],
        detailsContent: 'HelpUS Software Development designs and builds custom digital products tailored for growing businesses.',
        technicalHighlights: [
          'PostgreSQL Relational Database on Railway',
          'Secure Authentication via JWT & Middleware Controls',
          'Scalable Serverless Infrastructure on Vercel & Railway'
        ],
        targetAudience: 'Businesses, startups, and founders needing robust custom software.',
        whatsappMessage: 'Hello HelpUS! I would like a quote for custom software development.'
      },
      'realestate': {
        name: 'HelpUS RealEstate',
        subtitle: 'Premier Real Estate Network & Licensed Realtor Portal',
        description: 'Comprehensive real estate platform connecting licensed realtors, exclusive listings, interactive map search, and lead management.',
        features: [
          'Property Portfolio Management for Licensed Realtors',
          'Interactive Map Search powered by Georeferenced Coordinates',
          'HD Photo Galleries, Videos, and Virtual Property Tours',
          'Direct WhatsApp Lead Capture & Tour Scheduling',
          'Saved Favorites & Featured Property Collections'
        ],
        detailsContent: 'HelpUS RealEstate provides enterprise infrastructure for realtors and buyers with interactive maps and direct leads.',
        technicalHighlights: [
          'Built with Next.js App Router, Prisma ORM, and PostgreSQL/SQLite',
          'Interactive Map Suite powered by React Leaflet & OpenStreetMap'
        ],
        targetAudience: 'Licensed realtors, agencies, homebuyers, and real estate investors.',
        whatsappMessage: 'Hello HelpUS! I would like to know more about HelpUS RealEstate.'
      },
      'nexosai': {
        name: 'NexosAI Cloud Mesh',
        subtitle: 'Virtual AI Agent Orchestration & Private Local Nodes',
        description: 'Advanced platform for orchestrating autonomous Virtual AI Agents with hybrid cloud and local model execution (Ollama, GPT-4o).',
        features: [
          'Multi-Agent Orchestration with Autonomous 24/7 Execution',
          'Hybrid Execution: Cloud LLMs (OpenAI, DeepSeek) & Local Private Nodes (Ollama)',
          'RAG Vector Search Engine for Enterprise Documents',
          'Automated WhatsApp & Relay Channels'
        ],
        detailsContent: 'NexosAI Cloud is the cutting-edge platform for enterprise AI automation.',
        technicalHighlights: [
          'Distributed Node Architecture via WebSockets & Relays',
          'End-to-End Encrypted RAG Document Vectorization'
        ],
        targetAudience: 'Enterprises, IT teams, law firms, clinics, and developers.',
        whatsappMessage: 'Hello HelpUS! I am interested in NexosAI Cloud platform.'
      },
      'usmle': {
        name: 'USMLE Prep Platform',
        subtitle: 'Medical Licensing Examination Prep & Question Bank',
        description: 'Comprehensive study platform for medical graduates preparing for USMLE examinations (Step 1, Step 2 CK, Step 3).',
        features: [
          'Updated Clinical Question Bank matching USMLE Exam Standards',
          'Timed Exam Simulations with Detailed Performance Explanations',
          'Spaced Repetition Engine for Concept Retention'
        ],
        detailsContent: 'Empowering international medical graduates to achieve medical licensure in the United States.',
        technicalHighlights: [
          'Advanced Question Bank Engine with Filter Criteria',
          'Statistical Spaced Repetition Algorithm'
        ],
        targetAudience: 'Physicians and medical students pursuing US licensing.',
        whatsappMessage: 'Hello HelpUS! I would like to know more about USMLE Prep Platform.'
      },
      'saude': {
        name: 'HelpUS Saúde',
        subtitle: 'Telemedicine & Integrated Healthcare Management',
        description: 'Complete system for medical clinics and healthcare providers with online booking, EHR, and secure HD telemedicine.',
        features: [
          'Encrypted Electronic Health Records (EHR)',
          'In-Person & Online Appointment Booking',
          'Secure HD Telemedicine Suite (HIPAA Compliant)'
        ],
        detailsContent: 'HelpUS Saúde digitizes clinical operations with encrypted remote video consultations.',
        technicalHighlights: ['LGPD & HIPAA Compliant Protocol', 'Low Latency HD Video via WebRTC'],
        targetAudience: 'Medical clinics, private practices, and independent healthcare providers.',
        whatsappMessage: 'Hello HelpUS! I would like to inquire about HelpUS Saúde.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Executive Mobility & VIP Transport',
        description: 'Digital platform for executive transport booking, VIP transfers, and corporate travel management.',
        features: ['Advance VIP Ride Scheduling', 'Real-Time Monitored Executive Fleet', 'Centralized Monthly Corporate Billing'],
        detailsContent: 'Corporate mobility platform for airport pickups and VIP event transfers.',
        technicalHighlights: ['Instant Booking Engine', 'Real-Time Telemetry Tracking'],
        targetAudience: 'Executives, corporate teams, hotels, and VIP passengers.',
        whatsappMessage: 'Hello HelpUS! I am interested in Executive Driver services.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Ordering & Management Platform for Pizzerias',
        description: 'Complete delivery and management software for pizzerias featuring QR code menus and kitchen display systems.',
        features: ['Interactive Digital QR Code Menu', 'Half-and-Half Pizza Customizer', 'Kitchen Display System (KDS)'],
        detailsContent: 'Gastronomy management system modernizing pizzerias and dark kitchens.',
        technicalHighlights: ['Mobile Optimized UI', 'Real-Time WebSocket Updates'],
        targetAudience: 'Pizzerias, restaurants, and dark kitchens.',
        whatsappMessage: 'Hello HelpUS! I would like a quote for Pizza & Delivery.'
      },
      'jobs': {
        name: 'Jobs & Careers',
        subtitle: 'Opportunity Portal & Smart Recruitment',
        description: 'Platform connecting job seekers with hiring companies. Features job postings and applicant tracking.',
        features: ['Job Opportunities Posting', 'Curriculum Profile Builder', 'Smart Candidate Filtering'],
        detailsContent: 'Modern job board uniting talent with top employer opportunities.',
        technicalHighlights: ['Dynamic Search Filters', 'Fast Database Indexing'],
        targetAudience: 'Hiring managers, HR teams, and job seekers.',
        whatsappMessage: 'Hello HelpUS! I would like to know more about Jobs & Careers.'
      },
      'visa': {
        name: 'Visa & Immigration',
        subtitle: 'Digital Visa Advisory & Immigration Support',
        description: 'Support platform for international visa applications for tourism, work, and study.',
        features: ['Guided Form Completion (DS-160)', 'Customized Required Documents Checklist', 'Consular Appointment Scheduling'],
        detailsContent: 'Digital service streamlining international visa application workflows.',
        technicalHighlights: ['Dynamic Checklists by Visa Type', 'Secure Document Upload Portal'],
        targetAudience: 'Travelers, students, and families immigrating abroad.',
        whatsappMessage: 'Hello HelpUS! I need international visa advisory.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Digital Memorials & Family History Preservation',
        description: 'Platform dedicated to creating digital memorials, family biographies, and honoring legacies with rich media.',
        features: ['Digital Memorial Pages with Photos & Videos', 'Interactive Life Timeline', 'QR Code Integration for Monuments'],
        detailsContent: 'Perpetual digital honors and biographies accessible via QR codes.',
        technicalHighlights: ['Perpetual Redundant Cloud Hosting', 'High-Res QR Code Generator'],
        targetAudience: 'Families, historians, and memorial honors.',
        whatsappMessage: 'Hello HelpUS! I would like to create a memorial page on Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan Biography',
        subtitle: 'Digital Biography & Career Portfolio',
        description: 'Custom biography website presenting career highlights, key projects, and achievements.',
        features: ['Visual Timeline of Achievements', 'High-Quality Media Gallery', 'Direct Social & Contact Links'],
        detailsContent: 'Institutional personal website built for prominent individuals.',
        technicalHighlights: ['High-Performance Responsive Design', 'Ultra-fast Load Times'],
        targetAudience: 'Executives, professionals, and public figures.',
        whatsappMessage: 'Hello HelpUS! I would like to request a custom biography website.'
      },
      'katiaxavier': {
        name: 'Kátia Xavier — Legal Solutions',
        subtitle: 'Specialized Legal Advisory & RFE Solutions',
        description: 'Legal consultancy portal integrating client support, case tracking, and legal insights.',
        features: ['Specialized Legal Advice via WhatsApp', 'Practice Areas: RFE Law, Civil & Corporate', 'Online & In-Person Appointment Booking'],
        detailsContent: 'Digital platform built for Kátia Xavier Law Firm.',
        technicalHighlights: ['High Availability Secure Setup', 'Direct Contact System'],
        targetAudience: 'Legal clients and individuals seeking law services.',
        whatsappMessage: 'Hello! I came from HelpUS website and would like to speak with Kátia Xavier team.'
      },
      'marciotopbarber': {
        name: 'Márcio Top Barber',
        subtitle: 'Booking & VIP Barbershop System',
        description: 'Complete online booking platform for haircuts, beard grooming, and male aesthetics.',
        features: ['24/7 Online Booking with Barber Choice', 'Grooming Services Menu', 'Automated WhatsApp Reminders'],
        detailsContent: 'Complete booking system and digital presence for Márcio Top Barber.',
        technicalHighlights: ['Mobile-First Fast Booking UI', 'Real-Time Schedule Sync'],
        targetAudience: 'Barbershop clients seeking quick appointment booking.',
        whatsappMessage: 'Hello! I would like to book an appointment at Márcio Top Barber.'
      },
      'cardioia': {
        name: 'CardioIA — AI in Cardiology',
        subtitle: 'Clinical Decision Support & ECG Analysis',
        description: 'AI platform assisting in the analysis of electrocardiograms and clinical cardiology diagnostics.',
        features: ['AI-Assisted ECG Screening', 'Clinical Case Library', 'HIPAA/LGPD Data Security'],
        detailsContent: 'Cutting-edge AI applications for cardiovascular medicine.',
        technicalHighlights: ['ECG Signal Processing', 'Cardiologist Suite'],
        targetAudience: 'Cardiologists, hospitals, and clinics.',
        whatsappMessage: 'Hello HelpUS! I would like to learn about CardioIA.'
      },
      'vivasuacura': {
        name: 'Viva Sua Cura',
        subtitle: 'Holistic Health & Wellness Portal',
        description: 'Integrative health portal with educational content on natural healing and wellness.',
        features: ['Health Education Articles', 'Healthy Lifestyle Programs', 'Direct Guidance Channel'],
        detailsContent: 'Portal dedicated to teaching integrative health practices.',
        technicalHighlights: ['Clean High-Readability UI', 'Mobile Optimized'],
        targetAudience: 'Individuals seeking wellness and natural nutrition.',
        whatsappMessage: 'Hello! I would like more information about Viva Sua Cura.'
      },
      'trading-lab': {
        name: 'Trading Lab Analytics',
        subtitle: 'Financial Intelligence & Market Analytics',
        description: 'Statistical analytics panel for financial markets and quantitative performance dashboards.',
        features: ['Interactive Financial Dashboards', 'Quantitative Backtesting Models', 'Real-Time Market Alerts'],
        detailsContent: 'Analytics technology for investors and quantitative traders.',
        technicalHighlights: ['Real-Time Financial Data Stream', 'Advanced Interactive Charts'],
        targetAudience: 'Traders, investors, and quant analysts.',
        whatsappMessage: 'Hello HelpUS! I would like to know more about Trading Lab Analytics.'
      }
    }
  },
  es: {
    nav: {
      institutional: 'Institucional',
      solutions: 'Soluciones',
      help: 'Ayuda y Soporte',
      contact: 'Contacto',
      backToCatalog: '← Volver al Catálogo',
      allSites: 'Red de Sitios'
    },
    megaMenu: {
      platforms: 'Plataformas Principales',
      services: 'Servicios y Movilidad',
      foodCulture: 'Gastronomía y Cultura',
      allSites: 'Red Completa de Sitios',
      clientSites: 'Proyectos y Clientes',
      exploreMesh: 'Explorar Ecosistema 🚀'
    },
    hero: {
      badge: '✨ ECOSISTEMA UNIFICADO DE TECNOLOGÍA Y SOFTWARE',
      title: 'Portal de Soluciones y Ecosistema HelpUS',
      subtitle: 'Conozca nuestro ecosistema completo de plataformas empresariales, aplicaciones de IA y software a la medida.',
      exploreBtn: 'Explorar Soluciones',
      sitesBadge: 'Plataformas Activas en Vivo'
    },
    catalog: {
      title: 'Soluciones y Plataformas Destacadas',
      subtitle: 'Seleccione una aplicación para ver su resumen técnico o acceder a la plataforma activa.',
      tryNow: 'Conocer Solución ➔',
      quickLaunch: 'Acceder Sitio Real 🚀',
      partnerBannerTitle: 'Red Completa de Sitios y Clientes',
      partnerBannerDesc: 'Además de nuestras plataformas propias, desarrollamos sistemas web para clientes y empresas.'
    },
    fullPageDetails: {
      backBtn: '← Volver al Ecosistema',
      overviewTitle: 'Visión General e Ingeniería',
      technicalArchitecture: 'Arquitectura y Recursos Técnicos',
      targetAudienceTitle: 'Público Objetivo Recomendado',
      keyCapabilitiesTitle: 'Funcionalidades Destacadas',
      officialSubdomain: 'Dirección Web Oficial:',
      launchRealApp: 'Acceder Aplicación Real 🚀',
      contactWhatsApp: 'Atención WhatsApp para esta Solución',
      folderOrigin: 'Proyecto Mapeado:',
      close: 'Cerrar'
    },
    cookies: {
      text: 'Utilizamos cookies para ofrecer la mejor experiencia de navegación y garantizar la seguridad.',
      accept: 'Entendido y Aceptar',
      privacyLink: 'Política de Privacidad'
    },
    modals: {
      institutionalTitle: 'Institucional — HelpUS Technology',
      institutionalDesc: 'HelpUS Technology Solutions es una empresa enfocada en desarrollo de software a la medida y sistemas web.',
      helpTitle: 'Centro de Ayuda y Soporte',
      helpDesc: '¿Necesita soporte técnico? Contacte a nuestro equipo vía WhatsApp o correo oficial.',
      privacyTitle: 'Política de Privacidad y Términos',
      privacyDesc: 'Garantizamos el tratamiento transparente de datos conforme a regulaciones internacionales de privacidad.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — Todos los derechos reservados.',
      contactTitle: 'Hable con HelpUS',
      contactDesc: 'Atención directa para soporte, dudas y contratación de sistemas.',
      whatsapp: 'WhatsApp: +55 (83) 99872-1848',
      email: 'contato@helpusbr.com',
      privacy: 'Privacidad y LGPD',
      terms: 'Términos de Uso'
    },
    categories: {
      todos: 'Todas las Soluciones',
      tecnologia: 'Tecnología e IA',
      saude: 'Salud y Medicina',
      servicos: 'Servicios y Movilidad',
      gastronomia: 'Alimentación y Delivery',
      cultura: 'Cultura y Biografía',
      clientes: 'Clientes y Especializados'
    },
    apps: {
      'helpus-site': {
        name: 'Software Development',
        subtitle: 'Desarrollo de Software a la Medida e Ingeniería de Sistemas',
        description: 'Fábrica de software especializada en plataformas SaaS, aplicaciones web y APIs de alto rendimiento.',
        features: ['Full-Stack (React, Node.js, Express, PostgreSQL, Python)', 'Arquitectura de APIs RESTful Criptografiadas', 'Despliegue en la Nube (Vercel, AWS, Railway)'],
        detailsContent: 'Diseñamos y construimos soluciones digitales a la medida para empresas en crecimiento.',
        technicalHighlights: ['Base de Datos Relacional PostgreSQL en Railway', 'Autenticación Segura vía JWT'],
        targetAudience: 'Empresas y emprendedores que necesitan software a la medida.',
        whatsappMessage: '¡Hola HelpUS! Quisiera un presupuesto para desarrollo de software.'
      },
      'realestate': {
        name: 'HelpUS RealEstate',
        subtitle: 'Red Inmobiliaria & Portal de Agentes Licenciados',
        description: 'Plataforma inmobiliaria completa que conecta agentes licenciados, propiedades exclusivas y búsqueda interactiva por mapa.',
        features: ['Gestión de Inmuebles para Agentes Licenciados', 'Búsqueda Interactiva por Mapa Georreferenciado', 'Captura Directa de Clientes vía WhatsApp'],
        detailsContent: 'Infraestructura completa para el mercado inmobiliario con mapas interactivos y leads directos.',
        technicalHighlights: ['Next.js App Router con Prisma ORM', 'Mapas con React Leaflet & OpenStreetMap'],
        targetAudience: 'Agentes inmobiliarios, agencias y compradores.',
        whatsappMessage: '¡Hola HelpUS! Quisiera saber más sobre HelpUS RealEstate.'
      },
      'nexosai': {
        name: 'NexosAI Cloud Mesh',
        subtitle: 'Orquestación de Agentes de IA y Nodos Locales Privados',
        description: 'Plataforma para orquestar Agentes de Inteligencia Artificial con ejecución híbrida en la nube y local (Ollama, GPT-4o).',
        features: ['Orquestación Multi-Agente 24/7', 'Ejecución Híbrida: Nube y Nodos Locales Privados', 'Búsqueda Vectorial RAG para Documentos'],
        detailsContent: 'Plataforma avanzada para automatización empresarial con IA.',
        technicalHighlights: ['Arquitectura de Nodos Distribuidos', 'Motor de Vectorización Encriptado'],
        targetAudience: 'Empresas, equipos de TI, despachos y desarrolladores.',
        whatsappMessage: '¡Hola HelpUS! Tengo interés en NexosAI Cloud.'
      },
      'usmle': {
        name: 'USMLE Prep Platform',
        subtitle: 'Plataforma de Preparación para Examen USMLE',
        description: 'Plataforma de estudio para médicos en preparación para exámenes de revalidación médica en EE. UU.',
        features: ['Banco de Preguntas Clínicas Actualizado', 'Simulaciones de Examen con Explicaciones'],
        detailsContent: 'Preparación para médicos que buscan licencia médica en EE. UU.',
        technicalHighlights: ['Motor de Banco de Preguntas con Filtros', 'Algoritmo de Repetición Espaciada'],
        targetAudience: 'Médicos y estudiantes enfocados en revalidación en EE. UU.',
        whatsappMessage: '¡Hola HelpUS! Quisiera saber más sobre USMLE Prep.'
      },
      'saude': {
        name: 'HelpUS Saúde',
        subtitle: 'Telemedicina y Gestión Integrada de Salud',
        description: 'Sistema para clínicas y profesionales de la salud con agenda online, expediente digital y telemedicina HD.',
        features: ['Expediente Clínico Electrónico Encriptado', 'Citas Presenciales y Online', 'Telemedicina HD Segura (HIPAA)'],
        detailsContent: 'Gestión clínica completa con consultas virtuales encriptadas.',
        technicalHighlights: ['Cumplimiento de Privacidad LGPD/HIPAA', 'Video HD de Baja Latencia vía WebRTC'],
        targetAudience: 'Clínicas médicas y profesionales independientes de salud.',
        whatsappMessage: '¡Hola HelpUS! Quisiera consultar sobre HelpUS Saúde.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Movilidad Ejecutiva y Transporte VIP',
        description: 'Plataforma digital para reserva de transporte ejecutivo, transfer VIP y viajes corporativos.',
        features: ['Reserva Anticipada de Viajes VIP', 'Flota Ejecutiva Monitoreada', 'Facturación Corporativa Mensual'],
        detailsContent: 'Transporte VIP para traslados ejecutivos y aeropuertos.',
        technicalHighlights: ['Confirmación Instantánea', 'Rastreo en Tiempo Real'],
        targetAudience: 'Ejecutivos, empresas, hoteles y pasajeros VIP.',
        whatsappMessage: '¡Hola HelpUS! Tengo interés en Executive Driver.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Plataforma de Pedidos y Gestión para Pizzerías',
        description: 'Sistema de delivery y gestión con menú digital QR code y pantalla de cocina (KDS).',
        features: ['Menú Digital Interactivo por QR Code', 'Personalizador Mitad y Mitad', 'Pantalla de Cocina (KDS)'],
        detailsContent: 'Sistema de gestión gastronómica para pizzerías y restaurantes.',
        technicalHighlights: ['Interfaz Móvil Fluida', 'Estados en Tiempo Real'],
        targetAudience: 'Pizzerías, restaurantes y dark kitchens.',
        whatsappMessage: '¡Hola HelpUS! Quisiera un presupuesto para Pizza & Delivery.'
      },
      'jobs': {
        name: 'Jobs & Empleos',
        subtitle: 'Portal de Oportunidades y Reclutamiento',
        description: 'Plataforma que conecta profesionales con empresas contratantes.',
        features: ['Publicación de Ofertas de Empleo', 'Constructor de Currículum', 'Filtros Inteligentes'],
        detailsContent: 'Portal de empleos para conectar talento con empresas.',
        technicalHighlights: ['Filtros Dinámicos', 'Búsqueda Rápida'],
        targetAudience: 'Empresas contratantes y profesionales.',
        whatsappMessage: '¡Hola HelpUS! Quisiera saber más sobre Jobs & Empleos.'
      },
      'visa': {
        name: 'Visa & Inmigración',
        subtitle: 'Asesoría Digital para Visas Internacionales',
        description: 'Soporte digital para procesos de visado de turismo, trabajo y estudiante.',
        features: ['Llenado Guiado de Formularios (DS-160)', 'Lista Personalizada de Documentos', 'Programación de Citas Consulares'],
        detailsContent: 'Servicio digital para simplificar trámites de visado.',
        technicalHighlights: ['Listas Dinámicas por País', 'Carga Segura de Documentos'],
        targetAudience: 'Viajeros, estudiantes y familias en proceso de visado.',
        whatsappMessage: '¡Hola HelpUS! Necesito asesoría para visa internacional.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Memoriales Digitales y Preservación Histórica',
        description: 'Plataforma para crear memoriales digitales y preservar legados familiares.',
        features: ['Páginas Memoriales con Fotos y Video', 'Línea de Tiempo Interactiva', 'Lectura por Código QR'],
        detailsContent: 'Homenajes biográficos perpetuos con acceso por código QR.',
        technicalHighlights: ['Alojamiento Nube Redundante', 'Generador de Código QR'],
        targetAudience: 'Familias, historiadores e instituciones.',
        whatsappMessage: '¡Hola HelpUS! Quisiera crear una página en Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan Biografía',
        subtitle: 'Biografía Digital y Trayectoria Profesional',
        description: 'Sitio biográfico personalizado que presenta trayectoria y logros destacados.',
        features: ['Línea de Tiempo de Logros', 'Galería de Medios en Alta Calidad', 'Contacto Directo'],
        detailsContent: 'Sitio biográfico institucional para personalidades.',
        technicalHighlights: ['Diseño Responsivo de Alto Nivel', 'Carga Ultrarrápida'],
        targetAudience: 'Ejecutivos, profesionales y figuras públicas.',
        whatsappMessage: '¡Hola HelpUS! Quisiera un sitio biográfico personalizado.'
      },
      'katiaxavier': {
        name: 'Kátia Xavier — Soluciones Legales',
        subtitle: 'Asesoría Jurídica y Soluciones RFE',
        description: 'Portal de derecho y consultoría legal especializada.',
        features: ['Atención Legal vía WhatsApp', 'Especialidades: Derecho RFE y Civil', 'Citas Online y Presenciales'],
        detailsContent: 'Plataforma desarrollada para el bufete Kátia Xavier.',
        technicalHighlights: ['Servidor Seguro de Alta Disponibilidad', 'Contacto Directo'],
        targetAudience: 'Clientes que requieren soporte legal.',
        whatsappMessage: '¡Hola! Quisiera hablar con el equipo de Dra. Kátia Xavier.'
      },
      'marciotopbarber': {
        name: 'Márcio Top Barber',
        subtitle: 'Sistema de Reservas para Barbería VIP',
        description: 'Plataforma de reservas online de cortes y servicios de barbería masculina.',
        features: ['Reserva Online 24/7 con Elección de Barbero', 'Menú de Servicios', 'Recordatorios por WhatsApp'],
        detailsContent: 'Sistema completo de reservas para la marca Márcio Top Barber.',
        technicalHighlights: ['Interfaz Móvil de Reserva Rápida', 'Sincronización en Tiempo Real'],
        targetAudience: 'Clientes de barbería que buscan reservas rápidas.',
        whatsappMessage: '¡Hola! Quisiera reservar una cita en Márcio Top Barber.'
      },
      'cardioia': {
        name: 'CardioIA — IA en Cardiología',
        subtitle: 'Soporte para Decisiones Clínicas y ECG',
        description: 'Plataforma de IA para asistencia en análisis de electrocardiogramas.',
        features: ['Triaje Asistido por IA para ECG', 'Biblioteca de Casos Clínicos'],
        detailsContent: 'Tecnología de IA aplicada a la medicina cardiovascular.',
        technicalHighlights: ['Procesamiento de Señales de ECG', 'Interfaz para Médicos'],
        targetAudience: 'Cardiólogos, hospitales y centros médicos.',
        whatsappMessage: '¡Hola HelpUS! Quisiera conocer CardioIA.'
      },
      'vivasuacura': {
        name: 'Viva Sua Cura',
        subtitle: 'Portal de Salud Holística y Bienestar',
        description: 'Portal de salud integrativa y contenidos educacionales.',
        features: ['Artículos de Salud Integrativa', 'Programas de Vida Saludable'],
        detailsContent: 'Portal dedicado a enseñar prácticas saludables.',
        technicalHighlights: ['Diseño Limpio', 'Optimizado para Móviles'],
        targetAudience: 'Personas en busca de bienestar y salud natural.',
        whatsappMessage: '¡Hola! Quisiera información sobre Viva Sua Cura.'
      },
      'trading-lab': {
        name: 'Trading Lab Analytics',
        subtitle: 'Inteligencia Financiera y Análisis',
        description: 'Panel de análisis estadístico para mercados financieros.',
        features: ['Dashboards Financieros Interactivos', 'Análisis Cuantitativo'],
        detailsContent: 'Tecnología analítica para inversionistas y traders.',
        technicalHighlights: ['Datos Financieros en Tiempo Real', 'Gráficos Avanzados'],
        targetAudience: 'Traders e inversionistas.',
        whatsappMessage: '¡Hola HelpUS! Quisiera conocer Trading Lab Analytics.'
      }
    }
  }
};

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
    watchVideo: string;
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
      badge: '✨ ECOSSISTEMA UNIFICADO DE TECNOLOGIA',
      title: 'HelpUS Technology Solutions',
      subtitle: 'Engenharia de software sob medida, orquestração de Inteligência Artificial, redes imobiliárias e plataformas corporativas.',
      exploreBtn: 'Explorar Soluções',
      sitesBadge: 'Soluções Ativas no Ar',
      watchVideo: '🎬 Vídeo de Apresentação'
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
      backToCatalog: '← Back to Home',
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
      badge: '✨ UNIFIED TECHNOLOGY ECOSYSTEM',
      title: 'HelpUS Technology Solutions',
      subtitle: 'Custom software engineering, AI orchestration, real estate networks, and enterprise platforms.',
      exploreBtn: 'Explore Solutions',
      sitesBadge: 'Live Production Platforms',
      watchVideo: '🎬 Presentation Video'
    },
    videoModal: {
      title: 'Institutional Video — HelpUS Technology',
      subtitle: 'Discover our software engineering, platform mesh, and enterprise solutions in action.',
      close: 'Close Video'
    },
    catalog: {
      title: 'Ecosystem Categories',
      subtitle: 'Select a category to browse live platforms or view technical architecture details.',
      tryNow: 'Technical Details ➔',
      quickLaunch: 'Launch Platform 🚀',
      partnerBannerTitle: 'Complete Sites & Clients Network',
      partnerBannerDesc: 'We build and manage custom web platforms for enterprise clients.'
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
        features: ['Full-Stack Engineering', 'Encrypted APIs', 'Cloud Deploy'],
        detailsContent: 'Custom software development for growing businesses.',
        technicalHighlights: ['PostgreSQL Database', 'JWT Auth'],
        targetAudience: 'Startups and businesses needing custom software.',
        whatsappMessage: 'Hello HelpUS! I would like a quote.'
      },
      'realestate': {
        name: 'HelpUS RealEstate',
        subtitle: 'Premier Real Estate Network & Licensed Realtor Portal',
        description: 'Comprehensive real estate platform connecting licensed realtors, exclusive listings, and interactive map search.',
        features: ['Realtor Management', 'Interactive Map Search', 'Direct Leads'],
        detailsContent: 'Enterprise infrastructure for realtors and homebuyers.',
        technicalHighlights: ['Next.js App Router', 'React Leaflet Map'],
        targetAudience: 'Licensed realtors and property buyers.',
        whatsappMessage: 'Hello HelpUS! Tell me about RealEstate.'
      },
      'nexosai': {
        name: 'NexosAI Cloud Mesh',
        subtitle: 'Virtual AI Agent Orchestration & Private Local Nodes',
        description: 'Advanced platform for orchestrating autonomous Virtual AI Agents with hybrid cloud and local model execution.',
        features: ['Multi-Agent 24/7', 'Hybrid Execution', 'RAG Vector Search'],
        detailsContent: 'Cutting-edge platform for enterprise AI automation.',
        technicalHighlights: ['WebSocket Relay', 'RAG Encryption'],
        targetAudience: 'Enterprises and IT teams.',
        whatsappMessage: 'Hello HelpUS! Interested in NexosAI Cloud.'
      },
      'usmle': {
        name: 'USMLE Prep Platform',
        subtitle: 'Medical Licensing Examination Prep & Question Bank',
        description: 'Comprehensive study platform for medical graduates preparing for USMLE examinations.',
        features: ['Clinical Question Bank', 'Timed Simulations', 'Spaced Repetition'],
        detailsContent: 'Empowering physicians to achieve US medical licensure.',
        technicalHighlights: ['Advanced Bank Engine', 'Spaced Repetition'],
        targetAudience: 'Physicians pursuing US licensure.',
        whatsappMessage: 'Hello HelpUS! Tell me about USMLE Prep.'
      },
      'saude': {
        name: 'HelpUS Saúde',
        subtitle: 'Telemedicine & Integrated Healthcare Management',
        description: 'Complete system for medical clinics with online booking, EHR, and secure HD telemedicine.',
        features: ['Encrypted EHR', 'Online Booking', 'HD Telemedicine'],
        detailsContent: 'Digitizing clinical operations with encrypted video.',
        technicalHighlights: ['HIPAA Compliant', 'WebRTC Video'],
        targetAudience: 'Medical clinics and healthcare providers.',
        whatsappMessage: 'Hello HelpUS! Inquire about HelpUS Saúde.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Executive Mobility & VIP Transport',
        description: 'Digital platform for executive transport booking, VIP transfers, and corporate travel.',
        features: ['Advance VIP Ride Booking', 'Monitored Fleet', 'Corporate Billing'],
        detailsContent: 'Corporate mobility for airport pickups and VIP events.',
        technicalHighlights: ['Instant Booking', 'Real-Time Telemetry'],
        targetAudience: 'Executives and VIP passengers.',
        whatsappMessage: 'Hello HelpUS! Interested in Executive Driver.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Ordering & Management Platform for Pizzerias',
        description: 'Complete delivery software for pizzerias featuring QR code menus and kitchen display systems.',
        features: ['Digital QR Menu', 'Half-and-Half Customizer', 'Kitchen Display'],
        detailsContent: 'Gastronomy system modernizing pizzerias.',
        technicalHighlights: ['Mobile First UI', 'WebSocket Updates'],
        targetAudience: 'Pizzerias and dark kitchens.',
        whatsappMessage: 'Hello HelpUS! Quote for Pizza & Delivery.'
      },
      'jobs': {
        name: 'Jobs & Careers',
        subtitle: 'Opportunity Portal & Smart Recruitment',
        description: 'Platform connecting job seekers with hiring companies.',
        features: ['Job Postings', 'Profile Builder', 'Smart Filtering'],
        detailsContent: 'Modern job board uniting talent with employers.',
        technicalHighlights: ['Dynamic Filters', 'Fast Database'],
        targetAudience: 'Recruiters and job seekers.',
        whatsappMessage: 'Hello HelpUS! Tell me about Jobs & Careers.'
      },
      'visa': {
        name: 'Visa & Immigration',
        subtitle: 'Digital Visa Advisory & Immigration Support',
        description: 'Support platform for international visa applications for tourism, work, and study.',
        features: ['Form DS-160 Guide', 'Required Documents Checklist', 'Consular Scheduling'],
        detailsContent: 'Streamlining international visa workflows.',
        technicalHighlights: ['Dynamic Checklists', 'Secure Portal'],
        targetAudience: 'Travelers and immigration applicants.',
        whatsappMessage: 'Hello HelpUS! Need visa advisory.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Digital Memorials & Family History Preservation',
        description: 'Platform dedicated to creating digital memorials and family biographies.',
        features: ['Digital Memorial Pages', 'Life Timeline', 'QR Code Monuments'],
        detailsContent: 'Perpetual digital honors accessible via QR code.',
        technicalHighlights: ['Cloud Redundancy', 'QR Generator'],
        targetAudience: 'Families and historical honors.',
        whatsappMessage: 'Hello HelpUS! Create a memorial page.'
      },
      'brayyan': {
        name: 'Brayyan Biography',
        subtitle: 'Digital Biography & Career Portfolio',
        description: 'Custom biography website presenting career highlights.',
        features: ['Visual Timeline', 'Media Gallery', 'Direct Contact'],
        detailsContent: 'Institutional personal website built for prominent figures.',
        technicalHighlights: ['Responsive Design', 'Ultra-fast Load'],
        targetAudience: 'Executives and public figures.',
        whatsappMessage: 'Hello HelpUS! Request biography site.'
      },
      'katiaxavier': {
        name: 'Kátia Xavier — Legal Solutions',
        subtitle: 'Specialized Legal Advisory & RFE Solutions',
        description: 'Legal consultancy portal integrating client support and case tracking.',
        features: ['WhatsApp Support', 'RFE & Civil Law', 'Online Booking'],
        detailsContent: 'Digital platform for Kátia Xavier Law Firm.',
        technicalHighlights: ['High Availability', 'Direct Form'],
        targetAudience: 'Legal clients.',
        whatsappMessage: 'Hello! Speak with Kátia Xavier team.'
      },
      'marciotopbarber': {
        name: 'Márcio Top Barber',
        subtitle: 'Booking & VIP Barbershop System',
        description: 'Online booking platform for haircuts and male grooming.',
        features: ['24/7 Booking', 'Services Menu', 'WhatsApp Reminders'],
        detailsContent: 'Complete booking system for Márcio Top Barber.',
        technicalHighlights: ['Mobile First', 'Real-Time Sync'],
        targetAudience: 'Barbershop clients.',
        whatsappMessage: 'Hello! Book at Márcio Top Barber.'
      },
      'cardioia': {
        name: 'CardioIA — AI in Cardiology',
        subtitle: 'Clinical Decision Support & ECG Analysis',
        description: 'AI platform assisting in the analysis of electrocardiograms.',
        features: ['ECG Screening', 'Case Library', 'Data Security'],
        detailsContent: 'Cutting-edge AI for cardiovascular medicine.',
        technicalHighlights: ['ECG Processing', 'Doctor Interface'],
        targetAudience: 'Cardiologists and clinics.',
        whatsappMessage: 'Hello HelpUS! Learn about CardioIA.'
      },
      'vivasuacura': {
        name: 'Viva Sua Cura',
        subtitle: 'Holistic Health & Wellness Portal',
        description: 'Integrative health portal with educational content.',
        features: ['Health Articles', 'Healthy Programs', 'Direct Guidance'],
        detailsContent: 'Teaching integrative health practices.',
        technicalHighlights: ['Clean UI', 'Mobile Optimized'],
        targetAudience: 'Wellness seekers.',
        whatsappMessage: 'Hello! Information about Viva Sua Cura.'
      },
      'trading-lab': {
        name: 'Trading Lab Analytics',
        subtitle: 'Financial Intelligence & Market Analytics',
        description: 'Statistical analytics panel for financial markets.',
        features: ['Financial Dashboards', 'Quantitative Models', 'Market Alerts'],
        detailsContent: 'Analytics technology for investors.',
        technicalHighlights: ['Real-Time Data', 'Advanced Charts'],
        targetAudience: 'Traders and quant analysts.',
        whatsappMessage: 'Hello HelpUS! Tell me about Trading Lab.'
      }
    }
  },
  es: {
    nav: {
      institutional: 'Institucional',
      solutions: 'Soluciones',
      help: 'Ayuda y Soporte',
      contact: 'Contacto',
      backToCatalog: '← Volver al Inicio',
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
      badge: '✨ ECOSISTEMA UNIFICADO DE TECNOLOGÍA',
      title: 'HelpUS Technology Solutions',
      subtitle: 'Ingeniería de software a la medida, orquestación de Inteligencia Artificial, redes inmobiliarias y plataformas empresariales.',
      exploreBtn: 'Explorar Soluciones',
      sitesBadge: 'Plataformas Activas en Vivo',
      watchVideo: '🎬 Video de Presentación'
    },
    videoModal: {
      title: 'Video Institucional — HelpUS Technology',
      subtitle: 'Conozca nuestra ingeniería de software y ecosistema de plataformas en acción.',
      close: 'Cerrar Video'
    },
    catalog: {
      title: 'Categorías del Ecosistema',
      subtitle: 'Seleccione una categoría para ver las plataformas activas o consultar arquitectura técnica.',
      tryNow: 'Detalles Técnicos ➔',
      quickLaunch: 'Acceder Sitio Real 🚀',
      partnerBannerTitle: 'Red Completa de Sitios y Clientes',
      partnerBannerDesc: 'Desarrollamos y gestionamos plataformas empresariales a la medida.'
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
        features: ['Full-Stack', 'APIs Criptografiadas', 'Despliegue Nube'],
        detailsContent: 'Soluciones digitales a la medida para empresas.',
        technicalHighlights: ['PostgreSQL en Railway', 'Autenticación JWT'],
        targetAudience: 'Empresas que necesitan software a la medida.',
        whatsappMessage: '¡Hola HelpUS! Presupuesto para desarrollo de software.'
      },
      'realestate': {
        name: 'HelpUS RealEstate',
        subtitle: 'Red Inmobiliaria & Portal de Agentes Licenciados',
        description: 'Plataforma inmobiliaria completa que conecta agentes licenciados, propiedades exclusivas y búsqueda por mapa.',
        features: ['Gestión Inmobiliaria', 'Mapa Interactivo', 'Leads Directos'],
        detailsContent: 'Infraestructura completa para inmobiliarias.',
        technicalHighlights: ['Next.js App Router', 'React Leaflet Map'],
        targetAudience: 'Agentes inmobiliarios y compradores.',
        whatsappMessage: '¡Hola HelpUS! Saber más sobre HelpUS RealEstate.'
      },
      'nexosai': {
        name: 'NexosAI Cloud Mesh',
        subtitle: 'Orquestación de Agentes de IA y Nodos Locales Privados',
        description: 'Plataforma para orquestar Agentes de IA con ejecución híbrida en la nube y local.',
        features: ['Multi-Agente 24/7', 'Ejecución Híbrida', 'Búsqueda RAG'],
        detailsContent: 'Automatización empresarial con IA.',
        technicalHighlights: ['Arquitectura de Nodos', 'Vectorización RAG'],
        targetAudience: 'Empresas y equipos de TI.',
        whatsappMessage: '¡Hola HelpUS! Interés en NexosAI Cloud.'
      },
      'usmle': {
        name: 'USMLE Prep Platform',
        subtitle: 'Plataforma de Preparación para Examen USMLE',
        description: 'Estudio para médicos en preparación para revalidación médica en EE. UU.',
        features: ['Banco de Preguntas', 'Simulaciones de Examen', 'Repetición Espaciada'],
        detailsContent: 'Licencia médica en EE. UU.',
        technicalHighlights: ['Filtros Avanzados', 'Repetición Espaciada'],
        targetAudience: 'Médicos enfocados en revalidación en EE. UU.',
        whatsappMessage: '¡Hola HelpUS! Saber más sobre USMLE Prep.'
      },
      'saude': {
        name: 'HelpUS Saúde',
        subtitle: 'Telemedicina y Gestión Integrada de Salud',
        description: 'Sistema para clínicas con agenda online, expediente digital y telemedicina HD.',
        features: ['Expediente Encriptado', 'Citas Online', 'Telemedicina HIPAA'],
        detailsContent: 'Gestión clínica con consultas virtuales.',
        technicalHighlights: ['Cumplimiento LGPD/HIPAA', 'Video HD WebRTC'],
        targetAudience: 'Clínicas médicas y profesionales.',
        whatsappMessage: '¡Hola HelpUS! Consultar sobre HelpUS Saúde.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Movilidad Ejecutiva y Transporte VIP',
        description: 'Plataforma digital para reserva de transporte ejecutivo y viajes VIP.',
        features: ['Reserva VIP', 'Flota Monitoreada', 'Facturación Mensual'],
        detailsContent: 'Transporte VIP para ejecutivos.',
        technicalHighlights: ['Confirmación Instantánea', 'Rastreo en Tiempo Real'],
        targetAudience: 'Ejecutivos y pasajeros VIP.',
        whatsappMessage: '¡Hola HelpUS! Interés en Executive Driver.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Plataforma de Pedidos y Gestión para Pizzerías',
        description: 'Sistema de delivery y gestión con menú digital QR code.',
        features: ['Menú QR Code', 'Mitad y Mitad', 'Pantalla de Cocina'],
        detailsContent: 'Gestión gastronómica para pizzerías.',
        technicalHighlights: ['Interfaz Móvil', 'Sockets Tiempo Real'],
        targetAudience: 'Pizzerías y restaurantes.',
        whatsappMessage: '¡Hola HelpUS! Presupuesto para Pizza & Delivery.'
      },
      'jobs': {
        name: 'Jobs & Empleos',
        subtitle: 'Portal de Oportunidades y Reclutamiento',
        description: 'Plataforma que conecta profesionales con empresas.',
        features: ['Ofertas de Empleo', 'Constructor Currículum', 'Filtros Inteligentes'],
        detailsContent: 'Portal de empleos.',
        technicalHighlights: ['Filtros Dinámicos', 'Búsqueda Rápida'],
        targetAudience: 'Reclutadores y candidatos.',
        whatsappMessage: '¡Hola HelpUS! Saber más sobre Jobs & Empleos.'
      },
      'visa': {
        name: 'Visa & Inmigración',
        subtitle: 'Asesoría Digital para Visas Internacionales',
        description: 'Soporte digital para procesos de visado.',
        features: ['Formulario DS-160', 'Lista de Documentos', 'Citas Consulares'],
        detailsContent: 'Asesoría de visados internacionales.',
        technicalHighlights: ['Listas Dinámicas', 'Carga Segura'],
        targetAudience: 'Solicitantes de visado.',
        whatsappMessage: '¡Hola HelpUS! Asesoría para visa.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Memoriales Digitales y Preservación Histórica',
        description: 'Plataforma para crear memoriales digitales y legados familiares.',
        features: ['Páginas Memoriales', 'Línea de Tiempo', 'Código QR'],
        detailsContent: 'Homenajes biográficos por QR code.',
        technicalHighlights: ['Alojamiento Nube', 'Generador QR'],
        targetAudience: 'Familias e instituciones.',
        whatsappMessage: '¡Hola HelpUS! Crear página en Memória Viva.'
      },
      'brayyan': {
        name: 'Brayyan Biografía',
        subtitle: 'Biografía Digital y Trayectoria Profesional',
        description: 'Sitio biográfico personalizado que presenta logros.',
        features: ['Línea de Tiempo', 'Galería de Medios', 'Contacto Directo'],
        detailsContent: 'Sitio biográfico para personalidades.',
        technicalHighlights: ['Diseño Responsivo', 'Carga Ultrarrápida'],
        targetAudience: 'Ejecutivos y figuras públicas.',
        whatsappMessage: '¡Hola HelpUS! Sitio biográfico personalizado.'
      },
      'katiaxavier': {
        name: 'Kátia Xavier — Soluciones Legales',
        subtitle: 'Asesoría Jurídica y Soluciones RFE',
        description: 'Portal de derecho e información legal.',
        features: ['Atención WhatsApp', 'Derecho RFE & Civil', 'Citas Online'],
        detailsContent: 'Plataforma para bufete Kátia Xavier.',
        technicalHighlights: ['Alta Disponibilidad', 'Contacto Directo'],
        targetAudience: 'Clientes legales.',
        whatsappMessage: '¡Hola! Hablar con equipo de Dra. Kátia Xavier.'
      },
      'marciotopbarber': {
        name: 'Márcio Top Barber',
        subtitle: 'Sistema de Reservas para Barbería VIP',
        description: 'Reservas online de cortes y estética masculina.',
        features: ['Reserva 24/7', 'Menú Serviços', 'Recordatorios WhatsApp'],
        detailsContent: 'Sistema de reservas para Márcio Top Barber.',
        technicalHighlights: ['Reserva Móvil Rápida', 'Sincronización Tiempo Real'],
        targetAudience: 'Clientes de barbería.',
        whatsappMessage: '¡Hola! Reservar en Márcio Top Barber.'
      },
      'cardioia': {
        name: 'CardioIA — IA en Cardiología',
        subtitle: 'Soporte para Decisiones Clínicas y ECG',
        description: 'IA para asistencia en análise de electrocardiogramas.',
        features: ['Triaje ECG', 'Casos Clínicos', 'Seguridad HIPAA'],
        detailsContent: 'IA en medicina cardiovascular.',
        technicalHighlights: ['Procesamiento ECG', 'Interfaz Médica'],
        targetAudience: 'Cardiólogos y clínicas.',
        whatsappMessage: '¡Hola HelpUS! Conocer CardioIA.'
      },
      'vivasuacura': {
        name: 'Viva Sua Cura',
        subtitle: 'Portal de Salud Holística y Bienestar',
        description: 'Portal de salud integrativa.',
        features: ['Artículos de Salud', 'Programas Saludables', 'Orientación Directa'],
        detailsContent: 'Prácticas de salud integrativa.',
        technicalHighlights: ['Diseño Limpio', 'Optimizado Móviles'],
        targetAudience: 'Buscadores de bienestar.',
        whatsappMessage: '¡Hola! Información sobre Viva Sua Cura.'
      },
      'trading-lab': {
        name: 'Trading Lab Analytics',
        subtitle: 'Inteligencia Financiera y Análisis',
        description: 'Análisis estadístico para mercados financieros.',
        features: ['Dashboards Financieros', 'Análisis Cuantitativo', 'Alertas Mercado'],
        detailsContent: 'Tecnología analítica para inversionistas.',
        technicalHighlights: ['Datos Tiempo Real', 'Gráficos Avanzados'],
        targetAudience: 'Traders e inversionistas.',
        whatsappMessage: '¡Hola HelpUS! Conocer Trading Lab.'
      }
    }
  }
};

export type Language = 'pt' | 'en';

export interface TranslationSchema {
  nav: {
    allServices: string;
    tech: string;
    health: string;
    services: string;
    ai: string;
    whatsappButton: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleSpan: string;
    desc: string;
    metric1: string;
    metric2: string;
    metric3: string;
    whatsappCta: string;
  };
  carousel: {
    featuredTag: string;
    accessButton: string;
    talkButton: string;
  };
  catalog: {
    subtitle: string;
    title: string;
    desc: string;
    developedBy: string;
    accessSite: string;
    whatsapp: string;
    partnerBannerTitle: string;
    partnerBannerDesc: string;
    customContactTitle: string;
    customContactDesc: string;
    customContactCta: string;
  };
  footer: {
    rights: string;
    contact: string;
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
    whatsappMessage: string;
  }>;
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      allServices: 'Todos os Serviços',
      tech: 'Tecnologia & IA',
      health: 'Saúde',
      services: 'Serviços',
      ai: 'Inteligência Artificial',
      whatsappButton: 'WhatsApp (83) 99872-1848'
    },
    hero: {
      badge: 'Ecossistema Oficial de Aplicações HelpUS',
      titleStart: 'Plataformas e Serviços ',
      titleSpan: 'HelpUS',
      desc: 'Acesse diretamente os sites e sistemas desenvolvidos pela HelpUS. O hub central para coordenação de serviços, suporte e atendimento corporativo pelo WhatsApp (83) 99872-1848.',
      metric1: '⚡ 10 Soluções Próprias',
      metric2: '🛡️ Atendimento Direto HelpUS',
      metric3: '🌐 hub.helpusbr.com',
      whatsappCta: 'Contato Direto no WhatsApp'
    },
    carousel: {
      featuredTag: '★ Destaque do Ecossistema',
      accessButton: 'Acessar',
      talkButton: 'Falar sobre este Sistema'
    },
    catalog: {
      subtitle: 'Aplicações Próprias',
      title: 'Catálogo Completo dos 10 Serviços HelpUS',
      desc: 'Acesse o subdomínio direto de cada sistema ou entre em contato com nosso atendimento para suporte e contratação.',
      developedBy: 'Desenvolvido por',
      accessSite: 'Acessar',
      whatsapp: 'WhatsApp',
      partnerBannerTitle: 'Rede de Parceiros em Breve',
      partnerBannerDesc: 'Atualmente este catálogo exibe exclusivamente as 10 aplicações próprias da HelpUS mapeadas nos servidores. Em breve, abriremos espaço para novos parceiros homologados.',
      customContactTitle: 'Deseja contratar ou integrar uma dessas soluções?',
      customContactDesc: 'Fale diretamente com a equipe da HelpUS pelo WhatsApp (83) 99872-1848 para tirar dúvidas, agendar apresentações ou solicitar personalizações.',
      customContactCta: 'Atendimento WhatsApp (83) 99872-1848'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — 10 Aplicações Mapeadas.',
      contact: 'Atendimento WhatsApp'
    },
    categories: {
      todos: 'Todas as Soluções (10)',
      tecnologia: 'Tecnologia & IA',
      saude: 'Saúde & Medicina',
      servicos: 'Serviços & Mobilidade',
      gastronomia: 'Alimentação & Delivery',
      cultura: 'Cultura & Biografia'
    },
    apps: {
      'helpus-site': {
        name: 'HelpUS Platform',
        subtitle: 'Portal Institucional & Infraestrutura Central',
        description: 'Hub institucional da HelpUS responsável pela coordenação de serviços, gestão de clientes, infraestrutura e governança das aplicações.',
        features: ['Central de Serviços', 'Gestão de Clientes', 'Suporte Técnico Coordenado'],
        whatsappMessage: 'Olá HelpUS! Gostaria de obter mais informações sobre a plataforma institucional HelpUS.'
      },
      'nexosai': {
        name: 'Nexos AI by HelpUS',
        subtitle: 'Inteligência Artificial & Agentes Autônomos',
        description: 'Plataforma avançada de IA para criação de agentes virtuais autônomos, automação de processos de negócio e integração via WhatsApp e Webchat.',
        features: ['Agentes de IA Treinados', 'Automação de Atendimento 24/7', 'Integração Oficial com WhatsApp'],
        whatsappMessage: 'Olá HelpUS! Tenho interesse nos Agentes de IA da plataforma Nexos AI.'
      },
      'usmle': {
        name: 'HelpUS USMLE Prep',
        subtitle: 'Preparatório & Plataforma Médica Internacional',
        description: 'Plataforma especializada de estudos e simulados interativos para médicos e estudantes se prepararem para o exame de revalidação médica USMLE nos EUA.',
        features: ['Simulados e Questões Comentadas', 'Acompanhamento de Desempenho', 'Recursos para Revalidação Médica'],
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre a plataforma HelpUS USMLE Prep.'
      },
      'saude': {
        name: 'HelpUS Saúde',
        subtitle: 'Telemedicina & Gestão Integrada de Saúde',
        description: 'Sistema completo para clínicas e profissionais da saúde. Oferece agendamento de consultas, prontuário eletrônico e atendimento por telemedicina.',
        features: ['Prontuário Eletrônico do Paciente', 'Agendamento Online de Consultas', 'Plataforma de Telemedicina Segura'],
        whatsappMessage: 'Olá HelpUS! Gostaria de consultar sobre o HelpUS Saúde para clínicas/profissionais.'
      },
      'wagnerdriver-site': {
        name: 'HelpUS Executive Driver',
        subtitle: 'Mobilidade Executiva & Transporte VIP',
        description: 'Solução digital para agendamento de transporte executivo, transfer vip, viagens particulares e gestão de corridas corporativas.',
        features: ['Agendamento de Viagens VIP', 'Atendimento Corporativo Exclusivo', 'Gestão de Rotas e Tarifas'],
        whatsappMessage: 'Olá HelpUS! Tenho interesse na solução HelpUS Executive Driver.'
      },
      'pizza': {
        name: 'HelpUS Pizza & Delivery',
        subtitle: 'Gestão & Pedidos Online para Pizzarias',
        description: 'Plataforma completa de delivery e gestão para pizzarias. Inclui cardápio digital interativo, pedidos na mesa e integração de entregas.',
        features: ['Cardápio Digital de Pizzas & Bebidas', 'Montagem de Sabores Meio-a-Meio', 'Gestão de Comandas & Delivery'],
        whatsappMessage: 'Olá HelpUS! Quero conhecer a solução HelpUS Pizza & Delivery para meu estabelecimento.'
      },
      'jobs': {
        name: 'HelpUS Jobs',
        subtitle: 'Marketplace Multilíngue de Empregos',
        description: 'Plataforma global multilíngue para conexão de trabalhadores, recrutadores e oportunidades de emprego com foco em carreiras internacionais.',
        features: ['Busca Multilíngue de Vagas', 'Match Inteligente Candidato-Vaga', 'Perfis Profissionais Verificados'],
        whatsappMessage: 'Olá HelpUS! Gostaria de entender mais sobre a plataforma HelpUS Jobs.'
      },
      'visa': {
        name: 'HelpUS Visa & Imigração',
        subtitle: 'Assessoria de Vistos, Passaportes & Processos',
        description: 'Plataforma de consulta e acompanhamento de processos de vistos, imigração, agendamento de passaportes e documentação internacional.',
        features: ['Checklist de Documentação', 'Acompanhamento de Status de Visto', 'Consultoria Imigratória Direta'],
        whatsappMessage: 'Olá HelpUS! Preciso de ajuda com vistos e processos no HelpUS Visa.'
      },
      'memoria-viva': {
        name: 'HelpUS Memória Viva',
        subtitle: 'Preservação de Legado, Biografias & Histórias',
        description: 'Plataforma afetiva para registro, organização e preservação da história de vida de famílias, acervos biográficos e memórias inesquecíveis.',
        features: ['Linha do Tempo Biográfica', 'Acervo Digital de Fotos e Áudios', 'Compartilhamento Familiar Seguro'],
        whatsappMessage: 'Olá HelpUS! Gostaria de conhecer o projeto HelpUS Memória Viva.'
      },
      'brayyan': {
        name: 'HelpUS Brayyan',
        subtitle: 'Branding Pessoal & Portfólio de Soluções',
        description: 'Portfólio de apresentação institucional e consultoria de branding pessoal para executivos, fundadores e projetos especiais da marca.',
        features: ['Apresentação de Projetos Especiais', 'Branding e Presença Digital', 'Consultoria de Negócios'],
        whatsappMessage: 'Olá HelpUS! Gostaria de saber mais sobre as consultorias HelpUS Brayyan.'
      }
    }
  },
  en: {
    nav: {
      allServices: 'All Services',
      tech: 'Tech & AI',
      health: 'Healthcare',
      services: 'Services',
      ai: 'Artificial Intelligence',
      whatsappButton: 'WhatsApp +55 (83) 99872-1848'
    },
    hero: {
      badge: 'Official HelpUS Applications Ecosystem',
      titleStart: 'Platforms & Services ',
      titleSpan: 'HelpUS',
      desc: 'Directly access the websites and systems built by HelpUS. The central hub for service management, support, and corporate assistance via WhatsApp +55 (83) 99872-1848.',
      metric1: '⚡ 10 In-House Solutions',
      metric2: '🛡️ Direct HelpUS Support',
      metric3: '🌐 hub.helpusbr.com',
      whatsappCta: 'Direct Contact on WhatsApp'
    },
    carousel: {
      featuredTag: '★ Ecosystem Spotlight',
      accessButton: 'Access Site',
      talkButton: 'Inquire About This System'
    },
    catalog: {
      subtitle: 'Proprietary Applications',
      title: 'Complete Catalog of the 10 HelpUS Services',
      desc: 'Access the direct subdomain of each system or contact our team for support and deployment.',
      developedBy: 'Developed by',
      accessSite: 'Access',
      whatsapp: 'WhatsApp',
      partnerBannerTitle: 'Partner Network Coming Soon',
      partnerBannerDesc: 'Currently this catalog exclusively displays the 10 proprietary HelpUS applications. Certified partner solutions will be introduced soon.',
      customContactTitle: 'Need a custom solution or enterprise integration?',
      customContactDesc: 'Speak directly with the HelpUS team on WhatsApp +55 (83) 99872-1848 to ask questions, schedule demos, or request custom features.',
      customContactCta: 'WhatsApp Support +55 (83) 99872-1848'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — 10 Mapped Applications.',
      contact: 'WhatsApp Support'
    },
    categories: {
      todos: 'All Solutions (10)',
      tecnologia: 'Tech & AI',
      saude: 'Healthcare & Medicine',
      servicos: 'Services & Mobility',
      gastronomia: 'Food & Delivery',
      cultura: 'Culture & Biography'
    },
    apps: {
      'helpus-site': {
        name: 'HelpUS Platform',
        subtitle: 'Institutional Portal & Core Infrastructure',
        description: 'Institutional hub for HelpUS responsible for service coordination, client management, infrastructure, and application governance.',
        features: ['Service Desk', 'Client Management', 'Coordinated Support'],
        whatsappMessage: 'Hello HelpUS! I would like more information about the HelpUS institutional platform.'
      },
      'nexosai': {
        name: 'Nexos AI by HelpUS',
        subtitle: 'Artificial Intelligence & Autonomous Agents',
        description: 'Advanced AI platform for building autonomous virtual agents, business process automation, and WhatsApp/Webchat integrations.',
        features: ['Trained AI Agents', '24/7 Support Automation', 'Official WhatsApp Integration'],
        whatsappMessage: 'Hello HelpUS! I am interested in Nexos AI virtual agents.'
      },
      'usmle': {
        name: 'HelpUS USMLE Prep',
        subtitle: 'International Medical Exam Prep Platform',
        description: 'Specialized study and interactive question bank platform for physicians and medical students preparing for the USMLE in the USA.',
        features: ['Practice Exams & Question Bank', 'Performance Analytics', 'Medical Licensing Resources'],
        whatsappMessage: 'Hello HelpUS! I would like to know more about the HelpUS USMLE Prep platform.'
      },
      'saude': {
        name: 'HelpUS Saúde',
        subtitle: 'Telemedicine & Integrated Healthcare Management',
        description: 'Complete system for medical clinics and healthcare providers. Features online appointment booking, EHR, and secure telemedicine.',
        features: ['Electronic Health Records (EHR)', 'Online Appointment Scheduling', 'Secure Telemedicine Suite'],
        whatsappMessage: 'Hello HelpUS! I would like to inquire about HelpUS Saúde for clinics/physicians.'
      },
      'wagnerdriver-site': {
        name: 'HelpUS Executive Driver',
        subtitle: 'Executive Mobility & VIP Transport',
        description: 'Digital platform for executive transport booking, VIP transfers, private rides, and corporate travel management.',
        features: ['VIP Ride Booking', 'Exclusive Corporate Support', 'Route & Tariff Management'],
        whatsappMessage: 'Hello HelpUS! I am interested in the HelpUS Executive Driver mobility platform.'
      },
      'pizza': {
        name: 'HelpUS Pizza & Delivery',
        subtitle: 'Ordering & Management Platform for Pizzerias',
        description: 'Complete delivery and management software for pizzerias. Features digital QR menu, table ordering, and delivery tracking.',
        features: ['Digital QR Menu', 'Half & Half Flavor Customizer', 'Order & Delivery Management'],
        whatsappMessage: 'Hello HelpUS! I want to learn more about HelpUS Pizza & Delivery for my business.'
      },
      'jobs': {
        name: 'HelpUS Jobs',
        subtitle: 'Multilingual Employment Marketplace',
        description: 'Global multilingual platform connecting workers, recruiters, and employment opportunities with a focus on international careers.',
        features: ['Multilingual Job Search', 'AI Candidate Matching', 'Verified Professional Profiles'],
        whatsappMessage: 'Hello HelpUS! I would like to know more about the HelpUS Jobs platform.'
      },
      'visa': {
        name: 'HelpUS Visa & Immigration',
        subtitle: 'Visa, Passport & Immigration Assistance',
        description: 'Platform for checking and tracking visa applications, immigration processes, passport scheduling, and international documentation.',
        features: ['Documentation Checklist', 'Visa Status Tracking', 'Direct Immigration Consulting'],
        whatsappMessage: 'Hello HelpUS! I need assistance with visas and immigration on HelpUS Visa.'
      },
      'memoria-viva': {
        name: 'HelpUS Memória Viva',
        subtitle: 'Legacy Preservation, Biographies & Life Stories',
        description: 'Heartfelt digital platform for recording, organizing, and preserving family life stories, biographical archives, and memories.',
        features: ['Biographical Timeline', 'Digital Photo & Audio Archive', 'Secure Family Sharing'],
        whatsappMessage: 'Hello HelpUS! I would like to explore the HelpUS Memória Viva project.'
      },
      'brayyan': {
        name: 'HelpUS Brayyan',
        subtitle: 'Personal Branding & Solutions Portfolio',
        description: 'Executive presentation portfolio and personal branding advisory for founders, executives, and special brand projects.',
        features: ['Special Projects Showcase', 'Branding & Digital Presence', 'Business Consulting'],
        whatsappMessage: 'Hello HelpUS! I would like to know more about HelpUS Brayyan advisory services.'
      }
    }
  }
};

export type Language = 'pt' | 'en' | 'es';

export interface TranslationSchema {
  nav: {
    allServices: string;
    tech: string;
    health: string;
    services: string;
    gastronomy: string;
    culture: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    appsCount: string;
    exploreBtn: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    accessApp: string;
    whatsappContact: string;
    developedBy: string;
    partnerBannerTitle: string;
    partnerBannerDesc: string;
  };
  footer: {
    rights: string;
    contactTitle: string;
    contactDesc: string;
    whatsapp: string;
    email: string;
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
      allServices: 'Todas as Soluções',
      tech: 'Tecnologia & IA',
      health: 'Saúde & Medicina',
      services: 'Serviços & Mobilidade',
      gastronomy: 'Alimentação & Delivery',
      culture: 'Cultura & Biografia'
    },
    hero: {
      badge: 'Ecossistema Oficial de Aplicações',
      title: 'Todas as Soluções Digitais HelpUS',
      subtitle: 'Conheça o catálogo completo das aplicações e plataformas desenvolvidas e gerenciadas diretamente pela HelpUS.',
      appsCount: '10 Aplicações Próprias',
      exploreBtn: 'Explorar Catálogo'
    },
    catalog: {
      title: 'Soluções Organizadas por Categoria',
      subtitle: 'Selecione uma área para navegar entre nossos sistemas ou acesse a aplicação diretamente.',
      accessApp: 'Acessar Aplicação',
      whatsappContact: 'Atendimento WhatsApp',
      developedBy: 'Desenvolvido por HelpUS',
      partnerBannerTitle: 'Rede de Parceiros em Breve',
      partnerBannerDesc: 'Atualmente apresentamos apenas as aplicações próprias da HelpUS. Em breve, abriremos espaço para a inclusão de parceiros homologados.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — Todos os direitos reservados.',
      contactTitle: 'Fale com a HelpUS',
      contactDesc: 'Atendimento direto pelo WhatsApp ou email corporativo para contratação e suporte.',
      whatsapp: 'WhatsApp (83) 99872-1848',
      email: 'contato@helpusbr.com'
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
      allServices: 'All Solutions',
      tech: 'Tech & AI',
      health: 'Healthcare',
      services: 'Services',
      gastronomy: 'Food & Delivery',
      culture: 'Culture'
    },
    hero: {
      badge: 'Official Applications Ecosystem',
      title: 'All HelpUS Digital Solutions',
      subtitle: 'Discover the full catalog of applications and platforms developed and managed directly by HelpUS.',
      appsCount: '10 In-House Applications',
      exploreBtn: 'Explore Catalog'
    },
    catalog: {
      title: 'Solutions Organized by Category',
      subtitle: 'Select a category to browse our systems or access the application directly.',
      accessApp: 'Access Application',
      whatsappContact: 'WhatsApp Support',
      developedBy: 'Developed by HelpUS',
      partnerBannerTitle: 'Partner Network Coming Soon',
      partnerBannerDesc: 'Currently displaying proprietary HelpUS applications. Certified partner solutions will be introduced soon.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — All rights reserved.',
      contactTitle: 'Contact HelpUS',
      contactDesc: 'Direct assistance via WhatsApp or corporate email for deployments and support.',
      whatsapp: 'WhatsApp +55 (83) 99872-1848',
      email: 'contato@helpusbr.com'
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
  },
  es: {
    nav: {
      allServices: 'Todas las Soluciones',
      tech: 'Tecnología e IA',
      health: 'Salud y Medicina',
      services: 'Servicios y Movilidad',
      gastronomy: 'Alimentación y Delivery',
      culture: 'Cultura y Biografía'
    },
    hero: {
      badge: 'Ecosistema Oficial de Aplicaciones',
      title: 'Todas las Soluciones Digitales HelpUS',
      subtitle: 'Conozca el catálogo completo de aplicaciones y plataformas desarrolladas y gestionadas directamente por HelpUS.',
      appsCount: '10 Aplicaciones Propias',
      exploreBtn: 'Explorar Catálogo'
    },
    catalog: {
      title: 'Soluciones Organizadas por Categoría',
      subtitle: 'Seleccione un área para navegar entre nuestros sistemas o acceda a la aplicación directamente.',
      accessApp: 'Acceder a la Aplicación',
      whatsappContact: 'Atención WhatsApp',
      developedBy: 'Desarrollado por HelpUS',
      partnerBannerTitle: 'Red de Socios Próximamente',
      partnerBannerDesc: 'Actualmente mostramos las aplicaciones propias de HelpUS. Próximamente abriremos espacio para socios homologados.'
    },
    footer: {
      rights: 'HelpUS Technology Solutions © 2026 — Todos los derechos reservados.',
      contactTitle: 'Hable con HelpUS',
      contactDesc: 'Atención directa por WhatsApp o correo electrónico corporativo para soporte e integración.',
      whatsapp: 'WhatsApp +55 (83) 99872-1848',
      email: 'contato@helpusbr.com'
    },
    categories: {
      todos: 'Todas las Soluciones (10)',
      tecnologia: 'Tecnología e IA',
      saude: 'Salud y Medicina',
      servicos: 'Servicios y Movilidad',
      gastronomia: 'Alimentación y Delivery',
      cultura: 'Cultura y Biografía'
    },
    apps: {
      'helpus-site': {
        name: 'HelpUS Platform',
        subtitle: 'Portal Institucional e Infraestructura Central',
        description: 'Hub institucional de HelpUS responsable de la coordinación de servicios, gestión de clientes, infraestructura y gobernanza de aplicaciones.',
        features: ['Centro de Servicios', 'Gestión de Clientes', 'Soporte Técnico Coordinado'],
        whatsappMessage: '¡Hola HelpUS! Quisiera obtener más información sobre la plataforma institucional HelpUS.'
      },
      'nexosai': {
        name: 'Nexos AI by HelpUS',
        subtitle: 'Inteligencia Artificial y Agentes Autónomos',
        description: 'Plataforma avanzada de IA para la creación de agentes virtuales autónomos, automatización de procesos e integración con WhatsApp.',
        features: ['Agentes de IA Entrenados', 'Automatización 24/7', 'Integración Oficial con WhatsApp'],
        whatsappMessage: '¡Hola HelpUS! Tengo interés en los Agentes de IA de la plataforma Nexos AI.'
      },
      'usmle': {
        name: 'HelpUS USMLE Prep',
        subtitle: 'Plataforma Médica Internacional y Examen USMLE',
        description: 'Plataforma especializada de estudios y simulados interactivos para médicos y estudiantes preparándose para el examen USMLE en EE. UU.',
        features: ['Simulados y Banco de Preguntas', 'Seguimiento de Rendimiento', 'Recursos para Revalidación Médica'],
        whatsappMessage: '¡Hola HelpUS! Quisiera saber más sobre la plataforma HelpUS USMLE Prep.'
      },
      'saude': {
        name: 'HelpUS Saúde',
        subtitle: 'Telemedicina y Gestión Integrada de Salud',
        description: 'Sistema completo para clínicas y profesionales de la salud. Ofrece reserva de citas online, historia clínica electrónica y telemedicina.',
        features: ['Historia Clínica Electrónica', 'Reserva de Citas Online', 'Telemedicina Segura'],
        whatsappMessage: '¡Hola HelpUS! Quisiera consultar sobre HelpUS Saúde para clínicas/profesionales.'
      },
      'wagnerdriver-site': {
        name: 'HelpUS Executive Driver',
        subtitle: 'Movilidad Ejecutiva y Transporte VIP',
        description: 'Solución digital para reserva de transporte ejecutivo, transfer VIP, viajes privados y gestión de viajes corporativos.',
        features: ['Reserva de Viajes VIP', 'Atención Corporativa Exclusiva', 'Gestión de Rutas y Tarifas'],
        whatsappMessage: '¡Hola HelpUS! Tengo interés en la solución HelpUS Executive Driver.'
      },
      'pizza': {
        name: 'HelpUS Pizza & Delivery',
        subtitle: 'Gestión y Pedidos Online para Pizzerías',
        description: 'Plataforma completa de delivery y gestión para pizzerías. Incluye menú digital interactivo, pedidos en mesa y gestión de delivery.',
        features: ['Menú Digital QR', 'Personalizador de Sabores', 'Gestión de Comandas y Delivery'],
        whatsappMessage: '¡Hola HelpUS! Quiero conocer la solución HelpUS Pizza & Delivery para mi negocio.'
      },
      'jobs': {
        name: 'HelpUS Jobs',
        subtitle: 'Marketplace Multilingüe de Empleos',
        description: 'Plataforma global multilingüe para conectar trabajadores, reclutadores y oportunidades laborales internacionales.',
        features: ['Búsqueda Multilingüe de Empleos', 'Match Inteligente', 'Perfiles Profesionales Verificados'],
        whatsappMessage: '¡Hola HelpUS! Quisiera entender más sobre la plataforma HelpUS Jobs.'
      },
      'visa': {
        name: 'HelpUS Visa & Imigração',
        subtitle: 'Asesoría de Visados, Pasaportes y Procesos',
        description: 'Plataforma de consulta y seguimiento de trámites de visados, inmigración, pasaportes y documentación internacional.',
        features: ['Checklist de Documentación', 'Seguimiento de Estado de Visado', 'Consultoría de Inmigración Directa'],
        whatsappMessage: '¡Hola HelpUS! Necesito ayuda con visados en HelpUS Visa.'
      },
      'memoria-viva': {
        name: 'HelpUS Memória Viva',
        subtitle: 'Preservación de Legado, Biografías e Historias',
        description: 'Plataforma digital afectiva para registrar, organizar y preservar historias de vida familiares, biografías y recuerdos.',
        features: ['Línea de Tiempo Biográfica', 'Archivo Digital de Fotos y Audio', 'Uso Familiar Seguro'],
        whatsappMessage: '¡Hola HelpUS! Quisiera conocer el proyecto HelpUS Memória Viva.'
      },
      'brayyan': {
        name: 'HelpUS Brayyan',
        subtitle: 'Branding Personal y Portafolio de Soluciones',
        description: 'Portafolio de presentación ejecutiva y consultoría de branding personal para fundadores y proyectos especiales.',
        features: ['Presentación de Proyectos Especiales', 'Branding y Presencia Digital', 'Consultoría de Negocios'],
        whatsappMessage: '¡Hola HelpUS! Quisiera saber más sobre la consultoría HelpUS Brayyan.'
      }
    }
  }
};

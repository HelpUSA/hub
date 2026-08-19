export type Language = 'pt' | 'en' | 'es';

export interface TranslationSchema {
  nav: {
    institutional: string;
    solutions: string;
    help: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    exploreBtn: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    accessApp: string;
    viewDetails: string;
    partnerBannerTitle: string;
    partnerBannerDesc: string;
  };
  detailsModal: {
    overview: string;
    keyFeatures: string;
    subdomain: string;
    launchApp: string;
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
  }>;
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      institutional: 'Institucional',
      solutions: 'Soluções',
      help: 'Ajuda & Suporte',
      contact: 'Contato'
    },
    hero: {
      title: 'Todas as Soluções Digitais HelpUS',
      subtitle: 'Conheça o catálogo completo das aplicações e plataformas desenvolvidas e gerenciadas diretamente pela HelpUS.',
      exploreBtn: 'Explorar Soluções'
    },
    catalog: {
      title: 'Soluções Organizadas por Categoria',
      subtitle: 'Selecione uma área para navegar entre nossos sistemas ou acesse a aplicação diretamente.',
      accessApp: 'Acessar Aplicação',
      viewDetails: 'Ver Detalhes do Sistema',
      partnerBannerTitle: 'Rede de Parceiros em Breve',
      partnerBannerDesc: 'Atualmente apresentamos apenas as aplicações próprias da HelpUS. Em breve, abriremos espaço para a inclusão de parceiros homologados.'
    },
    detailsModal: {
      overview: 'Visão Geral & Telas do Sistema',
      keyFeatures: 'Principais Recursos & Funcionalidades',
      subdomain: 'Subdomínio Oficial DNS:',
      launchApp: 'Acessar Sistema Agora',
      close: 'Fechar'
    },
    cookies: {
      text: 'Utilizamos cookies para oferecer a melhor experiência de navegação e garantir a segurança das aplicações.',
      accept: 'Entendido & Aceitar',
      privacyLink: 'Política de Privacidade'
    },
    modals: {
      institutionalTitle: 'Institucional — HelpUS Technology',
      institutionalDesc: 'A HelpUS Technology Solutions é uma empresa focada no desenvolvimento, gestão e governança de ecossistemas digitais, unificando suporte, infraestrutura e inovação em múltiplos segmentos.',
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
        name: 'Platform',
        subtitle: 'Portal Institucional & Infraestrutura Central',
        description: 'Hub institucional da HelpUS responsável pela coordenação de serviços, gestão de clientes, infraestrutura e governança das aplicações.',
        features: ['Central de Serviços', 'Gestão de Clientes', 'Suporte Técnico Coordenado'],
        detailsContent: 'A plataforma central HelpUS integra o gerenciamento de contas, infraestrutura em nuvem, controle de acessos unificado e painel corporativo de governança.'
      },
      'nexosai': {
        name: 'Nexos AI',
        subtitle: 'Inteligência Artificial & Agentes Autônomos',
        description: 'Plataforma avançada de IA para criação de agentes virtuais autônomos, automação de processos de negócio e integração via WhatsApp e Webchat.',
        features: ['Agentes de IA Treinados', 'Automação de Atendimento 24/7', 'Integração Oficial com WhatsApp'],
        detailsContent: 'Permite criar atendentes virtuais inteligentes treinados com a base de conhecimento da sua empresa para qualificação de leads, agendamentos e suporte.'
      },
      'usmle': {
        name: 'USMLE Prep',
        subtitle: 'Preparatório & Plataforma Médica Internacional',
        description: 'Plataforma especializada de estudos e simulados interativos para médicos e estudantes se prepararem para o exame de revalidação médica USMLE nos EUA.',
        features: ['Simulados e Questões Comentadas', 'Acompanhamento de Desempenho', 'Recursos para Revalidação Médica'],
        detailsContent: 'Conta com banco de questões atualizado, relatórios de desempenho estatístico, flashcards intervalados e trilhas de aprendizado para aprovação na revalidação médica americana.'
      },
      'saude': {
        name: 'Saúde',
        subtitle: 'Telemedicina & Gestão Integrada de Saúde',
        description: 'Sistema completo para clínicas e profissionais da saúde. Oferece agendamento de consultas, prontuário eletrônico e atendimento por telemedicina.',
        features: ['Prontuário Eletrônico do Paciente', 'Agendamento Online de Consultas', 'Plataforma de Telemedicina Segura'],
        detailsContent: 'Software completo de gestão clínica com agendamento online de consultas, prontuário digital criptografado, prescrição eletrônica e sala virtual de telemedicina.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Mobilidade Executiva & Transporte VIP',
        description: 'Solução digital para agendamento de transporte executivo, transfer vip, viagens particulares e gestão de corridas corporativas.',
        features: ['Agendamento de Viagens VIP', 'Atendimento Corporativo Exclusivo', 'Gestão de Rotas e Tarifas'],
        detailsContent: 'Oferece agendamento prévio de veículos executivos, controle de horários, faturamento corporativo mensal e acompanhamento em tempo real para passageiros VIP.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Gestão & Pedidos Online para Pizzarias',
        description: 'Plataforma completa de delivery e gestão para pizzarias. Inclui cardápio digital interativo, pedidos na mesa e integração de entregas.',
        features: ['Cardápio Digital de Pizzas & Bebidas', 'Montagem de Sabores Meio-a-Meio', 'Gestão de Comandas & Delivery'],
        detailsContent: 'Sistema de gestão gastronômica com cardápio via QR Code, montador interativo de pizzas de 2 ou mais sabores, controle de estoque da cozinha e integração de motoboys.'
      },
      'jobs': {
        name: 'Jobs',
        subtitle: 'Marketplace Multilíngue de Empregos',
        description: 'Plataforma global multilíngue para conexão de trabalhadores, recrutadores e oportunidades de emprego com foco em carreiras internacionais.',
        features: ['Busca Multilíngue de Vagas', 'Match Inteligente Candidato-Vaga', 'Perfis Profissionais Verificados'],
        detailsContent: 'Conecta profissionais a oportunidades de trabalho locais e internacionais com currículos multilíngues, testes de habilidades e algoritmos de recomendação.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Assessoria de Vistos, Passaportes & Processos',
        description: 'Plataforma de consulta e acompanhamento de processos de vistos, imigração, agendamento de passaportes e documentação internacional.',
        features: ['Checklist de Documentação', 'Acompanhamento de Status de Visto', 'Consultoria Imigratória Direta'],
        detailsContent: 'Portal de assessoria imigratória com guias de preenchimento do formulário DS-160, checklist automatizado de documentos e monitoramento de agendamentos consulares.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Preservação de Legado, Biografias & Histórias',
        description: 'Plataforma afetiva para registro, organização e preservação da história de vida de famílias, acervos biográficos e memórias inesquecíveis.',
        features: ['Linha do Tempo Biográfica', 'Acervo Digital de Fotos e Áudios', 'Compartilhamento Familiar Seguro'],
        detailsContent: 'Espaço exclusivo para gravar e organizar memórias familiares, depoimentos em áudio, livros virtuais de biografias e acervos históricos privados para gerações futuras.'
      },
      'brayyan': {
        name: 'Brayyan',
        subtitle: 'Branding Pessoal & Portfólio de Soluções',
        description: 'Portfólio de apresentação institucional e consultoria de branding pessoal para executivos, fundadores e projetos especiais da marca.',
        features: ['Apresentação de Projetos Especiais', 'Branding e Presença Digital', 'Consultoria de Negócios'],
        detailsContent: 'Solução personalizada de posicionamento de marca, design de portfólio executivo e consultoria estratégica para fundadores e lideranças corporativas.'
      }
    }
  },
  en: {
    nav: {
      institutional: 'About HelpUS',
      solutions: 'Solutions',
      help: 'Help & Support',
      contact: 'Contact'
    },
    hero: {
      title: 'All HelpUS Digital Solutions',
      subtitle: 'Explore the complete catalog of applications and platforms developed and managed directly by HelpUS.',
      exploreBtn: 'Explore Solutions'
    },
    catalog: {
      title: 'Solutions Organized by Category',
      subtitle: 'Select a category to browse our systems or access the application directly.',
      accessApp: 'Access Application',
      viewDetails: 'View System Details',
      partnerBannerTitle: 'Partner Network Coming Soon',
      partnerBannerDesc: 'Currently displaying proprietary HelpUS applications. Certified partner solutions will be introduced soon.'
    },
    detailsModal: {
      overview: 'System Overview & Screenshots',
      keyFeatures: 'Key Features & Capabilities',
      subdomain: 'Official Subdomain DNS:',
      launchApp: 'Launch System Now',
      close: 'Close'
    },
    cookies: {
      text: 'We use cookies to ensure the best browsing experience and security across our applications.',
      accept: 'Accept & Close',
      privacyLink: 'Privacy Policy'
    },
    modals: {
      institutionalTitle: 'About HelpUS Technology',
      institutionalDesc: 'HelpUS Technology Solutions is an enterprise dedicated to building, managing, and governing digital ecosystems, unifying support, infrastructure, and innovation across key market verticals.',
      helpTitle: 'Help & Support Center',
      helpDesc: 'Need technical support or have questions regarding our applications? Speak with our central team via WhatsApp or official email.',
      privacyTitle: 'Privacy Policy & Terms of Service',
      privacyDesc: 'We guarantee transparent data handling in compliance with GDPR, LGPD, and international privacy standards. Your data is encrypted and never shared without authorization.'
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
        name: 'Platform',
        subtitle: 'Institutional Portal & Core Infrastructure',
        description: 'Institutional hub for HelpUS responsible for service coordination, client management, infrastructure, and application governance.',
        features: ['Service Desk', 'Client Management', 'Coordinated Support'],
        detailsContent: 'Central HelpUS platform integrating account management, cloud infrastructure, unified access control, and corporate governance dashboards.'
      },
      'nexosai': {
        name: 'Nexos AI',
        subtitle: 'Artificial Intelligence & Autonomous Agents',
        description: 'Advanced AI platform for building autonomous virtual agents, business process automation, and WhatsApp/Webchat integrations.',
        features: ['Trained AI Agents', '24/7 Support Automation', 'Official WhatsApp Integration'],
        detailsContent: 'Build intelligent virtual assistants trained on your company knowledge base for lead qualification, scheduling, and automated support.'
      },
      'usmle': {
        name: 'USMLE Prep',
        subtitle: 'International Medical Exam Prep Platform',
        description: 'Specialized study and interactive question bank platform for physicians and medical students preparing for the USMLE in the USA.',
        features: ['Practice Exams & Question Bank', 'Performance Analytics', 'Medical Licensing Resources'],
        detailsContent: 'Includes updated question bank, statistical performance reports, spaced flashcards, and learning tracks for American medical revalidation.'
      },
      'saude': {
        name: 'Saúde',
        subtitle: 'Telemedicine & Integrated Healthcare Management',
        description: 'Complete system for medical clinics and healthcare providers. Features online appointment booking, EHR, and secure telemedicine.',
        features: ['Electronic Health Records (EHR)', 'Online Appointment Scheduling', 'Secure Telemedicine Suite'],
        detailsContent: 'Comprehensive clinical software featuring online booking, encrypted digital health records, e-prescriptions, and virtual consultation rooms.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Executive Mobility & VIP Transport',
        description: 'Digital platform for executive transport booking, VIP transfers, private rides, and corporate travel management.',
        features: ['VIP Ride Booking', 'Exclusive Corporate Support', 'Route & Tariff Management'],
        detailsContent: 'Schedule executive vehicles, manage passenger itineraries, handle monthly corporate billing, and track VIP rides in real time.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Ordering & Management Platform for Pizzerias',
        description: 'Complete delivery and management software for pizzerias. Features digital QR menu, table ordering, and delivery tracking.',
        features: ['Digital QR Menu', 'Half & Half Flavor Customizer', 'Order & Delivery Management'],
        detailsContent: 'Gastronomy management system featuring QR menus, interactive pizza builders, kitchen inventory tracking, and courier dispatching.'
      },
      'jobs': {
        name: 'Jobs',
        subtitle: 'Multilingual Employment Marketplace',
        description: 'Global multilingual platform connecting workers, recruiters, and employment opportunities with a focus on international careers.',
        features: ['Multilingual Job Search', 'AI Candidate Matching', 'Verified Professional Profiles'],
        detailsContent: 'Connects professionals to local and international jobs with multilingual resumes, skill assessments, and AI matching algorithms.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Visa, Passport & Immigration Assistance',
        description: 'Platform for checking and tracking visa applications, immigration processes, passport scheduling, and international documentation.',
        features: ['Documentation Checklist', 'Visa Status Tracking', 'Direct Immigration Consulting'],
        detailsContent: 'Immigration advisory portal offering DS-160 filling guides, automated document checklists, and consular appointment monitoring.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Legacy Preservation, Biographies & Life Stories',
        description: 'Heartfelt digital platform for recording, organizing, and preserving family life stories, biographical archives, and memories.',
        features: ['Biographical Timeline', 'Digital Photo & Audio Archive', 'Secure Family Sharing'],
        detailsContent: 'Dedicated space to record and organize family memories, audio interviews, virtual biographical books, and private historical archives.'
      },
      'brayyan': {
        name: 'Brayyan',
        subtitle: 'Personal Branding & Solutions Portfolio',
        description: 'Executive presentation portfolio and personal branding advisory for founders, executives, and special brand projects.',
        features: ['Special Projects Showcase', 'Branding & Digital Presence', 'Business Consulting'],
        detailsContent: 'Custom brand positioning solutions, executive portfolio design, and strategic consulting for corporate founders and leaders.'
      }
    }
  },
  es: {
    nav: {
      institutional: 'Sobre HelpUS',
      solutions: 'Soluciones',
      help: 'Ayuda y Soporte',
      contact: 'Contacto'
    },
    hero: {
      title: 'Todas las Soluciones Digitales HelpUS',
      subtitle: 'Conozca el catálogo completo de aplicaciones y plataformas desarrolladas y gestionadas directamente por HelpUS.',
      exploreBtn: 'Explorar Soluciones'
    },
    catalog: {
      title: 'Soluciones Organizadas por Categoría',
      subtitle: 'Seleccione un área para navegar entre nuestros sistemas o acceda a la aplicación directamente.',
      accessApp: 'Acceder a la Aplicación',
      viewDetails: 'Ver Detalles del Sistema',
      partnerBannerTitle: 'Red de Socios Próximamente',
      partnerBannerDesc: 'Actualmente mostramos las aplicaciones propias de HelpUS. Próximamente abriremos espacio para socios homologados.'
    },
    detailsModal: {
      overview: 'Visión General y Capturas del Sistema',
      keyFeatures: 'Principales Recursos y Funciones',
      subdomain: 'Subdominio Oficial DNS:',
      launchApp: 'Acceder al Sistema Ahora',
      close: 'Cerrar'
    },
    cookies: {
      text: 'Utilizamos cookies para garantizar la mejor experiencia de navegación y seguridad en nuestras aplicaciones.',
      accept: 'Aceptar y Cerrar',
      privacyLink: 'Política de Privacidad'
    },
    modals: {
      institutionalTitle: 'Sobre HelpUS Technology',
      institutionalDesc: 'HelpUS Technology Solutions es una empresa dedicada a desarrollar, gestionar y gobernar ecosistemas digitales, unificando soporte e infraestructura.',
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
        name: 'Platform',
        subtitle: 'Portal Institucional e Infraestructura Central',
        description: 'Hub institucional de HelpUS responsable de la coordinación de servicios, gestión de clientes, infraestructura y gobernanza de aplicaciones.',
        features: ['Centro de Servicios', 'Gestión de Clientes', 'Soporte Técnico Coordinado'],
        detailsContent: 'Plataforma central de HelpUS que integra gestión de cuentas, infraestructura en la nube y gobernanza corporativa.'
      },
      'nexosai': {
        name: 'Nexos AI',
        subtitle: 'Inteligencia Artificial y Agentes Autónomos',
        description: 'Plataforma avanzada de IA para la creación de agentes virtuales autónomos, automatización de procesos e integración con WhatsApp.',
        features: ['Agentes de IA Entrenados', 'Automatización 24/7', 'Integración Oficial con WhatsApp'],
        detailsContent: 'Cree asistentes virtuales inteligentes entrenados con la base de conocimientos de su empresa para atención automatizada.'
      },
      'usmle': {
        name: 'USMLE Prep',
        subtitle: 'Plataforma Médica Internacional y Examen USMLE',
        description: 'Plataforma especializada de estudios y simulados interactivos para médicos y estudiantes preparándose para el examen USMLE en EE. UU.',
        features: ['Simulados y Banco de Preguntas', 'Seguimiento de Rendimiento', 'Recursos para Revalidación Médica'],
        detailsContent: 'Incluye banco de preguntas actualizado, métricas de rendimiento y recursos de aprendizaje para la revalidación médica en EE. UU.'
      },
      'saude': {
        name: 'Saúde',
        subtitle: 'Telemedicina y Gestión Integrada de Salud',
        description: 'Sistema completo para clínicas y profesionales de la salud. Ofrece reserva de citas online, historia clínica electrónica y telemedicina.',
        features: ['Historia Clínica Electrónica', 'Reserva de Citas Online', 'Telemedicina Segura'],
        detailsContent: 'Software clínico completo con agenda online, expediente digital encriptado y consultas virtuales seguras.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Movilidad Ejecutiva y Transporte VIP',
        description: 'Solución digital para reserva de transporte ejecutivo, transfer VIP, viajes privados y gestión de viajes corporativos.',
        features: ['Reserva de Viajes VIP', 'Atención Corporativa Exclusiva', 'Gestión de Rutas y Tarifas'],
        detailsContent: 'Gestione reservas VIP de vehículos ejecutivos, control de itinerarios y traslados corporativos en tiempo real.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Gestión y Pedidos Online para Pizzerías',
        description: 'Plataforma completa de delivery y gestión para pizzerías. Incluye menú digital interactivo, pedidos en mesa y gestión de delivery.',
        features: ['Menú Digital QR', 'Personalizador de Sabores', 'Gestión de Comandas y Delivery'],
        detailsContent: 'Sistema de gestión gastronómica con menú QR, personalizador interactivo de sabores y gestión de repartidores.'
      },
      'jobs': {
        name: 'Jobs',
        subtitle: 'Marketplace Multilingüe de Empleos',
        description: 'Plataforma global multilingüe para conectar trabajadores, reclutadores y oportunidades laborales internacionales.',
        features: ['Búsqueda Multilingüe de Empleos', 'Match Inteligente', 'Perfis Profesionales Verificados'],
        detailsContent: 'Conecta a profesionales con empleo internacional y local mediante algoritmos avanzados de coincidencia.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Asesoría de Visados, Pasaportes y Procesos',
        description: 'Plataforma de consulta y seguimiento de trámites de visados, inmigración, pasaportes y documentación internacional.',
        features: ['Checklist de Documentación', 'Seguimiento de Estado de Visado', 'Consultoría de Inmigración Directa'],
        detailsContent: 'Portal de asesoría de inmigración con guías de documentación y seguimiento de citas consulares.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Preservación de Legado, Biografias e Historias',
        description: 'Plataforma digital afectiva para registrar, organizar y preservar historias de vida familiares, biografías y recuerdos.',
        features: ['Línea de Tiempo Biográfica', 'Archivo Digital de Fotos y Audio', 'Uso Familiar Seguro'],
        detailsContent: 'Espacio dedicado a conservar memorias familiares, audios históricos y libros de biografías para futuras generaciones.'
      },
      'brayyan': {
        name: 'Brayyan',
        subtitle: 'Branding Personal y Portafolio de Soluciones',
        description: 'Portafolio de presentación ejecutiva y consultoría de branding personal para fundadores y proyectos especiales.',
        features: ['Presentación de Proyectos Especiales', 'Branding y Presencia Digital', 'Consultoría de Negocios'],
        detailsContent: 'Solución personalizada de marca ejecutiva y consultoría de negocios para líderes y emprendedores.'
      }
    }
  }
};

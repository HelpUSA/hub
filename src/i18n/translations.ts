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
    tryNow: string;
    partnerBannerTitle: string;
    partnerBannerDesc: string;
  };
  detailsModal: {
    overview: string;
    keyFeatures: string;
    subdomain: string;
    launchRealApp: string;
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
    targetAudience: string;
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
      subtitle: 'Conheça o catálogo completo de aplicações, sistemas e engenharia de software desenvolvidos e gerenciados diretamente pela HelpUS.',
      exploreBtn: 'Explorar Soluções'
    },
    catalog: {
      title: 'Soluções Organizadas por Categoria',
      subtitle: 'Clique em "Experimente Agora" em qualquer solução para abrir os detalhes e telas antes de acessar a aplicação real.',
      tryNow: 'Experimente Agora',
      partnerBannerTitle: 'Rede de Parceiros em Breve',
      partnerBannerDesc: 'Atualmente apresentamos apenas as aplicações próprias da HelpUS. Em breve, abriremos espaço para a inclusão de parceiros homologados.'
    },
    detailsModal: {
      overview: 'Visão Geral & Telas do Sistema',
      keyFeatures: 'Destaques & Capacidades Técnicas',
      subdomain: 'Endereço Oficial na Web:',
      launchRealApp: 'Ir para a Aplicação Real 🚀',
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
          'Engenharia de Software Full-Stack (React, Node.js, Python, PostgreSQL)',
          'Arquitetura de APIs RESTful e GraphQL Seguras',
          'Deploy Automatizado na Nuvem (Vercel, AWS, Railway)',
          'Design System Personalizado & UX/UI de Alta Performance'
        ],
        detailsContent: 'O serviço de Desenvolvimento de Software da HelpUS projeta e constrói soluções digitais customizadas para empresas de todos os portes. Desde a concepção do banco de dados relacional até a entrega de aplicativos web e mobile completos com integração contínua (CI/CD).',
        targetAudience: 'Empresas, startups e fundadores que precisam transformar ideias em sistemas robustos e escaláveis.'
      },
      'nexosai': {
        name: 'Nexos AI',
        subtitle: 'Inteligência Artificial & Agentes Autônomos',
        description: 'Plataforma avançada de IA para criação de agentes virtuais autônomos, automação de processos de negócio e integração via WhatsApp e Webchat.',
        features: [
          'Agentes de IA Treinados com Dados da Empresa',
          'Automação de Atendimento 24 horas por dia',
          'Integração Oficial com WhatsApp Business API',
          'Qualificação Automática de Leads e Agendamentos'
        ],
        detailsContent: 'O Nexos AI permite que sua empresa crie atendentes virtuais inteligentes capazes de responder dúvidas complexas, qualificar clientes em potencial e agendar reuniões de forma autônoma e humanizada.',
        targetAudience: 'Equipes de vendas, suporte e atendimento que desejam escalar operações sem aumentar custos.'
      },
      'usmle': {
        name: 'USMLE Prep',
        subtitle: 'Preparatório & Plataforma Médica Internacional',
        description: 'Plataforma especializada de estudos e simulados interativos para médicos e estudantes se prepararem para o exame de revalidação médica USMLE nos EUA.',
        features: [
          'Banco de Questões Atualizado com Explicações Clínicas',
          'Simulados de Exame no Formato Real do USMLE',
          'Relatórios de Desempenho por Especialidade Médica',
          'Repetição Espaçada de Flashcards Médicos'
        ],
        detailsContent: 'O USMLE Prep oferece um ambiente imersivo com relatórios estatísticos detalhados de evolução, ajudando médicos brasileiros e internacionais a conquistar a revalidação médica nos Estados Unidos.',
        targetAudience: 'Médicos e estudantes de medicina focados na carreira e revalidação médica nos EUA.'
      },
      'saude': {
        name: 'Saúde',
        subtitle: 'Telemedicina & Gestão Integrada de Saúde',
        description: 'Sistema completo para clínicas e profissionais da saúde. Oferece agendamento de consultas, prontuário eletrônico e atendimento por telemedicina.',
        features: [
          'Prontuário Eletrônico do Paciente Criptografado',
          'Agendamento de Consultas Presenciais e Online',
          'Sala de Atendimento por Telemedicina HD Segura',
          'Prescrição Digital de Medicamentos e Exames'
        ],
        detailsContent: 'O HelpUS Saúde digitaliza a operação clínica: desde o agendamento no site até a consulta remota com transmissão criptografada e emissão de atestados e receitas digitais.',
        targetAudience: 'Clínicas médicas, consultórios particulares e profissionais de saúde autônomos.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Mobilidade Executiva & Transporte VIP',
        description: 'Solução digital para agendamento de transporte executivo, transfer vip, viagens particulares e gestão de corridas corporativas.',
        features: [
          'Agendamento Prévio de Transfere e Viagens VIP',
          'Frota Executiva Monitorada em Tempo Real',
          'Faturamento Corporativo Mensal Centralizado',
          'Atendimento Exclusivo para Executivos e Eventos'
        ],
        detailsContent: 'Sistema corporativo de mobilidade para recepção de executivos em aeroportos, transporte VIP para eventos e viagens intermunicipais com total conforto e pontualidade.',
        targetAudience: 'Executivos, empresas, hotéis e passageiros que exigem transporte VIP de alta padrão.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Gestão & Pedidos Online para Pizzarias',
        description: 'Plataforma completa de delivery e gestão para pizzarias. Inclui cardápio digital interativo, pedidos na mesa e integração de entregas.',
        features: [
          'Cardápio Digital Interativo via QR Code',
          'Montador de Pizzas Meio-a-Meio e Adicionais',
          'Painel de Comandas de Cozinha (KDS)',
          'Rastreamento de Entregas e Motoboys'
        ],
        detailsContent: 'O Pizza & Delivery moderniza pizzarias reduzindo erros nos pedidos de sabores fracionados, otimizando o fluxo da cozinha e aumentando o ticket médio das vendas online.',
        targetAudience: 'Pizzarias, restaurantes, hamburguerias e estabelecimentos de gastronomia e delivery.'
      },
      'jobs': {
        name: 'Jobs',
        subtitle: 'Marketplace Multilíngue de Empregos',
        description: 'Plataforma global multilíngue para conexão de trabalhadores, recrutadores e oportunidades de emprego com foco em carreiras internacionais.',
        features: [
          'Busca Multilíngue de Vagas em Vários Países',
          'Match Inteligente de Perfil do Candidato com a Vaga',
          'Currículos Padronizados e Verificação de Habilidades',
          'Painel de Gestão de Processos Seletivos para RH'
        ],
        detailsContent: 'Conecta talentos a empresas contratantes em escala global. Oferece tradução automática de currículos e testes de perfil profissional.',
        targetAudience: 'Profissionais em busca de vagas e recrutadores contratando talentos locais e remotos.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Assessoria de Vistos, Passaportes & Processos',
        description: 'Plataforma de consulta e acompanhamento de processos de vistos, imigração, agendamento de passaportes e documentação internacional.',
        features: [
          'Checklist Inteligente de Documentação Consular',
          'Guia de Preenchimento de Formulários (DS-160 e outros)',
          'Monitoramento de Vagas e Datas nos Consulados',
          'Suporte Direto com Especialistas em Imigração'
        ],
        detailsContent: 'Simplifica a burocracia de vistos e imigração com checklists automáticos, validação de documentos e acompanhamento de etapas consulares.',
        targetAudience: 'Viajantes, estudantes e imigrantes com destino aos EUA, Europa e outros países.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Preservação de Legado, Biografias & Histórias',
        description: 'Plataforma afetiva para registro, organização e preservação da história de vida de famílias, acervos biográficos e memórias inesquecíveis.',
        features: [
          'Linha do Tempo Biográfica Interativa',
          'Acervo Digital de Fotos, Vídeos e Depoimentos em Áudio',
          'Livros Virtuais de Biografia de Família',
          'Acesso Privado e Seguro para Gerações Futuras'
        ],
        detailsContent: 'Uma plataforma dedicada a registrar momentos marcantes, histórias familiares e legados pessoais em um acervo digital seguro e perene.',
        targetAudience: 'Famílias, biógrafos e pessoas que desejam eternizar suas histórias e de seus entes queridos.'
      },
      'brayyan': {
        name: 'Brayyan',
        subtitle: 'Branding Pessoal & Portfólio de Soluções',
        description: 'Portfólio de apresentação institucional e consultoria de branding pessoal para executivos, fundadores e projetos especiais da marca.',
        features: [
          'Design de Portfólio Executivo de Alto Impacto',
          'Estratégia de Posicionamento e Presença Digital',
          'Apresentação de Projetos Especiais e Investimentos',
          'Consultoria Direta em Desenvolvimento de Negócios'
        ],
        detailsContent: 'Solução sob medida de branding e estratégia de imagem executiva para lideranças corporativas, investidores e criadores de projetos inovadores.',
        targetAudience: 'Executivos, fundadores, consultores e líderes que necessitam de presença digital refinada.'
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
      subtitle: 'Discover the full catalog of applications, systems, and software engineering developed and managed directly by HelpUS.',
      exploreBtn: 'Explore Solutions'
    },
    catalog: {
      title: 'Solutions Organized by Category',
      subtitle: 'Click "Try Now" on any solution to view system details and screens before launching the real app.',
      tryNow: 'Try Now',
      partnerBannerTitle: 'Partner Network Coming Soon',
      partnerBannerDesc: 'Currently displaying proprietary HelpUS applications. Certified partner solutions will be introduced soon.'
    },
    detailsModal: {
      overview: 'System Overview & Screenshots',
      keyFeatures: 'Highlights & Technical Capabilities',
      subdomain: 'Official Web Address:',
      launchRealApp: 'Go to Real Application 🚀',
      close: 'Close'
    },
    cookies: {
      text: 'We use cookies to ensure the best browsing experience and security across our applications.',
      accept: 'Accept & Close',
      privacyLink: 'Privacy Policy'
    },
    modals: {
      institutionalTitle: 'About HelpUS Technology',
      institutionalDesc: 'HelpUS Technology Solutions is dedicated to custom software development, web/mobile platforms, and digital ecosystem governance, unifying support and engineering.',
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
          'Full-Stack Software Engineering (React, Node.js, Python, PostgreSQL)',
          'Secure RESTful & GraphQL API Architecture',
          'Automated Cloud Deployment (Vercel, AWS, Railway)',
          'Custom Design System & High Performance UX/UI'
        ],
        detailsContent: 'HelpUS Software Development designs and builds custom software solutions for businesses of all sizes, from relational database design to full web & mobile apps with CI/CD.',
        targetAudience: 'Businesses, startups, and founders needing robust, scalable digital systems.'
      },
      'nexosai': {
        name: 'Nexos AI',
        subtitle: 'Artificial Intelligence & Autonomous Agents',
        description: 'Advanced AI platform for building autonomous virtual agents, business process automation, and WhatsApp/Webchat integrations.',
        features: [
          'AI Agents Trained on Business Knowledge Base',
          '24/7 Automated Customer Assistance',
          'Official WhatsApp Business API Integration',
          'Automatic Lead Qualification & Scheduling'
        ],
        detailsContent: 'Nexos AI enables businesses to create intelligent virtual agents capable of answering complex inquiries and booking meetings autonomously.',
        targetAudience: 'Sales, support, and customer success teams looking to scale without ballooning costs.'
      },
      'usmle': {
        name: 'USMLE Prep',
        subtitle: 'International Medical Exam Prep Platform',
        description: 'Specialized study and interactive question bank platform for physicians and medical students preparing for the USMLE in the USA.',
        features: [
          'Updated Question Bank with Clinical Rationales',
          'Real Exam Simulation Interface',
          'Performance Analytics by Medical Specialty',
          'Spaced Repetition Medical Flashcards'
        ],
        detailsContent: 'USMLE Prep offers an immersive environment with statistical evolution reports to help international physicians achieve medical licensing in the USA.',
        targetAudience: 'Doctors and medical students pursuing US medical licensing.'
      },
      'saude': {
        name: 'Saúde',
        subtitle: 'Telemedicine & Integrated Healthcare Management',
        description: 'Complete system for medical clinics and healthcare providers. Features online appointment booking, EHR, and secure telemedicine.',
        features: [
          'Encrypted Electronic Health Records (EHR)',
          'In-Person & Online Appointment Booking',
          'Secure HD Telemedicine Suite',
          'Digital Prescriptions & Lab Order Issuance'
        ],
        detailsContent: 'HelpUS Saúde digitizes clinical operations from online booking to encrypted remote consultations and digital prescriptions.',
        targetAudience: 'Medical clinics, private practices, and independent healthcare providers.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Executive Mobility & VIP Transport',
        description: 'Digital platform for executive transport booking, VIP transfers, private rides, and corporate travel management.',
        features: [
          'Advance VIP Transfer & Ride Scheduling',
          'Real-Time Monitored Executive Fleet',
          'Centralized Monthly Corporate Billing',
          'Exclusive Assistance for Executives & Events'
        ],
        detailsContent: 'Corporate mobility platform for airport pickups, VIP event transfers, and intercity travel with complete comfort and punctuality.',
        targetAudience: 'Executives, corporate teams, hotels, and VIP passengers.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Ordering & Management Platform for Pizzerias',
        description: 'Complete delivery and management software for pizzerias. Features digital QR menu, table ordering, and delivery tracking.',
        features: [
          'Interactive Digital QR Code Menu',
          'Half-and-Half Pizza Customizer',
          'Kitchen Display System (KDS)',
          'Courier Dispatching & Delivery Tracking'
        ],
        detailsContent: 'Gastronomy management system modernizing pizzerias by streamlining fractional flavor orders and kitchen workflows.',
        targetAudience: 'Pizzerias, restaurants, burger joints, and food delivery businesses.'
      },
      'jobs': {
        name: 'Jobs',
        subtitle: 'Multilingual Employment Marketplace',
        description: 'Global multilingual platform connecting workers, recruiters, and employment opportunities with a focus on international careers.',
        features: [
          'Multilingual Global Job Search',
          'AI-Powered Candidate Matching',
          'Standardized Resumes & Skill Verification',
          'Recruiter ATS Pipeline Dashboard'
        ],
        detailsContent: 'Connects talent with hiring companies worldwide with automated resume translation and skill matching.',
        targetAudience: 'Job seekers and recruiters hiring local and remote talent.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Visa, Passport & Immigration Assistance',
        description: 'Platform for checking and tracking visa applications, immigration processes, passport scheduling, and international documentation.',
        features: [
          'Smart Consular Document Checklist',
          'Form Filling Guidance (DS-160 and more)',
          'Consular Appointment Monitoring',
          'Direct Expert Immigration Advisory'
        ],
        detailsContent: 'Simplifies visa bureaucracy with automatic document checklists and consular stage tracking.',
        targetAudience: 'Travelers, students, and immigrants relocating to the US, Europe, and worldwide.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Legacy Preservation, Biographies & Life Stories',
        description: 'Heartfelt digital platform for recording, organizing, and preserving family life stories, biographical archives, and memories.',
        features: [
          'Interactive Biographical Timeline',
          'Digital Archive for Photos, Videos & Audio Statements',
          'Virtual Family Biography Books',
          'Private & Secure Access for Future Generations'
        ],
        detailsContent: 'A dedicated digital archive for families to record life stories, oral histories, and family legacies for generations to come.',
        targetAudience: 'Families, biographers, and individuals preserving personal histories.'
      },
      'brayyan': {
        name: 'Brayyan',
        subtitle: 'Personal Branding & Solutions Portfolio',
        description: 'Executive presentation portfolio and personal branding advisory for founders, executives, and special brand projects.',
        features: [
          'High-Impact Executive Portfolio Design',
          'Brand Positioning & Digital Presence Strategy',
          'Special Projects & Investment Showcase',
          'Direct Business Development Advisory'
        ],
        detailsContent: 'Tailored executive brand positioning and digital strategy for corporate leaders, investors, and founders.',
        targetAudience: 'Executives, founders, consultants, and leaders needing a refined digital presence.'
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
      subtitle: 'Conozca el catálogo completo de aplicaciones, sistemas e ingeniería de software desarrollados y gestionados directamente por HelpUS.',
      exploreBtn: 'Explorar Soluciones'
    },
    catalog: {
      title: 'Soluciones Organizadas por Categoría',
      subtitle: 'Haga clic en "Experimente Ahora" en cualquier solución para abrir los detalles y capturas antes de ir a la aplicación real.',
      tryNow: 'Experimente Ahora',
      partnerBannerTitle: 'Red de Socios Próximamente',
      partnerBannerDesc: 'Actualmente mostramos las aplicaciones propias de HelpUS. Próximamente abriremos espacio para socios homologados.'
    },
    detailsModal: {
      overview: 'Visión General y Capturas del Sistema',
      keyFeatures: 'Aspectos Destacados y Capacidades Técnicas',
      subdomain: 'Dirección Web Oficial:',
      launchRealApp: 'Ir a la Aplicación Real 🚀',
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
          'Ingeniería de Software Full-Stack (React, Node.js, Python, PostgreSQL)',
          'Arquitectura de APIs RESTful y GraphQL Seguras',
          'Despliegue Automatizado en la Nube (Vercel, AWS, Railway)',
          'Diseño de Experiencia de Usuario (UX/UI) de Alto Rendimiento'
        ],
        detailsContent: 'El servicio de Desarrollo de Software de HelpUS diseña y construye soluciones digitales personalizadas para empresas de todos los tamaños.',
        targetAudience: 'Empresas, startups y emprendedores que necesitan sistemas digitales sólidos y escalables.'
      },
      'nexosai': {
        name: 'Nexos AI',
        subtitle: 'Inteligencia Artificial y Agentes Autónomos',
        description: 'Plataforma avanzada de IA para la creación de agentes virtuales autónomos, automatización de procesos e integración con WhatsApp.',
        features: [
          'Agentes de IA Entrenados con Datos Empresariales',
          'Atención Automatizada 24/7',
          'Integración Oficial con WhatsApp Business API',
          'Cualificación Automática de Clientes'
        ],
        detailsContent: 'Cree asistentes virtuales inteligentes entrenados con la base de conocimientos de su empresa para atención automatizada.',
        targetAudience: 'Equipos de ventas y atención que desean escalar operaciones sin aumentar costos.'
      },
      'usmle': {
        name: 'USMLE Prep',
        subtitle: 'Plataforma Médica Internacional y Examen USMLE',
        description: 'Plataforma especializada de estudios y simulados interactivos para médicos y estudiantes preparándose para el examen USMLE en EE. UU.',
        features: [
          'Banco de Preguntas Actualizado con Justificaciones Clínicas',
          'Simulación de Examen en Formato Real',
          'Reportes de Rendimiento Estadístico',
          'Flashcards de Repetición Espaciada'
        ],
        detailsContent: 'Incluye banco de preguntas actualizado, métricas de rendimiento y recursos de aprendizaje para la revalidación médica en EE. UU.',
        targetAudience: 'Médicos y estudiantes preparando la revalidación médica en EE. UU.'
      },
      'saude': {
        name: 'Saúde',
        subtitle: 'Telemedicina y Gestión Integrada de Salud',
        description: 'Sistema completo para clínicas y profesionales de la salud. Ofrece reserva de citas online, historia clínica electrónica y telemedicina.',
        features: [
          'Historia Clínica Electrónica Encriptada',
          'Reserva de Citas Presenciales y Online',
          'Sala de Telemedicina HD Segura',
          'Emisión Digital de Recetas y Exámenes'
        ],
        detailsContent: 'Software clínico completo con agenda online, expediente digital encriptado y consultas virtuales seguras.',
        targetAudience: 'Clínicas médicas, consultorios privados y profesionales de la salud.'
      },
      'wagnerdriver-site': {
        name: 'Executive Driver',
        subtitle: 'Movilidad Ejecutiva y Transporte VIP',
        description: 'Solución digital para reserva de transporte ejecutivo, transfer VIP, viajes privados y gestión de viajes corporativos.',
        features: [
          'Reserva Anticipada de Viajes VIP',
          'Flota Ejecutiva Monitoreada en Tiempo Real',
          'Facturación Corporativa Mensual Centralizada',
          'Atención Exclusiva para Ejecutivos'
        ],
        detailsContent: 'Gestione reservas VIP de vehículos ejecutivos, control de itinerarios y traslados corporativos en tiempo real.',
        targetAudience: 'Ejecutivos, empresas, hoteles y pasajeros VIP.'
      },
      'pizza': {
        name: 'Pizza & Delivery',
        subtitle: 'Gestión y Pedidos Online para Pizzerías',
        description: 'Plataforma completa de delivery y gestión para pizzerías. Incluye menú digital interactivo, pedidos en mesa y gestión de delivery.',
        features: [
          'Menú Digital Interactivo mediante Código QR',
          'Personalizador de Sabores Mitad y Mitad',
          'Sistema de Pantalla de Cocina (KDS)',
          'Gestión y Seguimiento de Repartidores'
        ],
        detailsContent: 'Sistema de gestión gastronómica con menú QR, personalizador interactivo de sabores y gestión de repartidores.',
        targetAudience: 'Pizzerías, restaurantes y negocios de comida a domicilio.'
      },
      'jobs': {
        name: 'Jobs',
        subtitle: 'Marketplace Multilingüe de Empleos',
        description: 'Plataforma global multilingüe para conectar trabajadores, reclutadores y oportunidades laborales internacionales.',
        features: [
          'Búsqueda Multilingüe de Empleos Globales',
          'Match Inteligente Candidato-Vacante',
          'Curriculum Estandarizado y Verificación',
          'Panel de Gestión de Procesos de Selección'
        ],
        detailsContent: 'Conecta a profesionales con empleo internacional y local mediante algoritmos avanzados de coincidencia.',
        targetAudience: 'Buscadores de empleo y reclutadores contratando talento local y remoto.'
      },
      'visa': {
        name: 'Visa & Imigração',
        subtitle: 'Asesoría de Visados, Pasaportes y Procesos',
        description: 'Plataforma de consulta y seguimiento de trámites de visados, inmigración, pasaportes y documentación internacional.',
        features: [
          'Checklist Inteligente de Documentación Consular',
          'Guía para Cumplimentar Formularios (DS-160)',
          'Monitoreo de Citas Consulares',
          'Asesoría Directa de Expertos'
        ],
        detailsContent: 'Portal de asesoría de inmigración con guías de documentación y seguimiento de citas consulares.',
        targetAudience: 'Viajeros, estudiantes e inmigrantes con destino a EE. UU. y Europa.'
      },
      'memoria-viva': {
        name: 'Memória Viva',
        subtitle: 'Preservación de Legado, Biografias e Historias',
        description: 'Plataforma digital afectiva para registrar, organizar y preservar historias de vida familiares, biografías y recuerdos.',
        features: [
          'Línea de Tiempo Biográfica Interactiva',
          'Archivo Digital de Fotos, Videos y Audio',
          'Libros Virtuales de Biografía Familiar',
          'Acceso Privado y Seguro'
        ],
        detailsContent: 'Espacio dedicado a conservar memorias familiares, audios históricos y libros de biografías para futuras generaciones.',
        targetAudience: 'Familias y personas interesadas en preservar su historia personal.'
      },
      'brayyan': {
        name: 'Brayyan',
        subtitle: 'Branding Personal y Portafolio de Soluciones',
        description: 'Portafolio de presentación ejecutiva y consultoría de branding personal para fundadores y proyectos especiales.',
        features: [
          'Diseño de Portafolio Ejecutivo de Alto Impacto',
          'Estrategia de Posicionamiento y Presencia Digital',
          'Presentación de Proyectos Especiales',
          'Consultoría Directa de Desarrollo de Negocios'
        ],
        detailsContent: 'Solución personalizada de marca ejecutiva y consultoría de negocios para líderes y emprendedores.',
        targetAudience: 'Ejecutivos, fundadores y consultores que requieren presencia digital de alto nivel.'
      }
    }
  }
};

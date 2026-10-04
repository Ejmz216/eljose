// All visible text of the site, in English (default), Spanish and Italian.
// Every language has the same shape. Wrap words in **double asterisks** to make them bold.
// Proper names (companies, official job titles, publication titles, citations) stay untranslated.

export const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "it", label: "IT", name: "Italiano" },
];

export const DEFAULT_LANGUAGE = "en";

const en = {
  meta: {
    description:
      "Elmer José Muñoz: IT Business Analyst working across banking, payments (ISO 20022), data and user-centered design.",
  },
  nav: {
    experience: "Experience",
    skills: "Skills",
    publications: "Publications",
    volunteering: "Volunteering",
    projects: "Projects",
    primary: "Primary navigation",
  },
  ui: {
    openNav: "Open navigation",
    closeNav: "Close navigation",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    language: "Language",
    backToTop: "Back to top",
    current: "Current",
    fullExperience: "Full experience",
    getInTouch: ["Want to get", "in touch?"],
    emailMe: "Email me",
    inProgress: "In progress",
    codeOnGithub: "Code on GitHub",
    viewCredential: "View credential",
    email: "Email",
    profile: "Profile",
  },
  hero: {
    now: "Now at Scotiabank · ScotiaTech",
    role: "IT Business Analyst",
    engineer: "Electronic & Telecommunications Engineer",
  },
  labels: {
    experience: "Experience",
    about: "About",
    skills: "Technical & professional skills",
    education: "Education",
    certifications: "Certifications",
    languages: "Languages · CEFR",
  },
  sections: {
    experience: "Professional Experience",
    skillsEducation: "Skills & Education",
    publications: "Research & Publications",
    volunteering: "Leadership & Volunteering",
    principles: "What I Bring",
  },
  about: {
    lead:
      "Business Analyst and engineer with 3+ years of experience where business processes, data, software and user-centered design meet.",
    body:
      "At **Scotiabank (ScotiaTech)** I analyze requirements for payment systems, financial messaging and business-critical banking platforms, including **ISO 20022**. In **SaaS/BPO** environments I have built analytics, QA automation and decision-support tools with **Python** and **SQL**. My background in Human-Computer Interaction keeps the user in view.",
  },
  timeline: {
    scotiabank: {
      period: "June 2026 - Present",
      summary:
        "Requirements and impact analysis for banking technology: payment systems, financial messaging and ISO 20022.",
    },
    bpo: {
      period: "May 2023 - Present",
      summary:
        "Data requirements, QA automation and analytics features for a SaaS platform serving BPO operations.",
    },
    idis: {
      company: "IDIS Research Group",
      role: "Undergraduate Researcher · HCI",
      period: "2022 - 2023",
      summary: "User experience research on web chatbots, presented at JIHCI 2023 in Buenos Aires.",
    },
  },
  projects: {
    paymentLab: { description: "ISO 20022 & payments learning space" },
    next: { title: "Next project", description: "Coming soon" },
  },
  jobs: {
    scotiabank: {
      period: "June 2026 - Present",
      highlights: [
        "Analyze **business, functional and system requirements** for technology initiatives, translating operational and financial-process needs into structured specifications for technical teams.",
        "Work with **business, technology and operations** stakeholders to define requirements, validate proposed solutions, and assess dependencies and impacts across interconnected processes and systems.",
        "Support initiatives involving **payment systems** and **financial messaging**: transaction flows, business rules, message structures and integration requirements, including **ISO 20022**.",
        "Analyze **end-to-end processes** to find functional gaps, inconsistencies, dependencies and improvement opportunities before a solution is implemented.",
        "Help define and validate **business-critical** solutions where data accuracy, traceability, interoperability and operational continuity matter most.",
      ],
      tags: ["ISO 20022", "Payment systems", "Financial messaging", "Requirements", "Impact analysis"],
    },
    bpo: {
      period: "May 2023 - Present",
      location: "Remote, Colombia",
      highlights: [
        "Collaborated with development teams to define **data requirements**, **schemas**, **validation rules**, and analytical reporting needs for operational products.",
        "Served as a **technical bridge** between software teams and business stakeholders, translating operational needs into user stories, acceptance criteria, backlog items, and measurable process improvements.",
        "Designed and maintained **Python** and **SQL** data pipelines for report automation and validation workflows, reducing manual work from more than four hours to less than thirty minutes.",
        "Cleaned, validated, and transformed structured operational datasets used for **QA metrics**, performance analysis, and monitoring routines.",
        "Performed **SQL validations** and consistency checks across relational databases to support incident resolution, analytical reviews, and system verification.",
        "Supported **Agile delivery** through Scrum and Kanban practices for technical backlogs related to data flows, analytical features, QA automation, and system improvements.",
      ],
      tags: ["Python", "SQL", "QA automation", "Analytics", "Scrum / Kanban"],
    },
  },
  skills: {
    business: {
      title: "Business & Product",
      items: [
        "Business Analysis",
        "Requirements Engineering",
        "Functional Analysis",
        "Functional Documentation",
        "Product Requirements",
        "Stakeholder Management",
        "UAT & Functional Validation",
      ],
    },
    banking: {
      title: "Banking & Financial Systems",
      items: [
        "Payment Systems",
        "Transaction Flows",
        "Financial Messaging",
        "ISO 20022",
        "Business Rules Analysis",
        "System & Process Impact Analysis",
      ],
    },
    process: {
      title: "Process & Delivery",
      items: ["Process Improvement", "Process Mapping", "Agile Delivery", "Scrum", "Kanban", "SDLC", "Lean Six Sigma"],
    },
    data: {
      title: "Data & Technology",
      items: ["Python", "SQL / MySQL", "Data Analysis", "Data Validation", "ETL & Data Pipelines", "API Testing"],
    },
    tools: {
      title: "Tools",
      items: ["Jira", "ClickUp", "Postman", "Git / GitHub", "Figma", "Microsoft Office"],
    },
  },
  principles: {
    business: { area: "Business", value: "Clarity" },
    data: { area: "Data", value: "Evidence" },
    payments: { area: "Payments", value: "Traceability" },
    process: { area: "Process", value: "Flow" },
    people: { area: "People", value: "Empathy" },
    software: { area: "Software", value: "Craft" },
  },
  certifications: {
    ielts: { detail: "Overall Band 7.5 (C1)" },
    leanSixSigma: { detail: "Yellow Belt" },
  },
  languages: {
    names: { es: "Spanish", en: "English", pt: "Portuguese" },
    skills: { listening: "Listening", reading: "Reading", speaking: "Speaking", writing: "Writing" },
    native: "Native",
  },
  education: {
    degree: "Electronic and Telecommunications Engineering",
    emphasis: "Telematics & Project Management emphasis",
    research: "IDIS Research Group · HCI",
    emblemAlt: "Universidad del Cauca emblem",
    body:
      "Engineering background in **information and communication technologies**, including **software analysis**, **databases**, **networks**, computing, and telecommunications systems, with an emphasis on **Human-Computer Interaction (HCI)**: user experience, digital behavior and user-centered design.",
  },
  publications: {
    chatbots: {
      venue: "Presented at the IX Iberoamerican Conference on Human Computer Interaction (JIHCI 2023).",
      description:
        "This research analyzes user experience in web-based chatbot interactions through a case study in the Colombian context. It evaluates usability, user perception, and interaction quality to identify improvement opportunities in conversational systems.",
    },
    petlify: {
      venue: "Published in CEUR Workshop Proceedings.",
      description:
        "This work presents the design and prototyping of an integrated hardware-software solution aimed at reducing nomophobia in educational and work environments. The solution combines a mobile application with a physical device to promote more conscious and controlled technology usage.",
    },
  },
  volunteering: {
    lcoy: {
      title: "LCOY Colombia · Logistics & Methodology Team",
      period: "October 2025 - November 2025",
      body:
        "Supported operational coordination, team logistics, and methodology activities for a youth climate conference, helping align participants, working sessions, and organizational needs.",
      photosLabel: "LCOY photos",
      photos: [
        "LCOY Colombia group gathering",
        "LCOY Colombia methodology activity",
        "LCOY Colombia youth climate activity",
      ],
    },
    ieee: {
      period: "June 2020 - August 2022",
      body:
        "Participated in scientific outreach and educational activities for schools and children, supporting initiatives that made engineering and science more accessible to younger audiences.",
    },
  },
  footer: {
    updated: "Updated October 2026",
    starWars: "May the data be with you.",
  },
};

const es = {
  meta: {
    description:
      "Elmer José Muñoz: IT Business Analyst en banca, pagos (ISO 20022), datos y diseño centrado en el usuario.",
  },
  nav: {
    experience: "Experiencia",
    skills: "Habilidades",
    publications: "Publicaciones",
    volunteering: "Voluntariado",
    projects: "Proyectos",
    primary: "Navegación principal",
  },
  ui: {
    openNav: "Abrir menú",
    closeNav: "Cerrar menú",
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
    language: "Idioma",
    backToTop: "Volver arriba",
    current: "Actual",
    fullExperience: "Ver experiencia completa",
    getInTouch: ["¿Quieres", "escribirme?"],
    emailMe: "Escríbeme",
    inProgress: "En progreso",
    codeOnGithub: "Código en GitHub",
    viewCredential: "Ver credencial",
    email: "Correo",
    profile: "Perfil",
  },
  hero: {
    now: "Actualmente en Scotiabank · ScotiaTech",
    role: "IT Business Analyst",
    engineer: "Ingeniero en Electrónica y Telecomunicaciones",
  },
  labels: {
    experience: "Experiencia",
    about: "Sobre mí",
    skills: "Habilidades técnicas y profesionales",
    education: "Formación",
    certifications: "Certificaciones",
    languages: "Idiomas · MCER",
  },
  sections: {
    experience: "Experiencia profesional",
    skillsEducation: "Habilidades y formación",
    publications: "Investigación y publicaciones",
    volunteering: "Liderazgo y voluntariado",
    principles: "Lo que aporto",
  },
  about: {
    lead:
      "Analista de negocio e ingeniero con más de 3 años de experiencia donde se encuentran los procesos de negocio, los datos, el software y el diseño centrado en el usuario.",
    body:
      "En **Scotiabank (ScotiaTech)** analizo requerimientos de sistemas de pago, mensajería financiera y plataformas bancarias críticas para el negocio, incluido **ISO 20022**. En entornos **SaaS/BPO** he construido analítica, automatización de QA y herramientas de apoyo a la decisión con **Python** y **SQL**. Mi formación en Interacción Humano-Computador me ayuda a no perder de vista al usuario.",
  },
  timeline: {
    scotiabank: {
      period: "Junio 2026 - Actualidad",
      summary:
        "Análisis de requerimientos e impacto para tecnología bancaria: sistemas de pago, mensajería financiera e ISO 20022.",
    },
    bpo: {
      period: "Mayo 2023 - Actualidad",
      summary:
        "Requerimientos de datos, automatización de QA y funcionalidades analíticas para una plataforma SaaS al servicio de operaciones BPO.",
    },
    idis: {
      company: "Grupo de Investigación IDIS",
      role: "Investigador de pregrado · HCI",
      period: "2022 - 2023",
      summary:
        "Investigación en experiencia de usuario de chatbots web, presentada en JIHCI 2023 en Buenos Aires.",
    },
  },
  projects: {
    paymentLab: { description: "Espacio para aprender ISO 20022 y pagos" },
    next: { title: "Próximo proyecto", description: "Muy pronto" },
  },
  jobs: {
    scotiabank: {
      period: "Junio 2026 - Actualidad",
      highlights: [
        "Analizo **requerimientos de negocio, funcionales y de sistema** para iniciativas tecnológicas, traduciendo necesidades operativas y de procesos financieros en especificaciones estructuradas para los equipos técnicos.",
        "Trabajo con stakeholders de **negocio, tecnología y operaciones** para definir requerimientos, validar las soluciones propuestas y evaluar dependencias e impactos entre procesos y sistemas interconectados.",
        "Apoyo iniciativas de **sistemas de pago** y **mensajería financiera**: flujos transaccionales, reglas de negocio, estructuras de mensajes y requerimientos de integración, incluido **ISO 20022**.",
        "Analizo **procesos de punta a punta** para identificar brechas funcionales, inconsistencias, dependencias y oportunidades de mejora antes de implementar una solución.",
        "Ayudo a definir y validar soluciones **críticas para el negocio**, donde la exactitud de los datos, la trazabilidad, la interoperabilidad y la continuidad operativa son lo más importante.",
      ],
      tags: ["ISO 20022", "Sistemas de pago", "Mensajería financiera", "Requerimientos", "Análisis de impacto"],
    },
    bpo: {
      period: "Mayo 2023 - Actualidad",
      location: "Remoto, Colombia",
      highlights: [
        "Colaboré con los equipos de desarrollo para definir **requerimientos de datos**, **esquemas**, **reglas de validación** y necesidades de reportes analíticos para productos operativos.",
        "Fui el **puente técnico** entre los equipos de software y los stakeholders de negocio, traduciendo necesidades operativas en historias de usuario, criterios de aceptación, elementos del backlog y mejoras de proceso medibles.",
        "Diseñé y mantuve pipelines de datos en **Python** y **SQL** para automatizar reportes y flujos de validación, reduciendo el trabajo manual de más de cuatro horas a menos de treinta minutos.",
        "Limpié, validé y transformé datasets operativos estructurados usados para **métricas de QA**, análisis de desempeño y rutinas de monitoreo.",
        "Realicé **validaciones SQL** y controles de consistencia en bases de datos relacionales para apoyar la resolución de incidentes, revisiones analíticas y la verificación de sistemas.",
        "Apoyé la **entrega ágil** con prácticas Scrum y Kanban en backlogs técnicos de flujos de datos, funcionalidades analíticas, automatización de QA y mejoras de sistemas.",
      ],
      tags: ["Python", "SQL", "Automatización de QA", "Analítica", "Scrum / Kanban"],
    },
  },
  skills: {
    business: {
      title: "Negocio y producto",
      items: [
        "Análisis de negocio",
        "Ingeniería de requerimientos",
        "Análisis funcional",
        "Documentación funcional",
        "Requerimientos de producto",
        "Gestión de stakeholders",
        "UAT y validación funcional",
      ],
    },
    banking: {
      title: "Banca y sistemas financieros",
      items: [
        "Sistemas de pago",
        "Flujos transaccionales",
        "Mensajería financiera",
        "ISO 20022",
        "Análisis de reglas de negocio",
        "Análisis de impacto en sistemas y procesos",
      ],
    },
    process: {
      title: "Procesos y entrega",
      items: ["Mejora de procesos", "Mapeo de procesos", "Entrega ágil", "Scrum", "Kanban", "SDLC", "Lean Six Sigma"],
    },
    data: {
      title: "Datos y tecnología",
      items: ["Python", "SQL / MySQL", "Análisis de datos", "Validación de datos", "ETL y pipelines de datos", "Pruebas de API"],
    },
    tools: {
      title: "Herramientas",
      items: ["Jira", "ClickUp", "Postman", "Git / GitHub", "Figma", "Microsoft Office"],
    },
  },
  principles: {
    business: { area: "Negocio", value: "Claridad" },
    data: { area: "Datos", value: "Evidencia" },
    payments: { area: "Pagos", value: "Trazabilidad" },
    process: { area: "Procesos", value: "Flujo" },
    people: { area: "Personas", value: "Empatía" },
    software: { area: "Software", value: "Oficio" },
  },
  certifications: {
    ielts: { detail: "Puntaje global 7.5 (C1)" },
    leanSixSigma: { detail: "Yellow Belt" },
  },
  languages: {
    names: { es: "Español", en: "Inglés", pt: "Portugués" },
    skills: { listening: "Escucha", reading: "Lectura", speaking: "Conversación", writing: "Escritura" },
    native: "Nativo",
  },
  education: {
    degree: "Ingeniería Electrónica y Telecomunicaciones",
    emphasis: "Énfasis en Telemática y Gestión de Proyectos",
    research: "Grupo de Investigación IDIS · HCI",
    emblemAlt: "Escudo de la Universidad del Cauca",
    body:
      "Formación en ingeniería en **tecnologías de la información y las comunicaciones**, incluyendo **análisis de software**, **bases de datos**, **redes**, computación y sistemas de telecomunicaciones, con énfasis en **Interacción Humano-Computador (HCI)**: experiencia de usuario, comportamiento digital y diseño centrado en el usuario.",
  },
  publications: {
    chatbots: {
      venue: "Presentado en la IX Conferencia Iberoamericana de Interacción Humano-Computador (JIHCI 2023).",
      description:
        "Esta investigación analiza la experiencia de usuario en interacciones con chatbots web mediante un caso de estudio en el contexto colombiano. Evalúa la usabilidad, la percepción de los usuarios y la calidad de la interacción para identificar oportunidades de mejora en sistemas conversacionales.",
    },
    petlify: {
      venue: "Publicado en CEUR Workshop Proceedings.",
      description:
        "Este trabajo presenta el diseño y prototipado de una solución integrada de hardware y software para reducir la nomofobia en entornos educativos y laborales. Combina una aplicación móvil con un dispositivo físico para promover un uso de la tecnología más consciente y controlado.",
    },
  },
  volunteering: {
    lcoy: {
      title: "LCOY Colombia · Equipo de Logística y Metodología",
      period: "Octubre 2025 - Noviembre 2025",
      body:
        "Apoyé la coordinación operativa, la logística del equipo y las actividades de metodología de una conferencia juvenil sobre el clima, ayudando a articular participantes, sesiones de trabajo y necesidades organizativas.",
      photosLabel: "Fotos de LCOY",
      photos: [
        "Encuentro grupal de LCOY Colombia",
        "Actividad de metodología en LCOY Colombia",
        "Actividad juvenil por el clima en LCOY Colombia",
      ],
    },
    ieee: {
      period: "Junio 2020 - Agosto 2022",
      body:
        "Participé en actividades de divulgación científica y educativas para colegios y niños, apoyando iniciativas que acercaron la ingeniería y la ciencia a públicos más jóvenes.",
    },
  },
  footer: {
    updated: "Actualizado en octubre de 2026",
    starWars: "Que los datos te acompañen.",
  },
};

const it = {
  meta: {
    description:
      "Elmer José Muñoz: IT Business Analyst tra banca, pagamenti (ISO 20022), dati e design centrato sull'utente.",
  },
  nav: {
    experience: "Esperienza",
    skills: "Competenze",
    publications: "Pubblicazioni",
    volunteering: "Volontariato",
    projects: "Progetti",
    primary: "Navigazione principale",
  },
  ui: {
    openNav: "Apri menu",
    closeNav: "Chiudi menu",
    toLight: "Passa al tema chiaro",
    toDark: "Passa al tema scuro",
    lightMode: "Tema chiaro",
    darkMode: "Tema scuro",
    language: "Lingua",
    backToTop: "Torna su",
    current: "Attuale",
    fullExperience: "Esperienza completa",
    getInTouch: ["Vuoi", "scrivermi?"],
    emailMe: "Scrivimi",
    inProgress: "In corso",
    codeOnGithub: "Codice su GitHub",
    viewCredential: "Vedi certificato",
    email: "Email",
    profile: "Profilo",
  },
  hero: {
    now: "Attualmente in Scotiabank · ScotiaTech",
    role: "IT Business Analyst",
    engineer: "Ingegnere Elettronico e delle Telecomunicazioni",
  },
  labels: {
    experience: "Esperienza",
    about: "Chi sono",
    skills: "Competenze tecniche e professionali",
    education: "Formazione",
    certifications: "Certificazioni",
    languages: "Lingue · QCER",
  },
  sections: {
    experience: "Esperienza professionale",
    skillsEducation: "Competenze e formazione",
    publications: "Ricerca e pubblicazioni",
    volunteering: "Leadership e volontariato",
    principles: "Cosa offro",
  },
  about: {
    lead:
      "Business Analyst e ingegnere con oltre 3 anni di esperienza dove si incontrano processi di business, dati, software e design centrato sull'utente.",
    body:
      "In **Scotiabank (ScotiaTech)** analizzo i requisiti di sistemi di pagamento, messaggistica finanziaria e piattaforme bancarie business-critical, incluso **ISO 20022**. In contesti **SaaS/BPO** ho realizzato analytics, automazione QA e strumenti di supporto alle decisioni con **Python** e **SQL**. Il mio background in Interazione Uomo-Macchina mi aiuta a non perdere di vista l'utente.",
  },
  timeline: {
    scotiabank: {
      period: "Giugno 2026 - Oggi",
      summary:
        "Analisi dei requisiti e d'impatto per la tecnologia bancaria: sistemi di pagamento, messaggistica finanziaria e ISO 20022.",
    },
    bpo: {
      period: "Maggio 2023 - Oggi",
      summary:
        "Requisiti dei dati, automazione QA e funzionalità di analytics per una piattaforma SaaS al servizio di operazioni BPO.",
    },
    idis: {
      company: "Gruppo di ricerca IDIS",
      role: "Ricercatore universitario · HCI",
      period: "2022 - 2023",
      summary: "Ricerca sull'esperienza utente dei chatbot web, presentata a JIHCI 2023 a Buenos Aires.",
    },
  },
  projects: {
    paymentLab: { description: "Spazio per imparare ISO 20022 e i pagamenti" },
    next: { title: "Prossimo progetto", description: "In arrivo" },
  },
  jobs: {
    scotiabank: {
      period: "Giugno 2026 - Oggi",
      highlights: [
        "Analizzo **requisiti di business, funzionali e di sistema** per iniziative tecnologiche, traducendo le esigenze operative e dei processi finanziari in specifiche strutturate per i team tecnici.",
        "Collaboro con gli stakeholder di **business, tecnologia e operations** per definire i requisiti, validare le soluzioni proposte e valutare dipendenze e impatti tra processi e sistemi interconnessi.",
        "Supporto iniziative su **sistemi di pagamento** e **messaggistica finanziaria**: flussi transazionali, regole di business, strutture dei messaggi e requisiti di integrazione, incluso **ISO 20022**.",
        "Analizzo i **processi end-to-end** per individuare gap funzionali, incoerenze, dipendenze e opportunità di miglioramento prima dell'implementazione di una soluzione.",
        "Contribuisco a definire e validare soluzioni **business-critical**, dove accuratezza dei dati, tracciabilità, interoperabilità e continuità operativa sono fondamentali.",
      ],
      tags: ["ISO 20022", "Sistemi di pagamento", "Messaggistica finanziaria", "Requisiti", "Analisi d'impatto"],
    },
    bpo: {
      period: "Maggio 2023 - Oggi",
      location: "Da remoto, Colombia",
      highlights: [
        "Ho collaborato con i team di sviluppo per definire **requisiti dei dati**, **schemi**, **regole di validazione** ed esigenze di reportistica analitica per prodotti operativi.",
        "Ho fatto da **ponte tecnico** tra i team software e gli stakeholder di business, traducendo le esigenze operative in user story, criteri di accettazione, elementi di backlog e miglioramenti di processo misurabili.",
        "Ho progettato e mantenuto pipeline di dati in **Python** e **SQL** per l'automazione dei report e dei flussi di validazione, riducendo il lavoro manuale da oltre quattro ore a meno di trenta minuti.",
        "Ho pulito, validato e trasformato dataset operativi strutturati usati per **metriche di QA**, analisi delle prestazioni e attività di monitoraggio.",
        "Ho eseguito **validazioni SQL** e controlli di coerenza su database relazionali a supporto della risoluzione degli incidenti, delle analisi e della verifica dei sistemi.",
        "Ho supportato la **delivery Agile** con pratiche Scrum e Kanban per backlog tecnici su flussi di dati, funzionalità analitiche, automazione QA e miglioramenti di sistema.",
      ],
      tags: ["Python", "SQL", "Automazione QA", "Analytics", "Scrum / Kanban"],
    },
  },
  skills: {
    business: {
      title: "Business e prodotto",
      items: [
        "Business Analysis",
        "Ingegneria dei requisiti",
        "Analisi funzionale",
        "Documentazione funzionale",
        "Requisiti di prodotto",
        "Gestione degli stakeholder",
        "UAT e validazione funzionale",
      ],
    },
    banking: {
      title: "Banca e sistemi finanziari",
      items: [
        "Sistemi di pagamento",
        "Flussi transazionali",
        "Messaggistica finanziaria",
        "ISO 20022",
        "Analisi delle regole di business",
        "Analisi d'impatto su sistemi e processi",
      ],
    },
    process: {
      title: "Processi e delivery",
      items: [
        "Miglioramento dei processi",
        "Mappatura dei processi",
        "Delivery Agile",
        "Scrum",
        "Kanban",
        "SDLC",
        "Lean Six Sigma",
      ],
    },
    data: {
      title: "Dati e tecnologia",
      items: ["Python", "SQL / MySQL", "Analisi dei dati", "Validazione dei dati", "ETL e pipeline di dati", "Test di API"],
    },
    tools: {
      title: "Strumenti",
      items: ["Jira", "ClickUp", "Postman", "Git / GitHub", "Figma", "Microsoft Office"],
    },
  },
  principles: {
    business: { area: "Business", value: "Chiarezza" },
    data: { area: "Dati", value: "Evidenza" },
    payments: { area: "Pagamenti", value: "Tracciabilità" },
    process: { area: "Processi", value: "Flusso" },
    people: { area: "Persone", value: "Empatia" },
    software: { area: "Software", value: "Cura" },
  },
  certifications: {
    ielts: { detail: "Punteggio complessivo 7.5 (C1)" },
    leanSixSigma: { detail: "Yellow Belt" },
  },
  languages: {
    names: { es: "Spagnolo", en: "Inglese", pt: "Portoghese" },
    skills: { listening: "Ascolto", reading: "Lettura", speaking: "Parlato", writing: "Scrittura" },
    native: "Madrelingua",
  },
  education: {
    degree: "Ingegneria Elettronica e delle Telecomunicazioni",
    emphasis: "Indirizzo in Telematica e Project Management",
    research: "Gruppo di ricerca IDIS · HCI",
    emblemAlt: "Stemma dell'Universidad del Cauca",
    body:
      "Formazione ingegneristica nelle **tecnologie dell'informazione e della comunicazione**, tra cui **analisi del software**, **database**, **reti**, informatica e sistemi di telecomunicazione, con un focus sull'**Interazione Uomo-Macchina (HCI)**: esperienza utente, comportamento digitale e design centrato sull'utente.",
  },
  publications: {
    chatbots: {
      venue: "Presentato alla IX Conferenza Iberoamericana sull'Interazione Uomo-Macchina (JIHCI 2023).",
      description:
        "Questa ricerca analizza l'esperienza utente nelle interazioni con chatbot web attraverso un caso di studio nel contesto colombiano. Valuta usabilità, percezione degli utenti e qualità dell'interazione per individuare opportunità di miglioramento nei sistemi conversazionali.",
    },
    petlify: {
      venue: "Pubblicato in CEUR Workshop Proceedings.",
      description:
        "Questo lavoro presenta la progettazione e la prototipazione di una soluzione integrata hardware-software per ridurre la nomofobia in ambito scolastico e lavorativo. La soluzione combina un'app mobile con un dispositivo fisico per promuovere un uso della tecnologia più consapevole e controllato.",
    },
  },
  volunteering: {
    lcoy: {
      title: "LCOY Colombia · Team di Logistica e Metodologia",
      period: "Ottobre 2025 - Novembre 2025",
      body:
        "Ho supportato il coordinamento operativo, la logistica del team e le attività di metodologia per una conferenza giovanile sul clima, aiutando ad allineare partecipanti, sessioni di lavoro ed esigenze organizzative.",
      photosLabel: "Foto di LCOY",
      photos: [
        "Incontro di gruppo di LCOY Colombia",
        "Attività di metodologia a LCOY Colombia",
        "Attività giovanile per il clima a LCOY Colombia",
      ],
    },
    ieee: {
      period: "Giugno 2020 - Agosto 2022",
      body:
        "Ho partecipato ad attività di divulgazione scientifica ed educative per scuole e bambini, sostenendo iniziative che hanno reso l'ingegneria e la scienza più accessibili ai più giovani.",
    },
  },
  footer: {
    updated: "Aggiornato a ottobre 2026",
    starWars: "Che i dati siano con te.",
  },
};

export const translations = { en, es, it };

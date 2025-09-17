// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Internationalization
const translations = {
    en: {
        nav_logo: "My Portfolio",
        nav_about: "About",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_h1: "AI & Automation Enthusiast",
        hero_p: "Building intelligent solutions for a smarter future. Let's create something amazing together.",
        hero_cta: "Get in Touch",
        about_h2: "About Me",
        about_p: "I am a passionate student of Artificial Intelligence and Automation. My focus is on leveraging modern tools to solve real-world problems, from creating efficient business applications to extracting valuable insights from data. I believe in making powerful technology accessible and affordable for everyone.",
        services_h2: "Services I Offer",
        service1_h3: "Affordable Apps with AppSheet",
        service1_p: "I build custom, no-code applications for your business needs using Google AppSheet. Perfect for inventory management, CRMs, and internal tools, delivered quickly and affordably.",
        service2_h3: "Workflow Automation with n8n",
        service2_p: "I connect your apps and automate your workflows using n8n. Save time and reduce manual errors by letting me build robust automation pipelines for your repetitive tasks.",
        service3_h3: "Data Analysis with Python",
        service3_p: "Unlock the stories hidden in your data. I perform Exploratory Data Analysis (EDA) using Python libraries like Pandas and Matplotlib to help you make data-driven decisions.",
        projects_h2: "Personal Projects",
        project1_h3: "Founder of a Tech Club",
        project1_p: "I founded and lead a community-focused tech club, where we explore emerging technologies, collaborate on projects, and share our passion for innovation and problem-solving.",
        contact_h2: "Contact Me",
        contact_p: "Have an idea or a project in mind? I'd love to hear from you!",
        contact_cta: "Email Me",
        footer_p: "Built by Camila | Connect with me on <a href=\"#\" target=\"_blank\">GitHub</a> & <a href=\"#\" target=\"_blank\">LinkedIn</a>"
    },
    es: {
        nav_logo: "Mi Portafolio",
        nav_about: "Sobre Mí",
        nav_services: "Servicios",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        hero_h1: "Apasionada por la IA y la Automatización",
        hero_p: "Construyendo soluciones inteligentes para un futuro más brillante. Creemos algo increíble juntos.",
        hero_cta: "Ponte en Contacto",
        about_h2: "Sobre Mí",
        about_p: "Soy una apasionada estudiante de Inteligencia Artificial y Automatización. Mi enfoque es aprovechar herramientas modernas para resolver problemas del mundo real, desde la creación de aplicaciones empresariales eficientes hasta la extracción de información valiosa de los datos. Creo en hacer que la tecnología potente sea accesible y asequible para todos.",
        services_h2: "Servicios que Ofrezco",
        service1_h3: "Apps Asequibles con AppSheet",
        service1_p: "Construyo aplicaciones personalizadas y sin código para las necesidades de tu negocio usando Google AppSheet. Perfecto para gestión de inventario, CRMs y herramientas internas, entregado de forma rápida y asequible.",
        service2_h3: "Automatización de Flujos con n8n",
        service2_p: "Conecto tus aplicaciones y automatizo tus flujos de trabajo usando n8n. Ahorra tiempo y reduce errores manuales permitiéndome construir robustas canalizaciones de automatización para tus tareas repetitivas.",
        service3_h3: "Análisis de Datos con Python",
        service3_p: "Desbloquea las historias ocultas en tus datos. Realizo Análisis Exploratorio de Datos (EDA) usando librerías de Python como Pandas y Matplotlib para ayudarte a tomar decisiones basadas en datos.",
        projects_h2: "Proyectos Personales",
        project1_h3: "Fundadora de un Club de Tecnología",
        project1_p: "Estoy en el proceso de fundar y dirigir un club de tecnología centrado en la comunidad, donde exploramos tecnologías emergentes, colaboramos en proyectos y compartimos nuestra pasión por la innovación y la resolución de problemas.",
        contact_h2: "Contáctame",
        contact_p: "¿Tienes una idea o un proyecto en mente? ¡Me encantaría saber de ti!",
        contact_cta: "Envíame un Email",
        footer_p: "Creado por Camila | Conecta conmigo en <a href=\"#\" target=\"_blank\">GitHub</a> & <a href=\"#\" target=\"_blank\">LinkedIn</a>"
    },
    de: {
        nav_logo: "Mein Portfolio",
        nav_about: "Über Mich",
        nav_services: "Dienstleistungen",
        nav_projects: "Projekte",
        nav_contact: "Kontakt",
        hero_h1: "KI- & Automatisierungs-Enthusiast",
        hero_p: "Intelligente Lösungen für eine intelligentere Zukunft entwickeln. Lassen Sie uns gemeinsam etwas Erstaunliches schaffen.",
        hero_cta: "Kontakt aufnehmen",
        about_h2: "Über Mich",
        about_p: "Ich bin ein leidenschaftlicher Student der Künstlichen Intelligenz und Automatisierung. Mein Fokus liegt auf der Nutzung moderner Werkzeuge, um reale Probleme zu lösen, von der Erstellung effizienter Geschäftsanwendungen bis zur Gewinnung wertvoller Erkenntnisse aus Daten. Ich glaube daran, leistungsstarke Technologie für jeden zugänglich und erschwinglich zu machen.",
        services_h2: "Meine Dienstleistungen",
        service1_h3: "Günstige Apps mit AppSheet",
        service1_p: "Ich erstelle benutzerdefinierte No-Code-Anwendungen für Ihre Geschäftsanforderungen mit Google AppSheet. Perfekt für Bestandsverwaltung, CRMs und interne Tools, schnell und kostengünstig geliefert.",
        service2_h3: "Workflow-Automatisierung mit n8n",
        service2_p: "Ich verbinde Ihre Apps und automatisiere Ihre Arbeitsabläufe mit n8n. Sparen Sie Zeit und reduzieren Sie manuelle Fehler, indem Sie mich robuste Automatisierungspipelines für Ihre wiederkehrenden Aufgaben erstellen lassen.",
        service3_h3: "Datenanalyse mit Python",
        service3_p: "Entdecken Sie die in Ihren Daten verborgenen Geschichten. Ich führe explorative Datenanalysen (EDA) mit Python-Bibliotheken wie Pandas und Matplotlib durch, um Ihnen zu helfen, datengesteuerte Entscheidungen zu treffen.",
        projects_h2: "Persönliche Projekte",
        project1_h3: "Gründer eines Technik-Clubs",
        project1_p: "Ich habe einen gemeinschaftsorientierten Technik-Club gegründet und leite ihn, in dem wir aufkommende Technologien erforschen, an Projekten zusammenarbeiten und unsere Leidenschaft für Innovation und Problemlösung teilen.",
        contact_h2: "Kontaktieren Sie mich",
        contact_p: "Haben Sie eine Idee oder ein Projekt im Kopf? Ich würde gerne von Ihnen hören!",
        contact_cta: "E-Mail an mich",
        footer_p: "Erstellt von Camila | Verbinden Sie sich mit mir auf <a href=\"#\" target=\"_blank\">GitHub</a> & <a href=\"#\" target=\"_blank\">LinkedIn</a>"
    }
};

const langLinks = document.querySelectorAll('.lang-link');
const translatableElements = document.querySelectorAll('[data-key]');

const setLanguage = (lang) => {
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    // Update active link
    langLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-lang') === lang) {
            link.classList.add('active');
        }
    });
    // Save language to local storage
    localStorage.setItem('language', lang);
};

langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Set initial language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'es'; // Default to Spanish
    setLanguage(savedLang);
});


// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        }
    });
});

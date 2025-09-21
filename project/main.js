/* Upgrade: Enhanced Portfolio JavaScript with Premium Motion Design */
class Portfolio {
    constructor() {
        this.currentLang = localStorage.getItem('portfolio-lang') || 'en';
        this.currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.translations = {};
        this.isLoaded = false;
        /* Upgrade: Enhanced state management */
        this.lenis = null;
        this.mousePosition = { x: 0, y: 0 };
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        this.init();
    }
    
    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }
    
    async initializeApp() {
        try {
            // Load translations
            await this.loadTranslations();
            
            // Initialize theme
            this.initializeTheme();
            
            /* Upgrade: Initialize smooth scrolling first */
            this.initializeSmoothScrolling();
            
            /* Upgrade: Initialize mouse tracking for magnetic effects */
            this.initializeMouseTracking();
            
            // Initialize all components
            this.initializeNavigation();
            this.initializeAnimations();
            /* Upgrade: Enhanced animation systems */
            this.initializeRevealAnimations();
            this.initializeMagneticElements();
            this.initializeParallax();
            this.initializeTiltCards();
            this.initializeSkillsAnimations();
            this.initializeCounterAnimations();
            this.initializeTooltips();
            this.initializeFormValidation();
            this.initializeCommandPalette();
            this.initializeTyping();
            
            // Apply translations
            this.applyTranslations();
            
            // Mark as loaded
            this.isLoaded = true;
            
            console.log('Portfolio initialized successfully');
        } catch (error) {
            console.error('Failed to initialize portfolio:', error);
        }
    }
    
    async loadTranslations() {
        try {
            const [enResponse, esResponse] = await Promise.all([
                fetch('/assets/i18n/en.json').catch(() => ({ ok: false })),
                fetch('/assets/i18n/es.json').catch(() => ({ ok: false }))
            ]);
            
            if (enResponse.ok) {
                this.translations.en = await enResponse.json();
            } else {
                this.translations.en = this.getFallbackTranslations('en');
            }
            
            if (esResponse.ok) {
                this.translations.es = await esResponse.json();
            } else {
                this.translations.es = this.getFallbackTranslations('es');
            }
        } catch (error) {
            console.warn('Failed to load translations, using fallbacks:', error);
            this.translations = {
                en: this.getFallbackTranslations('en'),
                es: this.getFallbackTranslations('es')
            };
        }
    }
    
    getFallbackTranslations(lang) {
        const translations = {
            en: {
                // Navigation
                about: "About",
                experience: "Experience",
                projects: "Projects",
                contact: "Contact",
                skipToContent: "Skip to content",
                
                // Hero
                heroTitle: "Computer Engineer • Software Developer • Cybersecurity Track",
                heroDescription: "Building reliable software, learning security, and shipping products that people use.",
                contactMe: "Contact Me",
                viewCV: "View CV",
                viewProjects: "View Projects",
                
                // About
                aboutBio: "Motivated and adaptable computer engineer with international experience. Strong in software development, Linux, debugging, and systems integration. Passionate about solving real-world problems with clean code and great UX. Currently pivoting into cybersecurity via certifications and a master's program.",
                locationMadrid: "Madrid, Spain",
                willingToTravel: "Willing to travel",
                drivingLicense: "Driving license B",
                skills: "Skills",
                languages: "Languages",
                coreSkills: "Core Skills",
                spokenLanguages: "Spoken Languages",
                softwareDev: "Software Development",
                linuxShell: "Linux & Shell Scripting",
                networksSecurity: "Networks & Cybersecurity",
                agileJira: "Agile & Jira",
                spanish: "Spanish",
                english: "English",
                chinese: "Chinese",
                french: "French",
                native: "Native",
                
                // Experience
                softwareEngineerIndra: "Software Engineer — Indra",
                indraDescription: "Focus on software development, debugging, Linux environments, and Agile methodologies using Jira.",
                internMediaset: "Software Engineering Intern — Mediaset España",
                mediasetDescription: "System Manager Department. Developed internal tooling, troubleshooting, and systems support.",
                privateTutor: "Private Tutor",
                tutorDescription: "Mathematics and Physics tutoring, developing strong communication and teaching skills.",
                education: "Education & Programs",
                bscComputer: "B.Sc. Computer Engineering",
                masterCyber: "Master's in Cybersecurity",
                academicMobility: "Academic Mobility",
                certifications: "Certifications",
                completed: "Completed",
                inProgress: "In Progress",
                googleActivate: "Google Activate",
                ecommerceMarketing: "E-commerce & Digital Marketing",
                cyberFundamentals: "Cybersecurity Fundamentals",
                
                // Projects
                leadDev: "Lead Developer (Design Support)",
                sofiaDescription: "Performance-optimized portfolio website with custom animations, responsive layout, and SEO optimization. Implemented CMS integration and achieved 95+ Lighthouse scores.",
                performanceOpt: "Performance Optimization",
                responsiveLayout: "Responsive Layout",
                customAnimations: "Custom Animations",
                loadTime: "Load Time",
                responsive: "Responsive",
                fullStackDev: "Full-Stack / Front-End Implementation",
                ottoDescription: "Complete brand system and website implementation with component library, analytics integration, and deployment pipeline. Focused on fast load times and SEO optimization.",
                brandSystem: "Brand System",
                componentLib: "Component Library",
                analytics: "Analytics",
                fastLoad: "Fast Load",
                deployPipeline: "Deploy Pipeline",
                components: "Components",
                visitSite: "Visit Site",
                
                // Contact
                getInTouch: "Get In Touch",
                contactDescription: "Ready to discuss opportunities or collaborate on projects? Let's connect!",
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                sendMessage: "Send Message",
                messageSent: "Message sent successfully! I'll get back to you soon.",
                
                // Footer
                allRightsReserved: "All rights reserved.",
                builtWith: "Built with vanilla HTML, CSS, and JavaScript"
            },
            es: {
                // Navigation
                about: "Acerca de",
                experience: "Experiencia",
                projects: "Proyectos",
                contact: "Contacto",
                skipToContent: "Saltar al contenido",
                
                // Hero
                heroTitle: "Ingeniero Informático • Desarrollador de Software • Especialización en Ciberseguridad",
                heroDescription: "Construyendo software confiable, aprendiendo seguridad y creando productos que la gente usa.",
                contactMe: "Contáctame",
                viewCV: "Ver CV",
                viewProjects: "Ver Proyectos",
                
                // About
                aboutBio: "Ingeniero informático motivado y adaptable con experiencia internacional. Fuerte en desarrollo de software, Linux, debugging e integración de sistemas. Apasionado por resolver problemas del mundo real con código limpio y gran UX. Actualmente pivotando hacia ciberseguridad mediante certificaciones y un programa de maestría.",
                locationMadrid: "Madrid, España",
                willingToTravel: "Dispuesto a viajar",
                drivingLicense: "Carnet de conducir B",
                skills: "Habilidades",
                languages: "Lenguajes",
                coreSkills: "Habilidades Principales",
                spokenLanguages: "Idiomas",
                softwareDev: "Desarrollo de Software",
                linuxShell: "Linux y Shell Scripting",
                networksSecurity: "Redes y Ciberseguridad",
                agileJira: "Agile y Jira",
                spanish: "Español",
                english: "Inglés",
                chinese: "Chino",
                french: "Francés",
                native: "Nativo",
                
                // Experience
                softwareEngineerIndra: "Ingeniero de Software — Indra",
                indraDescription: "Enfoque en desarrollo de software, debugging, entornos Linux y metodologías Agile usando Jira.",
                internMediaset: "Prácticas en Ingeniería de Software — Mediaset España",
                mediasetDescription: "Departamento de System Manager. Desarrollo de herramientas internas, resolución de problemas y soporte de sistemas.",
                privateTutor: "Tutor Privado",
                tutorDescription: "Tutorías de Matemáticas y Física, desarrollando fuertes habilidades de comunicación y enseñanza.",
                education: "Educación y Programas",
                bscComputer: "Grado en Ingeniería Informática",
                masterCyber: "Máster en Ciberseguridad",
                academicMobility: "Movilidad Académica",
                certifications: "Certificaciones",
                completed: "Completado",
                inProgress: "En Progreso",
                googleActivate: "Google Activate",
                ecommerceMarketing: "E-commerce y Marketing Digital",
                cyberFundamentals: "Fundamentos de Ciberseguridad",
                
                // Projects
                leadDev: "Desarrollador Principal (Soporte de Diseño)",
                sofiaDescription: "Sitio web de portafolio optimizado para rendimiento con animaciones personalizadas, diseño responsivo y optimización SEO. Implementé integración CMS y logré puntuaciones Lighthouse de 95+.",
                performanceOpt: "Optimización de Rendimiento",
                responsiveLayout: "Diseño Responsivo",
                customAnimations: "Animaciones Personalizadas",
                loadTime: "Tiempo de Carga",
                responsive: "Responsivo",
                fullStackDev: "Implementación Full-Stack / Front-End",
                ottoDescription: "Sistema de marca completo e implementación de sitio web con biblioteca de componentes, integración de analytics y pipeline de despliegue. Enfocado en tiempos de carga rápidos y optimización SEO.",
                brandSystem: "Sistema de Marca",
                componentLib: "Biblioteca de Componentes",
                analytics: "Analytics",
                fastLoad: "Carga Rápida",
                deployPipeline: "Pipeline de Despliegue",
                components: "Componentes",
                visitSite: "Visitar Sitio",
                
                // Contact
                getInTouch: "Ponte en Contacto",
                contactDescription: "¿Listo para discutir oportunidades o colaborar en proyectos? ¡Conectemos!",
                name: "Nombre",
                email: "Email",
                subject: "Asunto",
                message: "Mensaje",
                sendMessage: "Enviar Mensaje",
                messageSent: "¡Mensaje enviado exitosamente! Te responderé pronto.",
                
                // Footer
                allRightsReserved: "Todos los derechos reservados.",
                builtWith: "Construido con HTML, CSS y JavaScript vanilla"
            }
        };
        
        return translations[lang] || translations.en;
    }
    
    initializeTheme() {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        // Update theme toggle button
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle?.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = this.currentTheme === 'dark' ? '🌙' : '☀️';
        }
        
        // Add click handler
        themeToggle?.addEventListener('click', () => this.toggleTheme());
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('portfolio-theme', this.currentTheme);
        
        // Update icon
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = this.currentTheme === 'dark' ? '🌙' : '☀️';
        }
        
        /* Upgrade: Smooth theme transition animation */
        if (!this.isReducedMotion && typeof gsap !== 'undefined') {
            gsap.to(document.body, {
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }
    
    /* Upgrade: Initialize Lenis smooth scrolling */
    initializeSmoothScrolling() {
        if (typeof Lenis !== 'undefined' && !this.isReducedMotion) {
            this.lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                mouseMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            });
            
            // Animation frame loop
            const raf = (time) => {
                this.lenis.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
            
            // GSAP integration
            if (typeof gsap !== 'undefined') {
                this.lenis.on('scroll', ScrollTrigger.update);
                gsap.ticker.add((time) => {
                    this.lenis.raf(time * 1000);
                });
                gsap.ticker.lagSmoothing(0);
            }
        }
    }
    
    /* Upgrade: Mouse tracking for magnetic effects */
    initializeMouseTracking() {
        if (this.isReducedMotion) return;
        
        document.addEventListener('mousemove', (e) => {
            this.mousePosition.x = (e.clientX / window.innerWidth) * 100;
            this.mousePosition.y = (e.clientY / window.innerHeight) * 100;
            
            // Update CSS custom properties for parallax backgrounds
            document.documentElement.style.setProperty('--mouse-x', `${this.mousePosition.x}%`);
            document.documentElement.style.setProperty('--mouse-y', `${this.mousePosition.y}%`);
        });
    }
    
    initializeNavigation() {
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    /* Upgrade: Use Lenis for smooth scrolling if available */
                    if (this.lenis) {
                        this.lenis.scrollTo(target, {
                            offset: -80,
                            duration: 1.5
                        });
                    } else {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
        
        /* Upgrade: Enhanced active nav link highlighting with scroll spy */
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        const updateActiveLink = () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink();
        
        // Language toggle
        const langToggle = document.querySelector('.lang-toggle');
        const langText = langToggle?.querySelector('.lang-text');
        if (langText) {
            langText.textContent = this.currentLang === 'en' ? 'ES' : 'EN';
        }
        
        langToggle?.addEventListener('click', () => this.toggleLanguage());
        
        // Mobile menu toggle (if needed)
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        mobileToggle?.addEventListener('click', () => {
            // Mobile menu functionality can be added here
            console.log('Mobile menu toggle clicked');
        });
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem('portfolio-lang', this.currentLang);
        
        // Update button text
        const langText = document.querySelector('.lang-text');
        if (langText) {
            langText.textContent = this.currentLang === 'en' ? 'ES' : 'EN';
        }
        
        // Apply translations
        this.applyTranslations();
        
        /* Upgrade: Re-initialize typing animation with new language */
        this.initializeTyping();
    }
    
    applyTranslations() {
        const currentTranslations = this.translations[this.currentLang] || this.translations.en;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
            }
        });
        
        // Update document title
        document.title = this.currentLang === 'es' 
            ? 'Ignacio Díaz Nieto - Ingeniero Informático y Profesional de Ciberseguridad'
            : 'Ignacio Díaz Nieto - Computer Engineer & Cybersecurity Professional';
    }
    
    /* Upgrade: Enhanced reveal animations with GSAP */
    initializeRevealAnimations() {
        if (this.isReducedMotion) {
            // Show all elements immediately if reduced motion is preferred
            document.querySelectorAll('[data-reveal]').forEach(el => {
                el.classList.add('animate');
            });
            return;
        }
        
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            // Fallback to Intersection Observer
            this.initializeFallbackAnimations();
            return;
        }
        
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero animations
        const heroElements = document.querySelectorAll('[data-reveal="hero"]');
        heroElements.forEach((element, index) => {
            const delay = element.dataset.delay ? parseFloat(element.dataset.delay) : 0;
            
            gsap.fromTo(element, 
                { 
                    opacity: 0, 
                    y: 50,
                    scale: 0.95
                },
                { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    delay: delay,
                    ease: 'power3.out'
                }
            );
        });
        
        // Section title animations
        document.querySelectorAll('[data-reveal="section"]').forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
        
        // Staggered animations
        document.querySelectorAll('[data-reveal="stagger"]').forEach(container => {
            const items = container.querySelectorAll('[data-reveal-item]');
            
            gsap.fromTo(items,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
        
        // Timeline animations
        document.querySelectorAll('[data-reveal="timeline"]').forEach(container => {
            const items = container.querySelectorAll('[data-reveal-item]');
            
            gsap.fromTo(items,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
            
            // Animate timeline progress
            const progress = container.querySelector('.timeline-progress');
            if (progress) {
                gsap.fromTo(progress,
                    { height: '0%' },
                    {
                        height: '100%',
                        duration: 2,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: container,
                            start: 'top 60%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            }
        });
        
        // Fade animations
        document.querySelectorAll('[data-reveal="fade"]').forEach(element => {
            gsap.fromTo(element,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }
    
    /* Upgrade: Fallback animations for older browsers */
    initializeFallbackAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('[data-reveal]').forEach(element => {
            observer.observe(element);
        });
    }
    
    /* Upgrade: Magnetic hover effects */
    initializeMagneticElements() {
        if (this.isReducedMotion) return;
        
        document.querySelectorAll('.magnetic').forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                if (typeof gsap !== 'undefined') {
                    gsap.to(element, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
            
            element.addEventListener('mouseleave', (e) => {
                if (typeof gsap !== 'undefined') {
                    gsap.to(element, {
                        scale: 1,
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
            
            element.addEventListener('mousemove', (e) => {
                if (typeof gsap !== 'undefined') {
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    gsap.to(element, {
                        x: x * 0.1,
                        y: y * 0.1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }
    
    /* Upgrade: Parallax effects */
    initializeParallax() {
        if (this.isReducedMotion || typeof gsap === 'undefined') return;
        
        document.querySelectorAll('[data-parallax]').forEach(element => {
            const speed = parseFloat(element.dataset.parallax) || 0.1;
            
            gsap.to(element, {
                yPercent: -50 * speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    }
    
    /* Upgrade: 3D tilt card effects */
    initializeTiltCards() {
        if (this.isReducedMotion) return;
        
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (typeof gsap !== 'undefined') {
                    gsap.to(card, {
                        rotationY: 2,
                        rotationX: 2,
                        z: 10,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
            
            card.addEventListener('mouseleave', () => {
                if (typeof gsap !== 'undefined') {
                    gsap.to(card, {
                        rotationY: 0,
                        rotationX: 0,
                        z: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
            
            card.addEventListener('mousemove', (e) => {
                if (typeof gsap !== 'undefined') {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / centerY * -5;
                    const rotateY = (x - centerX) / centerX * 5;
                    
                    gsap.to(card, {
                        rotationX: rotateX,
                        rotationY: rotateY,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }
    
    /* Upgrade: Skills animations */
    initializeSkillsAnimations() {
        // Skills filter functionality
        const filterPills = document.querySelectorAll('.filter-pill');
        const skillCategories = document.querySelectorAll('.skills-category');
        
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                const filter = pill.dataset.filter;
                
                // Update active pill
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                
                // Filter categories
                skillCategories.forEach(category => {
                    const categoryType = category.dataset.category;
                    if (filter === 'all' || categoryType === filter) {
                        category.classList.remove('hidden');
                    } else {
                        category.classList.add('hidden');
                    }
                });
            });
        });
        
        // Animate skill bars
        const skillBars = document.querySelectorAll('[data-animate-bars]');
        skillBars.forEach(container => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fills = entry.target.querySelectorAll('.skill-fill');
                        fills.forEach((fill, index) => {
                            const percent = fill.getAttribute('data-percent');
                            setTimeout(() => {
                                fill.style.width = percent + '%';
                            }, index * 200);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(container);
        });
        
        // Animate language bars
        const languageBars = document.querySelectorAll('[data-animate-languages]');
        languageBars.forEach(container => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fills = entry.target.querySelectorAll('.language-fill');
                        fills.forEach((fill, index) => {
                            const percent = fill.getAttribute('data-percent');
                            setTimeout(() => {
                                fill.style.width = percent + '%';
                            }, index * 300);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(container);
        });
    }
    
    /* Upgrade: Counter animations */
    initializeCounterAnimations() {
        const counterContainers = document.querySelectorAll('[data-animate-counters]');
        
        counterContainers.forEach(container => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counters = entry.target.querySelectorAll('[data-count]');
                        counters.forEach(counter => {
                            const target = parseInt(counter.dataset.count);
                            const duration = 2000;
                            const start = performance.now();
                            
                            const animate = (currentTime) => {
                                const elapsed = currentTime - start;
                                const progress = Math.min(elapsed / duration, 1);
                                const current = Math.floor(progress * target);
                                
                                counter.textContent = current + (counter.textContent.includes('+') ? '+' : '');
                                
                                if (progress < 1) {
                                    requestAnimationFrame(animate);
                                }
                            };
                            
                            requestAnimationFrame(animate);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(container);
        });
    }
    
    /* Upgrade: Tooltip system */
    initializeTooltips() {
        const tooltip = document.getElementById('tooltip');
        if (!tooltip) return;
        
        const tooltipContent = tooltip.querySelector('.tooltip-content');
        
        document.querySelectorAll('[data-tooltip]').forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                const text = element.dataset.tooltip;
                if (text) {
                    tooltipContent.textContent = text;
                    tooltip.classList.add('show');
                    this.updateTooltipPosition(e, tooltip);
                }
            });
            
            element.addEventListener('mouseleave', () => {
                tooltip.classList.remove('show');
            });
            
            element.addEventListener('mousemove', (e) => {
                if (tooltip.classList.contains('show')) {
                    this.updateTooltipPosition(e, tooltip);
                }
            });
        });
    }
    
    updateTooltipPosition(e, tooltip) {
        const rect = tooltip.getBoundingClientRect();
        const x = e.clientX - rect.width / 2;
        const y = e.clientY - rect.height - 10;
        
        tooltip.style.left = Math.max(10, Math.min(x, window.innerWidth - rect.width - 10)) + 'px';
        tooltip.style.top = Math.max(10, y) + 'px';
    }
    
    initializeAnimations() {
        /* Upgrade: Enhanced GSAP animations */
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            /* Upgrade: Enhanced floating shapes animation */
            gsap.to('.shape', {
                y: -30,
                rotation: 360,
                duration: 6,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: -1,
                stagger: {
                    each: 2,
                    from: 'random'
                }
            });
        }
    }
    
    initializeTyping() {
        // Typing animation for hero section
        const typedElement = document.getElementById('typed-text');
        if (typedElement && typeof Typed !== 'undefined') {
            /* Upgrade: Destroy existing instance if it exists */
            if (this.typedInstance) {
                this.typedInstance.destroy();
            }
            
            const strings = this.currentLang === 'es' 
                ? [
                    'Construyendo software confiable...',
                    'Aprendiendo ciberseguridad...',
                    'Resolviendo problemas reales...',
                    'Creando experiencias increíbles...'
                ]
                : [
                    'Building reliable software...',
                    'Learning cybersecurity...',
                    'Solving real problems...',
                    'Creating amazing experiences...'
                ];
            
            /* Upgrade: Store instance for cleanup */
            this.typedInstance = new Typed(typedElement, {
                strings: strings,
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2500,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                /* Upgrade: Enhanced typing options */
                smartBackspace: true,
                fadeOut: false,
                fadeOutClass: 'typed-fade-out',
                fadeOutDelay: 500
            });
        }
    }
    
    initializeFormValidation() {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        const validateField = (field) => {
            const value = field.value.trim();
            const group = field.closest('.form-group');
            const errorElement = group.querySelector('.error-message');
            let isValid = true;
            let message = '';
            
            // Remove existing error state
            group.classList.remove('error');
            errorElement.classList.remove('show');
            
            if (!value) {
                isValid = false;
                message = this.currentLang === 'es' ? 'Este campo es requerido' : 'This field is required';
            } else if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    message = this.currentLang === 'es' ? 'Por favor ingresa un email válido' : 'Please enter a valid email';
                }
            }
            
            if (!isValid) {
                group.classList.add('error');
                errorElement.textContent = message;
                errorElement.classList.add('show');
            }
            
            return isValid;
        };
        
        // Real-time validation
        form.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('blur', () => validateField(field));
            field.addEventListener('input', () => {
                if (field.closest('.form-group').classList.contains('error')) {
                    validateField(field);
                }
            });
        });
        
        // Form submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate all fields
            const fields = form.querySelectorAll('input, textarea');
            let isFormValid = true;
            
            fields.forEach(field => {
                if (!validateField(field)) {
                    isFormValid = false;
                }
            });
            
            if (!isFormValid) return;
            
            // Submit form
            const submitBtn = form.querySelector('.submit-btn');
            const successElement = document.getElementById('form-success');
            
            submitBtn.classList.add('loading');
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                successElement.classList.add('show');
                form.reset();
                
                /* Upgrade: Success confetti animation */
                if (typeof confetti !== 'undefined' && !this.isReducedMotion) {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                }
                
                setTimeout(() => {
                    successElement.classList.remove('show');
                }, 5000);
                
            } catch (error) {
                console.error('Form submission failed:', error);
                // Handle error (show error message)
            } finally {
                submitBtn.classList.remove('loading');
            }
        });
    }
    
    initializeCommandPalette() {
        const palette = document.getElementById('command-palette');
        const input = document.getElementById('palette-input');
        const results = document.getElementById('palette-results');
        
        if (!palette || !input || !results) return;
        
        const sections = [
            { name: 'About', id: 'about' },
            { name: 'Experience', id: 'experience' },
            { name: 'Projects', id: 'projects' },
            { name: 'Contact', id: 'contact' }
        ];
        
        let selectedIndex = 0;
        
        const showPalette = () => {
            palette.classList.add('show');
            input.focus();
            renderResults(sections);
        };
        
        const hidePalette = () => {
            palette.classList.remove('show');
            input.value = '';
            selectedIndex = 0;
        };
        
        const renderResults = (items) => {
            results.innerHTML = items.map((item, index) => 
                `<li class="${index === selectedIndex ? 'selected' : ''}" data-id="${item.id}">${item.name}</li>`
            ).join('');
        };
        
        const navigateToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                /* Upgrade: Use Lenis for smooth scrolling if available */
                if (this.lenis) {
                    this.lenis.scrollTo(section, {
                        offset: -80,
                        duration: 1.5
                    });
                } else {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
                hidePalette();
            }
        };
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                showPalette();
            } else if (e.key === 'Escape' && palette.classList.contains('show')) {
                hidePalette();
            } else if (palette.classList.contains('show')) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectedIndex = Math.min(selectedIndex + 1, results.children.length - 1);
                    renderResults(sections);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectedIndex = Math.max(selectedIndex - 1, 0);
                    renderResults(sections);
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    const selectedItem = results.children[selectedIndex];
                    if (selectedItem) {
                        navigateToSection(selectedItem.dataset.id);
                    }
                }
            }
        });
        
        // Click handlers
        palette.addEventListener('click', (e) => {
            if (e.target === palette) {
                hidePalette();
            }
        });
        
        results.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                navigateToSection(e.target.dataset.id);
            }
        });
        
        // Search functionality
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = sections.filter(section => 
                section.name.toLowerCase().includes(query)
            );
            selectedIndex = 0;
            renderResults(filtered);
        });
    }
}

// Initialize portfolio when DOM is ready
const portfolio = new Portfolio();

/* Upgrade: Enhanced utility functions */
const utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    /* Upgrade: Additional utility functions */
    lerp: (start, end, factor) => {
        return start + (end - start) * factor;
    },
    
    clamp: (value, min, max) => {
        return Math.min(Math.max(value, min), max);
    },
    
    map: (value, inMin, inMax, outMin, outMax) => {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
};

/* Upgrade: Enhanced performance optimizations */
document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    /* Upgrade: Handle both data-src and srcset */
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    /* Upgrade: Preload critical resources */
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
    
    // Add smooth scrolling fallback for older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
        const smoothScroll = (target, duration = 1000) => {
            const targetElement = document.querySelector(target);
            if (!targetElement) return;
            
            const targetPosition = targetElement.offsetTop - 80; // Account for fixed header
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;
            
            const animation = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };
            
            const ease = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };
            
            requestAnimationFrame(animation);
        };
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                smoothScroll(anchor.getAttribute('href'));
            });
        });
    }
    
    /* Upgrade: Performance monitoring */
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Performance:', {
                    'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                    'Load Complete': perfData.loadEventEnd - perfData.loadEventStart,
                    'Total Load Time': perfData.loadEventEnd - perfData.fetchStart
                });
            }, 0);
        });
    }
});

/* Upgrade: Enhanced debugging and development tools */
window.portfolio = portfolio;
window.utils = utils;

/* Upgrade: Development helpers */
if (process?.env?.NODE_ENV === 'development') {
    window.debugPortfolio = {
        toggleAnimations: () => {
            document.body.classList.toggle('debug-animations');
        },
        showBoundingBoxes: () => {
            document.body.classList.toggle('debug-boxes');
        },
        logPerformance: () => {
            console.table(performance.getEntriesByType('measure'));
        }
    };
}
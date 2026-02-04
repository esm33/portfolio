// ========================================
// Portfolio Website JavaScript
// Handles navigation, mobile menu, and dynamic content
// ========================================

// ========================================
// Mobile Navigation Toggle
// ========================================

/**
 * Initialize mobile navigation menu toggle functionality
 */
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        // Toggle menu on button click
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================

/**
 * Add smooth scrolling behavior to all navigation links
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Active Navigation Link Highlighting
// ========================================

/**
 * Highlight the active navigation link based on scroll position
 */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// Project Data & Dynamic Loading
// ========================================

/**
 * Project data array
 * Easy to customize - just edit this array to add/modify projects
 */
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration. Built with modern best practices and responsive design.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/yourusername/ecommerce-platform",
        demo: "https://demo-ecommerce.example.com"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspace features. Perfect for agile teams.",
        technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind"],
        github: "https://github.com/yourusername/task-manager",
        demo: null
    },
    {
        title: "Weather Dashboard",
        description: "Interactive weather dashboard displaying current conditions, forecasts, and historical data with beautiful visualizations. Integrates with multiple weather APIs.",
        technologies: ["JavaScript", "Chart.js", "API", "CSS Grid"],
        github: "https://github.com/yourusername/weather-dashboard",
        demo: "https://weather-dash.example.com"
    },
    {
        title: "Blog Platform",
        description: "A modern blogging platform with markdown support, comment system, user profiles, and SEO optimization. Features an intuitive admin panel for content management.",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
        github: "https://github.com/yourusername/blog-platform",
        demo: "https://blog.example.com"
    },
    {
        title: "Portfolio Generator",
        description: "An automated portfolio website generator that creates beautiful, responsive portfolios from JSON data. Includes multiple themes and customization options.",
        technologies: ["Python", "Flask", "Jinja2", "Bootstrap"],
        github: "https://github.com/yourusername/portfolio-generator",
        demo: null
    },
    {
        title: "Chat Application",
        description: "Real-time chat application with private messaging, group chats, file sharing, and emoji support. Features end-to-end encryption for secure communication.",
        technologies: ["Socket.io", "Express", "React", "MongoDB"],
        github: "https://github.com/yourusername/chat-app",
        demo: "https://chat.example.com"
    }
];

/**
 * Create a project card HTML element
 * @param {Object} project - Project data object
 * @returns {string} HTML string for project card
 */
function createProjectCard(project) {
    const techTags = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');
    
    const githubLink = `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
        </a>
    `;
    
    const demoLink = project.demo ? `
        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
        </a>
    ` : '';
    
    return `
        <div class="project-card">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
            <div class="project-links">
                ${githubLink}
                ${demoLink}
            </div>
        </div>
    `;
}

/**
 * Load and display all projects
 */
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (projectsContainer) {
        const projectCards = projects.map(project => createProjectCard(project)).join('');
        projectsContainer.innerHTML = projectCards;
    }
}

// ========================================
// Scroll to Top on Page Load
// ========================================

/**
 * Ensure page starts at the top when loaded
 */
function scrollToTop() {
    window.scrollTo(0, 0);
}

// ========================================
// Initialize All Functions on DOM Load
// ========================================

/**
 * Main initialization function
 * Called when DOM is fully loaded
 */
function init() {
    // Scroll to top
    scrollToTop();
    
    // Initialize navigation
    initMobileNav();
    initSmoothScroll();
    initActiveNavLink();
    
    // Load dynamic content
    loadProjects();
    
    console.log('Portfolio website initialized successfully! 🚀');
}

// Wait for DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded
    init();
}

// ========================================
// Export for potential module usage
// ========================================

// Uncomment if using as a module
// export { projects, createProjectCard, loadProjects };

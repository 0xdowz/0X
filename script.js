// Optimized scroll animation with performance improvements
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '50px' // Preload animations before elements enter viewport
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
};

// Optimized navbar scroll handling with throttling
const handleNavbar = () => {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll <= 0) {
                    nav.classList.remove('scroll-up');
                } else if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
                    nav.classList.remove('scroll-up');
                    nav.classList.add('scroll-down');
                } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
                    nav.classList.remove('scroll-down');
                    nav.classList.add('scroll-up');
                }
                
                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
};

// Optimized text animation with fragment and reduced reflows
const handleTextEffect = () => {
    const titles = document.querySelectorAll('.animate-text');
    titles.forEach(title => {
        const text = title.textContent;
        const fragment = document.createDocumentFragment();
        title.textContent = '';
        
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${i * 0.1}s`;
            fragment.appendChild(span);
        });
        
        title.appendChild(fragment);
    });
};

// تفعيل قائمة الهامبرجر
const handleMenuToggle = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
};

// Typing Effect
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.element.innerHTML = this.txt;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksA = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Animate links
    navLinksA.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close menu when clicking a link
navLinksA.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        
        navLinksA.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    observeElements();
    handleNavbar();
    handleTextEffect();
    handleMenuToggle();

    const txtElement = document.querySelector('.typed-text');
    const words = ['0xjboor', 'Anas', 'jboor'];
    const wait = 3000;

    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

// تأثير النقر على الأزرار
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Optimized menu handling with debouncing
let isMenuOpen = false;
let menuToggleTimeout;

const toggleMenu = () => {
    if (menuToggleTimeout) {
        clearTimeout(menuToggleTimeout);
    }
    
    menuToggleTimeout = setTimeout(() => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (menuToggle && navMenu) {
            isMenuOpen = !isMenuOpen;
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        }
    }, 50);
};

// Event delegation for menu-related clicks
document.addEventListener('click', (e) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (e.target.closest('.menu-toggle')) {
        toggleMenu();
    } else if (isMenuOpen && !e.target.closest('.nav-menu')) {
        toggleMenu();
    } else if (e.target.closest('.nav-menu a')) {
        toggleMenu();
    }
}, { passive: true });

// Optimized scroll-based menu closing
let lastScrollY = window.scrollY;
let scrollTimeout;

window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && isMenuOpen) {
            toggleMenu();
        }
        lastScrollY = currentScrollY;
    }, 150);
}, { passive: true });

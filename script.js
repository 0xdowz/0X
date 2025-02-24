// Notification System is now imported from notification.js

// Contact Form Handler with Enhanced Security and Validation
const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Enhanced client-side validation with sanitization
    const formData = new FormData(form);
    const email = formData.get('email')?.trim() || '';
    const message = formData.get('message')?.trim() || '';
    const name = formData.get('name')?.trim() || '';
    const subject = formData.get('subject')?.trim() || '';

    // Input sanitization and validation
    const sanitizeInput = (input) => {
        return input
            .replace(/[<>]/g, '') // Remove potential HTML tags
            .replace(/[\u0000-\u001F\u007F-\u009F]/g, ''); // Remove control characters
    };

    formData.set('email', sanitizeInput(email));
    formData.set('message', sanitizeInput(message));
    formData.set('name', sanitizeInput(name));
    formData.set('subject', sanitizeInput(subject));
    
    // Show loading state with enhanced UI feedback
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.classList.add('loading');
    
    try {
        // Add timestamp and form metadata
        formData.append('submitted_at', new Date().toISOString());
        formData.append('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
        
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        if (response.ok) {
            window.notificationSystem.show('Message sent successfully!');
            form.reset();
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        window.notificationSystem.show('Failed to send message. Please try again later.');
    } finally {
        // Reset button state with smooth transition
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    }
};

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
    nav.classList.add('scroll-up');
};

// Enhanced text animation with optimized performance and smooth transitions
const handleTextEffect = () => {
    const titles = document.querySelectorAll('.animate-text');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const title = entry.target;
                    const text = title.textContent;
                    const fragment = document.createDocumentFragment();
                    title.textContent = '';
                    
                    requestAnimationFrame(() => {
                        [...text].forEach((char, i) => {
                            const span = document.createElement('span');
                            span.textContent = char;
                            span.style.opacity = '0';
                            span.style.transform = 'translateY(20px)';
                            span.style.transition = `opacity 0.3s ease, transform 0.3s ease ${i * 0.03}s`;
                            fragment.appendChild(span);
                        });
                        
                        title.appendChild(fragment);
                        
                        requestAnimationFrame(() => {
                            title.querySelectorAll('span').forEach(span => {
                                span.style.opacity = '1';
                                span.style.transform = 'translateY(0)';
                            });
                        });
                    });
                    
                    observer.unobserve(title);
                }
            });
        },
        { threshold: 0.2 }
    );
    
    titles.forEach(title => observer.observe(title));
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


// Enable submit button when reCAPTCHA is completed
const onRecaptchaSuccess = () => {
    document.querySelector('.submit-btn').disabled = false;
};

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
    handleNavbar();
    handleTextEffect();
    handleMenuToggle();
});
    const txtElement = document.querySelector('.typed-text');
    const words = ['0xjboor', 'Anas', 'jboor'];
    const wait = 3000;

    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
// This closing brace appears to be orphaned and should be removed

// Enhanced button interactions with smooth ripple effect
const initializeButtonEffects = () => {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            
            const diameter = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${x - diameter/2}px`;
            ripple.style.top = `${y - diameter/2}px`;
            
            // Remove existing ripples
            const existingRipple = this.querySelector('.ripple-effect');
            if (existingRipple) {
                existingRipple.remove();
            }
            
            this.appendChild(ripple);
            
            // Add pressed state
            button.classList.add('pressed');
            
            // Clean up
            const removeRipple = () => {
                ripple.style.opacity = '0';
                button.classList.remove('pressed');
                setTimeout(() => ripple.remove(), 300);
            };
            
            ripple.addEventListener('animationend', removeRipple);
        }, { passive: true });
        
        // Handle focus states
        button.addEventListener('focus', () => button.classList.add('focused'));
        button.addEventListener('blur', () => button.classList.remove('focused'));
    });
};

// Initialize button effects on DOM load
document.addEventListener('DOMContentLoaded', initializeButtonEffects);

// Mobile navigation handling
let isMenuOpen = false;
let menuToggleTimeout;

const toggleMenu = () => {
    if (menuToggleTimeout) {
        clearTimeout(menuToggleTimeout);
    }
    
    menuToggleTimeout = setTimeout(() => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (hamburger && navLinks) {
            isMenuOpen = !isMenuOpen;
            hamburger.setAttribute('aria-expanded', isMenuOpen);
            navLinks.classList.toggle('active');
        }
    }, 50);
};

// Event delegation for menu-related clicks
document.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (e.target.closest('.hamburger')) {
        toggleMenu();
    } else if (isMenuOpen && !e.target.closest('.nav-links')) {
        toggleMenu();
    } else if (e.target.closest('.nav-links a')) {
        toggleMenu();
    }
}, { passive: true });

// Initialize hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});


// Page Visibility Handler
const handleVisibilityChange = () => {
    if (document.hidden) {
        // Page is hidden (user switched tabs or minimized)
        document.dispatchEvent(new CustomEvent('page-hidden'));
    } else {
        // Page is visible again
        document.dispatchEvent(new CustomEvent('page-visible'));
        // Reinitialize necessary components
        observeElements();
        handleNavbar();
        handleTextEffect();
        
        // Restart typing effect if it exists
        const txtElement = document.querySelector('.typed-text');
        if (txtElement) {
            const words = ['0xjboor', 'Anas', 'jboor'];
            new TypeWriter(txtElement, words, 3000);
        }
    }
};

// Initialize visibility change handler
document.addEventListener('visibilitychange', handleVisibilityChange, false);

// Event delegation for menu-related clicks
document.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (e.target.closest('.hamburger')) {
        toggleMenu();
    } else if (isMenuOpen && !e.target.closest('.nav-links')) {
        toggleMenu();
    } else if (e.target.closest('.nav-links a')) {
        toggleMenu();
    }
}, { passive: true });

// Initialize hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});

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

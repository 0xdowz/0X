document.addEventListener('DOMContentLoaded', function() {
    // Enhanced project card effects
    initializeProjectCards();
    
    // Initialize all project card enhancements
    function initializeProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        // Apply index-based animation delays for staggered entrance
        projectCards.forEach((card, index) => {
            // Set custom animation delay based on index
            card.style.animationDelay = `${0.1 + (index * 0.15)}s`;
            
            // Add data attribute for animation sequencing
            card.setAttribute('data-index', index);
            
            // Add enhanced hover effects
            card.addEventListener('mouseenter', handleEnhancedMouseEnter);
            card.addEventListener('mouseleave', handleEnhancedMouseLeave);
            card.addEventListener('mousemove', handleEnhancedMouseMove);
            
            // Add tech tag animation with staggered delays
            const techTags = card.querySelectorAll('.tech-tag');
            techTags.forEach((tag, tagIndex) => {
                // Set custom property for staggered animations
                tag.style.setProperty('--i', tagIndex);
                tag.style.animationDelay = `${0.2 + (tagIndex * 0.1)}s`;
                tag.classList.add('tech-tag-enhanced');
            });
            
            // Add magnetic effect to project links
            const links = card.querySelectorAll('.project-link');
            links.forEach(link => {
                link.addEventListener('mouseenter', handleMagneticEffect);
                link.addEventListener('mouseleave', resetMagneticEffect);
                link.addEventListener('mousemove', updateMagneticEffect);
            });
        });
        
        // Add enhanced scroll reveal with depth effect
        initEnhancedScrollReveal();
    }
    
    // Enhanced mouse enter effect with multiple animations
    function handleEnhancedMouseEnter() {
        const card = this;
        
        // Add smooth transition for all properties
        card.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
        
        // Add depth effect with enhanced shadow
        card.style.boxShadow = '0 22px 45px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(100, 255, 218, 0.2) inset, 0 0 30px rgba(100, 255, 218, 0.2)';
        
        // Add subtle scale effect
        card.style.transform = 'scale(1.02)';
        
        // Enhance border with glow
        card.style.borderColor = 'rgba(100, 255, 218, 0.3)';
        
        // Add title effect with enhanced underline
        const title = card.querySelector('h3');
        if (title) {
            title.classList.add('title-hover-enhanced');
        }
        
        // Add enhanced particle effect
        createEnhancedParticles(card);
        
        // Add subtle background pulse
        addBackgroundPulse(card);
        
        // Add image zoom effect
        const image = card.querySelector('.project-image');
        if (image) {
            image.style.transform = 'scale(1.12)';
            image.style.filter = 'brightness(1.15) contrast(1.2) saturate(1.2)';
        }
        
        // Add tech stack float effect
        const techStack = card.querySelector('.project-tech-stack');
        if (techStack) {
            techStack.style.transform = 'translateY(-5px)';
        }
        
        // Add description highlight
        const description = card.querySelector('.project-description');
        if (description) {
            description.style.borderLeftColor = 'rgba(100, 255, 218, 0.5)';
            description.style.color = 'var(--foreground)';
            description.style.transform = 'translateX(5px)';
        }
    }
    
    // Enhanced mouse leave effect with smooth transitions
    function handleEnhancedMouseLeave() {
        const card = this;
        
        // Reset all properties with smooth transition
        card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        card.style.transform = '';
        card.style.boxShadow = '';
        card.style.borderColor = '';
        
        // Reset title effect
        const title = card.querySelector('h3');
        if (title) {
            title.classList.remove('title-hover-enhanced');
        }
        
        // Remove enhanced particles with fade out
        removeEnhancedParticles(card);
        
        // Remove background pulse
        removeBackgroundPulse(card);
        
        // Reset image
        const image = card.querySelector('.project-image');
        if (image) {
            image.style.transform = '';
            image.style.filter = '';
        }
        
        // Reset tech stack
        const techStack = card.querySelector('.project-tech-stack');
        if (techStack) {
            techStack.style.transform = '';
        }
        
        // Reset description
        const description = card.querySelector('.project-description');
        if (description) {
            description.style.borderLeftColor = '';
            description.style.color = '';
            description.style.transform = '';
        }
    }
    
    // Enhanced mouse move effect with parallax and lighting
    function handleEnhancedMouseMove(e) {
        const card = this;
        const rect = card.getBoundingClientRect();
        
        // Calculate mouse position relative to card center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Remove 3D rotation angles and perspective
        // Apply only a subtle scale effect on hover
        card.style.transform = `scale3d(1.03, 1.03, 1.03)`;
        
        // Add dynamic lighting effect based on mouse position
        const lightingX = (mouseX / rect.width) * 100 + 50;
        const lightingY = (mouseY / rect.height) * 100 + 50;
        card.style.background = `linear-gradient(135deg, rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.98)), radial-gradient(circle at ${lightingX}% ${lightingY}%, rgba(100, 255, 218, 0.1), transparent 50%)`;
        
        // Add dynamic shadow based on mouse position
        const shadowX = mouseX / 25;
        const shadowY = mouseY / 25;
        card.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.2), 
                              0 0 30px rgba(100, 255, 218, 0.2), 
                              0 0 20px rgba(100, 255, 218, 0.1) inset`;
        
        // Add parallax effect to image
        const image = card.querySelector('.project-image');
        if (image) {
            const moveX = -mouseX / 30;
            const moveY = -mouseY / 30;
            image.style.transform = `translateX(${moveX}px) translateY(${moveY}px) scale(1.12)`;
        }
        
        // Add parallax effect to project title
        const title = card.querySelector('h3');
        if (title) {
            const titleX = mouseX / 80;
            const titleY = mouseY / 80;
            title.style.transform = `translate(${titleX}px, ${titleY}px)`;
        }
        
        // Add parallax effect to tech tags with staggered movement
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            const offsetX = (mouseX / 60) * (index + 1) * 0.15;
            const offsetY = (mouseY / 60) * (index + 1) * 0.15;
            tag.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
        
        // Add subtle movement to project links
        const links = card.querySelectorAll('.project-link');
        links.forEach((link, index) => {
            const linkX = (mouseX / 50) * (index + 1) * 0.2;
            const linkY = (mouseY / 50) * (index + 1) * 0.2;
            link.style.transform = `translate(${linkX}px, ${linkY}px)`;
        });
    }
    
    // Create enhanced particles with more variety and better animation
    function createEnhancedParticles(card) {
        // Create or get particle container
        let particleContainer = card.querySelector('.enhanced-particle-container');
        
        if (!particleContainer) {
            particleContainer = document.createElement('div');
            particleContainer.className = 'enhanced-particle-container';
            particleContainer.style.position = 'absolute';
            particleContainer.style.top = '0';
            particleContainer.style.left = '0';
            particleContainer.style.width = '100%';
            particleContainer.style.height = '100%';
            particleContainer.style.pointerEvents = 'none';
            particleContainer.style.zIndex = '0';
            particleContainer.style.overflow = 'hidden';
            card.appendChild(particleContainer);
        }
        
        // Create varied particles with different sizes, colors and animations
        const particleCount = 15;
        const colors = [
            'rgba(100, 255, 218, 0.6)',
            'rgba(100, 255, 218, 0.4)',
            'rgba(100, 255, 218, 0.3)',
            'rgba(255, 255, 255, 0.2)'
        ];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'enhanced-particle';
            
            // Randomize particle properties
            const size = Math.random() * 6 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 0.5;
            
            // Set particle styles
            particle.style.position = 'absolute';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.borderRadius = '50%';
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.opacity = '0';
            particle.style.transform = 'scale(0)';
            
            // Add glow effect to larger particles
            if (size > 4) {
                particle.style.boxShadow = `0 0 ${size}px ${color}`;
            }
            
            // Set custom animation
            particle.style.animation = `enhancedParticleAnimation ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s forwards`;
            
            particleContainer.appendChild(particle);
        }
    }
    
    // Remove enhanced particles with fade out effect
    function removeEnhancedParticles(card) {
        const particleContainer = card.querySelector('.enhanced-particle-container');
        if (particleContainer) {
            const particles = particleContainer.querySelectorAll('.enhanced-particle');
            particles.forEach(particle => {
                particle.style.animation = 'enhancedParticleFadeOut 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards';
                
                // Remove particles after animation completes
                setTimeout(() => {
                    if (particle.parentNode === particleContainer) {
                        particleContainer.removeChild(particle);
                    }
                }, 600);
            });
        }
    }
    
    // Add subtle background pulse effect
    function addBackgroundPulse(card) {
        // Create or get pulse overlay
        let pulseOverlay = card.querySelector('.pulse-overlay');
        
        if (!pulseOverlay) {
            pulseOverlay = document.createElement('div');
            pulseOverlay.className = 'pulse-overlay';
            pulseOverlay.style.position = 'absolute';
            pulseOverlay.style.top = '0';
            pulseOverlay.style.left = '0';
            pulseOverlay.style.width = '100%';
            pulseOverlay.style.height = '100%';
            pulseOverlay.style.pointerEvents = 'none';
            pulseOverlay.style.zIndex = '0';
            pulseOverlay.style.opacity = '0';
            pulseOverlay.style.background = 'radial-gradient(circle at center, rgba(100, 255, 218, 0.1), transparent 70%)';
            pulseOverlay.style.animation = 'pulseAnimation 3s ease-in-out infinite';
            card.appendChild(pulseOverlay);
        }
    }
    
    // Remove background pulse effect
    function removeBackgroundPulse(card) {
        const pulseOverlay = card.querySelector('.pulse-overlay');
        if (pulseOverlay) {
            pulseOverlay.style.animation = 'fadeOut 0.5s forwards';
            setTimeout(() => {
                if (pulseOverlay.parentNode === card) {
                    card.removeChild(pulseOverlay);
                }
            }, 500);
        }
    }
    
    // Magnetic effect for project links
    function handleMagneticEffect() {
        this.style.transition = 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)';
        this.style.transformOrigin = 'center';
    }
    
    function resetMagneticEffect() {
        this.style.transform = 'translate(0, 0)';
        this.style.transition = 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
    }
    
    function updateMagneticEffect(e) {
        const link = this;
        const rect = link.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        // Calculate distance from center and apply magnetic pull
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const maxPull = 10; // Maximum pixels to pull
        
        if (distance < 50) { // Only apply effect when close to the link
            const pullX = (distanceX / 50) * maxPull;
            const pullY = (distanceY / 50) * maxPull;
            link.style.transform = `translate(${pullX}px, ${pullY}px)`;
        }
    }
    
    // Enhanced scroll reveal with depth effect
    function initEnhancedScrollReveal() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const index = parseInt(card.getAttribute('data-index') || '0');
                    
                    // Add enhanced reveal class
                    card.classList.add('revealed');
                    
                    // Add special animation for image
                    const image = card.querySelector('.project-image');
                    if (image) {
                        image.classList.add('image-enhanced-reveal');
                    }
                    
                    // Add staggered animations to content elements
                    const contentElements = card.querySelectorAll('.project-content > *');
                    contentElements.forEach((el, i) => {
                        el.style.transitionDelay = `${0.2 + (i * 0.15)}s`;
                        el.classList.add('content-revealed');
                    });
                    
                    observer.unobserve(card);
                }
            });
        }, observerOptions);
        
        // Observe all project cards
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Select all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Ensure titles and descriptions are visible
    ensureContentVisibility();
    
    // Initialize refined hover effects and animations
    initializeRefinedEffects();
    
    // Function to ensure project titles and descriptions are visible with elegant styling
    function ensureContentVisibility() {
        projectCards.forEach(card => {
            // Make sure titles are visible
            const title = card.querySelector('h3');
            if (title) {
                title.style.opacity = '1';
                title.style.visibility = 'visible';
                title.style.display = 'block';
            }
            
            // Make descriptions visible with beautiful styling
            const description = card.querySelector('.project-description');
            if (description) {
                description.style.opacity = '1';
                description.style.visibility = 'visible';
                description.style.display = 'block';
                description.style.color = 'var(--foreground)';
                description.style.borderLeft = '2px solid rgba(100, 255, 218, 0.5)';
                description.style.paddingLeft = '1rem';
                description.style.marginTop = '0.8rem';
                description.style.marginBottom = '1.2rem';
                description.style.fontSize = '0.95rem';
                description.style.lineHeight = '1.7';
                description.style.fontWeight = '400';
                description.style.textShadow = '0 0 1px rgba(255, 255, 255, 0.1)';
                description.style.background = 'linear-gradient(90deg, rgba(100, 255, 218, 0.03), transparent)';
                description.style.borderRadius = '0 4px 4px 0';
                description.style.transition = 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
                // Removed max-height and overflow properties to ensure full content visibility without scrolling
            }
        });
    }
    
    // Function to initialize all refined effects
    function initializeRefinedEffects() {
        projectCards.forEach((card, index) => {
            // Add custom animation delay based on index for staggered entrance
            card.style.animationDelay = `${0.1 + (index * 0.12)}s`;
            
            // Add refined hover effects
            card.addEventListener('mouseenter', handleRefinedMouseEnter);
            card.addEventListener('mouseleave', handleRefinedMouseLeave);
            card.addEventListener('mousemove', handleRefinedMouseMove);
            
            // Add enhanced image reveal animation
            const projectImage = card.querySelector('.project-image');
            if (projectImage) {
                projectImage.classList.add('image-refined-reveal');
            }
            
            // Add tech tag animation with improved staggering
            const techTags = card.querySelectorAll('.tech-tag');
            techTags.forEach((tag, tagIndex) => {
                // Set custom property for staggered animations
                tag.style.setProperty('--i', tagIndex);
                tag.style.animationDelay = `${0.2 + (tagIndex * 0.12)}s`;
            });
            
            // Add magnetic effect to project links
            const links = card.querySelectorAll('.project-link');
            links.forEach(link => {
                link.addEventListener('mouseenter', handleMagneticEnter);
                link.addEventListener('mouseleave', handleMagneticLeave);
                link.addEventListener('mousemove', handleMagneticMove);
            });
        });
    }
    
    // Handle refined mouse enter effect
    function handleRefinedMouseEnter() {
        const card = this;
        
        // Add smooth transition for all properties
        card.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
        
        // Add depth effect with enhanced shadow
        card.style.boxShadow = '0 30px 70px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(100, 255, 218, 0.7) inset, 0 0 50px rgba(100, 255, 218, 0.3)';
        
        // Add subtle scale and lift effect
        card.style.transform = 'translateY(-10px) scale(1.02)';
        
        // Enhance border with glow
        card.style.borderColor = 'rgba(100, 255, 218, 0.5)';
        
        // Add title effect with enhanced glow
        const title = card.querySelector('h3');
        if (title) {
            title.classList.add('title-hover-enhanced');
            title.style.textShadow = '0 0 10px rgba(100, 255, 218, 0.4)';
        }
        
        // Add refined particle effect
        createRefinedParticles(card);
        
        // Add subtle background pulse with improved gradient
        addRefinedBackgroundPulse(card);
        
        // Add enhanced image effect
        const image = card.querySelector('.project-image');
        if (image) {
            image.style.transform = 'scale(1.15)';
            image.style.filter = 'brightness(1.2) contrast(1.25) saturate(1.3)';
        }
        
        // Add enhanced border to image container
        const imageContainer = card.querySelector('.project-image-container');
        if (imageContainer) {
            imageContainer.style.borderBottomColor = 'rgba(100, 255, 218, 0.5)';
            imageContainer.style.borderBottomWidth = '2px';
        }
        
        // Add staggered animation to tech tags
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'translateY(-5px)';
                tag.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.25), 0 0 15px rgba(100, 255, 218, 0.5)';
            }, index * 60);
        });
        
        // Add enhanced description effect with improved readability
        const description = card.querySelector('.project-description');
        if (description) {
            description.style.borderLeftColor = 'rgba(100, 255, 218, 0.7)';
            description.style.borderLeftWidth = '3px';
            description.style.paddingLeft = '1.2rem';
            description.style.color = 'var(--foreground)';
            description.style.transform = 'translateX(8px)';
            description.style.background = 'linear-gradient(90deg, rgba(100, 255, 218, 0.05), transparent)';
            description.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.1)';
            description.style.textShadow = '0 0 1px rgba(255, 255, 255, 0.2)';
            description.style.letterSpacing = '0.02em';
        }
        
        // Add enhanced effect to project links with staggered animation
        const links = card.querySelectorAll('.project-link');
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.transform = 'translateY(-7px)';
                link.style.background = 'rgba(100, 255, 218, 0.15)';
                link.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2), 0 0 20px rgba(100, 255, 218, 0.4)';
            }, index * 120);
        });
    }
    
    // Handle refined mouse leave effect
    function handleRefinedMouseLeave() {
        const card = this;
        
        // Reset all properties with smooth transition
        card.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        card.style.transform = '';
        card.style.boxShadow = '';
        card.style.borderColor = '';
        
        // Reset title effect
        const title = card.querySelector('h3');
        if (title) {
            title.classList.remove('title-hover-enhanced');
            title.style.textShadow = '';
        }
        
        // Remove refined particles with fade out
        removeRefinedParticles(card);
        
        // Remove background pulse
        removeRefinedBackgroundPulse(card);
        
        // Reset image
        const image = card.querySelector('.project-image');
        if (image) {
            image.style.transform = '';
            image.style.filter = '';
        }
        
        // Reset image container
        const imageContainer = card.querySelector('.project-image-container');
        if (imageContainer) {
            imageContainer.style.borderBottomColor = '';
            imageContainer.style.borderBottomWidth = '';
        }
        
        // Reset tech tags with staggered animation
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = '';
                tag.style.boxShadow = '';
            }, index * 40);
        });
        
        // Reset description
        const description = card.querySelector('.project-description');
        if (description) {
            description.style.borderLeftColor = '';
            description.style.borderLeftWidth = '';
            description.style.paddingLeft = '';
            description.style.color = '';
            description.style.transform = '';
        }
        
        // Reset project links with staggered animation
        const links = card.querySelectorAll('.project-link');
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.transform = '';
                link.style.background = '';
                link.style.boxShadow = '';
            }, index * 80);
        });
    }
    
    // Handle refined mouse move effect for enhanced parallax
    function handleRefinedMouseMove(e) {
        const card = this;
        const rect = card.getBoundingClientRect();
        
        // Calculate mouse position relative to card center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Calculate normalized values (-1 to 1)
        const normalizedX = mouseX / (rect.width / 2);
        const normalizedY = mouseY / (rect.height / 2);
        
        // Add subtle parallax effect to image with improved smoothness
        const image = card.querySelector('.project-image');
        if (image) {
            const moveX = -normalizedX * 12;
            const moveY = -normalizedY * 12;
            image.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px)`;
        }
        
        // Add subtle movement to project title
        const title = card.querySelector('h3');
        if (title) {
            const titleX = normalizedX * 6;
            const titleY = normalizedY * 4;
            title.style.transform = `translate(${titleX}px, ${titleY}px)`;
        }
        
        // Add subtle movement to tech tags with staggered effect
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            const offsetX = normalizedX * 4 * (index + 1) * 0.2;
            const offsetY = normalizedY * 4 * (index + 1) * 0.2;
            tag.style.transform = `translateY(-5px) translate(${offsetX}px, ${offsetY}px)`;
        });
        
        // Add subtle movement to project links
        const links = card.querySelectorAll('.project-link');
        links.forEach((link, index) => {
            const linkX = normalizedX * 6 * (index + 1) * 0.3;
            const linkY = normalizedY * 6 * (index + 1) * 0.3;
            link.style.transform = `translateY(-7px) translate(${linkX}px, ${linkY}px)`;
        });
        
        // Add subtle movement to project description
        const description = card.querySelector('.project-description');
        if (description) {
            const descX = normalizedX * 4;
            const descY = normalizedY * 3;
            description.style.transform = `translateX(8px) translate(${descX}px, ${descY}px)`;
        }
        
        // Add dynamic lighting effect based on mouse position
        const lightingX = (normalizedX * 0.5 + 0.5) * 100;
        const lightingY = (normalizedY * 0.5 + 0.5) * 100;
        card.style.background = `linear-gradient(135deg, rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.98)), radial-gradient(circle at ${lightingX}% ${lightingY}%, rgba(100, 255, 218, 0.12), transparent 60%)`;
    }
    
    // Create refined particles effect
    function createRefinedParticles(card) {
        // Create a container for particles if it doesn't exist
        let particleContainer = card.querySelector('.refined-particle-container');
        
        if (!particleContainer) {
            particleContainer = document.createElement('div');
            particleContainer.className = 'refined-particle-container';
            particleContainer.style.position = 'absolute';
            particleContainer.style.top = '0';
            particleContainer.style.left = '0';
            particleContainer.style.width = '100%';
            particleContainer.style.height = '100%';
            particleContainer.style.pointerEvents = 'none';
            particleContainer.style.zIndex = '1';
            particleContainer.style.overflow = 'hidden';
            card.appendChild(particleContainer);
        }
        
        // Create particles with varied properties
        for (let i = 0; i < 18; i++) {
            const particle = document.createElement('div');
            particle.className = 'refined-particle';
            particle.style.position = 'absolute';
            
            // Randomize particle size
            const size = Math.random() * 8 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Randomize particle color with slight variations
            const hue = Math.random() * 30 + 160; // Cyan-ish color range
            const saturation = Math.random() * 30 + 70;
            const lightness = Math.random() * 30 + 60;
            particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;
            
            // Randomize particle position
            particle.style.borderRadius = '50%';
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            
            // Add enhanced glow effect
            particle.style.boxShadow = `0 0 ${Math.random() * 8 + 4}px rgba(100, 255, 218, 0.8)`;
            
            // Set initial state
            particle.style.opacity = '0';
            particle.style.transform = 'scale(0)';
            
            // Add animation with randomized duration and delay
            const duration = Math.random() * 2.5 + 1.5;
            const delay = Math.random() * 0.6;
            particle.style.animation = `refinedParticleAnimation ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s forwards`;
            
            particleContainer.appendChild(particle);
        }
    }
    
    // Remove refined particles
    function removeRefinedParticles(card) {
        const particleContainer = card.querySelector('.refined-particle-container');
        if (particleContainer) {
            // Fade out and remove particles
            const particles = particleContainer.querySelectorAll('.refined-particle');
            particles.forEach(particle => {
                particle.style.animation = 'enhancedParticleFadeOut 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards';
                setTimeout(() => {
                    if (particle.parentNode === particleContainer) {
                        particleContainer.removeChild(particle);
                    }
                }, 800);
            });
        }
    }
    
    // Add refined background pulse effect
    function addRefinedBackgroundPulse(card) {
        let pulseElement = card.querySelector('.refined-background-pulse');
        
        if (!pulseElement) {
            pulseElement = document.createElement('div');
            pulseElement.className = 'refined-background-pulse';
            pulseElement.style.position = 'absolute';
            pulseElement.style.top = '0';
            pulseElement.style.left = '0';
            pulseElement.style.width = '100%';
            pulseElement.style.height = '100%';
            pulseElement.style.borderRadius = 'inherit';
            pulseElement.style.background = 'radial-gradient(circle at center, rgba(100, 255, 218, 0.18), transparent 70%)';
            pulseElement.style.opacity = '0';
            pulseElement.style.pointerEvents = 'none';
            pulseElement.style.zIndex = '0';
            pulseElement.style.animation = 'refinedPulseAnimation 3s cubic-bezier(0.2, 0.8, 0.2, 1) infinite';
            
            card.insertBefore(pulseElement, card.firstChild);
        }
    }
    
    // Remove refined background pulse effect
    function removeRefinedBackgroundPulse(card) {
        const pulseElement = card.querySelector('.refined-background-pulse');
        if (pulseElement) {
            pulseElement.style.animation = 'fadeOut 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards';
            setTimeout(() => {
                if (pulseElement.parentNode === card) {
                    card.removeChild(pulseElement);
                }
            }, 800);
        }
    }
    
    // Handle magnetic effect for links - mouseenter
    function handleMagneticEnter() {
        const link = this;
        link.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.3s ease';
        link.style.transform = 'translateY(-7px)';
        link.style.background = 'rgba(100, 255, 218, 0.15)';
    }
    
    // Handle magnetic effect for links - mouseleave
    function handleMagneticLeave() {
        const link = this;
        link.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.5s ease';
        link.style.transform = '';
        link.style.background = '';
    }
    
    // Handle magnetic effect for links - mousemove
    function handleMagneticMove(e) {
        const link = this;
        const rect = link.getBoundingClientRect();
        
        // Calculate mouse position relative to link center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Calculate normalized values (-1 to 1)
        const normalizedX = mouseX / (rect.width / 2);
        const normalizedY = mouseY / (rect.height / 2);
        
        // Add magnetic pull effect (stronger when closer to center)
        const maxPull = 10;
        const pullX = normalizedX * maxPull;
        const pullY = normalizedY * maxPull;
        
        // Apply magnetic effect
        link.style.transform = `translateY(-7px) translate(${pullX}px, ${pullY}px)`;
        
        // Add dynamic lighting effect based on mouse position
        const icon = link.querySelector('i');
        if (icon) {
            icon.style.transform = `translateX(${normalizedX * 5}px) scale(1.2)`;
        }
    }
});
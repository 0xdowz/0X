document.addEventListener('DOMContentLoaded', function() {
    // Select all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Initialize enhanced hover effects
    projectCards.forEach(card => {
        // Add enhanced hover effects
        card.addEventListener('mouseenter', handleEnhancedHover);
        card.addEventListener('mouseleave', handleEnhancedLeave);
        card.addEventListener('mousemove', handleEnhancedMove);
        
        // Add random animation delay for staggered entrance
        card.style.animationDelay = `${Math.random() * 0.5 + 0.1}s`;
        
        // Add image reveal animation class
        const projectImage = card.querySelector('.project-image');
        if (projectImage) {
            projectImage.classList.add('image-advanced-reveal');
        }
        
        // Add tech tag animation with improved staggering
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            tag.style.animationDelay = `${0.2 + (index * 0.12)}s`;
            tag.classList.add('tech-tag-animate');
        });
    });
    
    // Handle enhanced hover effect
    function handleEnhancedHover() {
        const card = this;
        
        // Add smooth transition for all properties
        card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        
        // Add subtle sound effect (optional - commented out by default)
        // playHoverSound();
        
        // Animate the project title with enhanced effect
        const title = card.querySelector('h3');
        if (title) {
            title.classList.add('title-hover-effect');
            title.style.transform = 'translateX(5px)';
            title.style.textShadow = '0 0 10px rgba(100, 255, 218, 0.4)';
        }
        
        // Add enhanced particle effect
        createEnhancedParticles(card);
        
        // Add subtle background pulse
        addBackgroundPulse(card);
        
        // Enhance image with advanced effects
        const image = card.querySelector('.project-image');
        if (image) {
            image.style.transform = 'scale(1.15) rotate(1deg)';
            image.style.filter = 'brightness(1.2) contrast(1.25) saturate(1.3)';
        }
        
        // Add tech stack float effect with staggered animation
        const techStack = card.querySelector('.project-tech-stack');
        if (techStack) {
            techStack.style.transform = 'translateY(-5px)';
        }
        
        // Add staggered animation to tech tags
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'translateY(-5px) scale(1.05)';
                tag.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15), 0 0 8px rgba(100, 255, 218, 0.3)';
            }, index * 50);
        });
        
        // Add description highlight with enhanced effect
        const description = card.querySelector('.project-description');
        if (description) {
            description.style.borderLeftColor = 'rgba(100, 255, 218, 0.7)';
            description.style.borderLeftWidth = '3px';
            description.style.color = 'var(--foreground)';
            description.style.transform = 'translateX(8px)';
            description.style.textShadow = '0 0 1px rgba(255, 255, 255, 0.1)';
        }
        
        // Add enhanced effect to project links with staggered animation
        const links = card.querySelectorAll('.project-link');
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.transform = 'translateY(-5px)';
                link.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15), 0 0 15px rgba(100, 255, 218, 0.3)';
            }, index * 100);
        });
    }
    
    // Handle enhanced leave effect
    function handleEnhancedLeave() {
        const card = this;
        
        // Reset all properties with smooth transition
        card.style.transition = 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
        
        // Reset title effect
        const title = card.querySelector('h3');
        if (title) {
            title.classList.remove('title-hover-effect');
            title.style.transform = '';
            title.style.textShadow = '';
        }
        
        // Remove enhanced particles
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
        
        // Reset tech tags with staggered animation
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = '';
                tag.style.boxShadow = '';
            }, index * 30);
        });
        
        // Reset description
        const description = card.querySelector('.project-description');
        if (description) {
            description.style.borderLeftColor = '';
            description.style.borderLeftWidth = '';
            description.style.color = '';
            description.style.transform = '';
            description.style.textShadow = '';
        }
        
        // Reset project links with staggered animation
        const links = card.querySelectorAll('.project-link');
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.transform = '';
                link.style.boxShadow = '';
            }, index * 50);
        });
    }
    
    // Handle enhanced move effect for subtle parallax
    function handleEnhancedMove(e) {
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
        
        // Add subtle parallax effect to image
        const image = card.querySelector('.project-image');
        if (image) {
            const moveX = -normalizedX * 10;
            const moveY = -normalizedY * 10;
            image.style.transform = `scale(1.15) rotate(1deg) translate(${moveX}px, ${moveY}px)`;
        }
        
        // Add subtle movement to project title
        const title = card.querySelector('h3');
        if (title) {
            const titleX = normalizedX * 5;
            const titleY = normalizedY * 3;
            title.style.transform = `translateX(5px) translate(${titleX}px, ${titleY}px)`;
        }
        
        // Add subtle movement to tech tags with staggered effect
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            const offsetX = normalizedX * 3 * (index + 1) * 0.2;
            const offsetY = normalizedY * 3 * (index + 1) * 0.2;
            tag.style.transform = `translateY(-5px) translate(${offsetX}px, ${offsetY}px)`;
        });
        
        // Add subtle movement to project links
        const links = card.querySelectorAll('.project-link');
        links.forEach((link, index) => {
            const linkX = normalizedX * 5 * (index + 1) * 0.3;
            const linkY = normalizedY * 5 * (index + 1) * 0.3;
            link.style.transform = `translateY(-5px) translate(${linkX}px, ${linkY}px)`;
        });
        
        // Add subtle movement to project description
        const description = card.querySelector('.project-description');
        if (description) {
            const descX = normalizedX * 3;
            const descY = normalizedY * 2;
            description.style.transform = `translateX(8px) translate(${descX}px, ${descY}px)`;
        }
    }
    
    // Create enhanced particles effect
    function createEnhancedParticles(card) {
        // Create a container for particles if it doesn't exist
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
            particleContainer.style.zIndex = '1';
            particleContainer.style.overflow = 'hidden';
            card.appendChild(particleContainer);
        }
        
        // Create 15 particles with varied properties
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'enhanced-particle';
            particle.style.position = 'absolute';
            
            // Randomize particle size
            const size = Math.random() * 6 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Randomize particle color with slight variations
            const hue = Math.random() * 20 + 170; // Cyan-ish color range
            const saturation = Math.random() * 20 + 80;
            const lightness = Math.random() * 20 + 70;
            particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.7)`;
            
            // Randomize particle position
            particle.style.borderRadius = '50%';
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            
            // Add glow effect
            particle.style.boxShadow = `0 0 ${Math.random() * 5 + 3}px rgba(100, 255, 218, 0.7)`;
            
            // Set initial state
            particle.style.opacity = '0';
            particle.style.transform = 'scale(0)';
            
            // Add animation with randomized duration and delay
            const duration = Math.random() * 2 + 1.5;
            const delay = Math.random() * 0.5;
            particle.style.animation = `enhancedParticleAnimation ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s forwards`;
            
            particleContainer.appendChild(particle);
        }
    }
    
    // Remove enhanced particles
    function removeEnhancedParticles(card) {
        const particleContainer = card.querySelector('.enhanced-particle-container');
        if (particleContainer) {
            // Fade out and remove particles
            const particles = particleContainer.querySelectorAll('.enhanced-particle');
            particles.forEach(particle => {
                particle.style.animation = 'enhancedParticleFadeOut 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards';
                setTimeout(() => {
                    if (particle.parentNode === particleContainer) {
                        particleContainer.removeChild(particle);
                    }
                }, 700);
            });
        }
    }
    
    // Add background pulse effect
    function addBackgroundPulse(card) {
        let pulseElement = card.querySelector('.background-pulse');
        
        if (!pulseElement) {
            pulseElement = document.createElement('div');
            pulseElement.className = 'background-pulse';
            pulseElement.style.position = 'absolute';
            pulseElement.style.top = '0';
            pulseElement.style.left = '0';
            pulseElement.style.width = '100%';
            pulseElement.style.height = '100%';
            pulseElement.style.borderRadius = 'inherit';
            pulseElement.style.background = 'radial-gradient(circle at center, rgba(100, 255, 218, 0.15), transparent 70%)';
            pulseElement.style.opacity = '0';
            pulseElement.style.pointerEvents = 'none';
            pulseElement.style.zIndex = '0';
            pulseElement.style.animation = 'pulseAnimation 2.5s cubic-bezier(0.22, 1, 0.36, 1) infinite';
            
            card.insertBefore(pulseElement, card.firstChild);
        }
    }
    
    // Remove background pulse effect
    function removeBackgroundPulse(card) {
        const pulseElement = card.querySelector('.background-pulse');
        if (pulseElement) {
            pulseElement.style.animation = 'fadeOut 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards';
            setTimeout(() => {
                if (pulseElement.parentNode === card) {
                    card.removeChild(pulseElement);
                }
            }, 700);
        }
    }
    
    // Optional: Play a subtle hover sound
    function playHoverSound() {
        const audio = new Audio();
        audio.src = 'hover-sound.mp3'; // You would need to add this file
        audio.play();
    }
});

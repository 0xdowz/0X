document.addEventListener('DOMContentLoaded', function() {
    // Select all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add 3D tilt effect to each project card
    projectCards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        card.addEventListener('mouseenter', handleMouseEnter);
        
        // Add random animation delay to stagger the entrance animations
        card.style.animationDelay = `${Math.random() * 0.5}s`;
        
        // Add tech tag animation
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            tag.style.animationDelay = `${0.1 + (index * 0.1)}s`;
            tag.classList.add('tech-tag-animate');
        });
    });
    
    // Handle mouse enter effect
    function handleMouseEnter() {
        const card = this;
        
        // Add a subtle scale up animation
        card.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
        
        // Add a subtle sound effect (optional - commented out by default)
        // playHoverSound();
        
        // Animate the project title underline
        const title = card.querySelector('h3');
        if (title) {
            title.classList.add('title-hover-effect');
        }
        
        // Add particle effect behind the card (subtle)
        createParticles(card);
    }
    
    // Handle the tilt effect based on mouse position
    function handleTilt(e) {
        const card = this;
        const cardRect = card.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        
        // Calculate mouse position relative to the card center
        const centerX = cardRect.left + cardWidth / 2;
        const centerY = cardRect.top + cardHeight / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Remove 3D rotation angles and perspective
        // Apply only a subtle scale effect on hover
        card.style.transform = `scale3d(1.05, 1.05, 1.05)`;
        
        // Add a subtle shadow shift based on mouse position with improved glow
        const shadowX = mouseX / 25;
        const shadowY = mouseY / 25;
        card.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(100, 255, 218, 0.3), 
                              0 0 20px rgba(100, 255, 218, 0.25) inset, 
                              0 0 8px rgba(100, 255, 218, 0.15)`;
        
        // Add a subtle border glow
        card.style.border = '1px solid rgba(100, 255, 218, 0.4)';
        
        // Move the image with enhanced parallax effect
        const image = card.querySelector('.project-image');
        if (image) {
            image.style.transform = `translateX(${-mouseX / 20}px) translateY(${-mouseY / 20}px) scale(1.1)`;
        }
        
        // Add subtle movement to project links with staggered effect
        const links = card.querySelectorAll('.project-link');
        links.forEach((link, index) => {
            const offsetX = (mouseX / 50) * (index + 1) * 0.3;
            const offsetY = (mouseY / 50) * (index + 1) * 0.3;
            link.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            link.style.transition = `transform 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.05}s`;
        });
        
        // Add subtle movement to tech tags with staggered effect
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            const offsetX = (mouseX / 70) * (index + 1) * 0.2;
            const offsetY = (mouseY / 70) * (index + 1) * 0.2;
            tag.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            tag.style.transition = `transform 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.05}s`;
        });
        
        // Add subtle movement to project description
        const description = card.querySelector('.project-description');
        if (description) {
            const offsetX = mouseX / 100;
            const offsetY = mouseY / 100;
            description.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            description.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
        }
    }
    
    // Reset the card to its original state when mouse leaves
    function resetTilt() {
        this.style.transform = '';
        this.style.boxShadow = '';
        this.style.border = '';
        
        const image = this.querySelector('.project-image');
        if (image) {
            image.style.transform = '';
        }
        
        // Reset links
        const links = this.querySelectorAll('.project-link');
        links.forEach(link => {
            link.style.transform = '';
        });
        
        // Reset tech tags
        const techTags = this.querySelectorAll('.tech-tag');
        techTags.forEach(tag => {
            tag.style.transform = '';
        });
        
        // Reset description
        const description = this.querySelector('.project-description');
        if (description) {
            description.style.transform = '';
        }
        
        // Reset title effect
        const title = this.querySelector('h3');
        if (title) {
            title.classList.remove('title-hover-effect');
        }
        
        // Remove particles
        removeParticles(this);
    }
    
    // Create particle effect
    function createParticles(card) {
        // Create a container for particles if it doesn't exist
        let particleContainer = card.querySelector('.particle-container');
        
        if (!particleContainer) {
            particleContainer = document.createElement('div');
            particleContainer.className = 'particle-container';
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
        
        // Create 10 particles
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.width = `${Math.random() * 5 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = 'rgba(100, 255, 218, 0.5)';
            particle.style.borderRadius = '50%';
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.opacity = '0';
            particle.style.transform = 'scale(0)';
            particle.style.animation = `particleAnimation ${Math.random() * 2 + 1}s ease-out forwards`;
            particleContainer.appendChild(particle);
        }
    }
    
    // Remove particles
    function removeParticles(card) {
        const particleContainer = card.querySelector('.particle-container');
        if (particleContainer) {
            // Fade out and remove particles
            const particles = particleContainer.querySelectorAll('.particle');
            particles.forEach(particle => {
                particle.style.animation = 'particleFadeOut 0.5s ease-out forwards';
                setTimeout(() => {
                    if (particle.parentNode === particleContainer) {
                        particleContainer.removeChild(particle);
                    }
                }, 500);
            });
        }
    }
    
    // Optional: Play a subtle hover sound
    function playHoverSound() {
        const audio = new Audio();
        audio.src = 'hover-sound.mp3'; // You would need to add this file
        audio.volume = 0.1; // Very quiet
        audio.play().catch(e => console.log('Audio play prevented by browser'));
    }
    
    // Add scroll reveal animation with improved options
    const observerOptions = {
        threshold: 0.2, // Increased from 0.15
        rootMargin: '0px 0px -80px 0px' // Adjusted to trigger earlier
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add staggered animation to child elements with improved timing
                const childElements = entry.target.querySelectorAll('.project-content > *');
                childElements.forEach((el, index) => {
                    el.style.transitionDelay = `${0.15 + (index * 0.12)}s`;
                    el.classList.add('content-revealed');
                });
                
                // Add a special animation for the project image
                const projectImage = entry.target.querySelector('.project-image');
                if (projectImage) {
                    projectImage.classList.add('image-revealed');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all project cards
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add filter functionality for projects
    setupProjectFilters();
    
    // Add CSS for new animations
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced tech tag animation */
        .tech-tag-animate {
            opacity: 0;
            transform: translateY(15px);
            animation: tagFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes tagFadeIn {
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Enhanced content reveal animation */
        .content-revealed {
            opacity: 0;
            transform: translateY(25px);
            animation: contentFadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes contentFadeIn {
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Image reveal animation */
        .image-revealed {
            animation: imageReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes imageReveal {
            0% { transform: scale(1.1); filter: blur(5px) brightness(0.8); }
            100% { transform: scale(1); filter: blur(0) brightness(1); }
        }
        
        /* Title hover effect */
        .title-hover-effect::after {
            width: 80% !important;
            box-shadow: 0 0 12px rgba(100, 255, 218, 0.7) !important;
        }
        
        /* Particle animations */
        @keyframes particleAnimation {
            0% { opacity: 0; transform: scale(0) translateY(0); }
            50% { opacity: 0.8; transform: scale(1) translateY(-20px); }
            100% { opacity: 0; transform: scale(0.5) translateY(-40px); }
        }
        
        @keyframes particleFadeOut {
            to { opacity: 0; transform: scale(0); }
        }
        
        /* Project card hover state improvements */
        .project-card:hover .project-tech-stack {
            transform: translateY(-5px);
        }
        
        .project-card:hover .project-description {
            opacity: 1;
            transform: translateX(8px);
            border-left-color: rgba(100, 255, 218, 0.5);
        }
    `;
    document.head.appendChild(style);
    
    // Setup project filters
    function setupProjectFilters() {
        // Create filter container if it doesn't exist
        if (!document.querySelector('.project-filters')) {
            const projectsSection = document.querySelector('.projects-section .container');
            const filtersContainer = document.createElement('div');
            filtersContainer.className = 'project-filters animate-on-scroll';
            
            // Add filter buttons
            const filterOptions = ['All', 'Web Dev', 'Design', 'Security', 'AI'];
            
            filterOptions.forEach(filter => {
                const filterBtn = document.createElement('button');
                filterBtn.className = 'filter-btn';
                filterBtn.textContent = filter;
                filterBtn.setAttribute('data-filter', filter.toLowerCase().replace(' ', '-'));
                
                if (filter === 'All') {
                    filterBtn.classList.add('active');
                }
                
                filterBtn.addEventListener('click', handleFilterClick);
                filtersContainer.appendChild(filterBtn);
            });
            
            // Insert filters after the subtitle
            const subtitle = document.querySelector('.section-subtitle');
            if (subtitle && subtitle.nextElementSibling) {
                projectsSection.insertBefore(filtersContainer, subtitle.nextElementSibling);
            } else if (projectsSection) {
                projectsSection.appendChild(filtersContainer);
            }
        }
    }
    
    // Handle filter button clicks
    function handleFilterClick() {
        // Remove active class from all filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get the filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter the projects
        projectCards.forEach(card => {
            // Remove previous filter classes
            card.classList.remove('filtered-in', 'filtered-out');
            
            // If 'all' is selected or the card has the selected category, show it
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.add('filtered-in');
                setTimeout(() => {
                    card.style.display = 'flex';
                }, 10);
            } else {
                // Otherwise hide it with animation
                card.classList.add('filtered-out');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 500); // Match this to the CSS animation duration
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Select all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add 3D tilt effect to each project card
    projectCards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        card.addEventListener('click', handleClick);
        
        // Add random animation delay to stagger the entrance animations
        card.style.animationDelay = `${Math.random() * 0.5}s`;
        
        // Add tech tag animation
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            tag.style.animationDelay = `${0.1 + (index * 0.1)}s`;
            tag.classList.add('tech-tag-animate');
        });
    });
    
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
        
        // Calculate rotation angles (limited to small values for subtle effect)
        const rotateY = mouseX / (cardWidth / 2) * 8; // Increased from 5 to 8 degrees
        const rotateX = -mouseY / (cardHeight / 2) * 8; // Increased from 5 to 8 degrees
        
        // Apply the transform with improved perspective
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        
        // Add a subtle shadow shift based on mouse position with improved glow
        const shadowX = mouseX / 25;
        const shadowY = mouseY / 25;
        card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(100, 255, 218, 0.25), 0 0 15px rgba(100, 255, 218, 0.2) inset, 0 0 5px rgba(100, 255, 218, 0.1)`;
        
        // Add a subtle border glow
        card.style.border = '1px solid rgba(100, 255, 218, 0.3)';
        
        // Move the image with enhanced parallax effect
        const image = card.querySelector('.project-image');
        if (image) {
            image.style.transform = `translateX(${-mouseX / 24}px) translateY(${-mouseY / 24}px) scale(1.08)`;
        }
        
        // Add subtle movement to project links
        const links = card.querySelectorAll('.project-link');
        links.forEach((link, index) => {
            const offsetX = (mouseX / 60) * (index + 1) * 0.3;
            const offsetY = (mouseY / 60) * (index + 1) * 0.3;
            link.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
        
        // Add subtle movement to tech tags
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            const offsetX = (mouseX / 80) * (index + 1) * 0.2;
            const offsetY = (mouseY / 80) * (index + 1) * 0.2;
            tag.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
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
    }
    
    // Handle click interaction
    function handleClick() {
        // Click handler removed to eliminate pulse animation
    }
    
    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.15, // Increased from 0.1
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add staggered animation to child elements
                const childElements = entry.target.querySelectorAll('.project-content > *');
                childElements.forEach((el, index) => {
                    el.style.transitionDelay = `${0.1 + (index * 0.1)}s`;
                    el.classList.add('content-revealed');
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all project cards
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add CSS for new animations
    const style = document.createElement('style');
    style.textContent = `

        
        .tech-tag-animate {
            opacity: 0;
            transform: translateY(10px);
            animation: tagFadeIn 0.5s ease-out forwards;
        }
        
        @keyframes tagFadeIn {
            to { opacity: 1; transform: translateY(0); }
        }
        
        .content-revealed {
            opacity: 0;
            transform: translateY(20px);
            animation: contentFadeIn 0.5s ease-out forwards;
        }
        
        @keyframes contentFadeIn {
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
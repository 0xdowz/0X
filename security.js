/**
 * Website Security Enhancements
 * This file contains security-related functionality for the website
 */

// Content Security Policy Implementation
const setupCSP = () => {
    // Check if CSP is already set (to avoid duplicates)
    if (document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
        return;
    }
    
    // Create CSP meta tag
    const cspMeta = document.createElement('meta');
    cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
    cspMeta.setAttribute('content', 
        "default-src 'self'; " +
        "script-src 'self' https://cdnjs.cloudflare.com https://www.google.com https://www.gstatic.com https://cdn.jsdelivr.net 'unsafe-inline'; " +
        "style-src 'self' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://fonts.googleapis.com 'unsafe-inline'; " +
        "img-src 'self' data: https:; " +
        "font-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com https://fonts.gstatic.com; " +
        "connect-src 'self' https://formspree.io; " +
        "media-src 'self'; " +
        "object-src 'none'; " +
        "frame-src https://www.google.com https://www.gstatic.com;"
    );
    
    // Add to head
    document.head.prepend(cspMeta);
};

// HTTPS Redirect
const enforceHTTPS = () => {
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
        window.location.href = window.location.href.replace('http:', 'https:');
    }
};

// Add security headers via meta tags
const addSecurityHeaders = () => {
    // X-XSS-Protection
    const xssProtection = document.createElement('meta');
    xssProtection.setAttribute('http-equiv', 'X-XSS-Protection');
    xssProtection.setAttribute('content', '1; mode=block');
    document.head.prepend(xssProtection);
    
    // X-Content-Type-Options
    const contentTypeOptions = document.createElement('meta');
    contentTypeOptions.setAttribute('http-equiv', 'X-Content-Type-Options');
    contentTypeOptions.setAttribute('content', 'nosniff');
    document.head.prepend(contentTypeOptions);
    
    // Referrer-Policy
    const referrerPolicy = document.createElement('meta');
    referrerPolicy.setAttribute('name', 'referrer');
    referrerPolicy.setAttribute('content', 'strict-origin-when-cross-origin');
    document.head.prepend(referrerPolicy);
    
    // Permissions-Policy
    const permissionsPolicy = document.createElement('meta');
    permissionsPolicy.setAttribute('http-equiv', 'Permissions-Policy');
    permissionsPolicy.setAttribute('content', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
    document.head.prepend(permissionsPolicy);
};

// Add SRI (Subresource Integrity) attributes to external resources
const addSRIAttributes = () => {
    // This is a placeholder function - in a real implementation,
    // you would need to calculate the hash values for each external resource
    // and add them to the integrity attribute
    console.log('SRI attributes should be added to external resources');
    // Example: <link rel="stylesheet" href="https://example.com/style.css" integrity="sha384-..." crossorigin="anonymous">
};

// Sanitize user inputs
const sanitizeInput = (input) => {
    if (!input) return '';
    return input
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove control characters
        .trim();
};

// Initialize all security features
const initSecurity = () => {
    enforceHTTPS();
    setupCSP();
    addSecurityHeaders();
};

// Run security initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initSecurity);

// Export functions for use in other scripts
window.securityUtils = {
    sanitizeInput,
    enforceHTTPS
};
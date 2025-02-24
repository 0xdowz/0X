// Enhanced Notification System
class NotificationSystem {
    constructor() {
        // Create container only if it doesn't exist
        this.container = document.querySelector('.notification-container') || (() => {
            const container = document.createElement('div');
            container.className = 'notification-container';
            document.body.appendChild(container);
            return container;
        })();

        // Queue for managing multiple notifications
        this.queue = [];
        this.isProcessing = false;
    }

    /**
     * Show a success notification message
     * @param {string} message - The message to display
     * @param {number} duration - Duration in milliseconds to show the notification
     */
    show(message, duration = 5000) {
        // Only show success messages
        this.queue.push({ message, duration });
        
        // Process queue if not already processing
        if (!this.isProcessing) {
            this.processQueue();
        }
    }

    /**
     * Process the notification queue
     * @private
     */
    async processQueue() {
        if (this.queue.length === 0) {
            this.isProcessing = false;
            return;
        }

        this.isProcessing = true;
        const { message, duration } = this.queue.shift();

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification success glass-effect';
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');

        // Create content
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-check-circle"></i>
                <p>${this.escapeHtml(message)}</p>
            </div>
        `;

        // Add to container
        this.container.appendChild(notification);

        // Trigger animation
        await this.animateNotification(notification, true);

        // Set auto-hide timer
        const timer = setTimeout(() => this.hideNotification(notification), duration);

        // Clear timer if notification is manually closed
        notification.addEventListener('click', () => {
            clearTimeout(timer);
            this.hideNotification(notification);
        });
    }

    /**
     * Hide and remove a notification
     * @private
     * @param {HTMLElement} notification - The notification element to hide
     */
    async hideNotification(notification) {
        await this.animateNotification(notification, false);
        notification.remove();

        // Process next notification if any
        this.processQueue();
    }

    /**
     * Animate notification in/out
     * @private
     * @param {HTMLElement} notification - The notification element to animate
     * @param {boolean} show - Whether to show or hide the notification
     */
    animateNotification(notification, show) {
        return new Promise(resolve => {
            // Add transition end listener
            const handleTransitionEnd = () => {
                notification.removeEventListener('transitionend', handleTransitionEnd);
                resolve();
            };
            notification.addEventListener('transitionend', handleTransitionEnd);

            // Trigger animation
            requestAnimationFrame(() => {
                notification.classList.toggle('show', show);
            });
        });
    }

    /**
     * Escape HTML to prevent XSS
     * @private
     * @param {string} unsafe - The unsafe string to escape
     * @returns {string} - The escaped string
     */
    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    /**
     * Clear all notifications
     */
    clearAll() {
        this.queue = [];
        const notifications = this.container.querySelectorAll('.notification');
        notifications.forEach(notification => this.hideNotification(notification));
    }
}

// Initialize notification system
const notificationSystem = new NotificationSystem();

// Export for use in other files
window.notificationSystem = notificationSystem;
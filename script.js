// تأثير ظهور العناصر عند التمرير
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
};

// تأثير تحريك البار العلوي
const handleNavbar = () => {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
            nav.classList.remove('scroll-up');
            nav.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
            nav.classList.remove('scroll-down');
            nav.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
};

// تأثير تحريك النص
const handleTextEffect = () => {
    const titles = document.querySelectorAll('.animate-text');
    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${i * 0.1}s`;
            title.appendChild(span);
        });
    });
};

// تفعيل كل التأثيرات
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
    handleNavbar();
    handleTextEffect();
});

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

// التحكم في القائمة المنسدلة
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
let isMenuOpen = false;

const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // تأثير ظهور العناصر بشكل متتالي
    const menuItems = navMenu.querySelectorAll('li');
    menuItems.forEach((item, index) => {
        if (isMenuOpen) {
            item.style.transitionDelay = `${0.1 * index}s`;
        } else {
            item.style.transitionDelay = '0s';
        }
    });
};

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// إغلاق القائمة عند النقر على أي رابط
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    });
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', (e) => {
    if (isMenuOpen && !menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        toggleMenu();
    }
});

// إغلاق القائمة عند التمرير
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && isMenuOpen) {
        toggleMenu();
    }
    lastScroll = currentScroll;
}); 
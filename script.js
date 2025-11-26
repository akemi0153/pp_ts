// Main JavaScript for Privacy Policy and Terms of Service

document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
    initSmoothScroll();
    initProgressBar();
    addScrollAnimations();
});

// Back to Top Button
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Progress Bar
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #4f46e5, #8b5cf6);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Scroll Animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 't' || e.key === 'T') {
        if (!e.ctrlKey && !e.metaKey) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});

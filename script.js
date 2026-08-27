// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.feature-card, .download-card, .changelog-item, .stat').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    } else {
        nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.04)';
    }
});

// Parallax orbs
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    if (orb1) orb1.style.transform = `translateY(${y * 0.1}px)`;
    if (orb2) orb2.style.transform = `translateY(${y * -0.08}px)`;
});

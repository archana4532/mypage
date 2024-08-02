// Toggle the mobile menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth scrolling for anchor links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('show');
    });
});

// Fade-in animation for hero section
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in-animate');
});
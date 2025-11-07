// Menu Mobile Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Header scroll effect
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}



// Menu hamburg

const menuOpen = document.querySelector('.btn-open-menu');
const menuClose = document.querySelector('.btn-close-menu');
const menu = document.querySelector('.menu-hamburg');
const menuList = document.querySelector('.menu-list');

menuOpen.addEventListener('click', () => {
    menu.classList.add('open');
    setTimeout(() => menuList.classList.add('open'), 100);
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('open');
    setTimeout(() => menuList.classList.remove('open'), 100);
});
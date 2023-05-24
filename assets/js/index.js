// Mobile Menu
let mobileMenu = document.querySelector('.mobile-menu-icon');
let header = document.querySelector('header');

mobileMenu.addEventListener('click', function () {
    header.classList.toggle('menu-active');
});


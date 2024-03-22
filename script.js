var hamburguer = document.querySelector('.mobile-menu');
var mobile_navbar = document.querySelector('.mobile-navbar');

hamburguer.addEventListener('click', function() {
    hamburguer.classList.toggle('fa-bars');
    hamburguer.classList.toggle('fa-x');

    mobile_navbar.classList.toggle('active');
});
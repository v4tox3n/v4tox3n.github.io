var hamburguer = document.querySelector('.mobile-menu');
var mobile_navbar = document.querySelector('.mobile-navbar');

var headerButtons = document.querySelectorAll('.navbar a');

hamburguer.addEventListener('click', function() {
    hamburguer.classList.toggle('fa-bars');
    hamburguer.classList.toggle('fa-x');

    mobile_navbar.classList.toggle('active');
});

headerButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        headerButtons.forEach(function(button){
            button.classList.remove('active');
        })
        this.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const differentHeaderOptions = document.querySelector('.differentHeaderOptions');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    const headerOptions = document.querySelectorAll('.headerOption');
    headerOptions.forEach((option) => {
        option.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    });
});
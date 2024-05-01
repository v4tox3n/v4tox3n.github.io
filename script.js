// WELCOME ALERT
alert("Hi! Thanks for visiting my portfolio, but now it's not ready. I'm making it, so it's not finished. You can see my projects on my github -> adriiiaa12");


// THEMES CHANGER CONFIGURATION
const themes = document.querySelectorAll('.theme');

function toggleActiveThemes() {
    themes.forEach(theme => {
        theme.classList.toggle('active');
    });
}

themes.forEach(theme => {
    theme.addEventListener('click', toggleActiveThemes);
});


// HAMBURGUER MENU (RESPONSIVE WEBSITE)
menu = document.querySelector('.menu-links');

function toggleMenu() {
    menu.classList.toggle('active');
}


// RATING STAR SERVICES CONFIGURATION
const allStars = document.querySelectorAll('.star');

allStars.forEach((star, i) => {
    star.onclick = function () {
        let current_star_rating = i + 1;

        allStars.forEach((star, j) => {
            if (current_star_rating >= j + 1) {
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';
            }

        });
    }
});
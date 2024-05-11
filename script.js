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
const number_stars = document.querySelector('.star_number');

const star_rating_panel = document.querySelector('.star_rating');

const next_button = document.querySelector('.next');
const back_button = document.querySelector('.back');
const send_button = document.querySelector('.send')

const personal_comments_panel = document.querySelector('.personal-comments');
const bad_valorations_panel = document.querySelector('.bad-valorations');
const normal_valorations_panel = document.querySelector('.normal-valorations');
const good_valorations_panel = document.querySelector('.good-valorations');

let rating;

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

        number_stars.innerHTML = current_star_rating + ' of 5';
        rating = current_star_rating;
    }
});

function nextRatingPanel() {
    if (rating === 0) {
        alert('You have not selected any star');
    } else {
        if (rating === 1 || rating === 2) {
            star_rating_panel.classList.add('active');
            next_button.classList.add('active');
            back_button.classList.add('active');
            send_button.classList.add('active');
            personal_comments_panel.classList.add('active');
            bad_valorations_panel.classList.add('active');
        } else if (rating === 3) {
            star_rating_panel.classList.add('active');
            next_button.classList.add('active');
            back_button.classList.add('active');
            send_button.classList.add('active');
            personal_comments_panel.classList.add('active');
            normal_valorations_panel.classList.add('active');
        } else if (rating === 4 || rating === 5) {
            star_rating_panel.classList.add('active');
            next_button.classList.add('active');
            back_button.classList.add('active');
            send_button.classList.add('active');
            personal_comments_panel.classList.add('active');
            good_valorations_panel.classList.add('active');
        }
    }
}

function sendValoration() {
    if (bad_valorations_panel.innerHTML === '' || normal_valorations_panel.innerHTML === '' || good_valorations_panel.innerHTML === '') {
        alert('Please fill the gap with text.');
    } else {
        alert('Sent, thank you very much!');
        window.location.href = 'https://adriiiaa12.github.io#services';
    }
}
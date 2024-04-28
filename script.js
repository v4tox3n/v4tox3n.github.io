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


// ------------------------
const themes = document.querySelectorAll('.theme');
const allObjects = document.querySelectorAll('*');

function toggleActiveThemes() {
    themes.forEach(theme => {
        theme.classList.toggle('active');
    });

    allObjects.forEach(all => {
        all.classList.toggle('light');
    });
}

themes.forEach(theme => {
    theme.addEventListener('click', toggleActiveThemes);
});

const wheel_config = document.querySelector('.wheel');
const config = document.querySelector('.tl');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');

wheel_config.addEventListener('click', function() {
    config.classList.toggle('active');
    icon1.classList.toggle('active');
    icon2.classList.toggle('active');
})
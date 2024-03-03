const list = document.querySelectorAll('.list');
const navEffect = document.querySelector('.navEffect');

function activateList() {
    list.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active');
}

list.forEach((item) => {
    item.addEventListener('click', activateList)
});

const copy_w1 = document.querySelector('.copy_w1');
const copy_w2 = document.querySelector('.copy_w2');
const copy_i = document.querySelector('.copy_i');
const copy_l = document.querySelector('.copy_l');

const go_w = document.querySelector('.go_w');
const go_i = document.querySelector('.go_i');
const go_l = document.querySelector('.go_l');

const text_w1 = document.querySelector('.text_w1');
const text_w2 = document.querySelector('.text_w2');
const text_w = document.querySelector('.text_w');
const text_i = document.querySelector('.text_i');
const text_l = document.querySelector('.text_l');

copy_w1.addEventListener('click', function() {
    // copiar text_w1
});

copy_w2.addEventListener('click', function() {
    // copiar text_w2
});

copy_i.addEventListener('click', function() {
    // copiar text_i
});

copy_l.addEventListener('click', function() {
    // copiar text_l
});

go_w.addEventListener('click', function() {
    // go w
});

go_i.addEventListener('click', function() {
    // go i
});

go_l.addEventListener('click', function() {
    // go l
});

const reservar_button = document.querySelector('.reservar-clases-button');
reservar_button.addEventListener('click', function() {
    window.location.href = 'clases/reservar-clases.html';
});


// Reload page => href = '#home';
// document.addEventListener('reload', function() {
//     window.location.href = 'index.html#home';
// });
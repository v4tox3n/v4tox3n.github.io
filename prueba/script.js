document.addEventListener('DOMContentLoaded', function() {
    language = navigator.language;

    if (language === 'es-ES' || language.startsWith('es')) {
        alert('Bienvendo/a, gracias por entrar en nuestra página, esperamos que encuentres todo lo que estás buscando.');
        spanishLanguageConfiguration()
    } else if (language === 'en-EN' || language.startsWith('en')) {
        alert('Welcome, thanks for entering in our web page, we hope you find all you are looking for.');
        englishLanguageConfiguration()
    } else {
        alert('Welcome, thanks for entering in our web page, we hope you find all you are looking for.');
        alert('Your language is not avaible in this page, so the language is in English, we hope you have any problems with the language. If you do not understant English, you can change your language in the footer page.')
        englishLanguageConfiguration()
    }
})

function spanishLanguageConfiguration() {

}

function englishLanguageConfiguration() {

}

function mobileVSpc() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

var mobileSpan = document.querySelectorAll('.bubblesSpan');

if (mobileVSpc()) {
    mobileSpan.forEach(function(element) {
        element.style.display = 'none';
    });
} else {
    mobileSpan.forEach(function(element) {
        element.style.display = 'block';
    });
}



// ancho pagina
// #inicio al recargar la página
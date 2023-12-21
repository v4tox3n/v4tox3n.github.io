document.addEventListener('DOMContentLoaded', function(){
    if (!window.languageBlockExecuted) {
        var language = navigator.language;
    
        if (language === 'es-ES' || language.startsWith('es')) {
            spanishLanguageConfiguration();
        } else if (language === 'en-EN' || language.startsWith('en')) {
            englishLanguageConfiguration();
        } else {
            // alert('Other language : ' + language);
            englishLanguageConfiguration();
        }
    
        window.languageBlockExecuted = true;
    }
})

anchoModelo = document.querySelector(".menu").offsetWidth;
document.querySelector(".main-container").style.width = anchoModelo + 'px';

var abierto = false;
var altoFaq = document.querySelector(".faq-container").style.height;
var textoFaq = document.querySelector(".preguntas-respuestas-faq");

function encogerFaq() {
    if (abierto) {
        textoFaq.style.opacity = 0;
        document.querySelector(".faq-container").style.height = '65px';
    } else {
        textoFaq.style.opacity = 1;
        document.querySelector(".faq-container").style.height = altoFaq;
    }

    abierto = !abierto;
}

var originalState;

buyButtons = document.querySelectorAll(".buy-button-change-vs");
buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var allElements = document.querySelectorAll('body > *:not(.information-about-buying)');
        var informationBuyDiv = document.querySelector('.information-about-buying');
        informationBuyDiv.classList.remove('quitar-animacion');

        if (!originalState) {
            originalState = {
                elements: [],
                informationBuyDiv: informationBuyDiv.style.display
            };
    
            allElements.forEach(function(element) {
                originalState.elements.push({
                    element: element,
                    display: element.style.display
                });
            });
        }
    
        allElements.forEach(function(element) {
            element.classList.add('borroso');
        });
    
        informationBuyDiv.style.display = 'block';
    
        document.querySelector(".restore-button").style.display = 'block';
    });
})

document.querySelector(".restore-button").addEventListener('click', function() {
    var elementsToRestore = originalState.elements;
    var informationBuyDiv = document.querySelector('.information-about-buying');

    elementsToRestore.forEach(function(element) {
        element.element.style.display = element.display;
    });

    document.querySelectorAll('.borroso').forEach(function(element) {
        element.classList.remove('borroso');
    });
    
    informationBuyDiv.classList.add('quitar-animacion');
    document.querySelector(".restore-button").style.display = 'none';

    function quitAnimationBuyDiv1(){
        informationBuyDiv.style.display = originalState.informationBuyDiv;
    }
    setTimeout(quitAnimationBuyDiv1, 2500);
});

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        var elementsToRestore = originalState.elements;
        var informationBuyDiv = document.querySelector('.information-about-buying');

        elementsToRestore.forEach(function(element) {
            element.element.style.display = element.display;
        });

        document.querySelectorAll('.borroso').forEach(function(element) {
            element.classList.remove('borroso');
        });
        
        informationBuyDiv.classList.add('quitar-animacion');
        document.querySelector(".restore-button").style.display = 'none';

        function quitAnimationBuyDiv(){
            informationBuyDiv.style.display = originalState.informationBuyDiv;
            safepassPanel.style.display = 'none';
        }
        setTimeout(quitAnimationBuyDiv, 2500);
    }
})

function safepassShowPanel() {
    safepassPanel = document.querySelector('.safepassPanel');
    safepassPanel.style.display = 'block';
}

function spanishLanguageConfiguration() {
    alert('Bienvenido/a, gracias por entrar en nuestra página, esperamos que encuentres todo lo que estás buscando.');
}

function englishLanguageConfiguration() {
    document.getElementsByClassName('header-buttons')[0].textContent = 'HOME';
    document.getElementsByClassName('header-buttons')[2].textContent = 'COMUNITY';
    document.getElementsByClassName('header-buttons')[3].textContent = 'SUPPORT';

    document.querySelectorAll('.buy-button-change-vs').textContent = 'Buy';

    document.getElementById('supportTitle').textContent = 'SUPPORT';
    document.getElementById('supportInput').ariaPlaceholder.textContent = 'Name';
    document.getElementById('supportTextArea').ariaPlaceholder.textContent = 'Write your question...';

    document.getElementById('discordTitle').textContent = 'Join our Discord server';
    document.getElementById('discordP').textContent = 'In it questions about web page/bots are sent';
    document.getElementById('discord-button').textContent = 'Join Now';

    document.getElementById('titleFAQ').textContent = 'Frequently Asked Questions';
    document.getElementById('que1').textContent = 'How can I get help?';
    document.getElementById('que2').textContent = 'How can I download the bots that I want?';
    document.getElementById('que3').textContent = 'Can you make a bot that I tell you?';
    document.getElementById('ans1').textContent = 'You can get help sending a message in our Discord server or filling and sending the support form.';
    document.getElementById('ans2').textContent = 'After making the payment (if you must pay for the bot), you must request help in the Discord server by opening a ticket with the "Download Bot" section.';
    document.getElementById('ans3').textContent = 'You can send bots suggestion in our Discord server, opening a ticket in the "tickets" channel with "New Bot" section.';
    
    document.getElementById('copyright').textContent = '&copy; 2024 V4 Bots - All rights reserved';
    alert('Welcome, thanks for entering in our web page, we hope you find all you are looking for.');
}

function scrollToHash() {
    var hash = window.location.hash.substr(1);
    var targetElement = document.getElementById('inicio');

    if(!hash) {
        window.location.hash = 'inicio';
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        window.location.hash.substr(1);
    } else {
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        window.location.hash.substr(1);
    }    
}
window.addEventListener('load', scrollToHash);
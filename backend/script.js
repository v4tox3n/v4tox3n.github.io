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

document.addEventListener('DOMContentLoaded', function() {
    language = navigator.language;

    if (language === 'es-ES' || language.startsWith('es')) {
        alert('Bienvendo/a, gracias por entrar en nuestra página, esperamos que encuentres todo lo que estás buscando.');
        window.scrollToHash();
        spanishLanguageConfiguration()
    } else if (language === 'en-EN' || language.startsWith('en')) {
        alert('Welcome, thanks for entering in our web page, we hope you find all you are looking for.');
        window.scrollToHash();
        englishLanguageConfiguration()
    } else {
        alert('Welcome, thanks for entering in our web page, we hope you find all you are looking for.');
        alert('Your language is not avaible in this page, so the language is in English, we hope you have any problems with the language. If you do not understant English, you can change your language in the footer page.')
        window.scrollToHash();
        englishLanguageConfiguration()
    }
});

function spanishLanguageConfiguration() {
    document.getElementsByClassName('header-buttons')[0].textContent = 'INICIO';
    document.getElementsByClassName('header-buttons')[1].textContent = 'SOLICITAR APLICACIÓN';
    document.getElementsByClassName('header-buttons')[2].textContent = 'SOPORTE';
    document.getElementsByClassName('header-buttons')[3].textContent = 'FAQ';
}

function englishLanguageConfiguration() {
    document.getElementsByClassName('header-buttons')[0].textContent = 'HOME';
    document.getElementsByClassName('header-buttons')[1].textContent = 'REQUEST APPLICATION';
    document.getElementsByClassName('header-buttons')[2].textContent = 'SUPPORT';
    document.getElementsByClassName('header-buttons')[3].textContent = 'FAQ';
}

// function quitNavBar() {
//     if (mobileVSpc) {
//         document.querySelector('.menu .navBar').style.display = 'none';
//     } else {

//     }
// }

// function showNavBar() {
//     if (mobileVSpc) {
//         document.querySelector('.menu .navBar').style.display = 'block';
//     } else {

//     }
// }

anchoModelo = document.querySelector(".menu").offsetWidth;
document.querySelector(".main-container").style.width = anchoModelo + 'px';

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        } else {
            pannel.style.display = "block";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const webhookUrl = 'https://discord.com/api/webhooks/1188551161356242964/yrgHlVasJaKetb6NalC1QmcNWwtOaUxZLfJ0t4peepVaNQ0uMbUD_t6_kefEtMEPkv-q';

    const supportForm = document.querySelector('.soporte form');
    
    supportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(supportForm);

        const message = formatSupportFormData(formData);

        if (message) {
            sendMessageToDiscord(message);
        }
    });

    function formatSupportFormData(formData) {
        const message = `
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Formulario de Soporte**
> - __Nombre__: ${formData.get('supportInput')}
> - __Pregunta__: ${formData.get('supportTextArea')}
        `;
        
        return message;
    }

    function sendMessageToDiscord(message) {
        const payload = {
            content: message,
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then((response) => {
            if (response.ok) {
                console.log('Mensaje de soporte enviado con éxito.');
            } else {
                console.error('Error al enviar el mensaje de soporte.');
            }
        })
        .catch((error) => {
            console.error('Error en la solicitud: ', error);
        });
    }
});


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
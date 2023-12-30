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

        var icon = this.querySelector('.fa-chevron-down');
        icon.classList.toggle("flechaInvertida");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const webhookUrl = 'https://discord.com/api/webhooks/1190595129933844540/qjk3xOfm82kwRvi7fFCI-qyC5fLmgAK3WTYqJmZoYBOxCWCdF-zW4QqMFThENXYNnslE';

    const supportForm = document.querySelector('.soporte form');
    
    supportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(supportForm);

        if (!areSupportFieldsCompleted(formData)) {
            return;
        }

        const message = formatSupportFormData(formData);

        if (message) {
            sendMessageToDiscord(message);
        }
    });

    function areSupportFieldsCompleted(formData) {
        const fields = Array.from(formData.values());
        return !fields.some(value => value === null || value === undefined || value === '');
    }

    function formatSupportFormData(formData) {
        const message = `
\`\`\`
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Nueva Pregunta Enviada**
> - **Nombre** : ${formData.get('supportInput')}
> - **Pregunta** : ${formData.get('supportTextArea')}
        
> - **Respuesta** : 
\`\`\`
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
                alert('Mensaje enviado.');
                console.log('Mensaje enviado');

                document.getElementById('supportInput').dataset = '';
                document.getElementById('supportTextArea').content = '';
            } else {
                console.error('Error al enviar el mensaje.');
                alert('Error al enviar el mensaje');
            }
        })
        .catch((error) => {
            console.error('Error en la solicitud: ', error);
            alert('Error en la solicitud ', error);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const webhookUrl2 = 'https://discord.com/api/webhooks/1190623824841019444/OXQMhdODLQbWbLwf8vyEP22U7MFD9RqlNhGSTxnmEcUiajJWcKYkMvAlwAC-oxwHgqa_';

    const supportForm2 = document.querySelector('.resenas form');

    supportForm2.addEventListener('submit', (f) => {
        f.preventDefault();

        const formData2 = new FormData(supportForm2);

        if (!areSupportFieldsCompleted2(formData2)) {
            return;
        }

        const message2 = formatSupportFormData2(formData2);

        if (message2) {
            sendMessageToDiscord2(message2);
        }
    });

    function areSupportFieldsCompleted2(formData2) {
        const fields2 = Array.from(formData2.values());
        return !fields2.some(value => value === null || value === undefined || value === '');
    }

    function formatSupportFormData2(formData2) {
        const stars = formData2.get('resenaInput2');
        let starsMessage = '';

        if (stars >= 1 && stars <= 5) {
            for (let i = 1; i <= stars; i++) {
                starsMessage = `\`${'🌟'.repeat(stars)}\``;
            }
        } else {
            console.error('Error al poner las estrellas. Debe ser un número del 1 al 5.');
            alert('Error al poner las estrellas. Debe ser un número del 1 al 5.');
            return null;
        }

        const message2 = `
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
> ${formData2.get('resenaInput')}     ${starsMessage}
> ${formData2.get('resenaTextArea')}
        `;

        return message2;
    }

    function sendMessageToDiscord2(message2) {
        const payload2 = {
            content: message2,
        };

        fetch(webhookUrl2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload2),
        })
            .then((response2) => {
                if (response2.ok) {
                    alert('Reseña enviada.');
                    console.log('Reseña enviada');
                } else {
                    console.error('Error al enviar la reseña.');
                    alert('Error al enviar la reseña');
                }
            })
            .catch((error) => {
                console.error('Error en la solicitud: ', error);
                alert('Error al enviar la reseña: ', error);
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

function getUserIp() {
    
}
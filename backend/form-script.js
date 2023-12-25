document.addEventListener('DOMContentLoaded', () => {
    const webhookUrl = 'https://discord.com/api/webhooks/1188529503031537694/6xAhWvnfg7gN0SfWcPmFD-C02YE7tFEsFnZqcrSU5l23uxiemcRi4L8TTrZdkAdsI4sE';

    const sendFormsButton = document.querySelector('.sendForms');
    
    sendFormsButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        const formData1 = new FormData(document.getElementById('appForm'));
        const formData2 = new FormData(document.getElementById('appForm2'));

        if (!areAllFieldsCompleted(formData1, formData2)) {
            alert('Por favor, completa todo antes de enviar el formulario.');
            return;
        }

        const message = formatFormData(formData1, formData2);

        if (message) {
            sendMessageToDiscord(message);
        }
    });

    function areAllFieldsCompleted(formData1, formData2) {
        const fields1 = Array.from(formData1.values());
        const fields2 = Array.from(formData2.values());

        return !fields1.concat(fields2).some(value => value === null || value === undefined || value === '');
    }

    function formatFormData(formData1, formData2) {
        
        const message = `
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**__Nueva solicitud__**
> - __Nombre__: ${formData1.get('nombre')}
> - __Método de contacto__: ${formData1.get('contacto')}
> - __Plazo de entrega__: ${formData1.get('entrega')}
> - __Tipo de aplicación__: ${formData1.get('compatibilidad')}
> - __Propósito de la aplicación__: ${formData1.get('proposito')}
> - __Funciones de la aplicación__: ${formData2.get('funciones')}
> - __Diseño__: ${formData2.get('diseno')}
> - __Comentarios__: ${formData2.get('comentarios')}
> - __Idiomas__: ${formData2.get('idiomas')}
> - __Algo más a añadir__: ${formData2.get('mas')}
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
                window.location.href = 'index.html';
            } else {
                alert('Error, no se ha enviado el formulario. Si persiste el error, ponte en contacto con adriiiaa_12#4859 en Discord.');
            }
        })
        .catch((error) => {
            alert('Error en la solicitud: ', error + ' Si persiste el error, ponte en contacto con adriiiaa_12#4859 en Discord.');
        });
    }
});
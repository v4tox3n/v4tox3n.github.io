document.addEventListener('DOMContentLoaded', () => {
    const webhookUrl = 'https://discord.com/api/webhooks/1190599720184336474/KNnX7ucUjQBEV6Y7jvvp9-azLyYrQhrMDtwM8N52v6R1Iqd2Og2Vgj3Fa_u05wDBTIrE';

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
> - **Nombre**: ${formData1.get('nombre')}
> 
> - **Método de contacto**: ${formData1.get('contacto1')} // ${formData1.get('contacto2')} // ${formData1.get('contacto3')} // ${formData1.get('contacto4')}
> 
> - **Plazo de entrega**: ${formData1.get('entrega')}
> 
> - **Tipo de aplicación**: ${formData1.get('compatibilidad')}
> 
> - **Propósito de la aplicación**: ${formData1.get('proposito')}
> 
> - **Funciones de la aplicación**: ${formData2.get('funciones')}
> 
> - **Diseño**: ${formData2.get('diseno')}
> 
> - **Comentarios**: ${formData2.get('comentarios')}
> 
> - **Idiomas**: ${formData2.get('idiomas')}
> 
> - **Algo más a añadir**: ${formData2.get('mas')}
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
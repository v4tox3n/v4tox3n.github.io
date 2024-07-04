const webhookUrl = 'https://discord.com/api/webhooks/1239137088255823927/0dPl1WcIieelLii8rrkfe1SiPuXC5oahbXP2I8oWXKwyc9tdQyFdlsxSMrpv9DMjCN0Y';

const form = document.querySelector('.hire-service-form');
const nameInput = document.querySelector('input[placeholder="Name"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const serviceSelect = document.querySelector('#service');
const commentsInput = document.querySelector('textarea[placeholder="Comments... "]');
let lastMessageTime = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentTime = new Date().getTime();
    const elapsedTimeSinceLastMessage = currentTime - lastMessageTime;

    if (elapsedTimeSinceLastMessage >= 600000) {
        const name = nameInput.value;
        const email = emailInput.value;
        const service = serviceSelect.value;
        const comments = commentsInput.value;

        sendMessageToDiscord(name, email, service, comments);
        lastMessageTime = currentTime;
    } else {
        const remainingTime = (600000 - elapsedTimeSinceLastMessage) / 60000;
        alert(`Debes esperar ${remainingTime.toFixed(2)} minutos antes de enviar otro mensaje.`);
    }
});

function sendMessageToDiscord(name, email, service, comments) {
    const content = `**Name:** \`\`\`${name}\`\`\`\n**Email:** \`\`\`${email}\`\`\`\n**Service:** \`\`\`${service}\`\`\`\n**Comments:** \`\`\`${comments}\`\`\``;

    const payload = {
        content: content,
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
            alert('Mensaje enviado correctamente.');
            form.reset();
        } else {
            alert('Error enviando el mensaje.');
        }
    })
    .catch((error) => {
        alert('Error:', error);
    });
}

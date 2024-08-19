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

const webhookUrl = 'https://discord.com/api/webhooks/1239137088255823927/0dPl1WcIieelLii8rrkfe1SiPuXC5oahbXP2I8oWXKwyc9tdQyFdlsxSMrpv9DMjCN0Y';

const form = document.querySelector('.serviceForm');
const nameInput = document.querySelector('#name');
const contactInput = document.querySelector('#contact');
const serviceInput = document.querySelector('#service');
const descriptionInput = document.querySelector('#description');
let lastMessageTime = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentTime = new Date().getTime();
    const elapsedTimeSinceLastMessage = currentTime - lastMessageTime;

    if (elapsedTimeSinceLastMessage >= 600000) {
        const name = nameInput.value;
        const contact = contactInput.value;
        const service = serviceInput.options[serviceInput.selectedIndex].text;
        const description = descriptionInput.value;

        sendMessageToDiscord(name, contact, service, description);
        lastMessageTime = currentTime;
    } else {
        const remainingTime = (600000 - elapsedTimeSinceLastMessage) / 60000;
        alert(`Tienes que esperar ${remainingTime.toFixed(2)} minuos antes de enviar otra petición.`);
    }
});

function sendMessageToDiscord(name, contact, service, description) {
    const content = `**Nombre:** \`\`\`${name}\`\`\`\n**Contacto:** \`\`\`${contact}\`\`\`\n**Servicio:** \`\`\`${service}\`\`\`\n**Descripción:** \`\`\`${description}\`\`\``;

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
            alert('¡Petición enviada correctamentes!');
            form.reset();
        } else {
            alert('Error enviando la petición');
        }
    })
    .catch((error) => {
        alert('Error:', error);
    });
}
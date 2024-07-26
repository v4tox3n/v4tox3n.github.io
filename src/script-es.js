main_content = document.querySelector('.all-home .main-content');
up_c_h = document.querySelector('.up-c-h');
down_c_h = document.querySelector('.down-c-h');
all_home = document.querySelector('.all-home');

main_content.addEventListener('mouseenter', function() {
    main_content.classList.add('active');
    up_c_h.classList.add('active');
    down_c_h.classList.add('active');
});

all_home.addEventListener('mouseleave', function() {
    main_content.classList.remove('active');
    up_c_h.classList.remove('active');
    down_c_h.classList.remove('active');
})

project_card = document.querySelectorAll('.project-card');

project_card.forEach(e => {
    e.addEventListener('click', function() {
        alert("Este proyecto aún no está disponible");
    });
});

const option1 = document.querySelector('.op1');
const option2 = document.querySelector('.op2');
const option3 = document.querySelector('.op3');
const option4 = document.querySelector('.op4');
const option5 = document.querySelector('.op5');
const option6 = document.querySelector('.op6');

const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
const span4 = document.querySelector('.span4');
const span5 = document.querySelector('.span5');
const span6 = document.querySelector('.span6');

all_options = document.querySelectorAll('.option')

all_options.forEach(function(button) {
    button.addEventListener('click', function() {
        all_options.forEach(function(button){
            button.classList.remove('active');
        });
        this.classList.toggle('active');


        if (option1.classList.contains('active')) {
            span2.classList.remove('active');
            span3.classList.remove('active');
            span4.classList.remove('active');
            span5.classList.remove('active');
            span6.classList.remove('active');
            span1.classList.add('active');
        } else if (option2.classList.contains('active')) {
            span1.classList.remove('active');
            span3.classList.remove('active');
            span4.classList.remove('active');
            span5.classList.remove('active');
            span6.classList.remove('active');
            span2.classList.add('active');
        } else if (option3.classList.contains('active')) {
            span1.classList.remove('active');
            span2.classList.remove('active');
            span4.classList.remove('active');
            span5.classList.remove('active');
            span6.classList.remove('active');
            span3.classList.add('active');
        } else if (option4.classList.contains('active')) {
            span1.classList.remove('active');
            span2.classList.remove('active');
            span3.classList.remove('active');
            span5.classList.remove('active');
            span6.classList.remove('active');
            span4.classList.add('active');
        } else if (option5.classList.contains('active')) {
            span1.classList.remove('active');
            span2.classList.remove('active');
            span3.classList.remove('active');
            span4.classList.remove('active');
            span6.classList.remove('active');
            span5.classList.add('active');
        } else if (option6.classList.contains('active')) {
            span1.classList.remove('active');
            span2.classList.remove('active');
            span3.classList.remove('active');
            span4.classList.remove('active');
            span5.classList.remove('active');
            span6.classList.add('active');
        }
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".option");
const header = document.querySelector("header");

const options = {
  threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                link.nextElementSibling.classList.remove("active");
                if (link.getAttribute("href").substring(1) === entry.target.id) {
                    link.classList.add("active");
                    link.nextElementSibling.classList.add("active");
                }
            });
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

const frontend = document.querySelector('.frontend');
const backend = document.querySelector('.backend');
const more_tech = document.querySelector('.more-tech');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const s_one = document.querySelector('.s-one');
const s_two = document.querySelector('.s-two');
const s_three = document.querySelector('.s-three');
const s_four = document.querySelector('.s-four');
const s_five = document.querySelector('.s-five');
const s_six = document.querySelector('.s-six');
const s_seven = document.querySelector('.s-seven');
const s_eight = document.querySelector('.s-eight');
const s_nine = document.querySelector('.s-nine');

one.addEventListener('mouseenter', function() {
    s_one.classList.add('active');
    frontend.classList.add('active');
});

one.addEventListener('mouseleave', function() {
    s_one.classList.remove('active');
    frontend.classList.remove('active');
});

two.addEventListener('mouseenter', function() {
    s_two.classList.add('active');
    frontend.classList.add('active');
});

two.addEventListener('mouseleave', function() {
    s_two.classList.remove('active');
    frontend.classList.remove('active');
});

three.addEventListener('mouseenter', function() {
    s_three.classList.add('active');
    frontend.classList.add('active');
});

three.addEventListener('mouseleave', function() {
    s_three.classList.remove('active');
    frontend.classList.remove('active');
});

four.addEventListener('mouseenter', function() {
    s_four.classList.add('active');
    frontend.classList.add('active');
});

four.addEventListener('mouseleave', function() {
    s_four.classList.remove('active');
    frontend.classList.remove('active');
});

five.addEventListener('mouseenter', function() {
    s_five.classList.add('active');
    backend.classList.add('active');
});

five.addEventListener('mouseleave', function() {
    s_five.classList.remove('active');
    backend.classList.remove('active');
});

six.addEventListener('mouseenter', function() {
    s_six.classList.add('active');
    backend.classList.add('active');
});

six.addEventListener('mouseleave', function() {
    s_six.classList.remove('active');
    backend.classList.remove('active');
});

seven.addEventListener('mouseenter', function() {
    s_seven.classList.add('active');
    backend.classList.add('active');
});

seven.addEventListener('mouseleave', function() {
    s_seven.classList.remove('active');
    backend.classList.remove('active');
});

eight.addEventListener('mouseenter', function() {
    s_eight.classList.add('active');
    more_tech.classList.add('active');
});

eight.addEventListener('mouseleave', function() {
    s_eight.classList.remove('active');
    more_tech.classList.remove('active');
});

nine.addEventListener('mouseenter', function() {
    s_nine.classList.add('active');
    more_tech.classList.add('active');
});

nine.addEventListener('mouseleave', function() {
    s_nine.classList.remove('active');
    more_tech.classList.remove('active');
});

const webhookUrl = 'https://discord.com/api/webhooks/1238970517059403927/dUZHRZfZbckd1QMtYC3nbXHeZuerCFyW7sV0wBxtezUTVcu1frb_xWD2AqlQYe4WV81n';

const form = document.querySelector('.contactForm');
const nameInput = document.querySelector('input[placeholder="Name"]');
const surnameInput = document.querySelector('input[placeholder="Surname"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const subjectInput = document.querySelector('input[placeholder="Subject"]');
const messageInput = document.querySelector('textarea');
let lastMessageTime = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentTime = new Date().getTime();
    const elapsedTimeSinceLastMessage = currentTime - lastMessageTime;

    if (elapsedTimeSinceLastMessage >= 600000) {
        const name = nameInput.value;
        const surname = surnameInput.value;
        const email = emailInput.value;
        const subject = subjectInput.value;
        const message = messageInput.value;

        sendMessageToDiscord(name, surname, email, subject, message);
        lastMessageTime = currentTime;
    } else {
        const remainingTime = (600000 - elapsedTimeSinceLastMessage) / 60000;
        alert(`Tienes que esperar ${remainingTime.toFixed(2)} minutos antes de enviar otro mensaje.`);
    }
});

function sendMessageToDiscord(name, surname, email, subject, message) {
    const content = `**Nombre:** \`\`\`${name}\`\`\`\n**Apellido:** \`\`\`${surname}\`\`\`\n**Email:** \`\`\`${email}\`\`\`\n**Asunto:** \`\`\`${subject}\`\`\`\n**Mensaje:** \`\`\`${message}\`\`\``;

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
            alert('Mensaje enviado correctamente!');
            form.reset();
        } else {
            alert('Error enviando el mensaje');
        }
    })
    .catch((error) => {
        alert('Error:', error);
    });
}

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
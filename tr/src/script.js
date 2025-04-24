const products_cards = document.querySelectorAll('.productos .content .card');
const about_cards = document.querySelectorAll('.sobre-nosotros .content .card');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('view');
            entry.target.style.animationDelay = `${0.1 * index}s`;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

products_cards.forEach(card => {
    observer.observe(card);
});

about_cards.forEach(card => {
    observer.observe(card);
});

const chat = document.getElementById('chatMensajes');
const input = document.getElementById('userInput');
const chatbot = document.querySelector('.chatbot-container');
const chatbot2 = document.querySelector('.chatbot-container2');

window.onload = () => {
    const saved = JSON.parse(localStorage.getItem('chatHistory')) || [];
    saved.forEach(({ sender, text }) => addMessage(sender, text));
};

function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    addMessage('user', message);
    saveMessage('user', message);

    const reply = generateSmartReply(message);
    setTimeout(() => {
      addMessage('bot', reply);
      saveMessage('bot', reply);
    }, 500);

    input.value = '';
    chat.scrollTop = chat.scrollHeight;
}

function addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = `mensaje ${sender}`;
    msg.textContent = text;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}

function saveMessage(sender, text) {
    const current = JSON.parse(localStorage.getItem('chatHistory')) || [];
    current.push({ sender, text });
    localStorage.setItem('chatHistory', JSON.stringify(current));
}

function clearChat() {
    localStorage.removeItem('chatHistory');
    chat.innerHTML = '';
}

function generateSmartReply(msg) {
    const lower = msg.toLowerCase();
    if (lower.includes('tu nombre') || lower.includes('quién eres') || lower.includes('quien eres')) return 'Soy el asistente virtual de Michelon. ¡Encantado!';
    if (lower.includes('hora')) return 'Ahora mismo son las ' + new Date().toLocaleTimeString();
    if (lower.includes('adiós') || lower.includes('hasta luego') || lower.includes('adios')) return '¡Hasta pronto! 👋';

    return 'En estos momentos no puedo responder a eso, inténtalo más tarde 🤔';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('chatbotContainer').classList.remove('active');
      document.getElementById('chatbotContainer2').classList.remove('active');
    }
});

document.addEventListener('click', (e) => {
    const chatContainer = document.getElementById('chatbotContainer');
    const chatContainer2 = document.getElementById('chatbotContainer2');
    const toggleButton = document.querySelector('.chat-bot');
  
    if (chatContainer.classList.contains('active') && !chatContainer.contains(e.target) && !toggleButton.contains(e.target)) {
      chatContainer.classList.remove('active');
    } else if (chatContainer2.classList.contains('active') && !chatContainer2.contains(e.target) && !toggleButton.contains(e.target)) {
      chatContainer2.classList.remove('active');
    }
});

document.getElementById('userInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
});

function activarChat() {
  if (chatbot.classList.contains('logged')) {
    chatbot.classList.toggle('active');
  } else {
    chatbot2.classList.toggle('active');
  }
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

function ripollet() {
  alert('ripollet');
}

const first_social = document.querySelector('.uno');
const second_social = document.querySelector('.dos');
const third_social = document.querySelector('.tres');

first_social.addEventListener('hover', () => {
  first_social.classList.add('active');
});

second_social.addEventListener('hover', () => {
  second_social.classList.add('active');
});

third_social.addEventListener('hover', () => {
  third_social.classList.add('active');
});
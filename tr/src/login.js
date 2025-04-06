import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmNe_E-RevWp10Bdraool5Sum70Jru_2o",
  authDomain: "michelon-25446.firebaseapp.com",
  projectId: "michelon-25446",
  storageBucket: "michelon-25446.firebasestorage.app",
  messagingSenderId: "160107546338",
  appId: "1:160107546338:web:c64b888a03f287643d40bb",
  measurementId: "G-YP5BLS81K3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();

document.querySelector('.google-btn').addEventListener('click', login_function);

function login_function() {
    alert('hola')
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

// // main.js
// import { auth } from './diadto.js';
// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// onAuthStateChanged(auth, user => {
//   const message = user 
//     ? `Usuario: ${user.email || 'No tiene email'} (${user.uid})` 
//     : "No hay usuario logueado";
  
//   console.log(message);
//   alert(message);
// });

const username = localStorage.getItem('diadto_username');
const email = localStorage.getItem('diadto_email');

// if(username) {
//     console.log("Usuario:", username);
// } else {
//     console.log("No hay usuario guardado");
// }

const current_user = username;

const bienvenida_h1_text = document.querySelector('.bienvenida_h1_text');
const bienvenida_h1_text2 = document.querySelector('.bienvenida_h1_text2');

bienvenida_h1_text.innerHTML = current_user;
bienvenida_h1_text2.innerHTML = bienvenida_h1_text2.textContent + ' ' + current_user;



console.log(document.cookie);
document.addEventListener('DOMContentLoaded', function() {
    alert('Bienvenido a Adivina el Año. Intenta adivinar cuantas más preguntas posibles.');
});

function startGame() {
    alert('¡Mucha suerte en tu partida!')

    var numeroAleatorio = Math.floor(Math.random() * 4) + 1;

    if (numeroAleatorio === 1) {
        window.location.href = 'game/f/pregunta1.html';
    } else if (numeroAleatorio === 2) {
        window.location.href = 'game/s/pregunta1.html';
    } else if (numeroAleatorio === 3) {
        window.location.href = 'game/t/pregunta1.html';
    } else if (numeroAleatorio === 4) {
        window.location.href = 'game/z/pregunta1.html';
    } else {
        alert('Ha ocurrido un error, empieza de nuevo el juego.');
    }
}
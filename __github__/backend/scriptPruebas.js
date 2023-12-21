// MOSTRAR DIV INFORMATIVO
var divInformativo = document.querySelector('.miDiv');
var buttonShowDiv = document.querySelector('.buttonShowDiv');
var buttonQuitDiv = document.querySelector('.buttonQuitDiv');

var divInformativoSeparado = document.querySelector('.miDivSeparated');
var divInformativoContenido = document.querySelector('.miDivContent');

function mostrarDivInformativo() {
    divInformativo.style.display = 'block';
    buttonShowDiv.style.display = 'none';
    buttonQuitDiv.style.display = 'block';
}


// QUITAR DIV INFORMATIVO
function quitarDivInformativo(){
    divInformativoSeparado.style.display = 'block';
    divInformativo.style.display = 'none';
    divInformativoContenido.style.display = 'block';
}


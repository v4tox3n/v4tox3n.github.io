const toggle_europa = document.querySelector('.europa-toggle');
const toggle_africa = document.querySelector('.africa-toggle');
const toggle_america = document.querySelector('.america-toggle');
const toggle_asia = document.querySelector('.asia-toggle');
const toggle_oceania = document.querySelector('.oceania-toggle');

const toggles = document.querySelectorAll('.europa-toggle, .africa-toggle, .america-toggle, .asia-toggle, .oceania-toggle');

let game_mode2 = ''; 

function checkGameMode() {
    if (toggle_europa.classList.contains('active') && toggle_africa.classList.contains('active') && toggle_america.classList.contains('active') && toggle_asia.classList.contains('active') && toggle_oceania.classList.contains('active')){
        game_mode2 = 'Mundial';
    } else if (toggle_europa.classList.contains('active') && toggle_africa.classList.contains('inactive') && toggle_america.classList.contains('inactive') && toggle_asia.classList.contains('inactive') && toggle_oceania.classList.contains('inactive')){
        game_mode2 = 'Europa';
    } else if (toggle_europa.classList.contains('inactive') && toggle_africa.classList.contains('active') && toggle_america.classList.contains('inactive') && toggle_asia.classList.contains('inactive') && toggle_oceania.classList.contains('inactive')){
        game_mode2 = 'Africa';
    } else if (toggle_europa.classList.contains('inactive') && toggle_africa.classList.contains('inactive') && toggle_america.classList.contains('active') && toggle_asia.classList.contains('inactive') && toggle_oceania.classList.contains('inactive')){
        game_mode2 = 'America';
    } else if (toggle_europa.classList.contains('inactive') && toggle_africa.classList.contains('inactive') && toggle_america.classList.contains('inactive') && toggle_asia.classList.contains('active') && toggle_oceania.classList.contains('inactive')){
        game_mode2 = 'Asia';
    } else if (toggle_europa.classList.contains('active') && toggle_africa.classList.contains('inactive') && toggle_america.classList.contains('inactive') && toggle_asia.classList.contains('inactive') && toggle_oceania.classList.contains('active')){
        game_mode2 = 'Oceania';
    } else {
        game_mode2 = 'Nada De Lo Anterior';
    }
    
    alert(game_mode2);
}

toggles.forEach(toggle => {
    toggle.addEventListener('click', checkGameMode);
});

checkGameMode();
// MODIFICACIÓN DE TODO LO ANTERIOR PARA QUE FUNCIONE CORRECTAMENTE

// SELECCIÓN DE PAIS
async function fetchRandomFileCombinations() {
    try {
        const indexResponse = await fetch(`${route}.json`);
        if (!indexResponse.ok) {
            throw new Error('Error al obtener la lista de archivos 2');
        }

        const files = await indexResponse.json();
        if (files.length === 0) {
            throw new Error('No hay archivos disponibles 2.');
        }

        const randomFile = files[Math.floor(Math.random() * files.length)];
        const fileResponse = await fetch(`${route}${randomFile}`);

        if (!fileResponse.ok) {
            throw new Error(`Error al obtener el archivo 2: ${randomFile}`);
        }

        const data = await fileResponse.json();
        selectRandomCountryCombinations(data);
    } catch (error) {
        alert('Error 2 :', error.message);
    }
}

function selectRandomCountryCombinations(data) {
    firstName = data.name;
    firstContinent = data.continent;
    firstMeters = data.meters;
    firstSea = data.sea;
    firstColor = data.color;
    firstFlag = Array.isArray(data.flag) ? data.flag.join(", ") : data.flag;
}


fetchRandomFileCombinations();
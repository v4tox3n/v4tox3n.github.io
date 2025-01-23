let firstName, firstContinent, firstMeters, firstSea, firstColor, firstFlag;
let secondName, secondContinent, secondMeters, secondSea, secondColor, secondFlag;

let route = '';
const game_mode = 'Mundial';

if (game_mode === 'Europe'){
    route = './data/europe/';
} else if (game_mode === 'Asia') { 
    route = './data/asia/';
} else if (game_mode === 'Africa'){
    route = './data/africa/';
} else if (game_mode === 'America') { 
    route = './data/america/';
} else if (game_mode === 'Oceania') {
    route = './data/oceania/';
} else if (game_mode === 'Mundial'){
    route = './data/'
} else {
    alert('Error seleccionando el modo de juego.');
}

async function fetchRandomFile() {
    try {
        const indexResponse = await fetch(`${route}index.json`);
        if (!indexResponse.ok) {
            throw new Error('Error al obtener la lista de archivos');
        }

        const files = await indexResponse.json();
        if (files.length === 0) {
            throw new Error('No hay archivos disponibles.');
        }

        const randomFile = files[Math.floor(Math.random() * files.length)];
        const fileResponse = await fetch(`${route}${randomFile}`);

        if (!fileResponse.ok) {
            throw new Error(`Error al obtener el archivo: ${randomFile}`);
        }

        const data = await fileResponse.json();
        selectRandomCountry(data);
    } catch (error) {
        alert('Error:', error.message);
    }
}

function selectRandomCountry(data) {
    firstName = data.name;
    firstContinent = data.continent;
    firstMeters = data.meters;
    firstSea = data.sea;
    firstColor = data.color;
    firstFlag = Array.isArray(data.flag) ? data.flag.join(", ") : data.flag;
    // alert(`Name: ${firstName}\nContinent: ${firstContinent}\nMeters: ${firstMeters}\nSea: ${firstSea}\nColor: ${firstColor}\nFlag: ${firstFlag}`);
}

fetchRandomFile();

const jsonData = [
    // EUROPE
    { "name": "España", "c": "e" },
    { "name": "Francia", "c": "e" },
    { "name": "Suiza", "c": "e" },
    { "name": "Italia", "c": "e" },
    { "name": "Belgica", "c": "e" },
    { "name": "Holanda", "c": "e" },
    { "name": "Austria", "c": "e" },
    { "name": "Alemania", "c": "e" },
    { "name": "Portugal", "c": "e" },
    { "name": "Suecia", "c": "e" },
    { "name": "Noruega", "c": "e" },
    { "name": "Dinamarca", "c": "e" },
    { "name": "Finlandia", "c": "e" },
    { "name": "Inglaterra", "c": "e" },
    { "name": "Irlanda", "c": "e" },
    { "name": "Polonia", "c": "e" },
    { "name": "Hungría", "c": "e" },
    { "name": "República Checa", "c": "e" },
    { "name": "Eslovaquia", "c": "e" },
    { "name": "Eslovenia", "c": "e" },
    { "name": "Croacia", "c": "e" },
    { "name": "Serbia", "c": "e" },
    { "name": "Rumanía", "c": "e" },
    { "name": "Bulgaria", "c": "e" },
    { "name": "Grecia", "c": "e" },
    { "name": "Islandia", "c": "e" },
    { "name": "Estonia", "c": "e" },
    { "name": "Letonia", "c": "e" },
    { "name": "Lituania", "c": "e" },
    { "name": "Bielorrusia", "c": "e" },
    { "name": "Liechtenstein", "c": "e" },
    { "name": "Ucrania", "c": "e" },
    { "name": "Moldavia", "c": "e" },
    { "name": "Bosnia", "c": "e" },
    { "name": "Montenegro", "c": "e" },
    { "name": "Kosovo", "c": "e" },
    { "name": "Albania", "c": "e" },
    { "name": "Luxemburgo", "c": "e" },
    { "name": "Andorra", "c": "e" },
    { "name": "Malta", "c": "e" },
    { "name": "San Marino", "c": "e" },
    { "name": "Mónaco", "c": "e" },
    { "name": "Vaticano", "c": "e" },
    { "name": "Macedonia del Norte", "c": "e" },
    { "name": "Escocia", "c": "e" },
    { "name": "Gales", "c": "e" },
    { "name": "Chipre", "c": "e" },
    { "name": "Georgia", "c": "e" },

    // AFRICA
    { "name": "Angola", "c": "af" },
    { "name": "Argelia", "c": "af" },
    { "name": "Benín", "c": "af" },
    { "name": "Botsuana", "c": "af" },
    { "name": "Burkina Faso", "c": "af" },
    { "name": "Burundi", "c": "af" },
    { "name": "Cabo Verde", "c": "af" },
    { "name": "Camerún", "c": "af" },
    { "name": "Chad", "c": "af" },
    { "name": "Comoras", "c": "af" },
    { "name": "Congo", "c": "af" },
    { "name": "Costa de Marfil", "c": "af" },
    { "name": "Djibouti", "c": "af" },
    { "name": "Egipto", "c": "af" },
    { "name": "Esuatini", "c": "af" },
    { "name": "Etiopía", "c": "af" },
    { "name": "Gabón", "c": "af" },
    { "name": "Gambia", "c": "af" },
    { "name": "Ghana", "c": "af" },
    { "name": "Guinea Ecuatorial", "c": "af" },
    { "name": "Kenia", "c": "af" },
    { "name": "Lesoto", "c": "af" },
    { "name": "Liberia", "c": "af" },
    { "name": "Libia", "c": "af" },
    { "name": "Madagascar", "c": "af" },
    { "name": "Malaui", "c": "af" },
    { "name": "Malí", "c": "af" },
    { "name": "Marruecos", "c": "af" },
    { "name": "Mauricio", "c": "af" },
    { "name": "Mauritania", "c": "af" },
    { "name": "Mozambique", "c": "af" },
    { "name": "Namibia", "c": "af" },
    { "name": "Níger", "c": "af" },
    { "name": "Nigeria", "c": "af" },
    { "name": "Ruanda", "c": "af" },
    { "name": "Senegal", "c": "af" },
    { "name": "Sierra Leona", "c": "af" },
    { "name": "Somalia", "c": "af" },
    { "name": "Sudán", "c": "af" },
    { "name": "Sudán del Sur", "c": "af" },
    { "name": "Tanzania", "c": "af" },
    { "name": "Togo", "c": "af" },
    { "name": "Túnez", "c": "af" },
    { "name": "Uganda", "c": "af" },
    { "name": "Zambia", "c": "af" },
    { "name": "Zimbabue", "c": "af" },

    // AMERICA
    { "name": "Antigua y Barbuda", "c":  "am" },
    { "name": "Argentina", "c":  "am" },
    { "name": "Bahamas", "c":  "am" },
    { "name": "Barbados", "c":  "am" },
    { "name": "Belice", "c":  "am" },
    { "name": "Bolivia", "c":  "am" },
    { "name": "Brasil", "c":  "am" },
    { "name": "Canadá", "c":  "am" },
    { "name": "Chile", "c":  "am" },
    { "name": "Colombia", "c":  "am" },
    { "name": "Costa Rica", "c":  "am" },
    { "name": "Cuba", "c":  "am" },
    { "name": "Dominica", "c":  "am" },
    { "name": "Ecuador", "c":  "am" },
    { "name": "El Salvador", "c":  "am" },
    { "name": "Estados Unidos", "c":  "am" },
    { "name": "Granada", "c":  "am" },
    { "name": "Guatemala", "c":  "am" },
    { "name": "Guyana", "c":  "am" },
    { "name": "Haití", "c":  "am" },
    { "name": "Honduras", "c":  "am" },
    { "name": "Jamaica", "c":  "am" },
    { "name": "México", "c":  "am" },
    { "name": "Nicaragua", "c":  "am" },
    { "name": "Panamá", "c":  "am" },
    { "name": "Paraguay", "c":  "am" },
    { "name": "Perú", "c":  "am" },
    { "name": "República Dominicana", "c":  "am" },
    { "name": "Surinam", "c":  "am" },
    { "name": "Uruguay", "c":  "am" },
    { "name": "Venezuela", "c":  "am" },

    // OCEANIA
    { "name": "Australia", "c": "o" },
    { "name": "Fiyi", "c": "o" },
    { "name": "Kiribati", "c": "o" },
    { "name": "Islas Marshall", "c": "o" },
    { "name": "Micronesia", "c": "o" },
    { "name": "Nauru", "c": "o" },
    { "name": "Nueva Zelanda", "c": "o" },
    { "name": "Palaos", "c": "o" },
    { "name": "Papúa Nueva Guinea", "c": "o" },
    { "name": "Samoa", "c": "o" },
    { "name": "Islas Salomón", "c": "o" },
    { "name": "Tonga", "c": "o" },
    { "name": "Tuvalu", "c": "o" },
    { "name": "Vanuatu", "c": "o" },
    
    // ASIA
    { "name": "Afganistán", "c": "as" },
    { "name": "Azerbaiyán", "c": "as" },
    { "name": "Bangladesh", "c": "as" },
    { "name": "Bután", "c": "as" },
    { "name": "Camboya", "c": "as" },
    { "name": "Catar", "c": "as" },
    { "name": "China", "c": "as" },
    { "name": "Corea del Norte", "c": "as" },
    { "name": "Corea del Sur", "c": "as" },
    { "name": "Emiratos Árabes Unidos", "c": "as" },
    { "name": "India", "c": "as" },
    { "name": "Indonesia", "c": "as" },
    { "name": "Irán", "c": "as" },
    { "name": "Iraq", "c": "as" },
    { "name": "Israel", "c": "as" },
    { "name": "Japón", "c": "as" },
    { "name": "Jordania", "c": "as" },
    { "name": "Kazajistán", "c": "as" },
    { "name": "Kirguistán", "c": "as" },
    { "name": "Laos", "c": "as" },
    { "name": "Líbano", "c": "as" },
    { "name": "Malasia", "c": "as" },
    { "name": "Maldivas", "c": "as" },
    { "name": "Mongolia", "c": "as" },
    { "name": "Nepal", "c": "as" },
    { "name": "Omán", "c": "as" },
    { "name": "Pakistán", "c": "as" },
    { "name": "Palestina", "c": "as" },
    { "name": "Filipinas", "c": "as" },
    { "name": "Rusia", "c": "as" },
    { "name": "Arabia Saudita", "c": "as" },
    { "name": "Singapur", "c": "as" },
    { "name": "Siria", "c": "as" },
    { "name": "Sri Lanka", "c": "as" },
    { "name": "Tailandia", "c": "as" },
    { "name": "Turquía", "c": "as" },
    { "name": "Taiwán", "c": "as" },
    { "name": "Tayikistán", "c": "as" },
    { "name": "Turkmenistán", "c": "as" },
    { "name": "Uzbekistán", "c": "as" },
    { "name": "Vietnam", "c": "as" },
    { "name": "Yemen", "c": "as" }
];

intents = 1;
jsonFile = '';

function displayResults(results) {
    const resultsContainer = document.querySelector('.results');
    const input = document.querySelector('input');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result.name;
            li.addEventListener('click', () => {
                jsonFile = (result.name + '.json').toLowerCase();
                // alert(`${jsonFile}`);
                if (result.c === 'e') {
                    searchJSONfileEU(jsonFile);
                } else if (result.c === 'af') {
                    searchJSONfileAF(jsonFile);
                } else if (result.c === 'am') {
                    searchJSONfileAM(jsonFile);
                } else if (result.c === 'o') {
                    searchJSONfileO(jsonFile);
                } else if (result.c === 'as') {
                    searchJSONfileAS(jsonFile);
                }
                intents += 1;
                input.placeholder = 'Intento ' + intents + ' de 10';
                input.value = '';

                displayResults([]);
            });
            resultsContainer.appendChild(li);
        });
    }

    if (intents === 11) {
        alert(`Has perdido, el país era ${firstName}`)
    }
}

function searchNames(query) {
    if (query.trim() === '') {
        displayResults([]);
        return;
    }

    const filteredResults = jsonData.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    displayResults(filteredResults);
}

document.querySelector('.searchInput').addEventListener('input', (event) => {
    searchNames(event.target.value);
});

function searchJSONfileEU(file) {
    const route = 'data/europe/' + file;
    fetch(route)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP Error: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            secondName = data.name;
            secondContinent = data.continent;
            secondMeters = data.meters;
            secondSea = data.sea;
            secondColor = data.color;
            secondFlag = data.flag;
            showCluesSelectedCountry();
        })
        .catch(error => {
            alert('Error petición fetch: ' + error.message);
        });
}

function searchJSONfileAF(file) {
    const route = 'data/africa/' + file;
    fetch(route)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP Error: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            secondName = data.name;
            secondContinent = data.continent;
            secondMeters = data.meters;
            secondSea = data.sea;
            secondColor = data.color;
            secondFlag = data.flag;
            showCluesSelectedCountry();
        })
        .catch(error => {
            alert('Error petición fetch: ' + error.message);
        });
}

function searchJSONfileAM(file) {
    const route = 'data/america/' + file;
    fetch(route)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP Error: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            secondName = data.name;
            secondContinent = data.continent;
            secondMeters = data.meters;
            secondSea = data.sea;
            secondColor = data.color;
            secondFlag = data.flag;
            showCluesSelectedCountry();
        })
        .catch(error => {
            alert('Error petición fetch: ' + error.message);
        });
}

function searchJSONfileO(file) {
    const route = 'data/oceania/' + file;
    fetch(route)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP Error: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            secondName = data.name;
            secondContinent = data.continent;
            secondMeters = data.meters;
            secondSea = data.sea;
            secondColor = data.color;
            secondFlag = data.flag;
            showCluesSelectedCountry();
        })
        .catch(error => {
            alert('Error petición fetch: ' + error.message);
        });
}

function searchJSONfileAS(file) {
    const route = 'data/asia/' + file;
    fetch(route)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP Error: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            secondName = data.name;
            secondContinent = data.continent;
            secondMeters = data.meters;
            secondSea = data.sea;
            secondColor = data.color;
            secondFlag = data.flag;
            showCluesSelectedCountry();
        })
        .catch(error => {
            alert('Error petición fetch: ' + error.message);
        });
}

function showCluesSelectedCountry() {
    const answersContainer = document.querySelector('.answers-container');

    if (!answersContainer) {
        alert('No se encontró el contenedor de respuestas');
        return;
    }

    const newUl = document.createElement('ul');
    newUl.classList.add('answers');

    const newLi1 = document.createElement('li');
    const newLi2 = document.createElement('li');
    const newLi3 = document.createElement('li');
    const newLi4 = document.createElement('li');
    const newLi5 = document.createElement('li');

    newLi1.innerHTML = secondName.toUpperCase();
    newLi2.innerHTML = secondContinent.toUpperCase();
    newLi3.innerHTML = secondMeters;
    newLi4.innerHTML = 'MAR';
    newLi5.innerHTML = secondColor.toUpperCase();

    if (secondName === firstName){
        newLi1.classList.add('correct');
    } else {
        newLi1.classList.add('wrong');
    }

    if (secondContinent === firstContinent){
        newLi2.classList.add('correct');
    } else {
        newLi2.classList.add('wrong');
    }

    if (Number(secondMeters) === Number(firstMeters)) {
        newLi3.classList.add('correct');
    } else {
        newLi3.classList.add('wrong');
        if (Number(secondMeters) > Number(firstMeters)) {
            newLi3.innerHTML = '- ' + secondMeters;
        } else {
            newLi3.innerHTML = '+ ' + secondMeters;
        }
    }

    if (secondSea === firstSea){
        newLi4.classList.add('correct');
    } else {
        newLi4.classList.add('wrong');
    }

    if (firstFlag.includes(secondColor)){
        newLi5.classList.add('correct');
    } else {
        newLi5.classList.add('wrong');
    }

    newUl.appendChild(newLi1);
    newUl.appendChild(newLi2);
    newUl.appendChild(newLi3);
    newUl.appendChild(newLi4);
    newUl.appendChild(newLi5);
    answersContainer.appendChild(newUl);

    if (secondName === firstName) {
        setTimeout(function() {
            alert('¡¡VICTORIA!!');
        }, 750);
    }
}

window.onload = () => {
    const title = document.querySelector('.game-title');
    const playButton = document.querySelector('#playButton');

    title.addEventListener('animationend', () => {
        playButton.classList.add('visible');
    });
};

const bubbles = document.querySelectorAll('.bubble');
const directions = [];
const gameBackground = document.querySelector('.game-background');
const backgroundRect = gameBackground.getBoundingClientRect();

bubbles.forEach((bubble, index) => {
    const randomX = Math.random() * backgroundRect.width;
    const randomY = Math.random() * backgroundRect.height;  

    bubble.style.top = `${randomY}px`;
    bubble.style.left = `${randomX}px`;

    const randomDirX = Math.random() * 2 - 1;
    const randomDirY = Math.random() * 2 - 1;
    directions[index] = { x: randomDirX, y: randomDirY };
});

function moveBubbles() {
    bubbles.forEach((bubble, index) => {
        const rect = bubble.getBoundingClientRect();

        let top = parseFloat(bubble.style.top);
        let left = parseFloat(bubble.style.left);

        top += directions[index].y;
        left += directions[index].x;

        if (rect.top <= backgroundRect.top) {
            directions[index].y = Math.abs(directions[index].y);
        } else if (rect.bottom >= backgroundRect.bottom) {
            directions[index].y = -Math.abs(directions[index].y);
        }

        if (rect.left <= backgroundRect.left) {
            directions[index].x = Math.abs(directions[index].x);
        } else if (rect.right >= backgroundRect.right) {
            directions[index].x = -Math.abs(directions[index].x);
        }

        bubble.style.top = `${top}px`;
        bubble.style.left = `${left}px`;
    });

    requestAnimationFrame(moveBubbles);
}

moveBubbles();
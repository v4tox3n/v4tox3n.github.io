let firstName, firstContinent, firstMeters, firstSea, firstColor, firstFlag;
let secondName, secondContinent, secondMeters, secondSea, secondColor, secondFlag;

let route = '';
const game_mode = 'Europe';

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
} else {
    alert('Error seleccionando el modo de juego.');
}

// else if (game_mode === 'Mundial'){
//     random...
// }

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
    { "name": "Rusia", "c": "e" },
    { "name": "Turquía", "c": "e" }
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
    // alert(route);

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

            // alert('Name: ' + secondName);
            // alert('Continent: ' + secondContinent);
            // alert('Meters: ' + secondMeters);
            // alert('Sea: ' + secondSea);
            // alert('Color: ' + secondColor);
            // alert('Flag: ' + secondFlag.join(", "));
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
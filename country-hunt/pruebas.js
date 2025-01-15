// function selectRandomCountry() {
//     fetch(route)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('HTTP Error: ' + response.status);
//             }
//             return response.json();
//         })
//         .then(data => {
//             firstName = data.name;
//             firstContinent = data.continent;
//             firstMeters = data.meters;
//             firstSea = data.sea;
//             firstColor = data.color;
//             firstFlag = Array.isArray(data.flag) ? data.flag.join(", ") : data.flag;

//             alert(`Name: ${firstName}`);
//         })
//         .catch(error => {
//             alert('Error petición fetch: ' + error.message);
//         });
// }





// LO ANTERIOR ES LO QUE FUNCIONABA ANTES DE ELEGIR UN PAÍS ALEATORIAMENTE
// PONIENDO DE EJEMPLO A UN PAÍS CON EL CONSTANTE 'ROUTE'
// const route = './data/europe/españa.json';
// SET BUTTON'S PANELS VARIABLES
var finderPanel = document.getElementsByClassName('options-header-button')[0];
var filePanel = document.getElementsByClassName('options-header-button')[1];
var editPanel = document.getElementsByClassName('options-header-button')[2];
var viewPanel = document.getElementsByClassName('options-header-button')[3];
var goPanel = document.getElementsByClassName('options-header-button')[4];
var windowPanel = document.getElementsByClassName('options-header-button')[5];
var helpPanel = document.getElementsByClassName('options-header-button')[6];

var allPanels = [finderPanel, filePanel, editPanel, viewPanel, goPanel, windowPanel, helpPanel];


// EVENT SHOW BUTTON'S PANELS
document.querySelector('.finder').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    finderPanel.classList.toggle('active');
});

document.querySelector('.file').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    filePanel.classList.toggle('active');
});

document.querySelector('.edit').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    editPanel.classList.toggle('active');
});

document.querySelector('.view').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    viewPanel.classList.toggle('active');
});

document.querySelector('.go').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    goPanel.classList.toggle('active');
});

document.querySelector('.window').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    windowPanel.classList.toggle('active');
});

document.querySelector('.help').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    helpPanel.classList.toggle('active');
});


// QUIT PANELS WHEN USER CLICK OUTSIDE PANELS
document.querySelector('.allSections').addEventListener('mouseout', function () {
    document.addEventListener('click', function () {
        allPanels[0].classList.remove('active');
        allPanels[1].classList.remove('active');
        allPanels[2].classList.remove('active');
        allPanels[3].classList.remove('active');
        allPanels[4].classList.remove('active');
        allPanels[5].classList.remove('active');
        allPanels[6].classList.remove('active');
    });
});

document.querySelector('.apple-logo').addEventListener('click', function() {
    allPanels[0].classList.remove('active');
    allPanels[1].classList.remove('active');
    allPanels[2].classList.remove('active');
    allPanels[3].classList.remove('active');
    allPanels[4].classList.remove('active');
    allPanels[5].classList.remove('active');
    allPanels[6].classList.remove('active');
});


// SPECIAL HOVER ON IMAGES
var container = document.querySelector('.container');
var finderImg = document.querySelector('.finder-img');    
var wallpaperImg = document.querySelector('.wallpaper-img');
var calculatorImg = document.querySelector('.calculator-img');
var calendarImg = document.querySelector('.calendar-img');
var vscodeImg = document.querySelector('.vscode-img');
var appleStoreImg = document.querySelector('.apple-store-img');
var galeryImg = document.querySelector('.galery-img');
var githubImg = document.querySelector('.github-img');
var messengerImg = document.querySelector('.messenger-img');
var safaryImg = document.querySelector('.safary-img');

finderImg.addEventListener('mouseover', function() {
    wallpaperImg.classList.add('img-special-hover-efect');
});

wallpaperImg.addEventListener('mouseover', function() {
    finderImg.classList.add('img-special-hover-efect');
    calculatorImg.classList.add('img-special-hover-efect');
});

calculatorImg.addEventListener('mouseover', function() {
    wallpaperImg.classList.add('img-special-hover-efect');
    calendarImg.classList.add('img-special-hover-efect');
});

calendarImg.addEventListener('mouseover', function() {
    calculatorImg.classList.add('img-special-hover-efect');
    vscodeImg.classList.add('img-special-hover-efect');
});

vscodeImg.addEventListener('mouseover', function() {
    calendarImg.classList.add('img-special-hover-efect');
    appleStoreImg.classList.add('img-special-hover-efect');
});

appleStoreImg.addEventListener('mouseover', function() {
    vscodeImg.classList.add('img-special-hover-efect');
    galeryImg.classList.add('img-special-hover-efect');
});

galeryImg.addEventListener('mouseover', function() {
    appleStoreImg.classList.add('img-special-hover-efect');
    githubImg.classList.add('img-special-hover-efect');
});

githubImg.addEventListener('mouseover', function() {
    galeryImg.classList.add('img-special-hover-efect');
    messengerImg.classList.add('img-special-hover-efect');
});

messengerImg.addEventListener('mouseover', function() {
    safaryImg.classList.add('img-special-hover-efect');
    githubImg.classList.add('img-special-hover-efect');
});

safaryImg.addEventListener('mouseover', function() {
    messengerImg.classList.add('img-special-hover-efect');
});

finderImg.addEventListener('mouseout', function() {
    wallpaperImg.classList.remove('img-special-hover-efect');
});

wallpaperImg.addEventListener('mouseout', function() {
    finderImg.classList.remove('img-special-hover-efect');
    calculatorImg.classList.remove('img-special-hover-efect');
});

calculatorImg.addEventListener('mouseout', function() {
    wallpaperImg.classList.remove('img-special-hover-efect');
    calendarImg.classList.remove('img-special-hover-efect');
});

calendarImg.addEventListener('mouseout', function() {
    calculatorImg.classList.remove('img-special-hover-efect');
    vscodeImg.classList.remove('img-special-hover-efect');
});

vscodeImg.addEventListener('mouseout', function() {
    calendarImg.classList.remove('img-special-hover-efect');
    appleStoreImg.classList.remove('img-special-hover-efect');
});

appleStoreImg.addEventListener('mouseout', function() {
    vscodeImg.classList.remove('img-special-hover-efect');
    galeryImg.classList.remove('img-special-hover-efect');
});

galeryImg.addEventListener('mouseout', function() {
    appleStoreImg.classList.remove('img-special-hover-efect');
    githubImg.classList.remove('img-special-hover-efect');
});

githubImg.addEventListener('mouseout', function() {
    galeryImg.classList.remove('img-special-hover-efect');
    messengerImg.classList.remove('img-special-hover-efect');
});

messengerImg.addEventListener('mouseout', function() {
    safaryImg.classList.remove('img-special-hover-efect');
    githubImg.classList.remove('img-special-hover-efect');
});

safaryImg.addEventListener('mouseout', function() {
    messengerImg.classList.remove('img-special-hover-efect');
});


// OPEN APPLICATIONS WHEN ICON IS CLICKED
galeryImg.addEventListener('click', function() {
    document.querySelector('.galery-section').classList.toggle('active');
});

calculatorImg.addEventListener('click', function() {
    document.querySelector('.calculator-section').classList.toggle('active');
});

safaryImg.addEventListener('click', function () {
    document.querySelector('.safary-section').classList.toggle('active');
});

messengerImg.addEventListener('click', function() {
    document.querySelector('.messenger-section').classList.toggle('active');
});

calendarImg.addEventListener('click', function() {
    mostrarCalendario()
    document.querySelector('.calendar-section').classList.toggle('active');
});

wallpaperImg.addEventListener('click', function() {
    document.querySelector('.wallpaper-section').classList.toggle('active');
});

appleStoreImg.addEventListener('click', function() {
    document.querySelector('.apple-store-section').classList.toggle('active');
});

vscodeImg.addEventListener('click', function() {
    document.querySelector('.vscode-section').classList.toggle('active');
});


// MOVE APPLICATIONS THROW THE SCREEN (DRAG AND DROP)
// (code...)


// FUNCTIONS OF THE CALCULATOR
document.addEventListener("DOMContentLoaded", function () {
    let operand1 = "";
    let operand2 = "";
    let operator = "";

    const resultElement = document.querySelector(".result");
    const buttons = document.querySelectorAll(".content2 button");

    function updateResult() {
        resultElement.textContent = operand2 || operand1 || "0";
    }

    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;

        if (!isNaN(buttonValue) || buttonValue === ".") {
            if (operator) {
                operand2 += buttonValue;
            } else {
                operand1 += buttonValue;
            }
        }

        if (["+", "-", "x", "/"].includes(buttonValue)) {
            operator = buttonValue;
        }

        if (buttonValue === "=") {
            switch (operator) {
                case "+":
                    operand1 = (parseFloat(operand1) + parseFloat(operand2)).toString();
                    break;
                case "-":
                    operand1 = (parseFloat(operand1) - parseFloat(operand2)).toString();
                    break;
                case "x":
                    operand1 = (parseFloat(operand1) * parseFloat(operand2)).toString();
                    break;
                case "/":
                    operand1 = (parseFloat(operand1) / parseFloat(operand2)).toString();
                    break;
            }

            operand2 = "";
            operator = "";
        }

        if (buttonValue === "AC") {
            operand1 = "";
            operand2 = "";
            operator = "";
        }

        updateResult();
    }

    buttons.forEach(function (button) {
        button.addEventListener("click", handleButtonClick);
    });
});


// SEARCH INFORMATION IN SAFARY
function searchSafaryInGoogle() {
    var searchInformation = document.querySelector('.search-input').value;

    if (searchInformation.trim() != '') {
        searchInformation.value === '';
        var urlSearch = 'https://www.google.com/search?q=' + encodeURIComponent(searchInformation);
        window.open(urlSearch, '_blank');
    } else {
        alert('No has introducido nada de texto en la barra del buscador.')
    }
}

var searchInput = document.querySelector('.search-input');
var safarySection = document.querySelector('.safary-section');

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && safarySection.classList.contains('active')) {
        searchSafaryInGoogle();
    }
});


// CLOSE WINDOWS WITH RED BUTTON OF THE APLICATION
function cerrarVentanaGall() {
    document.querySelector('.galery-section').classList.toggle('active');
}

function cerrarVentanaCalc() {
    document.querySelector('.calculator-section').classList.toggle('active');
}

function cerrarVentanaSaf() {
    document.querySelector('.safary-section').classList.toggle('active');
}

function cerrarVentanaMes() {
    document.querySelector('.messenger-section').classList.toggle('active');
}

function cerrarVentanaCal() {
    document.querySelector('.calendar-section').classList.toggle('active');
}

function cerrarVentanaWal() {
    document.querySelector('.wallpaper-section').classList.toggle('active');
}

function cerrarVentanaAPS() {
    document.querySelector('.apple-store-section').classList.toggle('active');
}

function cerrarVentanaVSC() {
    document.querySelector('.vscode-section').classList.toggle('active');
}


// ALL MESSENGER SECTION CONFIGURATION
var davidConversation = document.querySelector('.david');
var maxConversation = document.querySelector('.max');
var claraConversation = document.querySelector('.clara');
var laraConversation = document.querySelector('.lara');
var paulConversation = document.querySelector('.paul');
var petterConversation = document.querySelector('.petter');
var joanneConversation = document.querySelector('.joanne');

var davidContact = document.querySelector('.david-contact');
var maxContact = document.querySelector('.max-contact');
var claraContact = document.querySelector('.clara-contact');
var laraContact = document.querySelector('.lara-contact');
var paulContact = document.querySelector('.paul-contact');
var petterContact = document.querySelector('.petter-contact');
var joanneContact = document.querySelector('.joanne-contact');

davidContact.addEventListener('click', function() {
    davidConversation.classList.add('active');
    maxConversation.classList.remove('active');
    claraConversation.classList.remove('active');
    laraConversation.classList.remove('active');
    paulConversation.classList.remove('active');
    petterConversation.classList.remove('active');
    joanneConversation.classList.remove('active')
});

maxContact.addEventListener('click', function() {
    davidConversation.classList.remove('active');
    maxConversation.classList.add('active');
    claraConversation.classList.remove('active');
    laraConversation.classList.remove('active');
    paulConversation.classList.remove('active');
    petterConversation.classList.remove('active');
    joanneConversation.classList.remove('active')
});

claraContact.addEventListener('click', function() {
    davidConversation.classList.remove('active');
    maxConversation.classList.remove('active');
    claraConversation.classList.add('active');
    laraConversation.classList.remove('active');
    paulConversation.classList.remove('active');
    petterConversation.classList.remove('active');
    joanneConversation.classList.remove('active')
});

laraContact.addEventListener('click', function() {
    davidConversation.classList.remove('active');
    maxConversation.classList.remove('active');
    claraConversation.classList.remove('active');
    laraConversation.classList.add('active');
    paulConversation.classList.remove('active');
    petterConversation.classList.remove('active');
    joanneConversation.classList.remove('active')
});

paulContact.addEventListener('click', function() {
    davidConversation.classList.remove('active');
    maxConversation.classList.remove('active');
    claraConversation.classList.remove('active');
    laraConversation.classList.remove('active');
    paulConversation.classList.add('active');
    petterConversation.classList.remove('active');
    joanneConversation.classList.remove('active')
});

petterContact.addEventListener('click', function() {
    davidConversation.classList.remove('active');
    maxConversation.classList.remove('active');
    claraConversation.classList.remove('active');
    laraConversation.classList.remove('active');
    paulConversation.classList.remove('active');
    petterConversation.classList.add('active');
    joanneConversation.classList.remove('active')
});

joanneContact.addEventListener('click', function() {
    davidConversation.classList.remove('active');
    maxConversation.classList.remove('active');
    claraConversation.classList.remove('active');
    laraConversation.classList.remove('active');
    paulConversation.classList.remove('active');
    petterConversation.classList.remove('active');
    joanneConversation.classList.add('active')
});


// APPLE CALENDAR CONFIGURATION
let currentMonth = 0;
const months = ['Enero 2024', 'Febrero 2024', 'Marzo 2024', 'Abril 2024', 'Mayo 2024', 'Junio 2024', 'Julio 2024', 'Agosto 2024', 'Septiembre 2024', 'Octubre 2024', 'Noviembre 2024', 'Diciembre 2024'];

function mostrarCalendario() {
    const calendarBody = document.getElementById('calendarBody');
    calendarBody.innerHTML = '';

    const currentDate = new Date();
    const firstDay = new Date(new Date().getFullYear(), currentMonth, 0).getDay();
    const daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            } else if (dayCounter <= daysInMonth) {
                const cell = document.createElement('td');
                cell.textContent = dayCounter;
                
                if (dayCounter === currentDate.getDate() && currentMonth === currentDate.getMonth()) {
                    cell.classList.add('current-day');
                }
                row.appendChild(cell);
                dayCounter++;
            }
        }

        calendarBody.appendChild(row);

        if (dayCounter > daysInMonth) {
            break;
        }
    }

    document.getElementById('currentMonth').textContent = months[currentMonth];
}

function mostrarMesAnterior() {
    currentMonth = (currentMonth - 1 + 12) % 12;
    mostrarCalendario();
}

function mostrarMesSiguiente() {
    currentMonth = (currentMonth + 1) % 12;
    mostrarCalendario();
}


// WALLPAPER CODE
function changeBackground(imageUrl) {
    var root = document.querySelector('.root');
    root.style.background = 'url(' + imageUrl + ')';
    root.style.backgroundSize = 'cover';
    root.style.backgroundRepeat = 'no-repeat';
}


// APPLE STORE CODE
const downloadButtonStore = document.querySelectorAll('.apple-store-content div button');
var alertTextAppleStore = '';

downloadButtonStore.forEach((downloadButton, index) => {
    downloadButton.addEventListener('click', () => {
        function alertTextFunction(textStore) {
            if (index === 1) {
                textStore = 'No se a podido descargar la aplicación "Instagram"';
            } else if (index === 2) {
                textStore = 'No se a podido descargar la aplicación "Twitch"';
            } else if (index === 3) {
                textStore = 'No se a podido descargar la aplicación "Google Maps"';
            } else if (index === 4) {
                textStore = 'No se a podido descargar la aplicación "Suika Game"';
            } else if (index === 5) {
                textStore = 'No se a podido descargar la aplicación "Minecraft"';
            } else if (index === 6) {
                textStore = 'No se a podido descargar la aplicación "Photoshop"';
            } else if (index === 7) {
                textStore = 'No se a podido descargar la aplicación "Spotify"';
            } else {
                textStore = 'No se a podido descargar la aplicación "Tik Tok"';
            }
            return textStore;
        }

        alert(alertTextFunction(alertTextAppleStore));
    }) 
});


// VSCODE CODE
Prism.highlightAll();

// UPDATE DAY AND HOUR OF THE WEB PAGE
function updateDate() {
    var actualDate = new Date();
    var optionsDate = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    var optionsHour = { hour: '2-digit', minute: '2-digit', hour12: true };

    var fechaFormateada = actualDate.toLocaleDateString('es-ES', optionsDate);
    var horaFormateada = actualDate.toLocaleTimeString('es-ES', optionsHour);

    document.querySelector('.date').textContent = fechaFormateada;
    document.querySelector('.hour').textContent = horaFormateada;
}

function intervalfunction() {
    setInterval(updateDate, 1000);
    updateDate();
}

intervalfunction();

// ------------------------------------------------------------------------- //
// ---------------------------- ALL JS SECTIONS ---------------------------- //
// ------------------------------------------------------------------------- // 
// SET BUTTON'S PANELS VARIABLES
// EVENT SHOW BUTTON'S PANELS
// QUIT PANELS WHEN USER CLICK OUTSIDE PANELS
// SPECIAL HOVER ON IMAGES
// OPEN APPLICATIONS WHEN ICON IS CLICKED
// MOVE APPLICATIONS THROW THE SCREEN (DRAG AND DROP)
// FUNCTIONS OF THE CALCULATOR
// SEARCH INFORMATION IN SAFARY
// CLOSE WINDOWS WITH RED BUTTON OF THE APLICATION
// ALL MESSENGER SECTION CONFIGURATION
// APPLE CALENDAR CONFIGURATION
// WALLPAPER CODE
// APPLE STORE CODE
// VSCODE CODE
// UPDATE DAY AND HOUR OF THE WEB PAGE
// ------------------------------------------------------------------------- //
// ---------------------------- ALL JS SECTIONS ---------------------------- //
// ------------------------------------------------------------------------- // 
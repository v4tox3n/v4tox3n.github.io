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
document.querySelector('.allSections').addEventListener('mouseover', function () {
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

// container.addEventListener('mouseover', function() {
//     container.style.gap = '25px';
// });

// container.addEventListener('mouseout', function() {
//     container.style.gap = '10px';
// });

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
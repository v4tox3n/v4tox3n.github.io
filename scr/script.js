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

    finderPanel.classList.add('active');
});

document.querySelector('.file').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    filePanel.classList.add('active');
});

document.querySelector('.edit').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    editPanel.classList.add('active');
});

document.querySelector('.view').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    viewPanel.classList.add('active');
});

document.querySelector('.go').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    goPanel.classList.add('active');
});

document.querySelector('.window').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    windowPanel.classList.add('active');
});

document.querySelector('.help').addEventListener('click', function() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.remove('active');
    }

    helpPanel.classList.add('active');
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

container.addEventListener('mouseover', function() {
    container.style.gap = '25px';
});

container.addEventListener('mouseout', function() {
    container.style.gap = '10px';
});

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


// SPECIAL CLICK ANIMATION ON ICON APLICATIONS
// var allIcons = [finderImg, wallpaperImg, calculatorImg, calendarImg, vscodeImg, appleStoreImg, galeryImg, githubImg, messengerImg, safaryImg];
// allIcons[0].addEventListener('click', function() {
//     // allIcons[0].classList.remove('special-click');
//     // allIcons[0].classList.add('special-click'); 
//     if (allIcons[0].classList.contains('special-click')){
//         allIcons[0].classList.remove('special-click');
//         allIcons[0].classList.add('special-click2');
//     } else {
//         allIcons[0].classList.remove('special-click2');
//         allIcons[0].classList.add('special-click');
//     }
// });

// allIcons[Element].addEventListener('click', function() {
//     allIcons[Element].classList.add('special-click');
// });


// OPEN APPLICATIONS WHEN ICON IS CLICKED
galeryImg.addEventListener('click', function() {
    document.querySelector('.galery-section').classList.toggle('active');
});

calculatorImg.addEventListener('click', function() {
    document.querySelector('.calculator-section').classList.toggle('active');
});



// MOVE APPLICATIONS THROW THE SCREEN (DRAG AND DROP)

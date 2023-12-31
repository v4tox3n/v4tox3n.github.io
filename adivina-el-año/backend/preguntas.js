var panels = document.querySelectorAll('.panel');
var nextButtons = document.querySelectorAll('.siguiente');
var finalScoreButton = document.querySelector('.finalScore');

var correctCount = 0;

panels.forEach(function(panel, index) {
    var buttons = panel.querySelectorAll('.button');
    var nextButton = nextButtons[index];

    var isCorrect = '';

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            showSolution(buttons);

            if (button.classList.contains('co')) {
                isCorrect = 'Yes';
                verificarRespuesta();
            } else {
                isCorrect = 'No';
                verificarRespuesta();
            }
        });
    });

    nextButton.addEventListener('click', function() {
        resetButtons(buttons);
        nextButton.style.display = 'none';
    });

    function showSolution(buttons) {
        buttons.forEach(function(button) {
            button.classList.add('solution');
        });

        nextButton.style.display = 'inline';
    }

    function resetButtons(buttons) {
        buttons.forEach(function(button) {
            button.classList.remove('solution');
        });
    }

    function verificarRespuesta() {
        if (isCorrect === 'Yes') {
            correctCount++;
        }
    }
});

finalScoreButton.addEventListener('click', function() {
    alert('Número de respuestas correctas: ' + correctCount);
    correctCount = 0;
});

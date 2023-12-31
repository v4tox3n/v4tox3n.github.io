var panels = document.querySelectorAll('.panel');
var nextButtons = document.querySelectorAll('.siguiente');

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
            // alert('Correcto');
        } else if (isCorrect === 'No') {
            // alert('Incorrecto');
        } else {
            alert('Error');
        }
    }
});
const options = document.querySelectorAll('.header nav a');

options.forEach(function(button) {
    button.addEventListener('click', function() {
        options.forEach(function(button){
            button.classList.remove('active');
        });
        this.classList.toggle('active');
    });
});
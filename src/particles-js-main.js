document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.particle-background');
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    const particleCount = 100;
    const maxVelocity = 2;
    const color = 'pink';

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            velocityX: (Math.random() * 2 - 1) * maxVelocity,
            velocityY: (Math.random() * 2 - 1) * maxVelocity
        });
    }

    function updateParticles() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.x += particle.velocityX;
            particle.y += particle.velocityY;

            if (particle.x < 0 || particle.x > canvas.width) particle.velocityX = -particle.velocityX;
            if (particle.y < 0 || particle.y > canvas.height) particle.velocityY = -particle.velocityY;

            context.beginPath();
            context.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
            context.fillStyle = color;
            context.fill();
        });

        requestAnimationFrame(updateParticles);
    }

    updateParticles();
});
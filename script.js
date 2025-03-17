const confetti = document.getElementById('confetti');
const ctx = confetti.getContext('2d');

// Ajustar tamaño del canvas dinámicamente
function resizeCanvas() {
    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Ajustar tamaño inicial

// Crear partículas de confeti
const particles = [];
for (let i = 0; i < 200; i++) {
    particles.push({
        x: Math.random() * confetti.width,
        y: Math.random() * confetti.height,
        size: Math.random() * 6 + 2,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 + 1,
        color: hsl(${Math.random() * 360}, 100%, 70%)
    });
}

// Función para animar el confeti
function renderConfetti() {
    ctx.clearRect(0, 0, confetti.width, confetti.height);
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        // Reaparecer cuando sale de pantalla
        if (p.y > confetti.height) p.y = 0;
        if (p.x > confetti.width) p.x = 0;
        if (p.x < 0) p.x = confetti.width;
    });
    requestAnimationFrame(renderConfetti);
}

renderConfetti();

// Reproducir música
function playMusic() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
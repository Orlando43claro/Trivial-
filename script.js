// Cargar progreso desde almacenamiento local
document.addEventListener('DOMContentLoaded', () => {
    const nivel = localStorage.getItem('nivel') || 1;
    const puntos = localStorage.getItem('puntos') || 0;
    const trofeos = localStorage.getItem('trofeos') || 'Aún no tienes trofeos.';

    document.getElementById('nivel').textContent = nivel;
    document.getElementById('puntos').textContent = puntos;
    document.getElementById('trofeos').textContent = trofeos;
});

// Botón para comenzar nuevo juego
document.getElementById('startBtn').addEventListener('click', () => {
    localStorage.setItem('nivel', 1);
    localStorage.setItem('puntos', 0);
    localStorage.setItem('trofeos', 'Aún no tienes trofeos.');
    window.location.href = 'juego.html';  // Redirige a la página del juego
});

// Botón para continuar juego
document.getElementById('continueBtn').addEventListener('click', () => {
    window.location.href = 'juego.html';  // Redirige a la página del juego
});
let puntos = 0;
let tiempoRestante = 30;
const temporizadorElement = document.getElementById('segundos');

const contarTiempo = () => {
    const intervalo = setInterval(() => {
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            alert('Se acabó el tiempo!');
            // Aquí puedes finalizar el juego o pasar a la siguiente pregunta.
        } else {
            tiempoRestante--;
            temporizadorElement.innerText = tiempoRestante;
        }
    }, 1000);
};

// Llama a la función para iniciar el temporizador
contarTiempo();
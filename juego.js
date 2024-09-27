let puntos = 0;
let tiempoRestante = 30;
const temporizadorElement = document.getElementById('segundos');
const opciones = document.querySelectorAll('.opcion');
const preguntaElement = document.getElementById('pregunta');

let preguntaActual = 0;
let usoAcciones = {
    "50-50": true,
    "cambiar": true,
    "ayuda": true
};

// Preguntas de ejemplo
const preguntas = [
    { pregunta: "¿Cuál es la capital de Francia?", respuestas: ["Berlín", "Madrid", "París", "Roma"], correcta: 2 },
    { pregunta: "¿Cuál es la capital de España?", respuestas: ["Lisboa", "Madrid", "París", "Roma"], correcta: 1 }
    // Agrega más preguntas aquí
];

const contarTiempo = () => {
    const intervalo = setInterval(() => {
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            alert('Se acabó el tiempo!');
            // Finalizar el juego o pasar a la siguiente pregunta
        } else {
            tiempoRestante--;
            temporizadorElement.innerText = tiempoRestante;
        }
    }, 1000);
};

// Muestra la pregunta actual
const mostrarPregunta = () => {
    if (preguntaActual < preguntas.length) {
        const pregunta = preguntas[preguntaActual];
        preguntaElement.innerText = pregunta.pregunta;
        opciones.forEach((boton, index) => {
            boton.innerText = pregunta.respuestas[index];
            boton.onclick = () => manejarRespuesta(index);
        });
        tiempoRestante = 30; // Reinicia el temporizador
    } else {
        alert('Has terminado el juego!');
    }
};

// Maneja la respuesta seleccionada
const manejarRespuesta = (index) => {
    if (index === preguntas[preguntaActual].correcta) {
        puntos += 10; // Ajusta la puntuación según lo necesites
        alert('Respuesta correcta!');
    } else {
        alert('Respuesta incorrecta!');
    }
    preguntaActual++;
    mostrarPregunta(); // Muestra la siguiente pregunta
};

// Función 50-50
const usar50_50 = () => {
    if (usoAcciones["50-50"]) {
        const pregunta = preguntas[preguntaActual];
        let respuestasIncorrectas = pregunta.respuestas.filter((_, index) => index !== pregunta.correcta);
        let eliminar = respuestasIncorrectas[Math.floor(Math.random() * respuestasIncorrectas.length)];
        
        // Elimina una opción incorrecta
        opciones.forEach((boton) => {
            if (boton.innerText === eliminar) {
                boton.style.display = 'none';
            }
        });
        
        usoAcciones["50-50"] = false; // Marca como usado
    } else {
        alert("Ya has usado la opción 50-50 en este nivel.");
    }
};

// Cambiar pregunta
const cambiarPregunta = () => {
    if (usoAcciones["cambiar"]) {
        preguntaActual++;
        mostrarPregunta();
        usoAcciones["cambiar"] = false; // Marca como usado
    } else {
        alert("Ya has usado la opción de cambiar pregunta en este nivel.");
    }
};

// Ayuda
const usarAyuda = () => {
    if (usoAcciones["ayuda"]) {
        const pregunta = preguntas[preguntaActual];
        alert(`La respuesta correcta es: ${pregunta.respuestas[pregunta.correcta]}`);
        usoAcciones["ayuda"] = false; // Marca como usado
    } else {
        alert("Ya has usado la opción de ayuda en este nivel.");
    }
};

// Asignar funciones a botones de acciones
document.getElementById('opcion-50-50').onclick = usar50_50;
document.getElementById('opcion-cambiar').onclick = cambiarPregunta;
document.getElementById('opcion-ayuda').onclick = usarAyuda;

// Llama a la función para iniciar el juego
contarTiempo();
mostrarPregunta();

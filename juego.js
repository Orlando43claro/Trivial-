const preguntas = [
    { pregunta: "¿Cuál es la capital de Francia?", respuestas: ["Berlín", "Madrid", "París", "Roma"], correcta: 2 },
    { pregunta: "¿Cuál es la capital de España?", respuestas: ["Lisboa", "Madrid", "París", "Roma"], correcta: 1 },
    { pregunta: "¿Cuál es el océano más grande del mundo?", respuestas: ["Atlántico", "Índico", "Pacífico", "Ártico"], correcta: 2 },
    { pregunta: "¿En qué año llegó el hombre a la Luna?", respuestas: ["1965", "1969", "1971", "1973"], correcta: 1 },
    { pregunta: "¿Quién escribió 'Cien años de soledad'?", respuestas: ["Gabriel García Márquez", "Jorge Luis Borges", "Mario Vargas Llosa", "Pablo Neruda"], correcta: 0 },
    { pregunta: "¿Cuál es el país más poblado del mundo?", respuestas: ["India", "Estados Unidos", "China", "Indonesia"], correcta: 2 },
    { pregunta: "¿Qué elemento químico tiene el símbolo O?", respuestas: ["Oro", "Oxígeno", "Osmio", "Oganesón"], correcta: 1 },
    { pregunta: "¿Qué planeta es conocido como el planeta rojo?", respuestas: ["Tierra", "Marte", "Júpiter", "Venus"], correcta: 1 },
    { pregunta: "¿Quién pintó la 'Mona Lisa'?", respuestas: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correcta: 2 },
    { pregunta: "¿Cuál es el continente más grande del mundo?", respuestas: ["Asia", "África", "América del Norte", "Antártida"], correcta: 0 },
    { pregunta: "¿Qué gas es esencial para la respiración?", respuestas: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Helio"], correcta: 2 },
    { pregunta: "¿Cuál es el idioma más hablado en el mundo?", respuestas: ["Inglés", "Mandarín", "Español", "Hindi"], correcta: 1 },
    { pregunta: "¿Qué es el ADN?", respuestas: ["Ácido Dextro Nucléico", "Ácido Desoxirribonucleico", "Ácido Duro Núcleo", "Ácido Dioxido Neutro"], correcta: 1 },
    { pregunta: "¿Cuál es el libro más vendido en el mundo?", respuestas: ["El Quijote", "La Biblia", "Cien años de soledad", "Harry Potter"], correcta: 1 },
    { pregunta: "¿Qué país tiene forma de bota?", respuestas: ["España", "Italia", "Grecia", "Portugal"], correcta: 1 },
    { pregunta: "¿Quién fue el primer presidente de los Estados Unidos?", respuestas: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], correcta: 0 },
];

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

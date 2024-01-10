'use strict';

// QUERYSELECTOR
const botton = document.querySelector('.js_botton');
const botReset = document.querySelector('.js_botReset');
const endGameMessage = document.querySelector('.js_endGame'); 
const inputNumber = document.querySelector('.js_input_number');
const test = document.querySelector('.js_test');
const numTry = document.querySelector('.js_num_try');
const result = document.querySelector('.js_result');

// VARIABLES DE DATOS
let contador = 0; // contador
let numberRandom = getRandomNumber(100);
console.log(numberRandom);

// FUNCIONES
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function showMessage(message) {
    test.innerHTML = message;
}

// Función Reset
function resetGame() {
    contador = 0;
    numTry.innerHTML = 'Número de intentos: ' + contador;
    numberRandom = getRandomNumber(100);
    console.log(numberRandom);
    showMessage('¡Juego reiniciado!');
}

// Función comoprar
function compareNumber() {
    const userNumber = parseInt(inputNumber.value);

    if (isNaN(userNumber)) {
        showMessage('Escribe un número válido.');
    } else {
        if (numberRandom === userNumber) {
            showMessage('¡Has ganado campeona!');
            resetGame();
        } else if (numberRandom > userNumber) {
            showMessage('Demasiado bajo');
        } else if (numberRandom < userNumber) {
            showMessage('Demasiado alto');
        } else if (numberRandom > 100) {
            showMessage('El número debe estar entre 1 y 100');
        }
    }
}

// Función fin del juego
function endGame() {
    if (contador >= 10) {
        endGameMessage.innerHTML = 'El juego ha terminado';
        resetGame();
    }
}

// EVENTOS
botReset.addEventListener('click', resetGame);

const handleClickButton = (event) => {
    event.preventDefault();
    compareNumber();
    endGame();
    contador++;
    numTry.innerHTML = 'Número de intentos: ' + contador;
};

botton.addEventListener('click', handleClickButton);

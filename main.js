'use strict'

// QUERYSELECTOR
const botton = document.querySelector('.js_botton');
// evento click
// contador
const inputNumber = document.querySelector('.js_input_number');

// recoger su value y guardar en constante
const test = document.querySelector('.js_test');
// necesito el value y condicionales

const numTry = document.querySelector('.js_num_try');
const result = document.querySelector('.js_result');



// VARIABLES DE DATOS
let contador = 0; //contador
const numberRandon = getRandomNumber (100);
console.log(numberRandon);

// FUNCIONES
function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }

// funcion de comparar randon y el escrito
function compareNumber () {
    
    const userNumber = inputNumber.value;
    if( numberRandon === userNumber) {
        result.innerHTML = 'Has ganado campeona!!';
     }
   else if(numberRandon > userNumber) {
        test.innerHTML = 'Demasiado bajo';
    }
    else if(numberRandon < userNumber) {
        test.innerHTML = 'Demasiado alto';
    }
    else if(numberRandon > 100 ) {
        test.innerHTML = 'el numero debe estar entre 1 y 100';
    }
    else {
        test.innerHTML = 'Escribe un numero';
    }
}

// EVENTO
const handleClickBotton = (event) =>{
    event.preventDefault();
    
    compareNumber();// comparar y escribir mensaje
    numberRandon //crear numero aleatorio
    //contador
    contador++;
    numTry.innerHTML = 'Numero de intentos :' + contador;
    
    //contador

}

botton.addEventListener('click', handleClickBotton);



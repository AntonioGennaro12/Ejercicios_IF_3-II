/*
Portal de juego tipo SLOT (BINGO) 
Pedir 3 numeros aleatorios entre 0 y 9 al jugador
Si son 3 iguales = gana 1 Millon de Pesos
Si al menso 2 son igules, gana 100 mil pesos
Si son todos diferentes se le regala un helado
..........
FORMA DE OBTENER UN NUMERO ALEATORIO..
const min = 1;
const max = 10;
const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numAleatorio);
*/
/* Incluyo una versión 2 utilizando Números Random y mejorando la salida*/

const   quiereJugar = document.querySelector ("#quie-jugar");
const   primerNum   = document.querySelector ("#pmr-num");
const   segundoNum  = document.querySelector ("#sdo-num");   
const   tercerNum   = document.querySelector ("#trc-num");

const   miTitulo    = document.querySelector ("#mi-titulo");
const   miSalida1    = document.querySelector ("#mi-salida1");
const   miSalida2    = document.querySelector ("#mi-salida2");

const PREMIO_3_NROS_IGUALES = "$1.000.000.-";
const PREMIO_2_NROS_IGUALES = "$100.000.-";
const PREMIO_CONSUELO = "Vale por un Helado";
const min   = 1;
const max   = 5; /* cuanto más chico, aumenta la probabilidad de ganar */

const SI    = "s" ;  

miTitulo.style.color = "blue" ;
miTitulo.style.fontSize = "24px" ;   
miTitulo.textContent = "BINGO CFP5 (manual)"

function AccPalanca() {
    let juega = quiereJugar.value; 
    if(!(juega == SI)) {
        miSalida1.textContent = "No hay problema! Te esperamos cuando gustes...";  
        miSalida2.textContent = ""; 

    }
    else{
        let primerNumero = primerNum.value;
        let segundoNumero = segundoNum.value;
        let tercerNumero = tercerNum.value;

   
        if((primerNumero == segundoNumero) && (primerNumero == tercerNumero)){
            miSalida1.style.color = "red" ;
            miSalida1.style.fontSize = "24px" ;
            miSalida1.textContent = "***     ¡¡¡BINGO!!!     ***";  
            miSalida2.style.color = "violet" ;
            miSalida2.style.fontSize = "20px" ;
            miSalida2.textContent = "Ganaste " +PREMIO_3_NROS_IGUALES+"";
        }
        else if(((primerNumero == segundoNumero) ||(primerNumero == tercerNumero)) || (segundoNumero == tercerNumero)) {
            miSalida1.style.color = "green" ;
            miSalida1.style.fontSize = "18px" ;
            miSalida1.textContent = "¡¡Felicitaciones!! Ganaste  " +PREMIO_2_NROS_IGUALES+"";  
            miSalida2.textContent = "";
        }
        else {
            miSalida1.style.color = "brown" ;
            miSalida1.style.fontSize = "16px" ;   
            miSalida1.textContent = "Ganaste un " +PREMIO_CONSUELO+", sigue participando...";
            miSalida2.textContent = ""; 
        };  
    };

}
/*
<input type="text" name="" id="pmr-num" style="text-align:center ; width:20px ;margin-left: 23px;">
<label for="sdo-num">Ingresa el Segundo Numero....:</label>
<input type="text" name="" id="sdo-num" style="text-align:center ; width:20px ;margin-left: 24px;">
<label for="trc-num">Ingresa el Tercer Numero........:</label>
<input type="text" name="" id="trc-num" style="text-align:center ; width:20px ;margin-left: 23px;"></input>
*/
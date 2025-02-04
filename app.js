/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del numero secreto"

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Elije un número del 1 al 10"*/

//----El mismo codigo pero mejorado---

let numeroSecreto = 0;
let intentos = 1;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número secreto en ${intentos}${(intentos === 1) ? " ves " : " veces "}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto el menor")
        } else {
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
    // -----Codigo reducido------
    //document.querySelector("#valorUsuario").value = "";
}
/*    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario === numeroSecreto);*/


function generarNumeroSecreto() {
    /*let numeroSecreto = Math.floor(Math.random()*10+1);
     return numeroSecreto;*/
    // ---Mismo codigo pero mejorado--

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);

    // si ya sorteamos todos los numeros
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        // si numeroGenerado esta incluido en la lista 
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento("p", `Elije un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reniciarJuego() {
    //Limpiar la caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de números.
    //Generar número aleatorio.
    // Inicializar el número de intentos.
    condicionesIniciales();
    //Desahabilitar el botón de nuevo juego.
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales();
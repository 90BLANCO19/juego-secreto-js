/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';*/

/*let parrafo = document.querySelector('p');
parrafo.innerHTML ='Indica un número del 1 al 10';*/

let numeroSecreto = 0;

let intentos = 0;

let listaNumeroSorteado = [];

let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numerDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
   
    console.log(intentos);

    if (numerDeUsuario === numeroSecreto){
                                                                                // ? cumple la funcion de if y : cumple la función de else
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        //El usuario no acertó.
        if (numerDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
        } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;

        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //document.querySelector('#valorUsuario').value ='';
    document.getElementById('valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los nuemro
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los número posibles')
    } else{

            //si el numero generado esta incluido en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteado.push(numeroGenerado):
            return numeroGenerado;
        }

    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja.
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();


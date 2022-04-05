/**
 * 2C = 2 de treboles
 * 2S = 2 de espadas
 * 2D = 2 de diamantes
 * 2H = 2 de corazones
 * 
 */

// almacenara todas las cartas
let deck = [];
const tipos = ['C','D', "H", "S"]; // tipo de carta
const especiales = ['A', 'J', 'Q', 'K']; // cartas especiales

let puntosJugador = 0, 
    puntosComputadora=0;

// referencias del HTML
const btnPedir = document.querySelector("#btnPedir"); // referencia al boton Pedir
const puntosHTML = document.querySelectorAll('small'); 
const divCartasJugador = document.querySelector('#jugador-cartas'); // referencia al div del jugador


// función que crea una nueva baraja
const crearDeck = () =>{
    // crear todas las cartas del 2 al 10
    for(let i = 2; i<=10; i++){
        tipos.forEach((tipo)=>{
            deck.push(i+tipo);
        })
    }

    // adicionando las cartas especiales
    for( let tipo of tipos){
        especiales.forEach((espe)=>{
            deck.push(espe+tipo);
        })
    }

    // deck ordenado
    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// función q permite tomar una carta
const pedirCarta = () =>{

    // validando si hay cartas en la baraja
    if(deck.length == 0){
        throw "No hay cartas en la deck"
    }

    // pedimos una carta de la baraja y le quitamos esa misma carta
    // para este caso, se pide la ultima carta
    let carta = deck.pop();

    /*
    console.log(deck);
    console.log(carta);
    */

    return carta;
};

carta = pedirCarta();

// validar el valor de cada carta
const valorCarta = (carta) =>{

    // extrayendo el 1 valor del string
    // length nos devuelve la cantidad de caracteres q tiene el string    
    // substring(inicio, final)
    // substring(0, carta.length - 1) = (0, tamaño - 1)
    const valor = carta.substring(0,carta.length-1);


    /*
    // todo el código que se realiza, se simplifica con la condición ternaria y al ser una función
    // solamente se retorna el valor

    // puntaje que llevara la cuenta para el 21 
    let puntos = 0;

    // validando si es un número
    // isNaN => evalua si es un número, true si no es un número y false si es número
   
    if( isNaN(valor)){
        
        // en blackjack el J, Q y K valen 10, y el A vale 11
        puntos = (valor === "A"?11:10)
    }else{
        // al ser un número le agregamos el puntaje q le corresponda
        puntos = valor * 1; // lo convertimos a número el string
    }

    console.log(puntos);

    */
    // isNaN => si NO es un número
    return (isNaN(valor))?
            (valor==="A"?11:10):
                valor*1;
};

const valor = valorCarta(carta);
console.log({valor});

// Eventos
// elemento_html.addEventListener(Evento, función_a_ejecutar_acción)
btnPedir.addEventListener('click', () => {
    //pedimos una carta
    const carta = pedirCarta();
    
    //sumamos puntos
    puntosJugador = puntosJugador + valorCarta(carta);

    //mostramos los puntajes en el Jugador
    puntosHTML[0].innerText = puntosJugador;

    // creamos una nueva carta
    const imgCarta = document.createElement('img'); // creamos la imagen q estara en memoria
    imgCarta.src = `./assets/cartas/${carta}.png`
    imgCarta.classList.add('carta'); // añadimos la clase

    divCartasJugador.append(imgCarta);

    // controlamos el puntaje:
    // si > 21, perdio
    if(puntosJugador > 21){
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled = true; // desactivamos el boton de pedir más carta
    }else if(puntosJugador === 21) {
        console.warn("21, genial");
        btnPedir.disabled = true; // desactivamos el boton de pedir más carta
    }
})
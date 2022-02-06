// metodos son funciones internas q viene con el objeto

let juegos = [
    'Zelda',
    'Mario',
    'Metroid',
    'Chrono'
];

// longitud del arreglo juegos
console.log("Largo del arreglo juegos: ", juegos.length);

let primero = juegos[0]; // 1er elemento
let ultimo = juegos[juegos.length-1]; // ultimo elemento, si el arreglo es dinamico

console.log(`primer elemento: ${primero}`);
console.log(`ultimo elemento: ${ultimo}`)

// forma basica de uso del foreach
juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
})

// insertando un nuevo elemento al final del arreglo
// al mismo tiempo devuelve el nuevo tamaño del arreglo 
let nuevaLongitud = juegos.push('F-Zero')
console.log({nuevaLongitud, juegos});

// insertando un nuevo elemento al inicio del arreglo
// tambien al mismo tiempo devuelve el nuevo tamaño del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem')
console.log({nuevaLongitud, juegos});

// eliminando el ultimo elemento del arreglo
let juegoBorrado =juegos.pop()
console.log(juegoBorrado, juegos);

// eliminando un elemento de cualquier posición
//juegos.splice(punto inicial, cuantos elementos va a eliminar)
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2); //eliminando 2 elementos desde la posición 1
console.log({juegosBorrados, juegos});

// ubicar el indice de un elemento
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});
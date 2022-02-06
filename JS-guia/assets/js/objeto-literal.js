// objeto literal -> son objetos que tienen pares de valores
// llave y valor
const personajes = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ],
    direccion: {
        zip: '10880, 98265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
};

console.log(personajes);
console.log('Nombre: ', personajes.nombre);
console.log('Nombre: ', personajes['nombre']);
console.log('Edad: ', personajes.edad);

console.log('Latitud: ', personajes.coords.lat);
console.log('Longitud: ', personajes.coords.lng);

console.log('Cantidad de Trajes: ', personajes.trajes.length);

console.log('Ultimo traje: ', personajes.trajes[personajes.trajes.length-1]);

const x = 'vivo';
console.log('Vivo: ', personajes[x]);

console.log('Última pelicula: ', personajes["ultima-pelicula"]);

// elimando un elemento del objeto literal
delete personajes.edad
console.log({personajes});

// adicionamos un elemento con su valor al objeto literal
personajes.casado = true;
console.log({personajes});

// devuelve un arreglo de pares propios 
const entriesPares = Object.entries(personajes)
console.log(entriesPares);

// aunque sea una constante la variable personajes, esta solo se limita a la asignación directa
// de la misma, más no de las metodos
// Object.freeze(objeto_nombre) -> no permitira que se modifique directa y/o metodos
Object.freeze(personajes)

personajes.dinero = 10000000000000; // asignamos al objeto literal una nueva propiedad
console.log(personajes); //veremos que no se adiciona la propiedad dinero

personajes.casado = true;
personajes.direccion.ubicacion = 'Costa Rica';
console.log(personajes);// como se observa si modifica, para bloquearlo se debe de referenciar directamente
// desde Object.freeze

// listado de las propieades del objeto literal
// Object.getOwnPropertyNames(objeto_nombre) -> devuelve como un arreglo todas las propiedades del arreglo
// Object.values(objeto_nombre) -> devuelve los valores de las propiedades del arreglo
const propiedades = Object.getOwnPropertyNames(personajes);
const valores = Object.values(personajes);
console.log(propiedades);
console.log(valores);
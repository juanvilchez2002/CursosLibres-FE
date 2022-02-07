// funcion normal

function crearPersonal(nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
}

// flecha
const crearPersona2 = (nombre, apellido) =>{
    return {
        nombre, 
        apellido
    }
}

// flecha sin return, se usa unas parentensis indicando a JS que se devuelve lo que esta dentro de las llaves
const crearPersona3 = (nombre, apellido) =>({ nombre, apellido } )

const persona1 = crearPersonal('Juan', 'Vilchez')
console.log("persona1: ",persona1);

const persona2 = crearPersona2('Juan', 'Vilchez')
console.log("persona2: ", persona2);

const persona3 = crearPersona3('Juan', 'Vilchez')
console.log("persona3: ", persona3);


// función q imprime argumentos
function imprimeArgumento(){
    console.log(arguments);
}

imprimeArgumento(10, true, "Hola", 1.2)

// flecha, aquí no crea arguments, para ello se debe de adicionar como parametro rest "...args", esto limita a que
// no puede ir parametros adicionales despues del parametro rest, si no antes de definirlo
const imprimeArg = (edad, ...args)=>{
    console.log({edad, args});
}

imprimeArg(10, true, "hola como estas?", 1.9) 

// flecha 2, 
const imprimeArg2 = (edad, ...args) =>{
    return args
}

// creamos variables a partir de un arreglo definido como una lista y sus valores son las q se devuelven
const [casado, vivo, nombre, saludo] = imprimeArg2(10, true, "hola como estas?", "juan", 1.9) 
// cuando usamos {} creamos un objeto con pares de valores
console.log({casado, vivo, nombre, saludo});


// desestructuración de elementos
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    // edad: 40,
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ]
};

// primera forma de imprimir los valores
const imprimePropiedades = (personaje) =>{
    console.log('nombre: ', personaje.nombre);
    console.log('codeName: ', personaje.codeName);
    console.log('vivo: ', personaje.vivo);
    console.log('edad: ', personaje.edad);
    console.log('trajes: ', personaje.trajes);

}

imprimePropiedades(tony);

// aplicamos la desestructuración
const imprimePropiedades2 = ({nombre, codeName, edad=15, vivo, trajes}) =>{    

    // asumamos q no nos envian el valor de edad, usamos una validación
    // edad = edad || 0; // lo que hace es tomar el valor verdadero, q en este caso es 0

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades2(tony);
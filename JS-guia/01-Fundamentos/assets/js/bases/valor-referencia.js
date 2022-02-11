
// todos la variables de tipo primitivo se pasan a travez de valor
let a = 10;
let b = a;
a = 30;

console.log({a, b});


// todos los objetos se pasan a tavez de referencia, x esta razón cuando se cambia de valor
// nombre a "ana" en la varible ana, también se cambia en la variable juan
let juan = {
    nombre: "juan"
};

let ana = juan;
// para romper la referencia en este caso se usa el operador spred que es ..., que rompe con la referencia,tambien separa los elementos
// la diferencia con el operador rest ... es que este solo se usa cuando se envia por una función como parametro dnd separa
// los argumentos en un arreglo
let ana1 = {...juan};

ana.nombre = "ana"

console.log({juan, ana, ana1});


// rompemos la referencia usamos el operador rest ....
const cambiarNombre = ({...persona}) =>{
    persona.nombre = "tony";
    return persona
}

// creamos un objeto peter
let peter = {
    nombre:"Peter"
};

let tony = cambiarNombre(peter);

console.log({peter, tony});


// arreglos;
const frutas = ['manzana', 'pera', 'piña'];


// eliminamos la referencia con los corchetes y el operador spred ...
// con el console.time verificamos el tiempo en que se demora en realizar la tarea
console.time("spred"); // inicio
const otrasFrutas1 = [...frutas];
console.timeEnd("spred"); // termino


// tambien podriamos usar el metodo slice
console.time("splice");
const otrasFrutas2 = frutas.slice();
console.timeEnd("splice");

otrasFrutas1.push("mango");
otrasFrutas2.push("mango");

console.table({frutas, otrasFrutas1, otrasFrutas2});




function saludar(nombre){
    console.log(arguments);// identifica a todos los argumentos que son pasados a la función en un array
    console.log("Hola "+nombre);
}

// función anonima
const saludar2 = function (nombre){
    console.log("Hola "+nombre);
}

// función flecha
const saludarFlecha = ()=>{
    console.log("Hola Juan");
    return 1;
}

const saludarFlecha2 = (nombre)=>{
    console.log("Hola "+nombre);
}

const saludarFlecha3 = nombre =>{
    console.log("Hola "+nombre);
}

saludar("Mundo... <3", 40, true, "Perú");// se le envia + argumentos que lo definido en la función
saludar2("mundo... xD"); 

const retornoDeSaludo = saludarFlecha();
console.log(retornoDeSaludo);
saludarFlecha2("Juan");
saludarFlecha3("Juancho")

function sumar(a, b){
    return a+b
};

const sumar2 = (a,b)=>{
    return a+b
}

console.log("funcion suma: ", sumar(1,3));
console.log("funcion suma2: ", sumar(1,3));

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random()

console.log("aleatorio: ", getAleatorio());
console.log("aleatorio2: ", getAleatorio());
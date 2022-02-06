
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
}

const saludarFlecha2 = (nombre)=>{
    console.log("Hola "+nombre);
}

saludar("Mundo... <3", 40, true, "Perú");// se le envia + argumentos que lo definido en la función
saludar2("mundo... xD"); 

saludarFlecha();
saludarFlecha2("Juan");
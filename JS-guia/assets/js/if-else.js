

let a = 5;

if(a >= 10){
    console.log("A es mayor a 10");
}else{
    console.log("A es menor a 10");
}

// console.log("Fin de programa");

const hoy = new Date(); // new crea nuevas instancias de objetos, Date hace referencia a las fechas
console.log(hoy);

let dia = hoy.getDay();
console.log({dia}); // devuelve el día

// dia = 0; es una asignación
// dia == 0; evalua el valor más no el tipo de la variable
// dia === 0; evalua el valor y el tipo de variable

if(dia ===0){ // === se 
    console.log("Domingo");
}else{
    console.log("No es Domingo");
}


// sin usar if else o switch, unicamente obketos
// devolver el día de la semana

const semana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes", 
    "Sábado",
    "Domingo"
]

console.log(
    semana[dia-1]
);
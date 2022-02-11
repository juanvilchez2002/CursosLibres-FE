/**
 * días de semana abrimos a las 11;
 * pero los fines de semana abrimos a las 9
 */

// entra a un sitio web, para consultar si está abierto hoy...

const dia = 1; // 0: domingo... 1: lunes....
const horaActual = 10;


let horaApertura;
let mensaje; // Está abierto, Esta cerrado, hoy abrimos a las XX

if(dia === 0 || dia === 6){
    console.log("Día de Semana");
    horaApertura = 9;
}else{
    console.log("Día de Semana");
    horaApertura = 11;
}

if(horaActual >= horaApertura){
    mensaje = "Está abierto"
}else{
    mensaje =`Está cerrado, hoy abrimos a las ${horaApertura}`
}
  
console.log({horaApertura, mensaje});


console.log("=================");
console.log("Usando otra forma: includes en un arreglo\n");

if([0,6].includes(dia)){// se crea un arreglo con los dos días y verificamos si el día a consultar se encuentra en el arreglo
    console.log("Día de Semana");
    horaApertura = 9;
}else{
    console.log("Día de Semana");
    horaApertura = 11;
}

if(horaActual >= horaApertura){
    mensaje = "Está abierto"
}else{
    mensaje =`Está cerrado, hoy abrimos a las ${horaApertura}`
}
  
console.log({horaApertura, mensaje});


console.log("=================");
console.log("Usando operador condicional ternario");
console.log("condicion_a_evaluar ? si_es_verdadero: si_es_falso\n");

// 
horaApertura = ([0, 6].includes(dia) ? 9: 11);
mensaje = (horaActual>=horaApertura ? "Está Abierto": `Está cerrado, hoy abrimos a las ${horaApertura}`);

  
console.log({horaApertura, mensaje});
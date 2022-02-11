
const regresaTrue = () => {
    console.log("Regresa true");
    return true;
}

const regresaFalse = () => {
    console.log("Regresa false");
    return false;
}

console.warn("Not o la negación -> !");
console.log(true); // verdadero
console.log(!true); // falso
console.log(!false); // verdadero

console.log(!regresaFalse());

console.warn("And"); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log("================");
console.log(regresaTrue() && regresaFalse());



console.warn(("Or"));
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false


const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;


// como es true, la constante tomara como valor el ultimo
const a1 = true && "Hola Mundo..." && 150;

// en este caso, como inicio como valor false toma este valor
const a2 = false && "Hola Mundo..";

// aquí al iniciarse como true o valor, la variable toma como valor el ultimo
const a3 = "Hola" && "Mundo" && soyFalso;

// en el caso del OR, tomara el 1er valor valido ( con contenido o verdadero)
const a4 = soyFalso || "Ya no soy falso";
const a5 = soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true; 
const a6 = soyFalso || soyUndefined || regresaTrue() || "Ya no soy falso de nuevo" || true;

console.log({a1, a2, a3, a4, a5, a6 });

if(true || true || true || false){
    console.log("Hacer algo");
}else{
    console.log("Hacer otra cosa");
}
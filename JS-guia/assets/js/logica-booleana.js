
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

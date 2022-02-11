
const elMayor = (a, b) =>{
    return a>b ? a:b;
}

// simplificado 
const elMayor2 = (a, b) => (a>b)?a:b;

console.log(`El mayor es ${elMayor(15,20)}`);
console.log(`El mayor es ${elMayor2(15,20)}`);


const tieneMembresia = (miembro) => (miembro)? "2 dolares": "10 dolares";
console.log(tieneMembresia(true));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'peter',
    'tony',
    'dr. strange',
    (amigo) ? 'thor': 'loki',
    (() => 'Nick Fury')() // función anonima autoinvocable
];

console.log(amigosArr);


const nota = 65; // A+, A, B+....
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C': 'F';

console.log({nota, grado});
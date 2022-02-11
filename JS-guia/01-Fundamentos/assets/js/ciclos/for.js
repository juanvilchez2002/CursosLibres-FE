
const heroes = [
    'Batman',
    'Superman',
    'Mujer Maravilla',
    'Aquaman'
];

console.warn("For tradicional: for(inicializador, condición, incremento)");

for(let i =0; i < heroes.length; i++){
    console.log(heroes[i]);
}


console.warn("For In: for( let i in arreglo)");

for(let i in heroes){
    console.log(heroes[i]);
}


// usado para obtener referencias de valores de objetos 
console.warn("For Of");

for(let heroe of heroes){
    console.log(heroe);
}

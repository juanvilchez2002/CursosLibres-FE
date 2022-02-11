
console.warn("While")

const carros = ['ford', 'mazda', 'honda', 'toyota']

let i =0;

while(i < carros.length){
    console.log(carros[i]);
    i+=1;
}


i =0;

while(carros[i]){
    if(i===1){
        i++;
        continue;
    }
    console.log(carros[i]);
    i+=1;
}

console.warn("Do While")

let j=0;

do{
    console.log(carros[j]);
    j++;
}while(j < carros.length)
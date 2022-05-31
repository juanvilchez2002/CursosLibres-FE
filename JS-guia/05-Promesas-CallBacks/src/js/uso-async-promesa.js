//import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

import './styles.css';

//promesaLenta.then(console.log);
//promesaMedia.then(console.log);
//promesaRapida.then(console.log);

/*
console.log("usando race");

// usar Promise.race(iterable) -> el iterable es un arreglo de promesas, devuelve la 
// promesa que se cumplira o no de forma mas pronta. 
Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(console.log)
    .catch(console.warn)
*/


// usando promesa normal
buscarHeroe('capi')
    .then(console.log)
    .catch(console.error)

// usando Async
buscarHeroeAsync('iron')
    .then(console.log)
    .catch(console.error)
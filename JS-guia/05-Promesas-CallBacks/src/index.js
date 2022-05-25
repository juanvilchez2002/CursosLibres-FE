import { buscarHeroe  as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';
// callback
/*
buscarHeroe(heroeId, (err, heroe) =>{

        if(err){
            console.error('Algo salio mal');   
        }else{
            console.info(heroe);
        }
    
    }
);*/

// promesas

buscarHeroe(heroeId1).then(heroe =>{
    // then -> si se cumple la promesa
    console.log(`${heroe.nombre} se va de misión`);
})


// Promise.all -> recibe un arreglo de objetos, funciones, promesas, etc
// devuelve un arreglo
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
.then(([heroe1, heroe2]) =>{
    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
})
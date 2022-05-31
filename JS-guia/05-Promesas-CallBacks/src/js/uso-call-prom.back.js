import { buscarHeroe  as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron1';
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
// asimismo, si una promesa no se resuelve por defecto no se ejecuta las demas
// para que se ejecute todas, todas las promesas se deben de resolver
// devuelve un arreglo
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
.then(([heroe1, heroe2]) =>{
    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
}).catch( err =>{
    alert(err)
}).finally( ()=>{
    console.log("Se termino el Promise.all");
})
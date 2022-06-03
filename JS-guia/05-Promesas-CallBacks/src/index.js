import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIdAwait } from "./js/await";

/*
console.time('await')

obtenerHeroesArr()
    .then(heroe =>{
        console.table(heroe);
        console.timeEnd('await')
    });

console.time('await1')
obtenerHeroeAwait('cap2i')
    .then(heroe =>{
        console.log(heroe);
        console.timeEnd('await1')
    }).catch(err => console.warn(err));

*/

heroesCiclo();
heroeIdAwait('iron');
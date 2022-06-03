import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(id => buscarHeroe(id)); // ejemplo para el for e if await
// otra forma const heroesPromesas = heroesIds.map(buscarHeroe)

export const obtenerHeroesArr = async ()=>{
    const heroesArr = [];
    /* 
    for(const heroes of heroesIds){
        const heroe = await buscarHeroeAsync(heroes);
        heroesArr.push(heroe)
    }

    return heroesArr;
    */
    
    // mejorando el código usando Promise.all con un arreglo de promesas
    // y el await, en la practica es más rapido
    
    for(const heroes of heroesIds){
        // generamos un arreglo de promesas
        heroesArr.push(buscarHeroe(heroes))
    }

    return await Promise.all(heroesArr);

     // un solo código
     // return await Promise.all(heroesIds.map(buscarHeroe))
}

export const obtenerHeroeAwait = async(id) =>{

    //manejando el try.catch
    try{
        // await resuelve una promesa
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    }catch(err){
        console.log(`Catch!!!!`);
        throw err;
    }
    

}

// ejemplo de for e if await
export const heroesCiclo = async () =>{
    console.time('heroesCiclo');

    // for await
    for await (const heroe of heroesPromesas){
        console.log(heroe);
    }

    // const heroes = await Promise.all(heroesPromesas);
    // console.log(heroes);

    console.timeEnd('heroesCiclo');
}

// ejemplo del if await
export const heroeIdAwait =  async (id) =>{
    if ( (await buscarHeroeAsync(id)).nombre === 'Iroman'){
        console.log('El mejor de todos');
    }else{
        console.log('nada');
    }
}
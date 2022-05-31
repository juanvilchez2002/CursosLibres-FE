import { buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async ()=>{
    const heroesArr = [];

    for(const heroes of heroesIds){
        const heroe = await buscarHeroeAsync(heroes);
        heroesArr.push(heroe)
    }

    return heroesArr;
}
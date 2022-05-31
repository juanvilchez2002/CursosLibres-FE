// creamos un arreglo

const heroes = {
    capi:{
        nombre: 'Capitán America',
        poder: 'Soportar las inyecciones'
    },
    iron:{
        nombre: 'Iroman',
        poder: 'Absurda cantidad de dinero'
    },
    spider:{
        nombre: 'Spiderman',
        poder: 'La mejor reacción alergica de picaduras de araña'
    }
}

// en las promesas no es necesario enviar un callback
export const buscarHeroe = (id)=>{

    const heroe = heroes[id];

    // creamos la promesa y lo retornamos
    // la promesa recibe un callback, cuales son las funciones q se desea ejecutar
    // resolve -> cuando se cumple la promesa
    // reject -> cuando no se cumple la promesa
    return new Promise((resolve, reject) =>{
        // realizamos la condición de la promesa
        if(heroe){
            // resolve -> puede devolver cualquier cosa, argumento u objetos
            setTimeout(()=>{
                resolve(heroe);
            }, 1000);
        }else{
            // si no se cumple
            reject(`No existe un héroe con id ${id}`);
        }
    })
}

// Async
// al indicar que la función es async x defecto estamos regresando una nueva
// promesa, x consecuente no es necesario todo el código despues de new Promise
export const buscarHeroeAsync = async (id)=>{

    const heroe = heroes[id];

    // el async devuelve x defecto una promesa
    if(heroe){
        return heroe;
    }else{
        throw `No existe un héroe con el id ${heroe}`
    }
    
}

// otras promesa
const promesaLenta = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promesa Lenta')
    }, 2000)
})

const promesaMedia = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promesa Media')
    }, 1500)
})

const promesaRapida = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promesa Rapida')
    }, 1000)
})

export {
    promesaLenta, promesaMedia, promesaRapida
}



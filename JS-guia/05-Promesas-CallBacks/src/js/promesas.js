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
            resolve(heroe);
        }else{
            // si no se cumple
            reject(`No existe un héroe con id ${heroe}`);
        }
    })
}
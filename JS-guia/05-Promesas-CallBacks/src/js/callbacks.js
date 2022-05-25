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

// el callback retorna al objeto que se encontro
export const buscarHeroe = (id, callback)=>{

    const heroe = heroes[id];

    if(heroe){
        callback(null, heroe)
    }else{
        // un error
        callback(`No existe un héroe con id ${heroe}`);
    }
    // callback(heroe)
}
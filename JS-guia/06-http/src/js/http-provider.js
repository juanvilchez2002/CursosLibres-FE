// aquí se ha de guardar la logica del programa

const jockerURL = 'https://api.chucknorris.io/jokes/random'; // url

// función que nos devolvera una promesa
const obtenerChiste = async() =>{
    // en async es recomendable trabajarlo con un try-catch
    try {

        const resp = await fetch(jockerURL);

        // si existe error en devolver la promesa
        if( !resp.ok) throw 'No se pudo realizar la petición';

        // desestructurando las variables a usar
        // resp.json() -> devuelve una promesa en JSon y tiene valores
        const {icon_url, id, value} = await resp.json();

        return {icon_url, id, value}
        
    } catch (error) {
        throw error
    }
}

export {
    obtenerChiste
}
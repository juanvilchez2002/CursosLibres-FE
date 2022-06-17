// aquí se ha de guardar la logica del programa

const jockerURL = 'https://api.chucknorris.io/jokes/random'; // url de api chistes de chuck norris
const urlUsuarios = 'https://reqres.in/api/users?page=2'; // url de api de usuarios libres


// direcciones Cloudinary
const cloudPreset = 'xbjxxbtn';
const cloudURL = 'https://api.cloudinary.com/v1_1/deuskq0lq/upload';

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


const obtenerUsuario = async() =>{
    try {
        const resp = await fetch(urlUsuarios);
        const {data: usuarios} = await resp.json();
        // console.log(usuarios);
        return usuarios;

    } catch (error) {
        console.log(error);
    }
}

// subir imagenes
const subirImagen = async(archivoSubir) =>{

    // creamos el formData
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        
        const resp = await fetch(cloudURL, {
            method:'POST',
            body:formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
        }else{
            throw await resp.json(); // enviamos el error
        }
    } catch (error) {
        throw error 
    }
}

export {
    obtenerChiste,
    obtenerUsuario,
    subirImagen
}
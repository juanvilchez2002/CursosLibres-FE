
// url para poder acceder a un solo usuario, falta el id
const urlCRUD = 'https://reqres.in/api/users'; 

// le pasamos el id para devolver la info del usuario
const getUsuario = async(id) =>{
    try {
        const resp = await fetch(`${urlCRUD}/${id}`);
        const {data} = await resp.json();
        return data;

    } catch (error) {
        throw error
    }
}

// crear un usuario

const crearUsuario = async(usuario)=>{

    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    return (await resp.json());
}

// actualizar un usuario
const updateUsuario = async(id, usuario) =>{

    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    return (await resp.json());
}

// eliminar un usuario

const borrarUsuario = async (id)=>{
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE'
    });

    return (resp.ok)?'Borrado': 'No se pudo eliminar';
}

export {
    getUsuario,
    crearUsuario,
    updateUsuario,
    borrarUsuario
}
import {subirImagen} from './http-provider'

const body = document.body;

// para subir archivos
let inputFile, imgFoto;

const crearFileInputHtml = () =>{
    
    const html = `
        <h1 class='mt-5'>
            Subir Archvios
        </h1>
        <hr>
        <label>
            Selecciona una fotografia: 
        </label>
        <input type='file' accept='image/png, image/jpeg, image/jpg'/>
        <br>
        <img id='foto' class='img-thumbnail' src=''/>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div)

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');

};

const eventos = () => {
    inputFile.addEventListener('change', (event) =>{
            // extraemos el archivo
            const file = event.target.files[0];
            console.log(file);
            subirImagen(file).then( resp =>{
            console.log(resp);
            imgFoto.src = resp;
        });
    });    
}


const init = () =>{
    crearFileInputHtml();
    eventos();
}

export {
    init
}
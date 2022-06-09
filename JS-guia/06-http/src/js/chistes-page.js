import {obtenerChiste} from './http-provider';


// referencia para trabajar con el body del html
const body = document.body;
let btnOtro, olList;

//
const crearchistesHtml = () =>{
    
    // para crear el html
    const html = `
    <h1 class="mt-5">
        Chistes
    </h1>
    <hr>
    <button class="btn btn-primary">
        Otro Chiste
    </button>
    <ol class="mt-2 list-group">

    </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.appendc(divChistes);
}

const eventos = () =>{

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    // escuchamos los eventos
    btnOtro.addEventListener('click', async ()=>{

        btnOtro.disabled = true;

        // obtenemos los chistes
        dibujarChiste(await obtenerChiste());

        btnOtro.disabled = false;
    })

}

const dibujarChiste = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `
                        <b>
                            ${chiste.id}
                        </b>:
                            ${chiste.value}
                        `;
    olItem.classList.add("list-group-item");

    olList.append(olItem)
}

export const init = () =>{
    crearchistesHtml();
    eventos();
}
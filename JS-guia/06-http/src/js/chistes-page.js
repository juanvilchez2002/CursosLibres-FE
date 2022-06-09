
// referencia para trabajar con el body del html
const body = document.body;

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
        <li class="list-group-item">
            ....
        </li>
    </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

export const init = () =>{
    crearchistesHtml();
}
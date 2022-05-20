import { Todo } from "../classes";
import { todoList } from "../index";

// referencias en el html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${todo.completado?'completed':'' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completado?'checked':'' }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    // creamos el elemento html
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

// Eventos en JS 
// Eventup KeyUp -> devuelve el valor de lo tecleado
// nos devuelve el value y el keyCode que es el valor en num de la tecla
txtInput.addEventListener('keyup', (e)=>{
    // verificando el valor de lo tecleado
    // console.log(e);

    // agregara una nueva tarea si se teclea la tarea y se presiona enter (13)
    if(e.keyCode === 13 && txtInput.value.length > 0){

        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);

        // adicionando la tarea a TodoList
        todoList.nuevoTodo(nuevoTodo);
        console.log(todoList);

        // creando el html
        crearTodoHtml(nuevoTodo);

        // limpiando el txtInput
        txtInput.value = '';
        
    }
})

// evento que capturara el lugar dnde se realice el click
divTodoList.addEventListener('click', (e) =>{
    // mostrar cuando se realice el evento
    //console.log(e);

    // buscamos el elemento
    const nombreElemento = e.target.localName;
    const todoElemento = e.target.parentElement.parentElement; // tiene todo el elemento creado
    const todoId = todoElemento.getAttribute('data-id');
    // console.log(todoElemento);
    // console.log(typeof todoId);

    // click en el check (completado)
    if(nombreElemento.includes('input')){ 

        // pasamos el id al metodo de la clase
        todoList.marcarCompletado(todoId);
        // .toggle -> hace adicionar o restar una propiedad segun la encuentre o no
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){ // eliminaremos la tarea con el HTML
        
        // enviamos el id para eliminar
        todoList.eliminarTodo(todoId);
        
        // eliminaremos el HTML
        divTodoList.removeChild(todoElemento);
    }

    console.log(todoList);
});

// Evento que eliminara todos los completados
btnBorrar.addEventListener('click', ()=>{
    // console.log('hol');
    // llama a al función que eliminara todos los completados del arreglo
    // pero no eliminara el HTML
    todoList.eliminarCompletados();

    // eliminamos todos los completados del HTML
    // sacamos el tamaño del arreglo en el HTML y hacemos el recorrigo desde el final al inicio
    for(let i = divTodoList.children.length -1; i >=0; i--){

        // colocamos la tarea
        const elemento = divTodoList.children[i];

        // comparamos si esta completado, al verificar si tiene el elemento tiene la clase
        // completed, de ser así lo removemos
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
})

// evento que realizara los filtros
ulFilters.addEventListener('click', (e) =>{
    console.log(e.target.text);

    const filtro = e.target.text;

    // borramos de los elementos la clase 'selected'
    anchorFiltros.forEach(elem => elem.classList.remove('selected'))
    e.target.classList.add('selected')

    // si no existe se termina el evento
    if(!filtro) {return};

    // recorremos todas los elementos las tareas divTodoList
    for(const elemento of divTodoList.children){
        
        
        // removemos de los elementos la clase .hidden de CSS
        elemento.classList.remove('hidden');

        // si el elemento tiene la clase 'completado'
        const completado = elemento.classList.contains('completed')

        // realizando los filtros
        switch(filtro){

            // si hacemos click en Pendientes
            case 'Pendientes':
                // adicionamos la clase hidden a los completados para ocultar la tarea
                if(completado){
                    elemento.classList.add('hidden');
                };
                break;
            // si hacemos click en completados
            case 'Completados':
                // adicionamos la clase hidden a los pendientes para ocultar la tarea
                if(!completado){
                    elemento.classList.add('hidden');
                };
                break;
        }
    }


})
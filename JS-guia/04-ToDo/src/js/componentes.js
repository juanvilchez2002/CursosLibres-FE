import { Todo } from "../classes";
import { todoList } from "../index";

// referencias en el html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

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
    console.log('hol');
    todoList.eliminarCompletados();
    console.log(divTodoList.children.length);
})
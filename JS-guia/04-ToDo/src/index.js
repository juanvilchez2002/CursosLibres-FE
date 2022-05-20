import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo("Aprendiendo JS!!");

// al tener un metodo para adicionar una tarea lo pasamos
// todoList.nuevoTodo(tarea);

// creamos el html
// crearTodoHtml(tarea);
console.log(todoList.todos);

todoList.todos.forEach(todo => {
    crearTodoHtml(todo)
});

const newTodo = new Todo('Aprender JS');
todoList.nuevoTodo(newTodo);


// tambien se puede reducir a este código, si solo es un solo argumento
// todoList.todos.forEach( crearTodoHtml);



// ejemplo de usar localStorage y sessionStorage
// localStorage -> guarda la información y esta se almacena; puede recuperarse si se actualiza o se
// cierra el navegador
// sessionStogare -> gudarda la información pero se pierde cuando se cierra o se actualiza el navegador

// localStogare
/*
localStorage.setItem('mi-key', 'valor012345');
sessionStorage.setItem('mi-key', 'valor012345');

setTimeout(()=>{
    localStorage.removeItem('mi-key');
}, 1500);*/
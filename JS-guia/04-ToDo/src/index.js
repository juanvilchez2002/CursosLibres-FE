import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
const tarea = new Todo("Aprendiendo JS!!");

// al tener un metodo para adicionar una tarea lo pasamos
todoList.nuevoTodo(tarea);

// creamos el html
crearTodoHtml(tarea);
console.log(todoList);
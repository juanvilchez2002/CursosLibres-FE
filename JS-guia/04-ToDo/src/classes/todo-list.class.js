
export class TodoList{

    constructor(){
        this.todos = []
    }

    // insertar una nueva tarea
    nuevoTodo(todo){
        this.todos.push(todo)
    }

    // eliminar una tarea a partir del Id
    eliminarTodo(id){

        // usaremos filter para generar un nuevo arreglo de las tareas
        // sin la tarea a eliminar
        // this.TodoList.filter( todo => todo.id!=id) -> instrución para eliminar el id
        this.todos = this.todos.filter( todo => todo.id!=id); // creamos una nueva lista

    }

    // ver si una tarea esta completada medienta Id
    marcarCompletado(id){

        // realizo un recorrido de todos los componentes de las tareas
        for(const todo of this.todos){
            // verifico que sea la tarea seleccionada
            // aunque uno sera un string y el otro un número
            if(todo.id == id){
                // cambiamos el valor que tenga a su negación
                todo.completado = !todo.completado;
                break; // romplemos el ciclo
            }
        }
    }

    // eliminaresmos las tareas completada
    eliminarCompletados(){

        this.todos = this.todos.filter(todo => !todo.completado)
        
    }


}

export class TodoList{

    constructor(){
        // this.todos = []
        this.cargarLocalStorage();
    }

    // insertar una nueva tarea
    nuevoTodo(todo){
        this.todos.push(todo);

        // guardamos en el localStorage
        this.guardarLocalStorage();
    }

    // eliminar una tarea a partir del Id
    eliminarTodo(id){

        // usaremos filter para generar un nuevo arreglo de las tareas
        // sin la tarea a eliminar
        // this.TodoList.filter( todo => todo.id!=id) -> instrución para eliminar el id
        this.todos = this.todos.filter( todo => todo.id!=id); // creamos una nueva lista

        // guardamos en el localStorage
        this.guardarLocalStorage();

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

        // guardamos en el localStorage
        this.guardarLocalStorage();
    }

    // eliminaresmos las tareas completada
    eliminarCompletados(){

        this.todos = this.todos.filter(todo => !todo.completado)

        // guardamos en el localStorage
        this.guardarLocalStorage();
        
    }

    // guardar en el localStorage
    guardarLocalStorage(){

        // guardamos en el localStorage pero solo almacena texto
        // y al objeto lo convertimos a texto
        // el metodo JSON.stringify convierte un objeto en texto
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    // cargar todas las tareas del localStorage
    cargarLocalStorage(){

        // verificamos si el localStorage esta vacio
        this.todos = localStorage.getItem('todo')?
                     // convertimos el texto a objeto con JSON.parse
                     JSON.parse(localStorage.getItem('todo')):
                     // si no existe creamos la instancia vacia
                     [];


    }
}
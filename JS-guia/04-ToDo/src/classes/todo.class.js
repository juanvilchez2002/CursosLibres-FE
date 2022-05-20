//  implementamos las clases
// se usara de forma externa

export class Todo{

    // instrucción para construir clases de la lista del localStorage
    static fromJson({tarea, id, completado, creado}){

        // creamos la instancia
        const tempTodo = new Todo(tarea);

        // enviando los valores a tempTodo
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        // retornamos la clase
        return tempTodo


    }

    // es lo que se ha de hacer en la lista
    constructor(tarea){
        this.tarea = tarea;
        // creamos un id
        this.id = new Date().getTime(); // nos devuelve un número q nos representa la ho, min, milisg
        this.completado = false;
        this.creado = new Date();
    }
}
//  implementamos las clases
// se usara de forma externa

export class Todo{

    // es lo que se ha de hacer en la lista
    constructor(tarea){
        this.tarea = tarea;
        // creamos un id
        this.id = new Date().getTime(); // nos devuelve un número q nos representa la ho, min, milisg
        this.completado = false;
        this.creado = new Date();
    }
}
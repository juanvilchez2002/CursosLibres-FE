// singleton -> es un patron de diseño que restinge la creación de objetos
// pertenecientes a una clase, una instancia unica
// ahorra memoria xq todas la propiedades, metodos apuntan a un mismo objeto

class Singleton{

    static instancia;  // es la instancia de la clase y q sera devuelta cuando se desea inicializar de nuevo
    
    nombre='';

    constructor(nombre=''){

        // consultamos si la instancia se encuentra vacia, si es así se creara la instancia y posterior no se
        // permitira crearla de nuevo
        if(!! Singleton.instancia){
            return Singleton.instancia
        }

        // este this hace referencia a esta clase a crear, y se crea solo para la 1ra instancia de la clase
        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

// creando las instancias de clase
const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman')

// mostrando
console.log(`Nombre de la Instancia1: ${instancia1.nombre}`);
console.log(`Nombre de la Instancia2: ${instancia2.nombre}`);
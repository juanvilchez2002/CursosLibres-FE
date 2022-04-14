// protip: multiples constructores
// en JS solo se puede tener un solo constructor

class Persona{

    // para el problema descrito en la creación del objeto, se crea un metodo estatico que nos devolvera
    // una nueva instancia de la clase pero usando el constructor y a la vez aceptando nuesto objeto
    // como vamos a pasar un obejeto, se desestructura los valores
    static porObjeto({nombre, apellido, pais}){
        // devolvemos una nueva instancia de la clase
        return new Persona(nombre, apellido, pais)
    }


    // definimos el constructor de la clase
    constructor(nombre='', apellido='', pais=''){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

// creamos constantes con los valores a pasar
const nombre1 = 'Melissa';
      apellido1 = 'Flores';
      pais1 = 'Honduras';

const persona1 = new Persona(nombre1, apellido1, pais1); // creamos la instancia de la clase
persona1.getInfo(); // llamamos al metodo

// creamos un objeto persona2, y con esto objeto se instanciara Persona, el problema es que el constructor
// generara un inconveniente xq se esta pasando un objeto en vez de valores, se puede hacer desestructurando 
// al momento de instanciarlo pero la idea es crear un constructor o emularlo
const juan = {
    nombre: 'Juan',
    apellido: 'Vilchez',
    pais:'Perú'
};

// no se usa en este caso 'const persona2 = new Persona(...)' xq se envia un objeto
// y se llama directo a la clase
const persona2 = Persona.porObjeto(juan);
persona2.getInfo();
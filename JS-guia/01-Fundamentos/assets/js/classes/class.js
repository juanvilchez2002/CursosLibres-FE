// clases en JS
class Persona {

    // las propiedades estaticas se utilizan cuando se queire almacenar datos a nivel de la clase,
    // también no vinculados a una instancia de la clase 
    static _conteo = 0;

    // los métodos estáticos se pueden ejecutar sin necesidad de instanciar la clase
    static get conteo(){
        return Persona._conteo+' instancias';
    }

    static mensaje(){
        console.log(this.nombre);// aquí como estamos usando this, y hace una referencia al objeto nos dara undefined
        console.log('Hola a todos, soy un método estático');
    }


    // todas las clases en JS tienen activado el 'use strict' por defecto

    // definimos las propiedades => las variables a usar, si no se pasa información al momento de la inicialización
    // estos valores son "undefined", para este caso lo inicializamos con un valor ''
    // esto es opcional, xq se puede crear en el constructor
    nombre='';
    codigo='';
    frase='';
    comida='';

    // constructor => metodo q se ejecuta en el momento que se crea una instancia
    // en el constructor podemos pasar valores
    constructor(nombre='Sin nombre', codigo='Sin código', frase='Sin frase'){

        // se podria validar si se envio datos con esta instrucción
        // if(!nombre) throw Error("Error de datos")
        
        // console.log("Hola!");
        // this => hace referencia a las variables de la clase
        // nombre = "abc" nos arrojara un error por el ambito de la variable, x eso se usa this
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        // aquí referenciamos a Persona._conteo para saber cuantas veces se instancia una clase
        // no usamos 'this', xq haria referencia al objeto creado
        Persona._conteo++;
    }

    // establecemos un set, se usa para controlar como se establece el valor de una propiedad
    // generalmente recibe solo un argumento, y no pueden llamarse como la propiedad a trabajar
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    // get => recupera una propiedad contruida
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    // se crea los metodos de la clase, que son funciones tmb se puede enviar argumentos
    // los metodos de una misma clase se pueden llamar entre si
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        // ejemplo de llamar un metodo de la clase
        // para llamar este metodo se usa la palabra referencia de 'this'
        this.quienSoy();
        console.log(`${this.frase} dice: ${this.codigo}`);

        // tambien podemos crear metodos dentro de los metodos
        // quienSoy(); // como no lo referenciamos, llama a la función que se crea en el metodo
        // function quienSoy(){
        //    console.log('Hola Mundito...');
        // }
    }
}

const spiderman = new Persona("Peter Parker", "Spiderman", "Soy tu amigable vecino Spiderman");
const iroman = new Persona("Tony Stark", "Ironman", "Yo soy Iroman");
const cap = new Persona("Tony Stark", "Ironman", "Yo soy Iroman");
// console.log(spiderman);
// console.log(iroman);

// para q se ejecute un metodo se usa de la sgte manera
// clase.metodo(); si no lleva parentesis no se ejecutara
// spiderman.quienSoy();
spiderman.miFrase();

// se trabaja como una propiedad, y se usa =
spiderman.setComidaFavorita = "Pie de cereza de la tia May";
console.log(spiderman.getComidaFavorita);

// asignamos a la propiedad estatica el valor de 2
//Persona._conteo = 2;

console.log("Conteo estatico", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

//console.log(spiderman);

// iroman.quienSoy();  
// iroman.miFrase();

Persona.propiedadExterna = "Hola Mundo..."
console.log(Persona);
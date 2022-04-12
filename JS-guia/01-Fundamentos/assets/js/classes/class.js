// clases en JS
class Persona {

    // todas las clases en JS tienen activado el 'use strict' por defecto

    // definimos las propiedades => las variables a usar, si no se pasa información al momento de la inicialización
    // estos valores son "undefined", para este caso lo inicializamos con un valor ''
    nombre='';
    codigo='';
    frase='';

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
        quienSoy(); // como no lo referenciamos, llama a la función que se crea en el metodo
        function quienSoy(){
            console.log('Hola Mundito...');
        }
    }
}

const spiderman = new Persona("Peter Parker", "Spiderman", "Soy tu amigable vecino Spiderman");
const iroman = new Persona("Tony Stark", "Ironman", "Yo soy Iroman");
console.log(spiderman);
console.log(iroman);

// para q se ejecute un metodo se usa de la sgte manera
// clase.metodo(); si no lleva parentesis no se ejecutara
// spiderman.quienSoy();
spiderman.miFrase();
// iroman.quienSoy();  
iroman.miFrase();  
// Subclases en JS
class Persona {

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo+' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos, soy un método estático');
    }

    nombre='';
    codigo='';
    frase='';
    comida='';

    constructor(nombre='Sin nombre', codigo='Sin código', frase='Sin frase'){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.frase} dice: ${this.codigo}`);
    }
}

// definiendo una subclase con la palabra 'extends'
class Heroe extends Persona{

    // propiedad de la clase
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        // super() => hace referencia al constructor de la clase padre en este caso Persona
        // ahora, podemos solo 
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers'
    }

    // método de la clase Heroe
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        // si deseamos usar o llamar al método de la clase padre
        super.quienSoy(); // llamamos al metodo de la clase padre
    }
}

const spiderman = new Heroe("Peter Parker", "Spiderman", "Soy tu amigable vecino Spiderman");
console.log(spiderman);
spiderman.quienSoy();
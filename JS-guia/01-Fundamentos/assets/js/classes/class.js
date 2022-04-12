// clases en JS
class PersonaNatural {

    // definimos las propiedades => las variables a usar, si no se pasa información al momento de la inicialización
    // estos valores son "undefined", para este caso lo inicializamos con un valor ''
    nombre='';
    codigo='';
    frase='';

    // constructor => metodo q se ejecuta en el momento que se crea una instancia
    // en el constructor
    constructor(){
        console.log("Hola!");
    }
}

const spiderman = new PersonaNatural();
console.log(spiderman);
//

const juan = {
    nombre: 'juan',
    edad: 39,
    imprimir() {
      console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    },
  };

// función con la diferencia que se inicializa con una mayuscula (P), q indica que usaremos
// para instanciarla
function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');

    // this -> hace referencia al propio objeto, en este caso a Persona
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
      } 

}

// para indicar que es una instancia, se usa la palabra "new"
// q le indica a JS q se creara una nueva instancia
// proto -> es un molde con funciones y propiedades que hereda
const maria = new Persona('Maria', 19);
console.log(maria);
maria.imprimir()

const melissa = new Persona('Melissa', 39);
melissa.imprimir();
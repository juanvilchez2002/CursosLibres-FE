/*
import {obtenerChiste} from './js/http-provider';

// llamamos a la función de http-provider
/* obtenerChiste().then(resp => {
    console.log(resp);
})
obtenerChiste().then(console.log); */

//import { init } from "./js/chistes-page";

// init();

/* 
// obtener la lectura de todos los usuarios
import {obtenerUsuario} from './js/http-provider';
import {init} from './js/usuarios-page'

// obtenerUsuario();
init();
*/


/* 
// iniciando el CRUD
import * as CRUD from './js/crud-provider';


// leer usuario
CRUD.getUsuario(10).then(
    console.log
);

// crear usuario
CRUD.crearUsuario({
    name: 'Juan Vilchez',
    job: 'Actor Porno'
}).then(console.log)

// actualizad usuario
CRUD.updateUsuario(1, {
    name: 'Juan Vilchez',
    job: 'Actor Porno'
}).then(console.log)

// eliminar usuario
CRUD.borrarUsuario(1).then(console.log)

*/

import {init } from './js/archivos-page';

init();
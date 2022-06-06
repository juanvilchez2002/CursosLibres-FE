

// fetch() -> metodo propio de JS, devuelve una promesa

const jokerUrl = "https://api.chucknorris.io/jokes/random";

/*
fetch(jokerUrl).then(resp =>{
    // resp.json() -> devuelve una promesa
    resp.json().then(({id, value}) =>{ // desesctructuramos la data devuelta
        console.log(id); // imprimimos el id
        console.log(value); // imprimimos el value que contiene el chiste
    })
});

*/

// codigo simplificado
fetch(jokerUrl).then( resp => resp.json()).then(({id, value}) =>{ // desesctructuramos la data devuelta
    console.log(id); // imprimimos el id
    console.log(value); // imprimimos el value que contiene el chiste
})

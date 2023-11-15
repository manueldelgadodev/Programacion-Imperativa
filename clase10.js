//Integración de contenido:

//1) Crear un array llamado misMascotas
let misMascotas_ = [];

/*2) Dentro de este array crearemos un objeto literal para cada mascota. 
Cada objeto deberá tener:
nombre
raza
edad 
sonido
un método que nos retorne ese sonido 2 veces
Cuando esté listo, verificar en consola */

let misMascotas = [
    {
    nombre: "Firulais",
    raza: "Fox Terrier",
    edad: 4,
    sonido: "guau",
    retornarSonido: function() {
        /*for(let i=0; i<2; i++) {
            console.log(this.sonido);
        }*/
        return `${this.sonido} `+ ` ${this.sonido}`;
    }
    },
    {
    nombre: "Neron",
    raza: "Loro",
    edad: 8,
    sonido: "pio",
    retornarSonido: function() {
        /*for(let i=0; i<2; i++) {
            console.log(this.sonido);
        }*/
        return `${this.sonido}``${this.sonido}`;
    }
    },
    {
    nombre: "tomi",
    raza: "Gato Siamés",
    edad: 12,
    sonido: "miau",
    retornarSonido: function() {
        /*for(let i=0; i<2; i++) {
            console.log(this.sonido);
        }*/
        return `${this.sonido}``${this.sonido}`;
    }
    },
]
//console.log(misMascotas);
console.log(misMascotas[0].retornarSonido());
//console.log(misMascotas[1].retornarSonido());

// 3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.
function aumentarEdad(misMascotas) {
    for (let i=0; i<misMascotas.length; i++) {
        misMascotas[i].edad = misMascotas[i].edad + 1;
        //misMascotas[i].edad += 1;
    }
    return misMascotas;
};
//aumentarEdad(misMascotas);
//console.log(misMascotas[0].edad);
//console.log(misMascotas[1].edad);
//console.log(misMascotas[2].edad);

/* 4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad */
function aumentarEdad2 (misMascotas) {
    for (let i = 0; i < misMascotas.length; i++) {
        if (misMascotas[i].edad < 6) {
            //misMascotas[i].edad++;
            misMascotas[i].edad = misMascotas[i].edad + 1;
        } else if (misMascotas[i].edad >= 6 && misMascotas[i].edad <= 10){
            //misMascotas[i].edad += 2;
            misMascotas[i].edad = misMascotas[i].edad + 2;
        } else if (misMascotas[i].edad > 10) {
            //misMascotas[i].edad += misMascotas[i].edad/2;
            let mitad = misMascotas[i].edad / 2;
            misMascotas[i].edad = misMascotas[i].edad + mitad;
        }
    }
}
//aumentarEdad2(misMascotas);
//console.log(misMascotas[0].edad);
//console.log(misMascotas[1].edad);
//console.log(misMascotas[2].edad);

/*5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto
, que será secuencial y que empezará en 1. */
function agregarId (misMascotas) {
    for (let i = 0; i < misMascotas.length; i++) {
        misMascotas[i].id = i + 1;
        }
        return misMascotas;
    }
//agregarId(misMascotas);
//console.log(agregarId(misMascotas));

/* NUEVO ARREGLO
Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro 
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.
Ejemplo: nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

//const prompt = require("prompt-sync")({ sigint: true });
//let numero = parseInt(prompt("Ingrese numero: "));
function nuevoArreglo(numero) {
    let array = [];
    for (let i=0; i <= numero; i++) {
        array.push(i);
    }
    return array
};
//nuevoArreglo(numero);
console.log(nuevoArreglo(10));

/* LOOP DE PARES
Debés crear una función llamada loopDePares que reciba como parámetro un número
y haga un loop de 0 a 100 mostrando en la consola cada número del loop.
En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, 
mostrá en la consola “El número x es par”. */

function loopDePares(numero2) {
    for (let i = 0; i <= 100; i++) {
        let numero3 = i + numero2;
        if (numero3 % 2 === 0) {
            console.log(`El número ${numero3} es par`);
        } else {
            console.log(`El número ${numero3} NO es par`);
        }
    }
}
loopDePares(90);
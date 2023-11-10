//Primer actividad (continuación clase 3)
const prompt = require("prompt-sync")({ sigint: true });

//Punto 5
//Instrucción: Solicitar que el usuario ingrese su nombre utilizando el prompt. Imprimilo en consola mostrando la etiqueta “Nombre:” seguida del valor ingresado por ejemplo “Nombre: Juan”
let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);


//Punto 6
//Instrucción: Imprimir en consola la comparación de nuestra variable cantidad de vidas restante con el valor 0.
let vidasRestantes1 = prompt("Ingrese número de vidas: ");
if (vidasRestantes1 === "0") {
    console.log("La comparación vidasRestantes === '0' es verdadera")
    console.log("GAME OVER");
} else {
    ("La comparación vidasRestantes === '0' es falsa")
    console.log("El juego continúa")
}

//Punto 7
//Instrucción: Descontar una vida a esa variable y volver a imprimir la comparación, además del nuevo valor de la variable.
let vidasRestantes2 = prompt("Ingrese número de vidas: ");
if (vidasRestantes2 - 1 === 0) {
    console.log("La comparación vidasRestantes - 1 === 0 es verdadera")
    console.log("Resultado: " + (vidasRestantes2 - 1));
} else {
    console.log("La comparación vidasRestantes - 1 === 0 es falsa")
    console.log("Resultado: " + (vidasRestantes2 - 1));
}

/* Desafío extra:
Supongamos que estás acomodando tu casa y guardaste las remeras en el cajón
de los pantalones ¡Un horror! ¿Cómo haríamos para invertir?
Pensá con qué código podrías invertir el contenido de las variables de cajones */
let cajonDePantalones = "remeras";
let cajonDeRemeras = "pantalones";
console.log("Cajon Pantalones = " + cajonDePantalones);
console.log("Cajon Remeras = " + cajonDeRemeras);
console.log("----------------");
console.log("Cambiamos valores");
console.log("----------------");
let cambio = cajonDePantalones;
cajonDePantalones = cajonDeRemeras;
cajonDeRemeras = cambio;
console.log("Cajon Pantalones = " + cajonDePantalones);
console.log("Cajon Remeras = " + cajonDeRemeras);
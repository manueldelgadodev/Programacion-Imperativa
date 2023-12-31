//Ejercicio Bucles
//1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes
const prompt = require("prompt-sync")({ sigint: true });
let numIngresado = parseInt(prompt("Ingresar número: "));
let resultado = [];

function tenNumSiguientes(numIngresado) {
    for(let i=1; i<=10; i++){
        numIngresado ++;
        resultado.push(numIngresado);
        //console.log(numIngresado);
    }
    return resultado;
};
console.log(tenNumSiguientes(numIngresado));

//2. Imprimir los numeros entre el 5 y el 20, saltando de tres en tres.
for (let i= 5; i <= 20; i += 3) {
    console.log(i);
}

//3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
let sumatoria = 0;
for (let i=1; i<=100; i++) {
    sumatoria = sumatoria + i;
    //sumatoria += i
}
console.log("La sumatoria de los números entre 0 y 100 es: " + sumatoria);

//4. Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre 1 y ese número.
//const prompt = require("prompt-sync")({ sigint: true });
let numeroPositivo = parseInt(prompt("Ingrese un número entero positivo: "));

function calcularFactorial (numeroPositivo) {
    if (numeroPositivo < 0) {
        return undefined
    } else if (numeroPositivo === 0) {
        return 1; 
    } else {
        let factorial = 1;
        for (let i = 1; i <= numeroPositivo; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
const resultado2 = calcularFactorial(numeroPositivo);
console.log(`El factorial de ${numeroPositivo} es ${resultado2}`);

//5. Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.
const prompt1 = require("prompt-sync")({ sigint: true });
let valorIngresado = parseInt(prompt1("Por favor, introduzca el valor hasta el cual desea que alcance la serie de Fibonacci: "));

let primerNumero = 0;
let segundoNumero = 1;

function fibonacci (valorIngresado) {
    while (segundoNumero <= valorIngresado) {
        const resultado = primerNumero + segundoNumero
        if (resultado <= valorIngresado) {
            console.log(resultado)
        }
        primerNumero    = segundoNumero
        segundoNumero = resultado
    }
}

if (valorIngresado > 0) {
    fibonacci(valorIngresado);
} else if (valorIngresado === 0) {
    console.log("0 es el primer número de la seria de Fibonacci")
} else {
    console.log("El valor ingresado debe ser positivo")
}
const prompt = require("prompt-sync")({sigint: true});
// 1. Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
function convertir(num){
return num * 2.54;
}
let pulgadas = prompt ('Ingrese el numero en pulgadas: ');
console.log("En cm es: " + convertir(pulgadas));
console.log(".....................................................")

// 2. Crear una función que recibe un string y lo convierte en una URL.
function url(palabra){
return 'http://www.' + palabra + '.com';
}
let string = prompt ('Ingrese una palabra: ');
console.log("Su url es " + url(string));
console.log(".....................................................")

// 3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.
function admiracion(frase){
return '!' + frase + '!';
}
let todaFrase = prompt ('Ingrese una palabra: ');
console.log("Su frase es " + (admiracion(todaFrase)));
console.log(".....................................................")

// 4. Crear una función que calcule la edad de los perros considerando que:
// 1 año para nosotros son 7 de ellos
let yearPerro = edad => console.log("El perro tiene " + (edad * 7) + " años humanos");
let edad1 = prompt ('Ingrese la edad del perro: ');
console.log(yearPerro(edad1));
console.log(".....................................................")

// 5. Crear una función que calcule el valor de tu hora de trabajo,
// introduciendo tu sueldo mensual como parámetro. 
// PD: considerá que tu mes de trabajo tiene 40 horas.
function horaTrabajo(sueldo){
return sueldo / 40;
}
let sueldoNum = prompt ('Ingrese su sueldo: ');
console.log('Su hora de trabajo vale: ' + horaTrabajo(sueldoNum));
console.log(".....................................................")

// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos
// y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.
function calculadorIMC(altura,peso){
console.log('Su IMC es de: ' + Math.round(peso/(altura*altura)));
}
let altura1 = prompt ('Ingrese su altura en metros: ');
let peso1 = prompt ('Ingrese su peso en kg: ');
calculadorIMC(altura1, peso1);
console.log(".....................................................")

// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.
let palabraMin = prompt ('Ingrese una palabra en minuscula: ');
let transformarLetras = palabraMinuscula => palabraMinuscula.toUpperCase();
console.log("La palabra en mayuscula es " + transformarLetras(palabraMin));
console.log(".....................................................")

// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
let parametro1 = prompt ('Ingrese un parametro: ');
let tipoDato = parametro => console.log("El tipo de dato ingresado es: " +
typeof(parametro));
console.log(tipoDato(parametro1));
console.log(".....................................................")

// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
let radio = prompt ('Ingrese el radio del circulo: ');
let circunferencia = radioCirculo => console.log("La circunferencia es de: "
+ (2 * Math.PI * radioCirculo));
console.log(circunferencia(radio));
console.log(".....................................................")

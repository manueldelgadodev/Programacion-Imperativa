/*
Validar versión de NODE: node -v / nodejs -v
 Instalar Prompt Sync
-Seleccionar carpeta de proyecto y abrir nuevo terminal
-Escribir: npm i prompt-sync
-Verificar carpeta "node_modules" y archivos "package-lock.json","package.json"
-Escribir en archivo.js: const prompt = require("prompt-sync")({ sigint: true });
-TECLADO: "alt" + 96 = ``
*/

/*
let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);

parseInt: Convertir a tipo de dato númerico
parseFloat: Convertir a tipo de dato númerico
let temperatura = parseInt(prompt("Ingrese su temperatura: "))
if (temperatura > 37) {
    console.log("Prioridad alta")
} else {
    console.log("Prioridad baja")
}

let edad1 = parseInt(prompt("Cual es su edad?: "))
if (edad1 >= 21) {
    console.log("Puedes ingresar al bar ")
    let numeroSecreto = 10
    let loQueDiceElUsuario = parseInt(prompt("Indicame el número secreto"))
        if(numeroSecreto === loQueDiceElUsuario){
            console.log("Puedes ingresar a la fiesta secreta")
        } else {
            console.log("No puedes ingresar a la fiesta secreta")
        }
} else {
    console.log("No puedes ingresar al bar")
}

let edad2 = parseInt(prompt("Indicar tu edad: "));
if (edad2 < 18) {
    console.log("No puedes ingresar al bar")
} else if (edad2 >= 18 && edad2 < 21) {
    console.log("Puedes ingresar al bar pero no tomar alcohol")
} else {
    console.log("Puedes ingresar al bar y tomar alcohol")
}

let dia1 = parseInt(prompt("Ingrese un numero "));
switch (dia1) {
    case "1":
        console.log("Lunes");
        break;
    case "2":
        console.log("Martes");
        break;
    case "3":
        console.log("Miercoles");
        break;
    case "4":
        console.log("Jueves");
        break;
    case "5":
        console.log("Viernes");
        break;
    case "6":
        console.log("Sabado");
        break;
    case "7":
        console.log("Domingo");
        break;
    default:
        console.log("Ingrese un valor de 1 a 7");
}

Clase 4
function sumar(numeroUno, numeroDos) {
    let sumarResultado = numeroUno + numeroDos;
    //console.log(sumarResultado);
    return sumarResultado;
}
let numeroUno = 10;
let numeroDos = 15;
console.log(sumar(numeroUno, numeroDos));

//Declarar funcion dentro de una variable
let ejemplo = function() {
    let mensaje = "hola, soy una función expresada"
    return mensaje
}
console.log(ejemplo());

// Arrow functions: Cuando funciones no reciben parametros va "= () =>""
let dameCinco = () => [1,2,3,4,5];
let mostrarNombre = () => "Mi nombre es Hernán";
let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

const prompt = require("prompt-sync")({sigint: true});
function convertir(num){
return num * 2.54;
}
let pulgadas = prompt ('Ingrese el numero en pulgadas: ');
console.log("En cm es: " + convertir(pulgadas));
console.log(".....................................................")


Clase 5
let edad = parseInt(prompt("Ingresar edad: "));
let esPar = edad % 2 == 0;

if (edad >= 0 && edad < 18) {
    console.log("No puede pasar al bar")
    if (esPar == 0) {
        console.log("Tu edad es impar")
    }
} else if (edad >= 0 && edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol")
    if (esPar == 0) {
        console.log("Tu edad es impar")
    }
} else if (edad >= 21) {
    console.log("Puede pasar al bar y tomar alcohol")
    if (edad == 21) {
        console.log("Bienvenido, felicidades por ser mayor de edad");
    }
    if (esPar == 0) {
        console.log("Tu edad es impar")
    }
} else {
    console.log("Error, edad inválida. Por favor ingrese un número válido" )
}


Clase 8
EJERCICIO: Contamos con el array estudiantes, en cada índice, 
almacena un objeto con las propiedades: nombre, promedio y curso.
Queremos sacar(pop) a Alexis y sabemos que está último en ese array.
Utilizar un método de array para guardar los datos de Alexis en una nueva variable 
llamada alumnoEgresado.
let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android"
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack"
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS"
  }
];
let alumnoEgresado = estudiantes.pop();
console.log(alumnoEgresado);

EJERCICIO: Se inscribieron dos estudiantes nuevos y queremos agregarlos (push)
al final del array estudiantes.
Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.
Los valores de cada uno son:
let estudiantes = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
]
estudiantes.push(
    {
        nombre: 'Juan', promedio: 5, curso: 'iOS'
    }
);
estudiantes.push({nombre: 'Miguel', promedio: 2, curso:'Android'});

OBJETOS LITERALES:
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas) {
        this.energia=this.energia-(horas*5)
        this.experiencia=(horas*2)+this.experiencia
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
let horas = 5;
deportista.entrenarHoras(horas);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
*/


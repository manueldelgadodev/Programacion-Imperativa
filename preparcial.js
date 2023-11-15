/* 
Punto 1: Variables, Condicionales y Bucles
Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, 
y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.
*/
function encontrarMultiplos(numero, limite) {
    let multiplos = [];
    for(let i = 1; i <= limite; i++) {
        if(i % numero === 0) {
            multiplos.push(i);
        }
    }
    return multiplos
}
//console.log(encontrarMultiplos(5, 50));

/* 
Punto 2: Arreglos y Objetos
Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades 
como nombre, notas (arreglo de números) y aprobado (booleano).
Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando 
que aprueba si su promedio de notas es mayor o igual a 70.
*/
// Crear arreglo de objetos estudiantes
let estudiantes = [
    {
        nombre: "Juan",
        notas: [14, 16, 18, 20],
        aprobado: false,
        calcularPromedioNotas: function() {
            let sumNotas = 0;
            for(let i = 0; i < this.notas.length; i++) {
                sumNotas = sumNotas + this.notas[i];
                return sumNotas;
            }
        }
    },
    {
        nombre: "Tommy",
        notas: [10, 18, 11, 8],
        aprobado: false
    },
    {
        nombre: "Henry",
        notas: [5, 15, 20, 12],
        aprobado: false
    },
    {
        nombre: "Ricky",
        notas: [11, 10, 8, 17],
        aprobado: false
    }
]
console.log(estudiantes[0].calcularPromedioNotas());

// Función para calcular el promedio de notas


// Función para determinar si el estudiante aprobó


// Calcular si los estudiantes aprobaron o no


// Imprimir estado de aprobación de los estudiantes


/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los 
números pares en el arreglo.
*/


/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.
Respuesta y Explicación:
*/



/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.
Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.
*/


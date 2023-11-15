/*Punto 1: Variables, Condicionales y Bucles
Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, 
y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.*/
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

/*Punto 2: Arreglos y Objetos
Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades 
como nombre, notas (arreglo de números) y aprobado (booleano).
Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando 
que aprueba si su promedio de notas es mayor o igual a 70.*/

// Crear arreglo de objetos estudiantes
let estudiantes = [
    {
        nombre: "Juan",
        notas: [60, 80, 90, 100],
        aprobado: false,
        calcularPromedioNotas: function() {
            let sumNotas = 0;
            let promedio = 0;
            for(let i = 0; i < this.notas.length; i++) {
                sumNotas = sumNotas + this.notas[i];
            }
            promedio = sumNotas / (this.notas.length);
            if(promedio >= 70){
            this.aprobado = true;
            }
        }
    },
    {
        nombre: "Tommy",
        notas: [50, 70, 60, 80],
        aprobado: false,
        calcularPromedioNotas: function() {
            let sumNotas = 0;
            let promedio = 0;
            for(let i = 0; i < this.notas.length; i++) {
                sumNotas = sumNotas + this.notas[i];
            }
            promedio = sumNotas / (this.notas.length);
            if(promedio >= 70){
            this.aprobado = true;
            }
        }
    },
    {
        nombre: "Henry",
        notas: [100, 70, 75, 60],
        aprobado: false,
        calcularPromedioNotas: function() {
            let sumNotas = 0;
            let promedio = 0;
            for(let i = 0; i < this.notas.length; i++) {
                sumNotas = sumNotas + this.notas[i];
            }
            promedio = sumNotas / (this.notas.length);
            if(promedio >= 70){
            this.aprobado = true;
            }
        }
    },
    {
        nombre: "Ricky",
        notas: [80, 40, 50, 65],
        aprobado: false,
        calcularPromedioNotas: function() {
            let sumNotas = 0;
            let promedio = 0;
            for(let i = 0; i < this.notas.length; i++) {
                sumNotas = sumNotas + this.notas[i];
            }
            promedio = sumNotas / (this.notas.length);
            if(promedio >= 70){
            this.aprobado = true;
            }
        }
    }
]
/*console.log(estudiantes[0].calcularPromedioNotas());
console.log(estudiantes[1].calcularPromedioNotas());
console.log(estudiantes[2].calcularPromedioNotas());
console.log(estudiantes[3].calcularPromedioNotas());
console.log(estudiantes);*/

// Función para calcular el promedio de notas
// Función para determinar si el estudiante aprobó
// Calcular si los estudiantes aprobaron o no
// Imprimir estado de aprobación de los estudiantes

/*Punto 3: Arreglos y Bucles
7. Crea arreglo de números y utiliza un bucle while para calcular la suma de números pares 
en el arreglo.*/
let numeros = [8, 7, 9, 10];
let i = 0; sumaPares = 0;

while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
        sumaPares = sumaPares + numeros[i];
    }
    i++;
}
//console.log(sumaPares);

/*Punto 4: Bucles y Arreglos
10. Crea función que tome arreglo de números y devuelva producto de los números impares.
Respuesta y Explicación:*/
let numerosImpares = [4, 5, 6, 7];
let a = 0; producto = 1;

function productoImpar(numerosImpares) {
    while (a < numerosImpares.length) {
        if(numerosImpares[a] % 2 != 0) {
            producto = producto * numerosImpares[a];
        }
        a++;
    }
    return producto;
}
//console.log(productoImpar(numerosImpares));

/*Punto 5: Objetos y Condicionales
11. Crea objeto vehiculo con propiedades como marca, modelo, anio y precio.
Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. 
Si el año es anterior a 2010, el impuesto es del 10% del precio; 
si es posterior o igual a 2010, el impuesto es del 5%.*/

let vehiculo = [
    {
    marca: "Mc Laren",
    modelo: "Latam", 
    anio: 2008,
    precio: 1000,
    calcularImpuesto: function() {
        let impuesto = 0;
        if(this.anio < 2010) {
            impuesto = this.precio + (this.precio * 0.10);
        } else {
            impuesto = this.precio + (this.precio * 0.05);
        }
        return impuesto;
    }
    },
    {
        marca: "Porshe",
        modelo: "Latam", 
        anio: 2012,
        precio: 1000,
        calcularImpuesto: function() {
            let impuesto = 0;
            if(this.anio < 2010) {
                impuesto = this.precio + (this.precio * 0.10);
            } else {
                impuesto = this.precio + (this.precio * 0.05);
            }
            return impuesto;
        }
    },
    {
        marca: "Ferrari",
        modelo: "Latam", 
        anio: 2004,
        precio: 1000,
        calcularImpuesto: function() {
            let impuesto = 0;
            if(this.anio < 2010) {
                impuesto = this.precio + (this.precio * 0.10);
            } else {
                impuesto = this.precio + (this.precio * 0.05);
            }
            return impuesto;
        }
    }
]
console.log(vehiculo[0].calcularImpuesto());
console.log(vehiculo[1].calcularImpuesto());
console.log(vehiculo[2].calcularImpuesto());

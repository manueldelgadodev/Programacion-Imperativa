const prompt = require("prompt-sync")({sigint:true});

//let numero = parseInt(prompt("ingresa un numero: "));
let frase = "Breaking bad Rules!";
console.log(frase.slice(-10));

let textos = ["Hola", "Mundo", "En", "Javascript"];
let numeros = ["hola", 2, 3, 4];
console.log(textos[3]);
console.log("array original: ", textos);

for (let index = 0; index < textos.length; index++) {
    textos[index] = index;    
}
console.log("array modificado: ", textos);

textos.push("Hola");
console.log(textos);
textos.pop();
textos = ["Hola", "Mundo", "En", "Javascript"];
numeros = ["Hola", 2, 3, 4];

for(let i = 0; i < textos.length; i++){
    if(textos[i] == numeros[i]){
        console.log(textos[i]+ " es igual a " + numeros[i]);
    }else{
        console.log("los valores en el indice "+ i +" no iguales.");
    }
}

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
peliculas.forEach((e) => {
    console.log(e);
});

function aMayusculas(arr){
    for(let i = 0; i < arr.length; i++){
        let mayus = arr[i].toUpperCase();
        arr[i] = mayus;
    }
    return arr;
}
aMayusculas(peliculas);
console.log(peliculas);

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
function unirArray(arr1, arr2){
    arr2.forEach(element => {
        arr1.push(element);
    });
    return arr1;
}
console.log(peliculasAnimadas);

function delEndElement(array){
    return array.pop();
}
let elementoEliminado = delEndElement(peliculasAnimadas);
console.log("ultimo elemento eleiminado que es un video juego es: ", elementoEliminado);

unirArray(peliculas, peliculasAnimadas);
aMayusculas(peliculas);
console.log(peliculas);
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compareScores(array1, array2){
    for(let i = 0; i<array1.length; i++){
        if (array1[i] === array2[i]) {
            console.log(`La Califiacion de la pelicula ${peliculas[i]}, en Asia es: ${asiaScores[i]} y en Europa es: ${euroScores[i]}`);
            console.log("Ambas calificaciones son iguales");
        }else{
            console.log(`La Califiacion de la pelicula ${peliculas[i]}, en Asia es: ${asiaScores[i]} y en Europa es: ${euroScores[i]}`);
            console.log("Las calificaciones son diferentes");
        }
    }
}
compareScores(asiaScores, euroScores);
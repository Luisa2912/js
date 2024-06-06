let nota1 = parseInt(prompt("Ingrese la primera nota:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota:"));
let nota3 = parseInt(prompt("Ingrese la tercera nota:"));

let suma = nota1 + nota2 + nota3;

let producto = suma / 3;

if(promedio >= 4){
    console.log("El alumno está en estado 'regular'. Su promedio es:", promedio);
} else {
    console.log("El alumno está en estado 'reprobado'. Su promedio es:", promedio);
}


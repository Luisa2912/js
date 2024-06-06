let nota1 = parseInt(prompt("Ingrese la primera nota:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota:"));
let nota3 = parseInt(prompt("Ingrese la tercera nota:"));

let suma = nota1 + nota2 + nota3;

let promedio = suma / 3;

if (promedio >= 7) {
    console.log("¡Felicidades! El alumno ha sido promovido.");
} else {
    console.log("El alumno no ha sido promovido. Su promedio es:", promedio);
}





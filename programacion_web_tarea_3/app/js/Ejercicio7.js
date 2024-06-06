let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

if (numero1 > numero2) {
    let suma = numero1 + numero2;
    let diferencia = numero1 - numero2;
    console.log("La suma de los números es:", suma);
    console.log("La diferencia de los números es:", diferencia);
} else {
    let producto = numero1 * numero2;
    let division = numero1 / numero2;
    console.log("El producto de los números es:", producto);
    console.log("La división del primer número por el segundo es:", division);
}

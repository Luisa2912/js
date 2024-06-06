let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
let numero3 = parseInt(prompt("Ingrese el tercer número:"));

if (numero1 > numero2) {
    if (numero1 > numero3) {
        console.log("El mayor número es:", numero1);
    } else {
        console.log("El mayor número es:", numero3);
    }
} else if (numero2 > numero3) {
    console.log("El mayor número es:", numero2);
} else {
    console.log("El mayor número es:", numero3);
}



















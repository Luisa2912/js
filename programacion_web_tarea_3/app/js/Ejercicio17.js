function encontrarMenor(numero1, numero2, numero3) {
    let menor = numero1;  
    if (numero2 < menor) {
        menor = numero2;
}
    if (numero3 < menor) {
        menor = numero3;
}

return menor;
    }
    
    const numero1 = parseInt(prompt("Ingrese el primer número: "));
const numero2 = parseInt(prompt("Ingrese el segundo número: "));
const numero3 = parseInt(prompt("Ingrese el tercer número: "));

const menorEncontrado = encontrarMenor(numero1, numero2, numero3);
console.log(`El menor de los tres números es: ${menorEncontrado}`);








function mostrarRango(menor, mayor) {
    for (let numero = menor; numero <= mayor; numero++) {
        console.log(numero);
}
    }

    const menor = parseInt(prompt("Ingrese el número menor: "));
    const mayor = parseInt(prompt("Ingrese el número mayor: "));
    mostrarRango(menor, mayor);
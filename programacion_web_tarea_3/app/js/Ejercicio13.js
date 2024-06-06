function imprimirSerie(numeroInicial, numeroFinal, incremento) {
  if (isNaN(numeroInicial) || isNaN(numeroFinal) || isNaN(incremento)) {
    throw new Error("Los parámetros deben ser números válidos");
  }
  if (incremento === 0) {
    throw new Error("El incremento no puede ser 0");
  }
  let sentido = numeroFinal >= numeroInicial ? 1 : -1;
  for (let numero = numeroInicial; numeroFinal * sentido >= numero; numero += incremento) {
    console.log(numero);
  }
}

// Ejemplo de uso
imprimirSerie(1, 10, 2); // Imprime: 1 3 5 7 9
imprimirSerie(10, 1, -1); // Imprime: 10 9 8 7 6 5 4 3 2 1
imprimirSerie(2, 5, 0.5); // Imprime: 2 2.5 3 3.5 4 4.5 5



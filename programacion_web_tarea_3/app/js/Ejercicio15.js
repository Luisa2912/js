function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}
function clasificarTriangulo(lado1, lado2, lado3) {

  if (lado1 === lado2 && lado1 === lado3) {
    return "Equilátero";
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}
function procesarTriangulos() {

  let cantidadTriangulosMayor12 = 0;
  let cantidadEquilateros = 0;
  let cantidadIsosceles = 0;
  let cantidadEscalenos = 0;
  let tipoTrianguloMenorCantidad = null;
  let menorCantidad = Infinity;

  for (let i = 0; i < 4; i++) {
    let base = parseFloat(prompt(`Ingrese la base del triángulo ${i + 1}: `));
    let altura = parseFloat(prompt(`Ingrese la altura del triángulo ${i + 1}: `));

    let area = calcularAreaTriangulo(base, altura);
    let tipoTriangulo = clasificarTriangulo

    console.log(`Triángulo ${i + 1}:`);
    console.log(`Base: ${base}`);
    console.log(`Altura: ${altura}`);
    console.log(`Área: ${area.toFixed(2)}`);
    console.log(`Tipo: ${tipoTriangulo}`);
    if (area > 12) {
      cantidadTriangulosMayor12++;
    }
    if (tipoTriangulo === "Equilátero") {
      cantidadEquilateros++;
    } else if (tipoTriangulo === "Isósceles") {
      cantidadIsosceles++;
    } else {
      cantidadEscalenos++;
    }

    if (cantidadEscalenos < menorCantidad) {
      menorCantidad = cantidadEscalenos;
      tipoTrianguloMenorCantidad = "Escaleno";
    } else if (cantidadIsosceles < menorCantidad) {
      menorCantidad = cantidadIsosceles;
      tipoTrianguloMenorCantidad = "Isósceles";
    } else if (cantidadEquilateros < menorCantidad) {
      menorCantidad = cantidadEquilateros;
      tipoTrianguloMenorCantidad = "Equilátero";
    }
  }
  console.log("\nCantidad de triángulos con área mayor a 12:", cantidadTriangulosMayor12);
  console.log("Cantidad de triángulos equiláteros:", cantidadEquilateros);
  console.log("Cantidad de triángulos isósceles:", cantidadIsosceles);
  console.log("Cantidad de triángulos escalenos:", cantidadEscalenos);
  console.log(
    `Tipo de triángulo con menor cantidad: ${tipoTrianguloMenorCantidad}`
  );
  procesarTriangulos();

  function sumarUltimos5(numeros) {
    if (numeros.length < 5) {
      return null;
    }
    return numeros.slice(-5).reduce((suma, numero) => suma + numero, 0);
  }

  let numeros = [];
  for (let i = 0; i);

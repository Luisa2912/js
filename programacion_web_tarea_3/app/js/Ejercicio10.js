function hayUnMenorADiez(numero1, numero2, numero3) {
  return numero1 < 10 || numero2 < 10 || numero3 < 10;
}
const numero1 = parseInt(prompt("Ingrese el primer número: "));
const numero2 = parseInt(prompt("Ingrese el segundo número: "));
const numero3 = parseInt(prompt("Ingrese el tercer número: "));
if (hayUnMenorADiez(numero1, numero2, numero3)) {
  console.log("Alguno de los números es menor a diez.");
} else {
  console.log("Ningún número es menor a diez.");
}

function aproboExamen(puntajeTeorica, puntajePractica) {
  return puntajeTeorica >= 60 || puntajePractica >= 60;
}

const puntajeTeorica = parseInt(prompt("Ingrese el puntaje de la parte teórica: "));
const puntajePractica = parseInt(prompt("Ingrese el puntaje de la parte práctica: "));
if (aproboExamen(puntajeTeorica, puntajePractica)) {
  console.log("¡El estudiante aprobó el examen!");
} else {
  console.log("El estudiante no aprobó el examen.");
}















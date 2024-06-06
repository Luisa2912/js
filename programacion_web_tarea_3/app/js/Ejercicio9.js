function es.Navidad(dia, mes, año) {
return (dia === 25) && (mes === 12) && (año >= 2000);
}
const dia = parseInt(prompt("Ingrese el día: "));
const mes = parseInt(prompt("Ingrese el mes: "));
const año = parseInt(prompt("Ingrese el año: "));
if (esNavidad(dia, mes, año)) {
    console.log("¡La fecha ingresada corresponde a Navidad!");
  } else {
    console.log("La fecha ingresada no corresponde a Navidad.");
  }

  function sumarYMultiplicarIguales(valor1, valor2, valor3) {
    if (valor1 === valor2) {
        const suma = valor1 + valor2;
        const multiplicacion = suma * valor3;
        return `La suma del primero con el segundo es: ${suma}. La multiplicación del resultado anterior por el tercero es: ${multiplicacion}`;
    } else {
      return "Los valores ingresados no son todos iguales.";
    }
  }
  const valor1 = parseInt(prompt("Ingrese el primer valor: "));
  const valor2 = parseInt(prompt("Ingrese el segundo valor: "));
  const valor3 = parseInt(prompt("Ingrese el tercer valor: "));
  
  const resultado = sumarYMultiplicarIguales(valor1, valor2, valor3);
  console.log(resultado);

  function sonTodosMenoresADiez(numero1, numero2, numero3) {
    return (numero1 < 10) && (numero2 < 10) && (numero3 < 10);
  }
  const numero1 = parseInt(prompt("Ingrese el primer número: "));
  const numero2 = parseInt(prompt("Ingrese el segundo número: "));
  const numero3 = parseInt(prompt("Ingrese el tercer número: "));

  if (sonTodosMenoresADiez(numero1, numero2, numero3)) {
    console.log("Todos los números son menores a diez.");
  } else {
    console.log("No todos los números son menores a diez.");
  }

  function ubicarPuntoEnCuadrante(coordenadaX, coordenadaY) {
    if (coordenadaX > 0 && coordenadaY > 0) {
      return 1;
    } else if (coordenadaX < 0 && coordenadaY > 0)} 
function encontrarMayor(numero1, numero2, numero3) {
  """
   Función que encuentra el mayor de tres números enteros.

  Args:
    numero1: Primer número entero.
    numero2: Segundo número entero.
    numero3: Tercer número entero.

    Returns:
    El mayor de los tres números.
  """

if (numero1 >= numero2) && (numero1 >= numero3) {
    return numero1;
} else if (numero2 >= numero1) && (numero2 >= numero3) {
    return numero2;
  } else {
    return numero3;
}
  let numero1 = parseInt(prompt("Ingrese el primer número: "));
  let numero2 = parseInt(prompt("Ingrese el segundo número: "));
  let numero3 = parseInt(prompt("Ingrese el tercer número: "));

  let mayor = encontrarMayor(numero1, numero2, numero3);
  console.log("El mayor de los tres números es:", mayor);


function calcularPerimetroCuadrado(lado) {
  """
Función que calcula el perímetro de un cuadrado.

Args:
lado: Medida del lado del cuadrado (número flotante).

Returns:
El perímetro del cuadrado (número flotante).
  """
if (lado <= 0) {
    throw new Error("El lado del cuadrado debe ser un número positivo");
  }

  return 4 * lado;{

}

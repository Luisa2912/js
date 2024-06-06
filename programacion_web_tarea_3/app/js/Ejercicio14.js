let suma = 0;
while (true) {
    let valor = parseInt(prompt("Ingrese un valor (o 9999 para terminar): "));
  
    if (valor === 9999) {
      break;
    }
    suma += valor;
    console.log(`El valor acumulado es: ${suma}`);
  }
  if (suma === 0) {
    console.log("El valor acumulado final es cero.");
  } else if (suma > 0) {
    console.log("El valor acumulado final es mayor a cero.");
  } else {
    console.log("El valor acumulado final es menor a cero.");
  }

  const cuentas = {};
  while (true) {
    let numeroCuenta = parseInt(prompt("Ingrese el número de cuenta (o un valor negativo para terminar): "));
    if (numeroCuenta < 0) {
        break;
      }
      const nombreCliente = prompt("Ingrese el nombre del cliente: ");
      const saldoActual = parseFloat(prompt("Ingrese el saldo actual: "));
      cuentas[numeroCuenta] = {
        nombre: nombreCliente,
        saldo: saldoActual,
      };
      console.log("\nDatos de las cuentas:");
      for (const [numeroCuenta, cuenta] of Object.entries(cuentas)) {
        const estadoCuenta = cuenta["saldo"] > 0 ? "Acreedor" : cuenta["saldo"] < 0 ? "Deudor" : "Nulo";
        console.log(`Número de cuenta: ${numeroCuenta}`);
        console.log(`Nombre del cliente: ${cuenta["nombre"]}`);
        console.log(`Saldo actual: ${cuenta["saldo"]}`);
        console.log(`Estado de la cuenta: ${estadoCuenta}`);
        console.log();
      }
      let sumaAcreedores = 0;
      for (const cuenta of Object.values(cuentas)) {
        if (cuenta["saldo"] > 0) {
          sumaAcreedores += cuenta["saldo"];
        }
      }
    
      console.log("\nSuma total de saldos acreedores:", sumaAcreedores);
    }

    let totalPersonas = 0;
    let cantidadVarones = 0;
    let cantidadMujeres = 0;
    let cantidadVarones16a65 = 0;
    while (true) {
        let numeroDocumento = parseInt(prompt("Ingrese el número de documento (o 0 para terminar): "));
      
        if (numeroDocumento === 0) {
            break;
          }
          let edad = parseInt(prompt("Ingrese la edad: "));
          let sexo = prompt("Ingrese el sexo (femenino o masculino): ").toLowerCase();
          totalPersonas++;
          if (sexo === "masculino") {
            cantidadVarones++;
            if (edad >= 16 && edad <= 65) {
              cantidadVarones16a65++;
            }
        } else if (sexo === "femenino") {
            cantidadMujeres++;
          } else {
            console.log("Sexo no válido.");
          }
        }
        console.log("\nEstadísticas del censo:");
        console.log(`Cantidad total de personas censadas: ${totalPersonas}`);
        console.log(`Cantidad de varones: ${cantidadVarones}`);
        console.log(`Cantidad de mujeres: ${cantidadMujeres}`);
        console.log(`Cantidad de varones entre 16 y 65 años: ${cantidadVarones16a65}`);







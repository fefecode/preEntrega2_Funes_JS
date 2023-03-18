// VARIABLE CONTINUAR PARA REPETIR O FINALIZAR EL CICLO WHILE

let continuar = true;
while (continuar) {

  // ARRAY CON DISTINTOS TIPOS DE CAMBIO 

  const monedas = [
    { nombre: "dolares estadounidenses", codigo: "USD"},
    { nombre: "euros", codigo: "EUR"},
    { nombre: "yenes japoneses", codigo: "JPY"},
    { nombre: "pesos argentinos", codigo: "ARS"},
    { nombre: "libras esterlinas", codigo: "GBP"}
  ]

  // VARIABLE QUE ALMACENA EL TIPO DE CAMBIO ELEGIDO / SWITCH DE ELECCIÓN

  let tipoCambio = prompt('Elige el tipo de cambio que vas a usar para el plazo fijo. \n USD / EUR / JPY / ARS / GBP');
  while (tipoCambio !== 'usd' && tipoCambio !== 'eur' && tipoCambio !== 'jpy' && tipoCambio !== 'ars' && tipoCambio !== 'gbp') {
    alert('No es posible reconocer ese tipo de cambio, intentalo de nuevo.');
    tipoCambio = prompt('Elige el tipo de cambio que vas a usar para el plazo fijo. \n USD / EUR / JPY / ARS / GBP').toLowerCase();
  }

  switch (tipoCambio.toLowerCase()) {
      case 'usd':
          alert('Elegiste operar con ' + monedas[0].nombre + '.');
          break;
      case 'eur':
          alert('Elegiste operar con ' + monedas[1].nombre + '.');
          break;
      case 'jpy':
          alert('Elegiste operar con ' + monedas[2].nombre + '.');
          break;
      case 'ars':
          alert('Elegiste operar con ' + monedas[3].nombre + '.');
          break;
      case 'gbp':
          alert('Elegiste operar con ' + monedas[4].nombre + '.');
          break;
  }
  
  // VARIABLES DE MONTO, MESES E INTERES TOTAL.

  let monto = parseInt(prompt("Ingresar el monto a invertir."));
  while (monto < 1000 || isNaN(monto)) {
    alert(
      "El monto elegido es inválido, prueba con valor numericos mayores a 1000."
    );
    monto = parseInt(prompt("Ingresar el monto a invertir."));
  }
  let meses = parseInt(
    prompt("Ingresar la cantidad de meses a invertir, entre 6 y 36.")
  );
  while (meses < 6 || meses > 36 || isNaN(meses)) {
    alert(
      "La cantidad de meses elegida es inválida, prueba con valores numericos entre 6 y 36."
    );
    meses = parseInt(
      prompt("Ingresar la cantidad de meses a invertir, entre 6 y 36.")
    );
  }
  let interesTotal = parseInt(prompt("Ingresa la tasa total que desees."));
  while (interesTotal > 100 || interesTotal <= 0 || isNaN(interesTotal)) {
    alert(
      "La cifra elegida es inválida, prueba valores numericos entre 1 y 100."
    );
    interesTotal = parseInt(prompt("Ingresa la tasa total que desees."));
  }

  // CALCULO DE INTERES MENSUAL
  function interesMensual() {
    return interesTotal / meses / 100;
  }
  let interes = interesMensual();

  // INTERES APLICADO MENSUALMENTE

  alert("El interés total es del " + interesTotal + "%.");
  for (let i = 0; i <= meses; i++) {
    let montoAcumulado = i * interes * monto + monto;
    console.log(
      "Su capital en el mes número " + i + " es de " + montoAcumulado + "."
    );
  }

  // CAPITAL TOTAL EXPRESADO EN EL TIPO DE CAMBIO ELEGIDO

  switch (tipoCambio.toLowerCase()) {
      case 'usd':
          alert('Su capital total al final del plazo fijo es de ' + (meses * interes * monto + monto) + ' ' + monedas[0].nombre + '. \n Puedes ver el valor de cada mes en la consola.');
          break;
      case 'eur':
          alert('Su capital total al final del plazo fijo es de ' + (meses * interes * monto + monto) + ' ' + monedas[1].nombre + '. \n Puedes ver el valor de cada mes en la consola.');
          break;
      case 'jpy':
          alert('Su capital total al final del plazo fijo es de ' + (meses * interes * monto + monto) + ' ' + monedas[2].nombre + '. \n Puedes ver el valor de cada mes en la consola.');
          break;
      case 'ars':
          alert('Su capital total al final del plazo fijo es de ' + (meses * interes * monto + monto) + ' ' + monedas[3].nombre + '. \n Puedes ver el valor de cada mes en la consola.');
          break
      case 'gbp':
          alert('Su capital total al final del plazo fijo es de ' + (meses * interes * monto + monto) + ' ' + monedas[4].nombre + '. \n Puedes ver el valor de cada mes en la consola.');
          break;
  }


  // PREGUNTA PARA REPETIR O FINALIZAR EL CICLO

  let respuesta = prompt(
    "¿Desea realizar otro cálculo de plazo fijo? (S/N)"
  );
  if (respuesta.toLowerCase() !== "s") {
    continuar = false;
  }
}
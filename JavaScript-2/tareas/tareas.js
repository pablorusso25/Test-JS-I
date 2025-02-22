// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if ( x > y) {
    // retorno el mayor que es x
    return x;
  } 
  else if (x < y) {
    // retorno el mayor que es 
    return y;
  } 
  else if (x === y) {
    // si son iguales retorno cualquiera de los dos
    return y;
  }
  else {
    // siempre debo devolver algo ?
    return null;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if ( edad >= 18 ) {
    // retorno el mayor que es x
    return "Allowed";
  } 
  else {
    // retorno el mayor que es x
    return "Not allowed";
  }
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch (status) {
    case 1:
      return "Online";
    break; 
    case 2:
      return "Away";
    break;  
    default:
      return "Offline";
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
    break; 
    case "mandarin":
      return "Ni Hao!";
    break;  
    case "ingles":
      return "Hello!";
    break;  
    default:
      return "Hola!";
  }  
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Pista: Puedes usar el statement Switch.
	switch (color) {
    case "blue":
		return "This is blue";
    break; 
    case "red":
			return "This is red";
    break;  
    case "green":
			return "This is green";
    break;  
    case "orange":
			return "This is orange";
    break;  
    default:
			return "Color not found";
  }  
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( numero === 10 || numero === 5 ){
    return true;
  }
  else {
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( numero > 20 && numero < 50 ){
    return true;
  }
  else {
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  let valor = Math.floor(numero);

  if (valor === numero) {
    return true;
  }
  else{
    return false;
  }

}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let result3 = ( numero % 3 );
  let result5 = ( numero % 5 );

  // vlidar si el numero es divisible por 3 y por 5
  if ( result3 === 0 && result5 === 0 ) {
    return "fizzbuzz";
  } 
  else if ( result3 === 0 ) {
    return "fizz";
  }  
  else if ( result5 === 0 ) {
    return "buzz";
  }
  else
  {
    return numero;
  }

}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  
  if ((num1 < 0) || (num2 < 0) || (num3 < 0)){
    // Alguno de los numeros es negativos
    return "Hay negativos";
  }

  if ((num1 === 0) || (num2 === 0) || (num3 === 0)){
    // Alguno de los numeros es negativos
    return "Error";
  }

  if ((num1 > 0) && (num1 > num2) && (num1 > num3)){
    // num "1" es positivo, ademas es mayor que "2" y mayor que "3"  
    return "Número 1 es mayor y positivo"; 
  }

  if ((num1 < num3) && (num2 < num3)){
    // si numero 3 es mayor que num1 y mayor num3
    let numero3 = num3;
    numero3++;
    return numero3;
  }

  // si no se cumplio algunas de las condiciones anteriores retorno FALSE
  return false;
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor){
    return "Soy verdadero";
  }
  else {
    return "Soy falso";
  }
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  // saber si el numero tiene 3 digitos
  let cant = numero.toString().length;

  if (cant === 3){
    return true;
  }
  else{
    return false;
  }
}

// ---------- Puntos extra ----------

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  
  // 0 y 1 NO son considerados números primos
  if (numero === 1 || numero === 0){
    return false;
  }

  // si no es NI 0 ni 1 calculamos que sea primero
  for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++){
    if(numero % i === 0) return false;
  }

  // retornar true si cumple ...
  return true;
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  
  let arreglo = new Array();  // definir el arreglo

  // calcular los multiplos del 60
  for (let i = 0; i <= 10; i++) {
    let valor = i * 6;
    arreglo.push(valor); // agrego el resultado al arreglo
  }

  return arreglo;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0;

  do {
    i = i + 1;
    // incremento el numero de 5 en 5
    numero = numero + 5;
  } while (i < 8);

  // devolver el resultado
  return numero;

}

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
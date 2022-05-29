// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  // elemento de la posicion 0
  return array[0]; 
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  // obtener la logitud
  let tam = array.length; 
  // devolver el ultimo elemento
  tam--;
  return array[tam]; 
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;  
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let longitud = array.length;  

  for (let i = 0; i < longitud; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena = palabras.join(' ');
  return cadena;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // busco el arreglo con el metodo FIND
  // El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
  let valor = array.find(element => element === elemento);
  
  // si no es NULL ni indefinido ...
  if (valor != null){
    // encontro el elemento, retorno true
    return true;
  }
  else{
    return false;
  }
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // IMPORTANTE, ES UN ARREGLO O UNA MATRIZ ????
  let suma = 0;
  for (let x = 0 ; x < numeros.length ; x++) {
    suma = suma + numeros[x];
  }
  return suma;  
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // IMPORTANTE, ES UN ARREGLO O UNA MATRIZ ????
  let suma = 0;
  let promedio = 0;

  for (let x = 0 ; x < resultadosTest.length ; x++) {
    suma = suma + resultadosTest[x];
  }

  promedio = suma / resultadosTest.length; 
  return promedio;  
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // IMPORTANTE, ES UN ARREGLO O UNA MATRIZ ????
  let mayor = Math.max(...numeros);
  return mayor;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let cant = 0;

  for (let i = 0 ; i < arreglo.length ; i++) {
    if (arreglo[i] > 19){
      cant++;
    }
  }
  return cant;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  let dias = ["Es fin de semana", "Es dia Laboral", "Es dia Laboral", "Es dia Laboral","Es dia Laboral","Es dia Laboral","Es fin de semana"];
  let indice = 0;
  indice = numeroDeDia;
  indice--;
  return dias[indice];
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var cadena = n.toString();
  var primero = cadena.substr(0,1); // partiendo de la posicion cero todo el primero
  if (primero === "9"){
    return true;
  }
  else{
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  let valor = arreglo[0]; // primer elemento

  for(let i = 1 ; i < arreglo.length ; i++){
    if(arreglo[i] !== valor) return false; 
  }
  return true;
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = [];
  let ene = array.find(element => element === "Enero");
  let mar = array.find(element => element === "Marzo");
  let nov = array.find(element => element === "Noviembre");

  if (ene == null || mar == null || nov == null){
    return "No se encontraron los meses pedidos";
  }

  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      // agrego el elemento al arreglo
      meses.push(array[i]);
    }
  }

  return meses;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let numeros = [];

  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] > 100 ){
      // agrego el elemento al arreglo
      numeros.push(array[i]);
    }
  }
  return numeros;
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};

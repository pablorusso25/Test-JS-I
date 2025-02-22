// En los próximos ejercicios, deberás completar las funciones con tu resolución.
// Todo tu código irá dentro de las llaves de la función.
// Recuerda que una función siempre devuelve un valor. (return)

// Nota: No modificar los nombres de las funciones y no utilizar console.log
// Caso contrario, no correrán los test!

// En estas primeras consignas, reemplaza `null` por la respuesta correcta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "soy pablo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1520;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// ----------------------------------

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let resultado;
  resultado = 0;
  resultado = x + y;
  return resultado;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let resultado;
  resultado = 0;
  resultado = x - y;
  return resultado;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let resultado;
  resultado = 0;
  resultado = x * y;
  return resultado;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let resultado;
  resultado = 0;
  resultado = x / y;
  return resultado;  
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  return (x === y);
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return resultado = ( str1.length === str2.length );
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num < 90 ) {
    return true;
  } else {
    return false;
  }
}
function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num > 50 ) {
    return true;
  } else {
    return false;
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resto;
  resto = 0;
  resto = x % y;
  return resto;  
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  let resto;
  resto = 0;
  resto = num % 2;
  return (resto === 0);   
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  let resto;
  resto = 0;
  resto = num % 2;
  return (resto === 1); 
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let resultado;
  resultado = 0;
  resultado = ( num ** 2 );
  return resultado;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let resultado;
  resultado = 0;
  resultado = ( num ** 3 );
  return resultado;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let resultado;
  resultado = 0;
  resultado = ( num ** exponent );
  return resultado;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let resultado;
  resultado = Math.round(num);
  return resultado;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let resultado;
  resultado = Math.ceil(num);
  return resultado;  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if ( numero > 0 ) {
    return "Es positivo";
  } else if ( numero < 0 ) {
    return "Es negativo";
  } else if (numero === 0 ) {
    return false;
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let cadena = '';
  return cadena.concat(str,"!"); 
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Cristian" -> "Soy Cristian"
  // Tu código:
  let cadena = '';
  return cadena.concat(nombre," ",apellido); 
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Nahuel" -> "Hola Nahuel!"
  // Tu código:
  let cadena = '';
  return cadena.concat("Hola"," ",nombre,"!"); 
}

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let contizacion = 0;
  contizacion = (euro * 1.20);
  return contizacion;
}

// ---------- Puntos extra ----------

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let area = 0;
  // calculo el area de un rectangulo
  area = alto * ancho;
  return area;
}

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  perimetro = 0;
  // formula del perimetro de un cuadrado es igual a perimetro * 4
  perimetro = lado * 4; 
  return perimetro;
}

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let area = 0;
  area = base * altura;
  // dividimos el resultado por 2
  area = area / 2;
  return area;
}

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  if ( letra.length !== 1 )
  {
    // tiene mas de un caracter
    return "Dato incorrecto";
  }
  else 
  {
    if ( letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" )
    {
      // es una vocal 
      return "Es vocal";
    }
    else
    {
      // algo se tiene que devolver, se devuelve NULL
      return null;
    }
  }
}

// --------------------------------
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};

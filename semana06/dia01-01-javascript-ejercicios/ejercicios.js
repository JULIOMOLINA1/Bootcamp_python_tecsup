// TODO: Resolver los siguientes ejercicios para el siguiente jueves y compartir conmigo su repositorio con las soluciones.

// Ejercicio 1: Contar vocales
// Descripción: Retorna cuántas vocales contiene un texto dado, sin importar mayúsculas.

function contarVocales(texto) {
  const resultado = texto.toLowerCase().split('').filter(
    function (letra) {
      return 'aeiouáéíóú'.includes(letra)
    }
  )

  return resultado.length
}

console.log('Ejercicio 1: Contar vocales')
console.log(contarVocales('Hola Mundo')) //  → 4
console.log(contarVocales('AEIOU')) //  → 5
console.log(contarVocales('xyz')) // → 0
console.log(contarVocales('Programación')) //  → 5


// Ejercicio 2: Eliminar duplicados
// Descripción: Elimina elementos duplicados de un array manteniendo el orden.

function eliminarDuplicados(arr = []) {
  // VERSION 1
  const resultado = []

  for (const elemento of arr) {
    if (!resultado.includes(elemento)) {
      resultado.push(elemento)
    }
  }

  return resultado;

  // VERSION 2
  // return [...new Set(arr)]
}

console.log('Ejercicio 2: Eliminar duplicados')
console.log(eliminarDuplicados([1, 2, 2, 3])) // → [1,2,3]
console.log(eliminarDuplicados(['a', 'b', 'a'])) // → ['a','b']
console.log(eliminarDuplicados([])) // → []
console.log(eliminarDuplicados([true, false, true])) // → [true, false]


// Ejercicio 3: Invertir texto
// Descripción: Invierte una cadena de texto.

function invertirTexto(texto = '') {
  return texto.split('').reverse().join('');
}

console.log('Ejercicio 3: Invertir texto')
console.log(invertirTexto('hola')) // → 'aloh'
console.log(invertirTexto('123')) // → '321'
console.log(invertirTexto('')) // → ''


// Ejercicio 4: Sumar array
// Descripción: Retorna la suma total de todos los números en un array.

function sumarArray(arr = []) {
  let suma = 0
  for (const elemento of arr) {
    suma += elemento
  }
  return suma;
}

console.log('Ejercicio 4: Sumar array')
console.log(sumarArray([1, 2, 3])) // → 6
console.log(sumarArray([])) // → 0
console.log(sumarArray([-1, 1])) // → 0


// Ejercicio 5: Celsius a fahrenheit
// Descripción: Convierte grados Celsius a Fahrenheit.

function celsiusAFahrenheit(c = 0) {
  return c * 9 / 5 + 32;
}

console.log('Ejercicio 5: Celsius a fahrenheit')
console.log(celsiusAFahrenheit(100)) // → 212
console.log(celsiusAFahrenheit(-40)) // → -40
console.log(celsiusAFahrenheit(0)) // → 32


// Ejercicio 6: Es palindromo
// Descripción: Retorna true si un texto es un palíndromo (ignora espacios y mayúsculas).

function esPalindromo(texto = '') {
  const textClean = texto.toLowerCase().replace(/ /g, "");
  const reverseText = [...textClean].reverse().join('');
  return textClean == reverseText;
}

console.log('Ejercicio 6: Es palindromo')
console.log(esPalindromo('Hola')) // → false
console.log(esPalindromo('A man a plan a canal Panama')) // → true
console.log(esPalindromo('Anita lava la tina')) // → true


// Ejercicio 7: Elementos en Común
// Descripción: Retorna un array con los elementos en común entre dos arrays (sin repetir).

function elementosEnComun(arr1 = [], arr2 = []) {
  const newArray = []
  for (const elemento of arr1) {
    if (arr2.includes(elemento)) {
      newArray.push(elemento)
    }
  }
  return newArray;
}

console.log('Ejercicio 7: Elementos en Común')
console.log(elementosEnComun(['a', 'b'], ['b', 'c'])) // → ['b']
console.log(elementosEnComun([], [1, 2])) // → []
console.log(elementosEnComun([1, 2, 3], [2, 3, 4])) // → [2,3]
console.log(elementosEnComun([true], [true, false])) // → [true]


// Ejercicio 8: Mayor número
// Descripción: Retorna el número más grande de un array de números.

function mayorNumero(arr = []) {
  const finalNumber = arr.sort((a, b) => a - b)

  return finalNumber[arr.length - 1];
}

console.log('Ejercicio 8: Mayor número')
console.log(mayorNumero([-1, -5, -3])) // → -1
console.log(mayorNumero([42])) // → 42
console.log(mayorNumero([1, 5, 3])) // → 5


// Ejercicio 9: Repetir texto
// Descripción: Repite un texto N veces separados por espacio.

function repetirTexto(texto = '', veces = 1) {
  const newArray1 = []
  for (i = 0; i < veces; i++) {
    newArray1.push(texto);
  }
  return newArray1.join(' ');
}

console.log('Ejercicio 9: Repetir texto')
console.log(repetirTexto('JS', 1)) // → 'JS'
console.log(repetirTexto('Bye', 0)) // → ''
console.log(repetirTexto('Hola', 3)) // → 'Hola Hola Hola'


// Ejercicio 10: Capitalizar
// Descripción: Convierte la primera letra de un texto en mayúscula.

function capitalizar(texto = '') {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

console.log('Ejercicio 10: Capitalizar')
console.log(capitalizar('javaScript')) // → 'JavaScript'
console.log(capitalizar('')) // → ''
console.log(capitalizar('hola')) // → 'Hola'


// Ejercicio 11: Filtrar pares
// Descripción: Retorna un nuevo array con solo los números pares del array original.

function filtrarPares(arr = []) {
  const arrayNumbers = []
  for (const elemento of arr) {
    if (elemento % 2 == 0) {
      arrayNumbers.push(elemento);
    }
  }
  return arrayNumbers;
}

console.log('Ejercicio 11: Filtrar pares')
console.log(filtrarPares([5, 7, 9])) // → []
console.log(filtrarPares([0, 10, 15])) // → [0, 10]
console.log(filtrarPares([1, 2, 3, 4])) // → [2,4]


// Ejercicio 12: Contar palabras
// Descripción: Cuenta cuántas palabras tiene una frase (separadas por espacios).

function contarPalabras(frase = '') {
  const newWord = frase.split(' ');
  const noEmpties = newWord.filter(f => f != '');
  return noEmpties.length;
}

console.log('Ejercicio 12: Contar palabras')
console.log(contarPalabras('')) // → 0
console.log(contarPalabras(' Uno dos tres ')) // → 3
console.log(contarPalabras('Hola mundo JS')) // → 3


// Ejercicio 13: Reemplazar palabra
// Descripción: Reemplaza una palabra específica por otra dentro de una frase.

function reemplazarPalabra(frase = '', buscar = '', reemplazar = '') {
  const newWord2 = frase.replace(buscar, reemplazar);
  return newWord2;
}

console.log('Ejercicio 13: Reemplazar palabra')
console.log(reemplazarPalabra('Hola mundo', 'mundo', 'JS')) // → 'Hola JS'
console.log(reemplazarPalabra('La casa es blanca', 'blanca', 'roja')) // → 'La casa es roja'
console.log(reemplazarPalabra('Me gusta el café', 'café', 'té')) // → 'Me gusta el té'


// Ejercicio 14: Limpiar array
// Descripción: Elimina todos los valores falsy de un array.

function limpiarArray(arr = []) {
  return arr.filter(Boolean);
}

console.log('Ejercicio 14: Limpiar array')
console.log(limpiarArray([null, undefined, NaN, 4])) // → [4]
console.log(limpiarArray(['a', '', 'b'])) // → ['a', 'b']  
console.log(limpiarArray([0, 1, false, 2, '', 3])) // → [1, 2, 3]


// Ejercicio 15: Generar rango
// Descripción: Genera un array del 1 al número dado (inclusive).

function generarRango(n = 0) {
  const formedArray = []
  for (let i = 1; i <= n; i++) {
    formedArray.push(i);
  }
  return formedArray;
}

console.log('Ejercicio 15: Generar rango')
console.log(generarRango(1)) // → [1]
console.log(generarRango(0)) // → []
console.log(generarRango(3)) // → [1, 2, 3]


// Ejercicio 16: Caracter frecuente
// Descripción: Retorna el carácter que más veces aparece en un texto (ignora espacios).

function caracterFrecuente(texto = '') {
  const wordNew = texto.toLowerCase().split('').filter(f => f != ' ');
  let maxLetter = '';
  let maximoContador = 0;
  for (let i = 0; i < wordNew.length; i++) {
    let contador = 0
    for (let j = 0; j < wordNew.length; j++) {
      if (wordNew[i] === wordNew[j]) {
        contador++
      }
    }
    if (contador>maximoContador) {
      maximoContador = contador;
      maxLetter = wordNew[i]
    }
  }
  return maxLetter;
}

console.log('Ejercicio 16: Caracter frecuente')
console.log(caracterFrecuente('xyz xyz')) // → 'x'
console.log(caracterFrecuente('aa bb cc dd')) // → 'a'
console.log(caracterFrecuente('aabbbc')) // → 'b'


// Ejercicio 17: Contar ocurrencias
// Descripción: Cuenta cuántas veces aparece cada palabra en una frase y devuelve un objeto.

function contarOcurrencias(frase = '') {
  let wordsCounter = {}
  const palabraArray = frase.toLowerCase().split(' ').filter(f => f != '')
  for(let i=0; i<palabraArray.length; i++){
    let contador=0;
    for(let j=0; j<palabraArray.length; j++){
      if(palabraArray[i]===palabraArray[j]){
        contador++
      }
    }
    wordsCounter[palabraArray[i]]=contador;
  }
  return wordsCounter;
}

console.log('Ejercicio 17: Contar ocurrencias')
console.log(contarOcurrencias('a b a b c')) // → { a: 2, b: 2, c: 1 }
console.log(contarOcurrencias('')) // → {}
console.log(contarOcurrencias('hola hola mundo')) // → { hola: 2, mundo: 1 }


// Ejercicio 18: Obtener longitudes
// Descripción: Retorna un array con las longitudes de cada palabra en un texto.

function obtenerLongitudes(texto = '') {
  let conteoWords = []
  const textCortado= texto.toLowerCase().split(' ').filter(f => f!= '');
  for(let i=0; i<textCortado.length; i++){
    const cutWord = textCortado[i].split('')
    conteoWords.push(cutWord.length)
  }
  return conteoWords;
}

console.log('Ejercicio 18: Obtener longitudes')
console.log(obtenerLongitudes('Hola mundo JS')) // → [4, 5, 2]
console.log(obtenerLongitudes('a bc def')) // → [1, 2, 3]
console.log(obtenerLongitudes('')) // → []


// Ejercicio 19: Promedio array
// Descripción: Calcula el promedio de un array de números.

function promedioArray(arr = []) {
  if(arr.length===0) return 0;
  let sumaNumbers = 0;
  for(const elemento of arr){
    sumaNumbers+=elemento
  }
  let promedio = sumaNumbers/arr.length;
  return promedio;
}

console.log('Ejercicio 19: Promedio array')
console.log(promedioArray([2, 4, 6, 8])) // → 5
console.log(promedioArray([10])) // → 10
console.log(promedioArray([])) // → 0


// Ejercicio 20: Texto a lista
// Descripción: Convierte una cadena separada por comas en un array limpio y sin espacios extra.

function textoALista(texto = '') {
  const nuevoArray = texto.split(',').map(f=>f.trim()).filter(f=>f!='')
  return nuevoArray;
}

console.log('Ejercicio 20: Texto a lista')
console.log(textoALista(' manzana, pera , uva')) // → ['manzana', 'pera', 'uva']
console.log(textoALista('a,b,c')) // → ['a', 'b', 'c']
console.log(textoALista('')) // → []



// Ejemplo de rescursividad

function foo(i) {
  if (i < 0) return;

  console.log("inicio:" + i);

  foo(i - 1);

  console.log("fin:" + i);
}

foo(3);
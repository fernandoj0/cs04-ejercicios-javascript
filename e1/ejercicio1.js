/*
 *Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
 
 */

let arr = ["This", "is", "a", "sentence."];

/**
 * Add spaces between two elements of string type in an array
 * @param {Array} array 
 * @returns {Array} newarr
 */
function addSpacesBetweenWords( array ) {
  // con slice copiamos el arreglo original para trabajar con este nuevo arreglo y no modificar el original
  const newarr = array.slice();
  // iteramos sobre el nuevo arreglo, comenzando en el indice 1 del arreglo pues ahi es donde iria el primer espacio (en caso 
  // de que hubiera dos o mas palabras) y llegamos hasta el doble de las palabras menos 1, esto porque el numero de espacios 
  // que se agregan al arreglo es solo una unidad menos que la cantidad de las palabras que originalmente hay. Por ejemplo, si 
  // hay tres palabaras, solo se necesitan dos espacios entre ellas; si hay cuatro palabras solo se necesitan tres espacios 
  // entre ellas. Por eso i debe llegar hasta el doble de la longitud original del arreglo menos. El signo < porque sabemos 
  // que los arreglos comienzan desde cero, entonces si hay tres palabras y se necesitan dos espacios, el arreglo tiene una 
  // longitud de cinco elementos pero como comienza desde cero, entonces a lo mucho que debe iterar es cuatro.
  for (let i = 1; i < array.length+(array.length-1) ; i++){ 
    // los espacios se agregan en las posiciones impares del arreglo (1,3,5, ...). Por ello, cuando i no es divisible de manera exacta entre 2,
    if( i%2 !== 0) {
      // agregamos un espacio " ", en la posicion i y no eliminamos ningun otro elemento del arreglo (0).
      newarr.splice( i, 0, " ");
    }    
  }
  return newarr;
}

// creamos un arreglo que contenga los espacios entre las palabras
const arrWithSpaces = addSpacesBetweenWords( arr );

/**
 * Convert an array with string elements and a space between them in a string to display it 
 * 
 * @param {Array} array 
 * @returns {string} sencente_with_spaces
 */
function convertArrayToString(array) {
  let sentence_without_spaces = "";
  for (let i = 0; i < array.length; i+=1){
    sentence_without_spaces = sentence_without_spaces + array[i];
  }
  const sentence_with_spaces = sentence_without_spaces;
  return `${sentence_with_spaces}`
}


console.log(convertArrayToString(arrWithSpaces));



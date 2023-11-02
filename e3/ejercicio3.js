/*
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. 
Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

function getSumAndMultiplicationArray (arr) {
    let suma = 0;
    let producto = 1;
    for ( let i = 0; i < arr.length; i++){
        suma = suma + arr[i];
        producto = producto*arr[i];
    }
    return `The sum is ${suma}. The product is ${producto}`
}

const arr1 = [1, 2, 3, 4];

console.log( getSumAndMultiplicationArray(arr1) );
/*
Exercise #2 (sugerencia map() )
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/

/**
 * Replaces each element of type number with the double of an array.
 * 
 * @param {Array} arr 
 * @returns {Array} arr
 */
function doubleTwice( arr ) {
    for( let i = 0; i < arr.length; i+=1 ) {
        arr[i] = arr[i]*2;
    }
    return arr;
}

const array = [1, 2, 4, 5];

doubleTwice( array );

console.log( array );
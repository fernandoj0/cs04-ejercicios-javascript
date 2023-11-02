/*
Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/

const arreglo = [3, 6, 12, 5, 100, 1, 300, 15, 65, 27, 45, 31, 200 ];


function bubbleSort(arr) {
    // Iterate over the array with two indexes for compare two consecutive elements and check if 
    // the first one is greater than the second one. If so, we swap them and 
    let swap = true;
    while (swap){
        for ( let i = 0; i < arr.length; i++ ) {
            for ( let j = i+1; j < arr.length; j++) {
                if ( arr[i] > arr[j] ) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                else {
                    swap = false;
                }
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arreglo));
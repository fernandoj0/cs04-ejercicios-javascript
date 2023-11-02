/*
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

/**
 * Get the same elements that are in two differents arrays and returns a new array with these items.
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array} arrayOfSharedItems
 */

function getTheSameItems (arr1, arr2) {
    const arrayOfSharedItems = [];
    for (let i = 0; i < arr1.length; i ++){
        for (let j = 0; j < arr2.length; j++){
            if ( arr1[i] === arr2[j] ) {
                arrayOfSharedItems.push(arr1[i]);
            } 
        }

    }
    return arrayOfSharedItems;
}


let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

console.log (getTheSameItems(student1Courses, student2Courses));



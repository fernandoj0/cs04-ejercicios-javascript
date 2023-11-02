/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

people.forEach((element) => console.log(element));

// 2.	Write the command to remove "Dani" from the array.

for ( let i = 0; i < people.length; i++ ){
    if ( people[i] === "Dani" ) {
        people.splice(i , 1);
    }
}

console.log(people);

// 3.	Write the command to remove "Juan" from the array.

for ( let i = 0; i < people.length; i++ ){
    if ( people[i] === "Juan" ) {
        people.splice(i , 1);
    }
}

console.log(people);

// 4.	Write the command to move "Luis" to the front of the array.

for ( let i = 0; i < people.length; i++ ){
    if ( people[i] === "Luis" ) {
        people.splice(i , 1);
        people.splice(0, 0, "Luis");
    }
}

console.log(people);

// 5.	Write the command to add your name to the end of the array.

people.push("Fernando");

// 6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)

for ( let i = 0; i < people.length; i++ ){
    console.log( people[i] );
    if ( people[i] === "Maria" ) {
        break;
    }
}


// 7.	Write the command that gives the indexOf where "Maria" is located.

console.log(people.indexOf("Maria"));


// At the end of the exercise, there should be 4 people in the array.

console.log(people);



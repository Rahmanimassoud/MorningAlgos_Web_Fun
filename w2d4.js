// WORKING WITH 2D(2 dimensional) ARRAYS

let arr2d = [
    [2,5,8],
    [3,6,1],
    [5,7,7]
];

// TASKS:

// TASK 1 console.log 8 in the above array.
// console.log(arr2d[0][2]);

// TASK 2 write a function that takes 2 parameters and returns true if the value is present in the array amd false if not.

// step 1, set a value variable with the initial value of 0.
let value = 0;

// step 2, write the function that takes 2 parameters (the array and value that we will pass).
// step 3, write a for loop to loop through the array (in our case the arr2d array).
// step 4, write another for loop to loop through the nested arrays (we are dealing with 2D array so we need nested loops).
function isPresent2d(arr2d, value){
    for(let i = 0; i < arr2d.length; i++){
        for(let j = 0; j < arr2d[i].length; j++){
            if (arr2d[i][j] === value){
                return true;
            }
        }
    }
    return false;
}
let isPresent = isPresent2d(arr2d, 4);
// console.log(isPresent);

// TASK 3, Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

// STEPS, write the function, declare a variable with an empty array to hold the information. loop through the arrays (we need nested loops). After the second for loop, push the values to the empty array. return the new array.
function flatten(arr2d){
    let flat = [];
    for(let i = 0; i < arr2d.length; i++){
        for(let j = 0; j < arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
        };
    };
    return flat;
};
let result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
// console.log(result);




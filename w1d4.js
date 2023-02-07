// Lets learn the code Flow

// predict the code

// let x = 5;
//     // initializing a variable
// function setX(newValue) { //declaring a function name setX with a parameter newValue 
//     x = newValue; //seting the value of x to newValue 
// }
    
// console.log(x); //log x, which will log 5 cuz x with value 5 is the global x. we haven't invoked the function.
// setX(15); //invoking the function and passing the argument 15 to the newValue parameter. we just invoked the function and passed a value to run the operation inside the function
// console.log(x); //log back x, which is the value 15 cuz we changed the value of x inside the function.


// Working with return

// let y = 5;
// function addToX(amount){
//     return y + amount;
//     console.log("hello there");  //this console would not run, cuz every function would return one thing.
// }
// console.log(y);
// let result = addToX(-10);
// console.log(result);
// console.log(y);

// Code Flow - Is the Array a palindrome

function isPal(arr) {
    for(let left=0; left<arr.length/2; left++){
        let right = arr.length-1-left;
        if(arr[left] != arr[right]){
            return "Not a pal-indrome!"
        }
    }
    return "Pal-indrome!"
}

let result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

let result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);





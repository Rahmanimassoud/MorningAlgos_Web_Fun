
// lets say we are searching an array to find the smallest value.

function smallest (arr) {
    let min = arr[0];
    for (let element of arr) {
        if(element < min) {
            min = element;
        }
    }
    return min;

}
// console.log(smallest([2,14,18,20,3,15,10])); //this code would have to look through all the items of the array to find the smallest vale. So we can say the algorithm took "N" number of operations. We can Simply say this algo runs in O(N) time.

// Write an algorithm that takes an array of numbers as input amd calculates the sum of those numbers. Define the time complexity of the algo and determine what the lowest possible time complexity is for this problem.

function sumNumbers (numbers) {
    let result = 0;  //runs 1
    for (let i = 0; i<numbers.length; i++){ //the loop was initialized once so it runs 1
        result += numbers[i]; // this runs 3 times for this solution but it depends on the array elements that we provide so its 4 times (runs n times)
    }
    return result; // this also runs once 1
}
// console.log(sumNumbers([1,3,10]));

// so if we want to calculate the time we could write:
// T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n
// we should find the fastest growing term which is:
// T = 1*n
// we remove the coefficient, so we are left with
// T = n
// So we got O(n) which is Linear time complexity.
// FOR THE PROBLEM ABOVE THIS IS THE BEST SOLUTION WE CAN GET


// ===========================================FIBONACCI SEQUENCE =========================================
// QUESTION: Return the nth element of the Fibonacci sequence. eg fib(4) yields 5

// Solution: Our algorithm needs to do two things:
// (1) Calculate the sequence up to the element we're looking for.
// (2) Return that element.
function fib(n) {
    const numbers = [1, 1];
    for (let i = 2; i < n + 1; i++) {
        numbers.push(numbers[i - 2] + numbers[i - 1]);
    }
    return numbers[n];
}
// console.log(fib(4));
// console.log(fib(5));

// This algorithm runs in O(n) => Linear time complexity.

// =============PRIME NUMBERS======================
// QUESTION, DETERMINE WETHER AN INPUT IS A PRIME NUMBER
// PRIME number is a number which is divisible by itself and 1 with no decimal numbers.
// Example isPrime(9); // false this is false cuz it is divisible by 9,1 and 3
// isPrime(5); //true is true cuz its only divisible by 5 and 1

// Our algorithm needs to do one thing: Try dividing the numbers by all smaller numbers and return (true) if it's only divisible by itself and 1.

function isPrime (n) {
    for (let i = 2; i < n; i++){ //the reason why we start at 2 and not 1, is cuz every number is divisible by 1.
        if (n % i === 0){
            return false;
        }
    }
    return true;
}

// console.log(isPrime(4));
// console.log(isPrime(9));

// The average case for this algorithm is O(n) => Linear time complexity.





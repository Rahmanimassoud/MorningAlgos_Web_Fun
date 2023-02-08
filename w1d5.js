// How to swap variables

// let fruit1 = "apples";
// let fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1); // we need to declare a temp variable to hold the value of the first variable and after that we can swap it.

// let fruit1 = "apples";
// let fruit2 = "oranges";

// let temp = fruit1;

// fruit1 = fruit2;
// fruit2 = temp;

// console.log(fruit1 + " and " + fruit2);


// write a function that reserves a given array

function reserve(arr){

    let left = 0;
    let right = arr.length-1;

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right]
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
let result = reserve(["a","b","c","d","e"]);
console.log(result);

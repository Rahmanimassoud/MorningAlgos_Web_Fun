// PRACTICE T-DIAGRAM 

let isSunny = true;
let temperature = 45; // degrees Fahrenheit
let isRaining = false;
let whatToBring = "I should bring: ";
    
if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);


for (let i = 10; i > 0; i--) {
    if (i != 2) {
    console.log(i);
    } else {
    console.log("ignition!");
    }
}
console.log("liftoff!");


// WRITE CODE THAT COUNT POSITIVE VALUES. 
// it counts both positive and negative numbers.
let countPositives = 0;
let countNegative = 0;
let numbers = [3,9,10,-18,-12,-5,2];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0){
        countPositives ++;
    } else {
        countNegative++;
    }
}
console.log("there are " + countPositives + " positive values and " + countNegative + " negative values");
// Working with Math library

let floor = Math.floor(1.9);
let ceiling = Math.ceil( 1.1 );
let random = Math.random();
    
// console.log(floor);
// console.log(ceiling);
// console.log(random);

// Getting a random number between 0 and 6. 
function d6() {
    let roll = Math.floor(Math.random() * 6 + 1);
    return roll;
}
let playerRoll = d6();
// console.log("The player rolled: " + playerRoll);


// Using the following array, write a function that will answer all of our questions by randomly choosing a response

let lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getAnswer(){
    const randomIndex = Math.floor(Math.random() * lifesAnswers.length);
    return lifesAnswers[randomIndex];
}
// console.log(getAnswer());

//NOTE: Math.random() function returns a random number between 0 and 1, and Math.floor() rounds the number down to the nearest integer. So, randomIndex will be a random integer between 0 and the length of the lifesAnswers array -1.
// 
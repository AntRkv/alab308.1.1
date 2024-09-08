// Part1

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all numbers are divisible by 5. Cache the result in a variable.
const isDevByFiive = (n1 + n2 + n3 + n4) % 5 === 0;
console.log(isDevByFiive);

// Check if the first number is larger than the last. Cache the result in a variable.
const isFstNumLar = n1 > n4;
console.log(isFstNumLar);

// Accomplish the following arithmetic chain:
//   Subtract the first number from the second number.
//   Multiply the result by the third number.
//   Find the remainder of dividing the result by the fourth number.
const result = ((n2 - n1) * n3) % n4;
console.log(result);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnderOrEqual25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(isUnderOrEqual25);

//Part2
let distance = 1500;

let speed1 = 55;
let speed2 = 60;
let speed3 = 75;

let mpg1 = 30;
let mpg2 = 28;
let mpg3 = 23;

let budget = 175;
let gas = 3;

let amountOfGasWithSpeed1 =1500/mpg1;
let amountOfGasWithSpeed2 =1500/mpg2;
let amountOfGasWithSpeed3 =1500/mpg3;


// How many gallons of fuel will you need for the entire trip?

console.log("For speed 55mp/h we need "+ amountOfGasWithSpeed1 +" gallons");
console.log("For speed 60mp/h we need "+ amountOfGasWithSpeed2 +" gallons");
console.log("For speed 75mp/h we need "+ amountOfGasWithSpeed3+" gallons");


// Will your budget be enough to cover the fuel expense?

let isEnough1 = amountOfGasWithSpeed1 * gas;
console.log(isEnough1 + "$");
console.log(budget >= isEnough1);

let isEnough2 = amountOfGasWithSpeed2 * gas;
console.log(isEnough2 + "$");
console.log(budget >= isEnough2);

let isEnough3 = amountOfGasWithSpeed3 * gas;
console.log(isEnough3 + "$");
console.log(budget >= isEnough3);

// How long will the trip take, in hours?

let time1 = distance/speed1;
console.log("For speed 55 mp/h we need a " + time1 + " hours");

let time2 = distance/speed2;
console.log("For speed 60 mp/h we need a " + time2 + " hours");

let time3 = distance/speed3;
console.log("For speed 75 mp/h we need a " + time3 + " hours");

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?



//Part3

// In all of the problems above, there are two tools that would make it much easier to implement the logic we need and to reuse the code to test with different values:
// Control flow, which is how we conditionally determine what a program does next. For example, if we exceed our fuel budget, perhaps the program could automatically change the speed it is testing until it finds the optimal speed.
// Functions, which are reusable blocks of code, allow us to run pieces of code multiple times without rewriting the code or changing the value of variables in the code itself, like we needed to do above.
// We will explore control flow in the next lesson, and functions toward the end of the module. Until then, continue exploring with the variety of operators and data types available in JavaScript!

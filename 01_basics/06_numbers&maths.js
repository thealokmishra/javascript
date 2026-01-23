const score = 400
// console.log(score);

// use a number as object to perform methods on it
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);     //.toString(), converts number to string
// console.log(balance.toFixed(2)); //out: 100.00 , toFixed(n) formats a number to n decimal places and returns it as a string

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// toPrecision(n) formats a number to a total of n significant digits and returns a string.

// let x = 123.456;

// x.toPrecision(4); // "123.5"
// x.toPrecision(2); // "1.2e+2"


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //out: 10,00,000
//.toLocaleString() formats numbers, dates, and times using local conventions

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //out: 4, gives absolute int value
// console.log(Math.round(4.6)); //out: 5, takes nearest int value
// console.log(Math.ceil(4.2));  //out: 5, take nearest next int value
// console.log(Math.floor(4.9)); //out: 4, take nearest prev int value
// console.log(Math.min(4, 3, 6, 8)); //out: 3, minimum value b/w args
// console.log(Math.max(4, 3, 6, 8)); //out: 8, maximum value b/w args

console.log(Math.random());   //generates a 16 decimal random number between 0-1
console.log((Math.random()*10) + 1); // +1 avoids the case of output being 0
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// get value between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
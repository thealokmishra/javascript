// truthy and falsy values are those values that are assumed/considered to be true or false in js: an empty string is considered false but empty array is true

const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values:-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values:-
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

// check if object is empty
// Object.keys(<arrName>) returns an array of keys, if that array is empty then object is empty
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is either null or undefined otherwise left side value is returned

let val1;
// val1 = 5 ?? 10            //out: 5
// val1 = null ?? 10         //out: 10
// val1 = undefined ?? 15    //out: 15
val1 = null ?? 10 ?? 20; //out: 10

console.log(val1);

// Ternary Operator: one-line shorthand for an if...else statement.

// condition ? execute this if true : execute this if false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// ex:
const age = 20;
const beverage = age >= 21 ? "Beer" : "Juice";

console.log(beverage); // "Juice"

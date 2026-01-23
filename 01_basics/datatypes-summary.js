// js is a dynamically typed language means var types are defined at runtime & we don't need to explicitly declare the type of var like if it's Number, string or bool.

//  Primitive - you get a copy, stored as values

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  //why null has object datatype?
let userEmail;   //undefined

// what's symbol?
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference type (Non primitive) - stored as reference

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //array

// object
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);  //check typeof data

// https://262.ecma-international.org/5.1/#sec-11.4.3

// *************************

// Stack(Primitive) - copy is created 

let myName = "Alok";   //declare
let newName =  myName;  //creates a copy from myName

// Heap(Non-Primitive) - reference is given
let userOne = {
    email: "some@gmail.com",
    name: "Alok"
}

let userTwo = userOne //reference user2 from user
userTwo.email = "another@gmail.com"

// we only changed email attribute in userTwo but it was chnaged for both one & two, because they are referencing to the same place unlike primitive types
console.log(userOne.email)  //out: another@gmail.com
console.log(userTwo.email)  //out: another@gmail.com


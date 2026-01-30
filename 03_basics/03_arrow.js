const user = {
  username: "alok",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); //this is used to access properties of current object
    console.log(this);
  },
};

// why this? because javascript doesn't know if youre referring to the current object or a global variable, suppose youhave global variable: name = "alok", and also a local variable: name = "hitesh" inside the function, if you don't use this the global one will be printed, if you use 'this' then the current object's property will be printed

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "alok"
//     console.log(this.username);  //out: undefined, can't use 'this' inside fn
// }

// chai()

// const chai = function () {
//     let username = "alok"
//     console.log(this.username);
// }

// arrow function
const chai = () => {
  let username = "alok";
  console.log(this); //undefined
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return arrow fn: we don't need to write return keyword or curly brackets
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "alok" }); //returns an object,need to be wrapped in parantheses

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

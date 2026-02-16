//in js functions are also objects, which means we can add properties and methods to them just like we do with regular objects, and we can also access those properties and methods using the function name, just like we do with regular objects.
// Functions are instances of the Function constructor.

function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2; //functions can also be assigned properties just like regular objects, and we can access those properties using the function name, just like we do with regular objects.

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// adding your own properties and methods to the prototype of the constructor function, so that all the objects created by that constructor function can access those properties and methods through the prototype chain.
createUser.prototype.increment = function () {
  this.score++; //this is used to access properties of current object, whichever object calls this method
};

// whatever object is created using the createUser constructor function will also have access to prototype methods we define on the createUser constructor function
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
// the new keyword is necessary because, it creates a new object and links the prototype chain to the constructor function, and also sets the context of 'this' to the newly created object, so that we can access the properties of that object using 'this' keyword in the constructor function and prototype methods.
const tea = createUser("tea", 250);

chai.printMe(); //works
tea.printMe(); //error because we are not using new keyword, so the context of 'this' is not set to the newly created object, and it is set to the global object, which does not have the score property, so it will throw an error when we try to access this.score in the printMe method.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

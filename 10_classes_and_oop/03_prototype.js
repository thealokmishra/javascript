// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// we can directly add properties and methods to top level object constructor, in this  way everything which is an object will have access to those properties and methods
Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, //this is called prototypal inheritance, we are setting the prototype of TASupport to TeachingSupport, so that TASupport can access the properties of TeachingSupport through the prototype chain, and also we can set the prototype of TeachingSupport to Teacher, so that TeachingSupport can access the properties of Teacher through the prototype chain, and also we can set the prototype of Teacher to User, so that Teacher can access the properties of User through the prototype chain, and this way we can create a chain of prototypes and access properties from all the objects in the chain through the prototype chain.
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); //this is the modern way to set the prototype of an object, it is more readable and less error prone than using __proto__ property, because it does not allow you to set the prototype to a non-object value, and it also does not allow you to set the prototype to null, which can cause issues in some cases.

let anotherUsername = "ChaiAurCode     ";

//every string will have access to the trueLength method through the prototype chain, because we have added the trueLength method to the String prototype, which is the prototype of all string objects, so all string objects will have access to the trueLength method through the prototype chain.
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();

// **********IMPORTANT: we should not modify the built-in prototypes, because it can cause issues in some cases, for example if we add a method to the Array prototype, and then we use a for...in loop to iterate over an array, it will also iterate over the properties of the Array prototype, which can cause issues in some cases, so it is generally not recommended to modify the built-in prototypes, but it is still good to know how prototypal inheritance works in JavaScript and how we can use it to create our own objects and methods.

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// out: {
//   value: 3.141592653589793,
//   writable: false,      // You cannot change the value
//   enumerable: false,    // It doesn't show up in for...in loops
//   configurable: false   // You cannot delete it or change these settings later
// }

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nahi bani");
  },
};

// .getOwnPropertyDescriptor() takes first argument as the object and second argument as the property name and returns an object that describes the attributes of that property. It includes value, writable, enumerable, and configurable attributes.
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// By default, properties added to an object are writable, enumerable, and configurable. This means you can change their value, they will show up in loops, and you can modify their attributes later on.
// You can change the value of a property by using Object.defineProperty
Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// we have to use Object.entries because the name property is not enumerable by default, so it won't show up in a for...in loop. Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs, which allows us to iterate over them easily.
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

// The reason you can’t redefine it comes down to a specific "lock" called the Configurable attribute.

// In the previous answer, we looked at writable, but configurable is actually the "Master Lock" of a property. Once it is set to false, the engine effectively welds that property shut.

// 1. The Three "Nos" of Non-Configurable Properties
// When a property (like Math.PI) has configurable: false, the JavaScript engine enforces three strict rules:

// No Deletion: You cannot use delete Math.PI. It will simply return false (or throw an error in strict mode).

// No Attribute Changes: You cannot change enumerable (whether it shows up in loops) or configurable itself.

// No Permission Changes: You cannot change writable from false to true.

// The one tiny exception: You can change a property from writable: true to writable: false even if it's non-configurable, but you can never go back the other way.

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

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

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

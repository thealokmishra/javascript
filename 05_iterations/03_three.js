// for of
// for of loop goes through each item of an array/string and executes a block of code for each item

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //for each num in arr,
  //console.log(num);   //print num
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

// Maps
// A Map is a collection of keyed data items, just like an Object
//Maps allow keys of any type (objects, functions, or even numbers), whereas in Object: keys must be Strings or Symbols.
// Remembers the original order of items, Has a .size property.
// Better for frequent adding/removing of items. Directly iterable using for of loop
// remember that Map is different from .map() array method

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);

// accessing keys and values using destructuring
for (const [key, value] of map) {
  // console.log(key, ':-', value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// objects are not directly iterable using 'for of' loop
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }

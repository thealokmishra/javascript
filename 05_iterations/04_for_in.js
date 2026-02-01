const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// for...in loop
// its specifically designed for Properties (Keys) in an Object.
// for...in is for Objects (to get the keys); for...of is for Arrays/Maps (to get the values).
// (bad practice): for...in on arrays will return the indexes, because basically index works like keys

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);  //Bracket Notation: myObject[key], key is a variable here
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

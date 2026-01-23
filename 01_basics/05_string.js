const fName = "Alok";
const lName = "Mishra";

//using backticks ``, for concatenation
const greeting = `Hello my name is ${fName} ${lName}`
// console.log(greeting); //out: Hello my name is Alok Mishra

//string is stored as an object with key : value pairs, keys are like index which hold the corresponding value of the character at that place

//console.log(name[0]); // out: 'A' , because at 0th place A is present subsequently "l" "o" and "k"

// accessing string methods
// console.log(fName.length);    //out: 4
// console.log(fName.toUpperCase()); //out: ALOK
// console.log(fName.charAt(2)) //charAt gets you the character at given position, out: O
// console.log(fName.indexOf('A')) //indexOf gets you index of given character, out: 0

const myName = "AlokMishra";

// substring(start, end+1), gets you defined part of the string
console.log(myName.substring(0,4)) //out: Alok

//.slice(start, end), in slice we can give negative index, -1 is last char of string
console.log(myName.slice(-6,10)) //out: Mishra

const newName = "      Alok    "  //lots of spaces
console.log(newName.trim()) //out: Alok, .trim(): trims spaces before and after the string

const url = "https://alok.com/alok%20mishra"  //url encoding turns spaces => %20

// .replace(), used in case we have to replace a char in string
console.log(url.replace('%20', '-'));  //out: https://alok.com/alok-mishra

// .includes(), checks if a given char is present in the string, output is bool
console.log(url.includes('alok'))   //out: true

//.split(), creates array of substrings from a given string based on a separator, e.g " ", "-", "/"
const stringSplit =  "my-name-is-alok-mishra";
const splitArray = stringSplit.split('-');
console.log(splitArray); //out: [ 'my', 'name', 'is', 'alok', 'mishra' ]

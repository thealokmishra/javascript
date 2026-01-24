// js array is an object and resizable that can contain multiple datatypes in single variable: Number, String, Bool, or another arr, etc; arrays are 0 indexed, js doesn't support negative indexing: -1
// 
const myArr = [1, 345, "alok", false, 24, 67]  //constructor
const myArr2 = new Array(1, 2, 3, 4)


// accessing array element with index: myArr[index] 
// console.log(myArr[2]); //get element at index 2, out: "alok"

// shallow copy: reference type
// deep copy: value type

// Array methods

// myArr.push(6)   //push element in the array at end
// myArr.push(7)
// myArr.pop()    //deletes the element at last index

// myArr.unshift(9)  //pushes the given arg at index 0, shifts every other element to index+1 (V.BAD)
// myArr.shift()     //removes ele at index:0

// console.log(myArr.includes(9));  //check if given ele is present in arr, output is bool type
// console.log(myArr.indexOf(3));   //check index of given element, -1 is returned if not present

const newArr = myArr.join() //.join() converts the content of arr into a string

// console.log(myArr);
// console.log(newArr); //output is string: '1,345,alok,false,24,67'

// ****IMP****
// slice is used to create a new array from an array, last range index is not included, doesn't alters OG array
// splice creates the new array and alters the OG array, also last range index is included

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //out: [ 345, 'alok' ], slice(start, end+1)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice(start, end)
console.log("C ", myArr);
console.log(myn2);


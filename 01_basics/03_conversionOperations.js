let score = "33abc"

console.log(typeof(score))

let valueInNumber = Number(score)  //convert to number

console.log(typeof(valueInNumber))
console.log(valueInNumber)  //output: NaN = not a number, because score contains alphanumeric string can't convert, 

// conversion to Number for different types of value in score:
// "33" => 33
// "33abc" => NaN
// true => 1
// null => 0
// undefined => NaN

// conversion to bool
let isLoggedIn = "hitesh"
let boolIsLoggedIn = Boolean(isLoggedIn) //convert to bool

// 1 => true; 0 => flase
// "" => false
// "someString" => true

// convert to string
let someNumber = 33
let stringNumber = String(someNumber)

// 33 => "33"

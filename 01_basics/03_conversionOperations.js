let score = "33abc"

// console.log(typeof(score))

let valueInNumber = Number(score)  //convert to number

// console.log(typeof(valueInNumber))
// console.log(valueInNumber)  //output: NaN = not a number, because score contains alphanumeric string can't convert, 

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


// ***************OPERATIONS**************

// 2**3 two raised to power three
// 2%3 remainder
// 2/3 divide

// if string is first then everything will be converted to string
// console.log("1" + 2 + 2);  out: 122

// if numbers are first then operations will be performed then concatenation
// console.log(1 + 2 + "2");  out: 32

let counter = 100
// ++counter
// counter++
// what happens when we prefix operator vs postfix operator
// console.log(counter)

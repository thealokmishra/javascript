//defining a function
// function name(params) {

// }

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2; //after a function returns a value, the rest of the code is not executed
  //any code here is not reachable
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

// in case no argument is passed then output will be: undefined
function loginUserMessage(username = "sam") {
  //default parameter: in case no argument is passed then default value will be used
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// rest operator: ...var, it takes all the arguments as an array except fixed arguments: val1, val2
// useful in cases where we don't know how many arguments will be passed ex: calculating total price of cart
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  price: 199,
};

// passing objects as arguments
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

// passing object directly as an argument
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

// passing array as an argument
function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

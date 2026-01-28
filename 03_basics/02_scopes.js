//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30; //here the global var c will be redeclared to 30 even if declared inside function block scope, this problem is solved with let & const
  // console.log("INNER: ", a);  //to use block scope
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username); //can be accessed due to scope of parent fn
  }
  // console.log(website);  //can't access due to blocked scope of fn two

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);    //can't access due to blocked scope
}

// console.log(username);      //can't access due to blocked scope

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); //possible due to hoisting, can be accessed before declaration

function addone(num) {
  return num + 1;
}

addTwo(5); //error - because not defined yet, can't be accessed before declaration

// vars can also hold functions, commonly known as anonymous (no name) functions
const addTwo = function (num) {
  return num + 2;
};

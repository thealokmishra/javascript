function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

// when we create a function inside another function, it is called closure.
// basically inner function has access to the variables and parameters of its outer function, even after the outer function has returned. this is because the inner function forms a closure over the variables of the outer function, allowing it to retain access to those variables even when the outer function is no longer in scope.
// Nested functions have access to variables declared in their outer scope.
function outer() {
  let username = "hitesh";
  console.log("OUTER", secret);
  function inner() {
    let secret = "my123";
    console.log("inner", username);
  }
  function innerTwo() {
    console.log("innerTwo", username);
    console.log(secret);
  }
  inner();
  innerTwo();
}
inner();
// outer();
console.log("TOO OUTER", username);

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName; // Return the inner function, which has access to the 'name' variable, whole lexical scope of makeFunc is preserved in the closure created by displayName, allowing it to access the 'name' variable even after makeFunc has finished executing.
}

// const myFunc = makeFunc();
// myFunc();

// myFunc is a reference to the instance of the function displayName that is created when makeFunc is run.
// The instance of displayName maintains a reference to its lexical environment, within which the variable name exists.
// For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.

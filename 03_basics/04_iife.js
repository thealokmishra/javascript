// Immediately Invoked Function Expressions (IIFE): used to run functions immediately
//also used to remove global scope pollution

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

((params) => {
  console.log(`DB CONNECTED TWO ${params}`);
})("argument");

//fn is declared in first paranthesis, then called in second parenthesis

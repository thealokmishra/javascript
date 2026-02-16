function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

//.call basically allows you to borrow a method/function and use it in current .this context
// The first argument to .call() becomes the 'this' inside the function. Any subsequent arguments are passed into the function normally.
function createUser(username, email, password) {
  SetUsername.call(this, username); //setting username by borrowing the SetUsername function and using it in the current context of createUser function

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

// 90% of the time we won't be using .call() in modern js

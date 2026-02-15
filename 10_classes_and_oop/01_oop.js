const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  // current context is the object itself in which this is being called.
  getUserDetails: function () {
    //console.log("Got user details from database");
    //console.log(`Username: ${username}`);  //won't work because js doesn't know which username to use, it will look for a variable named username in the function scope and won't find it, so it will throw an error, that's why we use this.username to refer to the username property in current context/object.
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);    //in node 'this' refers to the global object, which is an empty object in node, but in browser it refers to the window object, which is the global object in browser and has all the global variables and functions as its properties and methods.

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {};

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);

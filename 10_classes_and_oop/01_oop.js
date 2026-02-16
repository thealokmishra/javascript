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

  return this; //this is returned implicitly, dont need to return it, just for clarification
}

const userOne = User("hitesh", 12, true);
console.log(userOne);
const userTwo = User("ChaiAurCode", 11, false);
console.log(userOne); //even if we are using two differnt variables, when we create another user, it will overwrite the properties of the first user because we are not creating a new object for each user, we are just modifying the same object and returning it, that's why we get the same user details for both userOne and userTwo, which is the details of the last user created.
// to avoid this we can use the 'new' keyword which creates a new object for each user and sets the context of 'this' to that new object, so that we can have different user details for each user.

userOne = new User("hitesh", 12, true);
userTwo = new User("ChaiAurCode", 11, false);
// console.log(userOne.constructor);
//console.log(userTwo);

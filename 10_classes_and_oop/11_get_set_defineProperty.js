// setting getter and setter using Object.defineProperty() method. this method allows you to define a property on an object and specify its getter and setter functions. the first argument is the object on which to define the property, the second argument is the name of the property, and the third argument is an object that contains the getter and setter functions.
// used in older JavaScript code before the introduction of classes in ES6.
function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);

// ES6

class User {
  //constructor is a special method which is called when we create an instance of the class, e.g. when we do new User(),
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene
// doing same but with functional programming and prototypal inheritance

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

//extends allows you to inherit properties and methods from a parent class
class Teacher extends User {
  constructor(username, email, password) {
    super(username); //calling parent constructor: 'User' to set the username property in the Teacher class,
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe();
const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(chai instanceof User); //checks if chai is an instance of User class, it will return true because Teacher class extends User class, so chai is an instance of both Teacher and User classes

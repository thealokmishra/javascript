class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  // static method is used when we want to create a method that belongs to the class itself rather than to any instance of the class. Static methods are called on the class itself, not
  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());

// The static keyword in JavaScript defines properties or methods that belong to the Class itself, rather than to the instances (the objects) created by that class.

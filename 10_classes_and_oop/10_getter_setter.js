// when you define a getter you also have to define a setter for it
// getter works like a method, when you try to access the property and a getter is defined for that property, the getter method will be called and its return value will be used as the value of the property. This allows you to compute or manipulate the value of a property on the fly when it is accessed.
// setter works like a check, when you try to set a value to a property and a setter is defined for that property, the setter method will be called with the new value as an argument. This allows you to validate or modify the value before it is actually set to the property., e.g if someone enters age as -5, you can use a setter to check if the value is valid and if not, you can set it to a default value or throw an error.
// name of getter and setter should be same as the property name
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase(); //getter are returned
  }
  set email(value) {
    this._email = value; //setter are set, not returned
  }

  get password() {
    return `${this._password}alok`;
  }

  set password(value) {
    this._password = value;
  }
}

// the underscore (_) is used to tackle problem of infinite loop in getter and setter. where call stack size reaches maximum.

const alok = new User("h@alok.ai", "abc");
console.log(alok.email);

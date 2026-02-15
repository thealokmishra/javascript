// Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. In simple terms, a promise is an object that may produce a single value in the future: either a resolved value or a reason that it’s not resolved (e.g., an error). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promises are used to handle asynchronous operations in JavaScript and provide a cleaner and more manageable way to work with asynchronous code compared to traditional callback functions.

// Creating a Promise: You can create a promise using the Promise constructor, which takes a function as an argument. This function is called the executor function and it receives two parameters: resolve and reject. The resolve function is used to indicate that the promise has been fulfilled successfully, while the reject function is used to indicate that the promise has been rejected due to an error or some other reason.
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve(); //promise is only consumed when resolve is called, otherwise it will be pending state only, and if reject is called then promise is rejected and it will not be consumed.
  }, 1000);
});

// Consuming a Promise: To consume a promise, you can use the then method, which takes two optional callback functions as arguments: one for handling the resolved value and another for handling any errors that may occur. The then method returns a new promise, which allows for chaining multiple then calls together.
promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Alok", email: "alok@example.com" }); // you can resolve any value, it can be string, number, object, array, etc. and that value will be passed to the then method as an argument.
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username); //IMP: chaining, next .then will receive the value returned from previous .then, in this case it will receive username which is returned from previous .then, and it will log it to the console.
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected")); // finally method is used to execute a callback function regardless of the promise's outcome, whether it is resolved or rejected. It is typically used for cleanup tasks or to perform actions that should happen after the promise has been settled, such as hiding a loading spinner or resetting a form. The finally method does not receive any arguments and does not affect the value passed to the next then or catch in the promise chain.

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// async function is a function that returns a promise, and it allows you to use the await keyword inside it to wait for the promise to be resolved or rejected before moving on to the next line of code. The await keyword can only be used inside an async function, and it makes the code look synchronous while still being asynchronous under the hood.
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()   // IMP: response.json() is also a promise, so we need to await it to get the actual data, otherwise it will return a pending promise.
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch("https://api.github.com/users/thealokmishra")
  .then((response) => {
    //return response
    return response.json();
  })
  .then((data) => {
    //handle data from response
    console.log(data);
  })
  .catch((error) => console.log(error)); //handle error

// promise.all
// yes this is also available, Learn more.

// singleton: constructor method
// Object.create


// object literals
// js objects are key: value pairs where keys are strings or symbols
// A Symbol is a primitive type used as a unique object key to avoid naming collisions.
// objects can store any type of data primitive or reference type, the keys must be string or symbol

// the keys are string but need not be wrapped in quotes

const mySym = Symbol("key1") //declaring a symbol: every symbol is unique


const JsUser = {
    name: "Alok",
    "full name": "Alok Mishra",
    [mySym]: "mykey1", // while using symbol as key you must wrap it in sq brackets: [sym]: 123
    age: 18,
    location: "Jaipur",
    email: "alok@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing object's data using key
// console.log(JsUser.email)

// te below method is necessary in case the key inside object is wrapped in quotes: "key", the .key method won't work in this case
// console.log(JsUser["email"])  //can be accessed by putting key as string in sq brackets
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  sym as key need not be put in quotes

JsUser.email = "hitesh@chatgpt.com"  //changing value
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
JsUser.greetingTwo()
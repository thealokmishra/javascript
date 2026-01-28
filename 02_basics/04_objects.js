// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);  //accessing nested objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }  //out: nested objects
// const obj3 = Object.assign({}, obj1, obj2, obj4) //.assign() is used to merge objects, passing first argument as empty object - {}it works as a source and restarguments as objects

const obj3 = { ...obj1, ...obj2 }; //best way using spread operator
// console.log(obj3);

//array of objects
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email; //get email of user at index: 1
// console.log(tinderUser);

//accessing object keys, values, entries as array
// console.log(Object.keys(tinderUser));  //out: ['id', 'name', 'isLoggedIn'], output is array of keys
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  //out: [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //check if object has given property

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

//object destructuring
const { courseInstructor: instructor } = course; //unpacks property: courseInstructor of object into a variable: instructor, isntead of writing course.courseInstructor we can easily write just: instructor to access that property of object
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//JSON: Javascript Object Notation - is js object-like where unlike js objects, keys are "strings" and values are strings or numbers or nested objects
// normally used in API responses to share data

//APIs can also respond with arrays and nested objs inside those arrays as well
[{}, {}, {}];

//more on destructuring
const user = { id: 1, name: "Alex", email: "alex@example.com" }; //declaring object

// accessing object properties (old way)
console.log(user.id);
console.log(user.name);
console.log(user.email);

// accessing object properties (destructuring way)
const { id, name, email } = user;

console.log(id, name, email);

const coding = ["js", "ruby", "java", "python", "cpp"];

// forEach is an array method that takes a callback function as an argument in that callback we pass the element (which can be named anything) of the array and define what we want to do with that element
// callback fn don't need to be named

// coding.forEach( function (val){
//     console.log(val);
// } )

// ussing arrow fn
// log each item in coding array
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// execute printMe fn for each item in coding array, observe that we just pass the fn name and not () because we are not calling the fn just referencing
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// log languageName from each object in the array, each obj is passed as item
myCoding.forEach((item) => {
  console.log(item.languageName);
});

// const coding = ["js", "ruby", "java", "python", "cpp"]

// ***with forEach we can return a value***
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item         //out: undefined, forEach doesn't return anything
// } )

// console.log(values);

// filter
// its a method that returns array of filtered elements which satisfy the condition specified in the callback function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
//we need to specifically mention return inside a scope '{ }' of callback fn, not needed inside paranthesis

// const newNums = []

// here we are using forEach to push items to an empty array which met the condition (it's like a manual filter)
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History"); //returns all book objects that have genre: history

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"; //combining multiple conditions using && operator
});
console.log(userBooks);

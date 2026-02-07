//map()
//You put an array in, apply a rule to each item, and a brand new array comes out the other side with the updated values.
// map is used to transform data in an array and return a new array

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})        //when we open scope { } its mandatory to use return keyword

//chaining methods
const newNums = myNumers
  .map((num) => num * 10) //multiply each num by 10
  .map((num) => num + 1) //add 1 to each num, chaining here performs operation on elements of array returned by last method
  .filter((num) => num >= 40); //filter nums >= 40

console.log(newNums);

// getting new arr of just names
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const names = users.map((user) => user.name);

console.log(names); // ['Alice', 'Bob']

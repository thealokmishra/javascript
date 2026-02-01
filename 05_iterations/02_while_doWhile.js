// while loop: executes a block of code repeatedly until a certain condition is true
let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  //console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

let score = 11;

do {
  console.log(`Score is ${score}`); //out: Score is 11,
  score++;
} while (score <= 10);

// do while loop executes the code block once before checking the condition, but while loop executes the code block after checking the condition
// that's why above we got output: 11, even when condition is false i.e. score > 10

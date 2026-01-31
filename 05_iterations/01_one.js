// for loop
// for (initialization; condition; afterthought) {
// code to be executed
// }

// Initialization: This runs once before the loop starts. It’s usually where you declare a counter variable (e.g., let i = 0;).
// Condition: This is checked before every iteration. If it’s true, the code inside the {} runs. If it’s false, the loop stops.
// The Code Block: The stuff inside the curly braces executes.
// Afterthought: This runs at the end of every loop. Usually, it's used to update the counter (e.g., i++).

// for
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is best number");
  }
  //console.log(element);
}

// console.log(element); //can't be accessed outside the scope (loop)

for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
  }
}

// iterating over array
let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
//***********(IMP) in Js index starts from 0, length starts from 1 ***********
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// iterating over string
let myName = "Alok Mishra";
//console.log(myName.length);
for (let index = 0; index < myName.length; index++) {
  const element = myName[index];
  //console.log(element);
}

// break and continue
// break keyword: breaks the loop when a certain condition is met, code after break is not executed
// continue keyword: skips the current iteration

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

// continue: only skips for met condition (current) and execute for all other; but break: stops the loop altogether when the condition is met
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue; //skips the current iteration, don't run for 5
  }
  console.log(`Value of i is ${index}`);
}

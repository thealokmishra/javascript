// reduce
// Accumulator: The "bucket" that holds the results of the previous iterations.
// Current Value: The item in the array currently being processed.
// Initial Value (Optional but recommended): The starting value of the accumulator. If you don't provide this, the first element of the array becomes the accumulator, and the loop starts at the second element.

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

// reduce method takes defined initial value, accumulator and current value, if init val is not provided it takes val of first element in array, and loop starts at second element, then it performs the given operation logic in calback function e.g acc + curr,, then this acc+curr becomes the accumulator for next operation and repeats till arr is exhausted, and returns a single value as output, e.g: adding price of all items in a shopping cart
// if init val is provided then curr takes val of first element in array, if not then 2nd element in array

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (accumulator, currvalue) {
//     console.log(`acc: ${accumulator} and currvalue: ${currvalue}`);
//     return accumulator + currvalue
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);

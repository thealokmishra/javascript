// always compare with same datatypes

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1); 
// console.log(2 != 1);

// === 
// avoid these comparisons
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); //flase
// console.log(null == 0); //false
// console.log(null >= 0); //true (why?) equality check and comparison both work different in js

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === 

console.log("2" === 2); //strict check value and dataType, out:false
console.log("2" == 2); //only value check, out: true

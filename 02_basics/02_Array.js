const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //we think it'll add all the elements from dc and put into marvel, but instead it pushes the whole array as an element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //.concat() is messy so avoid using it use spread operator
// console.log(allHeros);

// Spreadis syntax that expands arrays anywhere, concat is a method that only appends arrays at the end.

const all_new_heros = [...marvel_heros, ...dc_heros]  //spread operator unpacks all the data into the array, simple understandable and readable

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  //nested array

const real_another_array = another_array.flat(Infinity)  //.flat(<depth>) unpacks the nested array upto given depth: 1,2,....infinity, depth here is level of nests
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))  //check is given thing is datatype: array 
console.log(Array.from("Hitesh"))     //convert given value into Array, out: array of characters
console.log(Array.from({name: "hitesh"})) // interesting, out: empty arr

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //returns new array from set of passed elements
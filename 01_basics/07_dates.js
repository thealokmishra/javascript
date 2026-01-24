// Dates
// A JavaScript date is fundamentally specified as the time in milliseconds elasped since 12 AM 1 Jan, 1970, UTC

let myDate = new Date() // date obj constructor, get instantaneous date time
console.log(myDate.toString()); //out: Sat Jan 24 2026 08:23:36 GMT+0000 (Coordinated Universal Time), 
console.log(myDate.toDateString()); //out: Sat Jan 24 2026, universal date string
console.log(myDate.toLocaleString());  //out: 1/24/2026, 8:23:36 AM, date represented in local zone
console.log(typeof myDate);

// creating var holding fixed date
// let myCreatedDate = new Date(2023, 0, 23)  //months start from 0 : "jan" in js,  Date(YYYY, MM, DD)  
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  //Date(YYYY, MM, DD, HH, MM)  
// let myCreatedDate = new Date("2023-01-14") //Date("YYYY-MM-DD"), in this case month be written from 01 to 12

let myCreatedDate = new Date("01-14-2023")  //("MM-DD-YYY")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //out: 1769257355785, time in ms elasped since jan 1, 1970. (necessary in comparing time events, which event happened fisrt or at what time)

console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  //getTime meth gets time in ms elasped from epoch to specific defined date here: (myCreatedDate)
// console.log(Math.floor(Date.now()/1000)); //converting ms in seconds, .floor to ignore decimals

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 because month satarts from 0, Jan = 0
console.log(newDate.getDay()); // Monday = 1, 

// `${newDate.getDay()} and the time is ${} `

// the place where 'default' is written is written in string format to get internationalization format we want for our date, then define in the object how we want our date to be
newDate.toLocaleString('default', {
    weekday: "long",           // shortcut: ctrl + <space>, to get all properties of the object
  
})

// PS: Date() is old and has many problems js is shifting to Temporal() from Date()



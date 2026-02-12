let date = new Date();
let time = date.toLocaleTimeString();
console.log(time);

const clock = document.getElementById("clock");

// set interval runs the given code every fixed interval
setInterval(function () {
  let date = new Date();
  let time = date.toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);

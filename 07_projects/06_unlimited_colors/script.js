const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215) //picks a random decimal number between 0 and 16,777,215 (which is 0xffffff in hexadecimal)
    .toString(16) //Converts that integer into a hexadecimal (base-16) string.
    .padStart(6, "0")}`; //This is a crucial safety step. If the random number is very small (e.g., 255), toString(16) would only return "ff". Since a hex code must be 6 digits, padStart adds zeros to the front (e.g., "0000ff") to ensure the CSS remains valid.
};

let intervalId;

function changeColor() {
  document.querySelector("body").style.backgroundColor = getRandomHexColor();
}

document.querySelector("#start").addEventListener("click", () => {
  if (!intervalId) {
    // intervalId = setInterval(changeColor(), 1000);  //BAD because: The setInterval function expects a reference to the function, not the result of calling it, use parantheses only when you want to call the function immediately and pass its result to setInterval, but in this case we want to pass the function itself to setInterval so that it can call it every 1000 milliseconds.
    intervalId = setInterval(changeColor, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", () => {
  // Clear the interval using the shared variable
  clearInterval(intervalId);

  intervalId = null; //because if we don't set intervalId to null, then when we click start button again, it won't work because the condition !intervalId will be false since intervalId still holds the previous interval ID, so by setting it to null we ensure that the condition will be true and the new interval will be created when we click start button again.
});

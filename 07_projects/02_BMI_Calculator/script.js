const form = document.querySelector("form");
// we shouldnt store height or weight value from form here cause it'll give you empty value, we will access it inside the eventlistener callback to get instantaneous value

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value); //gets value in string so parseInt to convert into int
  const weight = parseInt(document.querySelector("#weight").value);

  result = document.querySelector("#result");

  if (height === "" || height <= 0 || isNaN(height)) {
    // a failsafe to check the input is valid
    result.textContent = "Please give a valid height";
  } else {
    const heightInM = height / 100;
    const bmi = (weight / (heightInM * heightInM)).toFixed(1);

    let message = "";

    if (bmi < 18.6) {
      message = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = "Normal Range";
    } else {
      // This covers everything greater than 24.9
      message = "Overweight";
    }

    // Display the result
    result.textContent = `${bmi} : ${message}`;
  }
});

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// using direct style application to body
buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target.id);
    const color = e.target.id;
    switch (color) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "blue":
        body.style.backgroundColor = "blue";
        break;

      case "white":
        body.style.backgroundColor = "white";
        break;

      case "yellow":
        body.style.backgroundColor = "yellow";
        break;

      default:
        body.style.backgroundColor = "white";
        break;
    }
  });
});

//using setAttribute to add id to body tag (this is bad: because it overrides id of that tag)
// buttons.forEach((btn) => {
//   btn.addEventListener('click', function (e) {
//     // console.log(e);
//     console.log(e.target.id);
//     const color = e.target.id;
//     switch (color) {
//       case 'grey':
//         body.setAttribute('id', 'grey');
//         break;

//       case 'blue':
//         body.setAttribute('id', 'blue');
//         break;

//       case 'white':
//         body.setAttribute('id', 'white');
//         break;

//       case 'yellow':
//         body.setAttribute('id', 'yellow');
//         break;

//       default:
//         body.style.backgroundColor = 'white';
//         break;
//     }
//   });
// });

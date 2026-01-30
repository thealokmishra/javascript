// switch statement is used to check multiple cases and executes code based on matching case
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "march"; //defining a key for switch statement
//  shift + alt + down : duplicate selected code
switch (month) {
  case "jan":
    console.log("January");
    break; //break keyword is used to break the switch statement when a case is matched, otherwise it will continue to the next case
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}

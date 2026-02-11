// DOM manipulation
// get hold of the element by id and manipulate it's properties
document.getElementById("id"); //get hold of the element by id
document.getElementById("id").innerHTML = "Hello World"; //change the innerhtml
document.getElementById("id").style.color = "red"; //change the color
document.getElementById("id").style.fontSize = "30px"; //change the font size
document.getElementsByClassName("class"); //get all the elements with given class
document.getElementsByTagName("tag"); //get all the elements with given tag

document.getElementById("title").getAttribute("id"); //get id of the element with given id
document.getElementById("title").getAttribute("class"); //get class

// remember that class setter always override the current class so you have to provide all the classes you want
document.getElementById("title").setAttribute("class", "heading"); //set class

//storing getter as a const
// setting multiple styles
const title = document.getElementById("title");

title.style.backgroundColor = "brown";

title.style.borderRadius = "15xp";

title.style.borderRadius = "15px";

title.style.padding = "10px";

title.innerText; //gets your visible text
title.textContent; //gets your all text visible or invisible
title.innerHTML; //gets your html inside that element including any other elemnt you added not just txt content,

// querySelector
document.querySelector("h2"); //get first element with given tag
document.querySelectorAll("h2"); //get all the elements with given tag

document.querySelector("#title"); //get first element with given id
document.querySelectorAll("#title"); //get all the elements with given id

document.querySelector(".bg-black"); //get first element with given class
document.querySelectorAll(".bg-black"); //get all the elements with given class

//as you  can see in the example above we can directly use css selectors like h2, #title, .bg-black to get those elements, with tag, id, or class

document.querySelector('input[type="password"]'); //get first input element with given attribute

// when we use querySelectorAll we get a NodeList which is like an array but technically not array, on nodelist we can perform some methods like forEach, length or accessing elements by index etc.
//accessing li item at 0th index and applying style to it
document.querySelectorAll("li")[0].style.color = "green";
const liList = document.querySelectorAll("li"); //can also be stored it in a variable

document.querySelectorAll("li").style.color = "green"; //this will not work, because it'll return a nodelist and dont know where to apply the style

// using forEach to apply style to all the elementsof returned nodelist
liList.forEach((li) => {
  li.style.color = "green";
});

//below method returns htmlcollection instead of nodelist, we can access elements by index
document.getElementsByClassName("list-item")[0]; //accessing element at 0th index of class list-item, any element with class list-item will be selected and returned as htmlcollection

//storing returned  htmlcollection in a variable
const listItems = document.getElementsByClassName("list-item");

//convert htmlcollection to array because normal array and nodelist methodsare not applicable
Array.from(listItems).forEach((li) => {
  li.style.color = "orange";
  li.style.fontSize = "20px";
  li.innerText = "Hello, Alok";
});

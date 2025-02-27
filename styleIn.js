// 1. childNodes, firstChild, nextSibling, previousSibling

const placesContainer = document.getElementById("places-container");
console.log(placesContainer.childNodes); //NodeList(5) [text, h3, text, ul, text]
console.log(placesContainer.firstChild); //#text
console.log(placesContainer.childNodes[3]); //<ul></ul>
console.log(placesContainer.childNodes[3].childNodes); //NodeList(9) [text, li, text, li, text, li, text, li, text]

console.log(placesContainer.childNodes[3].childNodes[2].nextSibling.innerText); //Kuakata

// 2. createElement:
const foodsUl = document.querySelector("#food-container ul");
console.log(foodsUl);

// adding li in ul
const li = document.createElement("li");
li.innerText = "chicken fry";
foodsUl.appendChild(li);

//adding another li in ul
const li2 = document.createElement("li");
li2.innerText = "Sheekh Kabab";
foodsUl.appendChild(li2);

//3. parentNode
// finding parent node of foodsUl
console.log(foodsUl.parentNode); //section#food-container
console.log(foodsUl.parentNode.parentNode); //main
console.log(foodsUl.parentNode.parentNode.parentNode); //body

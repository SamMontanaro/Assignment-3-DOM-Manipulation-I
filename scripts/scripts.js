// 1) Select the section with an id of container without using querySelector.
let container = document.getElementById("container");
console.log(container);

// 2) Select the section with an id of container using querySelector.
let alsoContainer = document.querySelector("#container");
console.log(alsoContainer);

// 3) Select all of the list items with a class of "second".
let listItems = document.querySelectorAll(".second");
console.log(listItems);

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
let thirdListItem = document.querySelector("ol .third");
console.log(thirdListItem);

// 5) Give the section with an id of container the text "Hello!".
container.insertAdjacentText("afterbegin", "Hello!");

// 6) Add the class main to the div with a class of footer.
let footer = document.getElementsByClassName("footer")[0];
footer.classList.add("main");

// 7) Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 8) Create a new li element.
let newLi = document.createElement("li");

// 9) Give the li the text "four".
newLi.innerText = "four";

// 10) Append the li to the ul element.
let ul = document.querySelector("ul");
ul.append(newLi);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let ol = document.querySelector("ol");
let olItems = Array.from(ol.children);
olItems.forEach(element => {element.style.backgroundColor = "green"});

// 13) Remove the div with a class of footer.
footer.remove();
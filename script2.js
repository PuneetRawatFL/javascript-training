//DOM manipulation
let heading = document.getElementById("heading"); //selecting with id
console.log(heading);
let para = document.getElementsByClassName("content"); //selecting with class
console.log(para);
let h2 = document.getElementsByTagName("h2"); //selecting with tag
console.log(h2);

//query selector
let element = document.querySelector("#heading"); //for id
console.log(element);
let element2 = document.querySelector(".content"); //for class
console.log(element2);
let element3 = document.querySelector("h2"); //for tag
console.log(element3);

//properties
console.log(element.tagName); //returns tagname
console.log(element2.innerText); //returns text contents
console.log(element3.innerHTML); //returns html contents
console.log(element.getAttribute("id")); //returns id attribute

//updating
element.innerText = element.innerText + " Advanced topics";
element3.innerHTML = "<p>Bye bye </p>";
element2.setAttribute("class", "para1"); //changes class attribute
element.style.color = "red"; //changes style

//insert elements
let newBtn = document.createElement("button"); //create element
newBtn.innerText = "click me!";
element3.append(newBtn); //append at the end of node
element3.prepend(newBtn); //append at the start of node
element2.before(newBtn); //append before node
element2.after(newBtn); //append after node
newBtn.remove(); // removes node

//traversing through dom
let list = document.querySelector(".list");
console.log(list.parentElement); //returns parent element
console.log(list.childElementCount); //returns child element count
console.log(list.firstChild); //returns first child
console.log(list.lastChild); //returns last child

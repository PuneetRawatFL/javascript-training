let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

//prints event details
btn2.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

//triggers when button is clicked
btn2.addEventListener("click", () => {
    console.log("Button is clicked");
});

//triggers when cursor is hovered over button
btn2.addEventListener("mouseover", () => {
    console.log("You are inside button");
});

//remove event listener
let fn = () => {
    console.log("Hello");
};

btn1.addEventListener("click", fn);
btn1.removeEventListener("click", fn); //callback should be the same

//changing light mode
let mode = "light"; //keeps value of mode
let body = document.querySelector("body"); //select body element
btn1.addEventListener("click", () => {
    if (mode == "light") {
        mode = "dark";
        btn1.innerText = "Light"; //changes inner text
        body.style.backgroundColor = "black"; //adds background color
        body.style.color = "white"; //changes font color
    } else if (mode == "dark") {
        mode = "light";
        btn1.innerText = "Dark"; //changes inner text
        body.style.backgroundColor = "white"; //adds background color
        body.style.color = "black"; //changes font color
    }
});

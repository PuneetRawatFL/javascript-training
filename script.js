//JAVASCRIPT BASICS

console.log("Hello"); // print function

// variables and constansts - containers for storing values
// variable examples
var a = 12;
console.log(a);
var a = 24;
console.log(a);

// constant examples
const aa = 6;
console.log(aa);
// aa = 7; // redeclartion error
console.log(aa);

// let examples
let c = 2;
console.log(c);

//data types in js
var num = 1; //number
var str = "String"; //string
var boolean = true; //boolean

//arrays in javascript
var arr = [1, 2, 3, 4, 5];
console.log(arr);
//array methods examples
arr.push(6); //pushes a new element
console.log(arr);
arr.pop(); //removes last element
console.log(arr);
arr.unshift(0); //add element at begining
console.log(arr);
arr.shift(); //removes first elemtn
console.log(arr);
//map function
let newArr = arr.map((val) => {
    return val * 2;
});
console.log(newArr); //creates new array

//js object examples
var obj = {
    name: "alex",
    age: 12,
    city: "jaipur",
};
console.log(obj.name); //prints name
console.log(obj.age); //prints age
console.log(obj.city); //prints city

// hoisting examples
console.log(d); //undefined
var d = 10;
console.log(d);

//conditionals
//if-else examples
if (2 > 3)
    //returns false
    console.log("True");
else console.log("False");

//loops
//for loop examples
console.log("For-loop");
for (let i = 0; i < 10; i++) {
    //loop runs from i=0 to i=9
    console.log(i);
}

//while loop example
console.log("While-loop");
let j = 0;
while (j < 5) {
    //runs until the condition turns false
    console.log(j);
    j++;
}

//forEach loop
console.log("FOR-EACH LOOP");
var a = [1, 2, 3, 4, 5, 6];
a.forEach(function (val) {
    //works on every element
    console.log(val + 2);
});
console.log(a); // original array is still the same

//for-in loop
console.log("FOR-IN LOOP");
const person = { firstName: "John", lastName: "Doe", age: 30 };
for (var key in person) {
    //person - object name
    console.log(key); // print keys
    console.log(person[key]); // print values
}

//javascript funtions examples
function abc() {
    console.log("js function");
}
//parameterised function
function abc2(val) {
    console.log(val);
}
abc();
abc2(12);

//arrow function example
var add = (a, b) => {
    return a + b;
};
var ans = add(2, 3);
console.log(ans);

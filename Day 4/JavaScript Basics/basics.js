//varaible in Javascript {var, let, const}
var name = "Harshad";
let age = 22;
const isStudent = false;0
console.log(name, age, isStudent); //Harshad 22 false


//Strings in Javascript
let message = "Hello, World!";
console.log(message.length); //13
console.log(message.toUpperCase()); //HELLO, WORLD!
console.log(message.toLowerCase()); //hello, world!
console.log(message.indexOf("World"));      //7     
console.log(message.slice(0, 5)); //Hello
console.log(message.replace("World", "JavaScript")); //Hello, JavaScript!
console.log(message.split(", ")); //['Hello', 'World!']


//Arrays in Javascript  
let numbers = [1, 2, 3, 4, 5];      
console.log(numbers.length); //5
console.log(numbers[0]); //1
numbers.push(6);    //Add element at the end    
console.log(numbers); //[1, 2, 3, 4, 5, 6]
numbers.pop(); //Remove last element
console.log(numbers); //[1, 2, 3, 4, 5]
numbers.shift(); //Remove first element
console.log(numbers); //[2, 3, 4, 5]
numbers.unshift(1); //Add element at the beginning
console.log(numbers); //[1, 2, 3, 4, 5]
console.log(numbers.indexOf(3)); //2
console.log(numbers.slice(1, 4)); //[2, 3, 4]   
console.log(numbers.join(", ")); //1, 2, 3, 4, 5      


//2. Loops

//For loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration:", i);
}   

//While loop
let j = 0;      
while (j < 5) {
    console.log("While Loop iteration:", j);
    j++;
}   

//Do-While loop
let k = 0;
do {
    console.log("Do-While Loop iteration:", k);
    k++;
}   while (k < 5);

//for-in loop keys/Indexes
let person = {
  name: "Harshad",
  age: 22,
  city: "Pune"
};
for (let key in person) {
  console.log(key, ":", person[key]);
}

//for-of loop arrays, strings, sets, maps
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

//1. Conditional statements
let score = 85; 
if (score >= 90) {
    console.log("Grade: A");
}   else if (score >= 80) {
    console.log("Grade: B");
}   else if (score >= 70) {
    console.log("Grade: C");
}   else {      
    console.log("Grade: F");
}   //Grade: B


//3. Switch case
let day = 3;
switch (day) {
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break;  
    case 4:
        console.log("Thursday");
        break;          
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;                  
    default:
        console.log("Invalid day");
} //Wednesday


//Functions in Javascript   

function add(x, y) {
    return x + y;
}       
console.log(add(5, 10)); //15



const multiply = function(x, y) {
    return x * y;
}   
console.log(multiply(5, 10)); //50




const divide = (x, y) => x / y;
console.log(divide(10, 2)); //5
//Arrow function with block body
const subtract = (x, y) => {
    return x - y;
}


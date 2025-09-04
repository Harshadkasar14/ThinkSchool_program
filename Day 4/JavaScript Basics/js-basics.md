
## 📌 Overview
This session covers:
- Variables
- Data types, Operators
- Strings
- Arrays
- Loops
- Conditionals
-Exercise on all above

---

## 🔹 1. Variables
```js
let name = "Harshad";   // block scoped
const pi = 3.14;        // constant value 
var age = 25;           // function scoped
console.log(name, pi, age);

## Data types in Javascript
//1. Primitive data types
let str = "Hello, World!"; //String data type
let num = 42; //Number data type
let isTrue = true; //Boolean data type
let undef;inedVar; //Undefined data type
let nullVar = null; //Null data type
let sym = Symbol("unique"); //Symbol data type
let bigIntNum = 9007199254740991n; //BigInt data type           

console.log(typeof str); //string
console.log(typeof num); //number
console.log(typeof isTrue); //boolean
console.log(typeof undefinedVar); //undefined
console.log(typeof nullVar); //object (this is a known quirk in JavaScript)
console.log(typeof sym); //symbol
console.log(typeof bigIntNum); //bigint   

//2. Non-primitive data types
let arr = [1, 2, 3, 4, 5]; //Array
let obj = { name: "Harshad", age: 22 }; //Object
function greet() { //Function
    console.log("Hello!");
}   


//Basic operators in Javascript
let a = 10;
let b = 3;      
console.log(a + b); //Addition: 13
console.log(a - b); //Subtraction: 7
console.log(a * b); //Multiplication: 30
console.log(a / b); //Division: 3.3333...
console.log(a % b); //Modulus: 1
console.log(a ** b); //Exponentiation: 1000 
a++; //Increment
console.log(a); //11
b--; //Decrement
console.log(b); //2 

//Comparison operators
console.log(a == b); //Equal: false
console.log(a === b); //Strict Equal: false
console.log(a != b); //Not Equal: true
console.log(a !== b); //Strict Not Equal: true
console.log(a > b); //Greater Than: true
console.log(a < b); //Less Than: false
console.log(a >= b); //Greater Than or Equal: true
console.log(a <= b); //Less Than or Equal: false
//Logical operators
console.log(a > 5 && b < 5); //Logical AND: true
console.log(a > 5 || b > 5); //Logical OR: true
console.log(!(a > 5)); //Logical NOT: false  


//Control structures in Javascript

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

//for-in loop
**Used to iterate over keys/indexes of an object or array.
let person = {
  name: "Harshad",
  age: 22,
  city: "Pune"
};
for (let key in person) {
  console.log(key, ":", person[key]);
}
// Output:
// name : Harshad
// age : 22
// city : Pune

//for-of loop
Used to iterate over values of an iterable (like arrays, strings, sets, maps).
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Mango

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


##**Exercises

//1.Declare a variable city and assign your hometown. Print it.
let city = "Pune";
console.log(city);

//Create two variables x and y, assign numbers, and print their sum.
let x = 10;
let y = 20;
console.log("Sum:", x + y);

//Swap two numbers without using a third variable.
let x = 5, y = 8;
x = x + y;
y = x - y;
x = x - y;
console.log("x:", x, "y:", y); // x: 8 y: 5



//Print second element from fruits.
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]); // Banana

//Add "Orange" and remove last element.
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
fruits.pop();
console.log(fruits);

//Find largest number in [4, 9, 2, 7, 5].
let arr = [4, 9, 2, 7, 5];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log("Largest:", largest); // 9


//Find length of "JavaScript is awesome".
let text = "JavaScript is awesome";
console.log("Length:", text.length);

//Extract "Script" from "JavaScript".
let word = "JavaScript";
console.log(word.substring(4, 10)); // Script

//Reverse a string "JavaScript".
let str = "JavaScript";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed); // tpircSavaJ

//Check if "madam" is a palindrome.
let word = "madam";
let isPalindrome = true;
for (let i = 0; i < word.length / 2; i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome); // true




//Check if number is positive, negative, or zero.
let num = -5;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//Check voting eligibility.
let age = 18;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}


//Check divisibility by 3 and 5
let number = 15;
if (number % 3 === 0 && number % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else {
  console.log("Not divisible by both 3 and 5");
}







// Creating an object
const student = {
  name: "Harshad",
  age: 22,
  course: "Web Development",
  skills: ["HTML", "CSS", "JavaScript"],

  greet: function () {
    return `Hi, I'm ${this.name} and I'm learning ${this.course}.`;
  },
};
console.log(student.greet());


// Accessing properties
console.log("Name:", student.name); // Dot notation
console.log("Course:", student["course"]); // Bracket notation


// Adding new property
student.city = "Pune";
console.log("After adding city:", student);


// Iterating over object properties
console.log("Iterating with for...in:");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}


// Object.keys / Object.values / Object.entries
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));


// Nested objects
const employee = {
  id: 101,
  name: "Amit",
  address: {
    city: "Pune",
    pin: 411001,
  },
};
console.log(employee.address.city); // Pune
console.log(employee.address.pin);  // 411001


// Object with array property
const library = {
    name: "City Library",
    books: ["JavaScript Basics", "HTML & CSS", "React Guide"],
};

console.log(library.name); // City Library
console.log(library.books); // ["JavaScript Basics", "HTML & CSS", "React Guide"]
console.log(library.books[1]); // HTML & CSS


// Array of objects
const school = {
  name: "Greenwood School",
  students: [
    { name: "Ravi", age: 10 },
    { name: "Sneha", age: 12 },
  ],
};

console.log(school.name); // Greenwood School
console.log(school.students[0].name); // Ravi
console.log(school.students[1].age);  // 12
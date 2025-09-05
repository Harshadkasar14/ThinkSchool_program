
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Harshad")); // Hello, Harshad!


// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log("Sum:", add(5, 3)); // 8


// Arrow Function
const multiply = (a, b) => a * b;
console.log("Product:", multiply(4, 6)); // 24


// Block Scope with let & const
function testScope() {
  if (true) {
    let x = 10; // block-scoped
    const y = 20; // block-scoped
    var z = 30; // function-scoped
    console.log("Inside block:", x, y, z);
  }
  // console.log(x); // ❌ Error: x is not defined
  // console.log(y); // ❌ Error: y is not defined
  console.log("Outside block (var works):", z); // 30
}
testScope();


// Function returning another function (closure)
function outerFunc(outerVar) {
  return function innerFunc(innerVar) {
    return `Outer: ${outerVar}, Inner: ${innerVar}`;
  };
}
const closureExample = outerFunc("Scope");
console.log(closureExample("Function")); // Outer: Scope, Inner: Function


//Function with Condition (Grade Calculator)
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 75) return "B";
  else if (score >= 50) return "C";
  else return "F";
}
console.log(getGrade(85)); // B
console.log(getGrade(40)); // F


//Function that Uses a Loop
function sumArray(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumArray([10, 20, 30])); // 60


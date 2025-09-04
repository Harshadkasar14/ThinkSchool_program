
// SELECT ELEMENTS
const greetBtn = document.getElementById("greetBtn");
const input = document.getElementById("nameInput");
const message = document.getElementById("message");
const display = document.getElementById("display");
const boxes = [document.getElementById("box1"), document.getElementById("box2")];
const form = document.getElementById("myForm");


// CLICK EVENT
greetBtn.addEventListener("click", () => {
    message.textContent = `Hello, ${input.value || "Guest"}!`;
    message.classList.add("highlight");
});


// DOUBLE-CLICK EVENT
greetBtn.addEventListener("dblclick", () => {
    message.textContent = "You double-clicked the button!";
    message.classList.remove("highlight");
});


// MOUSEOVER & MOUSEOUT EVENTS
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "skyblue";
        box.textContent = "Mouse Over!";
    });
    box.addEventListener("mouseout", () => {
        box.style.backgroundColor = "lightgray";
        box.textContent = "";
    });
});


// MOUSEMOVE EVENT
boxes.forEach(box => {
    box.addEventListener("mousemove", (e) => {
        box.textContent = `X:${e.offsetX} Y:${e.offsetY}`;
    });
});


// INPUT EVENT (REAL-TIME TYPING)
input.addEventListener("input", () => {
    display.textContent = input.value;
});


// FOCUS & BLUR EVENTS

input.addEventListener("focus", () => {
    input.style.border = "2px solid green";
});
input.addEventListener("blur", () => {
    input.style.border = "1px solid black";
});


// CHANGE EVENT
input.addEventListener("change", () => {
    console.log(`Input changed to: ${input.value}`);
});


// FORM SUBMIT EVENT
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    const username = form.elements["username"].value;
    alert(`Form submitted by: ${username}`);
});

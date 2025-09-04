DOM Notes – Selecting Elements, Listening to Events, Updating Text & Classes

## 1. Selecting Elements

To manipulate the HTML page, you first need to select the elements you want to work with.

Methods to select elements:

document.getElementById("id") → Selects a single element by its ID.

document.getElementsByClassName("class") → Selects all elements with a class (HTMLCollection).

document.getElementsByTagName("tag") → Selects all elements of a specific tag.

document.querySelector("selector") → Selects the first element matching a CSS selector.

document.querySelectorAll("selector") → Selects all elements matching a CSS selector (NodeList).


## 2. Listening to Events

Events are actions performed by the user (clicking, typing, hovering) or by the browser (page load, resize).

Common events for beginners:

click → when a button or element is clicked

dblclick → double-click on an element

mouseover / mouseout → when mouse enters or leaves an element

input → when typing in an input field

focus / blur → when an input is active or loses focus

submit → when a form is submitted


## 3. Updating Text

You can change the text of elements dynamically:

element.textContent → changes plain text.

element.innerHTML → changes HTML content inside an element.


## 4. Updating Classes

Classes control styling and behavior in HTML. You can add, remove, or toggle classes with JavaScript.

element.classList.add("className") → adds a class

element.classList.remove("className") → removes a class

element.classList.toggle("className") → adds if missing, removes if present

element.classList.contains("className") → checks if class exists



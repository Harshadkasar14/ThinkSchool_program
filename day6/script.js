// Full data for HTML, CSS, and JavaScript 
const data = {
  HTML: {
    "Text / Headings": [
    { word: "<h1> to <h6>", desc: "Heading tags from largest to smallest", code: "<h1>Heading 1</h1>" },
    { word: "<p>", desc: "Paragraph of text", code: "<p>This is a paragraph.</p>" },
    { word: "<span>", desc: "Inline text container", code: "<span>Inline text</span>" },
    { word: "<strong>", desc: "Important/bold text", code: "<strong>Bold text</strong>" },
    { word: "<em>", desc: "Emphasized text", code: "<em>Italic text</em>" }
  ],
  "Semantic Elements": [
      { word: "<header>", desc: "Represents the header of a page or section. Usually contains logo, navigation, or heading.", code: "<header>\n  <h1>Site Title</h1>\n  <nav>Navigation here</nav>\n</header>" },
      { word: "<nav>", desc: "Defines a section of navigation links.", code: "<nav>\n  <a href='#home'>Home</a>\n  <a href='#about'>About</a>\n</nav>" },
      { word: "<main>", desc: "Represents the main content of the page.", code: "<main>\n  <h2>Main Content</h2>\n  <p>This is the main area.</p>\n</main>" },
      { word: "<section>", desc: "Defines a thematic grouping of content.", code: "<section>\n  <h2>Introduction</h2>\n  <p>Some intro text...</p>\n</section>" },
      { word: "<article>", desc: "Defines self-contained, independent content like blog posts, news, or articles.", code: "<article>\n  <h2>Blog Title</h2>\n  <p>Post content...</p>\n</article>" },
      { word: "<aside>", desc: "Represents content indirectly related to the main content (like a sidebar).", code: "<aside>\n  <h3>Related Links</h3>\n</aside>" },
      { word: "<footer>", desc: "Defines the footer for a page or section.", code: "<footer>\n  <p>© 2025 My Site</p>\n</footer>" },
      { word: "<figure>", desc: "Encapsulates media such as images, diagrams, or code with a caption.", code: "<figure>\n  <img src='image.jpg' alt='Example'>\n  <figcaption>Image description</figcaption>\n</figure>" },
      { word: "<figcaption>", desc: "Provides a caption for a <figure> element.", code: "<figure>\n  <img src='cat.jpg'>\n  <figcaption>A cute cat</figcaption>\n</figure>" },
      { word: "<mark>", desc: "Highlights text for reference or emphasis.", code: "<p>This is <mark>important</mark> text.</p>" },
      { word: "<time>", desc: "Represents a date or time.", code: "<time datetime='2025-09-06'>September 6, 2025</time>" },
      { word: "<address>", desc: "Provides contact information.", code: "<address>\n  Written by Harshad<br>\n  Pune, India\n</address>" },
      { word: "<details>", desc: "Creates a collapsible disclosure widget.", code: "<details>\n  <summary>More info</summary>\n  <p>Hidden details...</p>\n</details>" },
      { word: "<summary>", desc: "Defines a summary or heading for a <details> element.", code: "<details>\n  <summary>Click me</summary>\n  <p>More info...</p>\n</details>" }
    ],
    "Non-Semantic Elements": [
      { word: "<div>", desc: "Generic block-level container with no semantic meaning.", code: "<div class='container'>Content</div>" },
      { word: "<span>", desc: "Generic inline container with no semantic meaning.", code: "<p>Hello <span class='highlight'>World</span></p>" }
    ],
  "Links": [
    { word: "<a>", desc: "Anchor / hyperlink", code: "<a href='https://example.com'>Visit</a>" }
  ],

  "Images / Media": [
    { word: "<img>", desc: "Image element", code: "<img src='image.jpg' alt='Description'>" },
    { word: "<video>", desc: "Video element", code: "<video controls src='video.mp4'></video>" },
    { word: "<audio>", desc: "Audio element", code: "<audio controls src='audio.mp3'></audio>" }
  ],

  "Lists": [
    { word: "<ul>", desc: "Unordered list", code: "<ul><li>Item 1</li><li>Item 2</li></ul>" },
    { word: "<ol>", desc: "Ordered list", code: "<ol><li>Item 1</li><li>Item 2</li></ol>" },
    { word: "<li>", desc: "List item", code: "<li>Item</li>" }
  ],

  "Forms / Inputs": [
    { word: "<form>", desc: "Form container", code: "<form action='#'><input type='text'></form>" },
    { word: "<input>", desc: "Input field", code: "<input type='text' placeholder='Enter text'>" },
    { word: "<textarea>", desc: "Multi-line input", code: "<textarea>Type here</textarea>" },
    { word: "<button>", desc: "Clickable button", code: "<button>Click me</button>" },
    { word: "<label>", desc: "Label for input", code: "<label for='name'>Name:</label>" },
    { word: "<select>", desc: "Dropdown select", code: "<select><option>Option 1</option></select>" },
    { word: "<option>", desc: "Option inside select", code: "<option>Option 1</option>" }
  ],

  "Tables": [
    { word: "<table>", desc: "Table container", code: "<table><tr><td>Data</td></tr></table>" },
    { word: "<tr>", desc: "Table row", code: "<tr><td>Data</td></tr>" },
    { word: "<td>", desc: "Table cell", code: "<td>Data</td>" },
    { word: "<th>", desc: "Table header cell", code: "<th>Header</th>" },
    { word: "<thead>", desc: "Table header section", code: "<thead><tr><th>Header</th></tr></thead>" },
    { word: "<tbody>", desc: "Table body section", code: "<tbody><tr><td>Data</td></tr></tbody>" },
    { word: "<tfoot>", desc: "Table footer section", code: "<tfoot><tr><td>Footer</td></tr></tfoot>" }
  ],

  "Other": [
    { word: "<div>", desc: "Generic block container", code: "<div>Content</div>" },
    { word: "<br>", desc: "Line break", code: "<p>Line1<br>Line2</p>" },
    { word: "<hr>", desc: "Horizontal rule / line", code: "<hr>" },
    { word: "<meta>", desc: "Metadata for the document", code: "<meta charset='UTF-8'>" },
    { word: "<link>", desc: "Link external resource (like CSS)", code: "<link rel='stylesheet' href='style.css'>" },
    { word: "<script>", desc: "Include JavaScript", code: "<script src='app.js'></script>" }
  ]
  },
     CSS: {
      "Background": [
    { word: "background-color", desc: "Sets background color", code: "div { background-color: #f0f0f0; }" },
    { word: "background-image", desc: "Sets background image", code: "div { background-image: url('image.jpg'); }" },
    { word: "background-size", desc: "Adjusts size of background", code: "div { background-size: cover; }" },
    { word: "background-repeat", desc: "Repeat background or not", code: "div { background-repeat: no-repeat; }" },
    { word: "background-position", desc: "Position of background image", code: "div { background-position: center; }" }
  ],

  "Text": [
    { word: "color", desc: "Text color", code: "p { color: #333; }" },
    { word: "font-size", desc: "Size of text", code: "p { font-size: 16px; }" },
    { word: "font-weight", desc: "Boldness of text", code: "p { font-weight: bold; }" },
    { word: "text-align", desc: "Aligns text horizontally", code: "p { text-align: center; }" },
    { word: "line-height", desc: "Spacing between lines", code: "p { line-height: 1.5; }" },
    { word: "letter-spacing", desc: "Spacing between letters", code: "p { letter-spacing: 1px; }" },
    { word: "text-transform", desc: "Change text case", code: "p { text-transform: uppercase; }" }
  ],

  "Flexbox": [
    { word: "display:flex", desc: "Turns container into flexbox", code: ".container { display: flex; }" },
    { word: "flex-direction", desc: "Direction of flex items", code: ".container { flex-direction: row; }" },
    { word: "justify-content", desc: "Aligns items horizontally", code: ".container { justify-content: center; }" },
    { word: "align-items", desc: "Aligns items vertically", code: ".container { align-items: center; }" },
    { word: "flex-wrap", desc: "Allow items to wrap", code: ".container { flex-wrap: wrap; }" }
  ],

  "Box Model": [
    { word: "margin", desc: "Outside spacing", code: "div { margin: 10px; }" },
    { word: "padding", desc: "Inside spacing", code: "div { padding: 10px; }" },
    { word: "border", desc: "Border around element", code: "div { border: 1px solid black; }" },
    { word: "width", desc: "Width of element", code: "div { width: 200px; }" },
    { word: "height", desc: "Height of element", code: "div { height: 100px; }" },
    { word: "box-sizing", desc: "Include padding & border in width/height", code: "div { box-sizing: border-box; }" }
  ],

  "Grid": [
    { word: "display:grid", desc: "Turns container into grid", code: ".grid { display: grid; }" },
    { word: "grid-template-columns", desc: "Define columns", code: ".grid { grid-template-columns: 1fr 2fr; }" },
    { word: "grid-template-rows", desc: "Define rows", code: ".grid { grid-template-rows: 100px 200px; }" },
    { word: "gap", desc: "Spacing between grid items", code: ".grid { gap: 10px; }" },
    { word: "justify-items", desc: "Align items horizontally in cell", code: ".grid { justify-items: center; }" },
    { word: "align-items", desc: "Align items vertically in cell", code: ".grid { align-items: center; }" }
  ],

  "Positioning": [
    { word: "position", desc: "Position element (static, relative, absolute, fixed, sticky)", code: "div { position: absolute; top: 10px; left: 10px; }" },
    { word: "top / right / bottom / left", desc: "Offset from container", code: "div { top: 10px; left: 20px; }" },
    { word: "z-index", desc: "Stacking order", code: "div { z-index: 10; }" }
  ],

  "Effects": [
    { word: "transition", desc: "Smoothly animate property changes", code: "div { transition: all 0.3s ease; }" },
    { word: "transform", desc: "Move, scale, rotate, skew", code: "div { transform: scale(1.1) rotate(10deg); }" },
    { word: "box-shadow", desc: "Adds shadow", code: "div { box-shadow: 2px 2px 10px rgba(0,0,0,0.2); }" },
    { word: "opacity", desc: "Transparency", code: "div { opacity: 0.8; }" }
  ],

  "Responsive": [
    { word: "@media", desc: "Apply styles based on screen size", code: "@media screen and (max-width: 768px) { div { width: 100%; } }" },
    { word: "max-width / min-width", desc: "Set responsive element sizes", code: "div { max-width: 100%; }" },
    { word: "vw / vh / %", desc: "Responsive units", code: "div { width: 50vw; height: 50vh; }" }
  ]
  },
  JavaScript: {
    "Variables": [
      { word: "let", desc: "Block scoped variable", code: "let name = 'Harshad';" },
      { word: "const", desc: "Constant variable", code: "const pi = 3.14;" },
      { word: "var", desc: "Global scoped variable", code: "var x= 16;" }
    ],
     "jsLoops" : [
  { word: "for loop", desc: "Iterates over values a specific number of times", code: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}" },
  { word: "while loop", desc: "Executes a block as long as condition is true", code: "let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}" },
  { word: "do while loop", desc: "Executes block at least once, then checks condition", code: "let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 5);" },
  { word: "for...in loop", desc: "Iterates over object keys", code: "const obj = {a:1, b:2};\nfor (let key in obj) {\n  console.log(key, obj[key]);\n}" },
  { word: "for...of loop", desc: "Iterates over iterable values (arrays, strings, etc.)", code: "const arr = [10, 20, 30];\nfor (let value of arr) {\n  console.log(value);\n}" }
],
    "Functions": [
      { word: "function", desc: "Reusable block of code", code: "function greet(){ console.log('Hi'); }" }
    ],
    "Selectors": [
    { word: "document.getElementById", desc: "Select element by ID", code: "const el = document.getElementById('myId');" },
    { word: "document.querySelector", desc: "Select first matching element", code: "const el = document.querySelector('.myClass');" },
    { word: "document.querySelectorAll", desc: "Select all matching elements", code: "const items = document.querySelectorAll('li');" },
    { word: "document.getElementsByClassName", desc: "Select elements by class", code: "const els = document.getElementsByClassName('myClass');" },
    { word: "document.getElementsByTagName", desc: "Select elements by tag name", code: "const els = document.getElementsByTagName('div');" }
  ],

  "Content Manipulation": [
    { word: "innerHTML", desc: "Get or set HTML inside element", code: "el.innerHTML = '<p>Hello</p>';" },
    { word: "textContent", desc: "Get or set text inside element", code: "el.textContent = 'Hello World';" },
    { word: "value", desc: "Get or set input value", code: "input.value = 'Text';" }
  ],

  "Attributes": [
    { word: "getAttribute", desc: "Get value of an attribute", code: "el.getAttribute('href');" },
    { word: "setAttribute", desc: "Set value of an attribute", code: "el.setAttribute('src', 'image.jpg');" },
    { word: "removeAttribute", desc: "Remove an attribute", code: "el.removeAttribute('class');" },
    { word: "classList.add", desc: "Add a CSS class", code: "el.classList.add('active');" },
    { word: "classList.remove", desc: "Remove a CSS class", code: "el.classList.remove('hidden');" },
    { word: "classList.toggle", desc: "Toggle a CSS class", code: "el.classList.toggle('show');" }
  ],

  "Events": [
    { word: "addEventListener", desc: "Attach event to element", code: "el.addEventListener('click', () => { alert('Clicked'); });" },
    { word: "removeEventListener", desc: "Remove event from element", code: "el.removeEventListener('click', handler);" },
    { word: "onclick", desc: "Attach click event directly", code: "el.onclick = () => { console.log('Clicked'); };" },
    { word: "oninput", desc: "Input change event", code: "input.oninput = () => { console.log(input.value); };" }
  ],

  "DOM Manipulation": [
    { word: "appendChild", desc: "Add child element", code: "parent.appendChild(child);" },
    { word: "removeChild", desc: "Remove child element", code: "parent.removeChild(child);" },
    { word: "replaceChild", desc: "Replace child element", code: "parent.replaceChild(newChild, oldChild);" },
    { word: "createElement", desc: "Create new element", code: "const div = document.createElement('div');" },
    { word: "cloneNode", desc: "Clone an element", code: "const clone = el.cloneNode(true);" }
  ],

  "Style & CSS": [
    { word: "style.property", desc: "Set inline style", code: "el.style.color = 'red';" },
    { word: "className", desc: "Set class name", code: "el.className = 'active';" }
  ],

  "Traversal": [
    { word: "parentNode", desc: "Get parent element", code: "const parent = el.parentNode;" },
    { word: "children", desc: "Get child elements", code: "const kids = el.children;" },
    { word: "nextElementSibling", desc: "Next sibling element", code: "const next = el.nextElementSibling;" },
    { word: "previousElementSibling", desc: "Previous sibling element", code: "const prev = el.previousElementSibling;" }
  ]
  }
};

// DOM refs
const listContainer = document.getElementById("keywordList");
const detailSection = document.getElementById("detailSection");
const searchBox = document.getElementById("searchBox");
const tabBtns = document.querySelectorAll(".tab-btn");
const categoryTitle = document.getElementById("categoryTitle");

let currentTab = "HTML";

// Render list of groups
function renderList(tab = currentTab) {
  listContainer.innerHTML = "";
  categoryTitle.textContent = `${tab} Keywords`;

  const groups = data[tab];
  Object.keys(groups).forEach(groupName => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "group";

    const heading = document.createElement("h4");
    heading.textContent = groupName;
    heading.style.cursor = "pointer";
    heading.addEventListener("click", () => showGroup(tab, groupName));
    groupDiv.appendChild(heading);

    listContainer.appendChild(groupDiv);
  });
}

// Show all items of a group in the main content
function showGroup(tab, groupName) {
  const items = data[tab][groupName];
  detailSection.innerHTML = `<h2>${groupName}</h2>`;

  items.forEach(item => {
    const block = document.createElement("div");
    block.className = "item-block";
    block.innerHTML = `
      <h3>${escapeHtml(item.word)}</h3>
      <p>${escapeHtml(item.desc)}</p>
      <pre>${escapeHtml(item.code)}</pre>
    `;
    detailSection.appendChild(block);
  });
  detailSection.scrollTop = 0;
}

// Escape HTML
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Tab switching 
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    renderList(currentTab);
    detailSection.innerHTML = `<h2>${currentTab} Keywords</h2><p>Click a group to see all elements here.</p>`;
  });
});

// Initial render
renderList();

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


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
    { word: "background-repeat", desc: "Repeat background or not", code: "div { background-repeat: no-repeat; }" }
  ],
  "Text": [
    { word: "color", desc: "Text color", code: "p { color: #333; }" },
    { word: "font-size", desc: "Size of text", code: "p { font-size: 16px; }" },
    { word: "font-weight", desc: "Boldness of text", code: "p { font-weight: bold; }" },
    { word: "text-align", desc: "Aligns text horizontally", code: "p { text-align: center; }" },
    { word: "line-height", desc: "Spacing between lines", code: "p { line-height: 1.5; }" }
  ],
    "Flexbox": [
      { word: "display:flex", desc: "Turns container into flexbox", code: ".container { display: flex; }" },
      { word: "justify-content", desc: "Aligns items horizontally", code: ".container { justify-content: center; }" },
      { word: "align-items", desc: "Aligns items vertically", code: ".container { align-items: center; }" }
    ],
    "Box Model": [
      { word: "margin", desc: "Outside spacing", code: "div { margin: 10px; }" },
      { word: "padding", desc: "Inside spacing", code: "div { padding: 10px; }" },
      { word: "border", desc: "Border around element", code: "div { border: 1px solid black; }" }
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

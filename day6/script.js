const data = {
  HTML: {
    "Semantic Elements": [
      { word: "<header>", desc: "Defines header section", code: "<header><h1>Title</h1></header>" },
      { word: "<footer>", desc: "Defines footer section", code: "<footer>© 2025</footer>" },
      { word: "<article>", desc: "Independent content block", code: "<article><h2>Post</h2></article>" }
    ],
    "Non-Semantic Elements": [
      { word: "<div>", desc: "Generic container", code: "<div>Content</div>" },
      { word: "<span>", desc: "Inline container", code: "<span>Text</span>" }
    ]
  },
  CSS: {
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
      { word: "const", desc: "Constant variable", code: "const pi = 3.14;" }
    ],
    "Control Flow": [
      { word: "if/else", desc: "Conditional statement", code: "if (x > 5) { } else { }" },
      { word: "for loop", desc: "Iterates over values", code: "for (let i=0; i<5; i++) {}" }
    ],
    "Functions": [
      { word: "function", desc: "Reusable block of code", code: "function greet(){ console.log('Hi'); }" }
    ]
  }
};

const listContainer = document.getElementById("keywordList");
const detailSection = document.getElementById("detailSection");
const searchBox = document.getElementById("searchBox");
const tabBtns = document.querySelectorAll(".tab-btn");
const categoryTitle = document.getElementById("categoryTitle");

let currentTab = "HTML";

// Render list by category
function renderList(tab = currentTab, search = "") {
  listContainer.innerHTML = "";
  categoryTitle.textContent = `${tab} Keywords`;

  const groups = data[tab];
  Object.keys(groups).forEach(groupName => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "group";

    const heading = document.createElement("h4");
    heading.textContent = groupName;
    groupDiv.appendChild(heading);

    groups[groupName]
      .filter(k => k.word.toLowerCase().includes(search.toLowerCase()) || k.desc.toLowerCase().includes(search.toLowerCase()))
      .forEach((k, index) => {
        const btn = document.createElement("button");
        btn.textContent = k.word;
        btn.addEventListener("click", () => showDetails(tab, groupName, index));
        groupDiv.appendChild(btn);
      });

    listContainer.appendChild(groupDiv);
  });
}

// Show details
function showDetails(tab, group, index) {
  const k = data[tab][group][index];
  detailSection.innerHTML = `
    <h2>${k.word}</h2>
    <h4>Category: ${tab} → ${group}</h4>
    <p>${k.desc}</p>
    <pre>${k.code}</pre>
  `;
}

// Search functionality
searchBox.addEventListener("input", e => renderList(currentTab, e.target.value));

// Tab switching
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    searchBox.value = "";
    renderList(currentTab);
    detailSection.innerHTML = `<h2>${currentTab} Keywords</h2><p>Select a keyword from the left.</p>`;
  });
});

// Initial render
renderList();

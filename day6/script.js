// Very simple dataset
const data = {
  HTML: [
    { word: "<div>", desc: "Container element", code: "<div>Hello</div>" },
    { word: "<p>", desc: "Paragraph of text", code: "<p>This is a paragraph.</p>" }
  ],
  CSS: [
    { word: "color", desc: "Sets text color", code: "p { color: red; }" },
    { word: "margin", desc: "Sets outer spacing", code: "div { margin: 20px; }" }
  ],
  JavaScript: [
    { word: "let", desc: "Declares a variable", code: "let name = 'Harshad';" },
    { word: "if", desc: "Conditional statement", code: "if(x > 5){ console.log('big'); }" }
  ]
};

const listContainer = document.getElementById("keywordList");
const detailSection = document.getElementById("detailSection");
const tabBtns = document.querySelectorAll(".tab-btn");
const categoryTitle = document.getElementById("categoryTitle");

let currentTab = "HTML";

function renderList(tab) {
  listContainer.innerHTML = "";
  categoryTitle.textContent = `${tab} Keywords`;

  data[tab].forEach((k, index) => {
    const btn = document.createElement("button");
    btn.textContent = k.word;
    btn.onclick = () => showDetails(tab, index);
    listContainer.appendChild(btn);
  });
}

function showDetails(tab, index) {
  const k = data[tab][index];
  detailSection.innerHTML = `
    <h2>${k.word}</h2>
    <p>${k.desc}</p>
    <pre>${k.code}</pre>
  `;
}

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    renderList(currentTab);
    detailSection.innerHTML = `<h2>${currentTab} Keywords</h2><p>Select a keyword.</p>`;
  });
});

// Initial load
renderList(currentTab);

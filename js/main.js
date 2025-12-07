// Hamburger

(() => {
    const menu = document.querySelector('#menu');
    const hamburger = document.querySelector('#hamburger');
    const closeButton = document.querySelector('#close');
    const menuLinks = document.querySelectorAll('#menu nav ul li a');


    function toggleMenu() {
        menu.classList.toggle('open');
        document.body.classList.toggle("no-scroll");
    }


    hamburger.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
})();

// Software Part

const loadMoreButton = document.querySelector("#load-more-btn");
const portfolioBoxes = document.querySelectorAll(".portfolio-box");
const portfolioContainer = document.querySelector("#portfolio-container");

let showingOriginal = true;

const replacementItems = [
  { image: "img7.jpg", title: "HTML", description: "Description for item 7." },
  { image: "img8.jpg", title: "CSS", description: "Description for item 8." },
  { image: "img9.jpg", title: "JavaScript", description: "Description for item 9." },
  { image: "img10.jpg", title: "SASS", description: "Description for item 10." },
  { image: "img11.jpg", title: "Title 11", description: "Description for item 11." },
  { image: "img12.jpg", title: "Title 12", description: "Description for item 12." }
];

function showReplacementSet() {
  portfolioContainer.innerHTML = "";

  replacementItems.forEach(function(item) {
    const newBox = document.createElement("div");
    newBox.classList.add("portfolio-box", "col-span-2", "m-col-span-4", "l-col-span-4");

    newBox.innerHTML = `
      <img src="${item.image}" alt="">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;

    portfolioContainer.appendChild(newBox);
  });

  addToggleListenerAgain();
}

function showOriginalSet() {
  portfolioContainer.innerHTML = "";

  portfolioBoxes.forEach(function(box) {
    portfolioContainer.appendChild(box);
  });

  addToggleListenerAgain();
}

function handleToggleView() {
  if (showingOriginal) {
    showReplacementSet();
    loadMoreButton.textContent = "Go back...";
    showingOriginal = false;
  } else {
    showOriginalSet();
    loadMoreButton.textContent = "See more...";
    showingOriginal = true;
  }
}

function addToggleListenerAgain() {
  const newButton = document.querySelector("#load-more-btn");
  newButton.addEventListener("click", handleToggleView);
}

loadMoreButton.addEventListener("click", handleToggleView);

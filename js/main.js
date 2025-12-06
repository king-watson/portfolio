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

// Toggles for the skills part

const workBoxes = document.querySelectorAll('.work-box');

function toggleWorkDescription(event) {
  const box = event.currentTarget;
  box.classList.toggle('active');
}

workBoxes.forEach(function(box) {
  box.addEventListener('click', toggleWorkDescription);
});

const loadMoreButton = document.querySelector("#load-more-btn");
const portfolioContainer = document.querySelector("#portfolio-container");

const originalItems = portfolioContainer.innerHTML;

let showingOriginal = true;

function showReplacementItems() {
  portfolioContainer.innerHTML = "";

  replacementItems.forEach(function(item) {
    const newBox = document.createElement("div");
    newBox.classList.add(
      "portfolio-box",
      "col-span-2",
      "m-col-span-4",
      "l-col-span-4"
    );

    newBox.innerHTML = `
      <img src="${item.image}" alt="">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;

    portfolioContainer.appendChild(newBox);
  });
}

function handleToggle() {
  if (showingOriginal) {
    showReplacementItems();
    loadMoreButton.textContent = "Show Less";
    showingOriginal = false;
  } else {
    portfolioContainer.innerHTML = originalItems;
    loadMoreButton.textContent = "View More";
    showingOriginal = true;
  }
}

loadMoreButton.addEventListener("click", handleToggle);

const replacementItems = [
  { image: "img7.jpg", title: "Title 7", description: "Description for item 7." },
  { image: "img8.jpg", title: "Title 8", description: "Description for item 8." },
  { image: "img9.jpg", title: "Title 9", description: "Description for item 9." },
  { image: "img10.jpg", title: "Title 10", description: "Description for item 10." },
  { image: "img11.jpg", title: "Title 11", description: "Description for item 11." },
  { image: "img12.jpg", title: "Title 12", description: "Description for item 12." }
];



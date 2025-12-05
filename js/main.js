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

/* I select all the work boxes on the page */
const workBoxes = document.querySelectorAll('.work-box');

/* I toggle the description of a specific box when clicked */
function toggleWorkDescription(event) {
  const box = event.currentTarget;
  box.classList.toggle('active');
}

/* I attach click events to each box */
workBoxes.forEach(function(box) {
  box.addEventListener('click', toggleWorkDescription);
});

// Simple Cart Alert

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {

button.addEventListener("click", () => {

alert("Item added to cart!");

});

});


// Sticky Navbar Shadow

window.addEventListener("scroll", function(){

let nav = document.querySelector(".navbar");

nav.classList.toggle("shadow", window.scrollY > 50);

});
//slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("my-slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//hamburger selections
const burger = document.querySelector("#menu-burger");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
	ul.classList.toggle("show");
});

//close hamburger menu when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
	link.addEventListener("click", () => {
		ul.classList.remove("show");
	})
);
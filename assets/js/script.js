'use strict';



/**
 * add event listener on multiple elements
 */
// script.js



const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


document.getElementById("name-btn").addEventListener("click", function() {
  // Change "destination.html" to the actual URL of the page you want to redirect to.
  window.location.href = "index.html";
});

document.getElementById("about-btn").addEventListener("click", function() {
  // Change "destination.html" to the actual URL of the page you want to redirect to.
  window.location.href = "about.html";
});

document.getElementById("exp-btn").addEventListener("click", function() {
  // Change "destination.html" to the actual URL of the page you want to redirect to.
  window.location.href = "experience.html";
});

document.getElementById("research-btn").addEventListener("click", function() {
  // Change "destination.html" to the actual URL of the page you want to redirect to.
  window.location.href = "research.html";
});



// script.js
document.getElementById("home-btn").addEventListener("click", function() {
  // Change "destination.html" to the actual URL of the page you want to redirect to.
  window.location.href = "index.html";
});
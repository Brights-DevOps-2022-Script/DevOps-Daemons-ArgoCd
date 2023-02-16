'use strict';



/**
 * add event on element
 */

const addEventOnelem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnelem(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnelem(navbarLinks, "click", closeNavbar);



/**
 * header active on scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnelem(window, "scroll", activeHeader);



/**
 * filter tab
 */

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
}

addEventOnelem(tabCard, "click", navigateTab);

/* Hide and show more text */
function toggleText(e) {
  var points = 
      document.getElementById("points");
  var showMoreText =
      document.getElementById("moreText");
  var buttonText =
      document.getElementById("textButton");
  /* var classStyle = document.getElementById("chapter-ul"); */

  if (points.style.display === "none") {
      showMoreText.style.display = "none";
      points.style.display = "inline";
      buttonText.innerHTML = "Show More";
     /*  classStyle.classList.remove("grid-list"); */
     
  }

  else {
      showMoreText.style.display = "inline";
      points.style.display = "none";
      buttonText.innerHTML = "Show Less";
      /* classStyle.classList.add( "chapter-ul");; */
  }
}
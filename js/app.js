// Main Navigation Vars
var navContainer = document.getElementById("main-nav"),
    navPortfolio = document.getElementById("nav-portfolio"),
    navContact = document.getElementById("nav-contact"),
    navSkills = document.getElementById("nav-skills"),
    navToggle = document.getElementById("nav-toggle");

// Footer Navigation Vars
var toTop = document.getElementById("to-top"),
    footNavHome = document.getElementById("foot-home"),
    footNavPortfolio = document.getElementById("foot-portfolio"),
    footNavContact = document.getElementById("foot-contact");

var navIsHidden = false;

function goToElement(element) {
  document.getElementById(element).scrollIntoView({
    behavior: "smooth"
  });
}

function hideNav() {
  navContainer.style.display = "none";
  navIsHidden = true;
}

function showNav() {
  navContainer.removeAttribute("style");
  navIsHidden = false;
}

// Main Nav Smooth Scrolling

navPortfolio.onclick = function() {
  goToElement("portfolio");
}

navContact.onclick = function() {
  goToElement("contact");
}

navSkills.onclick = function() {
  goToElement("skills");
}

// Footer Nav Smooth Scrolling

toTop.onclick = function() {
  goToElement("page-top");
}

footNavHome.onclick = function() {
  goToElement("page-top");
}

footNavPortfolio.onclick = function() {
  goToElement("portfolio");
}

footNavContact.onclick = function() {
  goToElement("contact");
}

// Main Nav Toggle

navToggle.onclick = function() {
  if (navIsHidden) {
    showNav();
  } else {
    hideNav();
  }
}

// If the nav is hidden and window size changes to tablet or desktop, restore the nav bar.
window.onresize = function() {
  if (window.innerWidth >= 769 && navIsHidden) {
    showNav();
  }
}

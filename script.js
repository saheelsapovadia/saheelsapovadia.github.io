window.onbeforeunload = function () {
  // window.scrollTo(0, 0);
};

// Remove the transition class
const heading = document.querySelector(".heading");
// Create the observer, same as before:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      heading.classList.add("move-in-left");
      return;
    }

    heading.classList.remove("move-in-left");
  });
});

// observer.observe(document.querySelector(".heading-wrapper"));

const skills = document.querySelector(".skills");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skills.classList.add("move-in-left");
      return;
    }

    skills.classList.remove("move-in-left");
  });
});
skillObserver.observe(document.querySelector(".skills-container"));
//navbar
const scrollToElement = (element) => {
  const Elmt = document.getElementById(element);
  if (element === "home") window.scrollTo(0, 0);
  else {
    Elmt.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

// Show navbar mobile screen size

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    // console.log("open");
  });
}
//close
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    // console.log("close");
  });
}

const navLinks = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((link) => link.addEventListener("click", linkAction));

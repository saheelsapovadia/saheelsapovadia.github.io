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

observer.observe(document.querySelector(".heading-wrapper"));

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

let headings = document.querySelectorAll(".text--changing--container h1");

let target = 0;

function changeText() {
  // Remove the opacity-class from the current item
  let current = headings[target];

  if (current) {
    current.classList.remove("opacity-class");
  }

  // Add the opacity-class to the rest of the items
  for (let i = 0; i < headings.length; i++) {
    if (i !== target) {
      headings[i].classList.add("opacity-class");
    }
  }

  // Increment target and loop through headings
  target = (target + 1) % headings.length;

  // Call the function recursively
  setTimeout(changeText, 2000);
}

// Start the loop
changeText();


$(".img--slider").owlCarousel({
  items: 1,
  autoplay: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  autoplayTimeout: 2500,
  loop: true,
  pullDrag: false,
  tossDrag: false,
  mouseDrag: false,
  freeDrag: false,
  touchDrag: false,
});

// portfolio carousel

$(".portfolio--carousel").owlCarousel({
  items: 1,
  nav: true,
  dots: true,
  animateOut: "fadeOut",
  autoplayTimeout: 6000,
});

// hide timeline details
let timelineHeadLines = document.querySelectorAll(".timeline--content h1");

if (timelineHeadLines) {
  timelineHeadLines.forEach((item) => {
    console.log(item.parentElement);
    let details = item.parentElement.querySelector(
      ".timeline--content--details "
    );
    item.addEventListener("click", () => {
      if (details) {
        item.parentNode.classList.toggle("show--after");
        details.classList.toggle("show--timeline--details");
      }
    });
  });
}

// hamburger menu logic
let hamburgerBtn = document.querySelectorAll(".navbar--wrapper svg");
let header = document.querySelector("header");

if (hamburgerBtn) {
  hamburgerBtn.forEach((item) => {
    item.addEventListener("click", () => {
      header.classList.toggle("show--header");
    });
  });
}

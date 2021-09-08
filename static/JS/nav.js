const navSlide = () => {
  const icons = document.querySelector(".menu-icon-holder");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  icons.addEventListener("click", () => {
    console.log("click");
    // toggle Nav
    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    // icon holder animation
    icons.classList.toggle("toggle");
  });
};

navSlide();

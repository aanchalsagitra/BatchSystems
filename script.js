document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navOptions = document.querySelector(".nav-bar-options");

  hamburgerMenu.addEventListener("click", function () {
    navOptions.classList.toggle("active");
  });
});

const download = document.getElementById("downloadBTn")


const menu = document.querySelector(".hamberger-menu");
const menuLink = document.querySelector(".menu-links");
const overlay = document.getElementById("overlay");

menu.addEventListener("click", () => {
  menu.classList.toggle("active-menu");
  menuLink.classList.toggle("show-menu");
  overlay.classList.toggle("overlay");
});

windows.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    menu.classList.toggle("active-menu");
    menuLink.classList.toggle("show-menu");
    overlay.classList.toggle("overlay");
  }
});

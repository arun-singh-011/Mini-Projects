const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

hamburger.addEventListener("click", () => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
});

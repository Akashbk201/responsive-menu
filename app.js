const hamburger = document.getElementById("mob-menu");
const output = document.getElementById("items");
const closeMenu = document.getElementById("mob-menu-close");

hamburger.addEventListener("click", () => {
  output.style.left = "0";
  hamburger.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  output.style.left = "-100%";
  closeMenu.style.display = "none";
  hamburger.style.display = "block";
});

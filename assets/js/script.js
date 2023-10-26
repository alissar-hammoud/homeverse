let iconBig = document.querySelector(".nav-icon .menu-btn");
let iconSmall = document.querySelector(".nav-icons-bottom .menu-btn");
let navUl = document.querySelector(".nav-ul");
iconBig.addEventListener("click", () => {
  navUl.classList.toggle("menu-open");
});
iconSmall.addEventListener("click", () => {
  navUl.classList.toggle("menu-open");
});
let nav = document.querySelector(".navbar");
let about = document.getElementById("about");
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll >= about.offsetHeight) {
    nav.classList.add("navbar-fix");
  } else {
    nav.classList.remove("navbar-fix");
  }
});

// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika nasiuduk menu di klik
document.querySelector("#nasiuduk-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const nasiuduk = document.querySelector("#nasiuduk-menu");

document.addEventListener("click", function (e) {
  if (!nasiuduk.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

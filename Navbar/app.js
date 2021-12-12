const btnToggle = document.querySelector(".btn-toggle");
const links = document.querySelector(".links");

btnToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

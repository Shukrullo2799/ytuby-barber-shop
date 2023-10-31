const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  hamburger.classList.toggle("open");
  sidebar.classList.toggle("open");
  document.body.classList.toggle("overflow-hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("open");
    sidebar.classList.remove("open");
    document.body.classList.remove("overflow-hidden");
  }
});

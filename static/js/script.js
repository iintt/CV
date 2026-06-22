const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const printButton = document.querySelector("#printButton");

if (localStorage.getItem("resume-theme") === "dark") {
  root.classList.add("dark");
}

themeToggle?.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("resume-theme", root.classList.contains("dark") ? "dark" : "light");
});

printButton?.addEventListener("click", () => {
  window.print();
});

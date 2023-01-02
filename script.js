const features = document.querySelector(".features");
const droplist = document.getElementById("toggleFeautures");

features.addEventListener("click", () => {
  droplist.classList.toggle("hidden");
});

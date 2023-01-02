const features = document.querySelector(".features");
const droplist = document.getElementById("toggleFeautures");
const company = document.querySelector(".company");
const droplist2 = document.getElementById("toggleCompany");

features.addEventListener("click", () => {
  droplist.classList.toggle("hidden");
});

company.addEventListener("click", () => {
  droplist2.classList.toggle("hiddenCompany");
});

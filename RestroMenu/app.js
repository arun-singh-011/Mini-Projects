// const fil = document.querySelectorAll(".filters");
const all = document.getElementById("getAll");
const breakfast = document.getElementById("getBreakfast");
const lunch = document.getElementById("getLunch");
const dinner = document.getElementById("getDinner");
const shakes = document.getElementById("getShakes");

breakfast.addEventListener("click", () => {
  breakfast.style.display = "block";
  lunch.style.display = "none";

  dinner.style.display = "none";
  shakes.style.display = "none";
});

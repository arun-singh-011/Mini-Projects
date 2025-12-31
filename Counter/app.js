const num = document.getElementById("number");
const increase = document.getElementById("btn-inc");
const decrease = document.getElementById("btn-dec");
const reset = document.getElementById("btn-res");
let counter = 0;

increase.addEventListener("click", () => {
  counter++;
  num.innerHTML = counter;
});

decrease.addEventListener("click", () => {
  counter--;
  num.innerHTML = counter;
});

reset.addEventListener("click", () => {
  counter = 0;
  num.innerHTML = counter;
});

const showAnswer = document.getElementById("hideAnswer");
const btn = document.getElementById("plusBtn");

btn.addEventListener("click", () => {
  showAnswer.classList.remove("hideAnswer");
  showAnswer.classList.add("showAnswer");
});

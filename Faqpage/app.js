const toggle = document.querySelectorAll("#plusBtn");
const answers = document.querySelectorAll(".test");
// btn.forEach((event) => {
//   event.addEventListener("click", () => {
//     console.log("clicked");
//   });
// });

toggle.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("hideAnswer")) {
      event.classList.remove("hideAnswer");
      event.classList.add("showAnswer");
    } else {
      event.classList.add("hideAnswer");
      console.log("clicked");
    }
  });
});

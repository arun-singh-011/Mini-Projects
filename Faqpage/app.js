const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const wrapper = document.querySelectorAll(".wrapper");

wrapper.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});

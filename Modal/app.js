const showModal = document.getElementById("show");
const closeModal = document.getElementById("closeBtn");

showModal.addEventListener("click", () => {
  document.getElementById("modal").style.display = "block";
});

closeModal.addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

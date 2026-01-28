const filters = document.querySelectorAll(".filters li");
const items = document.querySelectorAll(".menuItem");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    items.forEach((item) => {
      const category = item.dataset.category;

      if (selectedFilter === "all" || category === selectedFilter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

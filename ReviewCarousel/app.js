const reviews = [
  {
    name: "Virat Kohli",
    title: "Cricketer",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    name: "Albert Einstein",
    title: "Scientist",
    review:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    name: "John Snow",
    title: "UI dev",
    review:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker",
  },
];

const btn = document.getElementById("btn");
const reviewName = document.getElementById("review-name");
const reviewTitle = document.getElementById("review-title");
const reviewText = document.getElementById("review-text");

btn.addEventListener("click", () => {
  console.log("clicked");

  const randomText = Math.floor(Math.random() * reviews.length);
  let final = reviews[randomText];

  reviewName.innerHTML = final.name;
  reviewTitle.innerHTML = final.title;
  reviewText.innerHTML = final.review;
});

const mybtn = document.getElementById("btn");
const myDiv = document.getElementById("wrapper-div");
const heading = document.getElementById("heading");

function changeBackgroundColor() {
  const randomColor = "#" + Math.floor(Math.random() * 1111111);

  myDiv.style.backgroundColor = randomColor;
  mybtn.style.backgroundColor = randomColor;
  heading.innerHTML = "Background Color: " + randomColor;
}

mybtn.addEventListener("click", changeBackgroundColor);

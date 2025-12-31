const randomColor = Math.floor(Math.random() * 1111111);

function changeBackgroundColor() {
  document.getElementById("wrapper-div").style.backgroundColor =
    "#" + randomColor;
  document.getElementById("btn").style.backgroundColor = "#" + randomColor;
  document.getElementById("heading").innerHTML =
    "Background Color:" + " #" + randomColor;
}

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imga = "images/dice" + randomNumber1 + ".png";
var imgb = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", imga);
document.querySelector(".img2").setAttribute("src", imgb);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 wins!";
} else {
  document.querySelector("h1").textContent = "🚩Player 2 wins!";
}

document.querySelector("h1").classList.add("change");

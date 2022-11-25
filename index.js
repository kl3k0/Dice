var randomNumber1 = Math.floor(Math.random() *6) +1;
var randomNumber2 = Math.floor(Math.random() *6) +1;

var diceImage1 = "images/dice" + randomNumber1 +".png";
document.querySelector(".img1").src = diceImage1;

var diceImage2 = "images/dice" + randomNumber2 +".png";
document.querySelector(".img2").src = diceImage2;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 wins! 🚩"
} else {
  document.querySelector("h1").textContent = "You're both right!"
}

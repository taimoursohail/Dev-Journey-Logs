// For First Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var newImageSource1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", newImageSource1);

// For Second Dice:

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var newImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", newImageSource2);

// Let's Change the Heading

if (newImageSource1 == newImageSource2) {
    document.querySelector("h1").innerText = "Draw";
} else if (newImageSource1 == 6) {
    document.querySelector("h1").innerText = "Player 1 Win";
} else if (newImageSource2 == 6) {
    document.querySelector("h1").innerText = "Player 2 Win";
}  else {
    document.querySelector("h1").innerText = "Keep Refresh";
}
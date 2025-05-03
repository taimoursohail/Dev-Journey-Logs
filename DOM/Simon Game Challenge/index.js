var userClickedPattern = [];
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour;

var level = 0;
var started = false;

function nextSequence() {
    userClickedPattern = [];
    level++;
    document.getElementById("level-title").textContent = "Level " + level;

    var randomNumber = Math.floor(Math.random() * buttonColours.length);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    
    var activeButton = document.getElementById(randomChosenColour);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

function buttonAnimation(color) {
    const activeButton = document.getElementById(color);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}


document.addEventListener("keydown", function () {
    if (!started) {
        nextSequence();
        started = true;
    }
});


var green = document.getElementById("green");
green.addEventListener("click", function () {
    playSound("green");
    buttonAnimation("green");
    var colorID = green.getAttribute("id");
    userClickedPattern.push(colorID);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1)
});

var blue = document.getElementById("blue");
blue.addEventListener("click", function () {
    playSound("blue");
    buttonAnimation("blue");
    var colorID = blue.getAttribute("id");
    userClickedPattern.push(colorID);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1)
});

var red = document.getElementById("red");
red.addEventListener("click", function () {
    playSound("red");
    buttonAnimation("red");
    var colorID = red.getAttribute("id");
    userClickedPattern.push(colorID);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1)
});

var yellow = document.getElementById("yellow");
yellow.addEventListener("click", function () {
    playSound("yellow");
    buttonAnimation("yellow");
    var colorID = yellow.getAttribute("id");
    userClickedPattern.push(colorID);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1)
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        document.body.classList.add("game-over");
        setTimeout(function () {
            document.body.classList.remove("game-over");
        }, 200);
        document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
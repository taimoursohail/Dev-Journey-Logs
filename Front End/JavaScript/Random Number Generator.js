alert("Hit Enter to get started...");

var number = prompt("Type a range in which you want to generate random numbers");
var count = prompt("How many random numbers do you want to generate?");
var result = "";

for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * number) + 1;
    result += random + " "; 
}

alert("Here are your random numbers: " + result);

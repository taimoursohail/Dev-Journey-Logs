alert("Slicing is the extraction function from a String");

// Let's get the user's name
var userName = prompt("What is your name?");
alert("Your name has " + userName.length + " characters.");

alert("Character indexing starts from 0 and goes up to (length - 1).");

// Let's try slicing the name
var from = prompt("Enter the starting index for slicing (0 to " + (userName.length - 1) + "):");
var till = prompt("Enter the ending index for slicing (" + (from) + " to " + userName.length + "):");

var slicedName = userName.slice(from, till);
alert("Sliced name: " + slicedName);

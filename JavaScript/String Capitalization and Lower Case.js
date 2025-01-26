// word.toUpperCase;
// word.toLowerCase;

var ask = prompt("What is your name? ");
var rest=ask.slice(1,ask.length).toLowerCase();
var First_Letter=ask.slice(0,1).toUpperCase();
alert("Okay👍. Your name is " + First_Letter + rest);

// another Logic

alert("Here is another Logic...");
var name=prompt("What is your name? ");
var formattedName= name.slice(0,1).toUpperCase() + name.slice(1,name.length);
alert("Your name is " + formattedName);

// above 2nd logic is failed because what if customer put upper case in the end. It only capitalize the initial Char.

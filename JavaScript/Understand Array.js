// An array stores a collection of values, while "var" stores a single value in a variable.
// var is used to store one value at a time.
// An array is used to store multiple related values in a single variable.

/* An array always represented and called by:  
    
    For Declaration:
    var var-name = [val 1, val 2, val 3,... val ∞]

    For Recalling:
    any keyword var-name[any value number always];

    value number starts from 0 and also [] square bracket are the determination of selection is JS  
    
*/

/* FOR EXAMPLE:
    
    In a variable:
    var age = 25; // The value is 25 
    
    In the array:
    var names = ["Alice", "Marcus", "Sofia", "Liam", "Priya"];

*/
// I asked the person's choice.

var yourName = prompt("What is your name?");
var answer = prompt("Would you like to join the mysterious party? (Yes/No)");

console.log(answer);

// Here the Logic I created:

if (answer === "Yes" || answer === "yes" || answer === "YES") {
    newName = yourName;
} else {
    alert("Alright thank you & Get Lost!");
}

console.log(newName);

// Now for Yes possibilities, I turned the old var into new var and use it in an array for addition.
var names = ["Alice", "Marcus", "Sofia", "Liam", "Priya"]; // Keep the array initialization separate
if (newName) { // Add newName to the array only if it's set (i.e., the user said yes)
    names.push(newName);
}

alert("Umm! Let me check your name!!!");

// Checking the array
var availableName = prompt("What is it?");

console.log(availableName);

// Now here is the Logical Condition:
if (names.includes(availableName)) { // Check if availableName is in the names array
    alert("You are most welcome.");
    alert("Thank you for coming.");
} else {
    alert("Ha Brokey! You are not invited to this Elite class party! Get lost!");
}

/*
    .push(); method push the data at the end of the Array.
    .unshift() method push the data at the bigining of the Array.
*/

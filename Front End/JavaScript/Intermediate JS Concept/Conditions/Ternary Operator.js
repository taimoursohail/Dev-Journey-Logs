// The short form of the if-else statement

var yourAge = 21;

yourAge >= 18 ? alert("Go to earn moneybags") : alert("Be a loser forever");

// Here you set the direct condition.
// then "?" is like if statement.
// And ":" is like else statement.

var bill = prompt("What was your bill amount?");

//(price * percentage / 100) Formula

var tip = bill >= 50 && bill <=300 ? (bill * 15 / 100) : (bill * 20 / 100);
    
var netBill = 250 + tip;

console.log("The bill was " + bill +", the tip was " + tip +", and the total value " + netBill);
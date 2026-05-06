//This is the example of Object Literal Syntax (Where Literally writing down the syntax):

let me = {
    firstName: "Taimour",
    lastName: "Sohail",
    location: "Karachi",
    passion: "Full-stack Development",
    work: "Website Development",
}

console.log(me);

// There are 2 main ways to retrieve object properties:

// Dot Notation:
console.log(me.passion);

// Bracket Notation:
console.log(me["passion"]);

// Also you could use tricks:
let key = "Name";
let fullName = (me["first" + key]) +' '+ (me["last" + key]);

// Now you can use in first 2 key-values:

/* console.log(me.('first'+key));
    Dot notaion not support operation.
*/

console.log(fullName);

//another example:
var info = prompt("What would you know about Taimour? (fullName, Location, Passion, Work)")

if (info === "fullName") {
    alert("His name is "+ fullName);
} else if (me[info]) {
    alert(me[info]);
} else {
    alert("Choose the correct one");
}

// By Understanding till you know how to retrive the proeprty. Let's add some:
me.age = 16;
me.friends = ['a', 'b', 'c'];

// these are execute after the condition (if/else). Therefor not working in the alert.

var bestFriend = prompt("type Taimour's best friends name");

//Let's tackle the challenge:
alert(`${me.firstName} has ${me.friends.length}, & his best friend is called ${bestFriend}`);
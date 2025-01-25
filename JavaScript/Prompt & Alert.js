alert("Hello Dear");
var name = prompt("What is your name?");
alert("Alright, from now on I will call you " + name);

var response = prompt("Okay? Say: Yes/No");
if (response === "Yes") {
    alert("Thank you!");
} else {
    name = prompt("What is your name?");
    alert("Alright, I'll call you " + name + " then!");
}

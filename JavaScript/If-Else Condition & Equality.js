
var name = prompt("What is your name?");


var number = Math.floor(Math.random() * 500000 + 1);
var anotherNumber = Math.floor(Math.random() * 500000 + 1);

alert("Hi " + name + "! Your Lucky Numbers are " + number + " " + anotherNumber);

var sum = number + anotherNumber;

if (sum % 2 === 0) {
  alert("The sum of your lucky numbers is even!");
} else if (sum > 500000) {
  alert("The sum of your lucky numbers is odd and greater than 500,000!");
} else {
  alert("The sum of your lucky numbers is odd and less than or equal to 500,000!");
}

/*
Comparison Operators Reference:
=== Strict equality (cares about data types)
== Loose equality (ignores data types)
!== Not equal to
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
*/
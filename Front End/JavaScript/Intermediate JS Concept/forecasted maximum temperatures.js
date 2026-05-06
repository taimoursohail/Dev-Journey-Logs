/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

1) Understanding the problem
- Array transformed to string, separated by ...
- What is the X days? Answer: index + 1

2) Breaking up into sub-problems
- Transform array into string
- Transform each element to string with ºC
- Strings needs to contain day (index + 1)
- Add ... between elements and start and end of string
- Log string to console
*/

let forcastingTemprature = [17, 21, 23, 28, 32, 35, 42];

const dayName = prompt("What Day is it?");


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (daysOfWeek.includes(dayName)) {
    var indexNumber = daysOfWeek.indexOf(dayName);
        console.log(`${forcastingTemprature[indexNumber]}ºC in ${indexNumber + 1} days`);
} else {"Invalid day. Use the capital letter first"};

let ask = prompt("would you like to see the whole forcast? (Yes/No)");
if (ask.toLowerCase() === "yes") {
    for (let i = 0; i < forcastingTemprature.length; i++) {
        console.log(`${forcastingTemprature[i]}ºC in ${i + 1} days`);
    }
} else {
    console.log("Thank you");
}
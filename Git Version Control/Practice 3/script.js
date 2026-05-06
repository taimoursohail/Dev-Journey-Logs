// Greeting based on the time of day
const date = new Date();
const hour = date.getHours();
let greeting;

if (hour < 12) {
  greeting = "Good Morning!";
} else if (hour < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

console.log(`${greeting} Welcome to my practice site.`);

// Simple alert function
function welcomeMessage() {
  alert("Thanks for clicking! Git commit successful.");
}

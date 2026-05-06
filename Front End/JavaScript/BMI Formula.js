function bmiCalculator() {
    var weight = prompt("Enter your weight (in kg):");
    var height = prompt("Enter your height (in meters):");

    var hh = Math.pow(height, 2);
    var result = weight / hh;  

    if (result < 18.5) {
        alert("Your BMI is " + result.toFixed(2) + ", so you are underweight.");
    } else if (result <= 24.9) {
        alert("Your BMI is " + result.toFixed(2) + ", so you have a normal weight.");
    } else {
        alert("Your BMI is " + result.toFixed(2) + ", so you are overweight.");
    }
}

var BMI = bmiCalculator(53, 1.64);
BMI; // Returns the message as output

// bmi = weight / height

function bmi(weight, height) {
    var w = weight;
    var hh = Math.pow(height,2);
    console.log("If you height is "+height+"m & your weight = "+w+"kg then your BMI = "+w/hh+" Kg/m^2");
        console.log("Age: 18–34 | Ideal BMI = 23.0–25.9");
        console.log("Age: 35–44 | Ideal BMI = 23.0–26.9");
        console.log("Age: 45–54	| Ideal BMI = 24.0–27.9");
}

bmi(53,1.64);

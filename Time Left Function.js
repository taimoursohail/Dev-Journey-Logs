function lifeInWeeks(age) {
    var lifeEnd = 90;
    var yearsLeft = 90 - age;
    console.log("If your age is " + age + ", then you have just " + Math.floor(yearsLeft * 365) + " days, " + Math.floor(yearsLeft * 52.1429) + " weeks & " + Math.floor(yearsLeft * 12) + " months left");
}

lifeInWeeks(56);

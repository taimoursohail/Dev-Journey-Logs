function lifeInWeeks(age) {
    var lifeEnd = 90;
    var yearsLeft= 90-age;
    console.log("If your age is "+age+", then you have just"+(yearsLeft*365)+"days, "+(yearsLeft*52.1429)+"weeks & "+(yearsLeft*12)+" months left" );
}

lifeInWeeks(56);
// Testing the year whether year is leap or normal year.

function leapYear(isLeap) {
    if (isLeap % 4 === 0 && isLeap % 100 !== 0 || isLeap % 400 === 0) {
        console.log(isLeap + " typed Year is a Leap Year");
    } else {
        console.log(isLeap + " typed Year is not a Leap Year");
    }
}

leapYear(2400);
leapYear(1989);
leapYear(2020);
// Testing the year whether year is leap or normal year.

function leapYear(isLeap) {
    if (isLeap % 4 === 0 && isLeap % 100 !== 0 || isLeap % 400 === 0) {
        return "Leap year.";
    } else {
        return "Not leap year.";
    }
}

console.log(leapYear(1948));
console.log(leapYear(1998));
console.log(leapYear(2020));

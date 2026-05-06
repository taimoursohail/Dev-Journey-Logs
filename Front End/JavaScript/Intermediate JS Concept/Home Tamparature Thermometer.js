// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

let numberFilteration = temperatures.filter((filteredVal) => typeof filteredVal === "number");
console.log(numberFilteration);

let maxTempVal = Math.max(...numberFilteration);
let minTempVal = Math.min(...numberFilteration);
console.log(maxTempVal, minTempVal);

let amplitude = (maxTempVal) - (minTempVal);
console.log(amplitude);

//Example 2 with Array Merge:

console.log("===> This is the example 2 <===");
// Method: const array3 = array1.concat(array2);

let newArray = temperatures.concat(numberFilteration);
console.log(newArray);
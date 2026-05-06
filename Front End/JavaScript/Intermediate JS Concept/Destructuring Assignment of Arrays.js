/*
let arr = ['banana','Mango', 'Orange'];
let [a,b,c] = arr;

console.log(a,b,c);
*/

// Nested Array Example:
let nestedArr = ['banana','Mango', ['tomato','potato', 'brinjal']];

let [a, , [d, ,f] ] = nestedArr;

console.log(a, d, f);

// I can also set the default value of the destructuring
let [p = 0, q = 0, r = 0] /*as you see i set the default value*/ = [ 1, 2];
console.log(p, q, r);
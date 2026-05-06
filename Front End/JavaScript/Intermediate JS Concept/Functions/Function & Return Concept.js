/* 

function means:
A block of code which we call again again everywhere in the script

return means:
"Ye value function ke bahar bhej do." 

*/


'use-strict';

// Example of function Declaration

function abcd(a, b) {
    return a * b;
}

//Example of Function Expression

let x = function abcd(a, b) {
    return a * b;
}

let y = abcd(2,5);

//Arrow Function (Short Form of Function) in JS

/*

    (param 1, param 2) => {
        Object / instuctions 
    }

*/

const r = (p, q) => {
    return p * q;
}

let s = r(5,3);

// Output results:
console.log(y, abcd(2,5), s);

// Function into Function (Nested function):


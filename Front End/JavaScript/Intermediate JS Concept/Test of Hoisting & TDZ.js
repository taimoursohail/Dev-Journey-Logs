/* 

When EC happened in Call Stack all delaration are hoisted for Global EC. But since y is old rule it is hoisted 
but due to already called before its delaration, it output the delaration you used is undefined

However according to ES6, let/const variable are hoisted for GEC, but couldn't execute because of Tempral Dead Zone
untill compiler reach to it's line of code after executing Tempral Dead Zone line of codes.

*/

console.log(x); //( This will cause ReferenceError due to TDZ)
console.log(y); //( This will cause undefined because the delaration already executed with delaration)
console.log(z); //( This will cause ReferenceError due to TDZ)

let x = 3;
var y = 4;
const z = 5;


// Never declare after the calling the delaration.
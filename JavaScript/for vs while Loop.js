// Since we all know that the Loops are conditional iterative Statement and most common Loops are while and for loops.
// What's the difference?

/* while loop: It's the Older version of loop where you give Statement inside the parentheses will always true. So It will continue to run till the Statement become false.
    => Also it's there no stop condition you define in the statement.
    Example:
    
            while ( Statement goes true here ) {
                Then the loop read & exceute the instructions from this object; 
            }
*/

/* for loop: It's the newer version (1949 - 1951) of loop where you give [start, condition (true/false) and changes into the start] Statement inside the parentheses.
    Example:
            for ( start; condition; changes) {
                Then the loop read & exceute the instructions from this object;
            }

    All loops based on some condition true/false.
*/

var x=1;
var y = [ ];

function z() {

    /* 
    for (start; condition; changes) {
                Then the loop read & exceute the instructions from this object;
            }
    */

    for (x; x <= 100; x++) {
    
            if (x % 3 === 0 && x % 5 === 0) {
                y.push("Fizz-Buzz");    
            } else if (x % 3 === 0) {
            y.push("Fizz");
            } else if (x % 5 === 0) {
            y.push("Buzz");
            } else {
            y.push(x);
            }
    
        
        } // Here the Loop ends

    console.log(y); // If I log inside loop statement it print array 100 times 
}
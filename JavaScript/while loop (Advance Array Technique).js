/*
    Write the program that prints the number from 1 - 100. 
    But for a multiple of three print "Fizz" instead of the number 
    and for a multiple of 5 print "Buzz". 
    For numbers which are multiples of both 3 and 5 print "FuzzBuzz".

Hint: .push is the property which adds the last item from an array.
      .pop is the property which removes the last item from an array. 
*/

/*
//Lets create counter first:
var x=1;
var y = [];

function z() {
    y.push(x++);
    console.log(y);
}

if (y % 3 === 0) {
    y.push("Fizz");
} else if (y % 5 === 0) {
    y.push("Buzz");
} else {
    y.push(x);
}
*/

// Always remeber Functional Scopes are always work in function. Above my mistake has shown you. take it as example...

//Lets again add some global variables here:
var x=1;
var y = [ ];

function z() {

    /* 
    
    While Loop while ( Something is true ) { 
     Put some instructions here;   
    } 
    
    */
    
    while (x <= 100) {
    
    if (x % 3 === 0 && x % 5 === 0) {
        y.push("Fizz-Buzz");    
} else if (x % 3 === 0) {
    y.push("Fizz");
} else if (x % 5 === 0) {
    y.push("Buzz");
} else {
    y.push(x);
}
    
x++;

} // Here the Loop ends

console.log(y); // If I log inside loop statement it print array 100 times 

}


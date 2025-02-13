/*

The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms.
The first two terms of the Fibonacci sequence are 0 followed by 1.
The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21

Fn = Fn-1 + Fn-2, where Fn is the (n + 1)th term in the Fibonacci sequence. The first two terms in the sequence are F0 = 0 and F1 = 1. 

First number: 0
Second number: 1
Third number: 0 + 1 = 1
Fourth number: 1 + 1 = 2
Fifth number: 1 + 2 = 3
Sixth number: 2 + 3 = 5

*/


function fibonacciGenerator (n) {
    var series = []; // First I created the array for the series

    // Since we know that 1st and 2nd item of the series is 0 & 1 so here is the condition:

    if (n === 0) {
        series = [0];
    } else if (n === 2) {
        series = [0 ,1];  // till here it's clear if 0 then serve 0 if 2 then serve 2 values.
    } else {
       
        // So Logic is: result + previous result = result. 
        
        series = [0, 1];

        for (var index = 2; index < n; index++) {
            
            series.push(series[series.length - 2 /*previousResult item of the array */] + series[series.length -1 /* result item of the array */]);   
            // This push will add a unique result with help of last item of the array + second last item from the array
            
        }
    
    }
    
    return series;
}

let o = prompt("What Fabonacci sequence value you want?");
    alert("Okay here is the "+ o + " numbers of sequence " + fibonacciGenerator(o));

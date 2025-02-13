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

  var sequence = [];

  if (n === 1) {
      sequence = [0];
  } else if (n >= 2) {
      sequence = [0, 1];
          for (var i = 2; i < n;  i++) {
          var number = sequence[i - 1] + sequence[i - 2];
          sequence.push(number);
          }
       }
  return sequence;
}

let o = prompt("What Fabonacci sequence value you want?");
    alert("OKay here is the "+ o + " numbers of sequence " + fibonacciGenerator(o));
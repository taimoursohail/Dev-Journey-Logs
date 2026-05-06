// Each Execution Context (EC) have their own this keyword.
// this is a special keyword whose value depends on how a function is called, not where it’s declared.

// Example for object:

let car = {
    brand: 'Beetle',
    speed: 190,
    drive() { 
        for (let i = 0; i < this.speed; i++) {
            console.log(`car is at ${i}km/h now`);
        }
    },
    brake() {
        for (let j = this.speed; j > -1; j--) {
     console.log(`car is at ${j}km/h now`);   
        }
    },
}

// Example for function

function showThis() {
    return console.log(this);
}

'use strict'

function sayHello() {
   console.log(`my name is ${this.name}`);
}

let person = {
   name: "Taimour",
   greet: sayHello,
};

person.greet();

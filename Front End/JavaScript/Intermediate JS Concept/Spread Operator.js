/* The spread opreator (...) apply to all iterables:
    Itterable are all arrays, strings, maps and sets but not Objects
*/

// Let's apply this technique on Array
let a = [7,8,9];

// spread opreator expand value of the delared array:
let b = ["a", "b", "c", ...a];

// console.log(b);

// It's useful in arrays or when we pass argument in function
const menu = ["BBQ", "Fast-Food", "Chinese Food", "Indian Food", "Desserts", "Beverages"];
let newMenu = [...menu, "Break-Fast", "Sweets"];

// Merging 2 arrays together:

let mergeArr = [...newMenu, "This is the separation", ...b];
// console.log(mergeArr);

// Let's apply this technique on String:

let name = "Taimour";
let nameArr = [...name];
//console.log(...name, nameArr);

// Let play with functions:
// Imagine this is placed somewhere in the codebase and you  don't wanna touch that thing:
let customIngredients = [
    // prompt('Ingredient1'),
    // prompt('Ingredient2'),
    // prompt('Ingredient3'),
];


function pastaIngredient(ingredients){
    // console.log(`There ${numberOfIngredient} are ingredients used in this Pasta ingredients are: ${ingredients}`);
}

// We unpacked with spread opreator: 
let mutatedArrOfIngredient = [...customIngredients];

let numberOfIngredient = mutatedArrOfIngredient.length;
pastaIngredient(mutatedArrOfIngredient);

// According to ES6+ spread operator also can be use for objects.
let obj = {
    name: "Taimour",
    age: "22 y/o",
    passion: "developer",
}

// let's import the obj by spreading operator:

let anotherObj = {
    ...obj,
    location: "karachi",
}

console.log(anotherObj);
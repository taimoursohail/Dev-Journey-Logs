let x = [1,3,5,6,78, `Hello`, 23,45,67, 4];

let filteration = x.filter(function (filtered) {
    return typeof filtered == "number";    
})

console.log(filteration);

let filteration2 = x.filter((values) => typeof values === "string");
console.log(filteration2);
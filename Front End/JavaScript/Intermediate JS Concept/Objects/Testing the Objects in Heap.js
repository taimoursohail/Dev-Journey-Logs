const familyData1 = {
    firstName: 'William',
    lastName: 'David',
    age: 22,
    family: ['alice', 'Ryze'],
};

// Shellow Copy example:

const familyData2 = {
    ...familyData1
}

// Deep Copy example structuredClone() method:

const familyData3 = structuredClone(familyData1);

familyData2.family.push('Kyle'); /* This line of code you have to place in the 🔚 
otherwise it mutate the object one earlier and will show the array of 3 again in 
deep copy. */

console.log(familyData1);
console.log(familyData2);
console.log(familyData3);
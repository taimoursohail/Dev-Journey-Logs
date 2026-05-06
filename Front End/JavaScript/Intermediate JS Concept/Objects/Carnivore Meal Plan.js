// Simple object
let restaurantInfo = {
 name: 'Cafe Italiano',

 category: ["Pizza", "BBQ", "Chinese"],
 
 openingHours: {
  monday: {
   open: 11,
   close: 01,
  },
  
  tuesday: {
   open: 11,
   close: 01,   
  },
 
  wednesday: {
   open: 11,
   close: 01,   
  },
 
  thursday: {
   open: 11,
   close: 01,   
  },
 
  friday: {
   open: 11,
   close: 01,   
  },
 
  saturday: {
   open: 9,
   close: 3,   
  },
 },
};

/*
// Now directly call it as a variable instead calling property:
let {
 name,
 openingHours,
 category,
} = restaurantInfo; //It's necessary to point to the specific object variable

console.log(name, openingHours, category); // it's now act as a variable;

*/

// Now manupulate properties 
let {
 name: restaurantName,
 openingHours: restaurantTimings,
 category: menuCategory /* Giving the default value: */ = "Please create food categories (Message will show by default if the object is missing",
 
} = restaurantInfo //It's necessary to point to the specific object variable

console.log(restaurantName, restaurantTimings, menuCategory);

//Another example:

let obj = {
    name: "Taimour",
    age: "22 y/o",
    passion: "developer",
}

console.log(obj.name, obj.age, obj.passion);

// Example of destructuring object (Mutating original object without touching it)
let {
    name: firstName,
    age: howOldIsHe, 
    passion: occupation,
} = obj

firstName = "Bin Sohail";
howOldIsHe = "32 y/o";
occupation = "Full-Stack Website Developer"

console.log(firstName, howOldIsHe, occupation);

/*
Sets are unique Collection of data.

Syntax: let mySet = new Set();

_Properties_:

.size
Returns the total number of unique elements in the Set.

.add(value)
Appends a new element with a specified value to the Set.

.has(value)
Returns a boolean indicating if the value exists in the Set.

.delete(value)
Removes the specified element and returns true if it existed.

.clear()
Removes all elements from the Set object.

.values() / .keys()
Returns an iterator of all values in insertion order.

.entries()
Returns an iterator of [value, value] pairs for compatibility with Maps.

*/

// Level 1: The Guest List (Basics)

let partyGuests = new Set(["Alice", "Bob", "Charlie", "Alice"]);
// console.log(partyGuests);
partyGuests.has("Bob");
partyGuests.delete("Charlie");
partyGuests.size;

// Level 2: The Array De-Duplicator (Intermediate)

let numbers = [1, 2, 2, 3, 4, 4, 5];
let cars = ["Volvo", "BMW", "Ford", "Mazda", "BMW", "Ford", "Mazda"];

function uniqueOnly(arr) {
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}

uniqueOnly(numbers);
uniqueOnly(cars);


// Level 3: The Common Friends Finder (Advanced)
// Task: Given two arrays of friends, find the "Intersection" (the friends both people have in common) using Sets.

let user1Friends = ["Alice", "Bob", "Dave"];
let user2Friends = ["Erin", "Bob", "Alice"];

function findCommonFriends(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let intersection = [...set1].filter(x => set2.has(x));
    return intersection;
}

findCommonFriends(user1Friends, user2Friends);
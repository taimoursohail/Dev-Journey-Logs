const simpleObject = {
  property1: {
    name: "Dan",
    Age: 25,
    isCool: true,
  },
  property2: {
    name: "Bob",
    Age: 30,
    isCool: false,
  },
  property3: {
    name: "Alice",
    Age: 28,
    isCool: true,
  }
};

const objectProperties = Object.keys(simpleObject);
console.log(objectProperties);

const objectValues = Object.values(simpleObject);
console.log(objectValues);

const objectEntries = Object.entries(simpleObject);
for (const entry of objectEntries) {
  console.log(`The person named ${entry[1].name} is ${entry[1].Age} years old`);
}

for (const [key] of objectEntries) {
  console.log(`The person named ${simpleObject[key].name} is ${simpleObject[key].Age} years old`)
}

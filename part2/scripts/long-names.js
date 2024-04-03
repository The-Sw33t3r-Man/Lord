// longNames.js
function filterLongNames(names) {
    return names.filter(name => name.length > 12);
}

// Test the function with an array of names
const namesArray = ["Alexander Hamilton", "John", "Elizabeth Schuyler", "Aaron Burr", "Angelica Schuyler", "Theodosia Burr Alston"];
const longNames = filterLongNames(namesArray);

console.log("Long names (>12 characters):", longNames);

// prompt the user for froyo flavors
let flavorInput = prompt("Enter a list of froyo flavors, separated by commas:");

// split the input string into an array
let flavors = flavorInput.split(',');

// Create an object to keep count of each flavor
let flavorCount = {};

// Loop through the array and update the count in the object
for (let i in flavors) {
    let flavor = flavors[i].trim();
    if (flavorCount[flavor]) {
        flavorCount[flavor]++;
    } else {
        flavorCount[flavor] = 1;
    }
}

console.table(flavorCount);

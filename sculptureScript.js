// Import sculpture data
const sculptureList = require('./data.js');

// Create an empty array to hold the length objects
const sculptureListLengths = [];

// Loop through each sculpture in the list
for (const sculpture of sculptureList) {
  const lengths = {};

  // For each property in the sculpture, store its string length
  for (const key in sculpture) {
    lengths[key] = sculpture[key].length;
  }

  // Add this result object to the sculptureListLengths array
  sculptureListLengths.push(lengths);
}

// Log the full sculptureListLengths to console
console.log(sculptureListLengths);

// Export for testing or reuse
module.exports = sculptureListLengths;

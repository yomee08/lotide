// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  // Get all keys of the object
  const keys = Object.keys(object);
  
  // Loop through all keys
  for (const key of keys) {
    // If callback returns truthy for the value at current key, return the key
    if (callback(object[key])) {
      return key;
    }
  }
  
  // If no key is found, return undefined
  return undefined;
};

// Test case from example
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");

// Additional test cases
// Test with simple object and values
const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
};
assertEqual(findKey(numbers, x => x > 3), "four");
assertEqual(findKey(numbers, x => x < 0), undefined);

// Test with empty object
assertEqual(findKey({}, x => x === true), undefined);

// Test with boolean conditions
const statuses = {
  upload: true,
  delete: false,
  modify: true
};
assertEqual(findKey(statuses, x => x === true), "upload");
assertEqual(findKey(statuses, x => x === false), "delete");
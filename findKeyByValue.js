// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  // Get all keys of the object
  const keys = Object.keys(object);
  
  // Loop through all keys
  for (const key of keys) {
    // If the value at current key matches searched value, return the key
    if (object[key] === value) {
      return key;
    }
  }
  
  // If no key is found, return undefined
  return undefined;
};

// Test cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// Given test cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// Additional test cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), undefined);

// Test with different object and value types
const numericValues = {
  one: 1,
  two: 2,
  anotherOne: 1
};

// Should find first key with value 1
assertEqual(findKeyByValue(numericValues, 1), "one");
assertEqual(findKeyByValue(numericValues, 3), undefined);

// Test with empty object
const emptyObj = {};
assertEqual(findKeyByValue(emptyObj, "anything"), undefined);

// Test with boolean values
const booleanValues = {
  isTrue: true,
  isFalse: false,
  anotherTrue: true
};

assertEqual(findKeyByValue(booleanValues, true), "isTrue");
assertEqual(findKeyByValue(booleanValues, false), "isFalse");
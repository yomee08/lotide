// Helper Functions
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Map function implementation
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test cases
const words = ["ground", "control", "to", "major", "tom"];

// Test 1: Get first letter of each word
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// Test 2: Get length of each word
const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

// Test 3: Convert each word to uppercase
const results3 = map(words, word => word.toUpperCase());
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test 4: Empty array edge case
assertArraysEqual(map([], x => x * 2), []);

// Test 5: Working with numbers
const numbers = [1, 2, 3, 4, 5];
assertArraysEqual(map(numbers, num => num * 2), [2, 4, 6, 8, 10]);

// Test 6: Complex transformation
const results4 = map(words, word => `${word}-${word.length}`);
assertArraysEqual(results4, ["ground-6", "control-7", "to-2", "major-5", "tom-3"]);
// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false; // Arrays of different lengths cannot be equal
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; // Mismatched element found
    }
  }

  return true; // Arrays are equal
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// IMPLEMENTATION of without function
const without = function(source, itemsToRemove) {
  // Create a new array to store elements that are not in itemsToRemove
  const result = [];
  
  // Iterate through each element in the source array
  for (let item of source) {
    // Check if the current item is not in the itemsToRemove array
    if (!itemsToRemove.includes(item)) {
      // If the item is not in itemsToRemove, add it to the result array
      result.push(item);
    }
  }
  
  // Return the new array
  return result;
};

// TEST CASES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// Test case to ensure original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
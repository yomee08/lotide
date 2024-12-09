// ASSERTION FUNCTIONS
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
  
// ACTUAL FUNCTION
const middle = function(array) {
  // For arrays with one or two elements, return an empty array
  if (array.length <= 2) {
    return [];
  }
  
  // Calculate the middle index
  const middleIndex = Math.floor(array.length / 2);
  
  // If array length is odd, return the single middle element
  if (array.length % 2 !== 0) {
    return [array[middleIndex]];
  }
  
  // If array length is even, return the two middle elements
  return [array[middleIndex - 1], array[middleIndex]];
};
  
// TEST CODE
// Test arrays with one or two elements (should return empty array)
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
  
// Test arrays with odd number of elements (should return single middle element)
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  
// Test arrays with even number of elements (should return two middle elements)
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
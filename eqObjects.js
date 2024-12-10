// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Get arrays of keys for both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  // Check if the objects have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  // Loop through keys of first object
  for (const key of keys1) {
    // Check if both values are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // Use eqArrays for array comparison
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // Use strict equality for primitive values
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  
  // If we made it through the loop, all keys and values match
  return true;
};

// Test cases for primitive values
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// Test cases with array values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

// Additional test cases for arrays
const obj1 = { a: ["1", "2"], b: "3" };
const obj2 = { a: ["1", "2"], b: "3" };
assertEqual(eqObjects(obj1, obj2), true);

const obj3 = { a: ["1", "2"], b: "3" };
const obj4 = { a: ["1", "3"], b: "3" };
assertEqual(eqObjects(obj3, obj4), false);
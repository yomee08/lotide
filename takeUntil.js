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

const takeUntil = function(array, callback) {
  const results = [];
  
  for (const item of array) {
    if (callback(item)) {
      return results; // Early return once condition is met
    }
    results.push(item);
  }
  
  return results;
};

// Original examples with console.log
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Test cases using assertArraysEqual
console.log('\nTEST CASES:');
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

// Additional test cases
const data3 = [1, 2, 3, 4, 5];
assertArraysEqual(
  takeUntil(data3, x => x > 3),
  [1, 2, 3]
);

// Test with empty array
assertArraysEqual(
  takeUntil([], x => x < 0),
  []
);

// Test when callback never returns true
assertArraysEqual(
  takeUntil([1, 2, 3], x => x > 5),
  [1, 2, 3]
);
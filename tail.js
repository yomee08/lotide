// FUNCTION IMPLEMENTATION
const tail = function(array) {
  return array.slice(1); //Creates a new array starting from index 1
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
//TEST CASES
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const tailWords = tail(words);
assertEqual(tailWords.length, words.length -1); // tail should have one element less than its input

const oneEl = tail([1]); // One element array
assertEqual(oneEl.length, 0); // Tail should be empty array

const emptyArr = tail([]); //Empty array
assertEqual(emptyArr.length, 0); // Tail should be empty array

const lighthouse = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(lighthouse.length, 2); // Tail should have 2 elements
assertEqual(lighthouse[0], "Lighthouse"); // First element of tail
assertEqual(lighthouse[1], "Labs"); // Second element of tail
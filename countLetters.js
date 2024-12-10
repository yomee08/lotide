// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  
  // Loop through each character in the sentence using for...of
  for (const letter of sentence) {
    // Skip spaces
    if (letter !== ' ') {
      // If the letter exists in results, increment it, otherwise set it to 1
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  
  return results;
};

// Test code
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);
// Make sure spaces are not counted
assertEqual(result1[" "], undefined);

// Additional test with a simpler string
const result2 = countLetters("LHL");
assertEqual(result2["L"], 2);
assertEqual(result2["H"], 1);
// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: [actual] === [expected]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [actual] !== [expected]`);
  }
};

//TEST CODE
assertEqual("Nayeem", "Nayeem");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 3);
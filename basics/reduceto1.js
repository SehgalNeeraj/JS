#! /usr/bin/env node
// Consider the following algorithm:
// The algorithm is initially given a positive integer.
// If the number is even, divide it by 2. If, on the other hand,
// the number is odd, multiply it by 3 and add 1.
// Continue this until the number is 1.

// For example, if the number is 12, the algorithm works like this:

// 12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1

// Your job is to show how the algorithm works on a given number.
// Feed: The only line in the feed contains a numberof: the starting number
// of the algorithm.

// Output: Your program should print the numbers that appear in sequence
// during the algorithm.

// Bounds
// 1 ≤ n ≤106
// Example

// Input:
// 12

// Output:
// 12 6 3 10 5 16 8 4 2 1
/////////////////////////////////////////////////////////////////
// MAIN
/////////////////////////////////////////////////////////////////
function algorithm(num) {
  num = parseInt(num);
  let result = "" + num;
  while (num > 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    result += " -> " + num;
  }
  console.log(result);
}

algorithm(12);

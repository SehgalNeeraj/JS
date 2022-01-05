#! /usr/bin/env node

// Permutations
// A permutation of integers 1, 2, …, n is called beautiful if there
// are no adjacent elements whose difference is 1.

// Given n, construct a beautiful permutation if such a permutation exists.

// Input
// The only input line contains an integer n.

// Output
// Print a beautiful permutation of integers 1,2,…,n.
// If there are several solutions, you may print any of them.
// If there are no solutions, print "NO SOLUTION".

// Constraints
// 1≤n≤106
// Example 1

// Input:
// 5

// Output:
// 4 2 5 3 1

// Example 2

// Input:
// 3

// Output:
// NO SOLUTION
//////////////////////////////////////////////////////////////////////
// ALGO:
// 1. create list of numbers 1..num
// 2. solution sequence will be:
// <CONSTRAINT> there shud exist atleast 2 even numbers b/w 1..n</CONSTRAINT>
//     1. list all Odd numbers b/w 1..n in increasing order.
//     2. list all Even numbers b/w 1..n in increasing order.
// TWO special cases: n = 1 and n = 4

const DELIMITER = " ";

function specialCase(num) {
  let response = "";
  if (num === 4) {
    response = "3 1 4 2";
  }
  if (num === 2 || num === 3) {
    response = "NO SOLUTION";
  }

  console.log(response);
}
function checkConstraints(num) {
  if (num > 1 && num < 5) {
    specialCase(num);
    return false;
  }
  return true;
}

function permutations(num) {
  if (!checkConstraints(num)) {
    return;
  }

  let result = "";
  for (let i = num; i >= 1; i = i - 2) {
    result += i + DELIMITER;
  }
  for (let i = num - 1; i >= 1; i = i - 2) {
    result += i + DELIMITER;
  }
  console.log(result.trim());
}

//////////////////////////////////////////////////////////////////////
/// MAIN
//////////////////////////////////////////////////////////////////////
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  permutations(parseInt(input));
  readline.close();
});

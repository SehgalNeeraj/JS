#! /usr/bin/env node

// Consider an algorithm that takes as input a positive integer n
// . If n
// n is even, the algorithm divides it by two, and if n
// n is odd, the algorithm multiplies it by three and adds one.
// The algorithm repeats this, until n is one.
// For example, the sequence for n = 3
// n = 3 is as follows:
// 3→10→5→16→8→4→2→1
// Your task is to simulate the execution of the algorithm for a given value of n
//
// Input
// The only input line contains an integer n
//
// Output
// Print a line that contains all values of n
// n
//  during the algorithm.

// Constraints
// 1≤n≤106
// Example

// Input:
// 3

// Output:
// 3 10 5 16 8 4 2 1
///////////////////////////////////////////////////////////////////////////

function isEven(num) {
  let even = num % 2 == 0 ? true : false;
  return even;
}

function doEvenProcessing(num) {
  return num / 2;
}

function doOddProcessing(num) {
  return num * 3 + 1;
}
function weirdAlgo(num) {
  let response = "";
  const delimiter = " ";

  while (num !== 1) {
    response += num + delimiter;
    num = isEven(num) ? doEvenProcessing(num) : doOddProcessing(num);
  }
  response += num;

  console.log(response);
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// MAIN
readline.question("", (input) => {
  weirdAlgo(parseInt(input));
  readline.close();
});

#! /usr/bin/env node

// You are given a DNA sequence: a string consisting of characters A, C, G,
// and T.
// Your task is to find the longest repetition in the sequence.
// This is a maximum - length substring containing only one type of
// character.
//
// Input
// The only input line contains a string of n characters.
//
// Output
// Print one integer: the length of the longest repetition.
//
// Constraints
// 1≤n≤106
//
// Example
// Input:
// ATTCGGGA
// Output:
// 3

////////////////////////////////////////////////////////////////////////
function repetitions(str) {
  let longest_rep = 0;
  let current_rep = 1;

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === str[i + 1]) {
      current_rep++;
    } else {
      longest_rep = longest_rep < current_rep ? current_rep : longest_rep;
      current_rep = 1;
    }
  }
  console.log(longest_rep);
}

////////////////////////
////// MAIN
////////////////////////
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// MAIN
readline.question("", (input) => {
  repetitions(input);
  readline.close();
});

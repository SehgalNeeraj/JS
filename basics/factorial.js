#! /usr/bin/env node

// FACTORIAL
//en.wikipedia.org/wiki/Factorial
// f(n) = 1 * 2 *... * n

https: function factorial(n) {
  // time complexity = O(n)
  let response = 1;
  for (let i = 2; i <= n; ++i) {
    response *= i;
  }
  console.log(n + "! = " + response);
}

/////////////////////////////////////////////////////////////////////////
// MAIN
/////////////////////////////////////////////////////////////////////////
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (INPUT) => {
  factorial(parseInt(INPUT));
  readline.close();
});

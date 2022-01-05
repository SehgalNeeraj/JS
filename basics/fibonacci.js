#! /usr/bin/env node
// generate and print first n fib numbers

function validateInput(n) {
  if (n < 1) return false;

  if (n >= 1) {
    console.log("Fib(" + 1 + ") : 1");
  }
  return true;
}
function generateFibonacci(n) {
  const ZERO = 0;
  const FIB_ONE = 1;

  let fib_n_2 = ZERO;
  let fib_n_1 = FIB_ONE;

  if (!validateInput(n)) {
    return undefined;
  }

  let sum = FIB_ONE;
  let sum_even = 0;

  for (let i = 2; i <= n; ++i) {
    let fibNumber = fib_n_1 + fib_n_2;
    fib_n_2 = fib_n_1;
    fib_n_1 = fibNumber;

    sum_even += fibNumber % 2 == 0 ? fibNumber : 0;
    sum += fibNumber;

    console.log("Fib(" + i + ") : " + fibNumber);
  }

  console.log("SUM = " + sum);
  console.log("SUM of EVEN FIBS = " + sum_even);
  console.log("SUM of ODD FIBS = " + (sum - sum_even));
}

/////////////////////////////////////////////////////////////////////////
// MAIN
/////////////////////////////////////////////////////////////////////////
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (INPUT) => {
  generateFibonacci(parseInt(INPUT));
  readline.close();
});

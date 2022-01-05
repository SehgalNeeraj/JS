#! /usr/bin/env node

// factorial recursion

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// MAIN
console.log(factorial(5));

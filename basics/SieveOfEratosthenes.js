#! /usr/bin/env node

// Sieve of Eratosthenes
//en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// To find all the prime numbers less than or equal to a given integer n
// by Eratosthenes' method:

// Create a list of consecutive integers from 2 through n:
// (2, 3, 4, ..., n).
// Initially, let p equal 2, the smallest prime number.
// Enumerate the multiples of p by counting in increments of p from p^2
// to n, and mark them in the list(these will be p^2, (p+1)p, (p+2)p, ...;
// the p itself should not be marked).
// Find the smallest number in the list greater than p that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
// When the algorithm terminates, the numbers remaining
// not marked in the list are all the primes below n.

const SKIP = null;

//!IMP setting [0] and [1] so that numbers correspond to array index
let primes = [SKIP, SKIP];

function printPrimes(num) {
  // print primes b/w 1 and n
  console.log("Prime numbers b/w 1 and " + num + " are:");
  primes.forEach((prime) => {
    console.log(prime);
  });
  console.log("There are " + primes.length + " Prime numbers b/w 1 and " + num);
  console.log(((primes.length / num) * 100).toFixed(2) + "% are Primes");
}

function fillArray(num) {
  for (let i = 2; i <= num; ++i) {
    primes.push(i);
  }
}

function sieveOfEratosthenes(num) {
  fillArray(num);

  for (let i = 2; i < Math.sqrt(primes.length) + 1; ++i) {
    if (primes[i] == SKIP) {
      continue;
    }
    for (let j = i; j < primes.length / i; ++j) {
      // mark all multiples of i to SKIP, they are non-prime
      primes[i * j] = SKIP;
    }
  }
  primes = primes.filter((number) => number != SKIP);
  printPrimes(num);
}

/////////////////////////////////////////////////////////////////////////
// MAIN
/////////////////////////////////////////////////////////////////////////
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (INPUT) => {
  sieveOfEratosthenes(parseInt(INPUT));
  readline.close();
});

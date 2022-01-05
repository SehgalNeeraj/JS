#! /usr/bin/env node

// Additive Inverse
// e.g, additive Inverse of 10 is -10

function additiveInverse(n) {
  return -1 * n;
}

function getInverse(arr) {
  let inverseArr = [];
  for (let i = 0; i < arr.length; ++i) {
    inverseArr.push(additiveInverse(arr[i]));
  }

  return inverseArr;
}

// MAIN
let numbers = [5, 4, 3, 2, 1];
let numbersInverse = getInverse(numbers);
console.log("Numbers: " + numbers.toString());
console.log("Inverse: " + numbersInverse.toString());

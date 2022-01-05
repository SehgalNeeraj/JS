#! /usr/bin/env node

// StandInLine : Pop 1st Item and add new item to end of array

function standInLine(arr, num) {
  arr.push(num);
  return arr.shift();
}

let myArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(myArr));
console.log(standInLine(myArr, 6));
console.log("After: " + JSON.stringify(myArr));

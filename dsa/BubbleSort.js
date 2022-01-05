// BUBBLE SORT
// The bubble sort method starts at the beginning of an unsorted array
// and 'bubbles up' unsorted values towards the end, iterating
// through the array until it is completely sorted.
// It does this by comparing adjacent items and swapping them if they
// are out of order.
// The method continues looping through the array until no swaps occur
// at which point the array is sorted.

// This method requires multiple iterations through the array and for
// average and worst cases has quadratic time complexity.
// While simple, it is usually impractical in most situations.

// Instructions: Write a function bubbleSort which takes an array of
// integers as input and returns an array of these integers in sorted order
// from least to greatest.

function bubbleSort(array) {
  console.debug("INPUT => " + array.toString());

  for (let i = 0, swaps = true; i < array.length && swaps == true; ++i) {
    swaps = false; //reset swaps
    for (let j = 1; j < array.length; ++j) {
      if (array[j] < array[j - 1]) {
        swaps = true;
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  console.log("Sorted=> " + array.toString());
}

//////////////////////////////////////////////////////////////////////
// MAIN
//////////////////////////////////////////////////////////////////////
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (INPUT) => {
  let arr = INPUT.split(" ").map(Number);
  bubbleSort(arr);
  readline.close();
});

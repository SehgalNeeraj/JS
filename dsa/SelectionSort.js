// SELECTION SORT

// Selection sort works by selecting the minimum value in a list and
// swapping it with the first value in the list.
// It then starts at the second position, selects the smallest value
// in the remaining list, and swaps it with the second element.
// It continues iterating through the list and swapping elements until
// it reaches the end of the list.Now the list is sorted.
// Selection sort has quadratic time complexity in all cases.

//     Instructions: Write a function selectionSort which takes an array of
// integers as input and returns an array of these integers in sorted order
// from least to greatest.

function selectionSort(array) {
  console.debug("INPUT => " + array.toString());

  for (let i = 0; i < array.length; ++i) {
    let swapPosition = -Infinity;
    let shouldSwap = false;
    let smallestElement = array[i];

    for (let j = i + 1; j < array.length; ++j) {
      if (array[j] < smallestElement) {
        smallestElement = array[j];
        swapPosition = j;
        shouldSwap = true;
      }
    }

    if (shouldSwap) {
      let temp = array[i];
      array[i] = smallestElement;
      array[swapPosition] = temp;
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
  selectionSort(arr);
  readline.close();
});

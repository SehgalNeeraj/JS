// INSERTION SORT
// This method works by building up a sorted array at the beginning of
// the list.It begins the sorted array with the first element.
// Then it inspects the next element and swaps it backwards into the sorted
// array until it is in sorted position.
// It continues iterating through the list and swapping
// new items backwards into the sorted portion until it reaches the end.
// This algorithm has quadratic time complexity in the average and worst cases.

// Instructions: Write a function insertionSort which takes an array of
// integers as input and returns an array of these integers in
// sorted order from least to greatest.
function insertionSort(array) {
  console.log("INPUT => " + array.toString());

  for (let i = 1; i < array.length; ++i) {
    for (let j = i; j > 0; --j) {
      if (array[j] < array[j - 1]) {
        //swap
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }

  console.log("SORTED=> " + array.toString());
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
  insertionSort(arr);
  readline.close();
});

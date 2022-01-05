#! /usr/bin/env node

// // Number Spiral
// A number spiral is an infinite grid whose upper-left square has number 1.
// Here are the first five layers of the spiral:

// Your task is to find out the number in row y and column x.

// Input
// The first input line contains an integer t: the number of tests.
// After this, there are t lines, each containing integers y and x.

// Output
// For each test, print the number in row y and column x.

// Constraints
// 1≤t≤105
// 1≤y,x≤109
// Example

// Input:
// 3
// 2 3
// 1 1
// 4 2

// Output:
// 8
// 1
// 15

function numberSpiral(row, column) {
  let response = 0;
  // Algorithm -
  // f(X,X) = a + (X-1).X; a=1
  // f(min X) = f(X,X) - (X-1)
  // f(max X) = f(X,X) + (X-1)

  // if max is Odd
  // f(2,5) = f(max X) - (row - 1)
  // f(5,2) = f(min X) + (column - 1)

  // if max is Even
  // f(2,4) = f(min X) + (row - 1)
  // f(4,2) = f(max X) - (column - 1)

    // diagonal element
    // nth AP element =
    // 1, 3, 7, 13, 21, 31, 43, 57...
    

  let X = row > column ? row : column;
  let isEven = X % 2 == 0 ? true : false;
  let isOdd = !isEven;
  const fXX = 1 + (X - 1) * X;
  const fminX = fXX - (X - 1);
  const fmaxX = fXX + (X - 1);

  if (isOdd) {
    response = row < column ? fmaxX - (row - 1) : fminX + (column - 1);
  }
  if (isEven) {
    response = row < column ? fminX + (row - 1) : fmaxX - (column - 1);
  }
  if (row == column) {
    response = fXX;
  }
  console.log(response);
}

////////////////////////////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////////////////////////
numberSpiral(99, 999); // row, column

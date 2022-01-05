// implement Stack DS - using Array
// methods : push, pop, peek, length, search, isEmpty, print

class Stack {
  constructor() {
      this.elements = [];
    this.count = 0;
  }

  push(element) {
    if (this.isEmpty()) {
      this.count = 0;
    }

    this.elements[this.count] = element;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    return this.elements[this.count];
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    console.log(this.elements[this.count - 1]);
  }

  length() {
    return this.count;
  }

  isEmpty() {
    return this.count <= 0 ? true : false;
  }

  print() {
    let delimiter = " ";
    let stack = "";
    for (let i = 0; i < this.count; ++i) {
      stack = this.elements[i] + delimiter;
    }
    console.log(stack);
  }

  // returns the position of the element from the top of the stack
  search(value) {
    for (let i = 0; i < this.count; ++i) {
      if (value === this.elements[i]) {
        return this.count - i;
      }
    }

    return -1;
  }
}
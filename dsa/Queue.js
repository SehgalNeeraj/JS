// implement Queue DS - using Array
// methods : add, poll, peek, length, search, isEmpty, print

class Queue {
  constructor() {
    this.elements = [];
    this.count = 0;
  }

  isEmpty() {
    return this.count <= 0 ? true : false;
  }

  add(element) {
    if (this.isEmpty()) {
      this.count = 0;
    }

    this.elements[this.count] = element;
    ++this.count;
  }

  poll() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    return this.elements.shift(); //TODO: get rid of build-in array.shift
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[0];
  }

  length() {
    return this.count;
  }

  print() {
    let delimiter = " ";
    let queue = "";
    for (let i = 0; i < this.count; ++i) {
      queue += this.elements[i] + delimiter;
    }
    console.log(queue);
  }

  search(element) {
    for (let i = 0; i < this.count; ++i) {
      if (element === this.elements[i]) {
        return i + 1; // position from queue head
      }
    }
    return -1;
  }
}

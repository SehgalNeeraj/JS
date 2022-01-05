// let's try implementing a LinkedList
// Functions in LinkedList:
// 1. add(element) - add "element" at end of LL
// 2. insertAt(element, index) -  It inserts an element at the given index in a list
// 3. removeFrom(index) – It removes and returns an element from the list from the specified index
// 4. removeElement(element) – This method removes element from the list. It returns the removed element, or if its not found it returns -1.
// 5. indexOf(element) – it returns the index of a given element, if the element is in the list.
// 6. isEmpty() – it returns true if the list is empty.
// 7. size_of_list() – It returns the size of list
// 8. print() – It prints the contents of the list.
// 9. traverse(nth node) - Traverse to nth node in the list.

let node = {
  data: null,
  next: null,
  print: function () {
    console.log(this);
  },
};

let linkedList = {
  size: 0,
  head: null,
  size_of_list() {
    return this.size;
  },
  isEmpty() {
    return this.size;
  },
  print() {
    console.log(this);
  },
};

function createNode() {
  return Object.assign({}, node);
}

function createList() {
  return Object.assign({}, linkedList);
}

linkedList.addHead = function (node) {
  if (this.size_of_list()) {
    node.next = this.head;
  }
  this.head = node;
  this.size++;
  node.id = Symbol(this.size);
};

linkedList.add = function (myNode) {
  // PROMISE# node in args will be VALID
  // 1. traverse to end of list
  // 2. make current end -> node and node->next = null
  // 3. return true = #success
  myNode.next = null;

  this.traverse().next = myNode;
  this.size++;
  myNode.id = Symbol(this.size);

  return true;
};

linkedList.insertAt = function (element, index) {
  // 1. traverse to the index node
  // 2. create new links with element node

  //defensive check - assume index is 0 based
  if (index < 0 || index >= this.size) {
    console.log("Invalid Index");
    return false;
  }

  prevNode = this.traverse(index - 1);
  nodeAtIndex = this.traverse(index);

  //insert the element node and make prevNode->next = element
  // and element -> next = nodeAtIndex
  prevNode.next = element;
  element.next = nodeAtIndex;
  this.size++;
  element.id = Symbol(this.size);

  return true;
};

linkedList.traverse = function (pos = this.size - 1) {
  //list is 0th index
  if (pos < 0 || pos >= this.size) {
    console.error("Invalid Position to traverse !");
    return false;
  }

  // we at first node
  let currentNode = this.head;

  for (let i = 0; i < pos; ++i) {
    // iterate thru the list
    currentNode = currentNode.next;
  }
  return currentNode;
};

linkedList.indexOf = function (element) {
  // find position of node in LL with data = element
  let currentNode = this.head;
  for (let i = 0; i < this.size; ++i) {
    // iterate thru the list
    if (currentNode.data == element) {
      console.log("Element " + element + " @ Position# " + i);
      return i;
    }
    currentNode = currentNode.next;
  }

  console.log("Element: " + element + " NOT FOUND!");
  return -1;
};

// removeFrom (index)
linkedList.removeFrom = function (index) {
  // A. goto 1 node short of index(0 based index)
  // B. make node(index-1).next = node(index-1).next.next
  // C. move to node(index) node and make node(index).next = null
  // D. reduce size of list by 1
  // E. returns the removed element
  if (index < 0 || index > this.size) return null;

  let indexNode = this.traverse(index);
  if (index == 0) {
    //removing Node 0
    this.head = this.traverse(1);
  } else {
    let prevNode = this.traverse(index - 1);
    prevNode.next = indexNode.next;
  }
  --this.size;
  indexNode.next = null;

  return indexNode;
};

linkedList.removeElement = function (element) {
  // A. traverse thru the list to see if node.date == element
  // B. if element is not found, return -1
  // C. if element is found, use removeFrom(index) to remove the element
  // D. returns the removed element
  for (let index = 0; index < this.size; ++index) {
    if (this.traverse(index).data == element) {
      return this.removeFrom(index);
    }
  }

  console.log("Element NOT FOUND !!!");
  return null;
};

//////////////////////
///MAIN
//////////////////////
let myList = createList();

let node0 = createNode();
node0.data = "#0";

let node1 = createNode();
node1.data = "#1";

let node2 = createNode();
node2.data = "#2";

let node3 = createNode();
node3.data = "#3";

myList.addHead(node3);
myList.addHead(node2);
myList.addHead(node1);

lastNode = myList.traverse(0);
lastNode = myList.traverse(1);

myList.insertAt(node0, 1);

let element = "#0";
console.log("===Remove Node=== " + element);
let removedNode = myList.removeElement(element);
removedNode === null ? console.log("NOT FOUND") : removedNode.print();

myList.print();

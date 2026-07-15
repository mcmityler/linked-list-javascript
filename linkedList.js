class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }
  append(myValue) {
    const newNode = new Node();
    newNode.setValue(myValue);
    if (this.head === undefined) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.setNextNode(newNode);
      this.tail = newNode;
    }
  }
  prepend(myValue) {
    const newNode = new Node();
    newNode.setValue(myValue);
    if (this.head === undefined) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }
  size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      size++;
      currentNode = currentNode.nextNode;
    }
    return size;
  }
  getHeadValue() {
    if (this.head === undefined) return;

    return this.head.value;
  }
  getTailValue() {
    if (this.tail === undefined) return;

    return this.tail.value;
  }
  at(index) {
    if (this.head === undefined) return;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (currentNode.nextNode === null) {
        return undefined;
      }
      currentNode = currentNode.nextNode;
    }
    return currentNode.value;
  }
  pop() {
    if (this.head === undefined) return;
    const lastHead = this.head;
    this.head = this.head.nextNode;
    if (this.head === null) {
      this.head = undefined;
      this.tail = undefined;
    }
    return lastHead.value;
  }
}
class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
  setValue(myValue) {
    this.value = myValue;
  }
  setNextNode(myNextNode) {
    this.nextNode = myNextNode;
  }
}

const linkList = new LinkedList();
console.log(linkList);
console.log(linkList);
linkList.append(2);
linkList.append(6);
linkList.append(23);
console.log(linkList.size());
console.log(linkList.getHeadValue());
console.log(linkList.getTailValue());
console.log(linkList.at(1));
console.log(linkList.pop());
console.log(linkList.getHeadValue());
console.log(linkList.getTailValue());

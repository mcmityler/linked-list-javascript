class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(myValue) {
    const newNode = new Node();
    newNode.setValue(myValue);
    if (this.head === null) {
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
    if (this.head === null) {
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
    return this.head.value;
  }
  getTailValue() {
    return this.tail.value;
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
linkList.append(3);
linkList.append(32);
linkList.prepend(2);
console.log(linkList);
console.log(linkList.size());
console.log(linkList.getHeadValue());
console.log(linkList.getTailValue());

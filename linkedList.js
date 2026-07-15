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
  at(myIndex) {
    if (this.head === undefined) return;
    let currentNode = this.head;
    for (let i = 0; i < myIndex; i++) {
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
  contains(myValue) {
    if (this.head === undefined) return;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === myValue) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  findIndex(myValue) {
    if (this.head === undefined) return;

    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === myValue) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return -1;
  }
  toString() {
    if (this.head === undefined) return "";

    let listString = "";
    let currentNode = this.head;
    while (currentNode !== null) {
      listString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    listString += `null`;
    return listString;
  }
  insertAt(index, ...values) {
    const listSize = this.size();
    if (index < 0 || index > listSize) return "Out of Range";
    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        const newNode = new Node();
        newNode.setValue(values[i]);
        newNode.nextNode = this.head;
        this.head = newNode;
      }
      return;
    }
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    for (let j = 0; j < values.length; j++) {
      const newNode = new Node();
      newNode.setValue(values[j]);
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
      currentNode = newNode;
    }
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
linkList.append(3);
linkList.append(6);
linkList.append(52);
console.log(linkList.size());
console.log(linkList.getHeadValue());
console.log(linkList.getTailValue());
console.log(linkList.at(1));
console.log(linkList.pop());
console.log(linkList.getHeadValue());
console.log(linkList.getTailValue());
console.log(linkList.contains(6));
console.log(linkList.findIndex(52));
console.log(linkList.insertAt(3, 233, 3, 4));
console.log(linkList.toString());

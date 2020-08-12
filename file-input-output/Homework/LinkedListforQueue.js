class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedListForQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    if (this.head === null) return true;
    return false
  }

  firstNode(value) {
    const newNode = new Node(value, this.head, null);
    this.head = newNode;
  }

  append(value) {
    if (this.head === null) {
      this.firstNode(value);
      return;
    }
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    const newNode = new Node(value, lastNode, null);
    lastNode.next = newNode;
  }

  accessHead() {
    return this.head;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = this.head;
  }
}

class LinkedQueue {
  constructor(linkedList) {
    this.linkedList = linkedList
  }

  put(value) {
    this.linkedList.append(value)
  }

  get() {
    const headValue = this.linkedList.head
    this.linkedList.removeHead();
    return headValue;
  }

  peek() {
    return this.linkedList.accessHead()
  }
}
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head ? false : true;
  }

  prepend(value) {
    if (this.head !== null) {
      const newNode = new Node(value, this.head);
      this.head = newNode;
    } else {
      const newNode = new Node(value, null);
      this.head = newNode;
    }
  }

  append(value) {
    if (this.head !== null) {
      const newNode = new Node(value, this.head.next);
      this.head = newNode;
    } else {
      const newNode = new Node(value, null);
      let lastNode = this.head.next;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
    }
  }

  setHead(index) {
    let indexNode = this.head;
    for (let i = 0; i < index; i++) {
      indexNode = indexNode.next
    }
    this.head = indexNode;
  }

  access(index) {
    let indexNode = this.head;
    for (let i = 0; i < index; i++) {
      indexNode = indexNode.next
    }
    console.log(indexNode.value);
  }

  insert(index, value) {
    let indexNode = this.head;
    for (let i = 0; i < index; i++) {
      indexNode = indexNode.next
    }
    const newNode = new Node(value, indexNode.next);
    indexNode.next = newNode;
  }

  remove(index) {
    let indexNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      indexNode = indexNode.next
    }
    indexNode.next = indexNode.next.next;
  }

  print() {
    let node = this.head;
    while (node !== null) {
      console.log(node.value);
      // console.log(node.value);
      node = node.next;
    }
  }
}

const myLinkedList = new SinglyLinkedList();
myLinkedList.prepend(10);
myLinkedList.prepend(20);
myLinkedList.prepend(30);
myLinkedList.prepend(40);
myLinkedList.prepend(50);
myLinkedList.prepend(60);
myLinkedList.insert(1, 55);
myLinkedList.remove(1);
// myLinkedList.setHead();
myLinkedList.print();
myLinkedList.access(1);
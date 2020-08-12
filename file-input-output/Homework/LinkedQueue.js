class LinearQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.array = new Array(capacity);
  }

  put(value) {
    if (this.array[0] === undefined) {
      this.array[0] = value;
      return;
    }
    this.rear += 1;
    if (this.rear === this.capacity) {
      console.log('Queue Overflow!');
      return;
    }

    this.array[this.rear] = value;
  }

  get() {
    if (this.front === this.rear) {
      console.log('Queue Underflow!');
    }
    return this.array[this.front++]
  }

  peek() {
    if (this.rear === this.capacity) {
      console.log('Queue Undefined!');
      return;
    }
    return this.array[this.front]
  }

  print() {
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.array[i]);
    }
  }
}

const myQueue = new LinearQueue(10);
myQueue.put(10);
myQueue.put(20);
myQueue.put(30);



myQueue.print();
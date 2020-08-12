class Stack {
  constructor(capacity) {
    this.capacity = capacity
    this.top = 0;
    this.array = new Array(capacity);
  }

  push(value) {
    if (this.top === this.capacity) {
      console.log('Stack OverFlow!!');
      return;
    }
    this.array[this.top++] = value
  }

  pop() {
    if (this.top === 0) {
      console.log('Stack UnderFlow!!');
      return;
    }
    return this.array[--this.top];
  }

  peek() {
    if (this.top === 0) {
      return undefined;
    }
    return this.array[this.top - 1];
  }

  isEmpty() {
    return this.top ? false : true;
  }
}

const myStack = new Stack(5);
console.log(myStack.isEmpty())
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
console.log(myStack.array);
console.log(myStack.isEmpty())

console.log(myStack.peek());
myStack.pop();
console.log(myStack.array);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.push(40);
myStack.push(40);
myStack.push(40);
myStack.push(40);
myStack.push(40);
myStack.push(40);
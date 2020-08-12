class CircularQueue {
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
            this.rear = 0;
        }
        if (this.front === this.rear) {
            console.log('Queue Full');
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
        for (let i = 0; i < this.capacity; i++) {
            console.log(this.array[i]);
        }
    }
}

myQueue = new CircularQueue(5);

myQueue.put(1);
myQueue.put(2);
myQueue.put(3);
myQueue.put(4);
myQueue.put(5);
myQueue.get()
myQueue.put(6);
myQueue.print();
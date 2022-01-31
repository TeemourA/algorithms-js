class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size += 1;

    return this.size;
  }

  pushMultiple(...values) {
    values.forEach((value) => this.push(value));

    return this.length;
  }

  pop() {
    if (!this.first) return null;
    if (this.length === 1) this.last = null;

    const temp = this.first;
    return temp;
  }
}

// const stack = new Stack();

// stack.pushMultiple('Toyota', 'Honda', 'Lexus');

// console.log(JSON.stringify(stack, null, 2));

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return this.size;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;

    const temp = this.first;
    this.first = this.first.next;

    this.size -= 1;
    return temp.value;
  }
}

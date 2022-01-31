class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (!this.head) return null;

    let popedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }

    this.length -= 1;

    return popedNode;
  }

  shift() {
    if (!this.head) return null;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length -= 1;
    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    const oldHead = this.head;
    oldHead.prev = newNode;
    this.head = newNode;
    this.head.next = oldHead;
    this.length += 1;

    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;

    const halfIndex = Math.floor(this.length / 2);
    if (index <= halfIndex) {
      let currentNode = this.head;
      for (let i = 0; i <= halfIndex; i += 1) {
        if (index === i) return currentNode;

        currentNode = currentNode.next;
      }
    } else {
      let currentNode = this.tail;
      for (let i = this.length - 1; i > halfIndex; i -= 1) {
        if (index === i) return currentNode;

        currentNode = currentNode.prev;
      }
    }

    return null;
  }

  set(index, value) {
    const foundNode = this.get(index);

    if (!foundNode) return false;

    foundNode.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) this.unshift(value);
    if (index === this.length) this.push(value);
    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    afterNode.prev = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length -= 1;

    return removedNode;
  }
}

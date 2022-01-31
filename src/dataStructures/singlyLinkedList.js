class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return null;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return null;

    let shiftedHead = this.head;
    this.head = shiftedHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }

    return shiftedHead;
  }

  unshift(node) {
    let newNode = new Node(node);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }

    this.length += 1;

    return this;
  }

  get(nodeIndex) {
    let currentNode = this.head;
    for (let i = 0; i <= nodeIndex; i += 1) {
      if (!currentNode) return null;
      if (i === nodeIndex) return currentNode;

      currentNode = currentNode.next;
    }

    return null;
  }

  set(nodeIndex, value) {
    let nodeToSet = this.get(nodeIndex);
    if (!nodeToSet) return false;

    nodeToSet.value = value;
    return true;
  }

  insert(nodeIndex, value) {
    if (nodeIndex === 0) {
      this.unshift(value);
      return true;
    }

    if (nodeIndex === this.length) {
      this.push(value);
      return true;
    }

    let nodeToReplace = this.get(nodeIndex);
    if (!nodeToReplace) return false;

    let newNode = new Node(value);
    let prevNode = this.get(nodeIndex - 1);
    prevNode.next = newNode;
    newNode.next = nodeToReplace;
    this.length += 1;
    return true;
  }

  remove(nodeIndex) {
    if (nodeIndex < 0 || nodeIndex > this.length) return null;
    if (nodeIndex === 0) return this.shift();
    if (nodeIndex === this.length) return this.pop();

    let prevNode = this.get(nodeIndex - 1);
    let removedNode = this.get(nodeIndex);
    prevNode.next = removedNode.next;

    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i += 1) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

// console.log(list.reverse());

// console.log(JSON.stringify(list, null, 1));

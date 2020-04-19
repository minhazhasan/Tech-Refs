import { LinkedListNode } from "./LinkedListNode.js";
import { Comparator } from "./comparator.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Create a new node in front of the list
   * @param {*} val
   * @return {object}
   * T(n) = O(1)
   */
  addFront(val) {
    // create a new node to add it tot hte front
    const newNode = new LinkedListNode(val, this.head);

    // make the new head
    this.head = newNode;

    // if there is no tail, add the new node first only once.
    if (!this.tail) this.tail = newNode;

    //return this;
  }

  removeFront() {
    if (!this.head) return null;

    const removedNode = this.head;

    if (this.head.next) this.head = this.head.next;
    else {
      this.head = null;
      this.tail = null;
    }

    return removedNode;
  }

  addLast(val) {
    const newNode = new LinkedListNode(val);

    if (!this.tail && !this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this.tail;
  }

  removeLast() {
    if (!this.tail) return null;
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = prevNode;
    prevNode.next = null;
  }

  remove(val) {
    if (!this.head) return null;

    if (this.tail.value == val) {
      this.removeLast();
      return this;
    }

    if (this.head.value == val) {
      this.removeFront();
      return this;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (currentNode.value == val) {
        let deletedNode = currentNode;
        prevNode.next = currentNode.next;
        currentNode = prevNode;
        return deletedNode;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  find(val) {
    if (!this.head) return null;

    let currNode = this.head;
    while (currNode) {
      if (val !== undefined && currNode.value === val) return currNode;

      currNode = currNode.next;
    }

    return "Not Found";
  }
}

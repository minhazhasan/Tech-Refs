import { LinkedListNode } from "./LinkedListNode.js";

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

    const val = removedNode.val;
    removedNode = null;

    return val;
  }
}

export class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }
  addToHead(value) {
    const newNode = { value }; // 1
    newNode.next = this.head;  // 2
    this.head = newNode;       // 3
    this.length++;
    return this;
  }
}

//module.export = LinkedList;

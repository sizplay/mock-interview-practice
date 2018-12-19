class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
    this.addToTail(value);
  }
  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  addToTail(value) {
    const newNode = { value };
    if (!this.head) this.head = newNode;
    else {
      this.tail = this.head;
      if (!this.tail.next) {
        this.tail.next = newNode;
        this.tail = this.tail.next;
      }
      else {
        while (this.tail.next) {
          this.tail = this.tail.next;
        }
        this.tail.next = newNode;
        this.tail = this.tail.next;
      }
    }
    this.length++;
    return this;
  }
}

var link = new LinkedList('a');

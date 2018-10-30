//Class
class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }
  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

var printLinkedList = (head) => {
  let node = head;
  let str = '';
  console.log('Start of Linked List');
  while (node !== null) {
    if (node.next) str += `${node.value} -> `;
    if (!node.next) str += `${node.value}`;
    node = node.next;
  }
  console.log(str);
  console.log('end of linked list');
};

var checkDups = (head, node) => {
  var currentNode = head;
  while (currentNode !== node) {
    console.log(currentNode.value, node.value);
    if (currentNode.value === node.value) {
      return true;
    }
    currentNode = currentNode.next;
  }
};

//O(n^2)
var removeDups = (head) => {
  var node = head;
  while (node !== null) {
    if (node.next !== null && checkDups(head, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
};

//O(n)
var removeDups2 = (head) => {
  if (!head) return head;

  let seen = new Set(),
      node = head;

  seen.add(node.value);
  while (node.next) {
    if (seen.has(node.next.value)) {
      node.next = node.next.next;
    }
    else {
      seen.add(node.value);
      node = node.next;
    }
  }
};


var link = new LinkedList('a').addToHead('b')
.addToHead('c').addToHead('d').addToHead('e')
  .addToHead('f').addToHead('d').addToHead('h')
  .addToHead('c').addToHead('j').addToHead('k')
  .addToHead('l').addToHead('m').addToHead('n')
  .addToHead('f').addToHead('g').addToHead('c');

printLinkedList(link.head);
removeDups2(link.head);
printLinkedList(link.head);

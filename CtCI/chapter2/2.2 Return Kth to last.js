var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

//recursion
var findKthToLast = (k, head) => {
  //console.log(k, head);
  if (!head) {
    return ;
  }
  else if (k === 1) {
    console.log(head.value);
    findKthToLast(k, head.next);
  }
  else {
    findKthToLast(k - 1, head.next);
  }
};

var findKthToLast2 = (k, head) => {

  var node = head;
  var total = 0;
  var count = 0;

  while (node) {
    total++;
    node = node.next;
  }
  var val = total - k;
  node = head;
  while (node) {
    count++;
    if (count >= val) {
      console.log(count);
    }
    node = node.next;
  }

};

var a = new LinkedList('1');
var b = new LinkedList('2');
var c = new LinkedList('3');
var d = new LinkedList('4');
var e = new LinkedList('5');
var f = new LinkedList('6');
var g = new LinkedList('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

//findKthToLast(3, a);
findKthToLast2(3, a);

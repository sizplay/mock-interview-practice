module.export = (head) => {
  while (!head) {
    console.log(head.value);
    head = head.next;
  }
}

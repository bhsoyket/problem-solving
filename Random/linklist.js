// try to make linklist using js arrow function

const LinkedList = (head = null) => {
  return { head };
};

const ListNode = (value, next = null) => {
  return { value, next };
};

const size = (list) => {
  let count = 0;
  let node = list.head;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
};

const clear = (list) => {
  list.head = null;
};

const getLast = (list) => {
  let lastNode = list.head;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
  }
  return lastNode;
};

const add = (list, element) => {
  const node = ListNode(element);
  // to store current node
  var current;
  // if list is Empty add the
  // element and make it head
  if (list.head == null) list.head = node;
  else {
    current = list.head;
    // iterate to the end of the
    // list
    while (current.next) {
      current = current.next;
    }
    // add node
    current.next = node;
  }
};

const insertAt = (list, element, index) => {
  if (index < 0 || index > size(list))
    return console.log("Please enter a valid index.");
  else {
    // creates a new node
    var node = ListNode(element);
    var curr, prev;

    curr = list.head;
    // add the element to the
    // first index
    if (index == 0) {
      node.next = list.head;
      list.head = node;
    } else {
      curr = list.head;
      var it = 0;

      // iterate over the list to find
      // the position to insert
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      // adding an element
      node.next = curr;
      prev.next = node;
    }
  }
};

const removeFrom = (list, index) => {
  if (index < 0 || index >= size(list))
    return console.log("Please Enter a valid index");
  else {
    var curr,
      prev,
      it = 0;
    curr = list.head;
    prev = curr;
    // deleting first element
    if (index === 0) {
      list.head = curr.next;
    } else {
      // iterate over the list to the
      // position to removce an element
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      // remove the element
      prev.next = curr.next;
    }
    // return the remove element
    return curr.value;
  }
};

const printList = (list) => {
  var curr = list.head;
  var str = "";
  while (curr) {
    str += curr.value + " ";
    curr = curr.next;
  }
  console.log(str);
  return str;
};

let node1 = ListNode(2);
let node2 = ListNode(4);
let node3 = ListNode(9);
node1.next = node2;
node2.next = node3;

let list = LinkedList(node1);

console.log(list);
insertAt(list, 3, 1);
console.log(removeFrom(list, 3));
console.log(list.head.next);
console.log(size(list));
add(list, 5);
console.log(getLast(list));
console.log(printList(list));

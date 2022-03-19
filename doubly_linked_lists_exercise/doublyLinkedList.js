function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList(array = []) {
  this.head = null;
  this.tail = null;
  this.length = 0;

  if (Array.isArray(array)) {
    array.forEach(el => {
      this.push(el);
    });
  }
}

DoublyLinkedList.prototype.push = function(val) {
  const node = new Node(val);

  if (this.length === 0) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  this.length++;
  return this;
}

DoublyLinkedList.prototype.unshift = function(val) {
  const node = new Node(val);

  if (this.length === 0) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  this.length++;
  return this;
}

DoublyLinkedList.prototype.insert = function(index, val) {
  const node = new Node(val);
  const prevNode = this.getNode(index - 1);

  node.next = prevNode.next;
  node.prev = prevNode;
  prevNode.next = node;

  return this.length++;
}


DoublyLinkedList.prototype.getNode = function(index) {
  if (index === this.length - 1) return this.tail;

  let count = 0;
  let temp = this.head;
  while (temp) {
    if (count === index) {
      break;
    }
    temp = temp.next;
    count++;
  }
  return temp;
}

DoublyLinkedList.prototype.get = function(index) {
  let node = this.getNode(index);

  return node ? node.val : null;
}

DoublyLinkedList.prototype.set = function(index, val) {
  let node = this.getNode(index);

  node ? node.val = val : undefined;
}

DoublyLinkedList.prototype.pop = function() {
  if (this.length === 0) return undefined;

  let nodeToRemove = this.tail;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = nodeToRemove.prev;
    nodeToRemove.prev = null;
    this.tail.next = null;
  }

  this.length--;

  return nodeToRemove.val;
}

DoublyLinkedList.prototype.shift = function() {
  if (this.length === 0) return undefined;

  let nodeToRemove = this.head;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = nodeToRemove.next;
    nodeToRemove.next = null;
    this.head.prev = null;
  }

  this.length--;

  return nodeToRemove.val;
}

DoublyLinkedList.prototype.remove = function(index) {
  if (index === 0) this.shift(index);
  else if (index === this.length - 1) this.pop(index);
  else {
    if (this.length === 0) return undefined;

    const nodeToRemove = this.getNode(index);

    nodeToRemove.prev.next = nodeToRemove.next;
    nodeToRemove.next.prev = nodeToRemove.prev;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;

    this.length--;
    return nodeToRemove.val;
  }
}

DoublyLinkedList.prototype.reverse = function() {
  let tempNode = this.head;
  
  while (tempNode.next) {
    let prevNode = tempNode.prev;
    tempNode.prev = tempNode.next;
    tempNode = tempNode.next;
    tempNode.prev.next = prevNode;
  }

  tempNode.next = tempNode.prev;
  tempNode.prev = null;

  let temp = this.tail;

  this.tail = this.head;
  this.head = temp;

  return this;
}

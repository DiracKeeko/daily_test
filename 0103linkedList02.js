class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(element) {
    const newNode = new Node(element);

    if (this.head === null) {
      this.head = newNode;
    } else {
      const lastNode = this.getNode(this.size - 1); // 发现 需要额外实现getNode(index)
      lastNode.next = newNode;
    }
    
    this.size += 1;
  }

  appendAt(position, element) {}

  remove(position) {}

  indexOf(element) {}

  // index = position - 1; 如首位 对应的position为1, index为0;
  getNode(index) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("out of range");
    }
    let curNode = this.head;
    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
    }
    return curNode;
  }
}

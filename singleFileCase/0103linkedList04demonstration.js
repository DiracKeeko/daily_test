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
      const lastNode = this.getNode(this.size - 1);
      lastNode.next = newNode;
    }

    this.size += 1;
  }

  appendAt(position, element) {
    if (position < 1 || position > this.size) {
      throw new Error("position out of range");
    }

    const newNode = new Node(element);

    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const prevNode = this.getNode(position - 2);
      const curNode = prevNode.next;
      newNode.next = curNode;
      prevNode.next = newNode;
    }

    this.size += 1;
  }

  remove(position) {
    if (position < 1 || position > this.size) {
      throw new Error("position out of range");
    }

    if (position === 1) {
      this.head = this.head.next;
    } else {
      const prevNode = this.getNode(position - 2);
      const nextNode = prevNode.next.next;
      prevNode.next = nextNode;
    }

    this.size -= 1;
  }

  indexOf(element) {
    let curNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (curNode.element === element) {
        return i;
      }
      curNode = curNode.next;
    }
    return -1;
  }

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

// 有了Node 和 LinkedList 实现一个最简单的链表就是让 LinkedList的head 指向第一个Node 
// console.log 有折叠的情况，改用 console.dir(el, {depth: num}); 

let ll = new LinkedList();
ll.append(1);
ll.append("aa");

ll.appendAt(1, 3);
ll.appendAt(2, "a");

console.dir(ll, {
  depth: 100
})

ll.remove(2); // 移除 "a"

console.dir(ll, {
  depth: 100
})

console.log("index-->", ll.indexOf("cc")); // -1 -> 找不到

console.log("index-->", ll.indexOf("aa")); // 2

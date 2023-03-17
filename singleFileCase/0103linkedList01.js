// JS原生没有链表，需要自己实现。

// 需要自行实现   1.单节点  2.链表 (包括append, appendAt, remove, indexOf)

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

  append(element) {}

  appendAt(position, element) {}

  remove(position) {}

  indexOf(element) {}
}

// https://www.bilibili.com/video/BV1P5411H77a/?spm_id_from=333.337.search-card.all.click&vd_source=ded6a5fc869f2d274bf26ca220934079

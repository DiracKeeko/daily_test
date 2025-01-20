class Event {
  constructor() {
    this.events = {};
  }
  // 订阅事件
  on(event, callback) {
    this.events[event] = callback;
  }
  // 发布事件
  emit(event, args) {
    this.events[event]?.(args);
  }
  // 取消订阅
  off(event) {
    delete this.events[event];
  }
}

let eventInstance = new Event();

// 订阅事件
eventInstance.on('add', (id) => {
  console.log("do add, id-> ", id);
})

// 发布事件
eventInstance.emit('add', 3); // do add, id->  3
eventInstance.emit('add', 4); // do add, id->  4

// 取消订阅
eventInstance.off('add');
eventInstance.emit('add', 5); // 无效
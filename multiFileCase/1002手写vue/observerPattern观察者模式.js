class Observed {
  constructor() {
    this.listener = [];
  }
  subscribe(callback) {
    this.listener.push(callback);
  }
  notify(message) {
    this.listener.forEach((func) => func(message));
  }
  unsubscribe(callback) {
    this.listener = this.listener.filter((item) => item !== callback);
  }
}

let ob = new Observed();

function funcOne(args) {
  console.log('我是func 01; ', args);
}
function funcTwo(args) {
  console.log('我是func 02; ', args);
}

// 注册观察者
ob.subscribe(funcOne);
ob.subscribe(funcTwo);

ob.notify('被观测者的状态发生了改变, 01');

ob.unsubscribe(funcOne);
ob.notify('被观测者的状态发生了改变, 02');

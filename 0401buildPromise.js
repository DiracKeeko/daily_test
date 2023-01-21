class Commitment {
  static PENDING = "待定";
  static FULFILLED = "成功";
  static REJECTED = "失败";

  constructor(func) {
    this.status = Commitment.PENDING;
    this.result = null;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    try {
      // 02 处理创建实例时 throw new Error
      // func(this.resolve.bind, this.reject); // 报错,status为undefined, 说明this跟丢了
      func(this.resolve.bind(this), this.reject.bind(this)); // 01 处理this指向
    } catch (error) {
      this.reject(error); // 这里是直接执行, 不是创建实例后再执行, 因此不用bind
    }
  }
  resolve(result) {
    // 06 resolve 和 reject要在事件循环末尾执行
    setTimeout(() => {
      // console.log("result in resolve->", result);
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.FULFILLED;
        this.result = result;
        this.resolveCallbacks.forEach((callback) => callback(result));
      }
    });
  }
  reject(result) {
    setTimeout(() => {
      // console.log("result in reject->", result);
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.REJECTED;
        this.result = result;
        this.rejectCallbacks.forEach((callback) => callback(result));
      }
    });
  }
  then(onFULFILLED, onREJECTED) {
    return new Commitment((resolve, reject) => {

      // 03 处理then的参数不是function的情况
      onFULFILLED = typeof onFULFILLED === "function" ? onFULFILLED : () => {}; // 如果不是function则将赋值一个空函数
      onREJECTED = typeof onREJECTED === "function" ? onREJECTED : () => {};
      if (this.status === Commitment.PENDING) {
        this.resolveCallbacks.push(onFULFILLED);
        this.rejectCallbacks.push(onREJECTED);
      }
      if (this.status === Commitment.FULFILLED) {
        setTimeout(() => {
          onFULFILLED(this.result);
        });
      }
      if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          onREJECTED(this.result);
        });
      }

    })
  }
}

console.log("01");
let commitment = new Commitment((resolve, reject) => {
  console.log("02");
  setTimeout(() => {
    console.log(commitment.status);
    resolve("这次一定");
    console.log(commitment.status);
    console.log("04");
  });
  // throw new Error("洗洗睡吧");
});

commitment
  .then((result) => {
    console.log(result),
    console.log(result.message)
  })
  .then((result) => {
    console.log(result),
    console.log(result.message)
  });
console.log("03");

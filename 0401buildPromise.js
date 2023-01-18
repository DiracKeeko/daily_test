class Commitment {
  static PENDING = "待定";
  static FULFILLED = "成功";
  static REJECTED = "失败";

  constructor(func) {
    this.status = Commitment.PENDING;
    this.result = null;
    try { // 02 处理创建实例时 throw new Error
      // func(this.resolve.bind, this.reject); // 报错,status为undefined, 说明this跟丢了
      func(this.resolve.bind(this), this.reject.bind(this)); // 01 处理this指向
    } catch (error) {
      this.reject(error); // 这里是直接执行, 不是创建实例后再执行, 因此不用bind
    }
  }
  resolve(result) {
    console.log("result in resolve->", result);
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.FULFILLED;
      this.result = result;
    }
  }
  reject(result) {
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.REJECTED;
      this.result = result;
    }
  }
  then(onFULFILLED, onREJECTED) {
    if (this.status === Commitment.FULFILLED) {
      onFULFILLED(this.result);
    }
    if (this.status === Commitment.REJECTED) {
      onREJECTED(this.result);
    }
  }
}

let commitment = new Commitment((resolve, reject) => {
  // resolve("这次一定");
  throw new Error("洗洗睡吧");
});

commitment.then(
  (result) => {
    console.log(result);
  },
  (result) => {
    console.log(result.message);
  }
);

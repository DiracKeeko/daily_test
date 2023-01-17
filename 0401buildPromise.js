class Commitment {
  static PENDING = "待定";
  static FULFILLED = "成功";
  static REJECTED = "失败";

  constructor(func) {
    this.status = Commitment.PENDING;
    this.result = null;
    // func(this.resolve.bind, this.reject); // 报错,status为undefined, 说明this跟丢了
    func(this.resolve.bind(this), this.reject.bind(this)); // 01处理this指向
  }
  resolve() {
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.FULFILLED;
    }
  }
  reject() {
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.REJECTED;
    }
  }
}

let commitment = new Commitment((resolve, reject) => {
  resolve("这次一定");
});

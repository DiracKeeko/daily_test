let obj = {
  name: 'Tom',
  age: 18,
  job: {
    company: 'CMBNT'
  }
};

function defineReactive(obj, key, val) {
  observe(val); // 递归处理val为对象的情况
  // val 就是一个闭包
  Object.defineProperty(obj, key, {
    get() {
      console.log('do get, key-> ', key);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set-> ', newVal);
        val = newVal;
      }
    }
  });
}

function observe(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }
  Object.keys(obj).forEach((key) => defineReactive(obj, key, obj[key]));
}


observe(obj);

console.log(obj.name);

console.log(obj.job.company); // 预期 do get, key-> job;  do get, key-> company
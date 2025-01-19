let obj = {
  name: 'Tom',
  age: 18
};

function defineReactive(obj, key, val) {
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
obj.age;
obj.age = 19;
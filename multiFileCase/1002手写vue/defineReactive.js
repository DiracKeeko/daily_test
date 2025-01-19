let obj = {};

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

defineReactive(obj, 'age', 18);
console.log(obj.age);
obj.age = 19;
console.log(obj.age);

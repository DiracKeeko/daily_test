function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      return val;
    },
    set(newVal) {
      if (val !== newVal) {
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

// observeArray 对 arr 中的每一个元素进行了 observe 操作，但没有对 arr 本身进行observe操作
// 因此通过 arr[index] = newVal; 修改数组中的某个值时，不会触发set();
function observeArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    observe(arr[i]);
  }
}

// vue中的 set 函数， 直接调用 defineReactive()
function set(obj, key, val) {
  defineReactive(obj, key, val);
}

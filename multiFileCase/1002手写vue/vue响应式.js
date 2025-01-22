
/* 
  map {
    对象1: {
      属性1: [...sub数组],
      属性2: [...sub数组]
    }
    对象2: {
      属性2: [...sub数组],
      属性3: [...sub数组]
    }
  }
*/

class Dep {
  constructor() {
    this.subs = [];
  }
}

const map = new Map();
function getDep(target, key) {
  let depsMap = map.get(target);

  if (!depsMap) {
    depsMap = new Map();
    map.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

function defineReactive(obj, key, val) {
  observe(val);
  const dep = getDep(obj, key);

  Object.defineProperty(obj, key, {
    get() {
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal;
        dep.notify(); // --todo
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
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
    this.target = null; // 需要被放入subs中的callback
  }

  notify() {
    this.subs.forEach(item => item());
  }

  depend() {
    if (Dep.target) {
      this.subs.push(Dep.target); // 注意要用Dep.target;
    }
  }
}

const map = new Map();
function getDep(target, key) {
  /* 
  let depsMap = map.get(target); // 获取被观察的对象
  let dep = depsMap.get(key); // 获取被观察对象的key 对应的 dep (需要dep.subs, 需要dep.notify()去通知所有的subs )
  // 下面的两个if 都是为了初始化操作
   */

  let depsMap = map.get(target);

  if (!depsMap) {
    depsMap = new Map();
    map.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep(); // dep.subs 就是被观察的数组
    depsMap.set(key, dep);
  }
  return dep;
}

function defineReactive(obj, key, val) {
  observe(val);
  const dep = getDep(obj, key);

  Object.defineProperty(obj, key, {
    get() {
      dep.depend(); // 出发Dep.depend(), 将Dep.target放入this.subs中
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal;
        dep.notify(); // 一旦变更新的值，就通知所有的subs
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

const keeko = {
  age: 18,
  address: 'CN'
};
observe(keeko);

const function1 = () => {
  console.log('age', keeko.age);
};

const function2 = () => {
  console.log('address', keeko.address);
};

function addUpdate(cb) {
  Dep.target = cb;
  cb(); // 执行cb, 就会访问对象中的值，触发get
  Dep.target = null;
}

addUpdate(function1);
addUpdate(function2);

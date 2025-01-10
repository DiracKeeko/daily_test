let activeEffect = null;

// 简单的依赖收集容器
const targetMap = new WeakMap();

function reactive(target) {
  return new Proxy(target, {
    get(obj, key) {
      // 收集依赖
      track(obj, key);
      return obj[key];
    },
    set(obj, key, value) {
      obj[key] = value;
      // 触发更新
      trigger(obj, key);
      return true;
    }
  });
}

function track(target, key) {
  if (!activeEffect) return;

  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let deps = depsMap.get(key);
  if (!deps) {
    deps = new Set();
    depsMap.set(key, deps);
  }

  deps.add(activeEffect);
}

function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;

  const deps = depsMap.get(key);
  if (deps) {
    deps.forEach((effect) => effect());
  }
}

function effect(fn) {
  activeEffect = fn;
  fn(); // 立即执行一次，收集依赖
  activeEffect = null;
}

const state = reactive({ count: 0 });

effect(() => {
  console.log(`Count is: ${state.count}`);
});

state.count++; // 输出：Count is: 1
state.count++; // 输出：Count is: 2

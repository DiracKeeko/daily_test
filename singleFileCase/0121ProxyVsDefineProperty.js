const count = 100000;

// Proxy
const target = {
  age: 0
};

const proxy = new Proxy(target, {
  get(target, propKey, receiver) {
    return Reflect.get(target, propKey, receiver);
  },
  set(target, propKey, value) {
    return Reflect.set(target, propKey, value);
  }
})

console.time("Proxy");
for (let i = 0; i < count; i++) {
  proxy.age;
  proxy.age = i;
}
console.log("proxy.age->", proxy.age);
console.timeEnd("Proxy");


// defineProperty
const deTarget = {};
Object.defineProperty(deTarget, "age", {
  value: 42,
  writable: true
})

console.time("defineProperty");
for (let i = 0; i < count; i++) {
  deTarget.age;
  deTarget.age = i;
}
console.log("deTarget.age->", deTarget.age);
console.timeEnd("defineProperty");

/* 
  Proxy: 15.06ms
  defineProperty: 1.464ms
*/
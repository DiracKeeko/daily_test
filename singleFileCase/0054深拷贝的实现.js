// ### 深拷贝
const originObj = { a: 1, b: 2 };

const newObj = JSON.parse(JSON.stringify(originObj));
console.log("newObj->", newObj); // { a: 1, b: 2 }
originObj.b = 3;
console.log("newObj->", newObj); // { a: 1, b: 2 } originObj和newObj已经不相关

// JSON.parse(JSON.stringify(originObj)) 这种方式的实现有缺陷

const originObj1 = {
  a: 1,
  b: {
    c: 2,
  },
  d: [1, 2, 3]
}

// 深拷贝的实现
function cloneDeep(source) {
  if (typeof source !== "object" || source === null) {
    return source;
  }
  const target = Array.isArray(source) ? [] : {};
  for (const key in source) {
    target[key] = cloneDeep(source[key]);
  }
  return target;
}

const res = cloneDeep(originObj1);
console.log("res->", res);
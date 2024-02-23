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
function deepClone(source) {
  if (typeof source !== "object" || source === null) {
    return source;
  }

  let target;
  if (source instanceof Date) {
    target = new Date(source);
  } else if (source instanceof Array) {
    target = [];
  } else {
    target = {};
  }

  const allKeyArr = [...Object.keys(source)];
  for (const key of allKeyArr) {
    if (typeof source[key] === "object" && source[key] !== null) {
      target[key] = deepClone(source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const res = deepClone(originObj1);
console.log("res->", res);
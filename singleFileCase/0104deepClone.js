function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const obj = {
  a: "12",
  b: { b1: "22" }
};
const resObj = deepClone(obj);
console.log("resObj->", resObj);

const arr = [1, 2, [3, 4], [5, [6, 7]]];
const resArr = deepClone(arr);
console.log("resArr->", resArr);

const complexObj = {
  obj,
  arr
}
const resComplexObj = deepClone(complexObj);
console.log("resComplexObj->", resComplexObj);

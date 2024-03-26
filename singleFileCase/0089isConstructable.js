// function isConstructable(target) {
//   try {
//     new target();
//     return true;
//   } catch (e) {
//     return false;
//   }
// }

function isConstructable(fn) {
  try {
    Reflect.construct(Object, [], fn); // 判断 [[construct]]
    return true;
  } catch(e) {
    return false;
  }
}

function Test1() {};
const Test2 = () => {};

console.log(isConstructable(Test1)); // true
console.log(isConstructable(Test2)); // false
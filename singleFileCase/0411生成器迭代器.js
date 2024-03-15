// 生成器&迭代器 (Generator&Iterator)
function* generatorExample() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = generatorExample();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
console.log("===========");

function* generatorExample2() {
  yield 1;
  yield 2; // yield 方法表示生成器函数仍未结束
  return 3; // return 方法可以结束生成器函数
}

const iterator2 = generatorExample2();
console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: 2, done: false }
console.log(iterator2.next()); // { value: 3, done: true }
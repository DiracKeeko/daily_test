
async function test() {
  return "hello";
}
const res = test();
console.log("res->", res);

// 上下两个的输出结果是等价的
function test1() {
  return Promise.resolve("hello");
}
console.log("res1->", test1());
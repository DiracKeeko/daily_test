// 用console.time("name1"); 配合 console.timeEnd("name1") 来统计两个console之间的时间
console.time('test');

let re = 0;
for (var i = 0; i < 1000; i++) {
  re += i;
}
//                终止计时器
//console.timeEnd()用来停止一个计时器，需要一个计时器的名字作为参数
console.timeEnd('test');

console.time('test1');

let re1 = 0;
re1 = 500 * 1001;
//                终止计时器
//console.timeEnd()用来停止一个计时器，需要一个计时器的名字作为参数
console.timeEnd('test1');

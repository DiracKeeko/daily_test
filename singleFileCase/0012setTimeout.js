/* 
console.log('001');
setTimeout(function () {
  console.log('002');
}, 100);
console.log('003');
// 依次输出 001 003 002

function consoleMsg(msg) {
  console.log(msg);
}

setTimeout(consoleMsg, 100, '004');

setTimeout(() => {
  consoleMsg('005');
}, 100);
 */

/* 
  上面代码块的执行顺序

  从前到后
  001
  003
  002
  004
  005
*/


// for循环中的setTimeout (for循环 + setTimeout)
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // i === 3?
    console.log(0);
  }, 100)
  console.log(5);
}

/* 
  执行顺序从前到后
  5
  5
  5
  0
  0
  1
  0
  2
  0
*/
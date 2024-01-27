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

/* 
  从前到后
  001
  003
  002
  004
  005
*/

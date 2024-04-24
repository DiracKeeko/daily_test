// 纯函数
/* 
  1.确定性：对于相同的输入，纯函数总是产生相同的输出
  2.无副作用：纯函数不会修改其外部环境，包括全局变量、输入参数对象等。
*/

// add是纯函数
function add(a, b) {
  return a + b;
}

// addPlus不是纯函数
let global = 0;
function addPlus(a, b) {
  global += 1; // 修改了全局变量，不是纯函数
  return a + b;
}



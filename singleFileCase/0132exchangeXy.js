// 交换x, y的值

function exchangeXy(x, y) {
  let temp = x;
  x = y;
  y = temp;
  console.log(x, y);
}

exchangeXy(1, 2)

// 不使用临时变量
function exchangeXy2(x, y) {
  [y, x] = [x, y];
  console.log(x, y);
}
console.log("exchangeXy2->");
exchangeXy2(1, 2)


function exchangeXy3(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
  console.log(x, y);
}
console.log("exchangeXy3->");
exchangeXy3(1, 2)


function exchangeXy4(x, y) {
  x = x ^ y;
  y = x ^ y;
  x = x ^ y;
  console.log(x, y);
}
console.log("exchangeXy4->");
exchangeXy4(1, 2)
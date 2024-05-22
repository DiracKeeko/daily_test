/* 
  输入 string
  返回 boolean

  判定输入的string是否是ip的子项
  
  ip的子项由 位于 0 到 255 之间的数字 组成，且不能含有前导 0

  正例:
  "0", "1", "111", "255"

  反例:
  "00", "01", "256"
*/

// 解法一  推荐 -> 选用这个
function isIpItem(str) {
  if (str === '0') {
    return true;
  }

  if (str[0] !== '0' && Number(str) <= 255) {
    return true;
  }

  return false;
}

// 解法二
function isIp(str) {
  const num = parseInt(str);
  if (num === 0 && str.length === 1) {
    return true;
  }

  if (str[0] === '0') {
    return false;
  }

  if (num <= 255) {
    return true;
  }

  return false;
}

// 选择数组中第n大的数
function nthLargest(arr, n) {
  const sortedArr = [...arr].sort((a, b) => b - a);
  return sortedArr[n - 1];
}

const scores = [50, 85, 90, 65, 70];
console.log(nthLargest(scores, 2));  // 85 (第 2 大)
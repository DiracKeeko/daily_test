// 将数组分成固定长度的小数组
function chunkArray(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(chunkArray(arr, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
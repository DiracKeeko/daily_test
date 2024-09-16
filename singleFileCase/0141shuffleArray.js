// 随机打乱数组（Fisher-Yates 洗牌算法）
function shuffleArray(arr) {
  const res = [...arr];
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}

const arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr));  // [2, 1, 5, 3, 4] (每次结果可能不同)


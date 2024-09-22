/* 
  获取两个数组的对称差（不同时存在于两个数组中的元素）  symmetricDifference

  场景：找出两个列表中不相同的元素。
*/

function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...arr1.filter(item => !set2.has(item)), ...arr2.filter(item => !set1.has(item))];
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(symmetricDifference(arr1, arr2));  // [1, 2, 5, 6]
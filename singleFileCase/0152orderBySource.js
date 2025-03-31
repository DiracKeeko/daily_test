function sortBySource(arr, sourceOrder) {
  const sourceMap = new Map(sourceOrder.map((src, index) => [src, index]));
  // console.log("sourceMap-> ", sourceMap); // { 'a' => 0, 'b' => 1, 'c' => 2 }
  
  // 对ts项目
  // const sourceMap = new Map<string, number>(sourceOrder.map((src, index) => [src, index]));
    
  return arr.slice().sort((a, b) => {
    return (sourceMap.get(a.source) ?? Infinity) - (sourceMap.get(b.source) ?? Infinity);
  });
    /* 
      sourceMap.get(a.source) ?? Infinity 的意思是：

        1. sourceMap.get(a.source) 尝试从 sourceMap 获取 a.source 对应的索引值。

        2. 如果 a.source 不在 sourceMap 中，get 方法返回 undefined。

        3. ?? Infinity 是空值合并操作符（nullish coalescing operator），如果 sourceMap.get(a.source) 是 undefined 或 null，则使用 Infinity 作为默认值
    */
   /* 
    为什么要用 Infinity？
      如果某个 source 不在 sourceOrder 里，我们希望它的排序值是最大，这样 sort 时它会被排在数组的末尾，而不会影响有序的 source
   */
  
}

const arr1 = [
  { source: 'a', name: 'xx' },
  { source: 'c', name: 'yy' },
  { source: 'b', name: 'zz' }
];
const arr2 = [
  { source: 'c', name: 'zzz' },
  { source: 'b', name: 'yyy' }
];
const sourceOrder = ['a', 'b', 'c'];

const sortedArr1 = sortBySource(arr1, sourceOrder);
const sortedArr2 = sortBySource(arr2, sourceOrder);

console.log(sortedArr1);
console.log(sortedArr2);

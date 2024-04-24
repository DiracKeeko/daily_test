// 原生纯函数

// ES14 (ES2023)
/* 
  At the time of this file (2024-04-24), Array.prototype.toSorted() is supported by Node.js version 20+. 
  Most developers use the Node.js LTS version (currently version 18). So if you're using Node.js version 19, 18 or lower in IDE software, .toSorted() is not supported.

  For the case of LeetCode, I see that it currently uses Node.js 16 to run your code. So you might want to resort to this alternative (and effectively equivalent) code for the time being:
*/

// 1. Array.prototype.toSorted() // 排序并返回新的(排序之后的)数组
const arr = [1, 3, 2, 5, 7];
// arr.sort(); // 不是纯函数，改变了原数组。

console.log("arr.toSorted() ->", arr.toSorted()); // [1, 2, 3, 5, 7]
console.log("arr ->", arr); // [1, 2, 3, 5, 7]

// 2. Array.prototype.toReversed() // 反转并返回新的(反转之后的)数组
const items = [1, 2, 3];
const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

// 3. Array.prototype.toSpliced() // 删除，插入，或替换指定位置的元素并返回新的(修改后的)数组
const months = ["Jan", "Mar", "Apr", "May"];

// 在索引 1 处添加一个元素
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// 从第 2 个索引开始删除两个元素
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// 4. Array.prototype.with() // 用新值替换旧值并返回新的(修改后的)数组
console.log(arr.with(2, 6)); // [1, 3, 6, 5, 7];
console.log(arr); // [1, 3, 2, 5, 7];



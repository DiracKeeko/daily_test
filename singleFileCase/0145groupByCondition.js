/* 
按条件对数组进行分组

场景：将用户分组为“成人”和“未成年”。
*/

// v1
// function groupByCondition(arr, conditionFn) {
//   const res = { match: [], nonMatch: [] };
//   arr.forEach(cur => {
//     if (conditionFn(cur)) {
//       res['match'].push(cur);
//     } else {
//       res['nonMatch'].push(cur);
//     }
//   });
//   return res;
// }

// v2
function groupByCondition(arr, conditionFn) {
  return arr.reduce((acc, cur) => {
    const groupByKey = conditionFn(cur) ? "match" : "nonMatch";
    acc[groupByKey] = acc[groupByKey] || [];
    acc[groupByKey].push(cur);
    return acc;
  }, {})
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 19 }
];
const grouped = groupByCondition(users, (user) => user.age >= 18);
console.log(grouped);
/* 
{
  match: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 19 }],
  nonMatch: [{ name: 'Bob', age: 17 }]
} 
*/

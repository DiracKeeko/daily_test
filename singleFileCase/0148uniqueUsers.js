// 数组去重并保持顺序
/* 
  去重对象数组中的某个属性（如 id） 使用到了new Map();
*/
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },
];

const uniqueUsers = Array.from(new Map(users.map(item => [item.id, item])).values());

console.log("uniqueUsers->", uniqueUsers);
// uniqueUsers-> [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' } ]
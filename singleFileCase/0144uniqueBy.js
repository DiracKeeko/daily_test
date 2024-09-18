function uniqueBy(arr, key) {
  const res = [];
  const s = new Set();
  for (const item of arr) {
    const val = item[key];
    if (!s.has(val)) {
      res.push(item);
      s.add(val);
    }
  }
  return res;
}

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' }
];
console.log(uniqueBy(users, 'id'));  // [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
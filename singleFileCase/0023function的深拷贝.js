const a = {
  name: 1,
  func: function (a, b) {
    return a + b;
  }
};

const b = {
  name: 2,
  func: new Function(`return ${a.func.toString()}`)()
};

a.func = function (a, b) {
  return a - b;
};

console.log('a.func === b.func ->', a.func === b.func);
console.log(a.func(1, 2), b.func(1, 2));

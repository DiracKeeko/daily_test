let b = new Boolean(false);
console.log("b->", b); // [Boolean: false]

if (b) {
  console.log("done");
} 

// 对象转换为字符串，会变为true，所以会运行。
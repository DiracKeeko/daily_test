function testForIn(objOrArr) {
  console.log(Array.isArray(objOrArr) ? "Array" : "Object");

  for (let key in objOrArr) {
    console.log("key->", key);
  }
}

const arr = ["a", "b", "c", 4];
const resArr = testForIn(arr);

/* 
  Array
  key-> 0
  key-> 1
  key-> 2
  key-> 3
*/
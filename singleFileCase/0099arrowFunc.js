// 箭头函数

/*
实现一个函数 
insert(2).into([1, 3]).after(1);
*/

function insert(val) {
  return {
    into: function(arr) {
      return {
        after: function(afterNumber) {
          arr.splice(arr.indexOf(afterNumber) + 1, 0, val);
          return arr;
        }
      }
    }
  }
}

console.log("res->", insert(2).into([1, 3]).after(1));


// 改用箭头函数完成
let insertArrow = (val) => ({
  into: (arr) => ({
    after: (afterNumber) => {
      arr.splice(arr.indexOf(afterNumber) + 1, 0, val);
      return arr;
    }
  })
})

console.log("res2->", insertArrow(2).into([1, 3]).after(1));
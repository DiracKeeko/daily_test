const obj = {
  _name: "Rookie",
  id: "1",
  age: 18,
  gender: "male",
  email: "admin@example.com"
};

let { _name, email } = obj;

console.log(_name, email);


const { _name: theName, email: theEmail } = obj; // 解构，并重命名变量，赋值theName, theEmail
console.log(theName, theEmail);


const arr = ["id", "gender"];
const { [arr[0]]: theId, [arr[1]]: theGender } = obj; // 使用用数组中已经存在的key，注意要加中括号
console.log(theId, theGender);


const { _name: xName, email: xEmail, major: xMajor = "math" } = obj; // 解构，赋值默认值xMajor = "3"
console.log(xName, xEmail, xMajor);


// 获取"剩余的" obj  => 效果等同于obj删除age这个key之后，剩下的部分
let { age, ...resObj } = obj;
console.log("...resOjb->", resObj);
/* 
  // 输出
  {
    _name: 'Rookie',
    id: '1',
    gender: 'male',
    email: 'admin@example.com'
  }
*/

// 用解构的方式给变量重新赋值  ↓
let gender = "female";
({gender} = obj); // 必须加括号 "()" 否则会报错
console.log("gender->", gender);
// 没啥用 ↑
// 远不如 gender = obj.gender


// 对象嵌套的解构赋值
const obj1 = {
  name: "Rookie",
  id: "1",
  skills: {
    play: {
      main: "LOL"
    },
    language: {
      frontEnd: "js",
      backEnd: "java"
    }
  }
}

let { skills: {language: {frontEnd}}} = obj1;
console.log("frontEnd->", frontEnd);
let a = "a";
let b = "b";

[a, b] = [b, a];
console.log("a->", a, "b->", b);

let num1 = 30;
let num2 = 10;
let num3 = 40;
let num4 = 20;
[num1, num2, num3, num4] = [num2, num4, num1, num3] ;
console.log(`第一: ${num1}, 第二: ${num2}, 第三: ${num3},第四: ${num4}`);

const arr= ['蛋同学', '鸡同学', '鸭同学', '鹅同学', '牛同学', '羊同学'];
const s1 = arr[0]; 
const s2 = arr[1];
const s3 = arr[2];

// ↑ 解构赋值 等价于如下 ↓
const [ss1, ss2, ss3] = arr;

// 不需要完全取用, 则
const [sss1, , sss3, , , sss6] = arr;

let x1 = "c";
[x1] = arr; // 可以进行变量的改写(赋值)操作


[n1, , , , , , n7 = "7号同学"] = arr; // 此处n7是默认值

console.log("n7 ->", n7); // n7 -> 7号同学

const { 2: xx3, 4: xx5 } = arr; // 对象型 数组解构赋值 以属性的形式指定元素的序号
console.log(`第三名: ${xx3}, 第五名: ${xx5}`); // 第三名: 鸭同学, 第五名: 牛同学


let [notExist = '数组为空'] = arr;
console.log('notExist->', notExist); // notExist-> 蛋同学

const arr2 = []
let [notExist1 = '数组为空'] = arr2;
console.log('notExist1->', notExist1); // notExist1-> 数组为空



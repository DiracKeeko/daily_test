/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #中等 #object-keys

  ### 题目

  实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

  例如:

  ```ts
  type Test = { id: '1' }
  type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
  ```

  > 在 Github 上查看：https://tsch.js.org/527/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 这种写法已经可以达到效果，但是本题会校验不通过
// type AppendToObject<T, U extends PropertyKey, V> = T & { [K in U]: V };
/* 
  这个练习要求输出的最终结果是一个类型而不是交集
*/

// v2 这里不用考虑T和U的key重复的问题
type AppendToObject<T, U extends PropertyKey, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  moon: false | undefined
}

type AppendToObjectRes = AppendToObject<test3, 'moon', false | undefined>; // testExpect3
/*
  18 - 获取元组长度
  -------
  by sinoon (@sinoon) #简单 #tuple

  ### 题目

  创建一个`Length`泛型，这个泛型接受一个只读的元组，返回这个元组的长度。

  例如：

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla> // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > 在 Github 上查看：https://tsch.js.org/18/zh-CN
*/

/* 
  a plain type T doesn't have a length property
  普通类型 T 没有 length 属性
*/

// type Length<T extends readonly any[]> = T['length'];

type Length<T extends readonly unknown[]> = T['length'];

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type teslaLength = Length<tesla>
// 'tesla' refers to a value, but is being used as a type here. Did you mean 'typeof tesla'?

/*
  总结： 将数组转化为元组
 */
// typeof Array -> Tuple  
// 通过 typeof tesla 将普通数组(Array)转化为 typescript中的元组(Tuple)  

type Res1 = Length<typeof tesla>; // 4
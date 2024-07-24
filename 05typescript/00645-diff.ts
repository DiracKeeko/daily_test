/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #中等 #object

  ### 题目

  获取两个接口类型中的差值属性。

  ```ts
  type Foo = {
    a: string;
    b: number;
  }
  type Bar = {
    a: string;
    c: boolean
  }

  type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
  type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }

  ```

  > 在 Github 上查看：https://tsch.js.org/645/zh-CN
*/

/* _____________ 你的代码 _____________ */
// v1
type Diff<O extends BaseObj, O1 extends BaseObj> = Omit<O & O1, keyof (O | O1)>;

// v2 下面是手写Omit的实现  看00003 omit
// type Diff<O extends BaseObj, O1 extends BaseObj> = {
//   [K in keyof (O & O1) as K extends keyof (O | O1) ? never : K]: (O & O1)[K]
// }

/* 
  总结:
    要了解 keyof (Obj1 | Obj2) 的结果。 结果是两个type对象交集的key
*/
type Obj1 = {
  a: number;
  b: string;
  c: boolean;
};

type Obj2 = {
  c: boolean;
};
type Obj1Obj2Res = keyof (Obj1 | Obj2); // 'c'

type Obj3 = Obj1 | Obj2;
type Obj3Res = keyof Obj3; // 'c'

/* 
type Obj22 = {
  b: boolean; // b的定义和 Obj1中的b的定义不同
  c: boolean;
};

type Obj1Obj22Res = keyof (Obj1 | Obj2); // 'b' | 'c'
*/
const obj31: Obj3 = {
  c: false
};

const obj32: Obj3 = {
  a: 1,
  c: false
};

const obj33: Obj3 = {
  a: 1,
  b: 'b',
  c: false
};

const obj34: Obj3 = {
  a: 1,
  b: 3, // 报错
  c: false
};

const obj35: Obj3 = {
  a: 1,
  b: 'b',
  c: false,
  d: 3 // 报错
};

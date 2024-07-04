// 00189
type MyAwaitedV1<T extends PromiseLike<any>> = T extends PromiseLike<infer X> ? X : never;

// 考虑递归
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer X>
  ? X extends PromiseLike<any>
    ? MyAwaited<X>
    : X
  : never;


/* 
  学习infer的作用 （2023年更新）
  https://juejin.cn/post/6844904170353328135
*/

// 1. infer解包
type Ids = number[];
type Names = string[];

type Unpacked1<T> = T extends Names ? string : T extends Ids ? number : T;

type idType1 = Unpacked1<Ids>; // idType 类型为 number
type nameType1 = Unpacked1<Names>; // nameType 类型为string

// 如果使用infer来解包，实现Unpacked
type Unpacked2<T> = T extends (infer R)[] ? R : T;
type idType2 = Unpacked2<Ids>; // idType 类型为 number
type nameType2 = Unpacked2<Names>; // nameType 类型为string


type MyResponse = Promise<number[]>;
type Unpacked<T> = T extends Promise<infer R> ? R : T;

type resType = Unpacked<MyResponse>; // resType 类型为number[]


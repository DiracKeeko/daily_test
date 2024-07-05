// type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];

// 优化一下
type MyTuple = readonly any[];
type Concat<T extends MyTuple, U extends MyTuple> = [...T, ...U];

/* 
  创建类型，完成两个类型数组的链接，也可以使用 [...T, ...U]
*/


type Concat1 = Concat<[1, 2], [3, 4]>;
type Concat2 = Concat<['1', 2, '3'], [false, boolean, '4']>;
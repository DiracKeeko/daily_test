/*
  5821 - MapTypes
  -------
  by Krzysztof "Wokay" Łokaj (@wokayme) #中等 #map #object #utils

  ### 题目

  Implement `MapTypes<T, R>` which will transform types in object T to different types defined by type R which has the following structure

  ```ts
  type StringToNumber = {
    mapFrom: string; // value of key which value is string
    mapTo: number; // will be transformed for number
  }
  ```

  ## Examples:

  ```ts
  type StringToNumber = { mapFrom: string; mapTo: number;}
  MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }
  ```

  Be aware that user can provide a union of types:
  ```ts
  type StringToNumber = { mapFrom: string; mapTo: number;}
  type StringToDate = { mapFrom: string; mapTo: Date;}
  MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }
  ```

  If the type doesn't exist in our map, leave it as it was:
  ```ts
  type StringToNumber = { mapFrom: string; mapTo: number;}
  MapTypes<{iWillBeANumberOneDay: string, iWillStayTheSame: Function}, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }
  ```

  > 在 Github 上查看：https://tsch.js.org/5821/zh-CN
*/

/* _____________ 你的代码 _____________ */
type MappingType = {
  mapFrom: any;
  mapTo: any;
}

/* 
type MappingType = Record<'mapFrom' | 'mapTo', any>;
*/

// v1 不能通过全量case
// type MapTypes<T extends Record<string, any>, R extends MappingType> = {
//   [K in keyof T]: T[K] extends R['mapFrom'] ? R['mapTo'] : T[K];
// }

// v2
type MapTypes<T extends Record<string, any>, R extends MappingType> = {
  [K in keyof T]: T[K] extends R['mapFrom'] 
    ? R extends { mapFrom: T[K], mapTo: infer V } // 通过这个判定选中Union中 T[K]匹配的R
      ? V
      : never
    : T[K];
}

// case1  v1在case1下会异常
type MapTypesRes1 = MapTypes<{ name: string, date: Date }, { mapFrom: string, mapTo: boolean } | { mapFrom: Date, mapTo: string }>

/* 
// v1 的结果
type MapTypesRes1 = {
    name: string | boolean;
    date: string | boolean;
}
*/
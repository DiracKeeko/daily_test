const allMessageArr = [
  {
    orderBookId: '000001.OF',
    showCode: '000001'
  },
  {
    orderBookId: '000002.SH',
    showCode: '000002'
  },
  {
    orderBookId: '000003.SZ',
    showCode: '000003'
  },
  // ...
  {
    orderBookId: '012831.OF',
    showCode: '012831'
  }
];

const showCodeArr = [
  '000001',
  '005827',
  //... ,
  '012831'
];

const messageMap = allMessageArr.reduce((map, message) => {
  map[message.showCode] = message;
  return map;
}, {})

console.log("messageMap->", messageMap);

const orderBookArr = showCodeArr.map(showCode => messageMap[showCode]?.orderBookId);
console.log(orderBookArr);
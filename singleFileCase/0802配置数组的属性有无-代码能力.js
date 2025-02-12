// 代码能力

/* 
js开发中  现有配置数组如下 

// 图组件库的配置 
{
  data: {},
  layout: {},
  plugins: [
    { type: 'tooltip' },
    { type: 'miniMap' }
  ]
}

如何仅在nodesData.length>10时 出现配置 { type: 'miniMap' } 

*/

const nodesData = [];

const config = {
  data: {},
  layout: {},
  plugins: [
    { type: 'tooltip' },
    nodesData.length > 10 && { type: 'miniMap' }
  ].filter(Boolean)
}

/* 
  举例: 当nodesData.length 的值为 3 时
  plugin的值就是
  [
    { type: 'tooltip' },
    false
  ].filter(Boolean) 的结果

  filter(Boolean) 可以过滤掉 "", false, undefined, null 这种Boolean(val) 为false的变量值
*/

const res = [{}, [], 3, "", false, undefined, null, true].filter(Boolean);
console.log("res->", res); // res-> [ {}, [], 3, true ]

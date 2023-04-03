function getHexOpacityColor(color, percent) {
  const colorUpperCase = color.toUpperCase();
  let opacity = parseInt(255 * percent, 10)
    .toString(16)
    .toUpperCase(); // 转出的十六进制默认小写,转为大写
  if (opacity === '0') {
    opacity = '00';
  }
  return `${colorUpperCase}${opacity}`;
}

/**
 * 对16进制的颜色 (HEX格式)
 * 基础模式是"#1BFFCD"这种形式(6位16进制数字) - 分别用2位十六进制数字表示rgb (rr gg bb)
 *
 * HEX格式的颜色也可以设置透明度，在基础的6位16进制数字之后加上2位十六进制数字表示透明度
 *  如resColor1, resColor2, ..., resColor5
 *
 * 如果用vscode浏览本js文件，并安装了Color Highlight插件，则可以看到color
 */
const testColor = '#1BFFCD';
const resColor1 = '#1BFFCDFF'; // 颜色最亮，等同于 #1BFFCD
const resColor2 = '#1BFFCDDD';
const resColor3 = '#1BFFCD88';
const resColor4 = '#1BFFCD33';
const resColor5 = '#1BFFCD11'; // 颜色最深，基本黑色了
const resColor6 = '#1BFFCD11'; // 颜色最深，基本黑色了
// const resColor7 = '#1BFFCD0'; // 不是一个HEX颜色

const resByTest1 = getHexOpacityColor(testColor, 1);
const resByTest2 = getHexOpacityColor(testColor, 0.5);
const resByTest3 = getHexOpacityColor(testColor, 0.1);
const resByTest4 = getHexOpacityColor(testColor, 0);
console.log('getHexOpacityColor 1->', resByTest1);
// getHexOpacityColor-> #1BFFCDFF
console.log('getHexOpacityColor 0.5->', resByTest2);
// getHexOpacityColor-> #1BFFCD7F
console.log('getHexOpacityColor 0.1->', resByTest3);
// getHexOpacityColor-> #1BFFCD19
console.log('getHexOpacityColor 0->', resByTest4);
// getHexOpacityColor-> #1BFFCD00

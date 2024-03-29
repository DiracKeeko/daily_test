// 将hexColor变更为非缩写形式 #abc => #aabbcc 不改变大小写
function expandHexColor(hexColor) {
  // 检查是否为缩写形式（4个字符 如#abc）
  if (hexColor.length === 4) {
    // 如果是缩写形式，进行转换
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const result = hexColor.replace(shorthandRegex, function (_, r, g, b) {
      return "#" + r + r + g + g + b + b;
    });
    return result;
  }
  // 不是缩写形式，直接输出原值
  return hexColor;
}

// 测试
// const color1 = "#f00"; // 缩写形式，将被转换为 "#ff0000"
// const color2 = "#369"; // 缩写形式，将被转换为 "#336699"
// const color3 = "#AABBCC"; // 非缩写形式，原值不变

// console.log(expandHexColor(color1)); // 输出 "#ff0000"
// console.log(expandHexColor(color2)); // 输出 "#336699"
// console.log(expandHexColor(color3)); // 输出 "#AABBCC"


function getHexOpacityColor(color, percent) {
  const nonAbbreviationHexColor = expandHexColor(color);
  const colorUpperCase = nonAbbreviationHexColor.toUpperCase();
  let opacity = parseInt(255 * percent, 10)
    .toString(16)
    .toUpperCase(); // 转出的十六进制默认小写,转为大写
  if (opacity.length < 2) {
    opacity = '0' + opacity;
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

// 这样记, opacity越小，越接近背景色。
const testColor = '#1BFFCD'; // 默认的情况下 opacity: 1; 即尾部添加FF
const resColor1 = '#1BFFCDFF'; // 不透明度最高，等同于 #1BFFCD
const resColor2 = '#1BFFCDDD';
const resColor3 = '#1BFFCD88';
const resColor4 = '#1BFFCD33';
const resColor5 = '#1BFFCD11'; // 不透明度很低，基本黑色了(因为黑色背景)
const resColor6 = '#1BFFCD00'; // 不透明度最低，等同于背景色(黑色)
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
console.log('getHexOpacityColor 0.05->', getHexOpacityColor(testColor, 0.05));
// getHexOpacityColor-> #1BFFCD02
console.log('getHexOpacityColor 0->', resByTest4);
// getHexOpacityColor-> #1BFFCD00


const resByTest5 = getHexOpacityColor("#AAA", 0.5);
console.log('getHexOpacityColor 0->', resByTest5);
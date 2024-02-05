const reg1 = new RegExp("ab", "i");
const str1 = "a";
let result = reg1.test(str1);
console.log(result); // false
console.log(reg1.test("ab")); // true
console.log(reg1.test("Absic")); // true

const reg2 = /[0-9]{4}/g; // 匹配任意四个连续的数字 全局模式
const str2 = "ac1233cc8888";
const res2 = reg2.exec(str2);
console.log(res2); // [ '1233', index: 2, input: 'ac1233cc8888', groups: undefined ]


// const regStartWithAtSame = /^@(\/.*|$)/; 
// 上下两个正则没什么区别  (?: ...) 表示非捕获型分组
const regStartWithAt = /^@(?:\/.*|$)/;
console.log(regStartWithAt.test("@")); // true
console.log(regStartWithAt.test("@utils")); // false
console.log(regStartWithAt.test("@/utils")); // true
console.log(regStartWithAt.test("@/components/common")); // true
console.log(regStartWithAt.test("@/")); // true

console.log("=============同级文件 ./开头 尾缀不能带.js .ts等 ===========");
const sameFolderReg = /^(\.\/\w+)(\/\w+)*$/;
console.log("sameFolderReg->", sameFolderReg.test("file")); // false
console.log("sameFolderReg->", sameFolderReg.test("./file")); // true
console.log("sameFolderReg->", sameFolderReg.test("./folder/file")); // true
console.log("sameFolderReg->", sameFolderReg.test("./folder/folder1/file")); // true
console.log("sameFolderReg->", sameFolderReg.test("./folder/folder1/012file")); // true
console.log("sameFolderReg->", sameFolderReg.test("./folder/folder1/file.js")); // false

console.log("=============上级文件 多个(../)开头 尾缀不能带.js .ts等 ===========");
const highLevelFolderReg = /^(\.\.\/)+\w+(\/\w+)*$/;
console.log("highLevelFolderReg->", highLevelFolderReg.test("file")); // false
console.log("highLevelFolderReg->", highLevelFolderReg.test("../file")); // true
console.log("highLevelFolderReg->", highLevelFolderReg.test("../../folder/file")); // true
console.log("highLevelFolderReg->", highLevelFolderReg.test("../folder/folder1/file")); // true
console.log("highLevelFolderReg->", highLevelFolderReg.test("../folder/folder1/012file")); // true
console.log("highLevelFolderReg->", highLevelFolderReg.test("../folder/folder1/012file.js")); // false

console.log("=============上一级文件 单个(../)开头 尾缀不能带.js .ts等 ===========");
const superLevelFolderReg = /^\.\.\/\w+(\/\w+)*$/;
console.log("superLevelFolderReg->", superLevelFolderReg.test("file")); // false
console.log("superLevelFolderReg->", superLevelFolderReg.test("../file")); // true
console.log("superLevelFolderReg->", superLevelFolderReg.test("../../folder/file")); // false
console.log("superLevelFolderReg->", superLevelFolderReg.test("../folder/folder1/file")); // true

console.log("=============至少上2级文件 单个(../)开头 尾缀不能带.js .ts等 ===========");
const upperAtLeast2LevelFolderReg = /^(\.\.\/){2,}\w+(\/\w+)*$/;
console.log("upperAtLeast2LevelFolderReg->", upperAtLeast2LevelFolderReg.test("file")); // false
console.log("upperAtLeast2LevelFolderReg->", upperAtLeast2LevelFolderReg.test("../file")); // false
console.log("upperAtLeast2LevelFolderReg->", upperAtLeast2LevelFolderReg.test("../../folder/file")); // false

console.log("=============css===========");
const styleRegLessAndCss = /^\.?\.\/\w+(\/\w+)*(\.(less|css))$/;
console.log("styleRegLessAndCss->", styleRegLessAndCss.test("styles.css")); // false;
console.log("styleRegLessAndCss->", styleRegLessAndCss.test("styles.less")); // false;
console.log("styleRegLessAndCss->", styleRegLessAndCss.test("./test.less")); // true
console.log("styleRegLessAndCss->", styleRegLessAndCss.test("../test.less")); // true
console.log("styleRegLessAndCss->", styleRegLessAndCss.test("../folder/test.less")); // true


const highLevelFolderCSSReg = /^(\.\.\/)+\w+(\/\w+)*(\.(less|css))$/;
const sameFolderCSSReg = /^(\.\/\w+)(\/\w+)*(\.(less|css))$/;
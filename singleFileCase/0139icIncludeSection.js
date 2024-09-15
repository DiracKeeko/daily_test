/**
 * 检查数组 arr 中是否包含一个子数组 section
 * @param {*} section 
 * @param {*} arr 
 * @returns 
 */

// v1
function icIncludeSection(section, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === section[0]) {
      for (let j = 0; j < section.length; j++) {
        if (arr[i + j] !== section[j]) {
          break;
        }
        if (j === section.length - 1) {
          return true;
        }
      }
    }
  }
  return false;
}

// v2
function icIncludeSection(section, arr) {
  const sectionLength = section.length;
  
  for (let i = 0; i <= arr.length - sectionLength; i++) {
    if (arr.slice(i, i + sectionLength).every((val, index) => val === section[index])) {
      return true;
    }
  }
  return false;
}


const section = [1, 4];
const arr = [3,2,1,1,4,7];

console.log("icIncludeSection", icIncludeSection(section, arr));
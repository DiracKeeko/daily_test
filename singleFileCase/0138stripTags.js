// 去除全量的HTML标签
function stripHTMLTags(content) {
  return content.replace(/<\/?[^>]+(>|$)/g, "");
}

const content = "<div>Hello <strong>world!</strong></div>";
const pureText = stripHTMLTags(content);
console.log(pureText); // 输出: "Hello world!"

// 去除Img标签
function removeImgTags(content) {
  return content.replace(/<img[^>]*>/g, "");
}

const imgContent = `<div>Hello <strong>world!</strong><img src="image.jpg" alt="image"> How are you?</div>`;
const result = removeImgTags(imgContent);
console.log(result); // 输出: "<div>Hello <strong>world!</strong> How are you?</div>"

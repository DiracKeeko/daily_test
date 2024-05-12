// 模拟请求列表
const requestList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 1000);
  });
};

const ulbox = document.getElementById('ulbox');

// 模拟请求数据渲染列表
const renderList = async () => {
  const list = await requestList();
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    li.innerText = list[i];
    fragment.appendChild(li);
  }
  ulbox.appendChild(fragment);
};

// 模拟对列表进行轻微修改
const addList = async () => {
  const li = document.createElement('li');
  li.innerText = '加上去';
  ulbox.appendChild(li);
};

(async () => {
  // 模拟请求数据渲染列表
  await renderList();
  // 模拟对列表进行轻微修改
  addList();
})();

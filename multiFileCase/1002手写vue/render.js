function h(sel, attrs, children) {
  return {
    sel,
    attrs,
    children
  };
}

function mount(vNode, container) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }

  // 1 根据sel 创建真实dom元素el 并将这个el保存到vNode的el属性 (便于访问)
  const el = (vNode.el = document.createElement(vNode.sel));

  // 3 挂载vNode中的children  递归操作
  /*
  if (vNode.children) {
    if (typeof vNode.children === 'string') {
      el.innerText = vNode.children;
    } else {
      vNode.children.forEach(item => mount(item, el));
    }
  }
  */
  // 上下都可以
  if (typeof vNode.children === 'string') {
    el.innerText = vNode.children;
  } else if (vNode.children && vNode.children.length > 0) {
    vNode.children.forEach(item => mount(item, el));
  }

  // 4 设置属性值
  if (vNode.attrs) {
    for (const key in vNode.attrs) {
      el.setAttribute(key, vNode.attrs[key]);
    }
  }

  // 2 挂载到container中去
  container.appendChild(el);
}

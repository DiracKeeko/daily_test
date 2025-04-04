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

  
  // 4 设置属性值
  if (vNode.attrs) {
    for (const key in vNode.attrs) {
      if (key.startsWith('on') && typeof vNode.attrs[key] === 'function') {
        // 4.2 增加对事件的特殊处理
        const eventType = key.slice(2).toLowerCase();
        el.addEventListener(eventType, vNode.attrs[key]);
      } else {
        // 4.1 设置属性值
        el.setAttribute(key, vNode.attrs[key]);
      }
    }
  }

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


  // 2 挂载到container中去
  container.appendChild(el);
}

/* 
  子元素: 真实的html元素
*/
function patch(oldVNode, newVNode) {
  if (oldVNode.sel !== newVNode.sel) {
    // 1. 新旧vNode的类型不同(如 ul -> div)，删掉旧html的全部子元素，根据新vNode创建新子元素
    const container = oldVNode.el.parentNode;
    removeAllChildren(container);
    mount(newVNode, container);
  } else {
    // 更新属性attrs
    const containerEl = oldVNode.el;
    const oldAttrs = oldVNode.attrs || {};
    const newAttrs = newVNode.attrs || {};

    // 移除旧属性
    for (const key in oldAttrs) {
      if (key.startsWith('on') && typeof oldAttrs[key] === 'function') {
        const eventType = key.slice(2).toLowerCase();
        containerEl.removeEventListener(eventType, oldAttrs[key]);
      } else {
        containerEl.removeAttribute(key);
      }
    }

    // 添加新属性
    for (const key in newAttrs) {
      if (key.startsWith('on') && typeof newAttrs[key] === 'function') {
        const eventType = key.slice(2).toLowerCase();
        containerEl.addEventListener(eventType, newAttrs[key]);
      } else {
        containerEl.setAttribute(key, newAttrs[key]);
      }
    }
    
  
    // 更新children
    // 2. 新旧vNode的类型相同(如都是ul) 进入2.x 开始比较vNode.children
    if (typeof newVNode.children === 'string') {
      // 2.1 新vNode的children是 string
      oldVNode.el.innerHTML = newVNode.children; // 这里innerHTML 和 innerText的效果一样
    } else if (typeof oldVNode.children === 'string') {
      // 2.2 新vNode的children不是string, 且旧vNode的children是string
      // oldVNode.el.innerHTML = '';
      newVNode.children.forEach((item) => mount(item, oldVNode.el));
    } else {
      // 2.3 新旧 vNode.children 都是array
      const oldLength = oldVNode.children.length;
      const newLength = newVNode.children.length;
      const commonLength = Math.min(oldLength, newLength);

      for (let i = 0; i < commonLength; i++) {
        patch(oldVNode.children[i], newVNode.children[i]);
      }

      if (newLength > oldLength) {
        for (let i = oldLength; i < newLength; i++) {
          mount(newVNode.children[i], containerEl);
        }
      } else if (newLength < oldLength) {
        for (let i = newLength; i < oldLength; i++) {
          containerEl.removeChild(oldVNode.children[i].el);
        }
      }
    }
  }
}

function removeAllChildren(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
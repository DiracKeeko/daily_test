function createApp(root) {
  return {
    mount(selector) {
      oldValue = root.render();
      mount(oldValue, selector);
    }
  }
}


function mount(vNode, container) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }

  const el = (vNode.el = document.createElement(vNode.sel));

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

  if (typeof vNode.children === 'string') {
    el.innerText = vNode.children;
  } else if (vNode.children && vNode.children.length > 0) {
    vNode.children.forEach(item => mount(item, el));
  }

  container.appendChild(el);
}

function h(sel, attrs, children) {
  return {
    sel,
    attrs,
    children
  };
}
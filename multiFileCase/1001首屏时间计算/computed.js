// 首屏时间计算
// https://mp.weixin.qq.com/s/NOMk4OMsKoJzoEjvit_ZKQ

const observerData = [];

let observer = new MutationObserver(() => {
  // 计算每次DOM修改时，距离页面刚开始加载的时间
  const start = window.performance.timing.navigationStart;
  // const start = window.performance.getEntriesByType('navigation')[0].startTime; // 始终是0
  const time = new Date().getTime() - start;

  const body = document.querySelector('body');
  const score = computedScore(body, 1);
  // 加到数组 observerData 中
  observerData.push({
    score,
    time
  });

  // 输出observerData
  console.log("observerData->", JSON.parse(JSON.stringify(observerData)));

  // complete时去调用 unmountObserver
  if (document.readyState === 'complete') {
    // 只计算5秒内渲染时间
    unmountObserver(5000)
  }
});

observer.observe(document, {
  childList: true,
  subtree: true
});


function computedScore(element, layer) {
  let score = 0;
  const tagName = element.tagName;
  // 排除这些标签的情况
  if (tagName !== 'SCRIPT' && tagName !== 'STYLE' && tagName !== 'META' && tagName !== 'HEAD') {
    const children = element.children;
    if (children && children.length) {
      // 递归计算分数
      for (let i = 0; i < children.length; i++) {
        score += computedScore(children[i], layer + 1);
      }
    }

    score += 1 + 0.5 * layer;
  }
  return score;
}


// 计算首屏时间
function getFirstScreenTime() {
  let data = null
  for (let i = 1; i < observerData.length; i++) {
    // 计算幅度
    const differ = observerData[i].score - observerData[i - 1].score
    // 取最大幅度，记录对应时间
    if (!data || data.rate <= differ) {
      data = {
        time: observerData[i].time,
        rate: differ
      }
    }
  }
  return data
}

let timer = null

function unmountObserver(delay) {
  if (timer) return
  timer = setTimeout(() => {
    // 输出首屏时间
    console.log(getFirstScreenTime())
    // 终止MutationObserver的监控
    observer.disconnect()
    observer = null
    clearTimeout(timer)
  }, delay)
}

<template>
  <label class="input-container">
    <div ref="label" class="label">Enter Your Username</div>
    <input class="input" v-model="value"  @focus="onFocus" @blur="onBlur"></input>
    <div class="line" ref="line"></div>
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const label = ref<HTMLDivElement | null>(null)
const line = ref<HTMLDivElement | null>(null)
const onFocus = () => {
    // 聚焦时，修改样式
    const labelEle = label.value
    const lineEle = line.value
    if (labelEle && lineEle)  {
        lineEle.style.width = '100%'
        labelEle.style.left = '0px'
        labelEle.style.top = '-30px'
       
    }
}
const onBlur = () => {
    // 如果有值，则不恢复
    if (value.value) return
    // 失焦时，恢复原装
    const labelEle = label.value
    const lineEle = line.value
    if (labelEle && lineEle)  {
        lineEle.style.width = '0px'
        labelEle.style.left = '5px'
        labelEle.style.top = '-4px'
        
    }
}
</script>

<style lang="less" scoped>
.input-container {
  display: block;
  position: relative;
  width: 100%;
  border-bottom: 1px solid black;
  .input {
    font-size: 16px;
    padding: 5px;
    width: 100%;
  }
  .label {
    font-size: 20px;
    position: absolute;
    left: 5px;
    top: 1px;
    user-select: none;
    font-weight: 500;
  }
  .line {
    height: 3px;
    width: 0;
    background-color: black;
  }
}
</style>
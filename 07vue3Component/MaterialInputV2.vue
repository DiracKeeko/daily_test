<template>
  <label class="input-container">
    <div class="label" :class="{ 'label-active': isActive || value }">Enter Your Username</div>
    <input class="input" v-model="value" @focus="isActive = true" @blur="isActive = false" />
    <div class="line" :class="{ 'line-active': isActive || value }"></div>
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
const isActive = ref(false);
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
    border: none;
    outline: none;
  }

  .label {
    font-size: 20px;
    position: absolute;
    left: 5px;
    top: -4px;
    user-select: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .label-active {
    left: 0;
    top: -30px;
    font-size: 16px;
  }

  .line {
    height: 3px;
    width: 0;
    background-color: black;
    transition: width 0.3s ease;
  }

  .line-active {
    width: 100%;
  }
}
</style>

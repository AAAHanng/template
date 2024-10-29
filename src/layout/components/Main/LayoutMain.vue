<!--
 * @Author AAAhang
 * @description
 * @Date: 2024/10/29 下午3:42
 * @LastEditors: AAAhang
 * @LastEditTime: 2024/10/29 下午3:42
-->
<template>
  <router-view v-slot="{ Component }">
    <Transition name="slide-fade">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

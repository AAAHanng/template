<!--
 * @Author AAAhang
 * @description
 * @Date: 2024/10/29 下午3:42
 * @LastEditors: AAAhang
 * @LastEditTime: 2024/10/29 下午3:42
-->
<template>
  <div class="hamburger-container" @click="toggleClick">
    <Transition name="slide-fade">
      <SvgIcon :name="icon" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLayoutStore } from "@/store/modules/layout.ts";

const store = useLayoutStore();
const toggleClick = () => {
  store.triggerSidebarOpened();
};
const icon = computed(() => (store.sidebarOpened ? "a-cebianlanfenleizhedie" : "a-fenleizhediecebianlan"));
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  display: flex;
  align-items: center;
  .hamburger {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
}

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

<!-- 
 * @Author AAAhang
 * @description 
 * @Date: 2024/10/29 下午5:00
 * @LastEditors: AAAhang
 * @LastEditTime: 2024/10/29 下午5:00
-->
<template>
  <h1 id="logo">
    <el-image :src="logo" style="width: 40px; height: 40px">
      <template #error>
        <div class="image-slot">
          <SvgIcon name="example-shouye" />
        </div>
      </template>
    </el-image>
    <Transition name="slide-fade">
      <h1 class="logo-title" v-if="!sidebarOpened">测试系统</h1>
    </Transition>
  </h1>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.png'
import { useLayoutStore } from "@/store/modules/layout.ts";
import { computed} from "vue";

const store = useLayoutStore()
const sidebarOpened = computed(()=>store.sidebarOpened)
</script>

<style scoped lang="scss">
@import '@/styles/mixin';
#aside-warp {
  display: flex;
  flex-direction: column;
  height: 100%;
}
#logo {
  @include center-flex;
}
.aside-menu {
  flex: 1;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.2s;
}

.slide-fade-leave-active {
  transition: all 0.2s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.logo-title {
  padding-left: 10px;
  white-space: nowrap;
}
</style>
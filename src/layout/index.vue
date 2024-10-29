<!-- 
 * @Author AAAhang
 * @description 
 * @Date: 2024/10/29 下午3:42
 * @LastEditors: AAAhang
 * @LastEditTime: 2024/10/29 下午3:42
-->
<template>
  <el-container class="layout" style="height: 500px">
    <el-aside width="250px" :class="[!sidebarOpened ? 'openSidebar' : 'hide-sidebar-container']">
      <el-scrollbar>
        <LayoutAside></LayoutAside>
        <SidebarMenu></SidebarMenu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header height="60px">
        <LayoutHeader></LayoutHeader>
      </el-header>

      <el-main class="views">
        <LayoutMain></LayoutMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutAside from "@/layout/components/Menu/LayoutAside.vue";
import SidebarMenu from "@/layout/components/Menu/SidebarMenu.vue";
import LayoutMain from "@/layout/components/Main/LayoutMain.vue";
import LayoutHeader from "@/layout/components/Header/LayoutHeader.vue";
import { computed } from "vue";
import { useLayoutStore } from "@/store/modules/layout.ts";
const globalLayout = useLayoutStore();
const sidebarOpened = computed(() => globalLayout.sidebarOpened);
</script>

<style lang="scss" scoped>
@import "@/styles/variables.module.scss";

.el-container {
  width: 100%;
  height: 100% !important;
}
.asides {
  overflow: hidden;
}

.el-aside {
  background-color: $menuBg;
  width: $sideBarWidth;
  transition: width 0.5s;
}
.el-header {
  box-shadow: $Shadow;
  padding: 0;
}
.el-main {
  padding: 10px 12px;
}
.hide-sidebar-container {
  width: $hideSideBarWidth;
}
.openSidebar {
  width: $sideBarWidth;
}
.views {
  overflow: hidden;
}
</style>

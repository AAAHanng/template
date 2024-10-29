<!-- 
 * @Author AAAhang
 * @description 
 * @Date: 2024/10/29 下午5:30
 * @LastEditors: AAAhang
 * @LastEditTime: 2024/10/29 下午5:30
-->
<template>
  <el-sub-menu v-if="route.children && route.children.length > 0" :index="route.path">
    <template #title>
      <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
    </template>
    <SubMenu v-for="item in route.children" :key="item.path" :route="item" />
  </el-sub-menu>
  <el-menu-item v-else-if="!route.meta.hidden" :index="route.path">
    <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
  </el-menu-item>
</template>

<script setup lang="ts">
// 定义 props
import MenuItem from "@/layout/components/Menu/MenuItem.vue";

defineProps({
  route: {
    type: Object,
    required: true
  }
});
</script>

<style scoped></style>

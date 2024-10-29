<!-- 
 * @Author AAAhang
 * @description 
 * @Date: 2024/10/29 下午5:29
 * @LastEditors: AAAhang
 * @LastEditTime: 2024/10/29 下午5:29
-->
<template>
  <el-menu
    router
    :default-active="activeMenu"
    background-color="#ffffff"
    :text-color="store.cssVar.menuText"
    :active-text-color="store.cssVar.menuActiveText"
    :unique-opened="false"
    :collapse="store.sidebarOpened"
  >
    <SubMenu v-for="item in routers" :key="item.path" :route="item"></SubMenu>
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import SubMenu from "@/layout/components/Menu/SubMenu.vue";
import { useLayoutStore } from "@/store/modules/layout.ts";

const route = useRoute()

const store = useLayoutStore()

// eslint-disable-next-line no-undef
const router = useRouter()
const routers = router.options.routes
console.log(routers);
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style scoped lang="scss">

</style>
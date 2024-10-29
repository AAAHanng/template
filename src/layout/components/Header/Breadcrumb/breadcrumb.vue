<!--
 * @Author AAAhang
 * @description
 * @Date: 2024/10/29 下午3:42
 * @LastEditors: AAAhang
 * @LastEditTime: 2024/10/29 下午3:42
-->
<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
      <!-- 不可点击项 -->
      <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{ item.meta.title }}</span>
      <!-- 可点击项 -->
      <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const breadcrumbData = ref([]); // 存放计算出的面包屑数据
const route = useRoute();
const router = useRouter();

const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(r => r.meta && r.meta.title);
};

watch(
  route,
  () => {
    getBreadcrumbData();
  },
  {
    immediate: true
  }
);

// 跳转路由
const onLinkClick = item => {
  router.push(item.path);
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 60px;
  margin-left: 8px;

  :deep(.no-redirect) {
    color: #97a8be;
    cursor: text;
  }

  .redirect {
    color: #666;
    font-weight: 600;

    &:hover {
      color: v-bind(linkHoverColor); // 应对主题切换
    }
  }
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>

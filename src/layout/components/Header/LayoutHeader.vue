<!--
 * @Author AAAhang
 * @description
 * @Date: 2024/10/29 下午3:42
 * @LastEditors: AAAhang
 * @LastEditTime: 2024/10/29 下午3:42
-->
<template>
  <div class="navbar">
    <breadcrumb class="breadcrumb-container" />
    <hamburger class="hamburger-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" size="default"></el-avatar>
          <SvgIcon name="yonghu" width="30px" height="30px" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>

            <a target="_blank" href="">
              <el-dropdown-item>Vue3</el-dropdown-item>
            </a>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Hamburger from "./hamburger.vue";
import breadcrumb from "./Breadcrumb/breadcrumb.vue";
</script>

<style lang="scss" scoped>
.navbar {
  line-height: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .right-menu {
    line-height: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    :deep(.right-menu-item) {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    :deep(.avatar-container) {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        display: flex;
        align-items: center;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>

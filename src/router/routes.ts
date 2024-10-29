import { RouteRecordRaw } from "vue-router";

// 存放路由
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    meta: {
      title: "首页",
      icon: "shouye",
      hidden: false
    },
    redirect: "/index",
    component: () => import("@/layout/index.vue"),
    // component: () => import("@/layouts/indexAsync.vue"),
    children: []
  },
  {
    path: "/user",
    component: () => import("@/layout/index.vue"),
    name: "user",
    meta: {
      title: "用户",
      icon: "yonghu"
    },
    children: [
      {
        path: "/index",
        name: "userIndex",
        component: () => import("@/views/home-page/homeView.vue"),
        meta: {
          hidden: true
        }
      },
      {
        path: "/user",
        name: "userInfo",
        component: () => import("@/views/user-page/user.vue"),
        meta: {
          title: "我的",
          icon: "lianjie_link"
        }
      },
      {
        path: "/test",
        name: "test",
        component: () => import("@/views/test-page/index.vue"),
        meta: {
          title: "信息",
          icon: "xinfeng1_envelope-one"
        }
      }
    ]
  }
];

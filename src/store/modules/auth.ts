import { defineStore, StoreDefinition } from "pinia";

export const useAuthStore: StoreDefinition = defineStore("AuthStore", {
  state: () => ({
    // 菜单权限列表
    authMenuList: []
  }),
  getters: {
    // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 isHide == true
    // showMenuListGet: () => getShowMenuList(),
  }
});

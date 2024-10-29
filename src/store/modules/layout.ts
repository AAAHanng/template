import { defineStore } from 'pinia'
import variables from '@/styles/variables.module.scss'
import type { LayoutState } from "@/store/interface/gabal.ts";

export const useLayoutStore = defineStore('layout', {
  state: ():LayoutState => ({
    showLogo: '',
    showTabs: '',
    sidebarList: [],
    sidebarOpened: false
  }),

  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    }
  },

  getters: {
    isSidebarOpened: state => state.sidebarOpened,
    cssVar: () => variables
  }
})

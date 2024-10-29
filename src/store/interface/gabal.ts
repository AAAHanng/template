export interface LayoutState {
  showLogo: string;           // showLogo 是一个字符串
  showTabs: string;           // showTabs 是一个字符串
  sidebarList: Array<any>;    // sidebarList 是一个数组，具体类型根据你的需求调整
  sidebarOpened: boolean;      // sidebarOpened 是一个布尔值
}

/* Menu */
export declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    component?: string | (() => Promise<unknown>);
    redirect?: string;
    meta: MetaProps;
    children?: MenuOptions[];
  }
  interface MetaProps {
    icon: string;
    title: string;
  }
}
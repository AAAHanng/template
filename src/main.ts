import { createApp } from "vue";
import App from "./App.vue";
import "element-plus/dist/index.css";
import router from "./router";
import store from "./store";
import SvgIcon from "./components/SvgIcon/svg-index.vue"; // 导入 SvgIcon 组件
import "@/assets/icon/iconfont.js";

const app = createApp(App);

app.use(store).use(router).component("SvgIcon", SvgIcon).mount("#app");

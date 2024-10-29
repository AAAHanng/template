import {ConfigEnv, defineConfig, loadEnv, UserConfig} from 'vite'
import {resolve} from "path";
import vue from '@vitejs/plugin-vue';

export default defineConfig(({mode }: ConfigEnv): UserConfig => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      }
    },
    base: env.BASE_URL || '/', // 设置基础路径
    plugins: [vue()], // 插件数组
    server: {
      host: env.VITE_HOST || 'localhost',
      port: Number(env.VITE_PORT) || 3000,
    },
    build: {
      outDir: 'dist',
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/var.scss";`
        }
      }
    },
  };
});

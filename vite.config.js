import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => (
  {
    plugins: [
      vue(),
      vueJsx(),
      // VueDevTools(),
      AutoImport({
        dts: true,
        imports: ['vue', 'vue-router', 'pinia'],
      }),
      Components({
        dts: true,
        resolvers: [VantResolver()],
        dirs: ['src/components'],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        _a: fileURLToPath(new URL('./src/api', import.meta.url)),
        _c: fileURLToPath(new URL('./src/components', import.meta.url)),
        _i: fileURLToPath(new URL('./src/assets/images', import.meta.url)),
        _u: fileURLToPath(new URL('./src/utils', import.meta.url)),
      },
    },
    base: './',
    server: {
      open: true,
    },
    esbuild: {
      drop: command === 'build' ? ['console', 'debugger'] : [],
    },
  }
))

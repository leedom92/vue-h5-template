/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => (
  {
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
      AutoImport({
        dts: true,
        imports: ['vue', 'vue-router', 'pinia', 'vitest'],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
        },
      }),
      Components({
        dts: true,
        resolvers: [VantResolver()],
        dirs: ['src/components'],
      }),
      // https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.md
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
        customDomId: '__svg__icons__dom__',
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
    test: {
      environment: 'jsdom',
    },
  }
))

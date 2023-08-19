import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    Components({
      resolvers: [VantResolver()],
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
}))

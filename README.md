# vue-h5-template
🍰Vue移动端项目模版 Vite + Vue Router + Vuex + Vant + Sass + NProgress

## Demo
[The Demo](https://leedom.me/vue-h5-template/)

## Installation

```bash
# git clone, then remove the .git
git clone https://github.com/leedom92/vue-h5-template.git

# or you can use degit, .git is removed automatically
npx degit leedom92/vue-h5-template vue-h5-template

cd vue-h5-template

pnpm install

pnpm serve
```
## <span id="todo-list">Todo List</span>

- [x] [Vue 2.7+](https://v2.vuejs.org/) ✔
- [x] [Vite](https://vitejs.dev/) ✔
- [x] [Vue Router](https://router.vuejs.org/) ✔
- [x] [Vant](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/) ✔
  - [x] [组件按需加载](#unplugin-vue-components) ✔
- [x] [Tailwindcss](https://tailwindcss.com/) ✔
- [x] [NProgress.js进度条](https://github.com/rstacruz/nprogress) ✔
- [x] [animate.css动画库](https://animate.style/) ✔
- [x] Sass ✔
- [x] [alias别名](#alias) ✔
- [ ] [Pinia](https://pinia.vuejs.org/)
- [ ] Axios封装
- [ ] 统一开发规范
- [ ] 打包删除console.log打印


### <span id="unplugin-vue-components">✔ 组件按需加载</span>
1. 安装插件
``` sh
# 通过 pnpm 安装
pnpm add unplugin-vue-components -D
```

2. 配置插件
```js
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};

```

**[return todo list](#todo-list)**

### <span id="alias">✔ alias别名</span>

``` js
// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '_c': fileURLToPath(new URL('./src/components', import.meta.url)),
      '_i': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '_u': fileURLToPath(new URL('./src/utils', import.meta.url)),
    }
  }
})

```

**[return todo list](#todo-list)**

## License

[MIT](https://github.com/leedom92/vue-h5-template/blob/master/LICENSE)

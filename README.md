# vue-h5-template

🍰「Vue移动端项目模版」Vite + Vue Router + Vant + Tailwindcss + Sass + NProgress + ESLint

若您习惯 `webpack` 开发，请[戳这里](https://github.com/leedom92/vue-h5-template/tree/vue-h5-webpack-template)传送

若您习惯 `vue 2` + `vite` 开发，请[戳这里](https://github.com/leedom92/vue-h5-template/tree/vue2-h5-vite-template)传送

## Demo

[Click here](https://vue-h5-template.netlify.app)

## Installation

```bash
# .git folder is removed automatically
npx degit leedom92/vue-h5-template vue-h5-template 

cd vue-h5-template

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm

pnpm dev
```

## <span id="todo-list">Todo List</span>

- [x] Vue3
- [x] Vite
- [x] Vue Router
- [x] Pinia
- [x] Vant
  - [x] [组件按需加载](#unplugin-vue-components)
- [x] [api自动导入](#unplugin-auto-import)
- [x] Tailwindcss
- [x] NProgress.js进度条
  - [x] [NProgress颜色自定义](#nprogress)
- ~~animate.css动画库~~
- [x] Sass
- [x] [Alias别名](#alias)
- [x] [Axios封装](#axios)
- [x] [ESLint](#standard)
- [x] [打包移除console和debugger](#drop)
- [x] 提交代码 `eslint` 检测，并自动修复

> 去掉了 `animate.css` 依赖，我觉得该动画库对页面而言只是锦上添花，该项目作为模版，无需过多的可有可无的功能。
> 若页面跳转需要有过渡效果，可以一用。

### <span id="unplugin-vue-components">组件按需加载</span>

1. 安装插件

``` sh
# 通过 pnpm 安装 unplugin-vue-components
pnpm add unplugin-vue-components -D
```

2. 配置插件

```js
// vite.config.js
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

### <span id="unplugin-auto-import">api自动导入</span>

1. 安装插件

``` sh
# 通过 pnpm 安装 unplugin-auto-import
pnpm add unplugin-auto-import -D
```

2. 配置插件

```js
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'

export default {
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue生态库相关api
    }),
  ],
};

```

**[🔝](#todo-list)**

### <span id="nprogress">NProgress颜色自定义</span>

``` css
/* assets/styles/vars.css 修改颜色即可 */
:root {
  --nprogress-color: #40b982;
}

```

**[🔝](#todo-list)**

### <span id="alias">alias别名</span>

``` js
// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '_a': fileURLToPath(new URL('./src/api', import.meta.url)),
      '_c': fileURLToPath(new URL('./src/components', import.meta.url)),
      '_i': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '_u': fileURLToPath(new URL('./src/utils', import.meta.url)),
    }
  }
})

```

**[🔝](#todo-list)**

### <span id="axios">Axios封装</span>

``` js
// src/utils/request.js
service.interceptors.request.use( // 请求拦截器
  (config) => {

    // headers中加入token验证
    config.headers['Authorization'] = ''

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use( // 响应拦截器
  (response) => {
    const res = response.data
    // 根据接口返回的状态码判断
    if (+res.code === 200) {
      return res
    } else {
      ...
    }
  },
  (error) => {
    ...
  }
)

// src/api/*.js
export function login(params) {
  return request({
    loading: true, // 是否显示loading
    url: '/login', // 接口地址
    methods: 'post', // 请求方式
    ...params // 请求参数
  })
}

```

**[🔝](#todo-list)**

### <span id="standard">ESLint 统一开发规范</span>

> 使用 [`@leedomjs/eslint-config`](https://www.npmjs.com/package/@leedomjs/eslint-config) 作为ESlint默认配置

``` js
// .eslintrc.cjs 可自定义规则
module.exports = {
  extends: "@leedomjs"
  // 自定义规则
  rules: {
    
  }
}
```

**[🔝](#todo-list)**

### <span id="drop">打包移除console和debugger</span>

``` js
/**
 * vite.config.js
 * 打包默认使用 'esbuild'， 可选 'terser'
 * 有以下两种方法可在生产环境移除console和debugger
 */

// 1. build via esbuild
export default defineConfig(({ command }) => {
  return {
    esbuild: {
      drop: command === 'build' ? ['console', 'debugger'] : []
    }
  }
})

// 2. build via terser
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  }
})
```

**[🔝](#todo-list)**

## License

[MIT](https://github.com/leedom92/vue-h5-template/blob/main/LICENSE)
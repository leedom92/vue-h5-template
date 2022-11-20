# vue-h5-template
🍰Vue移动端项目模版 Vite + Vue Router + Vuex + Vant + Sass + NProgress + Eslint + Prettier

## Demo
[The Demo](https://leedom.me/vue-h5-template/)

## Installation

```bash
# git clone, then remove the .git
git clone https://github.com/leedom92/vue-h5-template.git

# or you can use degit, .git is removed automatically
degit leedom92/vue-h5-template vue-h5-template

cd vue-h5-template

pnpm install

pnpm serve
```
## <span id="todo-list">Todo List</span>

- [x] Vue 2.7+
- [x] Vite
- [x] Vue Router
- [x] Vant
  - [x] [组件按需加载](#unplugin-vue-components)
- [x] Tailwindcss
- [x] NProgress.js进度条
  - [x] [NProgress颜色自定义](#nprogress)
- [x] animate.css动画库
- [x] Sass
- [x] [alias别名](#alias)
- [ ] Pinia
- [x] [Axios封装](#axios)
- [x] [Eslint + Prettier 统一开发规范](#standard)
- [ ] 打包删除console.log打印


### <span id="unplugin-vue-components">组件按需加载</span>
1. 安装插件
``` sh
# 通过 pnpm 安装 unplugin-vue-components
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

**[🔝 return todo list](#todo-list)**

### <span id="nprogress">NProgress颜色自定义</span>

``` css
/* assets/styles/vars.css 修改颜色即可 */
:root {
  --nprogress-color: #40b982;
}

```

**[🔝 return todo list](#todo-list)**

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
      '_c': fileURLToPath(new URL('./src/components', import.meta.url)),
      '_i': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '_u': fileURLToPath(new URL('./src/utils', import.meta.url)),
    }
  }
})

```

**[🔝 return todo list](#todo-list)**

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
    params // 请求参数
  })
}

```

**[🔝 return todo list](#todo-list)**

### <span id="standard">Eslint + Prettier 统一开发规范</span>

``` js
// .prettierrc 可自定义规则
{
  "semi": false, // 句尾添加分号
  "tabWidth": 2, // 缩进字节数
  "singleQuote": true, // 使用单引号代替双引号
  "printWidth": 100, // 超过最大值换行
  "trailingComma": "none" // 在对象或数组最后一个元素后面是否加逗号
}
```

**[🔝 return todo list](#todo-list)**

## License

[MIT](https://github.com/leedom92/vue-h5-template/blob/master/LICENSE)

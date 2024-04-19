<script setup>
import { login } from '_a/user'

onMounted(() => {
  login({ username: 'leedom', code: '6666' })
})
</script>

<template>
  <div class="home p-4 pb-20">
    <h1 class="py-2">
      <span>VUE H5 开发模版</span>
    </h1>
    <h3 class=" py-4 text-2xl text-gray-600">
      A vue h5 template with vite & vant
    </h3>
    <br>
    <van-cell-group>
      <van-cell
        title="Vue 3"
        to="vue"
      />
      <van-cell
        title="Vite 5"
        url="https://vitejs.dev"
      />
      <van-cell
        title="Vue Router"
        url="https://router.vuejs.org"
      />
      <van-cell
        title="Pinia"
        url="https://pinia.vuejs.org"
      />
      <van-cell
        title="Vant组件按需加载"
        url="https://vant-contrib.gitee.io/vant/v2/#/zh-CN/"
      />
      <van-cell title="Sass" />
      <van-cell
        title="Tailwindcss"
        url="https://tailwindcss.com"
      />
      <van-cell title="NProgress.js进度条" />
      <van-cell title="Alias别名" />
      <van-cell title="ESLint" />
      <van-cell title="打包移除console和debugger" />
      <van-cell title="CSpell英文拼写问题检查" />
      <van-cell title="提交代码eslint检测，并自动修复" />
    </van-cell-group>
  </div>
</template>

<style lang="scss" scoped>
.home :deep() {

  h1 {
    padding-left: 3rem;
    background: url('@/assets/images/logo.png') no-repeat;
    background-position: 0 0.3rem;
    background-size: 2.2rem;
  }
}
</style>

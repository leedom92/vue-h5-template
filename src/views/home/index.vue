<script setup>
import { login } from '_a/user'

onMounted(() => {
  login({ username: 'leedom', code: '6666' })
})
</script>

<template>
  <div class="home p-4 pb-20">
    <div class="flex items-center py-2">
      <svg-icon name="leedom" class="size-8" />
      <span class="ml-2">VUE H5 开发模版</span>
    </div>
    <h3 class="py-4 text-2xl text-van-gray-6">
      A vue h5 template with vite & vant
    </h3>
    <br>
    <van-cell-group>
      <van-cell
        title="Vue 3"
        to="vue"
      >
        <template #icon>
          <svg-icon class="mr-2 size-6" name="vue" />
        </template>
      </van-cell>

      <van-cell
        title="Vite 5"
        url="https://vitejs.dev"
      >
        <template #icon>
          <svg-icon class="mr-2 size-6" name="vite" />
        </template>
      </van-cell>

      <van-cell
        title="Vue Router"
        url="https://router.vuejs.org"
      >
        <template #icon>
          <svg-icon class="mr-2 size-6" name="vue" />
        </template>
      </van-cell>

      <van-cell
        title="Vitest"
        url="https://vitest.dev"
      >
        <template #icon>
          <svg-icon class="mr-2 size-6" name="vitest" />
        </template>
      </van-cell>

      <van-cell
        title="Pinia"
        url="https://pinia.vuejs.org"
      >
        <template #icon>
          <svg-icon class="mr-2 size-6" name="pinia" />
        </template>
      </van-cell>
      <van-cell
        title="Vant组件按需加载"
        url="https://vant-contrib.gitee.io/vant/v2/#/zh-CN/"
      >
        <template #icon>
          <svg-icon class="mr-2 size-6" name="vant" />
        </template>
      </van-cell>

      <van-cell title="Sass">
        <template #icon>
          <svg-icon class="mr-2 size-6" name="sass" />
        </template>
      </van-cell>

      <van-cell
        title="Tailwind CSS"
        url="https://tailwindcss.com"
      >
        <template #icon>
          <svg-icon class="mr-2 size-6" name="tailwindcss" />
        </template>
      </van-cell>

      <van-cell title="ESLint">
        <template #icon>
          <svg-icon class="mr-2 size-6" name="eslint" />
        </template>
      </van-cell>

      <van-cell title="Stylelint">
        <template #icon>
          <svg-icon class="mr-2 size-6" name="stylelint" />
        </template>
      </van-cell>
      <van-cell title="NProgress.js进度条" />
      <van-cell title="Alias别名" />
      <van-cell title="CSpell英文拼写问题检查" />
      <van-cell title="提交代码时eslint和stylelint检测，并自动修复" />
      <van-cell title="打包时移除console和debugger" />
    </van-cell-group>
  </div>
</template>

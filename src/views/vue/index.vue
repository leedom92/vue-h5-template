<script setup>
import setLoading from '_u/loading'

const startLoading = () => {
  setLoading(true, '加载中...')
  setTimeout(() => {
    setLoading(false)
  }, 3000)
}

</script>

<template>
  <div class="vue flex h-screen flex-col items-center justify-center">
    <svg-icon class="w-32" name="vue" />
    <div class="mt-6">
      <a
        class="text-2xl text-van-success"
        href="https://vuejs.org"
        target="_blank"
        rel="noopener noreferrer"
      >Vue</a>
    </div>
    <div class="mt-6 flex">
      <van-button
        class="!mr-2"
        plain
        type="success"
        @click="$router.push('/')"
      >
        返回首页
      </van-button>
      <van-button plain type="primary" @click="startLoading">
        点击加载
      </van-button>
    </div>
  </div>
</template>
